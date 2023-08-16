(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944"],{

/***/ "11Wi":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/templates/templates.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisTemplatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisTemplatesModule", function() { return ComercialCadastrosMateriaisTemplatesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/templates/templates.module */ "QdM9");
/* harmony import */ var _material_principal_material_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-principal/material-principal.component */ "GaHy");
/* harmony import */ var _associacoes_associacoes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./associacoes/associacoes.component */ "6eNT");




// ng-select

// Modules

// Components


let ComercialCadastrosMateriaisTemplatesModule = class ComercialCadastrosMateriaisTemplatesModule {
};
ComercialCadastrosMateriaisTemplatesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _material_principal_material_principal_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent"],
            _associacoes_associacoes_component__WEBPACK_IMPORTED_MODULE_7__["ComercialCadastrosMateriaisTemplatesAssociacoesComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
            src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_5__["TemplatesModule"],
        ],
        exports: [
            _material_principal_material_principal_component__WEBPACK_IMPORTED_MODULE_6__["ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent"],
            _associacoes_associacoes_component__WEBPACK_IMPORTED_MODULE_7__["ComercialCadastrosMateriaisTemplatesAssociacoesComponent"],
        ],
    })
], ComercialCadastrosMateriaisTemplatesModule);



/***/ }),

/***/ "6eNT":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/templates/associacoes/associacoes.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisTemplatesAssociacoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisTemplatesAssociacoesComponent", function() { return ComercialCadastrosMateriaisTemplatesAssociacoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_associacoes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./associacoes.component.html */ "nXSr");
/* harmony import */ var _associacoes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./associacoes.component.scss */ "Jz99");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");






// Services


let ComercialCadastrosMateriaisTemplatesAssociacoesComponent = class ComercialCadastrosMateriaisTemplatesAssociacoesComponent {
    constructor(formBuilder, pnotifyService, comercialService) {
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.comercialService = comercialService;
        this.linhas = [];
        this.classes = [];
        this.linhaSelecionada = null;
        this.classeSelecionada = null;
        this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.materialAssociado = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243,
        };
        this.filteredClasses = [];
        this.materiais = [];
        this.toggleAll = false;
        this.searching = false;
        this.firstSearch = false;
        this.materiaisLista = [];
        this.materiaisListaLoaded = false;
        this.materiaisListaEmpty = false;
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.setFormBuilder();
    }
    ngOnChanges(events) {
        if (events.linhas && events.linhas.currentValue.length > 0) {
            this.onChangeLinha(this.form.value.codLinha, false);
        }
        if (events.classes && events.classes.currentValue.length > 0) {
            this.onChangeClasse(this.form.value.codClasse);
        }
        if (events.linhaSelecionada &&
            events.linhaSelecionada.currentValue !== null &&
            !events.linhaSelecionada.firstChange) {
            this.setLinhaSelecionada(events.linhaSelecionada.currentValue);
        }
        if (events.classeSelecionada &&
            events.classeSelecionada.currentValue !== null &&
            !events.classeSelecionada.firstChange) {
            this.setClasseSelecionada(events.classeSelecionada.currentValue);
        }
    }
    setFormBuilder() {
        this.form = this.formBuilder.group({
            codLinha: [this.linhaSelecionada, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            codClasse: [this.classeSelecionada, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            codMaterial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    onFilter() {
        if (this.form.valid) {
            this.loaderNavbar.emit(true);
            this.searching = true;
            this.materiaisLista = [];
            this.materiaisListaLoaded = false;
            this.materiaisListaEmpty = false;
            let params = {
                codClasse: this.form.value.codClasse,
            };
            if (this.form.value.codMaterial !== 0) {
                Object.assign(params, {
                    codMaterial: this.form.value.codMaterial,
                });
            }
            this.comercialService
                .getMateriais(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                this.firstSearch = true;
                this.searching = false;
                this.loaderNavbar.emit(false);
                this.materiaisListaLoaded = true;
            }))
                .subscribe((response) => {
                if (response.hasOwnProperty('success') &&
                    response.success === true) {
                    this.materiaisLista = response.data.map(function (el) {
                        var o = Object.assign({}, el);
                        o.checked = 0;
                        return o;
                    });
                    if (this.materiaisLista.length > 9) {
                        this.tableConfigMateriais.fixedHeader = true;
                    }
                    else {
                        this.tableConfigMateriais.fixedHeader = false;
                    }
                }
                else if (response.hasOwnProperty('success') &&
                    response.success === false &&
                    response.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(response.mensagem);
                    this.materiaisListaEmpty = true;
                }
                else {
                    this.pnotifyService.error();
                    this.materiaisListaEmpty = true;
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
    onToggleAll() {
        this.toggleAll = !this.toggleAll;
        for (let index = 0; index < this.materiaisLista.length; index++) {
            this.materiaisLista[index].checked = this.toggleAll === true ? 1 : 0;
        }
    }
    onCheckMaterial(index, material) {
        this.materiaisLista[index].checked = material.checked == 0 ? 1 : 0;
    }
    onAssociarMateriais() {
        this.toggleAll = false;
        for (let index = 0; index < this.materiaisLista.length; index++) {
            if (this.materiaisLista[index].checked === 1) {
                const material = {
                    codClasse: this.materiaisLista[index].codClasse,
                    codMaterial: this.materiaisLista[index].codigoMaterial,
                    nomeMaterial: this.materiaisLista[index].descricao,
                };
                this.materialAssociado.emit(material);
                this.materiaisLista[index].checked = 0;
            }
        }
    }
    onChangeLinha(codLinha, resetClasse = true) {
        if (resetClasse) {
            this.form.controls.codClasse.reset();
            this.form.controls.codClasse.setValue(null);
        }
        this.form.controls.codClasse.enable();
        this.form.controls.codClasse.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.form.controls.codClasse.updateValueAndValidity();
        this.form.controls.codMaterial.reset();
        this.form.controls.codMaterial.disable();
        this.form.controls.codMaterial.setValue(null);
        this.form.controls.codMaterial.updateValueAndValidity();
        this.filteredClasses = this.classes.filter((value) => value.idLinha == codLinha);
    }
    onChangeClasse(codClasse) {
        this.form.controls.codMaterial.reset();
        this.form.controls.codMaterial.enable();
        this.form.controls.codMaterial.setValue(null);
        this.form.controls.codMaterial.updateValueAndValidity();
        this.getMateriais(codClasse);
    }
    getMateriais(codClasse) {
        if (typeof codClasse !== 'undefined' && codClasse !== null) {
            this.materiaisLoader = true;
            this.materiais = [];
            this.comercialService
                .getMateriais({
                codClasse: codClasse,
                situacao: 'A'
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                this.materiaisLoader = false;
            }))
                .subscribe((response) => {
                if (response.success === true) {
                    this.materiais = response.data;
                    this.materiais.unshift({
                        codigoMaterial: 0,
                        codigoDescricaoMaterial: 'EXIBIR TODOS',
                    });
                    this.form.controls.codMaterial.setValue(0);
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
    setLinhaSelecionada(codLinha) {
        this.form.controls.codLinha.setValue(codLinha);
        this.onChangeLinha(codLinha, false);
    }
    setClasseSelecionada(codClasse) {
        this.form.controls.codClasse.setValue(codClasse);
        this.onChangeClasse(codClasse);
        this.materiaisLista = [];
    }
};
ComercialCadastrosMateriaisTemplatesAssociacoesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"] }
];
ComercialCadastrosMateriaisTemplatesAssociacoesComponent.propDecorators = {
    linhas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['linhas',] }],
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['classes',] }],
    linhaSelecionada: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['linhaSelecionada',] }],
    classeSelecionada: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['classeSelecionada',] }],
    loaderNavbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['loaderNavbar',] }],
    materialAssociado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['materialAssociado',] }]
};
ComercialCadastrosMateriaisTemplatesAssociacoesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-templates-associacoes',
        template: _raw_loader_associacoes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_associacoes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"]])
], ComercialCadastrosMateriaisTemplatesAssociacoesComponent);



/***/ }),

/***/ "FrF2":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/templates/material-principal/material-principal.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mb-2\">\r\n  <div class=\"col mt-auto\">\r\n    <div class=\"mtc-title mb-0\">Pesquisar material principal</div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"d-flex justify-content-end\">\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-sm btn-outline-secondary\"\r\n        (click)=\"onFilter()\"\r\n        [disabled]=\"searching === true\">\r\n        <i class=\"fas fa-search\"></i>\r\n        <span>Pesquisar</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<advanced-filter>\r\n  <form [formGroup]=\"form\" autocomplete=\"off\">\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-6\">\r\n        <label for=\"codLinha\">Linha</label>\r\n        <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"linhas\"\r\n          formControlName=\"codLinha\"\r\n          [virtualScroll]=\"true\"\r\n          labelForId=\"codLinha\"\r\n          bindLabel=\"descricao\"\r\n          bindValue=\"id\"\r\n          (change)=\"onChangeLinha($event.id)\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"form-group col-lg-6\">\r\n        <label for=\"codClasse\">Classe</label>\r\n        <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"filteredClasses\"\r\n          formControlName=\"codClasse\"\r\n          [virtualScroll]=\"true\"\r\n          labelForId=\"codClasse\"\r\n          bindLabel=\"nomeClasse\"\r\n          bindValue=\"idClasse\"\r\n          (change)=\"onChangeClasse($event.idClasse)\">\r\n        </ng-select>\r\n      </div>\r\n    </div>\r\n      <div class=\"form-row\">\r\n      <div class=\"form-group col-lg-12\">\r\n        <label for=\"codMaterial\">Material</label>\r\n        <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"materiais\"\r\n          formControlName=\"codMaterial\"\r\n          [virtualScroll]=\"true\"\r\n          labelForId=\"codMaterial\"\r\n          bindLabel=\"codigoDescricaoMaterial\"\r\n          bindValue=\"codigoMaterial\"\r\n          [loading]=\"materiaisLoader\"\r\n          loadingText=\"Carregando...\">\r\n        </ng-select>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</advanced-filter>\r\n<div *ngIf=\"materiaisLista.length > 0\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"mtc-title\">Selecione o material principal</div>\r\n      <custom-table [config]=\"tableConfigMateriais\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th scope=\"col\" class=\"text-center\" style=\"width: 5%\"></th>\r\n            <th scope=\"col\" style=\"width: 95%\">Material</th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let material of materiaisLista\" [class.table-active]=\"material.codigoMaterial == codMaterialSelecionado\">\r\n            <td class=\"text-center\" style=\"width: 5%\">\r\n              <btn-icon\r\n                [icon]=\"material.codigoMaterial == codMaterialSelecionado ? 'fas fa-check-square' : 'far fa-square'\"\r\n                size=\"small\"\r\n                (click)=\"onCheckMaterial(material)\">\r\n              </btn-icon>\r\n            </td>\r\n            <td\r\n              class=\"hover\"\r\n              style=\"width: 95%\"\r\n              (click)=\"onCheckMaterial(material)\">\r\n              {{ material.codigoDescricaoMaterial | uppercase }}\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"searching === true\">\r\n  <div class=\"col\">\r\n    <message\r\n      icon=\"fas fa-cog fa-spin\"\r\n      text=\"Estamos pesquisando os materiais para você...\">\r\n    </message>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"searching === false\">\r\n  <div class=\"row\" *ngIf=\"materiaisListaEmpty && materiaisListaLoaded\">\r\n    <div class=\"col\">\r\n      <message\r\n        icon=\"fas fa-box-open\"\r\n        text=\"Nenhuma informação encontrada\">\r\n      </message>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"materiaisLista.length === 0 && !firstSearch\">\r\n    <div class=\"col\">\r\n      <message\r\n        icon=\"fas fa-search\"\r\n        text=\"Preecha os campos acima para pesquisar materiais\">\r\n      </message>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "GaHy":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/templates/material-principal/material-principal.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent", function() { return ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_material_principal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./material-principal.component.html */ "FrF2");
/* harmony import */ var _material_principal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-principal.component.scss */ "fEJ3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/core/pnotify.service */ "g+W+");
/* harmony import */ var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/comercial/comercial.service */ "VgqD");






// Services


let ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent = class ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent {
    constructor(formBuilder, pnotifyService, comercialService) {
        this.formBuilder = formBuilder;
        this.pnotifyService = pnotifyService;
        this.comercialService = comercialService;
        this.linhas = [];
        this.classes = [];
        this.loaderNavbar = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.materialPrincipal = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.tableConfigMateriais = {
            fixedHeader: false,
            bodyHeight: 243,
        };
        this.filteredClasses = [];
        this.materiais = [];
        this.searching = false;
        this.firstSearch = false;
        this.materiaisLista = [];
        this.materiaisListaLoaded = false;
        this.materiaisListaEmpty = false;
        this.codMaterialSelecionado = null;
        this.pnotifyService.getPNotify();
    }
    ngOnInit() {
        this.setFormBuilder();
    }
    ngOnChanges(events) {
        if (events.limparMaterialSelecionado &&
            events.limparMaterialSelecionado.currentValue === true) {
            this.setMaterialSelecionado(null);
        }
    }
    setFormBuilder() {
        this.form = this.formBuilder.group({
            codLinha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            codClasse: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            codMaterial: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    onFilter() {
        if (this.form.valid) {
            this.loaderNavbar.emit(true);
            this.searching = true;
            this.materiaisLista = [];
            this.materiaisListaLoaded = false;
            this.materiaisListaEmpty = false;
            let params = {
                codClasse: this.form.value.codClasse,
            };
            if (this.form.value.codMaterial !== 0) {
                Object.assign(params, {
                    codMaterial: this.form.value.codMaterial,
                });
            }
            this.comercialService
                .getMateriais(params)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                this.firstSearch = true;
                this.searching = false;
                this.loaderNavbar.emit(false);
                this.materiaisListaLoaded = true;
            }))
                .subscribe((response) => {
                if (response.hasOwnProperty('success') &&
                    response.success === true) {
                    this.materiaisLista = response.data;
                    if (this.materiaisLista.length > 9) {
                        this.tableConfigMateriais.fixedHeader = true;
                    }
                    else {
                        this.tableConfigMateriais.fixedHeader = false;
                    }
                }
                else if (response.hasOwnProperty('success') &&
                    response.success === false &&
                    response.hasOwnProperty('mensagem')) {
                    this.pnotifyService.error(response.mensagem);
                    this.materiaisListaEmpty = true;
                }
                else {
                    this.pnotifyService.error();
                    this.materiaisListaEmpty = true;
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
    onCheckMaterial(material) {
        this.setMaterialSelecionado(material.codigoMaterial);
        this.materialPrincipal.emit(material);
    }
    setMaterialSelecionado(codMaterial) {
        this.codMaterialSelecionado = codMaterial;
    }
    onChangeLinha(codLinha) {
        this.form.controls.codClasse.reset();
        this.form.controls.codClasse.setValue(null);
        this.form.controls.codClasse.enable();
        this.form.controls.codClasse.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.form.controls.codClasse.updateValueAndValidity();
        this.form.controls.codMaterial.reset();
        this.form.controls.codMaterial.disable();
        this.form.controls.codMaterial.setValue(null);
        this.form.controls.codMaterial.updateValueAndValidity();
        this.filteredClasses = this.classes.filter((value) => value.idLinha == codLinha);
    }
    onChangeClasse(codClasse) {
        this.form.controls.codMaterial.reset();
        this.form.controls.codMaterial.enable();
        this.form.controls.codMaterial.setValue(null);
        this.form.controls.codMaterial.updateValueAndValidity();
        this.getMateriais(codClasse);
    }
    getMateriais(codClasse) {
        if (typeof codClasse !== 'undefined' && codClasse !== null) {
            this.materiaisLoader = true;
            this.materiais = [];
            this.comercialService
                .getMateriais({
                codClasse: codClasse,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
                this.materiaisLoader = false;
            }))
                .subscribe((response) => {
                if (response.success === true) {
                    this.materiais = response.data;
                    this.materiais.unshift({
                        codigoMaterial: 0,
                        codigoDescricaoMaterial: 'EXIBIR TODOS',
                    });
                    this.form.controls.codMaterial.setValue(0);
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
};
ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"] },
    { type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"] }
];
ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent.propDecorators = {
    linhas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['linhas',] }],
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['classes',] }],
    limparMaterialSelecionado: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['limparMaterialSelecionado',] }],
    loaderNavbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['loaderNavbar',] }],
    materialPrincipal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['materialPrincipal',] }]
};
ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comercial-cadastros-materiais-templates-material-principal',
        template: _raw_loader_material_principal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_material_principal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_6__["PNotifyService"],
        src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_7__["ComercialService"]])
], ComercialCadastrosMateriaisTemplatesMaterialPrincipalComponent);



/***/ }),

/***/ "Jz99":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/templates/associacoes/associacoes.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvdGVtcGxhdGVzL2Fzc29jaWFjb2VzL2Fzc29jaWFjb2VzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "VgqD":
/*!********************************************************!*\
  !*** ./src/app/modules/comercial/comercial.service.ts ***!
  \********************************************************/
/*! exports provided: ComercialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComercialService", function() { return ComercialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ComercialService = class ComercialService {
    constructor(http) {
        this.http = http;
        this.API = `http://23.254.204.187/api/comercial`;
    }
    getEmpresas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/empresas`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getDepositos(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/depositos`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getAlmacen(params) {
        return this.http
            .get(`${this.API}/almacen`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhasId(id) {
        return this.http.get(`${this.API}/linhas/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getSublineasId(id) {
        return this.http.get(`${this.API}/sublineas/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    sincronizarMateriales() {
        return this.http.get(`${this.API}/sincronizar`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMateriales(params) {
        return this.http
            .get(`${this.API}/materiales`, {
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMaterialesOferta(params) {
        return this.http
            .get(`${this.API}/materiales_lista_precio`, {
            params: params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getLinhas(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/linhas`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getClasses(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/classes`, {
            params: httpParams,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getMateriais(params = []) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (let param in params) {
            httpParams = httpParams.append(param, params[param]);
        }
        return this.http
            .get(`${this.API}/materiais`, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPerfil() {
        return this.http.get(`${this.API}/perfil`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getEscritorios() {
        return this.http.get(`${this.API}/escritorios`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getPresentacionMaterial() {
        return this.http
            .get(`${this.API}/presentacion_materiales`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCliente(codCliente) {
        return this.http.get(`${this.API}/clientes/detalhes/${codCliente}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    getListarPrecios() {
        return this.http.get(`${this.API}/vendedor/lista_precio`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getTodosVendedores() {
        return this.http.get(`${this.API}/vendedor/allvendedor`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
    }
    getCentrosLogisticos() {
        return this.http.get(`${this.API}/almacen/centros_logisticos`);
    }
};
ComercialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ComercialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ComercialService);



/***/ }),

/***/ "fEJ3":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/comercial/cadastros/materiais/templates/material-principal/material-principal.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2NhZGFzdHJvcy9tYXRlcmlhaXMvdGVtcGxhdGVzL21hdGVyaWFsLXByaW5jaXBhbC9tYXRlcmlhbC1wcmluY2lwYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "nXSr":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/cadastros/materiais/templates/associacoes/associacoes.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"linhas.length > 0 && classes.length > 0\">\r\n  <div class=\"row mb-2\">\r\n    <div class=\"col mt-auto\">\r\n      <div class=\"mtc-title mb-0\">Pesquisar por materiais para associação</div>\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"d-flex justify-content-end\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-sm btn-outline-secondary\"\r\n          (click)=\"onFilter()\"\r\n          [disabled]=\"searching === true\">\r\n          <i class=\"fas fa-search\"></i>\r\n          <span>Pesquisar</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <advanced-filter>\r\n    <form [formGroup]=\"form\" autocomplete=\"off\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-6\">\r\n          <label for=\"codLinha\">Linha</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"linhas\"\r\n            formControlName=\"codLinha\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"codLinha\"\r\n            bindLabel=\"descricao\"\r\n            bindValue=\"id\"\r\n            (change)=\"onChangeLinha($event.id)\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-lg-6\">\r\n          <label for=\"codClasse\">Classe</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"filteredClasses\"\r\n            formControlName=\"codClasse\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"codClasse\"\r\n            bindLabel=\"nomeClasse\"\r\n            bindValue=\"idClasse\"\r\n            (change)=\"onChangeClasse($event.idClasse)\">\r\n          </ng-select>\r\n        </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n        <div class=\"form-group col-lg-12\">\r\n          <label for=\"codMaterial\">Material</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"materiais\"\r\n            formControlName=\"codMaterial\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"codMaterial\"\r\n            bindLabel=\"codigoDescricaoMaterial\"\r\n            bindValue=\"codigoMaterial\"\r\n            [loading]=\"materiaisLoader\"\r\n            loadingText=\"Carregando...\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div *ngIf=\"materiaisLista.length > 0\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col mt-auto\">\r\n        <div class=\"mtc-title mb-0\">Seleção de materiais</div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"d-flex justify-content-end\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-sm btn-outline-primary\"\r\n            (click)=\"onAssociarMateriais()\"\r\n            [disabled]=\"searching === true\">\r\n            <i class=\"fas fa-exchange-alt\"></i>\r\n            <span>Associar</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <custom-table [config]=\"tableConfigMateriais\">\r\n          <ng-template #thead let-thead>\r\n            <tr>\r\n              <th\r\n                scope=\"col\"\r\n                class=\"text-center\"\r\n                style=\"width: 5%\">\r\n                <btn-icon\r\n                  [icon]=\"toggleAll ? 'fas fa-check-square' : 'far fa-square'\"\r\n                  size=\"small\"\r\n                  (click)=\"onToggleAll()\">\r\n                </btn-icon>\r\n              </th>\r\n              <th scope=\"col\" style=\"width: 95%\">Material</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template #tbody let-tbody>\r\n            <tr *ngFor=\"let material of materiaisLista; let i = index;\">\r\n              <td class=\"text-center\" style=\"width: 5%\">\r\n                <btn-icon\r\n                  [icon]=\"material.checked == 1 ? 'fas fa-check-square' : 'far fa-square'\"\r\n                  size=\"small\"\r\n                  (click)=\"onCheckMaterial(i, material)\">\r\n                </btn-icon>\r\n              </td>\r\n              <td\r\n                class=\"hover\"\r\n                style=\"width: 95%\"\r\n                (click)=\"onCheckMaterial(i, material)\">\r\n                {{ material.codigoDescricaoMaterial | uppercase }}\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n        </custom-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"searching === true\">\r\n    <div class=\"col\">\r\n      <message\r\n        icon=\"fas fa-cog fa-spin\"\r\n        text=\"Estamos pesquisando os materiais para você...\">\r\n      </message>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"searching === false\">\r\n    <div class=\"row\" *ngIf=\"materiaisListaEmpty && materiaisListaLoaded\">\r\n      <div class=\"col\">\r\n        <message\r\n          icon=\"fas fa-box-open\"\r\n          text=\"Nenhuma informação encontrada\">\r\n        </message>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"materiaisLista.length === 0 && !firstSearch\">\r\n      <div class=\"col\">\r\n        <message\r\n          icon=\"fas fa-search\"\r\n          text=\"Preecha os campos acima para pesquisar materiais\">\r\n        </message>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=default~contratos-comerciais-contratos-comerciais-module~contratos-contratos-module~integracao-condi~c7866944-es2015.js.map