(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materiais-ficha-cadastral-ficha-cadastral-module"],{

/***/ "+MGG":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/formulario/formulario.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onCancel()\"\r\n    [disabled]=\"submittingForm\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onSubmit()\"\r\n    [disabled]=\"!form.valid || submittingForm\">\r\n    Salvar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-4\">\r\n      \r\n      <div [hidden]=\"form.getRawValue().codMaterial != null\">\r\n        <comercial-cadastros-materiais-templates-material-principal\r\n          [linhas]=\"linhas\"\r\n          [classes]=\"classes\"\r\n          [limparMaterialSelecionado]=\"limparMaterialPrincipal\"\r\n          (loaderNavbar)=\"onLoaderNavbar($event)\"\r\n          (materialPrincipal)=\"materialPrincipal($event)\">\r\n        </comercial-cadastros-materiais-templates-material-principal>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <hr>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <form [formGroup]=\"form\">\r\n        <div [hidden]=\"form.getRawValue().codMaterial === null\">\r\n          <div class=\"row mb-3\">\r\n            <div class=\"col mt-auto\">\r\n              <div class=\"mtc-title mb-0\">Dados do Material</div>\r\n            </div>\r\n            <div class=\"col\" *ngIf=\"form.getRawValue().codMaterial != null && form.getRawValue().codFichaCadastral == null\">\r\n              <div class=\"d-flex justify-content-end\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-sm btn-outline-danger\"\r\n                  (click)=\"onLimparMaterialPrincipal()\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                  <span>Limpar</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codMaterial\">Cód. Mat</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"nomeGrupo\"\r\n                formControlName=\"codMaterial\"\r\n                (input)=\"onInput()\"\r\n                disabled\r\n                (click)=\"buscaMate()\"\r\n                (blur)=\"buscaMate()\"\r\n                autocomplete=\"new-password\"\r\n                [ngClass]=\"onFieldError('codMaterial') + ' ' + onFieldRequired(form.controls.codMaterial)\">\r\n              <invalid-form-control [show]=\"onFieldInvalid('codMaterial')\" message=\"Código é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-8\">\r\n              <label for=\"nomeMaterial\">Material</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"nomeGrupo\"\r\n                formControlName=\"nomeMaterial\"\r\n                (input)=\"onInput()\"\r\n                disabled\r\n                autocomplete=\"new-password\"\r\n                [ngClass]=\"onFieldError('nomeMaterial') + ' ' + onFieldRequired(form.controls.nomeMaterial)\">\r\n              <invalid-form-control [show]=\"onFieldInvalid('nomeMaterial')\" message=\"Material é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codSituacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codSituacao\"\r\n                formControlName=\"codSituacao\"\r\n                [ngClass]=\"onFieldError('codSituacao') + ' ' + onFieldRequired(form.controls.codSituacao)\">\r\n                <option value=\"1\">Ativo</option>\r\n                <option value=\"0\">Inativo</option>\r\n              </select>\r\n              <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Situação é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>        \r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"descMaterial\">Descrição</label>\r\n              <textarea \r\n                class=\"form-control\" \r\n                rows=\"10\" \r\n                id=\"descMaterial\"\r\n                formControlName=\"descMaterial\"\r\n                (input)=\"onInput()\"\r\n                autocomplete=\"new-password\"\r\n                [ngClass]=\"onFieldError('descMaterial') + ' ' + onFieldRequired(form.controls.descMaterial)\"></textarea>\r\n              <invalid-form-control [show]=\"onFieldInvalid('codSituacao')\" message=\"Descrição é obrigatório.\"></invalid-form-control>\r\n            </div>\r\n          </div>\r\n          <div formArrayName=\"anexos\">\r\n            <div class=\"row\">\r\n              <div class=\"col d-flex align-items-start\">\r\n                <div class=\"mtc-title mb-0\">Anexos</div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <label for=\"novoAnexo\" class=\"d-flex justify-content-end align-items-center\" style=\"cursor: pointer;\">\r\n                  <p class=\"btn btn-sm btn-outline-primary m-0\">\r\n                    <i class=\"fas fa-plus\"></i>\r\n                    <span>Novo</span>\r\n                  </p>\r\n                </label>\r\n                <input\r\n                  id=\"novoAnexo\"\r\n                  type=\"file\"\r\n                  (change)=\"appendFile($event.target.files)\"\r\n                  class=\"d-none\"\r\n                  >\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length > 0\">\r\n              <div class=\"col\">\r\n                <custom-table [config]=\"tableConfigAnexos\">\r\n                  <ng-template #tbody let-tbody>\r\n                    <tr *ngFor=\"let anexo of anexos.controls; let i = index\" [formGroupName]=\"i\">\r\n                      <td style=\"width: 90%\">\r\n                        {{ form.value.anexos[i].codAnexo }} - {{ form.value.anexos[i].nomeAnexo | uppercase }}\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 5%\">\r\n                        <a\r\n                          [href]=\"form.value.anexos[i].linkAnexo\"\r\n                          *ngIf=\"form.value.anexos[i].linkAnexo != null\"\r\n                          target=\"_blank\"\r\n                          class=\"btn-icon-sm mx-2 text-black\"\r\n                          tooltip=\"visualizar\">\r\n                          <i class=\"far fa-eye\"></i>\r\n                        </a>\r\n                      </td>\r\n                      <td class=\"text-center\" style=\"width: 5%\">\r\n                        <btn-icon\r\n                          icon=\"fas fa-trash\"\r\n                          size=\"small\"\r\n                          tooltip=\"Excluir\"\r\n                          (click)=\"onDeleteAnexo(form.value.anexos[i].codAnexo, i)\">\r\n                        </btn-icon>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-template>\r\n                </custom-table>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"showAnexos && form.value.anexos.length === 0\">\r\n              <div class=\"col\">\r\n                <message\r\n                  icon=\"fas fa-exchange-alt\"\r\n                  text=\"Nenhum documento encontrado\">\r\n                </message>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</app-body>\r\n\r\n");

/***/ }),

/***/ "/Sd9":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/lista/lista.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvZmljaGEtY2FkYXN0cmFsL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "3fl7":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/formulario/formulario.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisFichaCadastralFormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisFichaCadastralFormularioComponent", function() { return ComercialCadastrosMateriaisFichaCadastralFormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./formulario.component.html */ "+MGG");
/* harmony import */ var _formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario.component.scss */ "yaTe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ficha-cadastral.service */ "RKj2");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");







//rxjs

// Services






let ComercialCadastrosMateriaisFichaCadastralFormularioComponent = class ComercialCadastrosMateriaisFichaCadastralFormularioComponent {
    constructor(activatedRoute, router, location, formBuilder, fichaCadastralService, confirmModalService, pnotifyService, atividadesService, titleService, comercialService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.fichaCadastralService = fichaCadastralService;
        this.confirmModalService = confirmModalService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.comercialService = comercialService;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
        this.tableConfigAnexos = {
            fixedHeader: false,
            bodyHeight: 230,
            hover: false,
        };
        this.formChanged = false;
        this.formData = [];
        this.showAnexos = false;
        this.linhas = [];
        this.classes = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.getFilterValues();
        this.setFormBuilder();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            if (params.id) {
                this.appTitle = 'Editar Ficha Cadastral';
            }
            else {
                this.appTitle = 'Nova Ficha Cadastral';
            }
            this.titleService.setTitle(this.appTitle);
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/comercial/cadastros/${params.idSubModulo}`,
                },
                {
                    descricao: 'Ficha Cadastral',
                    routerLink: `/comercial/cadastros/${params.idSubModulo}/materiais/ficha-cadastral/lista`,
                },
                {
                    descricao: this.appTitle,
                },
            ];
        });
    }
    getFilterValues() {
        this.fichaCadastralService
            .getFilterValues()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderFullScreen = false;
        }))
            .subscribe((response) => {
            if (response[0].responseCode === 200) {
                this.linhas = response[0].result;
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
            if (response[1].responseCode === 200) {
                this.classes = response[1].result;
            }
            else {
                this.pnotifyService.error();
                this.location.back();
            }
        });
    }
    setFormBuilder() {
        if (this.activatedRoute.snapshot.data.detalhes.success === true) {
            const detalhes = this.activatedRoute.snapshot.data
                .detalhes.data;
            this.form = this.formBuilder.group({
                codFichaCadastral: [detalhes.codFichaCadastral],
                codMaterial: [detalhes.codMaterial, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                nomeMaterial: [detalhes.nomeMaterial],
                descMaterial: [detalhes.descMaterial, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                codSituacao: [detalhes.codSituacao, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                anexos: this.formBuilder.array([]),
            });
            if (detalhes.codMaterial != null && detalhes.codFichaCadastral != null) {
                this.getAnexos(detalhes.codMaterial);
            }
        }
        else {
            this.pnotifyService.error();
            this.location.back();
        }
        this.loaderFullScreen = false;
    }
    getAnexos(codMaterial) {
        this.loaderNavbar = true;
        this.showAnexos = false;
        this.fichaCadastralService
            .getAnexos(codMaterial)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((response) => {
            if (response.hasOwnProperty('success') && response.success === true) {
                this.setAnexos(response.data);
                this.showAnexos = true;
            }
            else if (response.hasOwnProperty('success') &&
                response.success === false &&
                response.hasOwnProperty('mensagem')) {
                this.pnotifyService.error(response.mensagem);
            }
            else {
                this.pnotifyService.error();
            }
        }, (error) => {
            if (error['error'].hasOwnProperty('mensagem')) {
                this.pnotifyService.error(error.error.mensagem);
            }
            else {
                this.pnotifyService.error();
            }
        });
    }
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
    setAnexos(anexos) {
        if (anexos.length > 0) {
            for (let i = 0; i < anexos.length; i++) {
                this.onAddAnexos(anexos[i], true);
            }
        }
    }
    get anexos() {
        return this.form.get('anexos');
    }
    onAddAnexos(anexo, manipulateForm) {
        if (this.checkAnexoExists(anexo) === false) {
            this.anexos.push(this.formBuilder.group({
                codAnexo: [anexo.codAnexo],
                nomeAnexo: [anexo.nomeAnexo],
                linkAnexo: [anexo.linkAnexo],
            }));
            if (manipulateForm) {
                this.form.markAsTouched();
                this.form.markAsDirty();
            }
        }
    }
    appendFile(files) {
        if (files.length === 0)
            return;
        const fd = new FormData();
        fd.append('file', files[0]);
        this.formData.push(fd);
        this.anexos.push(this.formBuilder.group({
            nomeAnexo: [files[0]['name']],
        }));
        if (this.showAnexos === false) {
            this.showAnexos = true;
        }
    }
    /* onLimparAnexos(): void {
      const anexos = this.form.get('anexos') as FormArray;
      anexos.clear();
    } */
    checkAnexoExists(anexo) {
        return this.form.value.anexos.some((el) => {
            return el.codAnexo === anexo.codAnexo;
        });
    }
    onDeleteAnexo(codAnexo, index) {
        this.confirmDelete().subscribe((r) => {
            if (codAnexo) {
                this.loaderNavbar = true;
                this.fichaCadastralService
                    .deleteAnexo(codAnexo)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                    this.loaderNavbar = false;
                }))
                    .subscribe((response) => {
                    if (response.hasOwnProperty('success') &&
                        response.success === true) {
                        r ? this.deleteDocumento(index) : null;
                    }
                    else if (response.hasOwnProperty('success') &&
                        response.success === false &&
                        response.hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(response.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                }, (error) => {
                    if (error['error'].hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(error.error.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                });
            }
            else {
                r ? this.deleteDocumento(index) : null;
                this.formData.splice(index, 1);
            }
        });
    }
    confirmDelete() {
        return this.confirmModalService.showConfirm('delete', 'Confirmar exclusão', 'Deseja realmente prosseguir com a exclusão do registro?', 'Cancelar', 'Confirmar');
    }
    deleteDocumento(index) {
        this.anexos.removeAt(index);
        this.form.markAsTouched();
        this.form.markAsDirty();
    }
    buscaMate() {
        let codMaterial = this.form.getRawValue().codMaterial;
        if (typeof codMaterial !== 'undefined' && codMaterial !== null) {
            this.loaderNavbar = true;
            this.comercialService
                .getMateriais({
                codMaterial: codMaterial,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                this.loaderNavbar = false;
            }))
                .subscribe((response) => {
                if (response.hasOwnProperty('success') &&
                    response.success === true) {
                    this.form.controls.nomeMaterial.setValue(response.data[0].descricao);
                    this.form.controls.nomeMaterial.setValidators([
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    ]);
                    this.form.controls.nomeMaterial.updateValueAndValidity();
                }
                else if (response.hasOwnProperty('success') &&
                    response.success === false &&
                    response.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(response.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            }, (error) => {
                if (error['error'].hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(error.error.mensagem);
                }
                else {
                    this.pnotifyService.error();
                }
            });
        }
    }
    onSubmit() {
        this.codMaterial = null;
        if (this.form.pristine) {
            this.location.back();
        }
        else {
            if (this.form.valid) {
                this.loaderNavbar = true;
                this.submittingForm = true;
                this.codMaterial = this.form.value.codMaterial;
                this.fichaCadastralService
                    .save(this.form.value)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
                    this.loaderNavbar = false;
                    this.submittingForm = false;
                }))
                    .subscribe((response) => {
                    if (response.hasOwnProperty('success') &&
                        response.success === true) {
                        if (this.formData.length > 0 &&
                            response.data.codFichaCadastral) {
                            this.onPostAnexos(response.data.codFichaCadastral);
                        }
                        this.form.reset();
                        this.formChanged = false;
                        this.pnotifyService.success(response.mensagem);
                        this.activatedRoute.params.subscribe((params) => {
                            if (params.hasOwnProperty('id')) {
                                this.location.back();
                            }
                            else {
                                this.router.navigate(['../lista'], {
                                    relativeTo: this.activatedRoute,
                                });
                            }
                        });
                    }
                    else if (response.hasOwnProperty('success') &&
                        response.success === false &&
                        response.hasOwnProperty('mensagem')) {
                        this.pnotifyService.notice(response.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                }, (error) => {
                    if (error['error'].hasOwnProperty('mensagem')) {
                        this.pnotifyService.error(error.error.mensagem);
                    }
                    else {
                        this.pnotifyService.error();
                    }
                });
            }
        }
    }
    onPostAnexos(codFichaCadastral) {
        if (this.formData.length === 0) {
            this.pnotifyService.notice('Erro');
            return;
        }
        const id = this.form.value.codMaterial;
        this.formData.forEach((element, index) => {
            this.fichaCadastralService
                .postAnexos(element, id, codFichaCadastral)
                .subscribe();
        });
    }
    onCancel() {
        this.location.back();
    }
    onInput() {
        this.formChanged = true;
    }
    formCanDeactivate() {
        if (this.formChanged) {
            if (confirm('Este cliente no forma parte de tu cartera?')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    onLoaderNavbar(event) {
        this.loaderNavbar = event;
    }
    onLimparMaterialPrincipal() {
        if (this.form.value.codFichaCadastral == null) {
            this.limparMaterialPrincipal = true;
            this.onInput();
            this.form.controls.codMaterial.setValue(null);
            this.form.controls.nomeMaterial.setValue(null);
            setTimeout(() => {
                this.limparMaterialPrincipal = false;
            }, 100);
        }
        else
            this.pnotifyService.notice('Não é possivel alterar um material já cadastrado');
    }
    materialPrincipal(material) {
        this.onInput();
        /* this.form.controls.codLinha.setValue(material.codLinha);
        this.form.controls.codClasse.setValue(material.codClasse); */
        this.form.controls.codMaterial.setValue(material.codigoMaterial);
        this.form.controls.nomeMaterial.setValue(material.descricao);
    }
};
ComercialCadastrosMateriaisFichaCadastralFormularioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosMateriaisFichaCadastralService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"] },
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_12__["ComercialService"] }
];
ComercialCadastrosMateriaisFichaCadastralFormularioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-setor-atividade-formulario',
        template: _raw_loader_formulario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_formulario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_8__["ComercialCadastrosMateriaisFichaCadastralService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_10__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_11__["TitleService"],
        src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_12__["ComercialService"]])
], ComercialCadastrosMateriaisFichaCadastralFormularioComponent);



/***/ }),

/***/ "53vl":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/formulario/formulario-resolver.guard.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ComercialCadastrosSetorAtividadeFormularioResolverGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosSetorAtividadeFormularioResolverGuard", function() { return ComercialCadastrosSetorAtividadeFormularioResolverGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ficha-cadastral.service */ "RKj2");



// Services

let ComercialCadastrosSetorAtividadeFormularioResolverGuard = class ComercialCadastrosSetorAtividadeFormularioResolverGuard {
    constructor(fichaCadastralService) {
        this.fichaCadastralService = fichaCadastralService;
    }
    resolve(route) {
        if (route.params && route.params.id) {
            return this.fichaCadastralService.getDetalhes(route.params.id);
        }
        // É implementado o método "of" para manter a tipagem de retorno com Observable.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            success: true,
            data: {
                codFichaCadastral: null,
                codMaterial: null,
                nomeMaterial: null,
                descMaterial: null,
                codSituacao: 1,
                situacao: null,
                anexos: [],
            },
        });
    }
};
ComercialCadastrosSetorAtividadeFormularioResolverGuard.ctorParameters = () => [
    { type: _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisFichaCadastralService"] }
];
ComercialCadastrosSetorAtividadeFormularioResolverGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisFichaCadastralService"]])
], ComercialCadastrosSetorAtividadeFormularioResolverGuard);



/***/ }),

/***/ "BgPZ":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/ficha-cadastral.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisFichaCadastralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisFichaCadastralModule", function() { return ComercialCadastrosMateriaisFichaCadastralModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-text-mask */ "UVXo");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng_brazil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-brazil */ "hTrW");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var _ficha_cadastral_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ficha-cadastral-routing.module */ "udhY");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../templates/templates.module */ "11Wi");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lista/lista.component */ "m+wZ");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formulario/formulario.component */ "3fl7");




// ngx-bootstrap


// ng-select

// ng-brazil


// PNotify

// Modules




// Components


let ComercialCadastrosMateriaisFichaCadastralModule = class ComercialCadastrosMateriaisFichaCadastralModule {
};
ComercialCadastrosMateriaisFichaCadastralModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lista_lista_component__WEBPACK_IMPORTED_MODULE_14__["ComercialCadastrosMateriaisFichaCadastralListaComponent"],
            _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_15__["ComercialCadastrosMateriaisFichaCadastralFormularioComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_7__["TextMaskModule"],
            ng_brazil__WEBPACK_IMPORTED_MODULE_8__["NgBrazil"],
            _ficha_cadastral_routing_module__WEBPACK_IMPORTED_MODULE_10__["ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"],
            _templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisTemplatesModule"],
        ],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"]],
    })
], ComercialCadastrosMateriaisFichaCadastralModule);



/***/ }),

/***/ "FOez":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/confirm-modal/confirm-modal.service.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalService", function() { return ConfirmModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-modal.component */ "SMoX");



// Components

let ConfirmModalService = class ConfirmModalService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    showConfirm(type, title, message, cancelTxt, okTxt) {
        const modalRef = this.modalService.show(_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
            animated: false,
            ignoreBackdropClick: true,
            keyboard: false,
            class: 'confirm'
        });
        modalRef.content.type = type;
        modalRef.content.title = title;
        modalRef.content.message = message;
        if (type === 'delete') {
            modalRef.content.messageAlerts = [
                "Se eliminará toda la información relacionada.",
                "Esta acción no se puede deshacer."
            ];
        }
        if (type === 'inactivate') {
            modalRef.content.messageAlerts = [
                'Las informacion serán inactivadas.'
            ];
        }
        if (cancelTxt) {
            modalRef.content.cancelTxt = cancelTxt;
        }
        if (okTxt) {
            modalRef.content.okTxt = okTxt;
        }
        // É uma boa prática tipar o retorno.
        // Obs.: ao tipar o retorno é possível acessar o intellisense do serviço.
        return modalRef.content.confirmResult;
    }
};
ConfirmModalService.ctorParameters = () => [
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
];
ConfirmModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
], ConfirmModalService);



/***/ }),

/***/ "Hd2l":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/lista/lista.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Ficha cadastral de materiais\">\r\n  <button\r\n    type=\"button\"\r\n    [routerLink]=\"['../novo']\">\r\n    Adicionar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n     <div class=\"row\" #scrollToFilter>\r\n      <div class=\"col\">\r\n        <advanced-filter>\r\n          <form [formGroup]=\"form\" autocomplete=\"off\">\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-lg-7\">\r\n                <label for=\"material\">Material</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"material\"\r\n                  (keydown.enter)=\"onFilter()\">\r\n              </div>\r\n              <div class=\"form-group col-lg-3\">\r\n                <label for=\"codSituacao\">Situação</label>\r\n                <select\r\n                  class=\"form-control custom-select\"\r\n                  id=\"codSituacao\"\r\n                  formControlName=\"codSituacao\">\r\n                  <option value=\"\">Todos</option>\r\n                  <option value=\"1\">Ativos</option>\r\n                  <option value=\"0\">Inativos</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group col-lg-2\">\r\n                <label for=\"registros\">Registros</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"registros\"\r\n                  formControlName=\"registros\">\r\n                  <option>25</option>\r\n                  <option>50</option>\r\n                  <option>100</option>\r\n                  <option>200</option>\r\n                  <option>300</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </advanced-filter>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <subtitles\r\n          [data]=\"subtitles\"\r\n          [show]=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n        </subtitles>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div [ngClass]=\"{'col': !showDetailPanel, 'col-5 pr-0': showDetailPanel}\">\r\n        <custom-table [config]=\"tableConfig\" *ngIf=\"dadosPagination.length > 0 && !dadosEmpty\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th scope=\"col\">Cód. Material</th>\r\n              <th scope=\"col\">Nome Material</th>\r\n              <!-- <th scope=\"col\">Usuario</th> -->\r\n              <th scope=\"col\" [hidden]=\"showDetailPanel\"></th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let fichaCadastral of dadosPagination; let i = index\" [class.table-active]=\"fichaCadastral.codFichaCadastral == fichaCadastralSelecionada.codFichaCadastral\">\r\n              <td\r\n                class=\"hover\"\r\n                [ngClass]=\"classStatusBorder(fichaCadastral)\"\r\n                (click)=\"onDetails(fichaCadastral)\">\r\n                {{ fichaCadastral.codMaterial }}\r\n              </td>\r\n              <td\r\n                class=\"hover\"\r\n                (click)=\"onDetails(fichaCadastral)\">\r\n                {{ fichaCadastral.nomeMaterial }}\r\n              </td>\r\n              <!-- <td\r\n                class=\"hover\"\r\n                (click)=\"onDetails(fichaCadastral)\">\r\n                {{ fichaCadastral.nomeUsuario }}\r\n              </td> -->\r\n              <td class=\"text-right\" [hidden]=\"showDetailPanel\">\r\n                <span *ngIf=\"fichaCadastral.codSituacao == 1\" class=\"mr-3\" tooltip=\"Inativar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onInactivate(i, fichaCadastral)\">\r\n                    <i class=\"fas fa-toggle-on\"></i>\r\n                  </button>\r\n                </span>\r\n                <span *ngIf=\"fichaCadastral.codSituacao == 0\" class=\"mr-3\" tooltip=\"Ativar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onActivate(i, fichaCadastral)\">\r\n                    <i class=\"fas fa-toggle-off\"></i>\r\n                  </button>\r\n                </span>\r\n                <span class=\"mr-3\" tooltip=\"Editar\" placement=\"left\" container=\"body\">\r\n                  <button type=\"button\" class=\"btn-icon-sm\" (click)=\"onEdit(fichaCadastral)\">\r\n                    <i class=\"fas fa-edit\"></i>\r\n                  </button>\r\n                </span>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n        <empty-result\r\n          message=\"Nenhuma informação encontrada\"\r\n          class=\"my-3\"\r\n          *ngIf=\"dadosEmpty\">\r\n        </empty-result>\r\n        <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalItems > itemsPerPage && dadosLoaded\">\r\n          <pagination\r\n            [maxSize]=\"maxSize\"\r\n            [(totalItems)]=\"totalItems\"\r\n            (pageChanged)=\"onPageChanged($event)\"\r\n            [(itemsPerPage)]=\"itemsPerPage\"\r\n            [boundaryLinks]=\"true\"\r\n            [(ngModel)]=\"currentPage\"\r\n            previousText=\"&lsaquo;\"\r\n            nextText=\"&rsaquo;\"\r\n            firstText=\"&laquo;\"\r\n            lastText=\"&raquo;\">\r\n          </pagination>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-7\" [hidden]=\"!showDetailPanel\">\r\n        <detail-panel panelTitle=\"Anexos\">\r\n          <custom-table *ngIf=\"anexos.length > 0\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th scope=\"col\" class=\"text-center\">Cód. Anexo</th>\r\n                <th scope=\"col\">Nome Arquivo</th>\r\n                <th scope=\"col\"></th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let anexo of anexos\">\r\n                <td class=\"text-center\">{{ anexo.codAnexo }}</td>\r\n                <td>{{ anexo.nomeAnexo | uppercase }}</td>\r\n                <td class=\"text-center\">\r\n                  <a\r\n                    [href]=\"anexo.linkAnexo\"\r\n                    target=\"_blank\"\r\n                    class=\"btn-icon-sm mx-2 text-black\"\r\n                    tooltip=\"visualizar\">\r\n                    <i class=\"far fa-eye\"></i>\r\n                  </a>\r\n                </td>\r\n                <!-- <td>{{ anex.mensagem | uppercase }}</td> -->\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n        </detail-panel>\r\n      </div>\r\n    </div>\r\n  </app-body>\r\n");

/***/ }),

/***/ "RKj2":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/ficha-cadastral.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisFichaCadastralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisFichaCadastralService", function() { return ComercialCadastrosMateriaisFichaCadastralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../comercial.service */ "VgqD");
/* harmony import */ var _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tid-software/tid-software.service */ "zN97");





// Services


let ComercialCadastrosMateriaisFichaCadastralService = class ComercialCadastrosMateriaisFichaCadastralService {
    constructor(http, comercialService, tidSoftwareService) {
        this.http = http;
        this.comercialService = comercialService;
        this.tidSoftwareService = tidSoftwareService;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/cadastros/materiais/ficha-cadastral`;
    }
    getListaFichaCadastral(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/lista`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getAlteracoes(codFichaCadastral) {
        return this.http
            .get(`${this.API}/alteracoes/${codFichaCadastral}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getDetalhes(codMaterial) {
        return this.http.get(`${this.API}/detalhes/${codMaterial}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    saveFichaCadastral(fichaCadastral) {
        return this.http.post(`${this.API}/salvar`, fichaCadastral).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    updateFichaCadastral(fichaCadastral) {
        return this.http.put(`${this.API}/atualizar`, fichaCadastral).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    save(fichaCadastral) {
        if (fichaCadastral.codFichaCadastral !== null) {
            return this.updateFichaCadastral(fichaCadastral);
        }
        return this.saveFichaCadastral(fichaCadastral);
    }
    activateFichaCadastral(codigo) {
        return this.http.post(`${this.API}/ativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    inactivateFichaCadastral(codigo) {
        return this.http.post(`${this.API}/inativar`, codigo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getAnexos(codMaterial) {
        return this.http.get(`${this.API}/documentos/${codMaterial}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    postAnexos(params, codMaterial, codFichaCadastral) {
        return this.http.post(`${this.API}/anexos/salvar?codMaterial=${codMaterial}&codFichaCadastral=${codFichaCadastral}`, params);
    }
    deleteAnexo(codAnexo) {
        let params = {
            codAnexo: codAnexo,
        };
        return this.http.put(`${this.API}/anexos/excluir`, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getFilterValues() {
        const linhas = this.tidSoftwareService.getLinhas();
        const classes = this.comercialService.getClasses(null);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([linhas, classes]);
    }
};
ComercialCadastrosMateriaisFichaCadastralService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"] },
    { type: _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"] }
];
ComercialCadastrosMateriaisFichaCadastralService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"],
        _tid_software_tid_software_service__WEBPACK_IMPORTED_MODULE_6__["ComercialTidSoftwareService"]])
], ComercialCadastrosMateriaisFichaCadastralService);



/***/ }),

/***/ "iMgG":
/*!*************************************************!*\
  !*** ./src/app/guards/form-deactivate.guard.ts ***!
  \*************************************************/
/*! exports provided: FormDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDeactivateGuard", function() { return FormDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let FormDeactivateGuard = class FormDeactivateGuard {
    canDeactivate(component, route, state) {
        return component.formCanDeactivate();
    }
};
FormDeactivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FormDeactivateGuard);



/***/ }),

/***/ "m+wZ":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/lista/lista.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisFichaCadastralListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisFichaCadastralListaComponent", function() { return ComercialCadastrosMateriaisFichaCadastralListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lista.component.html */ "Hd2l");
/* harmony import */ var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista.component.scss */ "/Sd9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ficha-cadastral.service */ "RKj2");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/requests/atividades.service */ "0PD5");
/* harmony import */ var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/core/title.service */ "dNnS");
/* harmony import */ var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/modules/confirm-modal/confirm-modal.service */ "FOez");
/* harmony import */ var src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/templates/detail-panel/detal-panel.service */ "gIxL");









// Services






let ComercialCadastrosMateriaisFichaCadastralListaComponent = class ComercialCadastrosMateriaisFichaCadastralListaComponent {
    constructor(activatedRoute, router, location, formBuilder, fichaCadastralService, pnotifyService, atividadesService, titleService, confirmModalService, detailPanelService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
        this.formBuilder = formBuilder;
        this.fichaCadastralService = fichaCadastralService;
        this.pnotifyService = pnotifyService;
        this.atividadesService = atividadesService;
        this.titleService = titleService;
        this.confirmModalService = confirmModalService;
        this.detailPanelService = detailPanelService;
        this.loaderNavbar = false;
        this.loaderFullScreen = true;
        this.breadCrumbTree = [];
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
        this.tableConfig = {
            subtitleBorder: true,
        };
        this.showDetailPanel = false;
        this.orderBy = 'codFichaCadastral';
        this.orderType = 'ASC';
        /* motivosAssociacao: Array<any> = []; */
        this.maxSize = 10;
        this.itemsPerPage = 300;
        this.currentPage = 1;
        this.totalItems = 0;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.anexos = [];
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.registrarAcesso();
        this.setBreadCrumb();
        this.setFormFilter();
        this.titleService.setTitle('Ficha Cadastral');
        this.onDetailPanelEmitter();
        this.setFichaCadastralSelecionada();
    }
    ngOnDestroy() {
        this.showDetailPanelSubscription.unsubscribe();
    }
    registrarAcesso() {
        this.atividadesService.registrarAcesso().subscribe();
    }
    setBreadCrumb() {
        this.activatedRoute.params.subscribe((params) => {
            this.breadCrumbTree = [
                {
                    descricao: 'Home',
                    routerLink: '/comercial/home',
                },
                {
                    descricao: 'Cadastros',
                    routerLink: `/comercial/cadastros/${params.idSubModulo}`,
                },
                {
                    descricao: 'Ficha Cadastral',
                },
            ];
        });
    }
    onDetailPanelEmitter() {
        this.showDetailPanelSubscription = this.detailPanelService.config.subscribe((event) => {
            this.showDetailPanel = event.showing;
        });
    }
    setFormFilter() {
        const formValue = this.checkRouterParams();
        this.form = this.formBuilder.group({
            material: [formValue.material],
            codSituacao: [formValue.codSituacao],
            orderBy: [formValue.orderBy],
            orderType: [formValue.orderType],
            pagina: [formValue.pagina],
            registros: [formValue.registros, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.checkOrder();
        this.loaderFullScreen = false;
    }
    checkRouterParams() {
        let formValue = {
            material: null,
            codSituacao: 1,
            orderBy: this.orderBy,
            orderType: this.orderType,
            pagina: 1,
            registros: this.itemsPerPage,
        };
        this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe((queryParams) => {
            if (Object.keys(queryParams).length > 0) {
                let params = atob(queryParams['q']);
                params = JSON.parse(params);
                this.search(params);
                Object.keys(formValue).forEach((formKey) => {
                    Object.keys(params).forEach((paramKey) => {
                        if (formKey == paramKey &&
                            formValue[formKey] != params[paramKey]) {
                            if (!isNaN(Number(params[paramKey]))) {
                                formValue[formKey] = Number(params[paramKey]);
                            }
                            else {
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
    checkOrder() {
        if (this.form.value.orderBy !== this.orderBy) {
            this.orderBy = this.form.value.orderBy;
        }
        if (this.form.value.orderType !== this.orderType) {
            this.orderType = this.form.value.orderType;
        }
    }
    setFichaCadastralSelecionada() {
        this.fichaCadastralSelecionada = {
            codFichaCadastral: 0,
            codMaterial: null,
            nomeMaterial: null,
            descMaterial: null,
            codSituacao: 1,
            situacao: null,
        };
    }
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
    setOrderBy(column) {
        if (this.orderBy === column) {
            if (this.orderType == 'DESC') {
                this.orderType = 'ASC';
            }
            else if (this.orderType == 'ASC') {
                this.orderType = 'DESC';
            }
        }
        else {
            this.orderBy = column;
            this.orderType = 'ASC';
        }
        this.form.value.orderBy = this.orderBy;
        this.form.value.orderType = this.orderType;
        this.onFilter();
    }
    onFilter() {
        if (this.form.valid) {
            this.itemsPerPage = this.form.value.registros;
            this.currentPage = 1;
            this.setRouterParams(this.verificaParams());
        }
    }
    setRouterParams(params) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { q: btoa(JSON.stringify(params)) },
        });
        this.search(params);
    }
    verificaParams() {
        let params = {};
        if (this.form.value.material) {
            params.material = this.form.value.material;
        }
        if (this.form.value.codSituacao) {
            params.codSituacao = this.form.value.codSituacao;
        }
        params.orderBy = this.form.value.orderBy;
        params.orderType = this.form.value.orderType;
        return params;
    }
    search(params) {
        this.loaderNavbar = true;
        this.dados = [];
        this.dadosPagination = [];
        this.dadosLoaded = false;
        this.dadosEmpty = false;
        this.detailPanelService.hide();
        this.fichaCadastralService
            .getListaFichaCadastral(params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
            this.dadosLoaded = true;
        }))
            .subscribe((response) => {
            if (response.hasOwnProperty('success') && response.success === true) {
                this.dados = response.data;
                this.dadosPagination = this.dados.slice(0, this.itemsPerPage);
                this.totalItems = this.dados.length;
                this.dadosLoaded = true;
            }
            else if (response.hasOwnProperty('success') &&
                response.success === false) {
                this.dadosEmpty = true;
            }
            else {
                this.pnotifyService.error();
                this.dadosEmpty = true;
            }
        }, (error) => {
            this.dadosEmpty = true;
            if (error.error.hasOwnProperty('mensagem')) {
                this.pnotifyService.error(error.error.mensagem);
            }
            else {
                this.pnotifyService.error();
            }
        });
    }
    classStatusBorder(fichaCadastral) {
        let borderClass;
        if (fichaCadastral.codSituacao === 1) {
            borderClass = 'border-success';
        }
        else if (fichaCadastral.codSituacao === 0) {
            borderClass = 'border-danger';
        }
        return borderClass;
    }
    onPageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.dadosPagination = this.dados.slice(startItem, endItem);
        this.scrollToFilter.nativeElement.scrollIntoView({
            behavior: 'instant',
        });
    }
    onDetails(fichaCadastral) {
        this.loaderNavbar = true;
        this.detailPanelService.show();
        this.setFichaCadastralSelecionada();
        this.fichaCadastralSelecionada = fichaCadastral;
        this.anexos = [];
        this.fichaCadastralService
            .getAnexos(fichaCadastral.codMaterial)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            setTimeout(() => {
                this.loaderNavbar = false;
            }, 500);
        }))
            .subscribe((response) => {
            if (response.hasOwnProperty('success') && response.success === true) {
                // Não está vazio.
                this.detailPanelService.loadedFinished(false);
                this.anexos = response.data;
            }
            else if (response.hasOwnProperty('success') &&
                response.success === false) {
                // Vazio.
                this.detailPanelService.loadedFinished(true);
            }
            else {
                // Vazio e com possível erro.
                this.pnotifyService.error();
                this.detailPanelService.loadedFinished(true);
            }
        }, (error) => {
            // Vazio e com erro.
            this.detailPanelService.loadedFinished(true);
            if (error.error.hasOwnProperty('mensagem')) {
                this.pnotifyService.error(error.error.mensagem);
            }
            else {
                this.pnotifyService.error();
            }
        });
    }
    onEdit(fichaCadastral) {
        this.router.navigate(['../editar', fichaCadastral.codFichaCadastral], {
            relativeTo: this.activatedRoute,
        });
    }
    onActivate(index, fichaCadastral) {
        this.confirmActivate()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((result) => result ? this.activateFichaCadastral(index, fichaCadastral) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(fichaCadastral);
        }, (error) => {
            this.pnotifyService.error();
            this.dadosPagination[index].codSituacao = 2;
        });
    }
    confirmActivate() {
        return this.confirmModalService.showConfirm(null, null, 'Deseja realmente prosseguir com a ativação do registro?', 'Cancelar', 'Confirmar');
    }
    activateFichaCadastral(index, fichaCadastral) {
        this.loaderNavbar = true;
        this.dadosPagination[index].codSituacao = 1;
        return this.fichaCadastralService.activateFichaCadastral(fichaCadastral.codFichaCadastral);
    }
    onInactivate(index, fichaCadastral) {
        this.confirmInactive()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((result) => result ? this.inactivateFichaCadastral(index, fichaCadastral) : rxjs__WEBPACK_IMPORTED_MODULE_7__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => {
            this.loaderNavbar = false;
        }))
            .subscribe((success) => {
            this.pnotifyService.success();
            this.refreshMainData(fichaCadastral);
        }, (error) => {
            this.pnotifyService.error();
            this.dadosPagination[index].codSituacao = 1;
        });
    }
    confirmInactive() {
        return this.confirmModalService.showConfirm('inactivate', 'Confirmar inativação', 'Deseja realmente prosseguir com a inativação do registro?', 'Cancelar', 'Confirmar');
    }
    inactivateFichaCadastral(index, fichaCadastral) {
        this.loaderNavbar = true;
        this.dadosPagination[index].codSituacao = 0;
        return this.fichaCadastralService.inactivateFichaCadastral(fichaCadastral.codFichaCadastral);
    }
    refreshMainData(fichaCadastral) {
        for (let i = 0; i < this.dados.length; i++) {
            if (fichaCadastral.codFichaCadastral === this.dados[i].codFichaCadastral) {
                this.dados[i].codSituacao = fichaCadastral.codSituacao;
                return;
            }
        }
    }
};
ComercialCadastrosMateriaisFichaCadastralListaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisFichaCadastralService"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"] },
    { type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"] },
    { type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"] },
    { type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"] },
    { type: src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"] }
];
ComercialCadastrosMateriaisFichaCadastralListaComponent.propDecorators = {
    scrollToFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['scrollToFilter', {},] }]
};
ComercialCadastrosMateriaisFichaCadastralListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-ficha-cadastral-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _ficha_cadastral_service__WEBPACK_IMPORTED_MODULE_9__["ComercialCadastrosMateriaisFichaCadastralService"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"],
        src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_11__["AtividadesService"],
        src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_12__["TitleService"],
        src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalService"],
        src_app_shared_templates_detail_panel_detal_panel_service__WEBPACK_IMPORTED_MODULE_14__["DetailPanelService"]])
], ComercialCadastrosMateriaisFichaCadastralListaComponent);



/***/ }),

/***/ "udhY":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/ficha-cadastral-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule", function() { return ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/form-deactivate.guard */ "iMgG");
/* harmony import */ var _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario-resolver.guard */ "53vl");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lista/lista.component */ "m+wZ");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formulario/formulario.component */ "3fl7");



// Guards


// Components


const routes = [
    {
        path: 'lista',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ComercialCadastrosMateriaisFichaCadastralListaComponent"],
    },
    {
        path: 'novo',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisFichaCadastralFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosSetorAtividadeFormularioResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: 'editar/:id',
        component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisFichaCadastralFormularioComponent"],
        resolve: {
            detalhes: _formulario_formulario_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["ComercialCadastrosSetorAtividadeFormularioResolverGuard"],
        },
        canDeactivate: [src_app_guards_form_deactivate_guard__WEBPACK_IMPORTED_MODULE_3__["FormDeactivateGuard"]],
    },
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
    },
];
let ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule = class ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule {
};
ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComercialCadastrosMateriaisFichaCadastralModuleRoutingModule);



/***/ }),

/***/ "yaTe":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/ficha-cadastral/formulario/formulario.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvZmljaGEtY2FkYXN0cmFsL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zN97":
/*!************************************************************************!*\
  !*** ./src/app/modules/comercial/tid-software/tid-software.service.ts ***!
  \************************************************************************/
/*! exports provided: ComercialTidSoftwareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareService", function() { return ComercialTidSoftwareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let ComercialTidSoftwareService = class ComercialTidSoftwareService {
    constructor(http) {
        this.http = http;
        this.API = `https://crm360.monterrey.com.bo/api/comercial/tid-software`;
    }
    loadDependencies() {
        let empresas = this.getEmpresas('vendas');
        let linhas = this.getLinhas();
        let modulosVendas = this.getModulosVendas();
        let modulosProducaoTela = this.getModulosProducaoTela();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([
            empresas,
            linhas,
            modulosVendas,
            modulosProducaoTela
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEmpresas(acao) {
        return this.http
            .get(`${this.API}/empresas/${acao}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhas() {
        return this.http.get(`${this.API}/linhas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModulosVendas() {
        return this.http.get(`${this.API}/modulos/vendas`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getModulosProducaoTela() {
        return this.http
            .get(`${this.API}/modulos/producao-tela`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    postGerarAcesso(data) {
        return this.http
            .post(`${this.API}/gerar-acesso`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
};
ComercialTidSoftwareService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialTidSoftwareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialTidSoftwareService);



/***/ })

}]);
//# sourceMappingURL=materiais-ficha-cadastral-ficha-cadastral-module-es2015.js.map