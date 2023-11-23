(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["atividades-atividades-module"], {
    /***/
    "/y42":
    /*!***********************************************************************!*\
      !*** ./src/app/modules/admin/atividades/atividades-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AdminAtividadesRoutingModule */

    /***/
    function y42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminAtividadesRoutingModule", function () {
        return AdminAtividadesRoutingModule;
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


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "Ozkf");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "oh7U");

      var routes = [{
        path: '',
        component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AdminAtividadesListaComponent"]
      }, {
        path: 'novo',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminAtividadesCadastroComponent"]
      }, {
        path: ':id',
        component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__["AdminAtividadesCadastroComponent"]
      }];

      var AdminAtividadesRoutingModule = function AdminAtividadesRoutingModule() {
        _classCallCheck(this, AdminAtividadesRoutingModule);
      };

      AdminAtividadesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminAtividadesRoutingModule);
      /***/
    },

    /***/
    "LOuz":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/admin/atividades/cadastro/cadastro.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function LOuz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fa-check {\n  color: green;\n}\n\n.fa-ban {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hdGl2aWRhZGVzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hdGl2aWRhZGVzL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWNoZWNrIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5mYS1iYW4ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "NpYZ":
    /*!***************************************************************!*\
      !*** ./src/app/modules/admin/atividades/atividades.module.ts ***!
      \***************************************************************/

    /*! exports provided: AdminAtividadesModule */

    /***/
    function NpYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminAtividadesModule", function () {
        return AdminAtividadesModule;
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


      var _atividades_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./atividades-routing.module */
      "/y42");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lista/lista.component */
      "oh7U");
      /* harmony import */


      var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cadastro/cadastro.component */
      "Ozkf");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");

      var AdminAtividadesModule = function AdminAtividadesModule() {
        _classCallCheck(this, AdminAtividadesModule);
      };

      AdminAtividadesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_4__["AdminAtividadesListaComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["AdminAtividadesCadastroComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _atividades_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminAtividadesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_9__["ModuleWrapperModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_10__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"]]
      })], AdminAtividadesModule);
      /***/
    },

    /***/
    "OMfy":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/atividades/lista/lista.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OMfy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header [appTitle]=\"appTitle\">\r\n  <button type=\"button\" (click)=\"onReset()\">Limpiar</button>\r\n  <button type=\"button\" (click)=\"onFilter()\">Filtrar</button>\r\n  <button type=\"button\" [routerLink]=\"['./novo']\">Adicionar</button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col\">\r\n          <label for=\"nome\">Nombre</label>\r\n          <input id=\"nome\" type=\"text\" class=\"form-control\" placeholder=\"DIGITE...\" formControlName=\"nome\" (keyup.enter)=\"onFilter()\">\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"modulo\">Módulo</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"modulos\"\r\n            [virtualScroll]=\"true\"\r\n            [loading]=\"loadingModulo\"\r\n            dropdownPosition=\"bottom\"\r\n            placeholder=\"SELECIONE\"\r\n            labelForId=\"modulo\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            id=\"modulo\"\r\n            formControlName=\"moduloId\"\r\n            (change)=\"onFilter(); getSubmodulos({moduloId: $event?.id})\"\r\n          >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.id | number : '3.0-0'}}) {{item.nome}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"submodulo\">Submódulo</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"submodulos\"\r\n            [virtualScroll]=\"true\"\r\n            [loading]=\"loadingSubmodulo\"\r\n            dropdownPosition=\"bottom\"\r\n            placeholder=\"SELECIONE...\"\r\n            groupBy=\"modulo\"\r\n            labelForId=\"submodulo\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            id=\"submodulo\"\r\n            formControlName=\"submoduloId\"\r\n            (change)=\"onFilter()\"\r\n          >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.id | number : '3.0-0'}}) {{item.nome}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"tipoAtividade\">Tipo de Actividades</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tipoAtividade\"\r\n            [virtualScroll]=\"true\"\r\n            [loading]=\"loadingTipoAtividade\"\r\n            placeholder=\"Selecione...\"\r\n            labelForId=\"tipoAtividade\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"id\"\r\n            id=\"tipoAtividadeId\"\r\n            formControlName=\"tipoAtividadeId\"\r\n            (change)=\"onFilter()\"\r\n          >\r\n            <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n              ({{item.id | number : '3.0-0'}}) {{item.nome}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col\">\r\n          <label for=\"situacao\">Situación</label>\r\n          <select\r\n            name=\"situacao\"\r\n            id=\"situacao\"\r\n            formControlName=\"situacao\"  \r\n            class=\"form-control\"\r\n            (change)=\"onFilter()\"\r\n          >\r\n            <option value=\"\">Todos</option>\r\n            <option value=\"1\">Activos</option>\r\n            <option value=\"0\">Inactivos</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-1\">\r\n          <label for=\"registrosPorPagina\">Registros</label>\r\n          <select\r\n            name=\"registrosPorPagina\"\r\n            id=\"registrosPorPagina\"\r\n            class=\"form-control\"\r\n            formControlName=\"registrosPorPagina\"\r\n            >\r\n              <option value=\"10\">10</option>\r\n              <option value=\"25\">25</option>\r\n              <option value=\"50\">50</option>\r\n              <option value=\"100\">100</option>\r\n              <option value=\"250\">250</option>\r\n              <option value=\"500\">500</option>\r\n            </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <table class=\"table table-sm table-hover custom-border border-left border-right border-bottom text-center table-fixed\">\r\n        <thead class=\"thead-light\">\r\n          <tr>\r\n            <th style=\"width:100px\">ID</th>\r\n            <th style=\"width: 30%\">Nombre</th>\r\n            <th>Módulo</th>\r\n            <th>Submódulo</th>\r\n            <th>Tipo de actividades</th>\r\n            <th style=\"width:70px\"></th>\r\n            <th style=\"width:70px\"></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of data; let i = index\">\r\n            <td class=\"text-truncate\" [ngClass]=\"item.situacao == 1 ? 'border-success' : 'border-danger'\">\r\n              {{ item.id | number:'6.0-0' }}\r\n            </td>\r\n            <td>\r\n              {{ item.nome }}\r\n            </td>\r\n            <td class=\"text-truncate\"> {{ item.moduloNome }} </td>\r\n            <td class=\"text-truncate\"> {{ item.submoduloNome }} </td>\r\n            <td class=\"text-truncate\"> {{ item.tipoAtividadeNome }} </td>\r\n            <td> <div [class]=\"item.icone\"></div></td>\r\n            <td class=\"align-middle\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Editar\"\r\n                container=\"body\"\r\n              >\r\n                <a [routerLink]=\"['./', item.id]\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </a>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div>\r\n      Exibindo {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 80%\">\r\n    <empty-result message=\"Nenhuma informação encontrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "Ozkf":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/admin/atividades/cadastro/cadastro.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AdminAtividadesCadastroComponent */

    /***/
    function Ozkf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminAtividadesCadastroComponent", function () {
        return AdminAtividadesCadastroComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cadastro.component.html */
      "dKyh");
      /* harmony import */


      var _cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cadastro.component.scss */
      "LOuz");
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


      var _services_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/atividades.service */
      "UNg1");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../submodulos/services/submodulos.service */
      "hMv8");
      /* harmony import */


      var _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../modulos/services/modulos.service */
      "RbS/");
      /* harmony import */


      var src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/icons-fonts-awesome.service */
      "B5rI");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5"); //angular
      //services
      //rxjs


      var AdminAtividadesCadastroComponent = /*#__PURE__*/function () {
        function AdminAtividadesCadastroComponent(formBuilder, service, moduloService, submoduloService, pnotify, activatedRoute, foawService, router, routerService, location, atividadesService) {
          _classCallCheck(this, AdminAtividadesCadastroComponent);

          this.formBuilder = formBuilder;
          this.service = service;
          this.moduloService = moduloService;
          this.submoduloService = submoduloService;
          this.pnotify = pnotify;
          this.activatedRoute = activatedRoute;
          this.foawService = foawService;
          this.router = router;
          this.routerService = routerService;
          this.location = location;
          this.atividadesService = atividadesService;
          this.appTitle = "Cadastro";
          this.loading = true;
          this.loadingNavBar = false;
          this.loadingModulos = false;
          this.loadingSubmodulos = false;
          this.loadingTipoAtividade = false;
          this.nestedLoading = {
            submodulos: true,
            tiposAtividades: true,
            icones: true,
            atividade: true,
            modulos: true
          };
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/admin/home'
          }, {
            descricao: 'Lista de atividades',
            routerLink: '/admin/atividades'
          }, {
            descricao: 'Cadastro'
          }];
        }

        _createClass(AdminAtividadesCadastroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
            this.getIcones();
            this.getModulos();
            this.getSubmodulos();
            this.getTipoAtividade();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/admin/home"
            }, {
              descricao: 'Lista de atividades',
              routerLink: "/admin/atividades"
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              id: [null],
              icone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              nome: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              moduloId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              submoduloId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              tipoAtividadeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              rota: [null],
              url: [null],
              exibeSidebar: [null],
              exibeNovaAba: [null],
              descricao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              situacao: [1]
            });
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _a;

            var id = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.id;

            if (id == undefined) {
              this.loading = false;
              return;
            }

            this.getAtividade(id);
          }
        }, {
          key: "getAtividade",
          value: function getAtividade(id) {
            var _this = this;

            this.loading = true;
            this.service.getAtividades({
              id: id
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              var data = response.body["data"][0];

              _this.form.patchValue(data);

              _this.form.get('rota').setValue(data["rota_origem"]);
            }, function (error) {
              _this.pnotify.error("Falha ao carregar os dados da atividade.");

              _this.router.navigate(["./../"], {
                relativeTo: _this.activatedRoute
              });
            });
          }
        }, {
          key: "getModulos",
          value: function getModulos(params) {
            var _this2 = this;

            this.loadingModulos = true;
            this.moduloService.getModulos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this2.loadingModulos = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this2.pnotify.error('Ocorreu um erro ao consultar módulos');

                _this2.modulos = [];
                return;
              }

              _this2.modulos = response.body["data"];
            }, function (error) {
              _this2.modulos = [];

              _this2.pnotify.error('Ocorreu um erro ao consultar módulos');
            });
          }
        }, {
          key: "getSubmodulos",
          value: function getSubmodulos(params) {
            var _this3 = this;

            this.loadingSubmodulos = true;
            this.submoduloService.getSubModulos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this3.loadingSubmodulos = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this3.pnotify.error('Ocorreu um erro ao consultar submódulos');

                _this3.submodulos = [];
                return;
              }

              _this3.submodulos = response.body["data"];
            }, function (error) {
              _this3.submodulos = [];

              _this3.pnotify.error('Ocorreu um erro ao consultar submódulos');
            });
          }
        }, {
          key: "getTipoAtividade",
          value: function getTipoAtividade() {
            var _this4 = this;

            this.loadingTipoAtividade = true;
            this.service.getTipoAtividade().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this4.loadingTipoAtividade = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this4.pnotify.error('Ocorreu um erro ao consultar tipo de atividade');

                _this4.tiposAtividade = [];
                return;
              }

              _this4.tiposAtividade = response.body["data"];
            }, function (error) {
              _this4.tiposAtividade = [];

              _this4.pnotify.error('Ocorreu um erro ao consultar tipo de atividade');
            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this5 = this;

            this.loadingNavBar = true;
            var params = this.form.value;
            this.service.postAtividade(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              _this5.loadingNavBar = false;
            })).subscribe(function (response) {
              _this5.pnotify.success();

              _this5.router.navigate(["./../"], {
                relativeTo: _this5.activatedRoute
              });
            }, function (error) {
              var _a;

              var message = (_a = error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this5.pnotify.error(message) : _this5.pnotify.error();
            });
          }
        }, {
          key: "getParams",
          value: function getParams() {
            var params = this.form.value;
            params['icone'] = this.icone;
            return params;
          }
        }, {
          key: "getIcones",
          value: function getIcones() {
            var _this6 = this;

            this.foawService.getIcones().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
              /* this.nestedLoading.icones = false;
              this.loading = this.getStatusDataLoaded(); */
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this6.icones = response.body['icones'];
              }
            });
          }
        }, {
          key: "onIconSelected",
          value: function onIconSelected(event) {
            this.icone = event.classe;
          }
        }, {
          key: "getStatusDataLoaded",
          value: function getStatusDataLoaded() {
            var _this7 = this;

            var status = false;
            Object.keys(this.nestedLoading).forEach(function (key) {
              if (_this7.nestedLoading[key] === true) status = true;
            });
            return status;
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

        return AdminAtividadesCadastroComponent;
      }();

      AdminAtividadesCadastroComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AdminAtividadesService"]
        }, {
          type: _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__["AdminModulosService"]
        }, {
          type: _submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminSubModulosService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_10__["IconesFontAwesomeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"]
        }];
      };

      AdminAtividadesCadastroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-atividades-cadastro',
        template: _raw_loader_cadastro_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cadastro_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AdminAtividadesService"], _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__["AdminModulosService"], _submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_8__["AdminSubModulosService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], src_app_shared_services_core_icons_fonts_awesome_service__WEBPACK_IMPORTED_MODULE_10__["IconesFontAwesomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_11__["RouterService"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_14__["AtividadesService"]])], AdminAtividadesCadastroComponent);
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
    "dKyh":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/atividades/cadastro/cadastro.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dKyh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Registro de actividades\">\r\n  <button \r\n    (click)=\"onSave()\"\r\n    [disabled] = \"form.status == 'INVALID'\"\r\n    >\r\n    Guardar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row\">\r\n    <div class=\"d-flex justify-content-center col\" [hidden]=\"loading\">\r\n      <form [formGroup]=\"form\" autocomplete=\"off\" class=\"col-6\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"icone\">Ícono</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"false\"\r\n              [items]=\"icones\"\r\n              [virtualScroll]=\"true\"\r\n              placeholder=\"Selecione...\"\r\n              labelForId=\"classe\"\r\n              bindLabel=\"classe\"\r\n              bindValue=\"classe\"\r\n              id=\"classe\"\r\n              formControlName=\"icone\"\r\n              [ngClass]=\"onFieldRequired('icone')\"\r\n              >\r\n              <ng-template ng-label-tmp let-item=\"item\" let-clear=\"clear\">\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <div [class]=\"item.classe\" style=\"min-width: 25px;\"></div>\r\n                    <div>{{item.classe}}</div>\r\n                  </div>\r\n              </ng-template>\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div [class]=\"item.classe\" style=\"min-width: 25px;\"></div>\r\n                  <div>{{item.classe}}</div>\r\n                </div>\r\n              </ng-template>\r\n            </ng-select>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"nome\">Nombre</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nome\"\r\n              formControlName=\"nome\"\r\n              placeholder=\"Digite...\"\r\n              [ngClass]=\"onFieldRequired('nome')\"\r\n            />\r\n            <invalid-form-control [show]=\"onFieldInvalid('nome')\" message=\"El nombre es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"modulo\">Módulo</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"modulos\"\r\n              [virtualScroll]=\"true\"\r\n              [loading]=\"loadingModulos\"\r\n              dropdownPosition=\"bottom\"\r\n              labelForId=\"modulo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"modulo\"\r\n              formControlName=\"moduloId\"\r\n              (change)=\"getSubmodulos({moduloId: $event?.id})\"\r\n              placeholder=\"Selecione...\"\r\n              [ngClass]=\"onFieldRequired('moduloId')\"\r\n            >\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                ({{item.id | number : '3.0-0'}}) {{item.nome}}\r\n              </ng-template>\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('moduloId')\" message=\"Módulo es oligatorio.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"submodulo\">Submódulo</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"submodulos\"\r\n              [virtualScroll]=\"true\"\r\n              [loading]=\"loadingSubmodulos\"\r\n              dropdownPosition=\"bottom\"\r\n              placeholder=\"Selecione...\"\r\n              groupBy = \"modulo\"\r\n              labelForId=\"submodulo\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"submodulo\"\r\n              formControlName=\"submoduloId\"\r\n              [ngClass]=\"onFieldRequired('submoduloId')\"\r\n            >\r\n              <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                ({{item.id | number : '3.0-0'}}) {{item.nome}}\r\n              </ng-template>\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('submoduloId')\" message=\"Submódulo es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"rota\">Ruta</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control text-lowercase\"\r\n              id=\"rota\"\r\n              formControlName=\"rota\"\r\n              placeholder=\"Digite...\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"url\">URL</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"url\"\r\n              formControlName=\"url\"\r\n              placeholder=\"Digite...\"\r\n              style=\"text-transform: none !important;\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"tipoAtividade\">Tipo de Actividades</label>\r\n            <ng-select\r\n              [searchable]=\"true\"\r\n              [clearable]=\"true\"\r\n              [items]=\"tiposAtividade\"\r\n              [virtualScroll]=\"true\"\r\n              dropdownPosition=\"bottom\"\r\n              [loading]=\"loadingTipoAtividade\"\r\n              labelForId=\"tipoAtividade\"\r\n              bindLabel=\"nome\"\r\n              bindValue=\"id\"\r\n              id=\"tipoAtividade\"\r\n              formControlName=\"tipoAtividadeId\"\r\n              placeholder=\"Selecione...\"\r\n              [ngClass]=\"onFieldRequired('tipoAtividadeId')\"\r\n            >\r\n            </ng-select>\r\n            <invalid-form-control [show]=\"onFieldInvalid('tipoAtividadeId')\" message=\"Tipo de actividades es obligatorio.\"></invalid-form-control>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"situacao\">Situación</label>\r\n            <select\r\n              name=\"situacao\"\r\n              id=\"situacao\"\r\n              class=\"form-control\"\r\n              formControlName=\"situacao\"\r\n            >\r\n              <option value=\"1\">Activo</option>\r\n              <option value=\"0\">Inactivo</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md-6 d-flex justify-content-center flex-column\">\r\n            <div class=\"custom-control custom-checkbox\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"exibeSidebar\"\r\n                formControlName=\"exibeSidebar\"\r\n              >\r\n              <label\r\n                class=\"custom-control-label\"\r\n                for=\"exibeSidebar\"\r\n                >Mostrar en menú\r\n              </label>\r\n            </div>\r\n            <div class=\"custom-control custom-checkbox\">\r\n              <input\r\n                type=\"checkbox\"\r\n                class=\"custom-control-input\"\r\n                id=\"exibeNovaAba\"\r\n                formControlName=\"exibeNovaAba\"\r\n              >\r\n              <label\r\n                class=\"custom-control-label\"\r\n                for=\"exibeNovaAba\"\r\n                >Abrir en nueva pestaña</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"descricao\">Descripción de Actividades</label>\r\n            <textarea\r\n              id=\"descricao\"\r\n              class=\"w-100\"\r\n              class=\"form-control\"\r\n              rows=\"4\"\r\n              formControlName=\"descricao\"\r\n              [ngClass]=\"onFieldRequired('descricao')\"\r\n              >\r\n            </textarea>\r\n            <invalid-form-control [show]=\"onFieldInvalid('descricao')\" message=\"La descripción de actividades es obligatorio\"></invalid-form-control>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</app-body>";
      /***/
    },

    /***/
    "oTV0":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/admin/atividades/lista/lista.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function oTV0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fa-check {\n  color: green;\n}\n\n.fa-ban {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hdGl2aWRhZGVzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hdGl2aWRhZGVzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWNoZWNrIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5mYS1iYW4ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "oh7U":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/admin/atividades/lista/lista.component.ts ***!
      \*******************************************************************/

    /*! exports provided: AdminAtividadesListaComponent */

    /***/
    function oh7U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminAtividadesListaComponent", function () {
        return AdminAtividadesListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "OMfy");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "oTV0");
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


      var _services_atividades_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/atividades.service */
      "UNg1");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../modulos/services/modulos.service */
      "RbS/");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var _submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../submodulos/services/submodulos.service */
      "hMv8");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r"); //angular
      //rxjs
      //services


      var AdminAtividadesListaComponent = /*#__PURE__*/function () {
        function AdminAtividadesListaComponent(service, moduloService, submoduloService, pnotify, route, formBuilder, activatedRoute, routerService, dateService) {
          _classCallCheck(this, AdminAtividadesListaComponent);

          this.service = service;
          this.moduloService = moduloService;
          this.submoduloService = submoduloService;
          this.pnotify = pnotify;
          this.route = route;
          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.routerService = routerService;
          this.dateService = dateService;
          this.appTitle = "Lista de atividades";
          this.loading = true;
          this.loadingNavBar = false;
          this.loadingModulo = false;
          this.loadingSubmodulo = false;
          this.loadingTipoAtividade = false;
          this.modulos = [];
          this.submodulos = [];
          this.tipoAtividade = [];
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/admin/home'
          }, {
            descricao: 'Lista de atividades'
          }];
          this.situacao = [{
            id: 1,
            nome: 'Ativo'
          }, {
            id: 0,
            nome: 'Inativo'
          }];
          /* Pagination */

          this.itemsPerPage = 100;
          this.totalItems = 10;
          this.currentPage = 1;
        }

        _createClass(AdminAtividadesListaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.getTipoAtividade();
            this.getModulos();
            this.getSubmodulos();
            /* this.atividadesService
              .registrarAcesso()
              .subscribe() */
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _a;

            (_a = this.$activatedRouteSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this8 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _response = _this8.routerService.getBase64UrlParams(response);

              if (_response === null || _response === void 0 ? void 0 : _response.registrosPorPagina) {
                _this8.itemsPerPage = _response === null || _response === void 0 ? void 0 : _response.registrosPorPagina;
              }

              _this8.form.patchValue(_response);

              _this8.getAtividades(_this8.getParams());
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter() {
            this.form.get('t').setValue(new Date().getTime());
            this.form.get('pagina').setValue(1);
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              nome: [null],
              moduloId: [null],
              submoduloId: [null],
              tipoAtividadeId: [null],
              situacao: [null],
              registrosPorPagina: [100],
              pagina: [1],
              t: [null]
            });
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: "/admin/home"
            }, {
              descricao: this.appTitle
            }];
          }
        }, {
          key: "getAtividades",
          value: function getAtividades(params) {
            var _this9 = this;

            if (!this.loading) {
              this.loadingNavBar = true;
            }

            this.service.getAtividades(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this9.loading = false;
              _this9.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                _this9.data = [];
                _this9.noResult = true;

                _this9.pnotify.notice('Não houve retorno para sua consulta');

                return;
              }

              _this9.noResult = false;
              _this9.data = response.body['data'];
              _this9.totalItems = response.body['total'];
            }, function (error) {
              _this9.data = [];
              _this9.noResult = true;

              _this9.pnotify.error();
            });
          }
        }, {
          key: "getTipoAtividade",
          value: function getTipoAtividade() {
            var _this10 = this;

            this.loadingTipoAtividade = false;
            this.service.getTipoAtividade().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this10.loadingTipoAtividade = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this10.tipoAtividade = response.body['data'];
              }
            });
          }
        }, {
          key: "getModulos",
          value: function getModulos(params) {
            var _this11 = this;

            this.loadingModulo = true;
            this.moduloService.getModulos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this11.loadingModulo = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this11.modulos = response.body['data'];
              }
            });
          }
        }, {
          key: "getSubmodulos",
          value: function getSubmodulos(params) {
            var _this12 = this;

            this.loadingSubmodulo = true;
            this.submoduloService.getSubModulos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
              _this12.loadingSubmodulo = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this12.submodulos = response.body['data'];
              }
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('pagina').setValue(event.page);
            this.form.get('t').setValue(new Date().getTime());
            this.route.navigate([], {
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
                if (Number.isInteger(_obj[prop])) _params[prop] = parseInt(_obj[prop]);
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
          }
        }]);

        return AdminAtividadesListaComponent;
      }();

      AdminAtividadesListaComponent.ctorParameters = function () {
        return [{
          type: _services_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AdminAtividadesService"]
        }, {
          type: _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__["AdminModulosService"]
        }, {
          type: _submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_11__["AdminSubModulosService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]
        }];
      };

      AdminAtividadesListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'admin-atividades-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_atividades_service__WEBPACK_IMPORTED_MODULE_7__["AdminAtividadesService"], _modulos_services_modulos_service__WEBPACK_IMPORTED_MODULE_9__["AdminModulosService"], _submodulos_services_submodulos_service__WEBPACK_IMPORTED_MODULE_11__["AdminSubModulosService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_10__["RouterService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_12__["DateService"]])], AdminAtividadesListaComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=atividades-atividades-module-es5.js.map