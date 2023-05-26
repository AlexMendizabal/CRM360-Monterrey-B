(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analise-frete-analise-frete-module"], {
    /***/
    "pvtc":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/analise-frete-routing.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: LogisticaDashboardsAnaliseFreteRoutingModule */

    /***/
    function pvtc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsAnaliseFreteRoutingModule", function () {
        return LogisticaDashboardsAnaliseFreteRoutingModule;
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
        path: '',
        redirectTo: 'v1',
        pathMatch: 'full'
      }, {
        path: 'v1',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | v1-v1-module */
          [__webpack_require__.e("default~agenda-agenda-module~amarracao-materiais-amarracao-materiais-module~classes-materiais-classe~86f90bd3"), __webpack_require__.e("default~agenda-agenda-module~analise-compras-multi-visoes-analise-compras-multi-visoes-module~client~096e86ab"), __webpack_require__.e("common"), __webpack_require__.e("v1-v1-module")]).then(__webpack_require__.bind(null,
          /*! ./v1/v1.module */
          "NQzL")).then(function (m) {
            return m.V1Module;
          });
        }
      }, {
        path: 'v2',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | v2-v2-module */
          [__webpack_require__.e("common"), __webpack_require__.e("v2-v2-module")]).then(__webpack_require__.bind(null,
          /*! ./v2/v2.module */
          "i/to")).then(function (m) {
            return m.V2Module;
          });
        }
      }];

      var LogisticaDashboardsAnaliseFreteRoutingModule = function LogisticaDashboardsAnaliseFreteRoutingModule() {
        _classCallCheck(this, LogisticaDashboardsAnaliseFreteRoutingModule);
      };

      LogisticaDashboardsAnaliseFreteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogisticaDashboardsAnaliseFreteRoutingModule);
      /***/
    },

    /***/
    "qfT3":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/logistica/dashboards/analise-frete/analise-frete.module.ts ***!
      \************************************************************************************/

    /*! exports provided: LogisticaDashboardsAnaliseFreteModule */

    /***/
    function qfT3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaDashboardsAnaliseFreteModule", function () {
        return LogisticaDashboardsAnaliseFreteModule;
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


      var _analise_frete_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./analise-frete-routing.module */
      "pvtc");

      var LogisticaDashboardsAnaliseFreteModule = function LogisticaDashboardsAnaliseFreteModule() {
        _classCallCheck(this, LogisticaDashboardsAnaliseFreteModule);
      };

      LogisticaDashboardsAnaliseFreteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _analise_frete_routing_module__WEBPACK_IMPORTED_MODULE_3__["LogisticaDashboardsAnaliseFreteRoutingModule"]]
      })], LogisticaDashboardsAnaliseFreteModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=analise-frete-analise-frete-module-es5.js.map