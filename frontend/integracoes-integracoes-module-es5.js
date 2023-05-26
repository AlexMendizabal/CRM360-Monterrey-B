(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["integracoes-integracoes-module"], {
    /***/
    "2f4J":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/integracoes-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ComercialIntegracoesRoutingModule */

    /***/
    function f4J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesRoutingModule", function () {
        return ComercialIntegracoesRoutingModule;
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

      var routes = [{
        path: 'dagda/:idSubModulo',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dagda-dagda-module */
          [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~f54b2fc7"), __webpack_require__.e("default~akna-akna-module~associacoes-associacoes-module~auditoria-auditoria-module~cadastros-cadastr~23b8dc33"), __webpack_require__.e("common"), __webpack_require__.e("dagda-dagda-module")]).then(__webpack_require__.bind(null,
          /*! ./dagda/dagda.module */
          "eAeO")).then(function (m) {
            return m.ComercialIntegracoesDagdaModule;
          });
        }
      }, {
        path: 'arcelor-mittal/:idSubModulo',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | arcelor-mittal-arcelor-mittal-module */
          [__webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~ef4b4f0e"), __webpack_require__.e("default~agenda-agenda-module~akna-akna-module~arcelor-mittal-arcelor-mittal-module~auditoria-auditor~cb57d398"), __webpack_require__.e("arcelor-mittal-arcelor-mittal-module")]).then(__webpack_require__.bind(null,
          /*! ./arcelor-mittal/arcelor-mittal.module */
          "gKH1")).then(function (m) {
            return m.ComercialIntegracoesArcelorMittalModule;
          });
        }
      }];

      var ComercialIntegracoesRoutingModule = function ComercialIntegracoesRoutingModule() {
        _classCallCheck(this, ComercialIntegracoesRoutingModule);
      };

      ComercialIntegracoesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialIntegracoesRoutingModule);
      /***/
    },

    /***/
    "QayE":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/comercial/integracoes/integracoes.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ComercialIntegracoesModule */

    /***/
    function QayE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialIntegracoesModule", function () {
        return ComercialIntegracoesModule;
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


      var _integracoes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./integracoes-routing.module */
      "2f4J");

      var ComercialIntegracoesModule = function ComercialIntegracoesModule() {
        _classCallCheck(this, ComercialIntegracoesModule);
      };

      ComercialIntegracoesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _integracoes_routing_module__WEBPACK_IMPORTED_MODULE_3__["ComercialIntegracoesRoutingModule"]]
      })], ComercialIntegracoesModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=integracoes-integracoes-module-es5.js.map