(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entrada-materiais-entrada-materiais-module"],{

/***/ "+/dK":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/entrada-materiais.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL2VudHJhZGEtbWF0ZXJpYWlzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "+RfE":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/notas-fiscais/lista/duplicadas/duplicadas.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-body\">\n  <advanced-filter>\n    <form [formGroup]=\"formLotesDuplicados\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-3\">\n          <label for=\"IN_DS_OBSE\">Situação dos Lotes</label>\n          <select\n            class=\"form-control custom-select\"\n            formControlName=\"IN_DS_OBSE\"\n          >\n            <option value=\"1\">Lotes Justificados</option>\n            <option value=\"0\">Lotes não Justificados</option>\n            <option value=\"\">Exibir Todos</option>\n          </select>\n        </div>\n        <div class=\"form-group col-3\">\n          <label for=\"buscarPor\">BUSCAR POR</label>\n          <select\n            class=\"form-control custom-select\"\n            formControlName=\"buscarPor\"\n          >\n            <option value=\"DS_LOTE\" selected>Lote</option>\n            <option value=\"NR_NOTA_FISC\" >Nota Fiscal</option>\n            <option value=\"NM_MATE\">Material</option>\n          </select>\n        </div>\n\n        <div class=\"form-group col-6\">\n          <label>TERMO DE PESQUISA</label>\n          <div class=\"input-group\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"pesquisa\"\n              >\n              <div class=\"input-group-append\">\n                <span \n                  container=\"body\"\n                  placement =\"left\"\n                >\n                  <button\n                    style=\"height: 25px;\"\n                    class=\"input-group-text hover\"\n                    (click)=\"getLotesDuplicados()\"\n                    >\n                    <i class=\"fas fa-search\"></i>\n                  </button>\n                </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </advanced-filter>\n  <div [hidden]=\"!loadingDuplicadas\" class=\"col-lg-12 text-muted \">\n    <p><strong>Buscando os lotes duplicados...</strong></p>\n  </div>\n  <div class=\"row\" [hidden] = \"loadingDuplicadas || noDuplicadas\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noDuplicadas\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loadingDuplicadas || noDuplicadas\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-5': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noDuplicadas\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('DS_LOTE')\">\n                <thead-sorter value=\"Lote\" [active]=\"ORDE_BY == 'DS_LOTE'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('NR_NOTA_FISC')\">\n                <thead-sorter value=\"NF\" [active]=\"ORDE_BY == 'NR_NOTA_FISC'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                [hidden]=\"showDetailPanel\"\n                (click)=\"setOrderBy('SEQU_MATE')\">\n                <thead-sorter value=\"Sequência\" [active]=\"ORDE_BY == 'SEQU_MATE'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                [hidden]=\"showDetailPanel\"\n                (click)=\"setOrderBy('CD_MATE')\">\n                <thead-sorter value=\"Cód. Material\" [active]=\"ORDE_BY == 'CD_MATE'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                [hidden]=\"showDetailPanel\"\n                (click)=\"setOrderBy('NM_MATE')\">\n                <thead-sorter value=\"Material\" [active]=\"ORDE_BY == 'NM_MATE'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                [hidden]=\"showDetailPanel\"\n                (click)=\"setOrderBy('DS_UNID_MEDI')\">\n                <thead-sorter value=\"Un. Medida\" [active]=\"ORDE_BY == 'DS_UNID_MEDI'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                [hidden]=\"showDetailPanel\"\n                (click)=\"setOrderBy('NM_STAT')\">\n                <thead-sorter value=\"Status de Recebimento\" [active]=\"ORDE_BY == 'NM_STAT'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                [hidden]=\"showDetailPanel\"\n                (click)=\"setOrderBy('DT_INCL')\">\n                <thead-sorter value=\"Data justificativa\" [active]=\"ORDE_BY == 'DT_INCL'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th scope=\"col\" style=\"width:40px\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr  *ngFor=\"let duplicada of duplicadas \" [class.table-active]=\"duplicada?.ID_LOGI_ENMA_NOFI == duplicadaSelecionada?.ID_LOGI_ENMA_NOFI && showDetailPanel\">\n              <td  [ngClass]=\"duplicada.IN_STAT == '1' ? 'border-success' : 'border-primary'\">\n                {{duplicada.DS_LOTE }}\n              </td>\n              <td >{{ duplicada.NR_NOTA_FISC }}</td>\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(duplicada)\">{{ duplicada.SEQU_MATE | uppercase }}</td>\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(duplicada)\">{{ duplicada.CD_MATE }}</td>\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(duplicada)\">{{ duplicada.NM_MATE | uppercase }}</td>\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(duplicada)\">{{ duplicada.DS_UNID_MEDI | uppercase }}</td>\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(duplicada)\">{{ duplicada.NM_STAT | uppercase }}</td>\n              <td [hidden]=\"showDetailPanel\" (click)=\"onDetails(duplicada)\">{{ duplicada.DT_INCL | date: 'dd/MM/yyyy' }}</td>\n              <td class=\"align-middle\">\n                <span class=\"mr-3\" tooltip=\"Justificar\" *ngIf=\"duplicada.IN_STAT != 1\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(formResolucao, duplicada)\">\n                    <i class=\"fas fa-check\"></i>\n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div>\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItemsDuplicadas ? totalItemsDuplicadas : currentPage*(itemsPerPage) }} de {{ totalItemsDuplicadas }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItemsDuplicadas\"\n          (pageChanged)=\"onPageChangedDuplicadas($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\n      <detail-panel>\n        <div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label>ID</label>\n              <div *ngIf=\"duplicadaSelecionada?.ID_LOGI_ENMA_NFMA_LTDP == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"duplicadaSelecionada?.ID_LOGI_ENMA_NFMA_LTDP != null\">{{duplicadaSelecionada?.ID_LOGI_ENMA_NFMA_LTDP}}</div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label>Lote</label>\n              <div *ngIf=\"duplicadaSelecionada?.DS_LOTE == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"duplicadaSelecionada?.DS_LOTE != null\">{{ duplicadaSelecionada?.DS_LOTE}}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-6\">\n              <label>Nota Fiscal</label>\n              <div *ngIf=\"duplicadaSelecionada?.NR_NOTA_FISC == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"duplicadaSelecionada?.NR_NOTA_FISC != null\">{{ duplicadaSelecionada?.NR_NOTA_FISC}}</div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label>Status de Recebimento</label>\n              <div *ngIf=\"duplicadaSelecionada?.NM_STAT == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"duplicadaSelecionada?.NM_STAT != null\">{{ duplicadaSelecionada?.NM_STAT}}</div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-3\">\n              <label>Sequência</label>\n              <div *ngIf=\"duplicadaSelecionada?.SEQU_MATE == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"duplicadaSelecionada?.SEQU_MATE != null\">{{ duplicadaSelecionada?.SEQU_MATE  }}</div>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label>Cód. Material</label>\n              <div *ngIf=\"duplicadaSelecionada?.CD_MATE == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"duplicadaSelecionada?.CD_MATE != null\">{{ duplicadaSelecionada?.CD_MATE  }}</div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label>Material</label>\n              <div *ngIf=\"duplicadaSelecionada?.NM_MATE == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"duplicadaSelecionada?.NM_MATE != null\"> {{duplicadaSelecionada?.NM_MATE}}</div>\n            </div>\n          </div>\n          <hr>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label>Justificativa:</label>\n              <div *ngIf=\"duplicadaSelecionada?.DS_OBSE == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"duplicadaSelecionada?.DS_OBSE != null\">{{ duplicadaSelecionada?.DS_OBSE  }}</div>\n            </div>\n          </div>\n          <hr>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label>Usuário Responsável Pela Justificativa</label>\n              <div *ngIf=\"duplicadaSelecionada?.NR_MATR == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"duplicadaSelecionada?.NR_MATR != null\">{{duplicadaSelecionada?.NR_MATR}} - {{ duplicadaSelecionada?.NM_USUA }}</div>\n            </div>\n            <div class=\"form-group col\">\n              <label>Data da Justificativa</label>\n              <div *ngIf=\"duplicadaSelecionada?.DT_INCL == null\">NÃO INFORMADO</div>\n              <div *ngIf=\"duplicadaSelecionada?.DT_INCL != null\">{{ duplicadaSelecionada?.DT_INCL | date: 'dd/MM/yyyy'}}</div>\n            </div>\n          </div>\n        </div>\n      </detail-panel>\n    </div>\n  </div>\n  <ng-template #formResolucao>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Descrição de Parecer #{{duplicadaSelecionada?.ID_APRO}}</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"col-12\">\n        <form [formGroup]=\"formLotesDuplicados\" autocomplete=\"off\">\n          <div class=\"form-row justify-content-center\">\n            <div class=\"form-group col pl-0\">\n              <label for=\"DS_OBSE\" >Descrição:</label>\n              <textarea \n                class=\"form-control\" \n                id=\"DS_OBSE\" \n                formControlName=\"DS_OBSE\" \n                rows=\"3\"\n                [ngClass]=\"onFieldError('DS_OBSE')\"\n                >\n              </textarea>\n              <invalid-form-control [show]=\"onFieldInvalid('DS_OBSE')\" message=\"Descrição é obrigatório com no mínimo {{numberDescricao}} caracteres.\"></invalid-form-control>\n            </div>\n          </div>\n        </form>\n        <div  class=\"form-row justify-content-center text-center\" >\n          <button \n            type=\"button\" \n            class=\"btn btn-default btn-lg m-2\"\n            (click)=\"changeType()\"\n            [disabled]=\"formLotesDuplicados.valid === false\"\n          >\n          <span aria-hidden=\"true\">\n            <i class=\" text-primary fas fa-check\"></i>\n           </span>Marcar como Justificado\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>");

/***/ }),

/***/ "+wKV":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/documentos/documentos.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent", function() { return LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_documentos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./documentos.component.html */ "ejgx");
/* harmony import */ var _documentos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documentos.component.scss */ "um5m");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/ficha-conformidade.service */ "blLz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");










let LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent = class LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent {
    constructor(fichaConformidadeService, pnotify, activatedRoute, confirmModalService) {
        this.fichaConformidadeService = fichaConformidadeService;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.confirmModalService = confirmModalService;
        this.formData = [];
        this.documentos = [];
        this.loadingNavBar = false;
        this.loading = false;
    }
    set fichaId(id) {
        if (!id)
            return;
        this.postDocumentos(id);
    }
    ;
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params;
        if (params.hasOwnProperty('id')) {
            this.getDocumentos({
                ID_LOGI_ENMA_FHNC: params.id,
                IN_STAT: '1'
            });
        }
    }
    postDocumentos(fichaId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let requests = [];
            if (this.formData.length === 0) {
                return requests;
            }
            const promise = () => {
                this.formData.forEach((element) => {
                    requests.push(this.fichaConformidadeService.postDocumento(element, fichaId));
                });
            };
            Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(requests)
                .subscribe((responses) => {
                responses.forEach(response => {
                    if (response.status === 200) {
                        this.pnotify.success();
                    }
                    else {
                        this.pnotify.error();
                    }
                });
            }, (error) => {
                this.pnotify.error();
            });
            return requests;
        });
    }
    putDocumento(documento) {
        const [type, title, message, cancelTxt, okTxt] = [
            'inactivate',
            'Confirmar inativação',
            'Deseja realmente prosseguir com a inativação do registro?',
            'Cancelar',
            'Confirmar',
        ];
        this.confirmModalService
            .showConfirm(type, title, message, cancelTxt, okTxt)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"];
            this.loadingNavBar = true;
            return this.fichaConformidadeService.putDocumento(documento);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            this.pnotify.success('Documento atualizado com sucesso');
            this.getDocumentos({
                ID_LOGI_ENMA_FHNC: this.form.get('ID_LOGI_ENMA_FHNC').value,
                IN_STAT: '1',
            });
        });
    }
    getDocumentos(params) {
        this.fichaConformidadeService.getDocumento(params).subscribe((response) => {
            if (response.status === 200) {
                this.documentos = response.body['data'];
            }
            else {
                this.documentos = [];
            }
        }, (error) => {
            this.documentos = [];
        });
    }
    onRemove(documento, index) {
        if (!documento.hasOwnProperty('ID_LOGI_ENMA_FHNC_DOCU')) {
            this.formData = this.formData.filter((element) => {
                return (element.get('file'))['name'] != documento.NM_DOCU;
            });
        }
        documento.IN_STAT = '0';
        this.documentos.splice(index, 1);
        if (documento.hasOwnProperty('ID_LOGI_ENMA_FHNC_DOCU')) {
            this.putDocumento(documento);
        }
    }
    appendFile(files) {
        if (files.length === 0)
            return;
        const fd = new FormData();
        fd.append('file', files[0]);
        this.formData.push(fd);
        this.documentos.push({ NM_DOCU: files[0]['name'] });
    }
};
LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent.ctorParameters = () => [
    { type: _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntradaMateriaisFichaConformidadeService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"] }
];
LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent.propDecorators = {
    fichaId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }]
};
LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-documentos',
        template: _raw_loader_documentos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_documentos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntradaMateriaisFichaConformidadeService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"]])
], LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent);



/***/ }),

/***/ "//iM":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/lista/lista.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .accordion-toggle button {\n  width: 100%;\n  border: none;\n  text-align: left;\n  color: black;\n  font-weight: 500;\n}\n\n.ScrollHistorico {\n  height: 430px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.buttonGerarFicha {\n  color: #ff7300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvbm90YXMtZmlzY2Fpcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyYWRhLW1hdGVyaWFpcy9ub3Rhcy1maXNjYWlzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5hY2NvcmRpb24tdG9nZ2xlIGJ1dHRvbntcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uU2Nyb2xsSGlzdG9yaWNvIHtcbiAgaGVpZ2h0OiA0MzBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uYnV0dG9uR2VyYXJGaWNoYXtcbiAgY29sb3I6cmdiKDI1NSwgMTE1LCAwKVxuICB9Il19 */");

/***/ }),

/***/ "/As8":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/entrada-materiais/entrada-materiais-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: SulFluminenseEntradaMateriaisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEntradaMateriaisRoutingModule", function() { return SulFluminenseEntradaMateriaisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entrada-materiais.component */ "io96");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _painel_bobinas_qualidade_painel_bobinas_qualidade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./painel-bobinas-qualidade/painel-bobinas-qualidade.component */ "t/sj");
/* harmony import */ var _consulta_recebimento_bobinas_consulta_recebimento_bobinas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consulta-recebimento-bobinas/consulta-recebimento-bobinas.component */ "Anp4");







const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_3__["SulFluminenseEntradaMateriaisComponent"]
            },
            {
                path: 'painel-bobinas-qualidade',
                component: _painel_bobinas_qualidade_painel_bobinas_qualidade_component__WEBPACK_IMPORTED_MODULE_5__["SulFluminensePainelBobinasQualidadeComponent"]
            },
            {
                path: 'consulta-recebimento-bobinas',
                component: _consulta_recebimento_bobinas_consulta_recebimento_bobinas_component__WEBPACK_IMPORTED_MODULE_6__["SulFluminenseConsultaRecebimentoBobinasComponent"]
            },
            {
                path: '**',
                component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
            }
        ]
    }
];
let SulFluminenseEntradaMateriaisRoutingModule = class SulFluminenseEntradaMateriaisRoutingModule {
};
SulFluminenseEntradaMateriaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], SulFluminenseEntradaMateriaisRoutingModule);



/***/ }),

/***/ "/qkg":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/lista/lista.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisNotasFiscaisListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisNotasFiscaisListaComponent", function() { return LogisticaEntradaMateriaisNotasFiscaisListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "jsYm");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "//iM");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var _status_recebimento_services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../status-recebimento/services/status-recebimento.service */ "9bNu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/notas-fiscais.service */ "81bo");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/entrada-materiais.service */ "mfeq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");





//angular



//servicos






// rxjs



let LogisticaEntradaMateriaisNotasFiscaisListaComponent = class LogisticaEntradaMateriaisNotasFiscaisListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, localeService, notasFiscaisService, entradaMateriaisService, statusRecebimentoService, formBuilder, xlsxService, confirmModalService, modalService, routerService, dateService) {
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
        this.ORDE_TYPE = 'desc';
        //LOADINGS
        this.loading = true;
        this.loadingNavBar = false;
        this.loadingFornecedores = false;
        this.loadingMateriais = false;
        this.loadingHistoricoMateriais = false;
        this.loadingEmpresas = false;
        this.loadingDepositos = false;
        this.loadingAlteracoes = false;
        this.loadingStatusRecebimento = false;
        //VARIAVEIS
        this.fornecedores = [];
        this.empresas = [];
        this.depositos = [];
        this.materiais = [];
        this.historicoMateriais = [];
        this.alteracoes = [];
        this.statusRecebimento = [];
        this.totalItens = [];
        //CARDS
        this.notas = 0;
        this.notasEmpty = false;
        this.fichasNaoConforme = 0;
        this.fichasNaoConformeEmpty = false;
        this.duplicados = 0;
        this.duplicadosEmpty = false;
        this.cardsLoading = true;
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        // Tipos de Situação das Notas Fiscais (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '0',
                nome: 'Inativos',
            },
        ];
        this.tiposData = [
            {
                cod: '1',
                nome: 'Emissão',
            },
            {
                cod: '2',
                nome: 'Recebimento',
            },
            {
                cod: '3',
                nome: 'Entrada no Estoque',
            },
            {
                cod: '4',
                nome: 'Cadastro',
            },
        ];
        // Subtitles (Ativo/Inativo)
        this.subtitles = [
            {
                id: 1,
                text: 'Ativo',
                color: 'green',
            },
            {
                id: 2,
                text: 'Inativo',
                color: 'red',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.getEmpresas();
        this.getDepositos();
        this.getStatusRecebimento();
        this.getLotesDuplicados();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
        if (this.modalRef1 != undefined) {
            this.modalRef1.hide();
        }
        if (this.modalRef2 != undefined) {
            this.modalRef2.hide();
        }
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getNotasFiscais(this.getParams());
        });
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            TP_DATA_FINA: '1',
            TP_DATA_INIC: '1',
            DT_INIC: new Date(),
            DT_FINA: new Date(),
            TIME: [new Date().getTime()],
        });
    }
    buildForm() {
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
            TIME: [new Date().getTime()],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Notas Fiscais',
            },
        ];
    }
    onFilter() {
        this.form.get('PAGI').setValue(1);
        this.form.get('TIME').setValue(new Date().getTime());
        this.form.get('ORDE_TYPE').setValue(this.ORDE_TYPE);
        this.form.get('ORDE_BY').setValue(this.ORDE_BY);
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
        this.form.reset();
    }
    gerarFicha(id) {
        const params = this.activatedRoute.snapshot.params;
        const idSubmodulo = params.hasOwnProperty('idSubModulo') ? params.idSubModulo : undefined;
        this.route.navigate([`/logistica/entrada-materiais/${idSubmodulo}/fichas-nao-conformidade/novo`], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams({ ID_LOGI_ENMA_NOFI: id }),
        });
    }
    openModalDetalhes(template, nota) {
        this.getNotasMateriais({
            ID_LOGI_ENMA_NOFI: nota.ID_LOGI_ENMA_NOFI, IN_STAT: '1'
        });
        this.getAlteracoes({ ID_LOGI_ENMA_NOFI: nota.ID_LOGI_ENMA_NOFI });
        this.getHistoricoMateriais({ ID_LOGI_ENMA_NOFI: nota.ID_LOGI_ENMA_NOFI });
        this.notaFiscalSelecionada = nota;
        this.modalRef1 = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModalDetalhes() {
        this.modalRef1.hide();
    }
    openModalDuplicadas(template) {
        this.modalRef2 = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModalDuplicadas() {
        this.modalRef2.hide();
        this.getLotesDuplicados();
    }
    setOrderBy(column) {
        if (this.ORDE_BY === column) {
            if (this.ORDE_TYPE == 'desc') {
                this.ORDE_TYPE = 'asc';
            }
            else if (this.ORDE_TYPE == 'asc') {
                this.ORDE_TYPE = 'desc';
            }
        }
        else {
            this.ORDE_BY = column;
            this.ORDE_TYPE = 'asc';
        }
        this.onFilter();
    }
    getNotasMateriais(params) {
        this.loadingMateriais = true;
        this.notasFiscaisService
            .getNotasMateriais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingMateriais = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.materiais = response.body['data'];
                this.noMateriais = false;
            }
            else {
                this.materiais = [];
                this.noMateriais = true;
            }
        }, (error) => {
            this.noMateriais = true;
            try {
                this.pnotify.error(error.error.message);
                this.noMateriais = true;
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    fichasNaoConformeChange() {
        this.form.get('IN_FHNC').setValue('1');
        this.onFilter();
    }
    getHistoricoMateriais(params) {
        this.loadingHistoricoMateriais = true;
        this.notasFiscaisService
            .getHistoricoMateriais(Object.assign(Object.assign({}, params), { ORDE_TYPE: 'desc' }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingHistoricoMateriais = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                return;
            }
            this.historicoMateriais = response['body']['data'];
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    hasHistoricoMateriais(id) {
        if (this.loadingHistoricoMateriais[id])
            return false;
        if (!this.historicoMateriais[id])
            return false;
        if (this.historicoMateriais[id].length == 0)
            return false;
        return true;
    }
    getNotasFiscais(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.cardsLoading = false;
        this.notasFiscaisService
            .getNotasFiscais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loading = false;
            this.cardsLoading = true;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.notasFiscais = response.body['data'];
                this.totalItems = response.body['total'];
                this.notas = response.body['total'];
                this.fichasNaoConforme = response.body['notConform'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.notas = 0;
                this.notasFiscais = [];
            }
        }, (error) => {
            this.noResult = true;
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getLotesDuplicados(params) {
        const _params = Object.assign(Object.assign({}, params), { IN_DS_OBSE: 0 });
        this.notasFiscaisService
            .getLotesDuplicados(_params)
            .subscribe((response) => {
            if (response.status === 200) {
                this.duplicados = response.body['total'];
            }
            else {
                this.duplicados = 0;
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
                this.duplicados = 0;
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    typeChange(params) {
        if (params.ID_LOGI_ENMA_NOFI_STAT)
            return false;
        if (params.ID_EMPR)
            return false;
        if (params.ID_FORN)
            return false;
        if (params.NR_NOTA_FISC)
            return false;
        if (params.DT_EMIS_NOTA_FISC)
            return false;
        if (params.DS_OBSE)
            return false;
        if (params.IN_STAT)
            return false;
        return true;
    }
    getExport(params) {
        this.loadingNavBar = true;
        params = this.getParams();
        const _params = Object.assign(Object.assign({}, params), { IN_PAGI: '0' });
        this.loadingNavBar = true;
        this.notasFiscaisService
            .getExport(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.allNotasFiscais = response.body['data'];
                this.onExport();
            }
            else {
                this.allNotasFiscais = [];
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getEmpresas(params) {
        this.loadingEmpresas = true;
        this.entradaMateriaisService
            .getEmpresas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingEmpresas = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.empresas = response.body['result'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.empresas = [];
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
                this.empresas = [];
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getDepositos(params) {
        this.loadingDepositos = true;
        this.entradaMateriaisService
            .getDepositos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingDepositos = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.depositos = response.body['result'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.depositos = [];
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
                this.depositos = [];
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getAlteracoes(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.ORDE_TYPE = 'desc';
        this.loadingAlteracoes = true;
        this.notasFiscaisService
            .getAlteracoes(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingAlteracoes = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.alteracoes = response.body['data'];
                this.noAlteracoes = false;
            }
            else {
                this.alteracoes = [];
                this.noAlteracoes = true;
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
                this.noAlteracoes = true;
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    titleHistorico(params) {
        const _newDT = new Date(params.DT_INCL);
        const data = this.dateService.convertToBrazilianDate(_newDT);
        if (params.IN_STAT != 0) {
            return ("ALTERAÇÃO REALIZADA POR " + params.NM_USUA + " NO DIA " + data);
        }
        if (params.SEQU_MATE == null && params.IN_STAT != 0) {
            return ("MATERIAL REMOVIDO POR " + params.NM_USUA + " NO DIA " + data);
        }
        return ("REGISTRO INATIVADO POR " + params.NM_USUA + " NO DIA " + data);
    }
    getFornecedores(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        this.loadingFornecedores = true;
        this.entradaMateriaisService
            .getFornecedores(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingFornecedores = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.fornecedores = response.body['data'];
            }
            else {
                this.fornecedores = [];
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
                this.fornecedores = [];
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getStatusRecebimento(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        this.loadingStatusRecebimento = true;
        this.statusRecebimentoService
            .getStatusRecebimento(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingStatusRecebimento = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.statusRecebimento = response.body['data'];
            }
            else {
                this.statusRecebimento = [];
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
                this.statusRecebimento = [];
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    classStatusBorder(notas) {
        let borderClass;
        if (notas.IN_STAT == 1) {
            borderClass = 'border-success';
        }
        else if (notas.IN_STAT == 0) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    changeType(nota) {
        const stat = nota.IN_STAT == 1 ? 0 : 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_15__["EMPTY"];
            this.loadingNavBar = true;
            nota.IN_STAT = stat;
            return this.notasFiscaisService.postNotasFiscais({ ID_LOGI_ENMA_NOFI: nota.ID_LOGI_ENMA_NOFI, IN_STAT: stat });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
                nota.IN_STAT = nota.IN_STAT == 1 ? 0 : 1;
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.allNotasFiscais;
        this.xlsxService.exportFile(listagemExport, `Notas_Fiscais${dataExport}`);
    }
};
LogisticaEntradaMateriaisNotasFiscaisListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsLocaleService"] },
    { type: _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntradaMateriaisNotasFiscaisService"] },
    { type: _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaEntradaMateriaisService"] },
    { type: _status_recebimento_services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisStatusRecebimentoService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__["XlsxService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] }
];
LogisticaEntradaMateriaisNotasFiscaisListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsLocaleService"],
        _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntradaMateriaisNotasFiscaisService"],
        _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_13__["LogisticaEntradaMateriaisService"],
        _status_recebimento_services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisStatusRecebimentoService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_12__["XlsxService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_16__["BsModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]])
], LogisticaEntradaMateriaisNotasFiscaisListaComponent);



/***/ }),

/***/ "/wcd":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/painel-aprovacao/lista/lista.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL3BhaW5lbC1hcHJvdmFjYW8vbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "18Ue":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/parecer/cadastro/cadastro.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL3BhcmVjZXIvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "1SJI":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/entrada-materiais/consulta-recebimento-bobinas/consulta-recebimento-bobinas.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\n\n<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <back-button></back-button>\n      <h1>Consulta de Recebimento de Bobinas</h1>\n    </div>\n  </div>\n  \n  <div class=\"col-6 d-flex justify-content-end\">\n    <div id=\"actions\"></div>\n  </div>\n</div>\n\n<div class=\"row pb-0\" id=\"application-body\">\n  <div class=\"col\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <custom-iframe [url]=\"url\"></custom-iframe>    \n  </div>\n</div>");

/***/ }),

/***/ "4OIG":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/motivos/lista/lista.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"MOTIVOS\">\n  <button\n  type=\"button\"\n  (click)=\"onExport()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"ID_LOGI_ENTR_MATE_MOTI\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_LOGI_ENTR_MATE_MOTI\"\n                formControlName=\"ID_LOGI_ENTR_MATE_MOTI\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-4 pl-0\">\n              <label for=\"DS_LOGI_ENTR_MATE_MOTI\">Descrição</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"DS_LOGI_ENTR_MATE_MOTI\"\n                formControlName=\"DS_LOGI_ENTR_MATE_MOTI\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <label for=\"DS_LOGI_ENTR_MATE_CATE_MOTI\">Categoria</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"categorias\"\n              [virtualScroll]=\"true\"\n              labelForId=\"categotia\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"categotia\"\n              (change)=\"onFilter()\"\n              formControlName=\"DS_LOGI_ENTR_MATE_CATE_MOTI\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-lg-1\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" >ID</th>\n              <th scope=\"col\" >Descrição</th>\n              <th scope=\"col\" [hidden]=\"showDetailPanel\">Categoria</th>\n              <th scope=\"col\" style=\"width:80px\"[hidden]=\"showDetailPanel\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let motivo of motivos\"  [class.table-active]=\"motivo?.ID_LOGI_ENTR_MATE_MOTI == motivoSelecionado?.ID_LOGI_ENTR_MATE_MOTI && showDetailPanel\">\n              <td (click)=\"onDetails(motivo)\" [ngClass]=\"motivo.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n              {{motivo.ID_LOGI_ENTR_MATE_MOTI }}\n              </td>\n              <td (click)=\"onDetails(motivo)\">{{ motivo.DS_LOGI_ENTR_MATE_MOTI | uppercase}}</td>\n              <td (click)=\"onDetails(motivo)\" [hidden]=\"showDetailPanel\">{{ motivo.DS_LOGI_ENTR_MATE_CATE_MOTI }}</td>\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\n                <span class=\"mr-3\" [tooltip]=\"motivo.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(motivo)\">\n                    <i [ngClass]=\"motivo.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', motivo.ID_LOGI_ENTR_MATE_MOTI]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6\" [hidden]=\"!showDetailPanel\">\n      <detail-panel panelTitle=\"Histórico de alteração\">\n        <custom-table>\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Data</th>\n              <th scope=\"col\">Usuário</th>\n              <!-- <th scope=\"col\">Alteração</th> -->\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let alteracao of alteracoes\">\n              <td class=\"text-center\">{{ alteracao.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}</td>\n              <td>{{ alteracao.DS_USUA_CADA | uppercase }}</td>\n              <!-- <td>{{ alteracao.nomeUsuario | uppercase }}</td> -->\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "4vrJ":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/motivos/services/motivos.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisMotivosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisMotivosService", function() { return LogisticaEntradaMateriaisMotivosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaEntradaMateriaisMotivosService = class LogisticaEntradaMateriaisMotivosService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getMotivos(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/motivos`, {
            params: params,
            observe: 'response',
        });
    }
    postMotivos(params) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/motivos`, params, {
            observe: 'response',
        });
    }
};
LogisticaEntradaMateriaisMotivosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaEntradaMateriaisMotivosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaEntradaMateriaisMotivosService);



/***/ }),

/***/ "5ATo":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/ficha-conformidade/cadastro/cadastro.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Fichas de Não Conformidade\">\n  <button \n    [disabled]=\"form.valid === false || loadingNavBar === true\"\n    (click)=\"postFichasConformidade()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\n        <legend>Dados do Ficha de Não Conformidade</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-7 pl-0\">\n            <label for=\"tiposConformidade\">Tipo de Não Conformidade</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"tiposConformidade\"\n              [virtualScroll]=\"true\"\n              dropdownPosition=\"bottom\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingTiposConformidade\"\n              labelForId=\"ID_LOGI_ENMA_FHNC_TIPO\"\n              bindLabel=\"NM_TIPO\"\n              bindValue=\"ID_LOGI_ENMA_FHNC_TIPO\"\n              id=\"ID_LOGI_ENMA_FHNC_TIPO\"\n              formControlName=\"ID_LOGI_ENMA_FHNC_TIPO\"\n              [ngClass]=\"onFieldError('ID_LOGI_ENMA_FHNC_TIPO') + ' ' + onFieldRequired('ID_LOGI_ENMA_FHNC_TIPO')\">\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_ENMA_FHNC_TIPO')\" message=\"Tipo de não conformidade é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-5 pl-0\"></div> \n        </div>\n      </fieldset>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\n        <legend>Materiais</legend>\n        <div formArrayName=\"materiais\">\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\n              <div class=\"mtc-title\"></div>\n              <div>\n                <a\n                  class=\"text-secondary\"\n                  (click)=\"onAddMaterial()\"\n                  href=\"javascript:void(0)\">\n                  <b>Adicionar</b>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\"  *ngFor=\"let item of formMateriais.controls; let i = index\" [formGroupName]=\"i\">\n            <div class=\"form-group col mb-0\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-3 pl-0\">\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                    <label class=\"my-auto\" for=\"NR_NOTA_FISC\">Nota Fiscal</label>\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\n                      <a\n                        class=\"text-primary\"\n                        href=\"javascript:void(0)\"\n                        (click)=\"openModal(selecionarNotaFiscal, i)\">\n                        <strong>Selecionar</strong>\n                      </a>\n                    </div>\n                  </div>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"NR_NOTA_FISC\"\n                    formControlName=\"NR_NOTA_FISC\"\n                    (change)=\"onCanAddMaterial(i)\"\n                    placeholder=\"Digite...\"\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'NR_NOTA_FISC') + ' ' + onNestedFieldRequired('materiais', i, 'NR_NOTA_FISC')\"\n                  />\n                </div>\n                <div class=\"form-group col-md-4 pl-0\">\n                  <label for=\"NM_CLAS\">Classe</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"NM_CLAS\"\n                    formControlName=\"NM_CLAS\"\n                    >\n                </div>\n                <div class=\"form-group col-md-2 pl-0\">\n                  <label for=\"DS_LOTE\">Lote</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"DS_LOTE\"\n                    formControlName=\"DS_LOTE\"\n                    >\n                </div>\n                <div class=\"form-group col-md-2 pl-0\">\n                  <label for=\"DS_UNID_MEDI\">Un. Medida</label>\n                  <select \n                  class=\"form-control custom-select\"\n                  id=\"DS_UNID_MEDI\"\n                  formControlName=\"DS_UNID_MEDI\"\n                  [ngClass]=\"onNestedFieldError('materiais', i, 'DS_UNID_MEDI') + ' ' + onNestedFieldRequired('materiais', i, 'DS_UNID_MEDI')\"\n                >\n                  <option >KG</option>\n                  <option >TON</option>\n                  <option >PC</option>\n                  <option >UN</option>\n                </select>\n                </div>\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon\"\n                    (click)=\"onDeleteMaterial(i)\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-7 pl-0\">\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                    <label class=\"my-auto\" for=\"NM_MATE\">Material</label>\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\"  >\n                      <a\n                      *ngIf=\"onCanAddMaterial(i)\"\n                        class=\"text-primary\"\n                        href=\"javascript:void(0)\"\n                        (click)=\"openModal(selecionarMateriais, i)\">\n                        <strong>Selecionar</strong>\n                      </a>\n                    </div>\n                  </div>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"NM_MATE\"\n                    formControlName=\"NM_MATE\"\n                    placeholder=\"Digite...\"\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'NM_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'NM_MATE')\"\n                  />\n                </div>\n                <div class=\"form-group col-md-2 pl-0\">\n                  <label for=\"TT_MATE_ORIG\">Quantidade Total</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"TT_MATE_ORIG\"\n                    formControlName=\"TT_MATE_ORIG\"\n                    currencyMask [options]=\"{ align: 'right', prefix: '' , thousands: '.', decimal: ',' , precision: 3 }\"\n\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'TT_MATE_ORIG') + ' ' + onNestedFieldRequired('materiais', i, 'TT_MATE_ORIG')\">\n                </div>\n                <div class=\"form-group col-md-2 pl-0\">\n                  <label for=\"TT_MATE\">Quantidade NC</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"TT_MATE\"\n                    formControlName=\"TT_MATE\"\n                    currencyMask [options]=\"{ align: 'right', prefix: '' , thousands: '.', decimal: ',' , precision: 3 }\"\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'TT_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'TT_MATE')\">\n                </div>\n                <invalid-form-control\n                [show]=\"comparaQuantidade(i)\"\n                message=\"Quantidade total está menor que a quantidade não conforme\">\n              </invalid-form-control>\n              </div>\n              <hr>\n            </div>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\n        <legend>Descrição</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Descrição da NC:</label>\n            <textarea \n              class=\"form-control\" \n              id=\"DS_OBSE\" \n              formControlName=\"DS_OBSE\" \n              [ngClass]=\"onFieldError('DS_OBSE') + ' ' + onFieldRequired('DS_OBSE')\">\n            </textarea>\n            <invalid-form-control [show]=\"onFieldInvalid('DS_OBSE')\" message=\"Descrição é obrigatório com no mínimo {{numberDescricao}} caracteres.\"></invalid-form-control>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n      <br>\n      <logistica-entrada-materiais-notas-fiscais-documentos\n      [fichaId] = \"fichaId\"\n      >\n      </logistica-entrada-materiais-notas-fiscais-documentos>\n    </fieldset>\n  </form>\n  <ng-template #selecionarNotaFiscal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Pesquisa de Notas/Materiais</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingNotasFiscais\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formNotasFiscais\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-3\">\n              <label for=\"IN_STAT\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"IN_STAT\"\n              >\n                <option value=\"1\">Ativo</option>\n                <option value=\"0\">Inativo</option>\n                <option value=\"\">Exibir Todos</option>\n              </select>\n            </div>\n            <div class=\"form-group col-3\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_MATE\">ID</option>\n                <option value=\"NR_NOTA_FISC\" selected>Nota Fiscal</option>\n                <option value=\"DS_LOTE\">Lote</option>\n                <option value=\"NM_MATE\">Material</option>\n                <option value=\"NM_FORN\">Fornecedor</option>\n              </select>\n            </div>\n\n            <div class=\"form-group col-6\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  >\n                  <div class=\"input-group-append\">\n                    <span \n                      [tooltip]=\"formNotasFiscais.valid == false ? 'Digite um termo de pesquisa':''\"\n                      container=\"body\"\n                      placement =\"left\"\n                    >\n                      <button\n                      style=\"height: 25px;\"\n                        [disabled]=\"formNotasFiscais.valid == false\"\n                        class=\"input-group-text hover\"\n                        (click)=\"getNotasMateriais()\"\n                        >\n                        <i class=\"fas fa-search\"></i>\n                      </button>\n                    </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <custom-table *ngIf=\"!noNotasFiscais\" class=\"text-center\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>ID NF</th>\n            <th>Nota Fiscal</th>\n            <th>Lote</th>\n            <th>Nome Material</th>\n            <th>Total de Material</th>\n            <th>Fornecedor</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let material of notasFiscais\">\n            <td>{{ material.ID_LOGI_ENMA_NOFI }}</td>\n            <td>{{ material.NR_NOTA_FISC }}</td>\n            <td *ngIf=\"material.DS_LOTE != null \">{{ material.DS_LOTE }}</td>\n            <td *ngIf=\"material.DS_LOTE == null\">NÃO INFORMADO</td>\n            <td>{{ material.NM_MATE }}</td>\n            <td>{{ material.TT_MATE_ORIG }} {{ material.DS_UNID_MEDI }}</td>\n            <td>{{ material.NM_FORN }} </td>\n            <td>\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Salvar Informações\"\n                container=\"body\"\n                (click)=\"setMaterial(material);modalRef.hide()\"\n              >\n                <i class=\"far fa-save\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div *ngIf=\"totalItems > itemsPerPage\" >\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template #selecionarMateriais>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Pesquisa de Materiais</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingAllMateriais\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formAllMateriais\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-3\">\n              <label for=\"IN_STAT\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"IN_STAT\"\n              >\n                <option value=\"1\">Ativo</option>\n                <option value=\"0\">Inativo</option>\n                <option value=\"\">Exibir Todos</option>\n              </select>\n            </div>\n            <div class=\"form-group col-3\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_REFE_ERP\">ID ERP</option>\n                <option value=\"NM_MATE\" selected> Nome Material</option>\n                <option value=\"NM_CLAS\">Classe</option>\n                <option value=\"NM_LINH\">Linha</option>\n              </select>\n            </div>\n\n            <div class=\"form-group col-6\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  >\n                  <div class=\"input-group-append\">\n                    <span \n                      [tooltip]=\"formAllMateriais.valid == false ? 'Digite um termo de pesquisa':''\"\n                      container=\"body\"\n                      placement =\"left\"\n                    >\n                      <button\n                      style=\"height: 25px;\"\n                        [disabled]=\"formAllMateriais.valid == false\"\n                        class=\"input-group-text hover\"\n                        (click)=\"getAllMateriais()\"\n                        >\n                        <i class=\"fas fa-search\"></i>\n                      </button>\n                    </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <custom-table *ngIf=\"!loadingAllMateriais && !noAllMateriais\" class=\"text-center\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>ID ERP</th>\n            <th>Nome Material</th>\n            <th>Classe</th>\n            <th>Linha</th>\n            <th>Unidade de Medida</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let material of allMateriais | slice : begin : end; let i = index\">\n            <td>{{ material.ID_REFE_ERP }}</td>\n            <td>{{ material.NM_MATE }}</td>\n            <td>{{ material.NM_CLAS }}</td>\n            <td>{{ material.NM_LINH }}</td>\n            <td>{{ material.NM_APOI_UNID_MEDI }} </td>\n            <td>\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Salvar Material\"\n                container=\"body\"\n                (click)=\"setMaterial(material);modalRef.hide()\"\n              >\n                <i class=\"far fa-save\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div *ngIf=\"totalItemsMaterial > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItemsMaterial ? totalItemsMaterial : currentPage*(itemsPerPage) }} de {{ totalItemsMaterial }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItemsMaterial\"\n          (pageChanged)=\"onPageChangedMaterial($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </ng-template>\n</app-body>");

/***/ }),

/***/ "5cZa":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/parecer/cadastro/cadastro.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisParecerCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisParecerCadastroComponent", function() { return LogisticaEntradaMateriaisParecerCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "tXxU");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "18Ue");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_parecer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/parecer.service */ "M5hd");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! util */ "MCLT");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_13__);



//Services



//Bootstrap


//Angular






let LogisticaEntradaMateriaisParecerCadastroComponent = class LogisticaEntradaMateriaisParecerCadastroComponent {
    constructor(formBuilder, pnotify, activatedRoute, router, localeService, parecerService, titleService, atividadesService) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.localeService = localeService;
        this.parecerService = parecerService;
        this.titleService = titleService;
        this.atividadesService = atividadesService;
        this.breadCrumbTree = [];
        this.formData = [];
        //loading
        this.disabledForm = false;
        this.loading = false;
        this.loadingNavBar = false;
        //Interfaces
        this.parecerRecebimento = [];
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_6__["utilsBr"].MASKS;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (_params.hasOwnProperty('id'))
            return this.getParecer({ ID_LOGI_ENMA_FHNC_OCPR: _params['id'] });
    }
    getParecer(params) {
        this.loading = true;
        const _params = params !== null && params !== void 0 ? params : {};
        this.parecerService
            .getParecer(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.form.patchValue(response.body['data'][0]);
                this.noResult = false;
            }
            else {
                this.noResult = true;
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Cadastro';
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/home',
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Parecer',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_LOGI_ENMA_FHNC_OCPR: [null],
            NM_PARE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            IN_STAT: [util__WEBPACK_IMPORTED_MODULE_13__["isNull"]],
            DS_OBSE: [null],
        });
    }
    // Validação de formulário
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postParecer() {
        this.loadingNavBar = true;
        this.parecerService
            .postParecer(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pnotify.success();
                this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute,
                });
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
};
LogisticaEntradaMateriaisParecerCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"] },
    { type: _services_parecer_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisParecerService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"] }
];
LogisticaEntradaMateriaisParecerCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'logistica-entrada-materiais-parecer-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"],
        _services_parecer_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisParecerService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"]])
], LogisticaEntradaMateriaisParecerCadastroComponent);



/***/ }),

/***/ "6sJs":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/cadastro/cadastro.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvZmljaGEtY29uZm9ybWlkYWRlL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvZmljaGEtY29uZm9ybWlkYWRlL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcbiAgY3Vyc29yOiBuby1kcm9wO1xufSJdfQ== */");

/***/ }),

/***/ "738o":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/status-recebimento/cadastro/cadastro.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL3N0YXR1cy1yZWNlYmltZW50by9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "7PM9":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/entrada-materiais-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisRoutingModule", function() { return LogisticaEntradaMateriaisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _parecer_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parecer/cadastro/cadastro.component */ "5cZa");
/* harmony import */ var _parecer_lista_lista_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parecer/lista/lista.component */ "WQIu");
/* harmony import */ var _ficha_conformidade_ocorrencias_ocorrencias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ficha-conformidade/ocorrencias/ocorrencias.component */ "H1OO");
/* harmony import */ var _ficha_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ficha-conformidade/cadastro/cadastro.component */ "A697");
/* harmony import */ var _ficha_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ficha-conformidade/lista/lista.component */ "XkGG");
/* harmony import */ var _tipos_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tipos-conformidade/cadastro/cadastro.component */ "yzlb");
/* harmony import */ var _tipos_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tipos-conformidade/lista/lista.component */ "yVY0");
/* harmony import */ var _painel_aprovacao_lista_lista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./painel-aprovacao/lista/lista.component */ "l/Jf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/not-found/not-found.component */ "6nXq");
/* harmony import */ var _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entrada-materiais.component */ "I+6W");
/* harmony import */ var _notas_fiscais_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notas-fiscais/cadastro/cadastro.component */ "SckD");
/* harmony import */ var _notas_fiscais_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notas-fiscais/lista/lista.component */ "/qkg");
/* harmony import */ var _status_recebimento_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./status-recebimento/lista/lista.component */ "jsif");
/* harmony import */ var _status_recebimento_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./status-recebimento/cadastro/cadastro.component */ "l/7K");
/* harmony import */ var _motivos_lista_lista_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./motivos/lista/lista.component */ "OGJj");
/* harmony import */ var _motivos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./motivos/cadastro/cadastro.component */ "DU17");



















const routes = [
    {
        path: '',
        component: _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisComponent"],
    },
    {
        path: 'notas-fiscais',
        children: [
            {
                path: '',
                component: _notas_fiscais_lista_lista_component__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntradaMateriaisNotasFiscaisListaComponent"],
            },
            {
                path: 'novo',
                component: _notas_fiscais_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaEntradaMateriaisNotasFiscaisCadastroComponent"],
            },
            {
                path: ':id',
                component: _notas_fiscais_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["LogisticaEntradaMateriaisNotasFiscaisCadastroComponent"],
            },
        ],
    },
    {
        path: 'status-recebimento',
        children: [
            {
                path: '',
                component: _status_recebimento_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["LogisticaEntradaMateriaisStatusRecebimentoListaComponent"],
            },
            {
                path: 'novo',
                component: _status_recebimento_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent"],
            },
            {
                path: ':id',
                component: _status_recebimento_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent"],
            },
        ],
    },
    {
        path: 'parecer',
        children: [
            {
                path: '',
                component: _parecer_lista_lista_component__WEBPACK_IMPORTED_MODULE_2__["LogisticaEntradaMateriaisParecerListaComponent"],
            },
            {
                path: 'novo',
                component: _parecer_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_1__["LogisticaEntradaMateriaisParecerCadastroComponent"],
            },
            {
                path: ':id',
                component: _parecer_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_1__["LogisticaEntradaMateriaisParecerCadastroComponent"],
            },
        ],
    },
    {
        path: 'motivos',
        children: [
            {
                path: '',
                component: _motivos_lista_lista_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaEntradaMateriaisMotivosListaComponent"],
            },
            {
                path: 'novo',
                component: _motivos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntradaMateriaisMotivosCadastroComponent"],
            },
            {
                path: ':id',
                component: _motivos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntradaMateriaisMotivosCadastroComponent"],
            },
        ],
    },
    {
        path: 'tipos-nao-conformidade',
        children: [
            {
                path: '',
                component: _tipos_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_7__["LogisticaEntradaMateriaisTiposConformidadeListaComponent"],
            },
            {
                path: 'novo',
                component: _tipos_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntradaMateriaisTiposConformidadeCadastroComponent"],
            },
            {
                path: ':id',
                component: _tipos_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntradaMateriaisTiposConformidadeCadastroComponent"],
            },
        ],
    },
    {
        path: 'fichas-nao-conformidade',
        children: [
            {
                path: '',
                component: _ficha_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisFichaConformidadeListaComponent"],
            },
            {
                path: 'novo',
                component: _ficha_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisFichasConformidadeCadastroComponent"],
            },
            {
                path: ':id',
                component: _ficha_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisFichasConformidadeCadastroComponent"],
            },
            {
                path: 'ocorrencias/novo',
                component: _ficha_conformidade_ocorrencias_ocorrencias_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent"],
            },
            {
                path: 'ocorrencias/:id',
                component: _ficha_conformidade_ocorrencias_ocorrencias_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent"],
            },
        ],
    },
    {
        path: 'painel-aprovacao',
        children: [
            {
                path: '',
                component: _painel_aprovacao_lista_lista_component__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntradaMateriaisPainelAprovacaoListaComponent"],
            },
            {
                path: 'lista',
                component: _painel_aprovacao_lista_lista_component__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntradaMateriaisPainelAprovacaoListaComponent"],
            },
        ],
    },
    {
        path: '**',
        component: src_app_core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
    },
];
let LogisticaEntradaMateriaisRoutingModule = class LogisticaEntradaMateriaisRoutingModule {
};
LogisticaEntradaMateriaisRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]],
    })
], LogisticaEntradaMateriaisRoutingModule);



/***/ }),

/***/ "8Ov2":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/tipos-conformidade/cadastro/cadastro.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvdGlwb3MtY29uZm9ybWlkYWRlL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvdGlwb3MtY29uZm9ybWlkYWRlL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcbiAgY3Vyc29yOiBuby1kcm9wO1xufSJdfQ== */");

/***/ }),

/***/ "8gyq":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/status-recebimento/lista/lista.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL3N0YXR1cy1yZWNlYmltZW50by9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "9bNu":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/status-recebimento/services/status-recebimento.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisStatusRecebimentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisStatusRecebimentoService", function() { return LogisticaEntradaMateriaisStatusRecebimentoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaEntradaMateriaisStatusRecebimentoService = class LogisticaEntradaMateriaisStatusRecebimentoService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getStatusRecebimento(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/notas-fiscais/status`, {
            params: params,
            observe: 'response',
        });
    }
    getHistorico(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/notas-fiscais/status/historico`, {
            params: params,
            observe: 'response',
        });
    }
    postStatusRecebimento(notas) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/notas-fiscais/status`, notas, {
            observe: 'response',
        });
    }
};
LogisticaEntradaMateriaisStatusRecebimentoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaEntradaMateriaisStatusRecebimentoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaEntradaMateriaisStatusRecebimentoService);



/***/ }),

/***/ "A697":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/cadastro/cadastro.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisFichasConformidadeCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisFichasConformidadeCadastroComponent", function() { return LogisticaEntradaMateriaisFichasConformidadeCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "5ATo");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "6sJs");
/* harmony import */ var _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../shared/services/core/router.service */ "w8rm");
/* harmony import */ var _notas_fiscais_services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../notas-fiscais/services/notas-fiscais.service */ "81bo");
/* harmony import */ var _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/entrada-materiais.service */ "mfeq");
/* harmony import */ var _tipos_conformidade_services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../tipos-conformidade/services/tipos-conformidade.service */ "AVAL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/ficha-conformidade.service */ "blLz");








//Services



//Bootstrap


//Angular



//rxjs



let LogisticaEntradaMateriaisFichasConformidadeCadastroComponent = class LogisticaEntradaMateriaisFichasConformidadeCadastroComponent {
    /* Pagination */
    constructor(formBuilder, pnotify, activatedRoute, routerService, router, localeService, entradaMateriaisService, fichasConformidadeService, notasFiscaisService, tiposConformidadeService, titleService, modalService, atividadesService) {
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
        this.numberDescricao = 10;
        //loading
        this.disabledForm = false;
        this.loading = false;
        this.loadingNavBar = false;
        this.fichaId = 1;
        //Interfaces
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
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.setFormBuilder();
        this.registrarAcesso();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.getTiposConformidade();
    }
    ngOnDestroy() {
        if (this.modalRef != undefined) {
            this.modalRef.hide();
        }
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (_params.hasOwnProperty('id')) {
            this.getFichasConformidade({ ID_LOGI_ENMA_FHNC: _params['id'] });
            this.getFormMaterial({ ID_LOGI_ENMA_FHNC: _params['id'], IN_STAT: '1' });
            this.form.get('ID_LOGI_ENMA_FHNC').setValue(_params['id']);
            return;
        }
        const queryParams = this.activatedRoute.snapshot.queryParams;
        const _response = queryParams ? this.routerService.getBase64UrlParams(queryParams) : {};
        if (!_response.hasOwnProperty('ID_LOGI_ENMA_NOFI')) {
            this.onAddMaterial();
            return;
        }
        this.getNotasFiscaisMateriais(_response);
    }
    getFichasConformidade(params) {
        this.loading = true;
        const _params = params !== null && params !== void 0 ? params : {};
        this.fichasConformidadeService
            .getFichasConformidade(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const ficha_ = response.body['data'][0];
                this.fichasConformidade = response.body['data'];
                this.noResult = false;
                this.form.patchValue(ficha_);
            }
            else {
                this.noResult = true;
                this.fichasConformidade = [];
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getTiposConformidade(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        this.loadingTiposConformidade = true;
        this.tiposConformidadeService
            .getTiposConformidade(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingTiposConformidade = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tiposConformidade = response.body['data'];
            }
            else {
                this.tiposConformidade = [];
            }
        }, (error) => {
            this.pnotify.error('Não foi encontrado nenhum status de recebimento');
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Cadastro';
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/home',
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Fichas de Não Conformidade',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_LOGI_ENMA_FHNC: [null],
            MATR_USUA_CADA: [null],
            DS_USUA_CADA: [null],
            DT_INCL: [null],
            DS_OBSE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].minLength(this.numberDescricao),]],
            ID_LOGI_ENMA_FHNC_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]],
            materiais: this.formBuilder.array([]),
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
            TT_REGI_PAGI: [this.itemsPerPage],
        });
        this.formAllMateriais = this.formBuilder.group({
            buscarPor: ['NM_MATE'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required],
            ID_REFE_ERP: [null],
            NM_MATE: [null],
            NM_CLAS: [null],
            NM_LINH: [null],
            IN_STAT: ['1'],
        });
    }
    // Validação de formulário
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postFichasConformidade() {
        this.loadingNavBar = true;
        let params = JSON.parse(JSON.stringify(this.form.value));
        delete params['materiais'];
        this.fichasConformidadeService
            .postFichasConformidade(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pnotify.success('Ficha de não conformidade cadastrada com sucesso!');
                const id = response.body['data'];
                this.form.get('ID_LOGI_ENMA_FHNC').setValue(id);
                this.postMateriais(id);
                this.fichaId = id;
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getAllMateriais(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = this.formAllMateriais.value['IN_STAT'];
        _params.TT_REGI_PAGI = 15;
        const _obj = this.formAllMateriais.value;
        this.loadingAllMateriais = true;
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.entradaMateriaisService
            .getAllMateriais(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingAllMateriais = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.allMateriais = response.body['result'];
                this.totalItemsMaterial = response.body['result'].length;
                this.noAllMateriais = false;
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.allMateriais = [];
                this.noAllMateriais = true;
            }
        }, (error) => {
            this.pnotify.error();
            this.notasFiscais = [];
        });
    }
    getNotasMateriais(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = this.formNotasFiscais.value['IN_STAT'];
        _params.TT_REGI_PAGI = 10;
        _params.PAGI = this.formNotasFiscais.value['PAGI'];
        const _obj = this.formNotasFiscais.value;
        this.loadingNotasFiscais = true;
        this.noNotasFiscais = this.notasFiscais.length === 0 ? true : false;
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.notasFiscaisService
            .getNotasMateriais(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingNotasFiscais = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.notasFiscais = response['body']['data'];
                this.totalItems = response.body['total'];
                this.noNotasFiscais = false;
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.notasFiscais = [];
                this.noNotasFiscais = true;
            }
        }, (error) => {
            this.pnotify.error();
            this.notasFiscais = [];
        });
    }
    openModal(template, index) {
        this.index = index;
        this.noNotasFiscais = true;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    get formMateriais() {
        return this.form.get('materiais');
    }
    setMaterial(material) {
        const _material = Object.assign(Object.assign({}, material), { 'IN_MATE': false });
        const fg = this.form.get('materiais');
        fg.controls[this.index].patchValue(_material);
        fg.controls[this.index].get('TT_MATE').patchValue(undefined);
        fg.controls[this.index].get('TT_MATE_ORIG').patchValue(_material.TT_MATE);
        fg.controls[this.index].get('UUID_MATE').patchValue(_material.ID);
        fg.controls[this.index].get('ID_MATE').patchValue(_material.ID_MATE);
    }
    postMateriais(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let request = [];
            const materiais = this.formMateriais.getRawValue();
            if (!materiais) {
                return;
            }
            const promise = () => {
                materiais.forEach(material => {
                    const params = Object.assign(Object.assign({}, material), { 'ID_LOGI_ENMA_FHNC': id });
                    request.push(this.fichasConformidadeService
                        .postMateriais(params));
                });
            };
            yield Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["forkJoin"])(request)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
                this.loading = false;
                this.loadingNavBar = false;
            }))
                .subscribe((responses) => {
                responses.forEach(response => {
                    if (response.status === 200) {
                        this.pnotify.success('Material, salvo com sucesso!');
                        this.router.navigate(['../'], {
                            relativeTo: this.activatedRoute,
                        });
                    }
                    else {
                        this.pnotify.error();
                    }
                });
            }, (error) => {
                try {
                    this.pnotify.error(error.error.message);
                }
                catch (error) {
                    this.pnotify.error();
                }
            });
        });
    }
    getFormMaterial(params) {
        this.loading = true;
        this.fichasConformidadeService
            .getFormMaterial(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                this.noMateriais = true;
                return;
            }
            const materiais = response['body']['data'];
            const promise = () => materiais.forEach(() => this.onAddMaterial());
            yield Promise.resolve(promise());
            this.form.get('materiais').patchValue(materiais);
            this.noMateriais = false;
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum material');
            this.noMateriais = true;
        });
    }
    getNotasFiscaisMateriais(params) {
        this.loading = true;
        this.fichasConformidadeService
            .getNotasFiscaisMateriais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loading = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                this.noMateriais = true;
                return;
            }
            let materiais = response['body']['data'];
            const promise = () => materiais.forEach((material, index) => {
                this.onAddMaterial();
                materiais[index]['TT_MATE_ORIG'] = materiais[index]['TT_MATE'];
                materiais[index]['TT_MATE'] = null;
            });
            yield Promise.resolve(promise());
            this.form.get('materiais').patchValue(materiais);
            this.noMateriais = false;
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum material');
            this.noMateriais = true;
        });
    }
    onAddMaterial() {
        this.formMateriais.push(this.formBuilder.group({
            ID_LOGI_ENMA_FHNC_MATE: [null],
            ID_LOGI_ENMA_NOFI_MATE: [null],
            UUID_MATE: [null],
            ID_MATE: [null],
            IN_MATE: [true],
            NR_NOTA_FISC: [{ value: null, disabled: true }],
            NM_CLAS: [{ value: null, disabled: true }],
            DS_UNID_MEDI: ['TON', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]],
            TT_MATE_ORIG: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].min(0.01)]],
            TT_MATE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].min(0.01)]],
            DS_LOTE: [null],
            NM_MATE: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].required]
        }));
    }
    onCanAddMaterial(index) {
        const fg = this.form.get('materiais');
        if (fg.controls[index].get('NR_NOTA_FISC').value) {
            this.formMateriais.controls[index].get(['DS_LOTE']).disable();
            this.formMateriais.controls[index].get(['DS_UNID_MEDI']).disable();
            this.formMateriais.controls[index].get(['TT_MATE_ORIG']).disable();
            return false;
        }
        return fg.controls[index].get('IN_MATE').value;
    }
    onDeleteMaterial(index) {
        if (this.formMateriais.length === 1) {
            this.pnotify.notice('Informe ao menos um material.');
            return;
        }
        let materiais = this.formMateriais.at(index).value;
        materiais = Object.assign(Object.assign({}, materiais), { 'IN_STAT': '0' });
        if (!materiais['ID_LOGI_ENMA_FHNC_MATE']) {
            this.formMateriais.removeAt(index);
            return;
        }
        this.loadingNavBar = true;
        this.fichasConformidadeService
            .postMateriais(materiais)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_17__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.formMateriais.removeAt(index);
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    onNestedFieldError(formGroup, index, field) {
        if (this.onNestedFieldInvalid(formGroup, index, field)) {
            return 'is-invalid';
        }
        return '';
    }
    onNestedFieldInvalid(formGroup, index, field) {
        let nestedForm = this.form.controls[formGroup];
        field = nestedForm.controls[index].get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onNestedFieldRequired(formGroup, index, field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
        let nestedForm = this.form.controls[formGroup];
        if (nestedForm.controls[index].get(field).validator) {
            let validationResult = nestedForm.controls[index]
                .get(field)
                .validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onPageChanged(event) {
        this.formNotasFiscais.get('PAGI').setValue(event.page);
        this.getNotasMateriais();
    }
    onPageChangedMaterial(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    comparaQuantidade(index) {
        const _qtTotal = this.formMateriais.controls[index].get(['TT_MATE_ORIG']).value;
        const _qtNC = this.formMateriais.controls[index].get(['TT_MATE']).value;
        if (!_qtTotal || !_qtNC) {
            return false;
        }
        if (parseFloat(_qtTotal) < parseFloat(_qtNC)) {
            return true;
        }
        return false;
    }
};
LogisticaEntradaMateriaisFichasConformidadeCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] },
    { type: _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"] },
    { type: _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisService"] },
    { type: _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntradaMateriaisFichaConformidadeService"] },
    { type: _notas_fiscais_services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisNotasFiscaisService"] },
    { type: _tipos_conformidade_services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntradaMateriaisTiposConformidadeService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"] }
];
LogisticaEntradaMateriaisFichasConformidadeCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"],
        _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsLocaleService"],
        _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisService"],
        _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntradaMateriaisFichaConformidadeService"],
        _notas_fiscais_services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisNotasFiscaisService"],
        _tipos_conformidade_services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntradaMateriaisTiposConformidadeService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_8__["TitleService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]])
], LogisticaEntradaMateriaisFichasConformidadeCadastroComponent);



/***/ }),

/***/ "AVAL":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/tipos-conformidade/services/tipos-conformidade.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisTiposConformidadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisTiposConformidadeService", function() { return LogisticaEntradaMateriaisTiposConformidadeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaEntradaMateriaisTiposConformidadeService = class LogisticaEntradaMateriaisTiposConformidadeService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getTiposConformidade(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/tipo`, {
            params: params,
            observe: 'response',
        });
    }
    postTiposConformidade(params) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/tipo`, params, {
            observe: 'response',
        });
    }
    postResponsaveis(params) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/tipo/responsaveis`, params, {
            observe: 'response',
        });
    }
    getUsuarios(params) {
        return this.http.get(`${this.API}/core/mtcorp/usuarios`, {
            params: params,
            observe: 'response',
        });
    }
    getResponsaveis(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/tipo/responsaveis`, {
            params: params,
            observe: 'response',
        });
    }
};
LogisticaEntradaMateriaisTiposConformidadeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaEntradaMateriaisTiposConformidadeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaEntradaMateriaisTiposConformidadeService);



/***/ }),

/***/ "Anp4":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/entrada-materiais/consulta-recebimento-bobinas/consulta-recebimento-bobinas.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: SulFluminenseConsultaRecebimentoBobinasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseConsultaRecebimentoBobinasComponent", function() { return SulFluminenseConsultaRecebimentoBobinasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_consulta_recebimento_bobinas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./consulta-recebimento-bobinas.component.html */ "1SJI");
/* harmony import */ var _consulta_recebimento_bobinas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta-recebimento-bobinas.component.scss */ "AphN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let SulFluminenseConsultaRecebimentoBobinasComponent = class SulFluminenseConsultaRecebimentoBobinasComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.URL_MTCORP = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_MTCORP;
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matricula = btoa(this.currentUser['info']['matricula']);
        this.idUsuario = btoa(this.currentUser['info']['id']);
        this.url = `${this.URL_MTCORP}/MTCorp/app/modulos/abastecimento/consultaMateriaisRecebimento.php?m=${this.matricula}&u=${this.idUsuario}`;
    }
    ngOnInit() {
        this.onBreadCumbTree();
    }
    onBreadCumbTree() {
        this.activatedRoute.params.subscribe((params) => {
            this.idSubModulo = params['idSubModulo'];
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/sul-fluminense/home'
                },
                {
                    descricao: 'Entrada de materiais',
                    routerLink: `/sul-fluminense/entrada-materiais/${this.idSubModulo}`
                },
                {
                    descricao: 'Consulta de recebimento de bobinas'
                }
            ];
        });
    }
};
SulFluminenseConsultaRecebimentoBobinasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SulFluminenseConsultaRecebimentoBobinasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'consulta-recebimento-bobinas',
        template: _raw_loader_consulta_recebimento_bobinas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_consulta_recebimento_bobinas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], SulFluminenseConsultaRecebimentoBobinasComponent);



/***/ }),

/***/ "AphN":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/entrada-materiais/consulta-recebimento-bobinas/consulta-recebimento-bobinas.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZW50cmFkYS1tYXRlcmlhaXMvY29uc3VsdGEtcmVjZWJpbWVudG8tYm9iaW5hcy9jb25zdWx0YS1yZWNlYmltZW50by1ib2JpbmFzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "BVpy":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/motivos/cadastro/cadastro.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"MOTIVOS\">\n  <button \n    [disabled]=\"form.valid === false || loadingNavBar === true\"\n    (click)=\"postMotivos()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Dados do Motivo</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-6 pl-0\">\n            <label for=\"DS_LOGI_ENTR_MATE_MOTI\">Descrição</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"DS_LOGI_ENTR_MATE_MOTI\"\n              formControlName=\"DS_LOGI_ENTR_MATE_MOTI\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('DS_LOGI_ENTR_MATE_MOTI') + ' ' + onFieldRequired('DS_LOGI_ENTR_MATE_MOTI')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('DS_LOGI_ENTR_MATE_MOTI')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-3 pl-0\">\n            <label for=\"DS_LOGI_ENTR_MATE_CATE_MOTI\">Categoria</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"DS_LOGI_ENTR_MATE_CATE_MOTI\"\n              formControlName=\"DS_LOGI_ENTR_MATE_CATE_MOTI\"\n              [ngClass]=\"onFieldRequired('DS_LOGI_ENTR_MATE_CATE_MOTI')\">\n              <option value=\"aprovacao\">Aprovação</option>\n              <option value=\"solicitacao\">Solicitação</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('DS_LOGI_ENTR_MATE_CATE_MOTI')\" message=\"Categoria é obrigatório.\"></invalid-form-control>\n          </div> \n          <div class=\"form-group col-md-3 pl-0\">\n            <label for=\"IN_STAT\">Situação</label>\n            <select\n              class=\"form-control custom-select\"\n              id=\"IN_STAT\"\n              formControlName=\"IN_STAT\"\n              [ngClass]=\"onFieldRequired('IN_STAT')\">\n              <option value=\"1\">Ativo</option>\n              <option value=\"2\">Inativo</option>\n            </select>\n            <invalid-form-control [show]=\"onFieldInvalid('IN_STAT')\" message=\"Situação é obrigatório.\"></invalid-form-control>\n          </div> \n        </div>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Observação</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observação:</label>\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n    </fieldset>\n  </form>\n</app-body>");

/***/ }),

/***/ "CM2z":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/tipos-conformidade/lista/lista.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Tipos de Não Conformidade\">\n  <button\n  type=\"button\"\n  (click)=\"onExport()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"ID_LOGI_ENMA_FHNC_TIPO\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_LOGI_ENMA_FHNC_TIPO\"\n                formControlName=\"ID_LOGI_ENMA_FHNC_TIPO\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-4 pl-0\">\n              <label for=\"NM_TIPO\">Tipo de Não Conformidade</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NM_TIPO\"\n                formControlName=\"NM_TIPO\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-lg-1 pl-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('ID_LOGI_ENMA_FHNC_TIPO')\">\n                <thead-sorter value=\"ID\" [active]=\"ORDE_BY == 'ID_LOGI_ENMA_FHNC_TIPO'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('NM_TIPO')\">\n                <thead-sorter value=\"Tipo de não conformidade\" [active]=\"ORDE_BY == 'NM_TIPO'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th scope=\"col\" style=\"width:120px\"[hidden]=\"showDetailPanel\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let tipo of tiposConformidade\"  [class.table-active]=\"tipo?.ID_LOGI_ENMA_FHNC_TIPO == motivoSelecionado?.ID_LOGI_ENMA_FHNC_TIPO && showDetailPanel\">\n              <td [ngClass]=\"tipo.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n              {{tipo.ID_LOGI_ENMA_FHNC_TIPO }}\n              </td>\n              <td>{{ tipo.NM_TIPO | uppercase}}</td>\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\n                <span class=\"mr-3\" [tooltip]=\"tipo.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(tipo)\">\n                    <i [ngClass]=\"tipo.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', tipo.ID_LOGI_ENMA_FHNC_TIPO]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(tipo)\">\n                    <i class=\"fas fa-search\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\n      <detail-panel panelTitle=\"Detalhes\">\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label>Tipo de não conformidade</label>\n            <div *ngIf=\"tipoSelecionado?.NM_TIPO == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"tipoSelecionado?.NM_TIPO != null\">{{ tipoSelecionado.NM_TIPO | uppercase}}</div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label>Observação:</label>\n            <div *ngIf=\"tipoSelecionado?.DS_OBSE == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"tipoSelecionado?.DS_OBSE != null\">{{ tipoSelecionado?.DS_OBSE }}</div>\n          </div>\n        </div>\n        <hr>\n        <div [hidden]=\"!loadingResponsaveis\" class=\"text-muted\">\n          <p><strong>Buscando os Responsáveis...</strong></p>\n        </div>\n        <div *ngIf=\"!loadingResponsaveis && noResponsaveis\" class=\"text-muted\">\n          <p><strong>Nenhum Responsável vinculado!</strong></p>\n        </div>\n        <div class=\"form-group\" *ngIf=\"!loadingResponsaveis && !noResponsaveis\">\n          <label>Responsáveis</label>\n          <custom-table class=\"text-center\" >\n            <ng-template #thead let-thead>\n              <tr>\n                <th>Matricula</th>\n                <th>Nome</th>\n              </tr>\n            </ng-template>\n            <ng-template #tbody let-tbody>\n              <tr *ngFor=\"let item of responsaveis\">\n                <td>{{item.NR_MATR_RESP}}</td>\n                <td>{{item.NM_RESP}}</td>\n              </tr>\n            </ng-template>\n          </custom-table>\n        </div>\n        <hr>\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <label>Usuário Responsável Pelo Cadastro</label>\n            <div *ngIf=\"tipoSelecionado?.NR_MATR == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"tipoSelecionado?.NR_MATR != null\">{{tipoSelecionado?.NR_MATR}} - {{ tipoSelecionado?.NM_USUA }}</div>\n          </div>\n          <div class=\"form-group col\">\n            <label>Data do Cadastro</label>\n            <div *ngIf=\"tipoSelecionado?.DT_INCL == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"tipoSelecionado?.DT_INCL != null\">{{ tipoSelecionado?.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</div>\n          </div>\n        </div>\n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "CUr3":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/entrada-materiais/painel-bobinas-qualidade/painel-bobinas-qualidade.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZW50cmFkYS1tYXRlcmlhaXMvcGFpbmVsLWJvYmluYXMtcXVhbGlkYWRlL3BhaW5lbC1ib2JpbmFzLXF1YWxpZGFkZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "DU17":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/motivos/cadastro/cadastro.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisMotivosCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisMotivosCadastroComponent", function() { return LogisticaEntradaMateriaisMotivosCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "BVpy");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "QGXw");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_motivos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/motivos.service */ "4vrJ");



//Services



//Bootstrap


//Angular





let LogisticaEntradaMateriaisMotivosCadastroComponent = class LogisticaEntradaMateriaisMotivosCadastroComponent {
    constructor(formBuilder, pnotify, activatedRoute, localeService, motivosService, titleService, atividadesService) {
        this.formBuilder = formBuilder;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.localeService = localeService;
        this.motivosService = motivosService;
        this.titleService = titleService;
        this.atividadesService = atividadesService;
        this.breadCrumbTree = [];
        this.formData = [];
        //loading
        this.disabledForm = false;
        this.loading = false;
        this.loadingNavBar = false;
        //Interfaces
        this.motivos = [];
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_6__["utilsBr"].MASKS;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (_params.hasOwnProperty('id'))
            return this.getMotivos({ ID_LOGI_ENTR_MATE_MOTI: _params['id'] });
    }
    getMotivos(params) {
        this.loading = true;
        const _params = params !== null && params !== void 0 ? params : {};
        this.motivosService
            .getMotivos(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.motivos = response.body['data'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.motivos = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Cadastro';
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/home',
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Motivos',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_LOGI_ENTR_MATE_MOTI: [null],
            DS_LOGI_ENTR_MATE_MOTI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            DS_LOGI_ENTR_MATE_CATE_MOTI: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            IN_STAT: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
            DS_OBSE: [null],
            MATR_USUA_CADA: [null],
            DS_USUA_CADA: [null],
            DT_INCL: [null],
        });
    }
    // Validação de formulário
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postMotivos() {
        this.loadingNavBar = true;
        this.motivosService
            .postMotivos(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
};
LogisticaEntradaMateriaisMotivosCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"] },
    { type: _services_motivos_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisMotivosService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"] }
];
LogisticaEntradaMateriaisMotivosCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"],
        _services_motivos_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisMotivosService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"]])
], LogisticaEntradaMateriaisMotivosCadastroComponent);



/***/ }),

/***/ "H1OO":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/ocorrencias/ocorrencias.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent", function() { return LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ocorrencias.component.html */ "PMzd");
/* harmony import */ var _ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ocorrencias.component.scss */ "T5cb");
/* harmony import */ var _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/ficha-conformidade.service */ "blLz");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _parecer_services_parecer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../parecer/services/parecer.service */ "M5hd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









//Bootstrap




//rxjs


//interfaces
let LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent = class LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent {
    constructor(formBuilder, pnotify, modalService, localeService, parecerService, confirmModalService, fichasConformidadeService, atividadesService) {
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
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    set fichaId(id) {
        if (!id)
            return;
        this.setFormBuilder();
        this.form.get('ID_LOGI_ENMA_FHNC').setValue(id);
    }
    ;
    ngOnInit() {
        this.registrarAcesso();
        this.setFormBuilder();
        this.getParecer();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    ngOnDestroy() {
        if (this.modalRef != undefined) {
            this.modalRef.hide();
        }
    }
    // getOcorrencias(params?: Partial<ILogisticaEntradaMateriaisOcorrencias>) {
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
    getResponsaveis(params) {
        this.loadingNavBar = true;
        this.fichasConformidadeService
            .getResponsaveis(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                return;
            }
            const responsaveis = response['body']['data'];
            const promise = () => responsaveis.forEach(() => this.onAddResponsavel());
            yield Promise.resolve(promise());
            this.form.get('responsaveis').patchValue(responsaveis);
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum material');
        });
    }
    getParecer() {
        this.loadingParecer = true;
        this.parecerService
            .getParecer({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingParecer = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.parecer = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        });
    }
    //formulario
    setFormBuilder() {
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
                responsaveis: this.formBuilder.array([]),
            });
        }
        if (this.formUsuarios == undefined) {
            this.formUsuarios = this.formBuilder.group({
                buscarPor: ['nome'],
                pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
                matricula: [null],
                nome: [null],
            });
        }
    }
    // Validação de formulário
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    // onCanResponsavel():boolean{
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
    getUsuarios(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.situacao = '1';
        _params.qtItensPagina = 100;
        const _obj = this.formUsuarios.value;
        this.loadingUsuarios = true;
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.fichasConformidadeService
            .getUsuarios(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingUsuarios = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.usuarios = response.body['usuarios'];
                this.totalItems = response.body['usuarios'].length;
                this.noUsuarios = false;
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.usuarios = [];
                this.noUsuarios = true;
            }
        }, (error) => {
            this.pnotify.error();
            this.usuarios = [];
        });
    }
    setUsuarios(usuario) {
        const fg = this.form.get('responsaveis');
        fg.controls[this.index].get('ID_LOGI_ENMA_FHNC_OCOR').patchValue(usuario.matricula);
        fg.controls[this.index].get('NR_MATR_RESP').patchValue(usuario.matricula);
        fg.controls[this.index].get('ID_RESP').patchValue(usuario.id);
        fg.controls[this.index].get('NM_RESP').patchValue(usuario.nome);
    }
    postResponsaveis(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let request = [];
            const responsaveis = this.formResponsaveis.getRawValue();
            if (!responsaveis) {
                return;
            }
            const promise = () => {
                responsaveis.forEach(responsavel => {
                    const params = Object.assign(Object.assign({}, responsavel), { 'ID_LOGI_ENMA_FHNC_OCOR': id });
                    request.push(this.fichasConformidadeService
                        .postResponsaveis(params));
                });
            };
            yield Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["forkJoin"])(request)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
                this.loading = false;
                this.loadingNavBar = false;
            }))
                .subscribe((responses) => {
                this.pnotify.success('Responsáveis cadastrados com sucesso');
            }, (error) => {
                try {
                    this.pnotify.error(error.error.message);
                }
                catch (error) {
                    this.pnotify.error();
                }
            });
        });
    }
    onDeleteResponsavel(index) {
        if (this.formResponsaveis.length === 1) {
            this.pnotify.notice('Informe ao menos um responsável.');
            return;
        }
        const id = this.form.get('ID_LOGI_ENMA_FHNC');
        let responsaveis = this.formResponsaveis.at(index).value;
        responsaveis = Object.assign(Object.assign({}, responsaveis), { 'IN_STAT': '0' });
        if (!responsaveis['ID_RESP']) {
            this.formResponsaveis.removeAt(index);
            return;
        }
        this.loadingNavBar = true;
        this.fichasConformidadeService
            .postResponsaveis(responsaveis)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.formResponsaveis.removeAt(index);
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    // disabedSave():boolean {
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
    postOcorrencias() {
        this.loadingNavBar = true;
        let params = JSON.parse(JSON.stringify(this.form.value));
        delete params['responsaveis'];
        this.fichasConformidadeService
            .postOcorrencias(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const idOcorrencia = response.body['data'];
                this.form.get('ID_LOGI_ENMA_FHNC_OCOR').setValue(idOcorrencia);
                this.postResponsaveis(idOcorrencia);
                this.postDocumentosOcorrencia(idOcorrencia);
                this.fecharModal.emit(true);
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    get formResponsaveis() {
        return this.form.get('responsaveis');
    }
    onAddResponsavel() {
        this.formResponsaveis.push(this.formBuilder.group({
            ID_LOGI_ENMA_FHNC_OCOR: [null],
            ID_LOGI_ENMA_FHNC: [null],
            ID_RESP: [null],
            NR_MATR_RESP: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
            NM_RESP: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]],
        }));
    }
    openModal(template, index) {
        this.index = index;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    onNestedFieldError(formGroup, index, field) {
        if (this.onNestedFieldInvalid(formGroup, index, field)) {
            return 'is-invalid';
        }
        return '';
    }
    onNestedFieldInvalid(formGroup, index, field) {
        let nestedForm = this.form.controls[formGroup];
        field = nestedForm.controls[index].get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onNestedFieldRequired(formGroup, index, field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();
        let nestedForm = this.form.controls[formGroup];
        if (nestedForm.controls[index].get(field).validator) {
            let validationResult = nestedForm.controls[index]
                .get(field)
                .validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    postDocumentosOcorrencia(fichaId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let requests = [];
            if (this.formData.length === 0) {
                return requests;
            }
            const promise = () => {
                this.formData.forEach((element) => {
                    requests.push(this.fichasConformidadeService.postDocumentoOcorrencia(element, fichaId));
                });
            };
            Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["forkJoin"])(requests)
                .subscribe((responses) => {
                responses.forEach(response => {
                    if (response.status === 200) {
                        this.pnotify.success();
                    }
                    else {
                        this.pnotify.error();
                    }
                });
            }, (error) => {
                this.pnotify.error();
            });
            return requests;
        });
    }
    putDocumentoOcorrencia(documento) {
        const [type, title, message, cancelTxt, okTxt] = [
            'inactivate',
            'Confirmar inativação',
            'Deseja realmente prosseguir com a inativação do registro?',
            'Cancelar',
            'Confirmar',
        ];
        this.confirmModalService
            .showConfirm(type, title, message, cancelTxt, okTxt)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_13__["EMPTY"];
            this.loadingNavBar = true;
            return this.fichasConformidadeService.putDocumento(documento);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            this.pnotify.success('Documento atualizado com sucesso');
            this.getDocumentosOcorrencia({
                ID_LOGI_ENMA_FHNC_OCOR: this.form.get('ID_LOGI_ENMA_FHNC_OCOR').value,
                IN_STAT: '1',
            });
        });
    }
    getDocumentosOcorrencia(params) {
        this.fichasConformidadeService.getDocumentoOcorrencia(params).subscribe((response) => {
            if (response.status === 200) {
                this.documentos = response.body['data'];
            }
            else {
                this.documentos = [];
            }
        }, (error) => {
            this.documentos = [];
        });
    }
    onRemove(documento, index) {
        if (!documento.hasOwnProperty('ID_LOGI_ENMA_FHNC_DOCU')) {
            this.formData = this.formData.filter((element) => {
                return (element.get('file'))['name'] != documento.NM_DOCU;
            });
        }
        documento.IN_STAT = '0';
        this.documentos.splice(index, 1);
        if (documento.hasOwnProperty('ID_LOGI_ENMA_FHNC_DOCU')) {
            this.putDocumentoOcorrencia(documento);
        }
    }
    appendFile(files) {
        if (files.length === 0)
            return;
        const fd = new FormData();
        fd.append('file', files[0]);
        this.formData.push(fd);
        this.documentos.push({ NM_DOCU: files[0]['name'] });
    }
};
LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"] },
    { type: _parecer_services_parecer_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisParecerService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"] },
    { type: _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntradaMateriaisFichaConformidadeService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] }
];
LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent.propDecorators = {
    fichaId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
    fecharModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"] }]
};
LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'logistica-entrada-materiais-ficha-conformidade-ocorrencias',
        template: _raw_loader_ocorrencias_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ocorrencias_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"],
        _parecer_services_parecer_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisParecerService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalService"],
        _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntradaMateriaisFichaConformidadeService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]])
], LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent);



/***/ }),

/***/ "I+6W":
/*!************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/entrada-materiais.component.ts ***!
  \************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisComponent", function() { return LogisticaEntradaMateriaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_entrada_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./entrada-materiais.component.html */ "iJlz");
/* harmony import */ var _entrada_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entrada-materiais.component.scss */ "+/dK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/submodulos.service */ "KwnO");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/pipes/title-case.pipe */ "ciPE");









let LogisticaEntradaMateriaisComponent = class LogisticaEntradaMateriaisComponent {
    constructor(activatedRoute, router, subModulosService, atividadesService, pnotifyService, titleCasePipe) {
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
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getSubmodulo(params['idSubModulo']);
            this.getAtividadesInternas(params['idSubModulo']);
        });
    }
    registrarAcesso() {
        this.atividadesService
            .registrarAcesso()
            .subscribe();
    }
    getSubmodulo(idSubModulo) {
        this.subModulosService
            .getSubModulo(idSubModulo)
            .subscribe((response) => {
            if (response['status'] === 200) {
                this.appName = this.titleCasePipe.transform(response['body']['nome']);
                this.setBreadCrumb(this.appName);
            }
        });
    }
    getAtividadesInternas(idSubModulo) {
        this.atividadesService.getAtividadesInternas(idSubModulo).subscribe((response) => {
            if (response['responseCode'] === 200) {
                this.atividades = response['result'];
                this.loaderFullScreen = false;
            }
            else {
                this.handleAtividadesInternasError();
            }
        }, (error) => {
            this.handleAtividadesInternasError();
        });
    }
    setBreadCrumb(nomeSubModulo) {
        this.breadCrumbTree = [
            {
                descricao: 'Logistica',
                routerLink: '/logistica/home'
            },
            {
                descricao: nomeSubModulo
            }
        ];
    }
    handleAtividadesInternasError() {
        this.pnotifyService.error();
        this.loaderFullScreen = false;
    }
};
LogisticaEntradaMateriaisComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"] }
];
LogisticaEntradaMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrada-materiais',
        template: _raw_loader_entrada_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_entrada_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_requests_submodulos_service__WEBPACK_IMPORTED_MODULE_5__["SubModulosService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        src_app_shared_pipes_title_case_pipe__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]])
], LogisticaEntradaMateriaisComponent);



/***/ }),

/***/ "IuEw":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/status-recebimento/cadastro/cadastro.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"STATUS DE RECEBIMENTO\">\n  <button \n    [disabled]=\"form.valid === false || loadingNavBar === true\"\n    (click)=\"postStatusRecebimento()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Dados do Status de Recebimento</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-12 pl-0\">\n            <label for=\"NM_STAT\">Descrição</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NM_STAT\"\n              formControlName=\"NM_STAT\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('NM_STAT') + ' ' + onFieldRequired('NM_STAT')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NM_STAT')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Observação</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observação:</label>\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n    </fieldset>\n  </form>\n</app-body>");

/***/ }),

/***/ "LEko":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/status-recebimento/lista/lista.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"STATUS DE RECEBIMENTO\">\n  <button\n  type=\"button\"\n  (click)=\"onExport()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"ID_LOGI_ENMA_NOFI_STAT\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_LOGI_ENMA_NOFI_STAT\"\n                formControlName=\"ID_LOGI_ENMA_NOFI_STAT\"\n                placeholder=\"Digite...\"\n                (keydown.enter)=\"onFilter()\"\n              />\n            </div>\n            <div class=\"form-group col-md-4 pl-0\">\n              <label for=\"NM_STAT\">Descrição</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NM_STAT\"\n                formControlName=\"NM_STAT\"\n                placeholder=\"Digite...\"\n                (keydown.enter)=\"onFilter()\"\n              />\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"false\"\n                [items]=\"tipos\"\n                [virtualScroll]=\"true\"\n                labelForId=\"tipo\"\n                bindLabel=\"nome\"\n                bindValue=\"cod\"\n                id=\"tipo\"\n                (change)=\"onFilter()\"\n                formControlName=\"IN_STAT\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Selecione...\"\n              >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-lg-1 pl-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (keydown.enter)=\"onFilter()\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-5': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('ID_LOGI_ENMA_NOFI_STAT')\">\n                <thead-sorter value=\"ID\" [active]=\"ORDE_BY == 'ID_LOGI_ENMA_NOFI_STAT'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('NM_STAT')\">\n                <thead-sorter value=\"Descrição\" [active]=\"ORDE_BY == 'NM_STAT'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th scope=\"col\" style=\"width:120px\"[hidden]=\"showDetailPanel\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let status of statusRecebimento\"  [class.table-active]=\"status?.ID_LOGI_ENMA_NOFI_STAT == statusSelecionado?.ID_LOGI_ENMA_NOFI_STAT && showDetailPanel\">\n              <td  [ngClass]=\"status.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n                {{status.ID_LOGI_ENMA_NOFI_STAT }}\n              </td>\n              <td >{{ status.NM_STAT | uppercase}}</td>\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\n                <span class=\"mr-3\" [tooltip]=\"status.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(status)\">\n                    <i [ngClass]=\"status.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', status.ID_LOGI_ENMA_NOFI_STAT]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(status)\">\n                    <i class=\"fas fa-search\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-7 pr-0\" [hidden]=\"!showDetailPanel\">\n      <detail-panel panelTitle=\"Histórico de alteração\">\n        <custom-table>\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\">Data</th>\n              <th scope=\"col\">Usuário</th>\n              <th scope=\"col\">Ação</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let historico of historicos; let i = index\">\n              <td>{{ historico?.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}</td>\n              <td>({{historico?.NR_MATR}})&nbsp;{{ historico?.NM_USUA | uppercase }}</td>\n              <td>{{ getDescricaoAtualizaco(historico, i) }}</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "M5hd":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/parecer/services/parecer.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisParecerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisParecerService", function() { return LogisticaEntradaMateriaisParecerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaEntradaMateriaisParecerService = class LogisticaEntradaMateriaisParecerService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getParecer(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/parecer`, {
            params: params,
            observe: 'response',
        });
    }
    postParecer(parecer) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/parecer`, parecer, {
            observe: 'response',
        });
    }
};
LogisticaEntradaMateriaisParecerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaEntradaMateriaisParecerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaEntradaMateriaisParecerService);



/***/ }),

/***/ "N8Iq":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/ficha-conformidade/lista/lista.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"Fichas de Não Conformidade\">\n  <button\n  type=\"button\"\n  (click)=\"getRelatorio()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"ID_LOGI_ENMA_FHNC\">ID FNC</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_LOGI_ENMA_FHNC\"\n                formControlName=\"ID_LOGI_ENMA_FHNC\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"DT_INIC\">Data Inicial</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"DT_INIC\"\n                type=\"text\"\n                (keydown.enter)=\"onFilter()\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"DT_INIC\"\n                >\n              </div>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"DT_FINA\">Data Final</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"DT_FINA\"\n                type=\"text\"\n                (keydown.enter)=\"onFilter()\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"DT_FINA\"\n                >\n              </div>\n            </div>\n            <div class=\"form-group col-md-4 pl-0\">\n              <label for=\"ID_LOGI_ENMA_FHNC_TIPO\">Tipo de Não Conformidade</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"tiposConformidade\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingTiposConformidade\"\n                labelForId=\"ID_LOGI_ENMA_FHNC_TIPO\"\n                bindLabel=\"NM_TIPO\"\n                bindValue=\"ID_LOGI_ENMA_FHNC_TIPO\"\n                id=\"ID_LOGI_ENMA_FHNC_TIPO\"\n                formControlName=\"ID_LOGI_ENMA_FHNC_TIPO\"\n              >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"ficha\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"ficha\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"NR_NOTA_FISC\">NOTA FISCAL</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NR_NOTA_FISC\"\n                formControlName=\"NR_NOTA_FISC\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"DS_LOTE\">LOTE</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"DS_LOTE\"\n                formControlName=\"DS_LOTE\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-lg-6 pl-0\">\n              <label for=\"NM_MATE\">Material</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NM_MATE\"\n                formControlName=\"NM_MATE\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-lg-4 pl-0\">\n              <label for=\"IN_CONC\">STATUS DA OCORRÊNCIA</label>\n              <ng-select\n              [searchable]=\"false\"\n              [clearable]=\"false\"\n              [items]=\"status\"\n              [virtualScroll]=\"true\"\n              labelForId=\"ficha\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"status\"\n              formControlName=\"IN_CONC\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-lg-6 pl-0\">\n              <label for=\"NM_FORN\">Fornecedor</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NM_FORN\"\n                formControlName=\"NM_FORN\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\">\n    <div class=\"p-0 col-md-12\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult || loading\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('ID_LOGI_ENMA_FHNC')\">\n                <thead-sorter value=\"ID FNC\" [active]=\"ORDE_BY == 'ID_LOGI_ENMA_FHNC'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('DT_INCL')\">\n                <thead-sorter value=\"DATA DE ABERTURA DA FNC\" [active]=\"ORDE_BY == 'DT_INCL'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('NM_TIPO')\">\n                <thead-sorter value=\"TIPO DE NÃO CONFORMIDADE\" [active]=\"ORDE_BY == 'NM_TIPO'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('IN_CONC')\">\n                <thead-sorter value=\"STATUS DA OCORRÊNCIA\" [active]=\"ORDE_BY == 'IN_CONC'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th scope=\"col\" style=\"width:120px\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let ficha of fichasConformidade\"  [class.table-active]=\"ficha?.ID_LOGI_ENMA_FHNC == motivoSelecionado?.ID_LOGI_ENMA_FHNC && showDetailPanel\">\n              <td [ngClass]=\"ficha.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n              {{ficha.ID_LOGI_ENMA_FHNC }}\n              </td>\n              <td>{{ ficha.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</td>\n              <td>{{ ficha.NM_TIPO | uppercase}}</td>\n              <td *ngIf=\"ficha.IN_CONC == 1\">FINALIZADA</td>\n              <td *ngIf=\"ficha.IN_CONC != 1\">EM ANDAMENTO</td>\n              <td class=\"align-middle\">\n                <span class=\"mr-3\" [tooltip]=\"ficha.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(ficha)\">\n                    <i [ngClass]=\"ficha.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Editar\"  placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\"  [disabled]=\"ficha.IN_RESP == 0 || ficha.IN_CONC == 1\" [routerLink]=\"['./../', ficha.ID_LOGI_ENMA_FHNC]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n                <span   tooltip=\"Detalhe da Ficha\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\">\n                    <i class=\"fas fa-search\" (click)=\"openModal(detalhesFicha, ficha)\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n  <ng-template #detalhesFicha >\n    <div class=\"modal-header\" [hidden]=\"hiddenModal\">\n      <h4 class=\"modal-title pull-left\">Detalhes da FNC  -  ID {{fichaSelecionada?.ID_LOGI_ENMA_FHNC}}</h4>\n      <div>\n        <button\n          type=\"button\"\n          class=\"btn-icon-sm mx-3\"\n          tooltip=\"Download\"\n          container=\"body\"\n          (click)=\"onDownload(fichaSelecionada)\"\n          [disabled] = \"loadingMateriais\"\n        >\n          <i class=\"far fa-save\"></i>\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn-icon-sm mr-3\"\n          tooltip=\"Imprimir\"\n          container=\"body\"\n          [disabled] = \"loadingMateriais\" \n          (click)=\"onPrint()\"\n        >\n          <i class=\"fas fa-print\"></i>\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn-icon-sm\"\n          tooltip=\"Fechar\"\n          container=\"body\"\n          (click)=\"hideModal()\"\n        >\n          <i class=\"fas fa-times\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\" [hidden]=\"hiddenModal\" id=\"ficha-pdf\" >\n      <tabset>\n        <tab heading=\"Dados cadastrais\">\n          <div class=\"border-right border-left border-bottom px-3 pt-3\" >\n            <div >\n              <div class=\"form-row\">\n                <div class=\"form-group col-lg-6\">\n                  <label>ID FNC</label>\n                  <div *ngIf=\"fichaSelecionada?.ID_LOGI_ENMA_FHNC == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"fichaSelecionada?.ID_LOGI_ENMA_FHNC != null\">{{fichaSelecionada?.ID_LOGI_ENMA_FHNC}}</div>\n                </div>\n                <div class=\"form-group col-lg-6\">\n                  <label>Tipo de Não Conformidade</label>\n                  <div *ngIf=\"fichaSelecionada?.NM_TIPO == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"fichaSelecionada?.NM_TIPO != null\">{{ fichaSelecionada?.NM_TIPO}}</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-lg-12\">\n                  <label>Observação</label>\n                  <div *ngIf=\"fichaSelecionada?.DS_OBSE == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"fichaSelecionada?.DS_OBSE != null\">{{ fichaSelecionada?.DS_OBSE }}</div>\n                </div>\n              </div>\n              <hr>\n              <div class=\"form-row\">\n                <div class=\"form-group col-lg-12\">\n                  <label>Materiais</label>\n                </div>\n              </div>\n              <div [hidden]=\"!loadingMateriais\" class=\"col-lg-12 text-muted \">\n                <p><strong>Buscando os materiais da ficha de não conformidade...</strong></p>\n              </div>\n              <custom-table class=\"text-center\" *ngIf=\"!loadingMateriais && !noMateriais\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th>ID </th>\n                    <th>Nota Fiscal</th>\n                    <th>Classe</th>\n                    <th>Lote</th>\n                    <th>Material</th>\n                    <th>Un. Medida</th>\n                    <th>Quantidade Total</th>\n                    <th>Quantidade NC</th>\n                  </tr>\n                </ng-template>\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let item of materiais\">\n                    <td>{{item.ID_MATE}}</td>\n                    <td *ngIf=\"item.NR_NOTA_FISC != null\">{{item.NR_NOTA_FISC}}</td>\n                    <td *ngIf=\"item.NR_NOTA_FISC == null\">NÃO INFORMADO</td>\n                    <td>{{item.NM_CLAS}}</td>\n                    <td *ngIf=\"item.DS_LOTE != null\" >{{item.DS_LOTE}}</td>\n                    <td *ngIf=\"item.DS_LOTE == null\" >NÃO INFORMADO</td>\n                    <td>{{item.NM_MATE}}</td>\n                    <td>{{item.DS_UNID_MEDI}}</td>\n                    <td>{{item.TT_MATE_ORIG | number:'1.3-3' }}</td>\n                    <td>{{item.TT_MATE | number:'1.3-3' }}</td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n              <div [hidden]=\"loadingMateriais || !noMateriais\" class=\"text-center d-flex justify-content-center align-items-center pb-3\">\n                <empty-result message=\"Nenhum material encontrado\"></empty-result>\n              </div>\n              <hr>\n              <div class=\"form-row\">\n                <div class=\"form-group col\">\n                  <label>Usuário Responsável Pelo Cadastro</label>\n                  <div *ngIf=\"fichaSelecionada?.NR_MATR == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"fichaSelecionada?.NR_MATR != null\">{{fichaSelecionada?.NR_MATR}} - {{ fichaSelecionada?.NM_USUA }}</div>\n                </div>\n                <div class=\"form-group col\">\n                  <label>Data do Cadastro</label>\n                  <div *ngIf=\"fichaSelecionada?.DT_INCL == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"fichaSelecionada?.DT_INCL != null\">{{ fichaSelecionada?.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</div>\n                </div>\n                <div class=\"form-group col\" *ngIf=\"fichaSelecionada?.DT_ATUA != null\">\n                  <label>Data da Atualização</label>\n                  <div *ngIf=\"fichaSelecionada?.DT_ATUA == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"fichaSelecionada?.DT_ATUA != null\">{{ fichaSelecionada?.DT_ATUA | date: 'dd/MM/yyyy HH:mm'}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </tab>\n        <tab heading=\"Ocorrências\">\n          <div class=\"border-right border-left border-bottom px-3 pt-3\"  >\n            <div class=\"form-row\">\n              <div class=\"form-group col justify-content-between text-center m-0\" *ngIf=\"fichaSelecionada?.IN_CONC == 1\">\n                <blockquote class=\"blockquote text-center m-0\">\n                  <p class=\"mb-0 text-success\"> FICHA CONCLUÍDA </p>\n                  <footer class=\"blockquote-footer\">Essa ficha foi concluída, sendo assim não é permitido inserir novo parecer!</footer>\n                </blockquote>\n              </div>\n              <div class=\"form-group col-10 mb-0 d-flex justify-content-between\" *ngIf=\"fichaSelecionada?.IN_CONC == 0\">\n                <button \n                  type=\"button\" \n                  class=\"btn btn-default btn-lg m-2 pull-right\"\n                  (click)=\"finalizarFicha(fichaSelecionada)\"\n                  [disabled]=\"fichaSelecionada?.IN_RESP == 0 || disabledButton == true\"\n                >\n                <span aria-hidden=\"true\">\n                  <i class=\" text-primary fas fa-check\"></i>\n                </span>Finalizar Ficha\n                </button>\n              </div>\n              <div class=\"form-group col mb-0 d-flex justify-content-between\" *ngIf=\"fichaSelecionada?.IN_CONC == 0 \">\n                <button \n                  type=\"button\" \n                  class=\"btn btn-default btn-lg m-2 pull-right\"\n                  (click)=\"openModalOcorrencias(formOcorrencias)\"\n                  [disabled]=\"fichaSelecionada?.IN_RESP == 0\"\n                >\n                <span aria-hidden=\"true\">\n                  <i class=\" text-success fas fa-plus\"></i>\n                </span>Adicionar Parecer\n                </button>\n              </div>\n            </div>\n            <hr>\n            <div *ngIf=\"loadingDocumentosOcorrencias || loadingResponsaveisOcorrencias\" class=\"col-lg-12 text-muted \">\n              <p><strong>Buscando as ocorrências da ficha de não conformidade...</strong></p>\n            </div>\n            <div class=\"scroll-ocorrencias\" *ngIf=\"!noOcorrencias\">\n              <div class=\"col-md-12 mx-2 pb-3 \" data-spy=\"scroll\" *ngFor=\"let ocorrencia of ocorrencias\" >\n                <div class=\"card mr-3\" *ngIf=\"!loadingDocumentosOcorrencias && !loadingResponsaveisOcorrencias\">\n                  <div class=\"card-body p-2\">\n                    <h5 class=\"card-title mb-1\" >{{ocorrencia.NR_SQNC}} - {{ocorrencia.NM_PARE}}</h5>\n                    <p class=\"card-text m-2\"><strong> Código: </strong> {{ocorrencia.ID_LOGI_ENMA_FHNC_OCOR}}</p>\n                    <p class=\"card-text m-2\"><strong> Descrição: </strong> {{ocorrencia.DS_OBSE}}</p>\n                    <ul class=\"pl-0\">\n                      <li class=\"d-flex\" *ngFor=\"let item of documentosOcorrencia[ocorrencia.ID_LOGI_ENMA_FHNC_OCOR];\">\n                        <div class=\"d-flex\">\n                          <div>\n                            <strong class=\"ml-2\">{{ item.NM_DOCU }}</strong>\n                          </div>\n                          <div class=\"ml-4\" *ngIf=\"item.TP_DOCU == 'DOCUMENTO'\">\n                            <a href=\"{{ item.LINK }}\" target=\"_blank\" class=\"btn-icon-sm\">\n                              <i class=\"fas fa-download\"></i>\n                            </a>\n                          </div>\n                          <div class=\"ml-4\" *ngIf=\"item.TP_DOCU == 'IMAGEM'\">\n                            <a href=\"{{ item.LINK }}\" target=\"_blank\" class=\"btn-icon-sm\">\n                              <i class=\"fas fa-eye\"></i>\n                            </a>\n                          </div>\n                        </div>\n                      </li>\n                    </ul>\n                    <div>\n                      <ul class=\"pl-0 m-0\">\n                        <li class=\"d-flex\" *ngFor=\"let item of responsaveisOcorrencia[ocorrencia.ID_LOGI_ENMA_FHNC_OCOR];\">\n                          <div class=\"d-flex\">\n                            <div>\n                              <p class=\"card-text ml-2\">{{ocorrencia.NM_USUA | name }} atribuiu a ficha de não conformidade para: <strong>{{ item.NR_MATR_RESP }} - {{ item.NM_RESP }}</strong></p>\n                            </div>\n                          </div>\n                        </li>\n                      </ul>\n                    </div>\n                    <p class=\"text-right m-0\"><small class=\"text-muted\"><cite>{{ocorrencia.NR_MATR}} - {{ocorrencia.NM_USUA | uppercase}}</cite></small></p>\n                    <p class=\"text-right m-0\"><small class=\"text-muted\">{{ocorrencia.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</small></p>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div  *ngIf=\"noOcorrencias && !loadingOcorrencias\" class=\"d-flex justify-content-center mb-3\">\n              <empty-result message=\"Nenhuma ocorrência encontrada\"></empty-result>\n            </div>\n          </div>\n        </tab>\n        <tab heading=\"Documentos\">\n          <div class=\"border-right border-left border-bottom px-3 pt-3\" >\n            <div *ngIf=\"totalImagens != 0\">\n              <blockquote class=\"blockquote\">\n                <p class=\"mb-0\">Imagens</p>\n              </blockquote>\n              <div class=\"row ScrollImagem\" >\n                <div class=\"col-md-4 mb-4\" *ngFor=\"let imagem of imagens\">\n                  <div class=\"card\" >\n                    <img class=\"card-img-responsive\" src=\"{{imagem.LINK}}\" style=\"height: 150px;\">\n                    <div class=\"card-body\">\n                      <p class=\"card-text\"><strong>{{imagem.NM_DOCU}}</strong></p>\n                      <p class=\"card-text mb-2\">{{imagem.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</p>\n                      <p class=\"card-text mb-2\">{{imagem.NM_USUA}}</p>\n                      <p class=\"card-text-right\">\n                        <a\n                          [href]=\"imagem.LINK\"\n                          target=\"_blank\"\n                          class=\"btn-icon-sm text-black\"\n                          tooltip=\"visualizar\"\n                        >\n                          <i class=\"far fa-eye\"></i>\n                        </a>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr *ngIf=\"totalImagens != 0 && totalDocumentos != 0 \">\n            <div  *ngIf=\"totalDocumentos != 0\">\n              <blockquote class=\"blockquote\">\n                <p class=\"mb-0\">Documentos</p>\n              </blockquote>\n              <ul class=\" pl-0\">\n                <li class=\"d-flex justify-content-between\" *ngFor=\"let documento of documentos;\">\n                  <div>{{ documento.NM_DOCU | uppercase }}</div>\n                  <div>\n                    <a\n                      [href]=\"documento.LINK\"\n                      target=\"_blank\"\n                      class=\"btn-icon-sm mx-2 text-black\"\n                      tooltip=\"Baixar\"\n                    >\n                    <i class=\"fas fa-download\"></i>\n                    </a>\n                  </div>\n                </li>\n              </ul>\n            </div>\n            <div [hidden]=\"totalImagens != 0 || totalDocumentos != 0\" class=\"text-center d-flex justify-content-center align-items-center pb-4\" style=\"height: 80%\">\n              <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n            </div>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n  </ng-template>\n  <ng-template #formOcorrencias>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Nova Ocorrência</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModalOcorrencias()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\" >\n      <logistica-entrada-materiais-ficha-conformidade-ocorrencias\n      [fichaId] = \"fichaId\"\n      (fecharModal)=\"onFecharModal($event)\"\n      >\n      </logistica-entrada-materiais-ficha-conformidade-ocorrencias>\n    </div>\n  </ng-template>\n</app-body>");

/***/ }),

/***/ "OGJj":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/motivos/lista/lista.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisMotivosListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisMotivosListaComponent", function() { return LogisticaEntradaMateriaisMotivosListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "4OIG");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "qwBI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_motivos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/motivos.service */ "4vrJ");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");



//angular



//servicos







// rxjs


let LogisticaEntradaMateriaisMotivosListaComponent = class LogisticaEntradaMateriaisMotivosListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, motivosService, formBuilder, xlsxService, confirmModalService, routerService, dateService, detailPanelService) {
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
        this.showDetailPanel = false;
        //LOADINGS
        this.loading = true;
        this.loadingNavBar = false;
        //VARIAVEIS
        this.totalItens = [];
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        // Tipos de Situação dos Motivos (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '2',
                nome: 'Inativos',
            },
        ];
        // Tipos de Categorias
        this.categorias = [
            {
                cod: '1',
                nome: 'Aprovação',
            },
            {
                cod: '2',
                nome: 'Solicitação',
            },
        ];
        // Subtitles (Ativo/Inativo)
        this.subtitles = [
            {
                id: 1,
                text: 'Ativo',
                color: 'green',
            },
            {
                id: 2,
                text: 'Inativo',
                color: 'red',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.onDetailPanelEmitter();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getMotivos(this.getParams());
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            TIME: [new Date().getTime()],
        });
    }
    buildForm() {
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
            TIME: [new Date().getTime()],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Motivos',
            },
        ];
    }
    onFilter() {
        this.detailPanelService.hide();
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    onDetails(status) {
        // this.getEmpresasProdutos({
        //   ID_TECN_INFO_ESTO_PROD: produto.ID_TECN_INFO_ESTO_PROD,
        // });
        this.loadingNavBar = true;
        this.detailPanelService.show();
        this.motivoSelecionado = status;
        this.detailPanelService.loadedFinished(false);
        setTimeout(() => {
            this.loadingNavBar = false;
        }, 500);
    }
    getMotivos(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.motivosService
            .getMotivos(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.motivos = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.motivos = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.onFilter();
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    classStatusBorder(status) {
        let borderClass;
        if (status.IN_STAT == 1) {
            borderClass = 'border-success';
        }
        else if (status.IN_STAT == 2) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    changeType(status) {
        const stat = status.IN_STAT == 1 ? 0 : 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
            this.loadingNavBar = true;
            status.IN_STAT = stat;
            return this.motivosService.postMotivos(status);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            status.IN_STAT = status.IN_STAT == 1 ? 0 : 1;
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.motivos.concat(this.totalItens);
        this.xlsxService.exportFile(listagemExport, `Motivos${dataExport}`);
    }
};
LogisticaEntradaMateriaisMotivosListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_motivos_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisMotivosService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"] }
];
LogisticaEntradaMateriaisMotivosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrada-materiais-motivos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_motivos_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisMotivosService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]])
], LogisticaEntradaMateriaisMotivosListaComponent);



/***/ }),

/***/ "PMzd":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/ficha-conformidade/ocorrencias/ocorrencias.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n  <fieldset  class=\"col-12\">\n    <fieldset class=\"border rounded shadow-sm col-12 pt-2 mx-auto\">\n      <legend>Dados da Ocorrência</legend>\n      <div class=\"form-row justify-content-center\">\n        <div class=\"form-group col-md-12 pl-0\">\n          <label for=\"parecer\">Parecer</label>\n          <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"parecer\"\n            [virtualScroll]=\"true\"\n            placeholder=\"Selecione...\"\n            [loading]=\"loadingParecer\"\n            labelForId=\"ID_LOGI_ENMA_FHNC_OCPR\"\n            bindLabel=\"NM_PARE\"\n            bindValue=\"ID_LOGI_ENMA_FHNC_OCPR\"\n            id=\"ID_LOGI_ENMA_FHNC_OCPR\"\n            formControlName=\"ID_LOGI_ENMA_FHNC_OCPR\"\n            [ngClass]=\"onFieldError('ID_LOGI_ENMA_FHNC_OCPR') + ' ' + onFieldRequired('ID_LOGI_ENMA_FHNC_OCPR')\">\n          </ng-select>\n          <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_ENMA_FHNC_OCPR')\" message=\"Parecer é obrigatório.\"></invalid-form-control>\n        </div>\n      </div>\n      <div class=\"form-row justify-content-center\">\n        <div class=\"form-group col-md-12 pl-0\">\n          <label for=\"DS_OBSE\">Descrição</label>\n          <textarea \n            class=\"form-control\" \n            id=\"DS_OBSE\"\n            formControlName=\"DS_OBSE\" \n            rows=\"3\"\n            [ngClass]=\"onFieldError('DS_OBSE') + ' ' + onFieldRequired('DS_OBSE')\"\n            >\n          </textarea>\n          <invalid-form-control [show]=\"onFieldInvalid('DS_OBSE')\" message=\"Descrição do parecer é obrigatório.\"></invalid-form-control>\n        </div> \n      </div>\n    </fieldset>\n    <br>\n    <fieldset class=\"border rounded shadow-sm col-12 pt-2 mx-auto\">\n      <legend>Responsáveis</legend>\n      <div formArrayName=\"responsaveis\">\n        <div class=\"form-row\">\n          <div class=\"form-group col mb-0 d-flex justify-content-between\">\n            <div class=\"mtc-title\"></div>\n            <div>\n              <a\n                class=\"text-secondary\"\n                (click)=\"onAddResponsavel()\"\n                href=\"javascript:void(0)\">\n                <b>Adicionar</b>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\"  *ngFor=\"let item of formResponsaveis.controls; let i = index\" [formGroupName]=\"i\">\n          <div class=\"form-group col mb-0\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-3 pl-0\">\n                <label for=\"NR_MATR_RESP\">Matricula</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"NR_MATR_RESP\"\n                  formControlName=\"NR_MATR_RESP\"\n                  placeholder=\"Digite...\"\n                  [ngClass]=\"onNestedFieldError('responsaveis', i, 'NR_MATR_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NR_MATR_RESP')\"\n                >\n              </div>\n              <div class=\"form-group col-md-8 pl-0\">\n                <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                  <label class=\"my-auto\" for=\"NM_RESP\">Responsável</label>\n                  <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\n                    <a\n                      class=\"text-primary\"\n                      href=\"javascript:void(0)\"\n                      (click)=\"openModal(selecionarUsuarios, i)\">\n                      <strong>Selecionar</strong>\n                    </a>\n                  </div>\n                </div>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"NM_RESP\"\n                  formControlName=\"NM_RESP\"\n                  [ngClass]=\"onNestedFieldError('responsaveis', i, 'NM_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NM_RESP')\">\n              </div>\n              <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\n                <button\n                  type=\"button\"\n                  class=\"btn-icon\"\n                  (click)=\"onDeleteResponsavel(i)\">\n                  <i class=\"fas fa-trash\"></i>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n    </fieldset>\n    <br>\n    <fieldset class=\"border rounded shadow-sm col-12 pt-2 pb-2 mx-auto\">\n      <legend>Documentos</legend>\n      <div class=\"form-group border rounded p-1\">\n        <div>\n          <label for=\"documento\" class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\" style=\"cursor: pointer;\">\n            <span>Novo Documento</span>\n          </label>\n          <input\n            id=\"documento\"\n            type=\"file\"\n            (change)=\"appendFile($event.target.files)\"\n            class=\"d-none\"\n            >\n        </div>\n      </div>\n      <ul>\n        <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos ; let index = index\">\n          <div>{{ item.NM_DOCU | uppercase }}</div>\n          <div>\n            <a\n              [hidden]=\"!item.ID_LOGI_ENMA_FHNC_DOCU\"\n              [href]=\"item.LINK\"\n              target=\"_blank\"\n              class=\"btn-icon-sm mx-2 text-black\"\n              tooltip=\"visualizar\"\n            >\n              <i class=\"far fa-eye\"></i>\n            </a>\n            <button\n              class=\"btn-icon-sm mx-2 hover\"\n              tooltip=\"excluir\"\n              (click)=\"onRemove(item, index)\"\n              >\n              <i class=\"fas fa-trash\"></i>\n            </button>\n          </div>\n        </li>\n      </ul>\n    </fieldset>    \n  </fieldset>\n</form>\n<div  class=\"form-row justify-content-center text-center\">\n  <button \n    type=\"button\" \n    class=\"btn btn-default btn-lg m-2\"\n    (click)=\"postOcorrencias()\"\n    [disabled]=\"form.valid == false \"\n  >\n    <span aria-hidden=\"true\">\n     <i class=\" text-success fas fa-thumbs-up\"></i>\n    </span>Salvar\n  </button>\n</div>\n<ng-template #selecionarUsuarios>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Pesquisa de Responsáveis</h4>\n    <div class=\"d-flex justify-content-center align-items-center\">\n      <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingUsuarios\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <advanced-filter>\n      <form [formGroup]=\"formUsuarios\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-3\">\n            <label for=\"cdItem\">BUSCAR POR</label>\n            <select\n              class=\"form-control custom-select\"\n              formControlName=\"buscarPor\"\n            >\n              <option value=\"matricula\">Matricula</option>\n              <option value=\"nome\" selected> Nome Responsável</option>\n            </select>\n          </div>\n          <div class=\"form-group col-9\">\n            <label>TERMO DE PESQUISA</label>\n            <div class=\"input-group\">\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"pesquisa\"\n                >\n                <div class=\"input-group-append\">\n                  <span \n                    [tooltip]=\"formUsuarios.valid == false ? 'Digite um termo de pesquisa':''\"\n                    container=\"body\"\n                    placement =\"left\"\n                  >\n                    <button\n                    style=\"height: 25px;\"\n                      [disabled]=\"formUsuarios.valid == false\"\n                      class=\"input-group-text hover\"\n                      (click)=\"getUsuarios()\"\n                      >\n                      <i class=\"fas fa-search\"></i>\n                    </button>\n                  </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </advanced-filter>\n    <custom-table *ngIf=\"!loadingUsuarios && !noUsuarios\" class=\"text-center\">\n      <ng-template #thead let-thead>\n        <tr>\n          <th>Matricula</th>\n          <th>Nome Responsável</th>\n          <th></th>\n        </tr>\n      </ng-template>\n      <ng-template #tbody let-tbody>\n        <tr *ngFor=\"let usuario of usuarios | slice : begin : end; let i = index\">\n          <td>{{ usuario.matricula }}</td>\n          <td>{{ usuario.nome }}</td>\n          <td>\n            <button\n              class=\"btn-icon-sm\"\n              tooltip=\"Salvar Responsável\"\n              container=\"body\"\n              (click)=\"setUsuarios(usuario);modalRef.hide()\"\n            >\n              <i class=\"far fa-save\"></i>\n            </button>\n          </td>\n        </tr>\n      </ng-template>\n    </custom-table>\n    <div *ngIf=\"totalItems > itemsPerPage\">\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n      <pagination\n        [maxSize]=\"10\"\n        [totalItems]=\"totalItems\"\n        (pageChanged)=\"onPageChanged($event)\"\n        [(itemsPerPage)]=\"itemsPerPage\"\n        [boundaryLinks]=\"true\"\n        [(ngModel)]=\"currentPage\"\n        previousText=\"&lsaquo;\"\n        nextText=\"&rsaquo;\"\n        firstText=\"&laquo;\"\n        lastText=\"&raquo;\">\n      </pagination>\n    </div>\n  </div>\n</ng-template>");

/***/ }),

/***/ "QGXw":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/motivos/cadastro/cadastro.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL21vdGl2b3MvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Rk3r":
/*!******************************************************!*\
  !*** ./src/app/shared/services/core/date.service.ts ***!
  \******************************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let DateService = class DateService {
    constructor() {
        this.months = [
            'Enero',
            'Febrero',
            'Marzon',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
        ];
        this.weeks = [
            'Domingo',
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes',
            'Sábado',
        ];
    }
    sameDay(dateA, dateB) {
        return (dateA.getFullYear() === dateB.getFullYear() &&
            dateA.getMonth() === dateB.getMonth() &&
            dateA.getDate() === dateB.getDate());
    }
    getHourMinute(date) {
        const getHours = date.getHours();
        const getMinutes = date.getMinutes();
        let hours, minutes;
        if (getHours < 10) {
            hours = `0${getHours}`;
        }
        else {
            hours = getHours;
        }
        if (getMinutes < 10) {
            minutes = `0${getMinutes}`;
        }
        else {
            minutes = getMinutes;
        }
        return `${hours}:${minutes}`;
    }
    getFullDate(dateA, dateB, showTime = true) {
        const day = dateA.getDate();
        const weekDay = dateA.getDay();
        const month = dateA.getMonth();
        const year = dateA.getFullYear();
        const hour = this.getHourMinute(dateA);
        if (showTime) {
            if (dateB) {
                const hourB = this.getHourMinute(dateB);
                return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year}, desde ${hour} hasta ${hourB}`;
            }
            return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year} hasta ${hour}`;
        }
        else {
            return `${this.weeks[weekDay]}, ${day} de ${this.months[month]} del ${year}`;
        }
    }
    getFullMonth(date) {
        return this.months[date.getMonth()];
    }
    getFirstDayYear() {
        let date = new Date();
        return new Date(date.getFullYear(), 0, 1);
    }
    getLastDayYear() {
        let date = new Date();
        return new Date(date.getFullYear(), 11, 31);
    }
    getFirstDayMonth() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }
    getLastDayMonth() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    getToday() {
        let date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    convert2PhpDate(date) {
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let h = date.getHours();
        let i = date.getMinutes();
        if (m < 10)
            m = `0${m}`;
        if (d < 10)
            d = `0${d}`;
        if (h < 10)
            h = `0${h}`;
        if (i < 10)
            i = `0${i}`;
        return `${y}-${m}-${d} ${h}:${i}`;
    }
    convertToBrazilianDate(date) {
        let y = date.getFullYear().toString();
        let m = (date.getMonth() + 1).toString().padStart(2, '0');
        let d = date.getDate().toString().padStart(2, '0');
        let h = date.getHours().toString().padStart(2, '0');
        let i = date.getMinutes().toString().padStart(2, '0');
        let s = date.getSeconds().toString().padStart(2, '0');
        return `${d}/${m}/${y} ${h}:${i}:${s}`;
    }
    convertMysqlTime(time) {
        if (time !== null) {
            let timeSplit = time.split(':');
            return `${timeSplit[0]}:${timeSplit[1]}`;
        }
        return time;
    }
    convertToUrlDate(date) {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        if (d < 10)
            d = `0${d}`;
        if (m < 10)
            m = `0${m}`;
        return `${d}-${m}-${y}`;
    }
    convertStringToDate(stringDate, dateType) {
        let date;
        if (stringDate.indexOf(':') > -1) {
            const stringDateSplit = stringDate.split(' ');
            const dateSplit = stringDateSplit[0].split('-');
            const timeSplit = stringDateSplit[1].split(':');
            if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
            }
            else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2), timeSplit[0], timeSplit[1], timeSplit[2]);
            }
        }
        else {
            const dateSplit = stringDate.split('-');
            if (dateType == 'latam') {
                date = new Date(dateSplit[2], parseInt(dateSplit[1]) - 1, dateSplit[0].substr(0, 2));
            }
            else if (dateType == 'usa') {
                date = new Date(dateSplit[0], parseInt(dateSplit[1]) - 1, dateSplit[2].substr(0, 2));
            }
        }
        return date;
    }
    formatWithSlashes(stringDate, dateType) {
        const dateSplit = stringDate.split('-');
        let date;
        if (dateType == 'latam') {
            date = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
        }
        else if (dateType == 'usa') {
            date = `${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}`;
        }
        return date;
    }
    addDaysToDate(date, days) {
        return new Date(date.setDate(date.getDate() + days));
    }
};
DateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], DateService);



/***/ }),

/***/ "SckD":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/cadastro/cadastro.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisNotasFiscaisCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisNotasFiscaisCadastroComponent", function() { return LogisticaEntradaMateriaisNotasFiscaisCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "jpKr");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "pYpU");
/* harmony import */ var _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../shared/services/core/router.service */ "w8rm");
/* harmony import */ var _status_recebimento_services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../status-recebimento/services/status-recebimento.service */ "9bNu");
/* harmony import */ var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/notas-fiscais.service */ "81bo");
/* harmony import */ var _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/entrada-materiais.service */ "mfeq");






//Services



//Bootstrap


//Angular



//rxjs




//interfaces
let LogisticaEntradaMateriaisNotasFiscaisCadastroComponent = class LogisticaEntradaMateriaisNotasFiscaisCadastroComponent {
    constructor(formBuilder, pnotify, router, activatedRoute, modalService, localeService, statusRecebimentoService, dateService, notasFiscaisService, entradaMateriaisService, titleService, routerService, atividadesService) {
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
        this.disabledForm = false;
        //loading
        this.loading = false;
        this.loadingNavBar = false;
        this.loadingStatusRecebimento = false;
        //Interfaces
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
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
        this.getStatusRecebimento();
        this.getEmpresas();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (_params.hasOwnProperty('id')) {
            this.getNotasFiscais({ ID_LOGI_ENMA_NOFI: _params['id'] });
            this.getNotasMateriais({ ID_LOGI_ENMA_NOFI: _params['id'], IN_STAT: '1' });
        }
        else {
            this.onAddMaterial();
        }
    }
    getFornecedores(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = this.formPesquisaFornecedor.value['IN_STAT'];
        _params.IN_PAGI = '0';
        const _obj = this.formPesquisaFornecedor.value;
        this.loadingFornecedores = true;
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.entradaMateriaisService
            .getFornecedores(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingFornecedores = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                if (response.body['responseCode'] === 404) {
                    this.pnotify.notice('Nenhum registro encontrado!');
                    this.fornecedores = [];
                    this.noFornecedor = true;
                    return;
                }
                this.fornecedores = response.body['result'];
                this.totalItems = response.body['result'].length;
                this.noFornecedor = false;
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.fornecedores = [];
                this.noFornecedor = true;
            }
        }, (error) => {
            this.pnotify.error();
            this.fornecedores = [];
        });
    }
    getEmpresas(params) {
        this.loadingEmpresas = true;
        this.entradaMateriaisService
            .getEmpresas(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingEmpresas = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.empresas = response.body['result'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.empresas = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.empresas = [];
        });
    }
    getStatusRecebimento(params) {
        const _params = params !== null && params !== void 0 ? params : [];
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        if (!this.activatedRoute.snapshot.params.hasOwnProperty('id')) {
            _params.IN_FHNC = '0';
        }
        this.loadingStatusRecebimento = true;
        this.statusRecebimentoService
            .getStatusRecebimento(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingStatusRecebimento = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.statusRecebimento = response.body['data'];
            }
            else {
                this.statusRecebimento = [];
            }
        }, (error) => {
            this.pnotify.error('Não foi encontrado nenhum status de recebimento');
        });
    }
    getNotasMateriais(params) {
        this.loadingNavBar = true;
        this.loadingMateriais = true;
        this.notasFiscaisService
            .getNotasMateriais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingNavBar = false;
            this.loadingMateriais = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                return;
            }
            const materiais = response['body']['data'];
            const promise = () => materiais.forEach(() => this.onAddMaterial());
            yield Promise.resolve(promise());
            this.form.get('materiais').patchValue(materiais);
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum material');
        });
    }
    getNotasFiscais(params) {
        this.loading = true;
        const _params = params !== null && params !== void 0 ? params : {};
        this.notasFiscaisService
            .getNotasFiscais(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.noResult = true;
                this.notasFiscais = [];
                return;
            }
            const nota_ = response.body['data'][0];
            nota_.DT_EMIS_NOTA_FISC = new Date(nota_.DT_EMIS_NOTA_FISC);
            this.form.patchValue(nota_);
            this.noResult = false;
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Cadastro';
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/home',
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Notas Fiscais',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    setFornecedor(fornecedor) {
        this.form.get('NM_FORN').patchValue(fornecedor.NM_RAZA_SOCI);
        this.form.controls['NM_FORN'].markAsDirty({ onlySelf: true });
        this.form.get('UUID_FORN').patchValue(fornecedor.ID);
        this.form.controls['UUID_FORN'].markAsDirty({ onlySelf: true });
    }
    setMaterial(material) {
        const _material = Object.assign(Object.assign({}, material), { 'IN_MATE': false });
        const fg = this.form.get('materiais');
        fg.controls[this.index].patchValue(_material);
        fg.controls[this.index].get('UUID_MATE').patchValue(_material.ID);
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_LOGI_ENMA_NOFI: [null],
            ID_LOGI_ENTR_MATE_NOFI: [null],
            NR_NOTA_FISC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
            NM_FORN: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required],
            UUID_FORN: [null],
            DT_EMIS_NOTA_FISC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
            ID_LOGI_ENMA_NOFI_STAT: [null],
            NM_STAT: [null],
            IN_FHNC: [null],
            DS_LOGI_ENTR_MATE_UNID_MEDI: [null],
            UUID_EMPR: [null],
            NM_EMPR: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required],
            IN_STAT: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
            DS_OBSE: [null],
            materiais: this.formBuilder.array([]),
        });
        this.formAllMateriais = this.formBuilder.group({
            buscarPor: ['NM_MATE'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required],
            ID_REFE_ERP: [null],
            NM_MATE: [null],
            NM_CLAS: [null],
            NM_LINH: [null],
            IN_STAT: ['1'],
        });
        this.formPesquisaFornecedor = this.formBuilder.group({
            buscarPor: ['NM_RAZA_SOCI'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required],
            ID_REFE_ERP: [null],
            NM_RAZA_SOCI: [null],
            NM_FANT: [null],
            NR_CNPJ_CPF: [null],
            IN_STAT: ['1'],
        });
    }
    // Validação de formulário
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
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
    onFieldRequired(abstractControl, abstractControlField) {
        if (abstractControl.validator) {
            const validator = abstractControl.validator({});
            if (validator && validator.required) {
                return 'is-required';
            }
        }
        if (abstractControlField) {
            for (const controlName in abstractControl['controls']) {
                if (abstractControl['controls'][controlName]) {
                    if (this.onFieldRequired(abstractControl['controls'][controlName]) &&
                        controlName == abstractControlField) {
                        return 'is-required';
                    }
                }
            }
        }
        return '';
    }
    getAllMateriais(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = this.formAllMateriais.value['IN_STAT'];
        _params.TT_REGI_PAGI = 15;
        const _obj = this.formAllMateriais.value;
        this.loadingAllMateriais = true;
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.entradaMateriaisService
            .getAllMateriais(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingAllMateriais = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.allMateriais = response.body['result'];
                this.totalItemsMaterial = response.body['result'].length;
                this.noAllMateriais = false;
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.allMateriais = [];
                this.noAllMateriais = true;
            }
        }, (error) => {
            this.pnotify.error();
            this.allMateriais = [];
        });
    }
    postMateriais(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let request = [];
            const materiais = this.formMateriais.getRawValue();
            if (!materiais || !this.formMateriais.dirty) {
                this.pnotify.notice('Nenhum material alterado!');
                this.router.navigate(['./../'], {
                    relativeTo: this.activatedRoute,
                });
                return;
            }
            if (!this.form.get('ID_LOGI_ENMA_NOFI').value) {
                return;
            }
            const promise = () => {
                const controls = Object.keys(this.formMateriais.controls);
                controls.forEach(key => {
                    if (!this.formMateriais.controls[key].dirty) {
                        return;
                    }
                    let material = this.formMateriais.get(key).value;
                    material['SEQU_MATE'] = materiais[key]['SEQU_MATE'];
                    material['ID_LOGI_ENMA_NOFI'] = id;
                    request.push(this.notasFiscaisService.postMateriais(material));
                });
            };
            yield Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["forkJoin"])(request)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
                this.loading = false;
                this.loadingNavBar = false;
            }))
                .subscribe((responses) => {
                responses.forEach(response => {
                    if (response.status === 200) {
                        this.pnotify.success('Material, salvo com sucesso!');
                        this.router.navigate(['../'], {
                            relativeTo: this.activatedRoute,
                        });
                    }
                    else {
                        this.pnotify.error();
                    }
                });
            }, (error) => {
                try {
                    this.pnotify.error(error.error.message);
                }
                catch (error) {
                    this.pnotify.error();
                }
            });
        });
    }
    postNotasFiscais() {
        this.loadingNavBar = true;
        let params = {};
        if (this.form.get('ID_LOGI_ENMA_NOFI').value) {
            Object.keys(this.form.controls).forEach(key => {
                if (this.form.controls[key].dirty) {
                    params[key] = this.form.get(key).value,
                        params['ID_LOGI_ENMA_NOFI'] = parseFloat(this.form.get('ID_LOGI_ENMA_NOFI').value);
                }
                return;
            });
            if (!this.form.dirty && !this.form.controls['UUID_FORN'].dirty) {
                this.loadingNavBar = false;
                this.pnotify.notice('Nenhuma alteração realizada!');
                return;
            }
        }
        else {
            params = JSON.parse(JSON.stringify(this.form.value));
            params['SG_ORIG'] = 'MTCORP';
        }
        delete params['materiais'];
        this.notasFiscaisService
            .postNotasFiscais(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pnotify.success();
                const id = response.body['data'];
                this.form.get('ID_LOGI_ENMA_NOFI').setValue(id);
                this.postMateriais(id);
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    openModal(template, index) {
        this.index = index;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    get formMateriais() {
        return this.form.get('materiais');
    }
    onAddMaterial(index) {
        const sequencia = this.formMateriais.length + 1;
        this.formMateriais.push(this.formBuilder.group({
            UUID_MATE: [null],
            ID_LOGI_ENMA_NOFI_MATE: [null],
            SEQU_MATE: [{ value: sequencia, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].min(1)]],
            DS_UNID_MEDI: ['TON', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
            TT_MATE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].min(0.01)]],
            DS_LOTE: [null],
            NM_MATE: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
        }));
    }
    onDeleteMaterial(index) {
        if (this.formMateriais.length === 0) {
            this.pnotify.notice('Informe ao menos um material.');
            return;
        }
        let materiais = this.formMateriais.at(index).value;
        materiais = Object.assign(Object.assign({}, materiais), { 'IN_STAT': '0', ID_LOGI_ENMA_NOFI: this.form.get('ID_LOGI_ENMA_NOFI').value });
        if (!materiais['ID_LOGI_ENMA_NOFI_MATE']) {
            this.formMateriais.removeAt(index);
            return;
        }
        this.loadingNavBar = true;
        this.notasFiscaisService
            .postMateriais(materiais)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.formMateriais.removeAt(index);
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    onNestedFieldError(formGroup, index, field) {
        if (this.onNestedFieldInvalid(formGroup, index, field)) {
            return 'is-invalid';
        }
        return '';
    }
    onNestedFieldInvalid(formGroup, index, field) {
        let nestedForm = this.form.controls[formGroup];
        field = nestedForm.controls[index].get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onNestedFieldRequired(formGroup, index, field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
        let nestedForm = this.form.controls[formGroup];
        if (nestedForm.controls[index].get(field).validator) {
            let validationResult = nestedForm.controls[index]
                .get(field)
                .validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
    checkStatus(event, template) {
        if (!event) {
            return;
        }
        if (event.IN_FHNC == 1 && this.form.get('IN_FHNC').value != 1) {
            this.modalRefPopup = this.modalService.show(template, {
                animated: false,
            });
        }
    }
    hidePopup() {
        this.form.get('ID_LOGI_ENMA_NOFI_STAT').reset();
        this.modalRefPopup.hide();
    }
    gerarFicha() {
        this.modalRefPopup.hide();
        const id = this.form.get('ID_LOGI_ENMA_NOFI').value;
        const params = this.activatedRoute.snapshot.params;
        const idSubmodulo = params === null || params === void 0 ? void 0 : params.idSubModulo;
        const queryParams = btoa(JSON.stringify({ ID_LOGI_ENMA_NOFI: id }));
        window.open(`${window.location.origin}/#/logistica/entrada-materiais/${idSubmodulo}/fichas-nao-conformidade/novo?q=${queryParams}`, 'blank');
    }
};
LogisticaEntradaMateriaisNotasFiscaisCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"] },
    { type: _status_recebimento_services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisStatusRecebimentoService"] },
    { type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"] },
    { type: _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntradaMateriaisNotasFiscaisService"] },
    { type: _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_17__["LogisticaEntradaMateriaisService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"] },
    { type: _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"] }
];
LogisticaEntradaMateriaisNotasFiscaisCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"],
        _status_recebimento_services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisStatusRecebimentoService"],
        _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"],
        _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntradaMateriaisNotasFiscaisService"],
        _services_entrada_materiais_service__WEBPACK_IMPORTED_MODULE_17__["LogisticaEntradaMateriaisService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"],
        _shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AtividadesService"]])
], LogisticaEntradaMateriaisNotasFiscaisCadastroComponent);



/***/ }),

/***/ "T5cb":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/ocorrencias/ocorrencias.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvZmljaGEtY29uZm9ybWlkYWRlL29jb3JyZW5jaWFzL29jb3JyZW5jaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvZmljaGEtY29uZm9ybWlkYWRlL29jb3JyZW5jaWFzL29jb3JyZW5jaWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uW2Rpc2FibGVkXXtcbiAgY3Vyc29yOiBuby1kcm9wO1xufSJdfQ== */");

/***/ }),

/***/ "ULR/":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/entrada-materiais/entrada-materiais.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VsLWZsdW1pbmVuc2UvZW50cmFkYS1tYXRlcmlhaXMvZW50cmFkYS1tYXRlcmlhaXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "UkxE":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/parecer/lista/lista.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL3BhcmVjZXIvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "WQIu":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/parecer/lista/lista.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisParecerListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisParecerListaComponent", function() { return LogisticaEntradaMateriaisParecerListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "nTb2");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "UkxE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_parecer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/parecer.service */ "M5hd");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");



//angular



//servicos







// rxjs


let LogisticaEntradaMateriaisParecerListaComponent = class LogisticaEntradaMateriaisParecerListaComponent {
    /* Pagination */
    constructor(route, pnotify, formBuilder, xlsxService, dateService, routerService, activatedRoute, detailPanelService, confirmModalService, parecerService) {
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
        this.ORDE_TYPE = 'desc';
        //LOADINGS
        this.loading = true;
        this.loadingNavBar = false;
        //VARIAVEIS
        this.totalItens = [];
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        // Tipos de Situação dos Parecer (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '2',
                nome: 'Inativos',
            },
        ];
        // Subtitles (Ativo/Inativo)
        this.subtitles = [
            {
                id: 1,
                text: 'Ativo',
                color: 'green',
            },
            {
                id: 2,
                text: 'Inativo',
                color: 'red',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.onDetailPanelEmitter();
        this.getParecer();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getParecers(this.getParams());
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            TIME: [new Date().getTime()],
        });
    }
    buildForm() {
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
            ORDE_TYPE: [this.ORDE_TYPE],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Parecer',
            },
        ];
    }
    onFilter() {
        this.detailPanelService.hide();
        this.form.get('PAGI').setValue(1);
        this.form.get('TIME').setValue(new Date().getTime());
        this.form.get('ORDE_TYPE').setValue(this.ORDE_TYPE);
        this.form.get('ORDE_BY').setValue(this.ORDE_BY);
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    onDetails(parecer) {
        this.detailPanelService.show();
        this.parecerSelecionado = parecer;
        this.detailPanelService.loadedFinished(false);
    }
    getParecers(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.parecerService
            .getParecer(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pareceres = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.pareceres = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    classStatusBorder(parecer) {
        let borderClass;
        if (parecer.IN_STAT == 1) {
            borderClass = 'border-success';
        }
        else if (parecer.IN_STAT == 2) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    changeType(params) {
        const stat = params.IN_STAT == 1 ? 0 : 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
            this.loadingNavBar = true;
            params.IN_STAT = stat;
            return this.parecerService.postParecer(params);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            params.IN_STAT = params.IN_STAT == 1 ? 0 : 1;
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    getParecer() {
        this.loadingParecer = true;
        this.parecerService
            .getParecer({ IN_STAT: '1', IN_PAGI: '0' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingParecer = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.parecer = response.body['data'];
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
            }
        });
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.pareceres.concat(this.totalItens);
        this.xlsxService.exportFile(listagemExport, `Parecer${dataExport}`);
    }
    setOrderBy(column) {
        if (this.ORDE_BY === column) {
            if (this.ORDE_TYPE == 'desc') {
                this.ORDE_TYPE = 'asc';
            }
            else if (this.ORDE_TYPE == 'asc') {
                this.ORDE_TYPE = 'desc';
            }
        }
        else {
            this.ORDE_BY = column;
            this.ORDE_TYPE = 'asc';
        }
        this.onFilter();
    }
};
LogisticaEntradaMateriaisParecerListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"] },
    { type: _services_parecer_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisParecerService"] }
];
LogisticaEntradaMateriaisParecerListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrada-materiais-parecer-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"],
        _services_parecer_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisParecerService"]])
], LogisticaEntradaMateriaisParecerListaComponent);



/***/ }),

/***/ "XkGG":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/lista/lista.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisFichaConformidadeListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisFichaConformidadeListaComponent", function() { return LogisticaEntradaMateriaisFichaConformidadeListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "N8Iq");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "nLjI");
/* harmony import */ var _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../shared/services/core/pdf.service */ "GTII");
/* harmony import */ var _tipos_conformidade_services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../tipos-conformidade/services/tipos-conformidade.service */ "AVAL");
/* harmony import */ var _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/ficha-conformidade.service */ "blLz");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/core/xlsx.service */ "8WR6");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");







//angular



//servicos





// rxjs



let LogisticaEntradaMateriaisFichaConformidadeListaComponent = class LogisticaEntradaMateriaisFichaConformidadeListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, fichasConformidadeService, tiposConformidadeService, formBuilder, localeService, xlsxService, pdfService, confirmModalService, modalService, routerService, dateService) {
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
        this.dateService = dateService;
        //LOADINGS
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
        this.ORDE_TYPE = 'desc';
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        // Tipos de Situação das Fichas de  não Conformidade (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '0',
                nome: 'Inativos',
            },
        ];
        // Tipos de Status dos Pareceres
        this.status = [
            {
                cod: '1',
                nome: 'Finalizada',
            },
            {
                cod: '0',
                nome: 'Em Andamento',
            },
        ];
        // Subtitles (Ativo/Inativo)
        this.subtitles = [
            {
                id: 1,
                text: 'Ativo',
                color: 'green',
            },
            {
                id: 2,
                text: 'Inativo',
                color: 'red',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.getTiposConformidade();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
        if (this.modalRef1 != undefined) {
            this.modalRef1.hide();
        }
        if (this.modalRef2 != undefined) {
            this.modalRef2.hide();
        }
    }
    onFecharModal(event) {
        if (event == true) {
            this.hideModalOcorrencias();
            this.getOcorrencias({ ID_LOGI_ENMA_FHNC: this.fichaSelecionada['ID_LOGI_ENMA_FHNC'], IN_STAT: '1' });
            this.fichasConformidadeService
                .getFichasConformidade({ ID_LOGI_ENMA_FHNC: this.fichaSelecionada['ID_LOGI_ENMA_FHNC'] })
                .subscribe((response) => {
                if (response.status === 200) {
                    this.fichaSelecionada = response.body['data'][0];
                }
                return;
            });
        }
        return;
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getFichasConformidade(this.getParams());
        });
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            DT_INIC: new Date(),
            DT_FINA: new Date(),
            TIME: [new Date().getTime()],
        });
    }
    buildForm() {
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
            ORDE_TYPE: [this.ORDE_TYPE],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Fichas de Não Conformidade',
            },
        ];
    }
    onFilter() {
        this.form.get('PAGI').setValue(1);
        this.form.get('TIME').setValue(new Date().getTime());
        this.form.get('ORDE_TYPE').setValue(this.ORDE_TYPE);
        this.form.get('ORDE_BY').setValue(this.ORDE_BY);
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getFichasConformidade(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.fichasConformidadeService
            .getFichasConformidade(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.fichasConformidade = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.fichasConformidade = [];
            }
        }, (error) => {
            this.noResult = true;
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getRelatorio(params) {
        params = this.getParams();
        this.loadingNavBar = true;
        this.fichasConformidadeService
            .getRelatorio(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe(response => {
            if (response.status !== 200) {
                this.pnotify.notice('Nenhum registro localizado.');
                return;
            }
            this.xlsxService.export({ data: response.body['data'] });
        }, error => {
            var _a;
            const message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
            message ? this.pnotify.error(message) : this.pnotify.error();
        });
    }
    getMateriais(params) {
        this.loadingMateriais = true;
        this.fichasConformidadeService
            .getFormMaterial(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingMateriais = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.materiais = response.body['data'];
                this.noMateriais = false;
            }
            else {
                this.materiais = [];
                this.noMateriais = true;
            }
        }, (error) => {
            this.pnotify.error('Não foi encontrado nenhum material');
            this.noMateriais = true;
        });
    }
    getImagens(params) {
        this.loadingImagens = true;
        this.fichasConformidadeService.getDocumento(params).subscribe((response) => {
            if (response.status === 200) {
                this.imagens = response.body['data'];
                this.totalImagens = response.body['data'].length;
                this.loadingImagens = false;
            }
            else {
                this.imagens = [];
                this.totalImagens = 0;
                this.loadingImagens = false;
            }
        }, (error) => {
            this.imagens = [];
            this.loadingImagens = false;
        });
    }
    getDocumentoOcorrencia(params) {
        this.loadingDocumentosOcorrencias = true;
        this.fichasConformidadeService
            .getDocumentoOcorrencia(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingDocumentosOcorrencias = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                return;
            }
            const documentos = response['body']['data'];
            this.documentosOcorrencia[params.ID_LOGI_ENMA_FHNC_OCOR] = documentos;
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum documento');
        });
    }
    getResponsaveisOcorrencia(params) {
        this.loadingResponsaveisOcorrencias = true;
        this.fichasConformidadeService
            .getResponsaveisOcorrencia(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingResponsaveisOcorrencias = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                this.noResponsaveisOcorrencia = true;
                return;
            }
            const responsaveis = response['body']['data'];
            this.noResponsaveisOcorrencia = false;
            this.responsaveisOcorrencia[params.ID_LOGI_ENMA_FHNC_OCOR] = responsaveis;
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum responsável');
            this.noResponsaveisOcorrencia = true;
        });
    }
    getOcorrencias(params) {
        this.loadingOcorrencias = true;
        this.disabledButton = true;
        params = Object.assign(Object.assign({}, params), { ORDE_TYPE: 'desc' });
        this.fichasConformidadeService.getOcorrencias(params)
            .subscribe((response) => {
            if (response.status === 200) {
                this.ocorrencias = response.body['data'];
                if (response.body['total']) {
                    this.disabledButton = false;
                }
                this.noOcorrencias = false;
                this.ocorrencias.forEach(ocorrencia => {
                    this.getDocumentoOcorrencia(ocorrencia);
                    this.getResponsaveisOcorrencia(ocorrencia);
                    this.loadingOcorrencias = false;
                });
            }
            else {
                this.ocorrencias = [];
                this.noOcorrencias = true;
                this.loadingOcorrencias = false;
            }
        }, (error) => {
            this.ocorrencias = [];
            this.noOcorrencias = true;
            this.loadingOcorrencias = false;
        });
    }
    getDocumentos(params) {
        this.loadingDocumentos = true;
        this.fichasConformidadeService.getDocumento(params).subscribe((response) => {
            if (response.status === 200) {
                this.documentos = response.body['data'];
                this.totalDocumentos = response.body['data'].length;
                this.loadingDocumentos = false;
            }
            else {
                this.documentos = [];
                this.totalDocumentos = 0;
                this.loadingDocumentos = false;
            }
        }, (error) => {
            this.documentos = [];
            this.loadingDocumentos = false;
        });
    }
    finalizarFicha(ocorrencia) {
        const params = ocorrencia !== null && ocorrencia !== void 0 ? ocorrencia : {};
        const _params = Object.assign(Object.assign({}, params), { IN_CONC: 1 });
        this.fichasConformidadeService
            .postFichasConformidade(_params)
            .subscribe((response) => {
            if (response.status === 200) {
                this.pnotify.success();
                this.hideModal();
                this.getFichasConformidade();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    openModal(template, ficha) {
        this.noOcorrencias = true;
        this.hiddenModal = false;
        const _params = { ID_LOGI_ENMA_FHNC: ficha['ID_LOGI_ENMA_FHNC'], IN_STAT: '1' };
        const _paramsImagem = Object.assign(Object.assign({}, _params), { TP_DOCU: 'IMAGEM' });
        const _paramsDocumento = Object.assign(Object.assign({}, _params), { TP_DOCU: 'DOCUMENTO' });
        this.fichaSelecionada = ficha;
        this.getImagens(_paramsImagem);
        this.getDocumentos(_paramsDocumento);
        this.getMateriais(_params);
        this.getOcorrencias(_params);
        this.modalRef1 = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModal() {
        this.modalRef1.hide();
    }
    openModalOcorrencias(template) {
        const id = this.fichaSelecionada['ID_LOGI_ENMA_FHNC'];
        this.fichaId = id;
        this.hiddenModal = true;
        this.modalRef2 = this.modalService.show(template, {
            animated: true,
            class: 'modal-lg',
            backdrop: 'static',
        });
    }
    hideModalOcorrencias() {
        this.hiddenModal = false;
        this.modalRef2.hide();
    }
    onDownload(params) {
        this.pnotify.notice('Documento PDF será gerado em breve!');
        const _id = params['ID_LOGI_ENMA_FHNC'];
        this.pdfService.download('ficha-pdf', `Ficha_Nao_Conformidade - ${_id}`);
    }
    onPrint() {
        window.print();
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    classStatusBorder(status) {
        let borderClass;
        if (status.IN_STAT == 1) {
            borderClass = 'border-success';
        }
        else if (status.IN_STAT == 0) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    changeType(status) {
        const stat = status.IN_STAT == 1 ? 0 : 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_16__["EMPTY"];
            this.loadingNavBar = true;
            status.IN_STAT = stat;
            return this.fichasConformidadeService.postFichasConformidade(status);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            status.IN_STAT = status.IN_STAT == 1 ? 0 : 1;
            this.pnotify.error();
        });
    }
    getTiposConformidade(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        this.loadingTiposConformidade = true;
        this.tiposConformidadeService
            .getTiposConformidade(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingTiposConformidade = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tiposConformidade = response.body['data'];
            }
            else {
                this.tiposConformidade = [];
            }
        }, (error) => {
            this.pnotify.error('Não foi encontrado nenhum status de recebimento');
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    setOrderBy(column) {
        if (this.ORDE_BY === column) {
            if (this.ORDE_TYPE == 'desc') {
                this.ORDE_TYPE = 'asc';
            }
            else if (this.ORDE_TYPE == 'asc') {
                this.ORDE_TYPE = 'desc';
            }
        }
        else {
            this.ORDE_BY = column;
            this.ORDE_TYPE = 'asc';
        }
        this.onFilter();
    }
};
LogisticaEntradaMateriaisFichaConformidadeListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisFichaConformidadeService"] },
    { type: _tipos_conformidade_services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisTiposConformidadeService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsLocaleService"] },
    { type: src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"] },
    { type: _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_3__["PdfService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"] }
];
LogisticaEntradaMateriaisFichaConformidadeListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'logistica-entrada-materiais-ficha-conformidade-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _services_ficha_conformidade_service__WEBPACK_IMPORTED_MODULE_5__["LogisticaEntradaMateriaisFichaConformidadeService"],
        _tipos_conformidade_services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntradaMateriaisTiposConformidadeService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsLocaleService"],
        src_app_shared_services_core_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"],
        _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_3__["PdfService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_11__["ConfirmModalService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_12__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"]])
], LogisticaEntradaMateriaisFichaConformidadeListaComponent);



/***/ }),

/***/ "bM+B":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/entrada-materiais/entrada-materiais.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n\n<app-header appTitle=\"Entrada de materiais\">\n</app-header>\n<div class=\"row\" id=\"application-body\">\n  <div class=\"col\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-3\" *ngFor=\"let atividade of atividades\">\n        <card-button\n          [icon]=\"atividade.iconeAtividade\"\n          [text]=\"atividade.nomeAtividade\"\n          [routerLink]=\"[atividade.rotaAtividade]\">\n        </card-button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "blLz":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/services/ficha-conformidade.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisFichaConformidadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisFichaConformidadeService", function() { return LogisticaEntradaMateriaisFichaConformidadeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaEntradaMateriaisFichaConformidadeService = class LogisticaEntradaMateriaisFichaConformidadeService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    // -------------------FICHAS DE NÃO CONFORMIDADE------------------
    getFichasConformidade(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade`, {
            params: params,
            observe: 'response',
        });
    }
    getRelatorio(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/relatorio`, {
            params: params,
            observe: 'response',
        });
    }
    postFichasConformidade(params) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade`, params, {
            observe: 'response',
        });
    }
    getNotasFiscaisMateriais(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/notas-fiscais/materiais`, {
            params: params,
            observe: 'response',
        });
    }
    getExport(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/relatorio`, {
            params: params,
            observe: 'response',
        });
    }
    // -------------------DOCUMENTOS  DA FICHA ------------------
    getDocumento(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/documentos`, {
            params: params,
            observe: 'response',
        });
    }
    postDocumento(params, ID_LOGI_ENMA_FHNC) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/documentos?ID_LOGI_ENMA_FHNC=${ID_LOGI_ENMA_FHNC}`, params, {
            observe: 'response',
        });
    }
    putDocumento(params) {
        return this.http.put(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/documentos`, params, {
            observe: 'response',
        });
    }
    // -------------------DOCUMENTOS  DA OCORRENCIA ------------------
    getDocumentoOcorrencia(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/documentos`, {
            params: params,
            observe: 'response',
        });
    }
    postDocumentoOcorrencia(params, ID_LOGI_ENMA_FHNC_OCOR) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/documentos?ID_LOGI_ENMA_FHNC_OCOR=${ID_LOGI_ENMA_FHNC_OCOR}`, params, {
            observe: 'response',
        });
    }
    putDocumentoOcorrencia(params) {
        return this.http.put(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/documentos`, params, {
            observe: 'response',
        });
    }
    // -------------------MATERIAIS------------------
    getFormMaterial(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/materiais`, {
            params: params,
            observe: 'response',
        });
    }
    postMateriais(notas) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/materiais`, notas, {
            observe: 'response',
        });
    }
    // -------------------OCORRENCIAS------------------
    getOcorrencias(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias`, {
            params: params,
            observe: 'response',
        });
    }
    postOcorrencias(params) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias`, params, {
            observe: 'response',
        });
    }
    // -------------------RESPONSÁVEIS------------------
    postResponsaveis(params) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/responsaveis`, params, {
            observe: 'response',
        });
    }
    getResponsaveisOcorrencia(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/ocorrencias/responsaveis`, {
            params: params,
            observe: 'response',
        });
    }
    getUsuarios(params) {
        return this.http.get(`${this.API}/core/mtcorp/usuarios`, {
            params: params,
            observe: 'response',
        });
    }
    getResponsaveis(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/ficha-nao-conformidade/responsaveis`, {
            params: params,
            observe: 'response',
        });
    }
};
LogisticaEntradaMateriaisFichaConformidadeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaEntradaMateriaisFichaConformidadeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaEntradaMateriaisFichaConformidadeService);



/***/ }),

/***/ "cTkk":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/entrada-materiais/entrada-materiais.module.ts ***!
  \**************************************************************************************/
/*! exports provided: SulFluminenseEntradaMateriaisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEntradaMateriaisModule", function() { return SulFluminenseEntradaMateriaisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _entrada_materiais_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entrada-materiais-routing.module */ "/As8");
/* harmony import */ var _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entrada-materiais.component */ "io96");
/* harmony import */ var _painel_bobinas_qualidade_painel_bobinas_qualidade_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./painel-bobinas-qualidade/painel-bobinas-qualidade.component */ "t/sj");
/* harmony import */ var _consulta_recebimento_bobinas_consulta_recebimento_bobinas_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./consulta-recebimento-bobinas/consulta-recebimento-bobinas.component */ "Anp4");













let SulFluminenseEntradaMateriaisModule = class SulFluminenseEntradaMateriaisModule {
};
SulFluminenseEntradaMateriaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_10__["SulFluminenseEntradaMateriaisComponent"],
            _painel_bobinas_qualidade_painel_bobinas_qualidade_component__WEBPACK_IMPORTED_MODULE_11__["SulFluminensePainelBobinasQualidadeComponent"],
            _consulta_recebimento_bobinas_consulta_recebimento_bobinas_component__WEBPACK_IMPORTED_MODULE_12__["SulFluminenseConsultaRecebimentoBobinasComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _entrada_materiais_routing_module__WEBPACK_IMPORTED_MODULE_9__["SulFluminenseEntradaMateriaisRoutingModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_5__["NotFoundModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_7__["TemplatesModule"]
        ]
    })
], SulFluminenseEntradaMateriaisModule);



/***/ }),

/***/ "ejgx":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/ficha-conformidade/documentos/documentos.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<fieldset class=\"border rounded shadow-sm col-10 pt-2 pb-2 mx-auto\">\n  <legend>Documentos</legend>\n  <div class=\"form-group border rounded p-1\">\n    <div>\n      <label for=\"documento\" class=\"w-100 d-flex justify-content-between align-items-center m-0 py-1\" style=\"cursor: pointer;\">\n        <span>Novo Documento</span>\n      </label>\n      <input\n        id=\"documento\"\n        type=\"file\"\n        (change)=\"appendFile($event.target.files)\"\n        class=\"d-none\"\n        >\n    </div>\n  </div>\n  <ul>\n    <li class=\"d-flex justify-content-between\" *ngFor=\"let item of documentos ; let index = index\">\n      <div>{{ item.NM_DOCU | uppercase }}</div>\n      <div>\n        <a\n          [hidden]=\"!item.ID_LOGI_ENMA_FHNC_DOCU\"\n          [href]=\"item.LINK\"\n          target=\"_blank\"\n          class=\"btn-icon-sm mx-2 text-black\"\n          tooltip=\"visualizar\"\n        >\n          <i class=\"far fa-eye\"></i>\n        </a>\n        <button\n          class=\"btn-icon-sm mx-2 hover\"\n          tooltip=\"excluir\"\n          (click)=\"onRemove(item, index)\"\n          >\n          <i class=\"fas fa-trash\"></i>\n        </button>\n      </div>\n    </li>\n  </ul>\n</fieldset>\n");

/***/ }),

/***/ "f8jI":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/painel-aprovacao/lista/lista.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"PAINEL DE APROVAÇÕES\">\n  <button\n    type=\"button\" \n    (click)=\"onExport()\"\n    [disabled]=\"loadingNavBar || noResult\">\n    Exportar\n  </button>\n  <button\n    type=\"button\" \n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-1 pl-0\">\n              <label for=\"ID_LOGI_ENTR_MATE_APRO\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_LOGI_ENTR_MATE_APRO\"\n                formControlName=\"ID_LOGI_ENTR_MATE_APRO\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"DT_INIC\">Data Inicial</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"DT_INIC\"\n                type=\"text\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"DT_INIC\"\n                >\n              </div>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"DT_FINA\">Data Final</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"DT_FINA\"\n                type=\"text\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"DT_FINA\"\n                >\n              </div>\n            </div>\n            <div class=\"form-group col-md-4 pl-0\">\n              <label for=\"NM_LOGI_ENTR_MATE_NOME_SOLI\">Solicitante</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NM_LOGI_ENTR_MATE_NOME_SOLI\"\n                formControlName=\"NM_LOGI_ENTR_MATE_NOME_SOLI\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-lg-2 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-lg-1 pl-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" >ID</th>\n              <th scope=\"col\" >Solicitante</th>\n              <th scope=\"col\" [hidden]=\"showDetailPanel\">Data da Solicitação</th>\n              <th scope=\"col\" style=\"width:40px\" ></th>\n              <th scope=\"col\" style=\"width:40px\" ></th>\n              <th scope=\"col\" style=\"width:40px\" ></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let status of solicitacoes\"  [class.table-active]=\"status?.ID_LOGI_ENTR_MATE_APRO == solicitacaoSelecionada?.ID_LOGI_ENTR_MATE_APRO && showDetailPanel\">\n              <td (click)=\"onDetails(status)\" [ngClass]=\"classStatusBorder(status)\">\n              {{status.ID_LOGI_ENTR_MATE_APRO }}\n              </td>\n              <td (click)=\"onDetails(status)\">{{ status.NM_LOGI_ENTR_MATE_NOME_SOLI | uppercase}}</td>\n              <td (click)=\"onDetails(status)\" [hidden]=\"showDetailPanel\">{{ status.DT_APROV }}</td>\n              <td >\n                <span class=\"mr-3\" tooltip=\"Aprovar\" placement=\"left\" container=\"body\" *ngIf=\"status.IN_STAT == 3\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"requestSuccess(status)\">\n                    <i class=\" text-success fas fa-thumbs-up\"></i>\n                  </button>\n                </span>\n              </td>\n              <td >\n                <span class=\"mr-3\" tooltip=\"Reprovar\" placement=\"left\" container=\"body\" *ngIf=\"status.IN_STAT == 3\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"requestFail(status)\">\n                    <i class=\" text-danger fas fa-thumbs-down\"></i>\n                  </button>\n                </span>\n              </td>\n              <td>\n                <span   tooltip=\"Detalhe da Solicitação\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\">\n                    <i class=\"fas fa-search\" (click)=\"openModal(detalhesSolicitacao, status)\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6\" [hidden]=\"!showDetailPanel || !viewHistorico\">\n      <detail-panel panelTitle=\"Histórico de alteração\">\n        <div class=\"d-flex justify-content-center mb-3\" [hidden]=\"!loadingDetails\">\n          <div class=\"spinner-border text-dark\"></div>\n        </div>\n        <custom-table [hidden]=\"loadingDetails\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Data</th>\n              <th scope=\"col\">Usuário</th>\n              <!-- <th scope=\"col\">Alteração</th> -->\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let alteracao of alteracoes\">\n              <td class=\"text-center\">{{ alteracao.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}</td>\n              <td>{{ alteracao.DS_USUA_CADA | uppercase }}</td>\n              <!-- <td>{{ alteracao.nomeUsuario | uppercase }}</td> -->\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n    <div class=\"col-6\" [hidden]=\"!showDetailPanel || viewHistorico\">\n      <detail-panel panelTitle=\"Aguardando Resposta\">\n        <div class=\"d-flex justify-content-center mb-3\" [hidden]=\"!loadingDetails\">\n          <div class=\"spinner-border text-dark\"></div>\n        </div>\n        <div class=\"text-center\" [hidden]=\"loadingDetails\">\n          <blockquote class=\"blockquote mx-5\">\n            <p class=\"text-danger mb-0\">{{solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_MOTI | uppercase}}</p>\n            <footer class=\"blockquote-footer\">\n              <small class=\"text-muted\">\n                {{solicitacaoSelecionada?.DT_SOLI }}\n              </small>\n            </footer>\n            <footer class=\"blockquote-footer\">\n              <small class=\"text-muted\">\n                  <cite >{{solicitacaoSelecionada?.DS_SOLI }}</cite>\n              </small>\n            </footer>\n          </blockquote>\n        </div>\n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n  <ng-template #detalhesSolicitacao>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Detalhes da Solicitação #{{solicitacaoSelecionada?.ID_LOGI_ENTR_MATE_APRO}}</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-1\" role=\"status\" *ngIf=\"loadingModal\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"text-center\">\n        <blockquote class=\"blockquote mx-5\">\n          <p class=\"text-danger mb-0\">{{solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_MOTI | uppercase}}</p>\n          <footer class=\"blockquote-footer\">\n            <small class=\"text-muted\">\n              {{solicitacaoSelecionada?.DT_SOLI }}\n            </small>\n          </footer>\n          <footer class=\"blockquote-footer\">\n            <small class=\"text-muted\">\n                <cite >{{solicitacaoSelecionada?.DS_SOLI }}</cite>\n            </small>\n          </footer>\n        </blockquote>\n      </div>\n      <div class=\"col-12\">\n        <span class=\"mr-3\"  [tooltip]=\"viewDetailsSolicitante == 1 ? 'Exibir Detalhes do Solicitante' : 'Ocultar Detalhes do Solicitante'\" placement=\"right\" container=\"body\">\n          <button type=\"button\"  [hidden]=\"loadingModal\" class=\"btn-icon-sm\" (click)=\"detailsSolicitante($event)\">\n            <i  [ngClass]=\"viewDetailsSolicitante == '1' ? 'fas fa-eye' : 'fas fa-eye-slash'\"></i>\n          </button>\n        </span>\n        <hr>\n      </div>\n      <div class=\"col-12\" [hidden]=\"loadingModal || viewDetailsSolicitante == 1\">\n        <div class=\"d-flex justify-content-between col\" >\n          <div>\n            <div>\n              <h6 class=\"title pull-left\">Detalhes do Solicitante</h6>\n            </div>\n            <img src=\"data:image/png;base64,{{ contato?.FOTO }}\" class=\"rounded-circle\" alt=\"\" height=\"200px\" *ngIf=\"contato?.FOTO != null\">\n            <i class=\"fas fa-user-circle text-muted\" *ngIf=\"contato?.FOTO == null || contato?.FOTO == ''\" style=\"font-size: 8rem;\"></i>\n          </div>\n          <div>\n            <div class=\"form-group\">\n              <label>Nome</label>\n              <span class=\"d-block\" *ngIf=\"contato?.NM_USUA != null || contato?.NM_USUA == ''\">{{ contato?.NM_USUA }}</span>\n              <span class=\"d-block\" *ngIf=\"contato?.NM_USUA == null || contato?.NM_USUA == ''\">NÃO INFORMADO</span>\n            </div>\n            <div class=\"form-group\">\n              <label>E-mail</label>\n              <span class=\"d-block\" *ngIf=\"contato?.MAIL != null || contato?.MAIL == ''\">{{ contato?.MAIL }}</span>\n              <span class=\"d-block\" *ngIf=\"contato?.MAIL == null || contato?.MAIL == ''\">NÃO INFORMADO</span>\n            </div>\n            \n            <div class=\"form-group\">\n              <label>Telefone</label>\n              <span class=\"d-block\" *ngIf=\"contato?.TELE != null || contato?.TELE != ''\">{{ contato?.TELE }}</span>\n              <span class=\"d-block\" *ngIf=\"contato?.TELE == null || contato?.TELE == ''\">NÃO INFORMADO</span>\n            </div>\n            <div class=\"form-group\">\n              <label>Cargo</label>\n              <span class=\"d-block\" *ngIf=\"contato?.CARG != null || contato?.CARG != ''\">{{ contato?.CARG }}</span>\n              <span class=\"d-block\" *ngIf=\"contato?.CARG == null || contato?.CARG == ''\">NÃO INFORMADO</span>\n            </div>\n            <div class=\"form-group\">\n              <label>Departamento</label>\n              <span class=\"d-block\" *ngIf=\"contato?.DEPA != null || contato?.DEPA != ''\">{{ contato?.DEPA }}</span>\n              <span class=\"d-block\" *ngIf=\"contato?.DEPA == null || contato?.DEPA == ''\">NÃO INFORMADO</span>\n            </div>\n          </div>\n        </div>\n        <hr>\n      </div>\n      <div class=\"col-12\">\n        <div class=\"form-row justify-content-center  text-center\">\n          <div class=\"form-group col-lg-2\">\n            <label>ID</label>\n            <div *ngIf=\"solicitacaoSelecionada?.ID_LOGI_ENTR_MATE_NF == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"solicitacaoSelecionada?.ID_LOGI_ENTR_MATE_NF != null\">{{solicitacaoSelecionada?.ID_LOGI_ENTR_MATE_NF}}</div>\n          </div>\n          <div class=\"form-group col-lg-3\">\n            <label>Fornecedor</label>\n            <div *ngIf=\"solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_FORN == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_FORN != null\">{{ solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_FORN}}</div>\n          </div>\n          <div class=\"form-group col-lg-3\">\n            <label>Status de Recebimento</label>\n            <div *ngIf=\"solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_STAT_RECE == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_STAT_RECE != null\"> {{solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_STAT_RECE}}</div>\n          </div>\n          <div class=\"form-group col-lg-4\">\n            <label>Depósito</label>\n            <div *ngIf=\"solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_DEPO == null\">NÃO INFORMADO</div>\n            <div *ngIf=\"solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_DEPO != null\">{{ solicitacaoSelecionada?.DS_LOGI_ENTR_MATE_DEPO }}</div>\n          </div>\n        </div>\n        <hr>\n        <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] =\"solicitacaoSelecionada.IN_STAT != 3\">\n          <div class=\"form-row justify-content-center\">\n            <div class=\"form-group col pl-0\">\n              <label for=\"motivos\">Motivo</label>\n                <ng-select\n                  [searchable]=\"true\"\n                  [clearable]=\"true\"\n                  [items]=\"motivos\"\n                  [virtualScroll]=\"true\"\n                  dropdownPosition=\"bottom\"\n                  placeholder=\"Selecione...\"\n                  labelForId=\"ID_LOGI_ENTR_MATE_MOTI\"\n                  bindLabel=\"DS_LOGI_ENTR_MATE_MOTI\"\n                  bindValue=\"ID_LOGI_ENTR_MATE_MOTI\"\n                  id=\"ID_LOGI_ENTR_MATE_MOTI\"\n                  formControlName=\"ID_LOGI_ENTR_MATE_MOTI\" \n                  [ngClass]=\"onFieldError('ID_LOGI_ENTR_MATE_MOTI') + ' ' + onFieldRequired('ID_LOGI_ENTR_MATE_MOTI')\"\n                  >\n                </ng-select>\n              <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_ENTR_MATE_MOTI')\" message=\"Motivo é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-row justify-content-center\">\n            <div class=\"form-group col pl-0\">\n              <label for=\"DS_OBSE\" >Descrição:</label>\n              <textarea \n                class=\"form-control\" \n                id=\"DS_OBSE\" \n                formControlName=\"DS_OBSE\" \n                rows=\"3\"\n                [ngClass]=\"onFieldError('DS_OBSE') + ' ' + onFieldRequired('DS_OBSE')\">\n              </textarea>\n              <invalid-form-control [show]=\"onFieldInvalid('DS_OBSE')\" message=\"Descrição é obrigatório e deve conter no mínimo 3 dígitos.\"></invalid-form-control>\n            </div>\n          </div>\n        </form>\n        <div  class=\"form-row justify-content-center text-center\" [hidden] =\"solicitacaoSelecionada.IN_STAT != 3\">\n          <button \n            type=\"button\" \n            class=\"btn btn-default btn-lg m-2\"\n            (click)=\"changeType()\"\n            [disabled]=\"form.valid === false || loadingNavBar === true\"\n          >\n            <span aria-hidden=\"true\">\n             <i class=\" text-success fas fa-thumbs-up\"></i>\n            </span>Aprovar\n          </button>\n          <button \n            type=\"button\" \n            class=\"btn btn-default btn-lg m-2\"\n            (click)=\"changeType()\"\n            [disabled]=\"form.valid === false || loadingNavBar === true\"\n          >\n            <span aria-hidden=\"true\">\n             <i class=\" text-danger fas fa-thumbs-down\"></i>\n            </span>Reprovar\n          </button>\n          <a \n            ngif=\"contato?.MAIL != 0 || contato?.MAIL != 'null'\"\n            role=\"button\"\n            class=\"btn btn-default btn-lg m-2\"\n            href=\"mailto:{{contato?.MAIL}}\"\n          >\n            <span aria-hidden=\"true\">\n             <i class=\" text-primary fas fa-envelope\"></i>\n            </span>Questioná-lo\n          </a>\n        </div>\n        <div  class=\"card\" [hidden] =\"solicitacaoSelecionada.IN_STAT != 1\">\n          <div class=\"card-body \">\n            <h5 class=\"card-title text-success\">Solicitação Aprovada</h5>\n            <p class=\"card-text\"><strong>Motivo:</strong> </p>\n            <p class=\"card-text\"><strong>Descrição:</strong> </p>\n            <p class=\"card-text\"><strong>Responsável:</strong> </p>\n            <p class=\"card-text\"><strong>Data:</strong> </p>         \n          </div>\n        </div>\n        <div  class=\"card\" [hidden] =\"solicitacaoSelecionada.IN_STAT != 2 \">\n          <div class=\"card-body \">\n            <h5 class=\"card-title text-danger\">Solicitação Reprovada</h5>\n            <p class=\"card-text\"><strong>Motivo:</strong> </p>\n            <p class=\"card-text\"><strong>Descrição:</strong> </p>\n            <p class=\"card-text\"><strong>Responsável:</strong> </p>\n            <p class=\"card-text\"><strong>Data:</strong> </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</app-body>");

/***/ }),

/***/ "hG8s":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/tipos-conformidade/lista/lista.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL3RpcG9zLWNvbmZvcm1pZGFkZS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "iJlz":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/entrada-materiais.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\n<app-header appTitle=\"ENTRADA DE MATERIAIS\"></app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\n  <card-group text=\"Selecione uma atividade\" [list]=\"atividades\"></card-group>\n</app-body>");

/***/ }),

/***/ "io96":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/entrada-materiais/entrada-materiais.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SulFluminenseEntradaMateriaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminenseEntradaMateriaisComponent", function() { return SulFluminenseEntradaMateriaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_entrada_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./entrada-materiais.component.html */ "bM+B");
/* harmony import */ var _entrada_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entrada-materiais.component.scss */ "ULR/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");








let SulFluminenseEntradaMateriaisComponent = class SulFluminenseEntradaMateriaisComponent {
    constructor(atividadesService, router, titleService, pnotify, activatedRoute) {
        this.atividadesService = atividadesService;
        this.router = router;
        this.titleService = titleService;
        this.pnotify = pnotify;
        this.activatedRoute = activatedRoute;
        this.loading = true;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/sul-fluminense/home'
            },
            {
                descricao: 'Entrada de materiais'
            }
        ];
        this.atividades = [];
    }
    ngOnInit() {
        this.titleService.setTitle('Entrada de materiais');
        this.activatedRoute.params.subscribe((params) => {
            this.registrarAcesso();
            this.getAtividadesInternas(params['idSubModulo']);
        });
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    getAtividadesInternas(idSubModulo) {
        this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(res => {
            if (res['responseCode'] === 200) {
                this.atividades = res['result'];
                this.loading = false;
            }
            else {
                this.handleAtividadesInternasError();
            }
        }, error => {
            this.handleAtividadesInternasError();
        });
    }
    handleAtividadesInternasError() {
        this.pnotify.error();
        this.router.navigate(['/sul-fluminense/home']);
    }
};
SulFluminenseEntradaMateriaisComponent.ctorParameters = () => [
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SulFluminenseEntradaMateriaisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'sul-fluminense-entrada-materiais',
        template: _raw_loader_entrada_materiais_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_entrada_materiais_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], SulFluminenseEntradaMateriaisComponent);



/***/ }),

/***/ "jpKr":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/notas-fiscais/cadastro/cadastro.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"NOTAS FISCAIS\">\n  <button \n    [disabled]=\"form.valid === false || loadingNavBar === true || noMaterial === false \"\n    (click)=\"postNotasFiscais()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\n        <legend>Dados da Nota Fiscal</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-4 pl-0\">\n            <label for=\"NR_NOTA_FISC\">Nota Fiscal</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              pattern=\"[0-9]+$\"\n              id=\"NR_NOTA_FISC\"\n              formControlName=\"NR_NOTA_FISC\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('NR_NOTA_FISC') + ' ' + onFieldRequired(form.controls.NR_NOTA_FISC)\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NR_NOTA_FISC') == 'required'\" message=\"Nota Fiscal é obrigatório.\"></invalid-form-control>\n          </div>\n          <div class=\"form-group col-md-8 pl-0\">\n            <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n              <label class=\"my-auto\" for=\"NM_FORN\">Fornecedor</label>\n              <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\" >\n                <a\n                  class=\"text-primary\"\n                  href=\"javascript:void(0)\"\n                  (click)=\"openModal(alterarFornecedor)\">\n                  <strong>Selecionar</strong>\n                </a>\n              </div>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NM_FORN\"\n              formControlName=\"NM_FORN\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('NM_FORN') + ' ' + onFieldRequired(form.controls.NM_FORN)\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NM_FORN')\" message=\"Fornecedor é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-4 pl-0\">\n            <label for=\"DT_INIC\">Data de Emissão</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n              </div>\n              <input\n              class=\"form-control\"\n              id=\"DT_EMIS_NOTA_FISC\"\n              type=\"text\"\n              bsDatepicker\n              placeholder=\"Selecione...\"\n              [bsConfig]=\"bsConfig\"\n              formControlName=\"DT_EMIS_NOTA_FISC\"\n              [ngClass]=\"onFieldError('DT_EMIS_NOTA_FISC') + ' ' + onFieldRequired(form.controls.DT_EMIS_NOTA_FISC)\"\n              >\n              <invalid-form-control [show]=\"onFieldInvalid('DT_EMIS_NOTA_FISC')\" message=\"Data de emissão do contrato é obrigatório.\"></invalid-form-control>\n            </div>\n          </div>\n          <div class=\"form-group col-md-8 pl-0\">\n            <label for=\"statusRecebimento\">Status de Recebimento</label>\n            <ng-select\n            [searchable]=\"true\"\n            [clearable]=\"true\"\n            [items]=\"statusRecebimento\"\n            [virtualScroll]=\"true\"\n            dropdownPosition=\"bottom\"\n            placeholder=\"Selecione...\"\n            [loading]=\"loadingStatusRecebimento\"\n            labelForId=\"ID_LOGI_ENMA_NOFI_STAT\"\n            bindLabel=\"NM_STAT\"\n            bindValue=\"ID_LOGI_ENMA_NOFI_STAT\"\n            id=\"ID_LOGI_ENMA_NOFI_STAT\"\n            formControlName=\"ID_LOGI_ENMA_NOFI_STAT\"\n            (change)=\"checkStatus($event, popupStatus)\"\n            >\n            </ng-select>\n            <invalid-form-control [show]=\"onFieldInvalid('ID_LOGI_ENMA_NOFI_STAT')\" message=\"Status de Recebimento é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-12 pl-0\">\n            <label for=\"empresas\">Empresa</label>\n            <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"true\"\n              [items]=\"empresas\"\n              [virtualScroll]=\"true\"\n              dropdownPosition=\"bottom\"\n              placeholder=\"Selecione...\"\n              [loading]=\"loadingEmpresas\"\n              labelForId=\"UUID_EMPR\"\n              bindLabel=\"NM_FANT\"\n              bindValue=\"ID\"\n              id=\"UUID_EMPR\"\n              formControlName=\"UUID_EMPR\"\n            >\n            </ng-select>\n          </div>\n        </div>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\n        <legend>Materiais</legend>\n        <div class=\"row\" *ngIf=\"loadingMateriais\">\n          <div class=\"col\">\n            <message\n              icon=\"fas fa-cog fa-spin\"\n              text=\"Estamos pesquisando os materiais para você...\">\n            </message>\n          </div>\n        </div>\n        <div formArrayName=\"materiais\">\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\n              <div class=\"mtc-title\"></div>\n              <div>\n                <a\n                  class=\"text-secondary\"\n                  (click)=\"onAddMaterial()\"\n                  href=\"javascript:void(0)\">\n                  <b>Adicionar</b>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\"  *ngFor=\"let item of formMateriais.controls; let i = index\" [formGroupName]=\"i\">\n            <div class=\"form-group col mb-0\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-1 pl-0\">\n                  <label for=\"SEQU_MATE\">Sequência</label>\n                  <input\n                    type=\"number\"\n                    class=\"form-control\"\n                    id=\"SEQU_MATE\"\n                    formControlName=\"SEQU_MATE\"\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'SEQU_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'SEQU_MATE')\">\n                </div>\n                <div class=\"form-group col-md-2 pl-0\">\n                  <label for=\"DS_UNID_MEDI\">Unidade de Medida</label>\n                  <select \n                  class=\"form-control custom-select\"\n                  id=\"DS_UNID_MEDI\"\n                  formControlName=\"DS_UNID_MEDI\"\n                  [ngClass]=\"onNestedFieldError('materiais', i, 'DS_UNID_MEDI') + ' ' + onNestedFieldRequired('materiais', i, 'DS_UNID_MEDI')\"\n                >\n                  <option >KG</option>\n                  <option >TON</option>\n                  <option >PC</option>\n                  <option >UN</option>\n                </select>\n                </div>\n                <div class=\"form-group col-md-2 pl-0\">\n                  <label for=\"TT_MATE\">Quantidade</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"TT_MATE\"\n                    formControlName=\"TT_MATE\"\n                    currencyMask [options]=\"{ align: 'right', prefix: '' , thousands: '.', decimal: ',' , precision: 3 }\"\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'TT_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'TT_MATE')\">\n                </div>\n                <div class=\"form-group col-md-2 pl-0\">\n                  <label for=\"DS_LOTE\">Lote</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"DS_LOTE\"\n                    formControlName=\"DS_LOTE\"\n                  >\n                </div>\n                <div class=\"form-group col-md-4 pl-0\">\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                    <label class=\"my-auto\" for=\"NM_MATE\">Material</label>\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\n                      <a\n                        class=\"text-primary\"\n                        href=\"javascript:void(0)\"\n                        (click)=\"openModal(selecionarMateriais, i)\">\n                        <strong>Selecionar</strong>\n                      </a>\n                    </div>\n                  </div>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"NM_MATE\"\n                    formControlName=\"NM_MATE\"\n                    [ngClass]=\"onNestedFieldError('materiais', i, 'NM_MATE') + ' ' + onNestedFieldRequired('materiais', i, 'NM_MATE')\">\n                </div>\n                <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon\"\n                    (click)=\"onDeleteMaterial(i)\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-10 pt-2 mx-auto\">\n        <legend>Observação</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observação:</label>\n            <textarea \n            class=\"form-control\"\n            id=\"DS_OBSE\"\n            formControlName=\"DS_OBSE\" \n            rows=\"3\"></textarea>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n    </fieldset>\n  </form>\n  <ng-template #alterarFornecedor>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Pesquisa de Fornecedor</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingFornecedores\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formPesquisaFornecedor\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-3\">\n              <label for=\"IN_STAT\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"IN_STAT\"\n              >\n                <option value=\"1\">Ativo</option>\n                <option value=\"0\">Inativo</option>\n                <option value=\"\">Exibir Todos</option>\n              </select>\n            </div>\n            <div class=\"form-group col-3\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_REFE_ERP\">Cód. Fornecedor</option>\n                <option value=\"NM_RAZA_SOCI\" selected>Razão Social</option>\n                <option value=\"NM_FANT\">Nome Fantasia</option>\n                <option value=\"NR_CNPJ_CPF\">CNPJ</option>\n              </select>\n            </div>\n\n            <div class=\"form-group col-6\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  >\n                  <div class=\"input-group-append\">\n                    <span \n                      [tooltip]=\"formPesquisaFornecedor.valid == false ? 'Digite um termo de pesquisa':''\"\n                      container=\"body\"\n                      placement =\"left\"\n                    >\n                      <button\n                      style=\"height: 25px;\"\n                        [disabled]=\"formPesquisaFornecedor.valid == false\"\n                        class=\"input-group-text hover\"\n                        (click)=\"getFornecedores()\"\n                        >\n                        <i class=\"fas fa-search\"></i>\n                      </button>\n                    </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <custom-table *ngIf=\"!loadingFornecedores && !noFornecedor\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>Cód. Fornecedor</th>\n            <th>Razão Social</th>\n            <th>Nome Fantasia</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let fornecedor of fornecedores | slice : begin : end; let i = index\">\n            <td>{{ fornecedor.ID_REFE_ERP }}</td>\n            <td>{{ fornecedor.NM_RAZA_SOCI }}</td>\n            <td>{{ fornecedor.NM_FANT }}</td>\n            <td>\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Salvar Fornecedor\"\n                container=\"body\"\n                (click)=\"setFornecedor(fornecedor);modalRef.hide()\"\n              >\n                <i class=\"far fa-save\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template #selecionarMateriais>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Pesquisa de Materiais</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingAllMateriais\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formAllMateriais\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-3\">\n              <label for=\"IN_STAT\">Situação</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"IN_STAT\"\n              >\n                <option value=\"1\">Ativo</option>\n                <option value=\"0\">Inativo</option>\n                <option value=\"\">Exibir Todos</option>\n              </select>\n            </div>\n            <div class=\"form-group col-3\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"ID_REFE_ERP\">Cód. Material</option>\n                <option value=\"NM_MATE\" selected> Nome Material</option>\n                <option value=\"NM_CLAS\">Classe</option>\n                <option value=\"NM_LINH\">Linha</option>\n              </select>\n            </div>\n\n            <div class=\"form-group col-6\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  >\n                  <div class=\"input-group-append\">\n                    <span \n                      [tooltip]=\"formAllMateriais.valid == false ? 'Digite um termo de pesquisa':''\"\n                      container=\"body\"\n                      placement =\"left\"\n                    >\n                      <button\n                      style=\"height: 25px;\"\n                        [disabled]=\"formAllMateriais.valid == false\"\n                        class=\"input-group-text hover\"\n                        (click)=\"getAllMateriais()\"\n                        >\n                        <i class=\"fas fa-search\"></i>\n                      </button>\n                    </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <custom-table *ngIf=\"!loadingAllMateriais && !noAllMateriais\" class=\"text-center\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>Cód. Material</th>\n            <th>Nome Material</th>\n            <th>Classe</th>\n            <th>Linha</th>\n            <th>Unidade de Medida</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let material of allMateriais | slice : begin : end; let i = index\">\n            <td>{{ material.ID_REFE_ERP }}</td>\n            <td>{{ material.NM_MATE }}</td>\n            <td>{{ material.NM_CLAS }}</td>\n            <td>{{ material.NM_LINH }}</td>\n            <td>{{ material.NM_APOI_UNID_MEDI }} </td>\n            <td>\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Salvar Material\"\n                container=\"body\"\n                (click)=\"setMaterial(material);modalRef.hide()\"\n              >\n                <i class=\"far fa-save\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div *ngIf=\"totalItemsMaterial > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItemsMaterial ? totalItemsMaterial : currentPage*(itemsPerPage) }} de {{ totalItemsMaterial }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItemsMaterial\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </ng-template>\n  <ng-template #popupStatus>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Alteração de Status de Recebimento</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hidePopup()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row\">\n        <div class=\"col-lg-3\" >\n          <div class=\"text-center\">\n            <i class=\"text-muted fas fa-file-excel fa-4x mt-3\"></i>\n          </div>\n        </div>\n        <div class=\"col-lg-9\">\n          <p>\n            <strong>Não encontramos nenhuma ficha de não conformidade para essa nota fiscal.</strong>\n          </p>\n\n          <p>\n            <strong>Deseja abrir uma ficha de não conformidade agora?</strong>\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button \n      type=\"button\" \n      class=\"btn btn-success \"\n      target=\"_blank\"\n      (click)=\"gerarFicha()\"\n    >\n      <span aria-hidden=\"true\">\n      </span>Sim\n    </button>\n    <button \n      type=\"button\" \n      class=\"btn btn-danger \"\n      (click)=\"hidePopup()\"\n    >\n      <span aria-hidden=\"true\">\n      </span>Não\n    </button>\n    </div>\n  </ng-template>\n</app-body>");

/***/ }),

/***/ "jsYm":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/notas-fiscais/lista/lista.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"NOTAS FISCAIS\">\n  <button\n  type=\"button\"\n  (click)=\"getExport()\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"ID_LOGI_ENMA_NOFI\">ID</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"ID_LOGI_ENMA_NOFI\"\n                formControlName=\"ID_LOGI_ENMA_NOFI\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"NR_NOTA_FISC\">NOTA FISCAL</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NR_NOTA_FISC\"\n                formControlName=\"NR_NOTA_FISC\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-5 pl-0\">\n              <label for=\"NM_FORN\">Fornecedor</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NM_FORN\"\n                formControlName=\"NM_FORN\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (keydown.enter)=\"onFilter()\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-md-1 pl-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                (keydown.enter)=\"onFilter()\"\n                formControlName=\"TT_REGI_PAGI\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"DS_LOTE\">Lote</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"DS_LOTE\"\n                formControlName=\"DS_LOTE\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"CD_MATE\">CÓDIGO DO MATERIAL</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"CD_MATE\"\n                formControlName=\"CD_MATE\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n            <div class=\"form-group col-md-8 pl-0\">\n              <label for=\"NM_MATE\">MATERIAL</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"NM_MATE\"\n                formControlName=\"NM_MATE\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Digite...\"\n              />\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"TP_DATA_INIC\">Tipo Data Inicial</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tiposData\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipoData\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipoData\"\n              formControlName=\"TP_DATA_INIC\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"TP_DATA_FINA\">Tipo Data Final</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tiposData\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipoData\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipoData\"\n              formControlName=\"TP_DATA_FINA\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-md-5 pl-0\">\n              <label for=\"empresas\">Empresa</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"empresas\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingEmpresas\"\n                labelForId=\"UUID_EMPR\"\n                bindLabel=\"NM_FANT\"\n                bindValue=\"ID\"\n                id=\"UUID_EMPR\"\n                formControlName=\"UUID_EMPR\"\n                (change)=\"getDepositos({'ID_EMPR': $event?.ID || ''})\"\n              >\n              </ng-select>\n            </div>\n            <div class=\"form-group col-md-3 pl-0\">\n              <label for=\"statusRecebimento\">Status de Recebimento</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"statusRecebimento\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                (keydown.enter)=\"onFilter()\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingStatusRecebimento\"\n                labelForId=\"ID_LOGI_ENMA_NOFI_STAT\"\n                bindLabel=\"NM_STAT\"\n                bindValue=\"ID_LOGI_ENMA_NOFI_STAT\"\n                id=\"ID_LOGI_ENMA_NOFI_STAT\"\n                formControlName=\"ID_LOGI_ENMA_NOFI_STAT\">\n              </ng-select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"DT_INIC\">Data Inicial</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"DT_INIC\"\n                type=\"text\"\n                (keydown.enter)=\"onFilter()\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"DT_INIC\"\n                >\n              </div>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"DT_FINA\">Data Final</label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                </div>\n                <input\n                class=\"form-control\"\n                id=\"DT_FINA\"\n                type=\"text\"\n                (keydown.enter)=\"onFilter()\"\n                bsDatepicker\n                placeholder=\"Selecione...\"\n                [bsConfig]=\"bsConfig\"\n                formControlName=\"DT_FINA\"\n                >\n              </div>\n            </div>\n            <div class=\"form-group col-md-5 pl-0\">\n              <label for=\"depositos\">Deposito</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"depositos\"\n                [virtualScroll]=\"true\"\n                dropdownPosition=\"bottom\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingDepositos\"\n                labelForId=\"UUID_DEPO\"\n                bindLabel=\"NM_DEPO\"\n                bindValue=\"ID\"\n                id=\"UUID_DEPO\"\n                formControlName=\"UUID_DEPO\"\n              >\n              </ng-select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\" >\n    <div class=\"col-md-4 mb-4 mb-md-0\">\n      <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\n        <div class=\"bg-primary rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file\"></i></div>\n        <div class=\"text-right\" [hidden]=\"!cardsLoading || notasEmpty\" >\n          <h5\n          class=\"font-weight-bolder mb-1\"\n          counto\n          [step]=\"30\"\n          [countTo]=\"notas\"\n          [countFrom]=\"0\"\n          [duration]=\"2\"\n          (countoChange)=\"countoNotas = $event\">\n          {{ countoNotas | number:'1.0-0' }}\n          </h5>\n          <div class=\"text-muted small font-weight-bold\">TOTAL DE NOTAS FISCAIS ENCONTRADAS</div>\n        </div>\n        <div class=\"text-right\" *ngIf=\"notasEmpty\">\n          <h5 class=\"font-weight-bolder mb-1\">0</h5>\n          <div class=\"text-muted small font-weight-bold\">TOTAL DE NOTAS FISCAIS ENCONTRADAS</div>\n        </div>\n        <div class=\"text-right my-auto\" *ngIf=\"!cardsLoading && !notasEmpty\">\n          <div class=\"spinner-border text-dark\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 mb-4 mb-md-0\">\n      <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\" (click)=\"fichasNaoConformeChange()\">\n        <div class=\"bg-orange rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-file-excel\"></i></div>\n        <div class=\"text-right\" [hidden]=\"!cardsLoading || fichasNaoConformeEmpty\">\n          <h5\n            class=\"font-weight-bolder mb-1\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"fichasNaoConforme\"\n            [countFrom]=\"0\"\n            [duration]=\"2\"\n            (countoChange)=\"countoFichasNaoConforme = $event\">\n            {{ countoFichasNaoConforme | number:'1.0-0' }}\n          </h5>\n          <div class=\"text-muted small font-weight-bold\">TOTAL DE NOTAS FISCAIS COM FNC</div>\n        </div>\n        <div class=\"text-right\" *ngIf=\"fichasNaoConformeEmpty\">\n          <h5 class=\"font-weight-bolder mb-1\">0</h5>\n          <div class=\"text-muted small font-weight-bold\">TOTAL DE NOTAS FISCAIS COM FNC</div>\n        </div>\n        <div class=\"text-right my-auto\" *ngIf=\"!cardsLoading && !fichasNaoConformeEmpty\">\n          <div class=\"spinner-border text-dark\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 mb-4 mb-md-0\">\n      <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\" (click)=\"openModalDuplicadas(modalDuplicadas)\">\n        <div class=\"bg-warning rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-exclamation\"></i></div>\n        <div class=\"text-right\" [hidden]=\"!cardsLoading || duplicadosEmpty\">\n          <h5\n            class=\"font-weight-bolder mb-1\"\n            counto\n            [step]=\"30\"\n            [countTo]=\"duplicados\"\n            [countFrom]=\"0\"\n            [duration]=\"2\"\n            (countoChange)=\"countoDuplicados = $event\">\n            {{ countoDuplicados | number:'1.0-0' }}\n          </h5>\n          <div class=\"text-muted small font-weight-bold\">TOTAL DE LOTES DUPLICADAS</div>\n        </div>\n        <div class=\"text-right\" *ngIf=\"duplicadosEmpty\">\n          <h5 class=\"font-weight-bolder mb-1\">0</h5>\n          <div class=\"text-muted small font-weight-bold\">TOTAL DE LOTES DUPLICADAS</div>\n        </div>\n        <div class=\"text-right my-auto\" *ngIf=\"!cardsLoading && !duplicadosEmpty\">\n          <div class=\"spinner-border text-dark\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0 col-md-12\" >\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('ID_LOGI_ENMA_NOFI')\">\n                <thead-sorter value=\"ID\" [active]=\"ORDE_BY == 'ID_LOGI_ENMA_NOFI'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('NR_NOTA_FISC_REFE')\">\n                <thead-sorter value=\"Nota Fiscal\" [active]=\"ORDE_BY == 'NR_NOTA_FISC_REFE'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('SG_ORIG')\">\n                <thead-sorter value=\"Origem\" [active]=\"ORDE_BY == 'SG_ORIG'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('NM_FORN')\">\n                <thead-sorter value=\"Fornecedor\" [active]=\"ORDE_BY == 'NM_FORN'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('NM_STAT')\">\n                <thead-sorter value=\"Status\" [active]=\"ORDE_BY == 'NM_STAT'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('NM_EMPR')\">\n                <thead-sorter value=\"Empresa\" [active]=\"ORDE_BY == 'NM_EMPR'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('NM_DEPO')\">\n                <thead-sorter value=\"Depósito\" [active]=\"ORDE_BY == 'NM_DEPO'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('DT_EMIS_NOTA_FISC')\">\n                <thead-sorter value=\"Data de Emissão\" [active]=\"ORDE_BY == 'DT_EMIS_NOTA_FISC'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th scope=\"col\" style=\"width:140px\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let nota of notasFiscais\" >\n              <td  [ngClass]=\"nota.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n              {{nota.ID_LOGI_ENMA_NOFI }}\n              </td>\n              <td >\n                <span *ngIf=\"nota?.NR_NOTA_FISC_REFE\">{{ nota.NR_NOTA_FISC_REFE }}</span>\n                <span *ngIf=\"!nota?.NR_NOTA_FISC_REFE\">{{ nota.NR_NOTA_FISC }}</span>\n              </td>\n              <td >{{ nota.SG_ORIG | uppercase }}</td>\n              <td >{{ nota.NM_FORN | uppercase }}</td>\n              <td >{{ nota.NM_STAT | uppercase }}</td>\n              <td >{{ nota.NM_EMPR | uppercase }}</td>\n              <td >{{ nota.NM_DEPO | uppercase }}</td>\n              <td >{{ nota.DT_EMIS_NOTA_FISC | date: 'dd/MM/yyyy' }}</td>\n              <td class=\"align-middle\">\n                <span class=\"mx-2\" [tooltip]=\"nota.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(nota)\">\n                    <i [ngClass]=\"nota.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                  </button>\n                </span>\n                <span class=\"mx-2\" tooltip=\"Gerar FNC\"  placement=\"left\" container=\"body\">\n                  <button \n                    type=\"button\" \n                    [ngClass]=\"nota.IN_FHNC == '1' ? 'btn-icon-sm buttonGerarFicha' : 'btn-icon-sm'\"\n                    (click)=\"gerarFicha(nota.ID_LOGI_ENMA_NOFI)\"\n                  >\n                    <i class=\"fas fa-file-excel \" ></i>\n                  </button>\n                </span>\n                <span class=\"mx-2\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', nota.ID_LOGI_ENMA_NOFI]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n                <span class=\"mx-2\"  tooltip=\"Detalhe da Nota\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModalDetalhes(detalhesNotaFiscal, nota)\">\n                    <i class=\"fas fa-search\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n  <ng-template #detalhesNotaFiscal >\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Detalhes da Nota Fiscal  -  Nº {{notaFiscalSelecionada?.NR_NOTA_FISC}}</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingMateriais || loadingAlteracoes\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModalDetalhes()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\" >\n      <tabset>\n        <tab heading=\"Dados cadastrais\">\n          <div class=\"border-right border-left border-bottom px-3 pt-3\">\n            <div class=\"modal-body\" >\n              <div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-2\">\n                    <label>ID</label>\n                    <div *ngIf=\"notaFiscalSelecionada?.ID_LOGI_ENMA_NOFI == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"notaFiscalSelecionada?.ID_LOGI_ENMA_NOFI != null\">{{notaFiscalSelecionada?.ID_LOGI_ENMA_NOFI}}</div>\n                  </div>\n                  <div class=\"form-group col-lg-2\">\n                    <label>Nota Fiscal de Remessa</label>\n                    <div *ngIf=\"notaFiscalSelecionada?.NR_NOTA_FISC_REFE == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"notaFiscalSelecionada?.NR_NOTA_FISC_REFE != null\">{{notaFiscalSelecionada?.NR_NOTA_FISC_REFE}}</div>\n                  </div>\n                  <div class=\"form-group col-lg-3\">\n                    <label>Status de Recebimento</label>\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_STAT == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_STAT != null\"> {{notaFiscalSelecionada?.NM_STAT | uppercase }}</div>\n                  </div>\n                  <div class=\"form-group col-lg-5\">\n                    <label>Fornecedor</label>\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_FORN == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_FORN != null\">{{ notaFiscalSelecionada?.NM_FORN}}</div>\n                  </div>\n                </div>\n                <div class=\"form-row\">\n                  <div class=\"form-group col-lg-2\">\n                    <label>Data de Emissão</label>\n                    <div *ngIf=\"notaFiscalSelecionada?.DT_EMIS_NOTA_FISC == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"notaFiscalSelecionada?.DT_EMIS_NOTA_FISC != null\">{{ notaFiscalSelecionada?.DT_EMIS_NOTA_FISC | date: 'dd/MM/yyyy' }}</div>\n                  </div>\n                  <div class=\"form-group col-lg-2\">\n                    <label>Data de Recebimento</label>\n                    <div *ngIf=\"notaFiscalSelecionada?.DT_RECE == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"notaFiscalSelecionada?.DT_RECE != null\">{{ notaFiscalSelecionada?.DT_RECE | date: 'dd/MM/yyyy' }}</div>\n                  </div>\n                  <div class=\"form-group col-lg-3\">\n                    <label>Data de Entrada</label>\n                    <div *ngIf=\"notaFiscalSelecionada?.DT_ENTR == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"notaFiscalSelecionada?.DT_ENTR != null\">{{ notaFiscalSelecionada?.DT_ENTR | date: 'dd/MM/yyyy' }}</div>\n                  </div>\n                  <div class=\"form-group col-lg-2\">\n                    <label>Empresa</label>\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_EMPR == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_EMPR != null\">{{ notaFiscalSelecionada?.NM_EMPR }}</div>\n                  </div>\n                  <div class=\"form-group col-lg-3\">\n                    <label>Depósito</label>\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_DEPO == null\">NÃO INFORMADO</div>\n                    <div *ngIf=\"notaFiscalSelecionada?.NM_DEPO != null\">{{ notaFiscalSelecionada?.NM_DEPO }}</div>\n                  </div>\n                </div>\n              </div>\n              <br>\n              <div [hidden]=\"!loadingMateriais\" class=\"col-lg-12 text-muted \">\n                <p><strong>Buscando os materiais da Nota Fiscal...</strong></p>\n              </div>\n              <custom-table class=\"text-center\" *ngIf=\"!loadingMateriais && !noMateriais\">\n                <ng-template #thead let-thead>\n                  <tr>\n                    <th>ID </th>\n                    <th>Sequência</th>\n                    <th>Lote</th>\n                    <th>Cód. Material</th>\n                    <th>Material</th>\n                    <th>Classe</th>\n                    <th>Unidade de Medida</th>\n                    <th>Quantidade</th>\n                  </tr>\n                </ng-template>\n                <ng-template #tbody let-tbody>\n                  <tr *ngFor=\"let item of materiais\">\n                    <td>{{item.ID_MATE}}</td>\n                    <td>{{item.SEQU_MATE}}</td>\n                    <td *ngIf=\"item.DS_LOTE != null\" >{{item.DS_LOTE}}</td>\n                    <td *ngIf=\"item.DS_LOTE == null\" >NÃO INFORMADO</td>\n                    <td>{{item.CD_MATE}}</td> \n                    <td>{{item.NM_MATE}}</td>\n                    <td>{{item.NM_CLAS}}</td>\n                    <td>{{item.DS_UNID_MEDI}}</td>\n                    <td>{{item.TT_MATE | number:'1.3-3' }}</td>\n                  </tr>\n                </ng-template>\n              </custom-table>\n              <br><hr>\n              <div class=\"form-row\">\n                <div class=\"form-group col\">\n                  <label>Usuário Responsável Pelo Cadastro</label>\n                  <div *ngIf=\"notaFiscalSelecionada?.NR_MATR == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"notaFiscalSelecionada?.NR_MATR != null\">{{notaFiscalSelecionada?.NR_MATR}} - {{ notaFiscalSelecionada?.NM_USUA }}</div>\n                </div>\n                <div class=\"form-group col\">\n                  <label>Data do Cadastro</label>\n                  <div *ngIf=\"notaFiscalSelecionada?.DT_INCL == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"notaFiscalSelecionada?.DT_INCL != null\">{{ notaFiscalSelecionada?.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</div>\n                </div>\n                <div class=\"form-group col\">\n                  <label>Origem</label>\n                  <div *ngIf=\"notaFiscalSelecionada?.SG_ORIG == null\">NÃO INFORMADO</div>\n                  <div *ngIf=\"notaFiscalSelecionada?.SG_ORIG != null\">{{ notaFiscalSelecionada?.SG_ORIG }}</div>\n                </div>\n              </div>\n              <div [hidden]=\"loadingMateriais || !noMateriais\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n                <empty-result message=\"Nenhum material encontrado\"></empty-result>\n              <br>\n              </div>\n            </div>\n          </div>\n        </tab>\n        <tab heading=\"Alterações da Nota Fiscal\">\n          <div class=\"border-right border-left border-bottom px-3 pt-3\" >\n            <div [hidden]=\"!loadingAlteracoes\" class=\"col-lg-12 text-muted \">\n              <p><strong>Buscando as alterações da Nota Fiscal...</strong></p>\n            </div>\n            <div class=\"ScrollHistorico\">\n              <accordion  *ngFor=\"let alteracao of alteracoes\" [hidden]=\"loadingAlteracoes || noAlteracoes\">\n                <accordion-group class=\"mb-2\" [heading]=\"titleHistorico(alteracao)\" >\n                  <div class=\"form-row\">\n                    <div *ngIf=\"typeChange(alteracao)\" class=\"col-lg-12 text-muted \">\n                      <p><strong>Alteração realizada apenas nos materiais</strong></p>\n                    </div>\n                    <div class=\"form-group col-md-3\" *ngIf=\"alteracao.NR_NOTA_FISC != null\">\n                      <label>NOTA FISCAL</label>\n                      <div >{{ alteracao.NR_NOTA_FISC }}</div>\n                    </div>\n                    <div class=\"form-group col-md-3\" *ngIf=\"alteracao.NR_NOTA_FISC_REFE != null\">\n                      <label>NOTA FISCAL REMESSA</label>\n                      <div >{{ alteracao.NR_NOTA_FISC_REFE }}</div>\n                    </div>\n                    <div class=\"form-group col-md-6\" *ngIf=\"alteracao.NM_STAT != null\">\n                      <label>STATUS DE RECEBIMENTO</label>\n                      <div >{{ alteracao.NM_STAT }}</div>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\" *ngIf=\"alteracao.NM_EMPR != null\">\n                      <label>EMPRESA</label>\n                      <div>{{ alteracao.NM_EMPR }}</div>\n                    </div>\n                    <div class=\"form-group col-md-6\" *ngIf=\"alteracao.NM_FORN != null\">\n                      <label>FORNECEDOR</label>\n                      <div>{{ alteracao.NM_FORN }}</div>\n                    </div>\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\" *ngIf=\"alteracao.DT_EMIS_NOTA_FISC != null\">\n                      <label>DATA DE EMISSÃO</label>\n                      <div>{{ alteracao.DT_EMIS_NOTA_FISC | date: 'dd/MM/yyyy HH:mm'}}</div>\n                    </div>\n                    <div class=\"form-group col-md-6\" *ngIf=\"alteracao.IN_STAT != null\">\n                      <label>SITUAÇÃO</label>\n                      <div *ngIf=\"alteracao.IN_STAT == 0\" class=\"text-danger\">INATIVO</div>\n                      <div *ngIf=\"alteracao.IN_STAT != 0\" class=\"text-success\">ATIVO</div>\n                    </div>\n                  </div>\n                  <div class=\"form-row\" *ngIf=\"alteracao.DS_OBSE != null\">\n                    <div class=\"form-group col-md-12\" >\n                      <label>OBSERVAÇÃO</label>\n                      <textarea class=\"form-control\" [value]=\"alteracao.DS_OBSE\" disabled>\n                      </textarea><br>\n                    </div>\n                  </div>\n                </accordion-group>\n              </accordion>\n              <div [hidden]=\"loadingAlteracoes || !noAlteracoes\" class=\"text-center d-flex justify-content-center align-items-center mb-2\" style=\"height: 80%\">\n                <empty-result message=\"Nenhuma alteração encontrada\"></empty-result>\n              </div>\n            </div>\n          </div>\n        </tab>\n        <tab heading=\"Alterações dos Materiais\">\n          <div class=\"border-right border-left border-bottom px-3 pt-3\" >\n            <div [hidden]=\"!loadingHistoricoMateriais\" class=\"col-lg-12 text-muted \">\n              <p><strong>Buscando as alterações da Nota Fiscal...</strong></p>\n            </div>\n            <div class=\"ScrollHistorico\">\n              <accordion  *ngFor=\"let alteracaoMateriais of historicoMateriais\" [hidden]=\"loadingHistoricoMateriais || hasHistoricoMateriais()\">\n                <accordion-group class=\"mb-2\" [heading]=\"titleHistorico(alteracaoMateriais)\" >\n                  <custom-table class=\"text-center\" *ngIf=\"!hasHistoricoMateriais()\">\n                    <ng-template #thead let-thead>\n                      <tr *ngIf=\"alteracaoMateriais.SEQU_MATE\">\n                        <th>ID </th>\n                        <th>Sequência</th>\n                        <th>Lote</th>\n                        <th>Material</th>\n                        <th>Classe</th>\n                        <th>Unidade de Medida</th>\n                        <th>Quantidade</th>\n                      </tr>\n                      <tr *ngIf=\"!alteracaoMateriais.SEQU_MATE\">\n                        <th>MATERIAL REMOVIDO DA NOTA FISCAL</th>\n                        <th>Lote</th>\n                        <th>Classe</th>\n                        <th>Unidade de Medida</th>\n                        <th>Quantidade</th>\n                      </tr>\n                    </ng-template>\n                    <ng-template #tbody let-tbody>\n                      <tr *ngIf=\"alteracaoMateriais.SEQU_MATE\">\n                        <td>{{alteracaoMateriais.ID_MATE}}</td>\n                        <td>{{alteracaoMateriais.SEQU_MATE}}</td>\n                        <td>{{alteracaoMateriais.DS_LOTE}}</td>\n                        <td>{{alteracaoMateriais.CD_MATE}} - {{alteracaoMateriais.NM_MATE}}</td>\n                        <td>{{alteracaoMateriais.NM_CLAS}}</td>\n                        <td>{{alteracaoMateriais.DS_UNID_MEDI}}</td>\n                        <td>{{alteracaoMateriais.TT_MATE | number:'1.3-3' }}</td>\n                      </tr>\n                      <tr *ngIf=\"!alteracaoMateriais.SEQU_MATE\">\n                        <td>{{alteracaoMateriais.CD_MATE}} - {{alteracaoMateriais.NM_MATE}}</td>\n                        <td>{{alteracaoMateriais.DS_LOTE}}</td>\n                        <td>{{alteracaoMateriais.NM_CLAS}}</td>\n                        <td>{{alteracaoMateriais.DS_UNID_MEDI}}</td>\n                        <td>{{alteracaoMateriais.TT_MATE | number:'1.3-3' }}</td>\n                      </tr>\n                    </ng-template>\n                  </custom-table>\n                </accordion-group>\n              </accordion>\n              <div [hidden]=\"loadingHistoricoMateriais || !hasHistoricoMateriais() \" class=\"text-center d-flex justify-content-center align-items-center mb-2\" style=\"height: 80%\">\n                <empty-result message=\"Nenhuma alteração encontrada\"></empty-result>\n              </div>\n            </div>\n          </div>\n        </tab>\n      </tabset>\n    </div>\n  </ng-template>\n  <ng-template #modalDuplicadas >\n    <div class=\"modal-header\" >\n      <h4 class=\"modal-title pull-left\">Lotes Duplicados</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModalDuplicadas()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <logistica-entrada-materiais-notas-fiscais-duplicadas>\n\n    </logistica-entrada-materiais-notas-fiscais-duplicadas>\n  </ng-template>\n</app-body>");

/***/ }),

/***/ "jsif":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/status-recebimento/lista/lista.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisStatusRecebimentoListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisStatusRecebimentoListaComponent", function() { return LogisticaEntradaMateriaisStatusRecebimentoListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "LEko");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "8gyq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/status-recebimento.service */ "9bNu");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");



//angular



//servicos







// rxjs


let LogisticaEntradaMateriaisStatusRecebimentoListaComponent = class LogisticaEntradaMateriaisStatusRecebimentoListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, statusRecebimentoService, formBuilder, xlsxService, confirmModalService, routerService, dateService, detailPanelService) {
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
        this.ORDE_TYPE = 'desc';
        //LOADINGS
        this.loading = true;
        this.loadingNavBar = false;
        //VARIAVEIS
        this.totalItens = [];
        this.historicos = [];
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        // Tipos de Situação dos Status (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '0',
                nome: 'Inativos',
            },
        ];
        // Subtitles (Ativo/Inativo)
        this.subtitles = [
            {
                id: 1,
                text: 'Ativo',
                color: 'green',
            },
            {
                id: 2,
                text: 'Inativo',
                color: 'red',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.onDetailPanelEmitter();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getStatusRecebimento(this.getParams());
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            TIME: [new Date().getTime()],
        });
    }
    buildForm() {
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
            ORDE_TYPE: [this.ORDE_TYPE],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Status de Recebimento',
            },
        ];
    }
    onFilter() {
        this.detailPanelService.hide();
        this.form.get('PAGI').setValue(1);
        this.form.get('TIME').setValue(new Date().getTime());
        this.form.get('ORDE_TYPE').setValue(this.ORDE_TYPE);
        this.form.get('ORDE_BY').setValue(this.ORDE_BY);
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    onDetails(status) {
        this.detailPanelService.show();
        this.statusSelecionado = status;
        this.getHistorico(status);
        //this.detailPanelService.loadedFinished(false);
    }
    getStatusRecebimento(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.statusRecebimentoService
            .getStatusRecebimento(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.statusRecebimento = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.statusRecebimento = [];
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    onPageChanged(event) {
        this.form.get('PAGI').setValue(event.page);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    classStatusBorder(status) {
        let borderClass;
        if (status.IN_STAT == 1) {
            borderClass = 'border-success';
        }
        else if (status.IN_STAT == 0) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    changeType(status) {
        const stat = status.IN_STAT == 1 ? 0 : 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
            this.loadingNavBar = true;
            status.IN_STAT = stat;
            return this.statusRecebimentoService.postStatusRecebimento(status);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            status.IN_STAT = status.IN_STAT == 1 ? 0 : 1;
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.statusRecebimento.concat(this.totalItens);
        this.xlsxService.exportFile(listagemExport, `Status_Recebimento${dataExport}`);
    }
    getHistorico(status) {
        if (status.historicos) {
            this.historicos = status.historicos;
            return;
        }
        const params = status;
        this.statusRecebimentoService
            .getHistorico(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.detailPanelService.loadedFinished(false);
        }))
            .subscribe((response) => {
            status.historicos = response.body['data'];
            this.historicos = response.body['data'];
        }, (error) => {
        });
    }
    getDescricaoAtualizaco(corrente, index) {
        var _a, _b, _c;
        if ((corrente === null || corrente === void 0 ? void 0 : corrente.TP_ACAO) === 'INSERT') {
            return 'Cadastrou o registro';
        }
        if (index == 0) {
            return 'Atualizou o registro';
        }
        if ((corrente === null || corrente === void 0 ? void 0 : corrente.IN_STAT) != ((_a = this.historicos[index - 1]) === null || _a === void 0 ? void 0 : _a.IN_STAT)) {
            if ((corrente === null || corrente === void 0 ? void 0 : corrente.IN_STAT) == 0) {
                return `Inativou o registro`;
            }
            return `Ativou o registro`;
        }
        if ((corrente === null || corrente === void 0 ? void 0 : corrente.DS_OBSE) != ((_b = this.historicos[index - 1]) === null || _b === void 0 ? void 0 : _b.DS_OBSE)) {
            return 'Alterou a observação';
        }
        return `Atualizou o nome do registro de ${(_c = this.historicos[index - 1]) === null || _c === void 0 ? void 0 : _c.NM_STAT} para ${corrente === null || corrente === void 0 ? void 0 : corrente.NM_STAT}`;
    }
    setOrderBy(column) {
        if (this.ORDE_BY === column) {
            if (this.ORDE_TYPE == 'desc') {
                this.ORDE_TYPE = 'asc';
            }
            else if (this.ORDE_TYPE == 'asc') {
                this.ORDE_TYPE = 'desc';
            }
        }
        else {
            this.ORDE_BY = column;
            this.ORDE_TYPE = 'asc';
        }
        this.onFilter();
    }
};
LogisticaEntradaMateriaisStatusRecebimentoListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisStatusRecebimentoService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"] }
];
LogisticaEntradaMateriaisStatusRecebimentoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrada-materiais-status-recebimento-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisStatusRecebimentoService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]])
], LogisticaEntradaMateriaisStatusRecebimentoListaComponent);



/***/ }),

/***/ "l/7K":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/status-recebimento/cadastro/cadastro.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent", function() { return LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "IuEw");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "738o");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/status-recebimento.service */ "9bNu");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



//Services




//Bootstrap


//Angular




let LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent = class LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent {
    constructor(router, formBuilder, pnotify, titleService, localeService, activatedRoute, atividadesService, statusRecebimentoService) {
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
        this.disabledForm = false;
        //loading
        this.loading = false;
        this.loadingNavBar = false;
        //Interfaces
        this.statusRecebimento = [];
        this.MASKS = js_brasil__WEBPACK_IMPORTED_MODULE_7__["utilsBr"].MASKS;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (_params.hasOwnProperty('id'))
            return this.getStatusRecebimento({ ID_LOGI_ENMA_NOFI_STAT: _params['id'] });
    }
    getStatusRecebimento(params) {
        this.loading = true;
        const _params = params !== null && params !== void 0 ? params : {};
        this.statusRecebimentoService
            .getStatusRecebimento(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.form.patchValue(response.body['data'][0]);
                this.noResult = false;
            }
            else {
                this.noResult = true;
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Cadastro';
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/home',
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Status de Recebimento',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_LOGI_ENMA_NOFI_STAT: [null],
            NM_STAT: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            IN_STAT: [null],
            DS_OBSE: [null],
        });
    }
    // Validação de formulário
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    postStatusRecebimento() {
        this.loadingNavBar = true;
        this.statusRecebimentoService
            .postStatusRecebimento(this.form.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.pnotify.success();
                this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute,
                });
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
};
LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"] },
    { type: _services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntradaMateriaisStatusRecebimentoService"] }
];
LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_4__["AtividadesService"],
        _services_status_recebimento_service__WEBPACK_IMPORTED_MODULE_6__["LogisticaEntradaMateriaisStatusRecebimentoService"]])
], LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent);



/***/ }),

/***/ "l/Jf":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/painel-aprovacao/lista/lista.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisPainelAprovacaoListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisPainelAprovacaoListaComponent", function() { return LogisticaEntradaMateriaisPainelAprovacaoListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "f8jI");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "/wcd");
/* harmony import */ var _servicos_contatos_services_contato_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../servicos/contatos/services/contato.service */ "n8zn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_aprovacao_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/aprovacao.service */ "r6rp");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _motivos_services_motivos_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../motivos/services/motivos.service */ "4vrJ");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");




//angular



//servicos








// rxjs



let LogisticaEntradaMateriaisPainelAprovacaoListaComponent = class LogisticaEntradaMateriaisPainelAprovacaoListaComponent {
    /* Pagination */
    constructor(route, pnotify, localeService, activatedRoute, aprovacoesService, formBuilder, contatosService, motivosService, xlsxService, modalService, confirmModalService, routerService, dateService, detailPanelService) {
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
        this.showDetailPanel = false;
        //LOADINGS
        this.loading = true;
        this.loadingDetails = false;
        this.loadingNavBar = false;
        this.loadingModal = false;
        //VARIAVEIS
        this.totalItens = [];
        this.motivos = [];
        this.contato = [];
        this.viewDetailsSolicitante = 1;
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        // Tipos de Situação das Solicitações (Aprovada/Reprovada/Pendente)
        this.tipos = [
            {
                cod: '1',
                nome: 'Aprovada',
            },
            {
                cod: '2',
                nome: 'Reprovada',
            },
            {
                cod: '3',
                nome: 'Pendente',
            },
        ];
        // Subtitles (Ativo/Inativo/Pendente)
        this.subtitles = [
            {
                id: 1,
                text: 'Aprovada',
                color: 'green',
            },
            {
                id: 2,
                text: 'Reprovada',
                color: 'red',
            },
            {
                id: 3,
                text: 'Pendente',
                color: 'blue',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
        this.localeService.use('pt-br');
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.onDetailPanelEmitter();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getSolicitacoes(this.getParams());
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    openModal(template, status) {
        this.viewDetailsSolicitante = 1;
        this.loadingModal = true;
        const _params = status.MT_LOGI_ENTR_MATE_NOME_SOLI;
        this.getMotivos();
        this.getContatos({ 'NR_MATR': _params });
        this.solicitacaoSelecionada = status;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-lg',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            TIME: [new Date().getTime()],
        });
    }
    getContatos(params) {
        if (!this.loading)
            this.loadingModal = true;
        this.contatosService
            .get(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingModal = false;
            this.loading = false;
        }))
            .subscribe(response => {
            if (response.status === 200) {
                this.contato = response.body["data"][0];
            }
            else {
                this.pnotify.error();
            }
        }, error => {
            this.pnotify.error();
        });
    }
    detailsSolicitante(params) {
        if (this.viewDetailsSolicitante == 1) {
            this.viewDetailsSolicitante = 0;
        }
        else {
            this.viewDetailsSolicitante = 1;
        }
    }
    buildForm() {
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
            TIME: [new Date().getTime()],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Painel de Aprovações',
            },
        ];
    }
    onFilter() {
        this.detailPanelService.hide();
        this.form.get('PAGI').setValue(1);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    onDetails(status) {
        this.loadingDetails = true;
        this.detailPanelService.show();
        this.solicitacaoSelecionada = status;
        if (this.solicitacaoSelecionada.IN_STAT == 3) {
            this.viewHistorico = false;
        }
        else {
            this.viewHistorico = true;
        }
        this.detailPanelService.loadedFinished(false);
        setTimeout(() => {
            this.loadingDetails = false;
        }, 500);
    }
    getMotivos(params) {
        this.loadingModal = true;
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_STAT = '1';
        _params.IN_PAGI = '0';
        _params.DS_LOGI_ENTR_MATE_CATE_MOTI = 'APROVACAO';
        this.motivosService
            .getMotivos(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loading = false;
            this.loadingModal = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.motivos = response.body['data'];
            }
            else {
                this.motivos = [];
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    getSolicitacoes(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.aprovacoesService
            .getSolicitacoes(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.solicitacoes = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.solicitacoes = [];
            }
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    onPageChanged(event) {
        this.detailPanelService.hide();
        this.form.get('PAGI').setValue(event.page);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    classStatusBorder(status) {
        let borderClass;
        if (status.IN_STAT == 1) {
            borderClass = 'border-success';
        }
        else if (status.IN_STAT == 2) {
            borderClass = 'border-danger';
        }
        else if (status.IN_STAT == 3) {
            borderClass = 'border-primary';
        }
        return borderClass;
    }
    requestSuccess(status) {
        const stat = 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_16__["EMPTY"];
            this.loadingNavBar = true;
            status.IN_STAT = stat;
            return this.aprovacoesService.postSolicitacoes(status);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            this.pnotify.error('Erro ao aprovar a solicitação');
        });
    }
    requestFail(status) {
        const stat = 2;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_16__["EMPTY"];
            this.loadingNavBar = true;
            status.IN_STAT = stat;
            return this.aprovacoesService.postSolicitacoes(status);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            this.pnotify.error('Erro ao reprovar a solicitação');
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, 'Confirmar Aprovação', 'Deseja realmente aprovar a solicitação ?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm(null, 'Confirmar Reprovação', 'Deseja realmente reprovar a solicitação?', 'Cancelar', 'Confirmar');
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.solicitacoes.concat(this.totalItens);
        this.xlsxService.exportFile(listagemExport, `Aprovacoes${dataExport}`);
    }
    // Validação de formulário
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
};
LogisticaEntradaMateriaisPainelAprovacaoListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsLocaleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_aprovacao_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntradaMateriaisPainelAprovacoesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _servicos_contatos_services_contato_service__WEBPACK_IMPORTED_MODULE_3__["ContatoService"] },
    { type: _motivos_services_motivos_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisMotivosService"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsModalService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_9__["DetailPanelService"] }
];
LogisticaEntradaMateriaisPainelAprovacaoListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-entrada-materiais-status-fiscais-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsLocaleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_aprovacao_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntradaMateriaisPainelAprovacoesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _servicos_contatos_services_contato_service__WEBPACK_IMPORTED_MODULE_3__["ContatoService"],
        _motivos_services_motivos_service__WEBPACK_IMPORTED_MODULE_12__["LogisticaEntradaMateriaisMotivosService"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_13__["XlsxService"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_17__["BsModalService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_14__["DateService"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_9__["DetailPanelService"]])
], LogisticaEntradaMateriaisPainelAprovacaoListaComponent);



/***/ }),

/***/ "mfeq":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/services/entrada-materiais.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisService", function() { return LogisticaEntradaMateriaisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let LogisticaEntradaMateriaisService = class LogisticaEntradaMateriaisService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api`;
    }
    getAcessos() {
        return this.http.get(`${this.API}/acessos`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getFornecedores(params) {
        return this.http.get(`${this.API}/common/v2/fornecedores`, {
            params: params,
            observe: 'response',
        });
    }
    getDepositos(params) {
        return this.http.get(`${this.API}/common/v2/depositos`, {
            params: params,
            observe: 'response',
        });
    }
    getAllMateriais(params) {
        return this.http.get(`${this.API}/common/v2/materiais`, {
            params: params,
            observe: 'response',
        });
    }
    getEmpresas(params) {
        return this.http.get(`${this.API}/common/v2/empresas`, {
            params: params,
            observe: 'response',
        });
    }
};
LogisticaEntradaMateriaisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticaEntradaMateriaisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticaEntradaMateriaisService);



/***/ }),

/***/ "nLjI":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/lista/lista.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-ocorrencias {\n  height: 410px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n@media print {\n  #ficha-pdf {\n    background-color: white;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 15px;\n    font-size: 14px;\n    line-height: 18px;\n  }\n}\n\nbutton[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvZmljaGEtY29uZm9ybWlkYWRlL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0ksdUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBQ0o7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL2ZpY2hhLWNvbmZvcm1pZGFkZS9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtb2NvcnJlbmNpYXMge1xuICBoZWlnaHQ6IDQxMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbkBtZWRpYSBwcmludCB7XG4gICNmaWNoYS1wZGYge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cbn1cblxuYnV0dG9uW2Rpc2FibGVkXXtcbiAgY3Vyc29yOiBuby1kcm9wO1xufVxuIl19 */");

/***/ }),

/***/ "nTb2":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/parecer/lista/lista.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loadingNavBar\"></loader-spinner-navbar>\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<app-header appTitle=\"PARECER\">\n  <button\n  type=\"button\"\n  (click)=\"onExport()\"\n  [disabled]=\"loadingNavBar || noResult\">\n  Exportar\n</button>\n  <button\n    type=\"button\"\n    (click)=\"onReset()\">\n    Limpar\n  </button>\n  <button\n    type=\"button\"\n    [routerLink]=\"['../novo']\">\n    Adicionar\n  </button>\n  <button\n    type=\"button\"\n    (click)=\"onFilter()\">\n    Filtrar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loading\">\n  <div class=\"row\" #scrollToFilter>\n    <div class=\"col\">\n      <advanced-filter>\n        <form [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-5 pl-0\">\n              <label for=\"parecer\">Parecer</label>\n              <ng-select\n                [searchable]=\"true\"\n                [clearable]=\"true\"\n                [items]=\"parecer\"\n                [virtualScroll]=\"true\"\n                placeholder=\"Selecione...\"\n                [loading]=\"loadingParecer\"\n                labelForId=\"ID_LOGI_ENMA_FHNC_OCPR\"\n                bindLabel=\"NM_PARE\"\n                bindValue=\"ID_LOGI_ENMA_FHNC_OCPR\"\n                id=\"ID_LOGI_ENMA_FHNC_OCPR\"\n                formControlName=\"ID_LOGI_ENMA_FHNC_OCPR\">\n              </ng-select>\n            </div>\n            <div class=\"form-group col-md-2 pl-0\">\n              <label for=\"IN_STAT\">Situação</label>\n              <ng-select\n              [searchable]=\"true\"\n              [clearable]=\"false\"\n              [items]=\"tipos\"\n              [virtualScroll]=\"true\"\n              labelForId=\"tipo\"\n              bindLabel=\"nome\"\n              bindValue=\"cod\"\n              id=\"tipo\"\n              (change)=\"onFilter()\"\n              formControlName=\"IN_STAT\"\n              (keydown.enter)=\"onFilter()\"\n              placeholder=\"Selecione...\"\n            >\n            </ng-select>\n            </div>\n            <div class=\"form-group col-md-1 p-0\">\n              <label>Registros</label>\n              <select \n                class=\"form-control custom-select\"\n                formControlName=\"TT_REGI_PAGI\"\n                (keydown.enter)=\"onFilter()\"\n                (change)=\"setPageRegistros($event.target.value)\"  \n              >\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n                <option value=\"250\">250</option>\n                <option value=\"500\">500</option>\n              </select>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <subtitles\n        [data]=\"subtitles\"\n        [show]=\"!noResult\">\n      </subtitles>\n    </div>\n  </div>\n  <div class=\"d-flex\" [hidden] = \"loading || noResult\">\n    <div class=\"p-0\" [ngClass]=\"{'col': !showDetailPanel, 'col-6': showDetailPanel}\">\n      <div class=\"w-100\">\n        <custom-table  [config]=\"tableConfig\" class=\"text-center\" *ngIf=\"!noResult\">\n          <ng-template #thead let-thead>\n            <tr>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('ID_LOGI_ENMA_FHNC_OCPR')\">\n                <thead-sorter value=\"ID\" [active]=\"ORDE_BY == 'ID_LOGI_ENMA_FHNC_OCPR'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th\n                scope=\"col\"\n                class=\"text-center hover\"\n                (click)=\"setOrderBy('NM_PARE')\">\n                <thead-sorter value=\"Descrição\" [active]=\"ORDE_BY == 'NM_PARE'\" [sort]=\"ORDE_TYPE\"></thead-sorter>\n              </th>\n              <th scope=\"col\" style=\"width:120px\"[hidden]=\"showDetailPanel\"></th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr *ngFor=\"let parecer of pareceres\"  [class.table-active]=\"parecer?.ID_LOGI_ENMA_FHNC_OCPR == parecerSelecionado?.ID_LOGI_ENMA_FHNC_OCPR && showDetailPanel\">\n              <td  [ngClass]=\"parecer.IN_STAT == '1' ? 'border-success' : 'border-danger'\">\n              {{parecer.ID_LOGI_ENMA_FHNC_OCPR }}\n              </td>\n              <td >{{ parecer.NM_PARE | uppercase}}</td>\n              <td class=\"align-middle\" [hidden]=\"showDetailPanel\">\n                <span class=\"mr-3\" [tooltip]=\"parecer.IN_STAT == 1 ? 'Inativar' : 'Ativar'\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"changeType(parecer)\">\n                    <i [ngClass]=\"parecer.IN_STAT == '1' ? 'fas fa-toggle-on' : 'fas fa-toggle-off'\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\n                  <button type=\"button\" class=\"btn-icon-sm\" [routerLink]=\"['./../', parecer.ID_LOGI_ENMA_FHNC_OCPR]\">\n                    <i class=\"fas fa-edit\"></i>\n                  </button>\n                </span>\n                <span class=\"mr-3\"  tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onDetails(parecer)\">\n                    <i class=\"fas fa-search\"></i>                  \n                  </button>\n                </span>\n              </td>\n            </tr>\n          </ng-template>\n        </custom-table><br>\n      </div>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n    <div class=\"col-6 pr-0\" [hidden]=\"!showDetailPanel\">\n      <detail-panel panelTitle=\"Histórico de alteração\">\n        <custom-table>\n          <ng-template #thead let-thead>\n            <tr>\n              <th scope=\"col\" class=\"text-center\">Data</th>\n              <th scope=\"col\">Usuário</th>\n            </tr>\n          </ng-template>\n          <ng-template #tbody let-tbody>\n            <tr>\n              <td class=\"text-center\" *ngIf=\"parecerSelecionado?.DT_INCL != null && parecerSelecionado?.DT_ATUA == null \">{{ parecerSelecionado?.DT_INCL | date: 'dd/MM/yyyy HH:mm' }}</td>\n              <td class=\"text-center\" *ngIf=\"parecerSelecionado?.DT_INCL != null && parecerSelecionado?.DT_ATUA != null \">{{ parecerSelecionado?.DT_ATUA | date: 'dd/MM/yyyy HH:mm' }}</td>\n              <td>{{ parecerSelecionado?.NM_USUA | uppercase }}</td>\n            </tr>\n          </ng-template>\n        </custom-table>\n      </detail-panel>\n    </div>\n  </div>\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\n  </div>\n</app-body>");

/***/ }),

/***/ "pYpU":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/cadastro/cadastro.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button[disabled] {\n  cursor: no-drop;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmFkYS1tYXRlcmlhaXMvbm90YXMtZmlzY2Fpcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL25vdGFzLWZpc2NhaXMvY2FkYXN0cm8vY2FkYXN0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b25bZGlzYWJsZWRde1xuICBjdXJzb3I6IG5vLWRyb3A7XG59XG4iXX0= */");

/***/ }),

/***/ "qwBI":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/motivos/lista/lista.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL21vdGl2b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "r6rp":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/painel-aprovacao/services/aprovacao.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisPainelAprovacoesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisPainelAprovacoesService", function() { return LogisticaEntradaMateriaisPainelAprovacoesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");

//angular

// services


let LogisticaEntradaMateriaisPainelAprovacoesService = class LogisticaEntradaMateriaisPainelAprovacoesService {
    constructor(http) {
        this.http = http;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
    }
    getSolicitacoes(params) {
        return this.http.get(`${this.API}/logistica/entrada-materiais/aprovacoes`, {
            params: params,
            observe: 'response',
        });
    }
    postSolicitacoes(aprovacao) {
        return this.http.post(`${this.API}/logistica/entrada-materiais/aprovacoes`, aprovacao, {
            observe: 'response',
        });
    }
};
LogisticaEntradaMateriaisPainelAprovacoesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LogisticaEntradaMateriaisPainelAprovacoesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LogisticaEntradaMateriaisPainelAprovacoesService);



/***/ }),

/***/ "sCyV":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/lista/duplicadas/duplicadas.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL25vdGFzLWZpc2NhaXMvbGlzdGEvZHVwbGljYWRhcy9kdXBsaWNhZGFzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "sS5L":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/notas-fiscais/lista/duplicadas/duplicadas.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent", function() { return LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_duplicadas_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./duplicadas.component.html */ "+RfE");
/* harmony import */ var _duplicadas_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duplicadas.component.scss */ "sCyV");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../../../shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../services/notas-fiscais.service */ "81bo");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");















let LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent = class LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent {
    /* Pagination */
    constructor(confirmModalService, detailPanelService, modalService, formBuilder, routerService, activatedRoute, notasFiscaisService, pnotify, dateService, route) {
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
            subtitleBorder: true,
        };
        this.showDetailPanel = false;
        this.ORDE_BY = 'DS_LOTE';
        this.ORDE_TYPE = 'desc';
        // Subtitles (Ativo/Inativo)
        this.subtitles = [
            {
                id: 1,
                text: 'Não Justificados',
                color: 'blue',
            },
            {
                id: 2,
                text: 'Justificados',
                color: 'green',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItemsDuplicadas = 10;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.buildForm();
        this.onDetailPanelEmitter();
        this.getLotesDuplicados();
    }
    buildForm() {
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
    onPageChangedDuplicadas(event) {
        this.formLotesDuplicados.get('PAGI').setValue(event.page);
        this.formLotesDuplicados.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    onDetails(duplicada) {
        this.detailPanelService.show();
        this.duplicadaSelecionada = duplicada;
        this.detailPanelService.loadedFinished(false);
        setTimeout(() => {
            this.loadingDuplicadas = false;
        }, 500);
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    getLotesDuplicados(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.IN_DS_OBSE = this.formLotesDuplicados.value['IN_DS_OBSE'];
        _params.PAGI = this.formLotesDuplicados.value['PAGI'];
        _params.ORDE_BY = this.formLotesDuplicados.value['ORDE_BY'];
        _params.ORDE_TYPE = this.formLotesDuplicados.value['ORDE_TYPE'];
        const _obj = this.formLotesDuplicados.value;
        this.loadingDuplicadas = true;
        this.noDuplicadas = this.duplicadas.length === 0 ? true : false;
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.notasFiscaisService
            .getLotesDuplicados(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loadingDuplicadas = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.duplicadas = response.body['data'];
                this.totalItemsDuplicadas = response.body['total'];
                this.noDuplicadas = false;
            }
            else {
                this.pnotify.notice('Não foi encontrado nenhum registro!');
                this.duplicadas = [];
                this.noDuplicadas = true;
            }
        }, (error) => {
            this.noDuplicadas = true;
            this.pnotify.error('Não foi encontrado nenhum lote duplicado');
        });
    }
    changeType() {
        const stat = 1;
        const descricao = this.formLotesDuplicados.get('DS_OBSE').value;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
            this.loadingDuplicadas = true;
            this.duplicadaSelecionada.IN_STAT = 1;
            this.duplicadaSelecionada.DS_OBSE = descricao;
            return this.notasFiscaisService.postNotasDuplicadas(this.duplicadaSelecionada);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => {
            this.loadingDuplicadas = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
            this.hideModal();
            this.getLotesDuplicados();
        }, (error) => {
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente marcar o registro como resolvido?', 'Cancelar', 'Confirmar');
        return;
    }
    openModal(template, duplicada) {
        this.duplicadaSelecionada = duplicada;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-lg',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    // Validação de formulário
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.formLotesDuplicados.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        if (this.formLotesDuplicados.controls[field].validator) {
            let validationResult = this.formLotesDuplicados.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    getParams() {
        let _params = {};
        let _obj = this.formLotesDuplicados.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    setOrderBy(column) {
        if (this.ORDE_BY === column) {
            if (this.ORDE_TYPE == 'desc') {
                this.ORDE_TYPE = 'asc';
            }
            else if (this.ORDE_TYPE == 'asc') {
                this.ORDE_TYPE = 'desc';
            }
        }
        else {
            this.ORDE_BY = column;
            this.ORDE_TYPE = 'asc';
        }
        this.formLotesDuplicados.get('ORDE_TYPE').setValue(this.ORDE_TYPE);
        this.formLotesDuplicados.get('ORDE_BY').setValue(this.ORDE_BY);
        this.getLotesDuplicados();
    }
};
LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent.ctorParameters = () => [
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntradaMateriaisNotasFiscaisService"] },
    { type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_13__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-duplicadas',
        template: _raw_loader_duplicadas_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_duplicadas_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _services_notas_fiscais_service__WEBPACK_IMPORTED_MODULE_10__["LogisticaEntradaMateriaisNotasFiscaisService"],
        _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent);



/***/ }),

/***/ "t/sj":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/sul-fluminense/entrada-materiais/painel-bobinas-qualidade/painel-bobinas-qualidade.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SulFluminensePainelBobinasQualidadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulFluminensePainelBobinasQualidadeComponent", function() { return SulFluminensePainelBobinasQualidadeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_painel_bobinas_qualidade_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./painel-bobinas-qualidade.component.html */ "t8iG");
/* harmony import */ var _painel_bobinas_qualidade_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./painel-bobinas-qualidade.component.scss */ "CUr3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let SulFluminensePainelBobinasQualidadeComponent = class SulFluminensePainelBobinasQualidadeComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.URL_MTCORP = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].URL_MTCORP;
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.matricula = btoa(this.currentUser['info']['matricula']);
        this.idUsuario = btoa(this.currentUser['info']['id']);
        this.url = `${this.URL_MTCORP}/MTCorp/app_/app/mtcorp/modulos/abastecimento/monitores/painelBobinasQualidade.php?m=${this.matricula}&u=${this.idUsuario}`;
    }
    ngOnInit() {
        this.onBreadCumbTree();
    }
    onBreadCumbTree() {
        this.activatedRoute.params.subscribe((params) => {
            this.idSubModulo = params['idSubModulo'];
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/sul-fluminense/home'
                },
                {
                    descricao: 'Entrada de materiais',
                    routerLink: `/sul-fluminense/entrada-materiais/${this.idSubModulo}`
                },
                {
                    descricao: 'Painel de Bobinas em Qualidade'
                }
            ];
        });
    }
};
SulFluminensePainelBobinasQualidadeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SulFluminensePainelBobinasQualidadeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'painel-bobinas-qualidade',
        template: _raw_loader_painel_bobinas_qualidade_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_painel_bobinas_qualidade_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], SulFluminensePainelBobinasQualidadeComponent);



/***/ }),

/***/ "t8iG":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/sul-fluminense/entrada-materiais/painel-bobinas-qualidade/painel-bobinas-qualidade.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loading\"></loader-spinner-navbar>\n\n<div class=\"row\" id=\"application-header\">\n  <div class=\"col-6\">\n    <div id=\"title\">\n      <back-button></back-button>\n      <h1>Painel de Bobinas em Qualidade</h1>\n    </div>\n  </div>\n  \n  <div class=\"col-6 d-flex justify-content-end\">\n    <div id=\"actions\"></div>\n  </div>\n</div>\n\n<div class=\"row pb-0\" id=\"application-body\">\n  <div class=\"col\">\n    <breadcrumb [tree]=\"breadCrumbTree\"></breadcrumb>\n    <custom-iframe [url]=\"url\"></custom-iframe>    \n  </div>\n</div>");

/***/ }),

/***/ "tXxU":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/parecer/cadastro/cadastro.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Parecer\">\n  <button \n    [disabled]=\"form.valid === false || loadingNavBar === true\"\n    (click)=\"postParecer()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Dados do Parecer</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-12 pl-0\">\n            <label for=\"NM_PARE\">Descrição</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NM_PARE\"\n              formControlName=\"NM_PARE\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('NM_PARE') + ' ' + onFieldRequired('NM_PARE')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NM_PARE')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </fieldset>\n      <br>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Observação</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observação:</label>\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n    </fieldset>\n  </form>\n</app-body>");

/***/ }),

/***/ "uJFl":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrada-materiais/tipos-conformidade/cadastro/cadastro.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\n<app-header appTitle=\"Tipos de Não Conformidade\">\n  <button \n    [disabled]=\"form.valid === false || loadingNavBar === true\"\n    (click)=\"postTiposConformidade()\"\n    >\n    Salvar\n  </button>\n</app-header>\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\n  <form [formGroup]=\"form\" autocomplete=\"off\" [hidden] = \"loading\">\n    <fieldset  class=\"col-12\">\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Dados do Tipo de Não Conformidade</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col-md-12 pl-0\">\n            <label for=\"NM_TIPO\">Descrição</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"NM_TIPO\"\n              formControlName=\"NM_TIPO\"\n              placeholder=\"Digite...\"\n              [ngClass]=\"onFieldError('NM_TIPO') + ' ' + onFieldRequired('NM_TIPO')\"\n            />\n            <invalid-form-control [show]=\"onFieldInvalid('NM_TIPO')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\n          </div>\n        </div>\n      </fieldset>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Responsáveis</legend>\n        <div formArrayName=\"responsaveis\">\n          <div class=\"form-row\">\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\n              <div class=\"mtc-title\"></div>\n              <div>\n                <a\n                  class=\"text-secondary\"\n                  (click)=\"onAddResponsavel()\"\n                  href=\"javascript:void(0)\">\n                  <b>Adicionar</b>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-row\"  *ngFor=\"let item of formResponsaveis.controls; let i = index\" [formGroupName]=\"i\">\n            <div class=\"form-group col mb-0\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-3 pl-0\">\n                  <label for=\"NR_MATR_RESP\">Matricula</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"NR_MATR_RESP\"\n                    formControlName=\"NR_MATR_RESP\"\n                    placeholder=\"Digite...\"\n                    [ngClass]=\"onNestedFieldError('responsaveis', i, 'NR_MATR_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NR_MATR_RESP')\"\n                  >\n                </div>\n                <div class=\"form-group col-md-8 pl-0\">\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\n                    <label class=\"my-auto\" for=\"NM_RESP\">Responsável</label>\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\n                      <a\n                        class=\"text-primary\"\n                        href=\"javascript:void(0)\"\n                        (click)=\"openModal(selecionarUsuarios, i)\">\n                        <strong>Selecionar</strong>\n                      </a>\n                    </div>\n                  </div>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"NM_RESP\"\n                    formControlName=\"NM_RESP\"\n                    [ngClass]=\"onNestedFieldError('responsaveis', i, 'NM_RESP') + ' ' + onNestedFieldRequired('responsaveis', i, 'NM_RESP')\">\n                </div>\n                <div class=\"col-1 pt-4 mt-1 d-flex justify-content-center\">\n                  <button\n                    type=\"button\"\n                    class=\"btn-icon\"\n                    (click)=\"onDeleteResponsavel(i)\">\n                    <i class=\"fas fa-trash\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n      <br>\n      <fieldset class=\"border rounded shadow-sm col-8 pt-2 mx-auto\">\n        <legend>Observação</legend>\n        <div class=\"form-row justify-content-center\">\n          <div class=\"form-group col\">\n            <label for=\"DS_OBSE\" >Observação:</label>\n            <textarea class=\"form-control\" id=\"DS_OBSE\" formControlName=\"DS_OBSE\" rows=\"3\"></textarea>\n          </div>\n        </div>\n        <br>\n      </fieldset>\n    </fieldset>\n  </form>\n  <ng-template #selecionarUsuarios>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Pesquisa de Responsáveis</h4>\n      <div class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingUsuarios\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <advanced-filter>\n        <form [formGroup]=\"formUsuarios\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-3\">\n              <label for=\"cdItem\">BUSCAR POR</label>\n              <select\n                class=\"form-control custom-select\"\n                formControlName=\"buscarPor\"\n              >\n                <option value=\"matricula\">Matricula</option>\n                <option value=\"nome\" selected> Nome Responsável</option>\n              </select>\n            </div>\n\n            <div class=\"form-group col-9\">\n              <label>TERMO DE PESQUISA</label>\n              <div class=\"input-group\">\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"pesquisa\"\n                  >\n                  <div class=\"input-group-append\">\n                    <span \n                      [tooltip]=\"formUsuarios.valid == false ? 'Digite um termo de pesquisa':''\"\n                      container=\"body\"\n                      placement =\"left\"\n                    >\n                      <button\n                      style=\"height: 25px;\"\n                        [disabled]=\"formUsuarios.valid == false\"\n                        class=\"input-group-text hover\"\n                        (click)=\"getUsuarios()\"\n                        >\n                        <i class=\"fas fa-search\"></i>\n                      </button>\n                    </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </advanced-filter>\n      <custom-table *ngIf=\"!loadingUsuarios && !noUsuarios\" class=\"text-center\">\n        <ng-template #thead let-thead>\n          <tr>\n            <th>Matricula</th>\n            <th>Nome Responsável</th>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template #tbody let-tbody>\n          <tr *ngFor=\"let usuario of usuarios | slice : begin : end; let i = index\">\n            <td>{{ usuario.matricula }}</td>\n            <td>{{ usuario.nome }}</td>\n            <td>\n              <button\n                class=\"btn-icon-sm\"\n                tooltip=\"Salvar Responsável\"\n                container=\"body\"\n                (click)=\"setUsuarios(usuario);modalRef.hide()\"\n              >\n                <i class=\"far fa-save\"></i>\n              </button>\n            </td>\n          </tr>\n        </ng-template>\n      </custom-table>\n      <div *ngIf=\"totalItems > itemsPerPage\">\n        Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\n        <pagination\n          [maxSize]=\"10\"\n          [totalItems]=\"totalItems\"\n          (pageChanged)=\"onPageChanged($event)\"\n          [(itemsPerPage)]=\"itemsPerPage\"\n          [boundaryLinks]=\"true\"\n          [(ngModel)]=\"currentPage\"\n          previousText=\"&lsaquo;\"\n          nextText=\"&rsaquo;\"\n          firstText=\"&laquo;\"\n          lastText=\"&raquo;\">\n        </pagination>\n      </div>\n    </div>\n  </ng-template>\n</app-body>");

/***/ }),

/***/ "um5m":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/ficha-conformidade/documentos/documentos.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJhZGEtbWF0ZXJpYWlzL2ZpY2hhLWNvbmZvcm1pZGFkZS9kb2N1bWVudG9zL2RvY3VtZW50b3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yVY0":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/tipos-conformidade/lista/lista.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisTiposConformidadeListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisTiposConformidadeListaComponent", function() { return LogisticaEntradaMateriaisTiposConformidadeListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "CM2z");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "hG8s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../../shared/templates/detail-panel/detal-panel.service */ "gIxL");
/* harmony import */ var _services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/tipos-conformidade.service */ "AVAL");
/* harmony import */ var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/router.service */ "w8rm");
/* harmony import */ var src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/xlsx/xlsx.service */ "eOmW");
/* harmony import */ var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/date.service */ "Rk3r");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");



//angular



//servicos







// rxjs


let LogisticaEntradaMateriaisTiposConformidadeListaComponent = class LogisticaEntradaMateriaisTiposConformidadeListaComponent {
    /* Pagination */
    constructor(route, pnotify, activatedRoute, tiposConformidadeService, formBuilder, xlsxService, confirmModalService, routerService, dateService, detailPanelService) {
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
        this.ORDE_TYPE = 'desc';
        //LOADINGS
        this.loading = true;
        this.loadingNavBar = false;
        this.loadingResponsaveis = false;
        //VARIAVEIS
        this.responsaveis = [];
        this.totalItens = [];
        // CUSTOM TABLE
        this.tableConfig = {
            subtitleBorder: true,
        };
        // Tipos de Situação dos TiposConformidade (Ativo/Inativo)
        this.tipos = [
            {
                cod: '1',
                nome: 'Ativos',
            },
            {
                cod: '0',
                nome: 'Inativos',
            },
        ];
        // Tipos de Categorias
        this.categorias = [
            {
                cod: '1',
                nome: 'Qualidade',
            },
            {
                cod: '2',
                nome: 'Quantidade',
            },
        ];
        // Subtitles (Ativo/Inativo)
        this.subtitles = [
            {
                id: 1,
                text: 'Ativo',
                color: 'green',
            },
            {
                id: 2,
                text: 'Inativo',
                color: 'red',
            },
        ];
        /* Pagination */
        this.itemsPerPage = 100;
        this.totalItems = 10;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.buildForm();
        this.setBreadCrumb();
        this.onActivatedRoute();
        this.onDetailPanelEmitter();
    }
    ngOnDestroy() {
        this.$activatedRouteSubscription.unsubscribe();
    }
    onActivatedRoute() {
        this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((response) => {
            const _response = this.routerService.getBase64UrlParams(response);
            this.form.patchValue(_response);
            if (_response.hasOwnProperty('TT_REGI_PAGI'))
                this.itemsPerPage = _response.TT_REGI_PAGI;
            this.getTiposConformidade(this.getParams());
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    onReset() {
        this.form.reset();
        this.form.patchValue({
            PAGI: 1,
            TT_REGI_PAGI: 100,
            TIME: [new Date().getTime()],
        });
    }
    buildForm() {
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
            ORDE_TYPE: [this.ORDE_TYPE],
        });
    }
    setPageRegistros(itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        this.onFilter();
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: `/logistica/home`,
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Tipos de Não Conformidade',
            },
        ];
    }
    onFilter() {
        this.detailPanelService.hide();
        this.form.get('PAGI').setValue(1);
        this.form.get('TIME').setValue(new Date().getTime());
        this.form.get('ORDE_TYPE').setValue(this.ORDE_TYPE);
        this.form.get('ORDE_BY').setValue(this.ORDE_BY);
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    onDetails(tipo) {
        this.loadingNavBar = true;
        this.tipoSelecionado = tipo;
        this.getResponsaveis({ ID_LOGI_ENMA_FHNC_TIPO: tipo.ID_LOGI_ENMA_FHNC_TIPO, IN_STAT: '1' });
        this.detailPanelService.show();
        this.detailPanelService.loadedFinished(false);
        setTimeout(() => {
            this.loadingNavBar = false;
        }, 500);
    }
    getTiposConformidade(params) {
        if (!this.loading)
            this.loadingNavBar = true;
        this.tiposConformidadeService
            .getTiposConformidade(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.tiposConformidade = response.body['data'];
                this.totalItems = response.body['total'];
                this.noResult = false;
            }
            else {
                this.noResult = true;
                this.tiposConformidade = [];
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    getResponsaveis(params) {
        this.loadingResponsaveis = true;
        this.tiposConformidadeService
            .getResponsaveis(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingResponsaveis = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                this.noResponsaveis = true;
                return;
            }
            this.responsaveis = response['body']['data'];
            this.noResponsaveis = false;
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum responsável');
            this.noResponsaveis = true;
        });
    }
    onPageChanged(event) {
        this.detailPanelService.hide();
        this.form.get('PAGI').setValue(event.page);
        this.form.get('TIME').setValue(new Date().getTime());
        this.route.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: this.routerService.setBase64UrlParams(this.getParams()),
        });
    }
    getParams() {
        let _params = {};
        let _obj = this.form.value;
        for (let prop in _obj) {
            if (_obj[prop]) {
                if (_obj[prop] instanceof Date)
                    _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);
                else
                    _params[prop] = _obj[prop];
            }
        }
        return _params;
    }
    classStatusBorder(status) {
        let borderClass;
        if (status.IN_STAT == 1) {
            borderClass = 'border-success';
        }
        else if (status.IN_STAT == 0) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    changeType(status) {
        const stat = status.IN_STAT == 1 ? 0 : 1;
        this.confirmChange(stat)
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])((result) => {
            if (!result)
                return rxjs__WEBPACK_IMPORTED_MODULE_14__["EMPTY"];
            this.loadingNavBar = true;
            status.IN_STAT = stat;
            return this.tiposConformidadeService.postTiposConformidade(status);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((success) => {
            this.pnotify.success();
        }, (error) => {
            status.IN_STAT = status.IN_STAT == 1 ? 0 : 1;
            this.pnotify.error();
        });
    }
    confirmChange(stat) {
        if (stat == 1)
            return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    onExport() {
        let data = new Date().toLocaleDateString().split('/'), dataExport = `${data[0]}${data[1]}${data[2]}`;
        let listagemExport = [];
        listagemExport = this.tiposConformidade.concat(this.totalItens);
        this.xlsxService.exportFile(listagemExport, `TiposConformidade${dataExport}`);
    }
    setOrderBy(column) {
        if (this.ORDE_BY === column) {
            if (this.ORDE_TYPE == 'desc') {
                this.ORDE_TYPE = 'asc';
            }
            else if (this.ORDE_TYPE == 'asc') {
                this.ORDE_TYPE = 'desc';
            }
        }
        else {
            this.ORDE_BY = column;
            this.ORDE_TYPE = 'asc';
        }
        this.onFilter();
    }
};
LogisticaEntradaMateriaisTiposConformidadeListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisTiposConformidadeService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"] },
    { type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"] },
    { type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"] },
    { type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"] },
    { type: _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"] }
];
LogisticaEntradaMateriaisTiposConformidadeListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'logistica-entrada-materiais-tipos-conformidade-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_9__["LogisticaEntradaMateriaisTiposConformidadeService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_shared_modules_xlsx_xlsx_service__WEBPACK_IMPORTED_MODULE_11__["XlsxService"],
        _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalService"],
        src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"],
        src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"],
        _shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_8__["DetailPanelService"]])
], LogisticaEntradaMateriaisTiposConformidadeListaComponent);



/***/ }),

/***/ "yzlb":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/tipos-conformidade/cadastro/cadastro.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisTiposConformidadeCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisTiposConformidadeCadastroComponent", function() { return LogisticaEntradaMateriaisTiposConformidadeCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cadastro.component.html */ "uJFl");
/* harmony import */ var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cadastro.component.scss */ "8Ov2");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-brasil */ "zFJr");
/* harmony import */ var js_brasil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_brasil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/tipos-conformidade.service */ "AVAL");




//Services



//Bootstrap


//Angular



//rxjs



let LogisticaEntradaMateriaisTiposConformidadeCadastroComponent = class LogisticaEntradaMateriaisTiposConformidadeCadastroComponent {
    constructor(formBuilder, pnotify, router, modalService, activatedRoute, localeService, tiposConformidadeService, titleService, atividadesService) {
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
        this.noUsuarios = true;
        //loading
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
        this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' }, { adaptivePosition: true }, { showWeekNumbers: false });
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormBuilder();
        this.onActivatedRoute();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    onActivatedRoute() {
        const _params = this.activatedRoute.snapshot.params;
        if (_params.hasOwnProperty('id')) {
            this.getTiposConformidade({ ID_LOGI_ENMA_FHNC_TIPO: _params['id'] });
            this.getResponsaveis({ ID_LOGI_ENMA_FHNC_TIPO: _params['id'], IN_STAT: '1' });
        }
        else {
            this.onAddResponsavel();
        }
    }
    getTiposConformidade(params) {
        this.loading = true;
        const _params = params !== null && params !== void 0 ? params : {};
        this.tiposConformidadeService
            .getTiposConformidade(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status !== 200) {
                this.noResult = true;
                this.tiposConformidade = [];
                return;
            }
            const _tipoConformidade = response.body['data'][0];
            this.form.patchValue(_tipoConformidade);
            this.noResult = false;
        }, (error) => {
            this.pnotify.error();
            this.noResult = true;
        });
    }
    getResponsaveis(params) {
        this.loadingNavBar = true;
        this.tiposConformidadeService
            .getResponsaveis(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response.status !== 200) {
                return;
            }
            const responsaveis = response['body']['data'];
            const promise = () => responsaveis.forEach(() => this.onAddResponsavel());
            yield Promise.resolve(promise());
            this.form.get('responsaveis').patchValue(responsaveis);
        }), (error) => {
            this.pnotify.error('Não foi encontrado nenhum responsável');
        });
    }
    setBreadCrumb() {
        const id = this.activatedRoute.snapshot.params.idSubModulo;
        this.appTitle = 'Cadastro';
        this.titleService.setTitle(this.appTitle);
        this.breadCrumbTree = [
            {
                descricao: 'Home',
                routerLink: '/logistica/home',
            },
            {
                descricao: 'Entrada de Materiais',
                routerLink: `/logistica/entrada-materiais/${id}`,
            },
            {
                descricao: 'Tipos de Não Conformidade',
                routerLink: `../`,
            },
            {
                descricao: this.appTitle,
            },
        ];
    }
    //formulario
    setFormBuilder() {
        this.form = this.formBuilder.group({
            ID_LOGI_ENMA_FHNC_TIPO: [null],
            NM_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            IN_STAT: [null],
            DS_OBSE: [null],
            NR_MATR: [null],
            NM_USUA: [null],
            DT_INCL: [null],
            responsaveis: this.formBuilder.array([]),
        });
        this.formUsuarios = this.formBuilder.group({
            buscarPor: ['nome'],
            pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required],
            matricula: [null],
            nome: [null],
        });
    }
    // Validação de formulário
    onFieldError(field) {
        if (this.onFieldInvalid(field)) {
            return 'is-invalid';
        }
        return '';
    }
    onFieldInvalid(field) {
        field = this.form.get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onFieldRequired(field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        if (this.form.controls[field].validator) {
            let validationResult = this.form.controls[field].validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    getUsuarios(params) {
        const _params = params !== null && params !== void 0 ? params : {};
        _params.situacao = '1';
        _params.qtItensPagina = 100;
        const _obj = this.formUsuarios.value;
        this.loadingUsuarios = true;
        if (_obj['pesquisa'])
            _params[_obj['buscarPor']] = _obj['pesquisa'];
        this.tiposConformidadeService
            .getUsuarios(_params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingUsuarios = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.usuarios = response.body['usuarios'];
                this.totalItems = response.body['usuarios'].length;
                this.noUsuarios = false;
            }
            else {
                this.pnotify.notice('Nenhum registro encontrado!');
                this.usuarios = [];
                this.noUsuarios = true;
            }
        }, (error) => {
            this.pnotify.error();
            this.usuarios = [];
        });
    }
    setUsuarios(usuario) {
        const _usuario = Object.assign(Object.assign({}, usuario), { 'IN_MATE': false });
        const fg = this.form.get('responsaveis');
        fg.controls[this.index].get('NR_MATR_RESP').patchValue(_usuario.matricula);
        fg.controls[this.index].get('ID_RESP').patchValue(_usuario.id);
        fg.controls[this.index].get('NM_RESP').patchValue(_usuario.nome);
    }
    postResponsaveis(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let request = [];
            const responsaveis = this.formResponsaveis.getRawValue();
            if (!responsaveis) {
                return;
            }
            const promise = () => {
                responsaveis.forEach(responsavel => {
                    const params = Object.assign(Object.assign({}, responsavel), { 'ID_LOGI_ENMA_FHNC_TIPO': id, IN_STAT: '1' });
                    request.push(this.tiposConformidadeService
                        .postResponsaveis(params));
                });
            };
            yield Promise.resolve(promise());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(request)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
                this.loading = false;
                this.loadingNavBar = false;
            }))
                .subscribe((responses) => {
                this.pnotify.success('Responsáveis cadastrados com sucesso');
            }, (error) => {
                try {
                    this.pnotify.error(error.error.message);
                }
                catch (error) {
                    this.pnotify.error();
                }
            });
        });
    }
    onDeleteResponsavel(index) {
        if (this.formResponsaveis.length === 1) {
            this.pnotify.notice('Informe ao menos um responsável.');
            return;
        }
        const id = this.form.get('ID_LOGI_ENMA_FHNC_TIPO');
        let responsaveis = this.formResponsaveis.at(index).value;
        responsaveis = Object.assign(Object.assign({}, responsaveis), { 'IN_STAT': '0' });
        if (!responsaveis['ID_RESP']) {
            this.formResponsaveis.removeAt(index);
            return;
        }
        this.loadingNavBar = true;
        this.tiposConformidadeService
            .postResponsaveis(responsaveis)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                this.formResponsaveis.removeAt(index);
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            this.pnotify.error();
        });
    }
    postTiposConformidade() {
        const fg = this.form.get('responsaveis');
        if (fg.controls[0].get('ID_RESP').value == null) {
            this.pnotify.notice('Informe ao menos um responsável.');
            return;
        }
        this.loadingNavBar = true;
        let params = JSON.parse(JSON.stringify(this.form.value));
        delete params['responsaveis'];
        this.tiposConformidadeService
            .postTiposConformidade(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(() => {
            this.loading = false;
            this.loadingNavBar = false;
        }))
            .subscribe((response) => {
            if (response.status === 200) {
                const id = response.body['data'];
                this.form.get('ID_LOGI_ENMA_FHNC_TIPO').setValue(id);
                if (this.form.get('responsaveis').value[0]['ID_RESP']) {
                    this.postResponsaveis(id);
                }
                this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute,
                });
                this.pnotify.success();
            }
            else {
                this.pnotify.error();
            }
        }, (error) => {
            try {
                this.pnotify.error(error.error.message);
            }
            catch (error) {
                this.pnotify.error();
            }
        });
    }
    get formResponsaveis() {
        return this.form.get('responsaveis');
    }
    onAddResponsavel() {
        this.formResponsaveis.push(this.formBuilder.group({
            ID_LOGI_ENMA_FHNC_TIPO: [null],
            ID_RESP: [null],
            NR_MATR_RESP: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
            NM_RESP: [{ value: null, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required]],
        }));
    }
    openModal(template, index) {
        this.index = index;
        this.modalRef = this.modalService.show(template, {
            animated: false,
            class: 'modal-xl',
        });
    }
    hideModal() {
        this.modalRef.hide();
    }
    onNestedFieldError(formGroup, index, field) {
        if (this.onNestedFieldInvalid(formGroup, index, field)) {
            return 'is-invalid';
        }
        return '';
    }
    onNestedFieldInvalid(formGroup, index, field) {
        let nestedForm = this.form.controls[formGroup];
        field = nestedForm.controls[index].get(field);
        return field.status == 'INVALID' && field.touched;
    }
    onNestedFieldRequired(formGroup, index, field) {
        let required = false;
        let formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        let nestedForm = this.form.controls[formGroup];
        if (nestedForm.controls[index].get(field).validator) {
            let validationResult = nestedForm.controls[index]
                .get(field)
                .validator(formControl);
            required =
                validationResult !== null && validationResult.required === true;
        }
        if (required) {
            return 'is-required';
        }
    }
    onPageChanged(event) {
        this.begin = (event.page - 1) * event.itemsPerPage;
        this.end = event.page * event.itemsPerPage;
    }
};
LogisticaEntradaMateriaisTiposConformidadeCadastroComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"] },
    { type: _services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntradaMateriaisTiposConformidadeService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"] }
];
LogisticaEntradaMateriaisTiposConformidadeCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'logistica-entrada-materiais-notas-fiscais-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsLocaleService"],
        _services_tipos_conformidade_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntradaMateriaisTiposConformidadeService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_4__["TitleService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_5__["AtividadesService"]])
], LogisticaEntradaMateriaisTiposConformidadeCadastroComponent);



/***/ }),

/***/ "zSPA":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/logistica/entrada-materiais/entrada-materiais.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LogisticaEntradaMateriaisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticaEntradaMateriaisModule", function() { return LogisticaEntradaMateriaisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-counto */ "RNH4");
/* harmony import */ var angular2_counto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_counto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-currency-mask */ "D5nU");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "Jc0W");
/* harmony import */ var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/not-found/not-found.module */ "sCnT");
/* harmony import */ var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/module-wrapper/module-wrapper.module */ "RoXV");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _entrada_materiais_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./entrada-materiais-routing.module */ "7PM9");
/* harmony import */ var _notas_fiscais_lista_lista_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./notas-fiscais/lista/lista.component */ "/qkg");
/* harmony import */ var _notas_fiscais_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notas-fiscais/cadastro/cadastro.component */ "SckD");
/* harmony import */ var _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./entrada-materiais.component */ "I+6W");
/* harmony import */ var _status_recebimento_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./status-recebimento/cadastro/cadastro.component */ "l/7K");
/* harmony import */ var _status_recebimento_lista_lista_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./status-recebimento/lista/lista.component */ "jsif");
/* harmony import */ var _painel_aprovacao_lista_lista_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./painel-aprovacao/lista/lista.component */ "l/Jf");
/* harmony import */ var _motivos_lista_lista_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./motivos/lista/lista.component */ "OGJj");
/* harmony import */ var _motivos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./motivos/cadastro/cadastro.component */ "DU17");
/* harmony import */ var _tipos_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tipos-conformidade/lista/lista.component */ "yVY0");
/* harmony import */ var _tipos_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tipos-conformidade/cadastro/cadastro.component */ "yzlb");
/* harmony import */ var _ficha_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ficha-conformidade/lista/lista.component */ "XkGG");
/* harmony import */ var _ficha_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ficha-conformidade/cadastro/cadastro.component */ "A697");
/* harmony import */ var _ficha_conformidade_documentos_documentos_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ficha-conformidade/documentos/documentos.component */ "+wKV");
/* harmony import */ var _ficha_conformidade_ocorrencias_ocorrencias_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ficha-conformidade/ocorrencias/ocorrencias.component */ "H1OO");
/* harmony import */ var _parecer_lista_lista_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./parecer/lista/lista.component */ "WQIu");
/* harmony import */ var _parecer_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./parecer/cadastro/cadastro.component */ "5cZa");
/* harmony import */ var _notas_fiscais_lista_duplicadas_duplicadas_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./notas-fiscais/lista/duplicadas/duplicadas.component */ "sS5L");



//angular



//Modules











//Components

















let LogisticaEntradaMateriaisModule = class LogisticaEntradaMateriaisModule {
};
LogisticaEntradaMateriaisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"])({
        declarations: [
            _entrada_materiais_component__WEBPACK_IMPORTED_MODULE_19__["LogisticaEntradaMateriaisComponent"],
            _notas_fiscais_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_18__["LogisticaEntradaMateriaisNotasFiscaisCadastroComponent"],
            _notas_fiscais_lista_lista_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaEntradaMateriaisNotasFiscaisListaComponent"],
            _status_recebimento_lista_lista_component__WEBPACK_IMPORTED_MODULE_21__["LogisticaEntradaMateriaisStatusRecebimentoListaComponent"],
            _status_recebimento_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_20__["LogisticaEntradaMateriaisStatusRecebimentoCadastroComponent"],
            _painel_aprovacao_lista_lista_component__WEBPACK_IMPORTED_MODULE_22__["LogisticaEntradaMateriaisPainelAprovacaoListaComponent"],
            _motivos_lista_lista_component__WEBPACK_IMPORTED_MODULE_23__["LogisticaEntradaMateriaisMotivosListaComponent"],
            _motivos_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_24__["LogisticaEntradaMateriaisMotivosCadastroComponent"],
            _tipos_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_25__["LogisticaEntradaMateriaisTiposConformidadeListaComponent"],
            _tipos_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_26__["LogisticaEntradaMateriaisTiposConformidadeCadastroComponent"],
            _ficha_conformidade_lista_lista_component__WEBPACK_IMPORTED_MODULE_27__["LogisticaEntradaMateriaisFichaConformidadeListaComponent"],
            _ficha_conformidade_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_28__["LogisticaEntradaMateriaisFichasConformidadeCadastroComponent"],
            _ficha_conformidade_documentos_documentos_component__WEBPACK_IMPORTED_MODULE_29__["LogisticaEntradaMateriaisFichasConformidadeDocumentosComponent"],
            _ficha_conformidade_ocorrencias_ocorrencias_component__WEBPACK_IMPORTED_MODULE_30__["LogisticaEntradaMateriaisFichasConformidadeOcorrenciasComponent"],
            _parecer_lista_lista_component__WEBPACK_IMPORTED_MODULE_31__["LogisticaEntradaMateriaisParecerListaComponent"],
            _parecer_cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_32__["LogisticaEntradaMateriaisParecerCadastroComponent"],
            _notas_fiscais_lista_duplicadas_duplicadas_component__WEBPACK_IMPORTED_MODULE_33__["LogisticaEntradaMateriaisNotasFiscaisDuplicadasComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            angular2_counto__WEBPACK_IMPORTED_MODULE_1__["CountoModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TabsModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TimepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__["CurrencyMaskModule"],
            src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_11__["ModuleWrapperModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["TemplatesModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_7__["NgBrazil"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"],
            _entrada_materiais_routing_module__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntradaMateriaisRoutingModule"],
        ],
    })
], LogisticaEntradaMateriaisModule);



/***/ })

}]);
//# sourceMappingURL=entrada-materiais-entrada-materiais-module-es2015.js.map