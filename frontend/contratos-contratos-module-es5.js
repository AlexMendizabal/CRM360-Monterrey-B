(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contratos-contratos-module"], {
    /***/
    "5Sp0":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/contratos/contratos-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: ComercialKanbanContratosRoutingModule */

    /***/
    function Sp0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialKanbanContratosRoutingModule", function () {
        return ComercialKanbanContratosRoutingModule;
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


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lista/lista.component */
      "y06A"); // Components


      var routes = [{
        path: '',
        children: [{
          path: 'lista',
          component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_3__["ComercialKanbanContratosListaComponent"]
        }, {
          path: '',
          redirectTo: 'lista',
          pathMatch: 'full'
        }]
      }];

      var ComercialKanbanContratosRoutingModule = /*#__PURE__*/_createClass(function ComercialKanbanContratosRoutingModule() {
        _classCallCheck(this, ComercialKanbanContratosRoutingModule);
      });

      ComercialKanbanContratosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ComercialKanbanContratosRoutingModule);
      /***/
    },

    /***/
    "7HvY":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/termo-responsabilidade/termo-responsabilidade.component.scss ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HvY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy90ZXJtby1yZXNwb25zYWJpbGlkYWRlL3Rlcm1vLXJlc3BvbnNhYmlsaWRhZGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "7v+t":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/comercial/kanban/contratos/lista/lista.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<!-- <loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen> -->\r\n<app-header appTitle=\"Kanban Contratos\">\r\n  <button\r\n    type=\"button\"\r\n    (click)= 'onRefresh();'>\r\n    Atualizar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    (click)=\"onFilter()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" >\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"form\" autocomplete=\"off\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-lg-1\">\r\n              <label for=\"dataInicial\">Data Inicial</label>\r\n              <input\r\n              class=\"form-control\"\r\n              id=\"dataInicial\"\r\n              type=\"text\"\r\n              formControlName=\"dataInicial\"\r\n              bsDatepicker\r\n              [ngClass]=\"onFieldError('dataInicial') + ' ' + onFieldRequired('dataInicial')\">\r\n\r\n            </div>\r\n            <div class=\"form-group col-lg-1\">\r\n              <label for=\"dataFinal\">Data final</label>\r\n              <input\r\n              class=\"form-control\"\r\n              id=\"dataFinal\"\r\n              type=\"text\"\r\n              formControlName=\"dataFinal\"\r\n              bsDatepicker\r\n              [ngClass]=\"onFieldError('dataFinal') + ' ' + onFieldRequired('dataFinal')\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-1\">\r\n              <label for=\"codSituacao\">Situação</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                id=\"codSituacao\"\r\n                formControlName=\"codSituacao\">\r\n                <option selected value=\"\">Todos</option>\r\n                <option value=\"0\">Inativos</option>\r\n                <option value=\"1\">Ativos</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-4\">\r\n              <label for=\"codVendedor\">Por vendedor</label>\r\n                    <ng-select\r\n                      type='text'\r\n                      [searchable]=\"true\"\r\n                      [clearable]=\"false\"\r\n                      [items]=\"vendedores\"\r\n                      [virtualScroll]=\"true\"\r\n                      [hideSelected]=\"true\"\r\n                      [closeOnSelect]=\"true\"\r\n                      placeholder=\"Selecione...\"\r\n                      bindLabel=\"nome\"\r\n                      bindValue=\"id\"\r\n                      formControlName=\"codVendedor\"\r\n                    >\r\n\r\n                        <invalid-form-control\r\n                        [show]=\"onFieldInvalid('codVendedor')\"\r\n                        message=\"Descrição é obrigatório.\">\r\n                        </invalid-form-control>\r\n                    </ng-select>\r\n                </div>\r\n\r\n            <div class=\"form-group col-lg-3\">\r\n              <label for=\"codGerencia\">Por gerência</label>\r\n              <ng-select\r\n                      [searchable]=\"true\"\r\n                      [clearable]=\"false\"\r\n                      [items]=\"coordenadores\"\r\n                      [virtualScroll]=\"true\"\r\n                      [hideSelected]=\"true\"\r\n                      [closeOnSelect]=\"true\"\r\n                      placeholder=\"Selecione...\"\r\n                      bindLabel=\"nome\"\r\n                      bindValue=\"matricula\"\r\n                      formControlName=\"codGerencia\"\r\n                    >\r\n\r\n                  <invalid-form-control\r\n                  [show]=\"onFieldInvalid('codGerencia')\" message=\"Descrição é obrigatório.\">\r\n                  </invalid-form-control>\r\n              </ng-select>\r\n            </div>\r\n\r\n            <div class=\"form-group col-lg-2\">\r\n              <label for=\"codLinha\">Linha</label>\r\n              <ng-select\r\n                [closeOnSelect]=\"true\"\r\n                [items]=\"linhas\"\r\n                formControlName=\"codLinha\"\r\n                [virtualScroll]=\"true\"\r\n                labelForId=\"codLinha\"\r\n                bindLabel=\"descricao\"\r\n                bindValue=\"id\">\r\n              </ng-select>\r\n            </div>\r\n\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<div class=\"row mt-4\" *ngIf=\"this.contratos && dadosEmpty\">\r\n\r\n  <div class=\"col-3\"></div>\r\n\r\n  <div class=\"col-2\">\r\n    <h6 class='text-center'>CONTRATOS</h6>\r\n  <div\r\n  class=\"ml-3 border border-success rounded border-top-0 border-right-0 border-bottom-0 \"\r\n  style=\"background-color: rgb(249, 252, 252);\"\r\n  *ngFor=\"let item of contratos\"\r\n  [class.border-danger]=\"item.tempo > 10\"\r\n  [class.border-warning]=\"item.tempo > 5 && item.tempo <= 10\"\r\n  [class.border-success]=\"item.tempo <= 5\"\r\n  [tooltip]=\"tooltipAutoScrollTemplate\">\r\n    <div class=\"card-body mb-2 cartao\" >\r\n      <strong >#{{ item.contrato }} - {{ item.cliente }}</strong><br>\r\n      <span>{{ item.linha }}</span><br>\r\n      <span>{{ item.peso }}kg </span><br>\r\n      <span>{{ item.vendedor }}</span><br>\r\n      <span>{{ item.unidade }}</span>\r\n    </div>\r\n    <ng-template #tooltipAutoScrollTemplate>\r\n      <p class=\"mt-3 mb-0\"><b>TEMPO NO STATUS - {{ item.tempo }} DIAS</b></p>\r\n      <p class=\"text-nowrap mb-0\"><br><br></p>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-2\">\r\n  <h6 class='text-center'>QTDADE FATURADA</h6>\r\n  <div\r\n  class=\"ml-3 border border-danger rounded border-top-0 border-right-0 border-bottom-0\"\r\n  style=\"background-color: rgb(249, 252, 252);\"\r\n  *ngFor=\"let item of faturados\"\r\n  [class.border-danger]=\"item.tempo > 10\"\r\n  [class.border-warning]=\"item.tempo > 5 && item.tempo <= 10\"\r\n  [class.border-success]=\"item.tempo <= 5\">\r\n    <div class=\"card-body mb-2 cartao\" style='text-align: center;'>\r\n      <br>\r\n      <br>\r\n      <strong>{{ item.quantidade }}</strong><br>\r\n      <br>\r\n      <br>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-2\">\r\n  <h6 class='text-center'>QTDADE PENDENTE</h6>\r\n  <div\r\n  class=\"ml-3 border border-danger rounded border-top-0 border-right-0 border-bottom-0\"\r\n  style=\"background-color: rgb(249, 252, 252);\"\r\n  *ngFor=\"let item of pendentes\"\r\n  [class.border-danger]=\"item.tempo > 10\"\r\n  [class.border-warning]=\"item.tempo > 5 && item.tempo <= 10\"\r\n  [class.border-success]=\"item.tempo <= 5\">\r\n    <div class=\"card-body mb-2 cartao\" style='text-align: center;'>\r\n      <br>\r\n      <br>\r\n      <strong>{{ item.quantidade }}</strong><br>\r\n      <br>\r\n      <br>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"col-3\"></div>\r\n\r\n</div>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "A6pt":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/termo-devolucao/termo-devolucao.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A6pt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy90ZXJtby1kZXZvbHVjYW8vdGVybW8tZGV2b2x1Y2FvLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "E15D":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/contratos/contratos.service.ts ***!
      \*************************************************************************/

    /*! exports provided: ComercialKanbanContratosService */

    /***/
    function E15D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialKanbanContratosService", function () {
        return ComercialKanbanContratosService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/comercial/comercial.service */
      "VgqD"); // Services


      var ComercialKanbanContratosService = /*#__PURE__*/function () {
        function ComercialKanbanContratosService(http, comercialService) {
          _classCallCheck(this, ComercialKanbanContratosService);

          this.http = http;
          this.comercialService = comercialService;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/kanban/contratos/";
        }

        _createClass(ComercialKanbanContratosService, [{
          key: "getCards",
          value: function getCards(params) {
            var contratos = this.getContratos(params);
            var faturados = this.getFaturados(params);
            var pendentes = this.getPendentes(params);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([contratos, faturados, pendentes]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          }
        }, {
          key: "getContratos",
          value: function getContratos() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/contratos-vigentes"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getFaturados",
          value: function getFaturados() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/quantidade-faturada"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }, {
          key: "getPendentes",
          value: function getPendentes() {
            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();

            for (var param in params) {
              httpParams = httpParams.append(param, params[param]);
            }

            return this.http.get("".concat(this.API, "/quantidade-pendente"), {
              params: httpParams
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2));
          }
        }]);

        return ComercialKanbanContratosService;
      }();

      ComercialKanbanContratosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]
        }];
      };

      ComercialKanbanContratosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_modules_comercial_comercial_service__WEBPACK_IMPORTED_MODULE_5__["ComercialService"]])], ComercialKanbanContratosService);
      /***/
    },

    /***/
    "JYNX":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/termo-responsabilidade/termo-responsabilidade.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JYNX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Termo de Responsabilidade\">\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"tipoVisao == 'formulario'\"\r\n    [disabled]=\"!form.valid\"\r\n    (click)=\"onSubmit()\">\r\n    Gerar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"tipoVisao == 'ficha'\"\r\n    (click)=\"onCancel()\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"tipoVisao == 'ficha'\"\r\n    (click)=\"onDownload()\">\r\n    Download\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center\" *ngIf=\"tipoVisao == 'formulario'\">\r\n    <div class=\"col-12\" >\r\n      <h1>Termo de Responsabilidade</h1>\r\n      <form  [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0\">\r\n            <div class=\"mtc-title\">Dados da Empresa</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_EMPR\">Nome</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_EMPR\"\r\n            formControlName=\"NM_EMPR\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"CD_EMPR_CNPJ\">CNPJ </label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"CD_EMPR_CNPJ\"\r\n            formControlName=\"CD_EMPR_CNPJ\"\r\n            cnpj [textMask]=\"{ mask: MASKS.cnpj.textMask }\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"DS_EMPR_ENDE\">Endereço</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"DS_EMPR_ENDE\"\r\n            formControlName=\"DS_EMPR_ENDE\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_EMPR_BAIR\">Bairro</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_EMPR_BAIR\"\r\n            formControlName=\"NM_EMPR_BAIR\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_EMPR_CIDA\">Cidade</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_EMPR_CIDA\"\r\n            formControlName=\"NM_EMPR_CIDA\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_EMPR_ESTA\">Estado</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_EMPR_ESTA\"\r\n            formControlName=\"NM_EMPR_ESTA\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0\">\r\n            <hr class=\"mt-0\">\r\n            <div class=\"mtc-title\">Dados do Funcionario</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"NM_FUNC\">Nome</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_FUNC\"\r\n            formControlName=\"NM_FUNC\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"CD_USUA_CPF\">CPF</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"CD_USUA_CPF\"\r\n            formControlName=\"CD_USUA_CPF\"\r\n            cpf [textMask]=\"{ mask: MASKS.cpf.textMask }\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"CD_USUA_RG\">RG</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"CD_USUA_RG\"\r\n            formControlName=\"CD_USUA_RG\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"DS_USUA_ENDE\">Endereço</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"DS_USUA_ENDE\"\r\n            formControlName=\"DS_USUA_ENDE\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_FUNC_BAIR\">Bairro</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_FUNC_BAIR\"\r\n            formControlName=\"NM_FUNC_BAIR\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_FUNC_CIDA\">Cidade</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_FUNC_CIDA\"\r\n            formControlName=\"NM_FUNC_CIDA\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_FUNC_ESTA\">Estado</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_FUNC_ESTA\"\r\n            formControlName=\"NM_FUNC_ESTA\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div formArrayName=\"objetos\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0\">\r\n              <hr class=\"mt-0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n              <div class=\"mtc-title\">Equipamentos/Linhas</div>\r\n              <div>\r\n                <a\r\n                  class=\"text-secondary\"\r\n                  (click)=\"onAddObjeto()\"\r\n                  href=\"javascript:void(0)\">\r\n                  <b>Adicionar</b>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\"  *ngFor=\"let item of objetos.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col mb-0\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-2\">\r\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                    <label class=\"my-auto\" for=\"CD_ITEM\">Código do Objeto</label>\r\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\r\n                      <a\r\n                        class=\"text-primary\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"openModal(pesquisaDeItens, i)\">\r\n                        <strong>Selecionar</strong>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"CD_ITEM\"\r\n                  formControlName=\"CD_ITEM\"\r\n                  (input)=\"onInput()\"\r\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'CD_ITEM') + ' ' + onNestedFieldRequired('objetos', i, 'CD_ITEM')\">\r\n                </div>\r\n                <div class=\"form-group col-6\">\r\n                  <label for=\"NM_PROD\">Produto</label>\r\n                  <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"NM_PROD\"\r\n                  formControlName=\"NM_PROD\"\r\n                  (input)=\"onInput()\"\r\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'NM_PROD') + ' ' + onNestedFieldRequired('objetos', i, 'NM_PROD')\">\r\n                </div>\r\n                <div class=\"form-group col-1\">\r\n                  <label for=\"quantidadeObj\">Quantidade</label>\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control\"\r\n                    id=\"quantidadeObj\"\r\n                    formControlName=\"quantidadeObj\"\r\n                    (input)=\"onInput()\"\r\n                    [ngClass]=\"onNestedFieldError('objetos', i, 'quantidadeObj') + ' ' + onNestedFieldRequired('objetos', i, 'quantidadeObj')\">\r\n                </div>\r\n                <div class=\"form-group col-2\">\r\n                  <label for=\"VL_ITEM\">Valor</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"valorObj\"\r\n                    formControlName=\"VL_ITEM\"\r\n                    currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n                    (input)=\"onInput()\"\r\n                    [ngClass]=\"onNestedFieldError('objetos', i, 'VL_ITEM') + ' ' + onNestedFieldRequired('objetos', i, 'VL_ITEM')\">\r\n                </div>\r\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteObjeto(i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <ng-template #pesquisaDeItens>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Pesquisa de Itens</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingItens\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formPesquisaItem\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"ID_TECN_INFO_ITEM\" selected>ID</option>\r\n                <option value=\"CD_ITEM\">Código/Nº Série</option>\r\n                <option value=\"NM_PROD\">Produto</option>\r\n                <option value=\"DS_CONT\">Contrato</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  (keyup.enter)=\"getItens()\"\r\n                >\r\n                <div class=\"input-group-append\">\r\n                  <span\r\n                    class=\"input-group-text hover\"\r\n                    (click)=\"getItens()\"\r\n                  >\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!loadingItens && (itens.length > 0)\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Código/Nº Série</th>\r\n            <th>Produto</th>\r\n            <th>Contrato</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of itens\">\r\n            <td>{{ item.ID_TECN_INFO_ITEM }}</td>\r\n            <td>{{ item.CD_ITEM }}</td>\r\n            <td>{{ item.NM_PROD }}</td>\r\n            <td>{{ item.DS_CONT }}</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Item\"\r\n                container=\"body\"\r\n                (click)=\"setObjetos(item);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n  </ng-template>\r\n  <div class=\"row justify-content-center pt-5 uk-margin-top\" id=\"termo-responsabilidade\" *ngIf=\"tipoVisao == 'ficha'\" >\r\n    <div class=\" row justify-content-center col-10 \">\r\n      <h1 >TERMO DE RESPONSABILIDADE</h1><br>\r\n      <div>\r\n        <div class=\" mt-5 pt-5\">\r\n          Pelo presente instrumento particular e na melhor forma de direito, \r\n          as partes a seguir qualificadas de um lado, a empresa {{dataFicha.NM_EMPR | uppercase}} \r\n          inscrita no CNPJ/MF sob. Nº {{dataFicha.CD_EMPR_CNPJ | cnpj }}, com sede social na, {{dataFicha.DS_EMPR_ENDE | uppercase }},\r\n          bairro {{dataFicha.NM_EMPR_BAIR | uppercase}}, na cidade de {{dataFicha.NM_EMPR_CIDA | uppercase}}, Estado de {{dataFicha.NM_EMPR_ESTA | uppercase}} , neste ato, representada pelo seu responsável\r\n          legal, doravante, designada COMODANTE e de outro lado, {{dataFicha.NM_FUNC | uppercase}} , portador do CPF nº {{dataFicha.CD_USUA_CPF}} e do\r\n          RG nº {{dataFicha.CD_USUA_RG}} residente e domiciliado na {{dataFicha.DS_USUA_ENDE | uppercase}} , {{dataFicha.DS_USUA_BAIR | uppercase}} na \r\n          cidade de, {{dataFicha.DS_USUA_CIDA | uppercase}} no Estado de {{dataFicha.NM_FUNC_ESTA | uppercase}}, designado COMODATÁRIO, decidem celebrar o \r\n          presente CONTRATO DE COMODATO DE EQUIPAMENTO, comprometendo-se cada uma das partes perante a outra a cumprir\r\n          por si e seus sucessores e herdeiros as seguintes cláusulas e condições\r\n        </div><br>\r\n        <div>\r\n          1. DO OBJETO.\r\n        </div><br>\r\n        <div>\r\n          1.1  O presente contrato tem com objeto, a teor dos artigos 579 e seguintes do Código Civil\r\n          Brasileiro, o comodato do equipamento abaixo discriminado, que a COMODANTE cede ao COMODATÁRIO de forma gratuita, a saber: \r\n        </div><br>\r\n        <div>\r\n          <div *ngIf=\"dataFicha.objetos.length == 0\">NÃO INFORMADO</div>\r\n          <div *ngIf=\"dataFicha.objetos.length > 0\">\r\n            <div class=\"row mt-2 col-12\" *ngFor=\"let item of dataFicha.objetos\">\r\n              <div class=\"col-8\">\r\n                <p class=\"mt-2 mb-0\">\r\n                  <strong class=\"mr-2\">Produto:</strong>\r\n                  <span *ngIf=\"item.NM_PROD == null\">NÃO INFORMADO</span>\r\n                  <span *ngIf=\"item.NM_PROD != null\">{{ item.NM_PROD | uppercase }} ({{ item.CD_ITEM }})</span>\r\n                </p>\r\n              </div>\r\n              <div class=\"col-1 mr-5\">\r\n                <p class=\"mt-2 mb-2\">\r\n                  <strong class=\"mr-2\">Quantidade:</strong>\r\n                  <span *ngIf=\"item.quantidadeObj == null\">NÃO INFORMADO</span>\r\n                  <span *ngIf=\"item.quantidadeObj != null\">{{ item.quantidadeObj }}</span>\r\n                </p>\r\n              </div>\r\n              <div class=\"col-2\">\r\n                <p class=\"mt-2 mb-2\">\r\n                  <strong class=\"mr-2\">Valor:</strong>\r\n                  <span *ngIf=\"item.VL_ITEM == null\">NÃO INFORMADO</span>\r\n                  <span *ngIf=\"item.VL_ITEM != null\">{{ item.VL_ITEM | currency:'BRL':'symbol':'1.2-2'}}</span>\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <hr width = “2” size = “100”>\r\n          </div>\r\n        </div><br>\r\n        <div>\r\n          1.2  O COMODATÁRIO declara, neste ato, ter recebido o equipamento acima\r\n          descrito em perfeito estado de funcionamento (novo), conservação e limpeza, obrigando-se, \r\n          assim, a conservá-lo e restituí-lo, ao término deste comodato, conforme disposto neste contrato.\r\n        </div><br>\r\n        <div>\r\n          1.3  A finalidade do presente comodato é a utilização do equipamento pelo COMODATÁRIO com \r\n          vistas a ser utilizado no desempenho das atividades previstas no cargo ocupado por este.\r\n        </div><br>\r\n        <div>\r\n          2. DA MANUTENÇÃO E PROTEÇÃO DO EQUIPAMENTO\r\n        </div><br>\r\n        <div>\r\n          2.1  O COMODATÁRIO será responsável pela guarda, uso e manutenção do equipamento, não \r\n          podendo vendê-lo, aliená-lo, alugá-lo ou emprestá-lo a terceiros, devendo comunicar \r\n          imediatamente a COMODANTE sobre eventuais necessidades de reparo que observar. \r\n        </div><br>\r\n        <div>\r\n          2.2  Nenhum outro destino será dado ao equipamento, a não ser aquele ora pactuado,\r\n           qual seja, o desempenho das atividades profissionais junto a COMODANTE.\r\n        </div><br>\r\n        <div>\r\n          2.3  O COMODATÁRIO obriga-se a manter o equipamento em perfeito estado de funcionamento,\r\n          conservação e limpeza, para que assim seja restituído quando findo ou rescindido este\r\n          contrato, sem direito à indenização e/ou retenção do mesmo.\r\n        </div><br>\r\n        <div>\r\n          3. Dentre as outras obrigações consignadas neste instrumento, obriga-se o COMODATÁRIO \r\n          especificamente a:\r\n        </div><br>\r\n        <div>\r\n          (a) restituir o equipamento, quando for o caso, nas mesmas condições que o mesmo se \r\n          encontrava quando do início do contrato;\r\n        </div><br>\r\n        <div>\r\n          (b) não ceder, locar ou emprestar o equipamento, sem autorização prévia e por escrito\r\n           da COMODANTE, sob pena de rescisão imediata do presente contrato;\r\n        </div><br>\r\n        <div>\r\n          (c) responsabilizar-se perante a COMODANTE, na hipótese de destruição, incêndio, ou de \r\n          qualquer outro fato ou evento que, por qualquer forma, impossibilite, prejudique ou \r\n          dificulte o exercício pleno da posse e propriedade sobre os bens, desde que decorrentes \r\n          de ato culposo ou doloso. \r\n        </div><br>\r\n        <div>\r\n          Parágrafo Primeiro - Diante do previsto no item (c), o COMODATÁRIO, desde já, autoriza \r\n          a COMODANTE a efetuar descontos em seus salários ou rescisão contratual relativos aos \r\n          prejuízos em valor correspondente ao integral previsto na clausula 1.1 ou valor \r\n          equivalente a manutenção ou reparo do dano. \r\n        </div><br>\r\n        <div>\r\n          4. DO PRAZO DE RESCISÃO\r\n        </div><br>\r\n        <div>\r\n          4.1  O presente contrato entrará em vigor a partir da entrega efetiva do equipamento ao \r\n          COMODATÁRIO e vigorará pelo período necessário ao desenvolvimento das atividades \r\n          previstas no cargo ocupado por este. \r\n        </div><br>\r\n        <div>\r\n          4.2  O presente contrato poderá ser rescindido nas seguintes hipóteses:\r\n        </div><br>\r\n        <div>\r\n          (a) término do vínculo empregatício;\r\n        </div><br>\r\n        <div>\r\n          (b) alteração de cargo do COMODATÁRIO, em consonância à política adotada pela COMODANTE. \r\n        </div><br>\r\n        <div>\r\n          4.3  Em qualquer das hipóteses previstas no item 4.1, haverá a devolução imediata pelo \r\n          COMODATÁRIO do equipamento descrito no item 1.1, no mesmo estado em que o recebeu, \r\n          ressalvando o desgaste decorrente do uso normal do mesmo, sob pena de serem aplicados \r\n          os descontos relativos aos valores em suas verbas rescisórias ou salariais.\r\n        </div><br>\r\n        <div>\r\n          5. DAS DISPOSIÇÕES GERAIS\r\n        </div><br>\r\n        <div>\r\n          5.1  O COMODATÁRIO não poderá, sem o consentimento prévio e por escrito da COMODANTE, \r\n          ceder, transferir ou emprestar a terceiros, no todo ou em parte, os direitos e \r\n          obrigações decorrentes do presente contrato, bem como o veículo, objeto deste instrumento. \r\n        </div><br>\r\n        <div>\r\n          5.2  A eventual tolerância das partes na exigência do fiel cumprimento de qualquer \r\n          obrigação prevista neste instrumento ou no exercício das prerrogativas dele decorrentes \r\n          será considerada mera liberalidade, não implicando em transação, novação, alteração do \r\n          pactuado, renúncia aos respectivos termos e condições, nem afetará o direito de à \r\n          parte exercê-lo a qualquer tempo, cado a COMODANTE revise o termo acima elaborado, o COMODATÁRIO\r\n          deverá assinar desde que esteja em acordo.\r\n        </div><br><br>\r\n      </div>\r\n      <div class=\"col-11 d-flex justify-content-end pt-5\">  </div>\r\n      <div class=\"col-11 d-flex justify-content-end pt-5\">  </div>\r\n      <div class=\"col-11 d-flex justify-content-end\">{{dataFicha.NM_EMPR_CIDA | uppercase}}/{{dataFicha.NM_EMPR_ESTA | uppercase}}-{{dataFicha.dataHoje}} </div>\r\n      <div class=\"col-11 d-flex justify-content-end pt-5\">  </div>\r\n      <div class=\"col-11 d-flex justify-content-end pt-5\">_____________________________________________________</div>\r\n      <div class=\"col-11 d-flex justify-content-end\">{{dataFicha.NM_FUNC | uppercase}}</div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "MsxC":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/contratos/lista/lista.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function MsxC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .dropdown-item:hover {\n  cursor: pointer;\n}\n::ng-deep .card-title {\n  font-size: 1.05rem;\n}\n::ng-deep .cartao:hover {\n  background-color: #e6e4e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21lcmNpYWwva2FuYmFuL2NvbnRyYXRvcy9saXN0YS9saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSjtBQUVFO0VBQ0Usa0JBQUE7QUFBSjtBQUVFO0VBQ0UseUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tZXJjaWFsL2thbmJhbi9jb250cmF0b3MvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gIC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xyXG4gIH1cclxuICAuY2FydGFvOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU0ZTQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "NFDp":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/termo-devolucao/termo-devolucao.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NFDp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-navbar *ngIf=\"loaderNavbar\"></loader-spinner-navbar>\r\n<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"Termo de Devolução\">\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"tipoVisao == 'formulario'\"\r\n    [disabled]=\"!form.valid\"\r\n    (click)=\"onSubmit()\">\r\n    Gerar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"tipoVisao == 'ficha'\"\r\n    (click)=\"onCancel()\">\r\n    Cancelar\r\n  </button>\r\n  <button\r\n    type=\"button\"\r\n    *ngIf=\"tipoVisao == 'ficha'\"\r\n    (click)=\"onDownload()\">\r\n    Download\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <div class=\"row justify-content-center\" *ngIf=\"tipoVisao == 'formulario'\">\r\n    <div class=\"col-12\" >\r\n      <h1>Termo de Devolução</h1>\r\n      <form  [formGroup]=\"form\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0\">\r\n            <div class=\"mtc-title\">Dados do Comodante</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_EMPR\">Nome</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_EMPR\"\r\n            formControlName=\"NM_EMPR\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"CD_EMPR_CNPJ\">CNPJ </label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"CD_EMPR_CNPJ\"\r\n            formControlName=\"CD_EMPR_CNPJ\"\r\n            cnpj [textMask]=\"{ mask: MASKS.cnpj.textMask }\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"DS_EMPR_ENDE\">Endereço</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"DS_EMPR_ENDE\"\r\n            formControlName=\"DS_EMPR_ENDE\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_EMPR_BAIR\">Bairro</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_EMPR_BAIR\"\r\n            formControlName=\"NM_EMPR_BAIR\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_EMPR_CIDA\">Cidade</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_EMPR_CIDA\"\r\n            formControlName=\"NM_EMPR_CIDA\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_EMPR_ESTA\">Estado</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_EMPR_ESTA\"\r\n            formControlName=\"NM_EMPR_ESTA\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col mb-0\">\r\n            <hr class=\"mt-0\">\r\n            <div class=\"mtc-title\">Dados do Comodatário</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col\">\r\n            <label for=\"NM_FUNC\">Nome</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_FUNC\"\r\n            formControlName=\"NM_FUNC\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"CD_USUA_CPF\">CPF</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"CD_USUA_CPF\"\r\n            formControlName=\"CD_USUA_CPF\"\r\n            cpf [textMask]=\"{ mask: MASKS.cpf.textMask }\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"CD_USUA_RG\">RG</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"CD_USUA_RG\"\r\n            formControlName=\"CD_USUA_RG\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"DS_USUA_ENDE\">Endereço</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"DS_USUA_ENDE\"\r\n            formControlName=\"DS_USUA_ENDE\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_FUNC_BAIR\">Bairro</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_FUNC_BAIR\"\r\n            formControlName=\"NM_FUNC_BAIR\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_FUNC_CIDA\">Cidade</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_FUNC_CIDA\"\r\n            formControlName=\"NM_FUNC_CIDA\"\r\n            >\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"NM_FUNC_ESTA\">Estado</label>\r\n            <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"NM_FUNC_ESTA\"\r\n            formControlName=\"NM_FUNC_ESTA\"\r\n            >\r\n          </div>\r\n        </div>\r\n        <div formArrayName=\"objetos\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0\">\r\n              <hr class=\"mt-0\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col mb-0 d-flex justify-content-between\">\r\n              <div class=\"mtc-title\">Dados da Ocorrência</div>\r\n              <div>\r\n                <a\r\n                  class=\"text-secondary\"\r\n                  (click)=\"onAddObjeto()\"\r\n                  href=\"javascript:void(0)\">\r\n                  <b>Adicionar</b>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\"  *ngFor=\"let item of objetos.controls; let i = index\" [formGroupName]=\"i\">\r\n            <div class=\"form-group col mb-0\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-2\">\r\n                  <div class=\"mb-0 d-flex justify-content-between w-100\" style=\"height: 22px\">\r\n                    <label class=\"my-auto\" for=\"CD_ITEM\">Código do Produto</label>\r\n                    <div class=\"my-auto text-uppercase\" style=\"font-size: 10px\">\r\n                      <a\r\n                        class=\"text-primary\"\r\n                        href=\"javascript:void(0)\"\r\n                        (click)=\"openModal(pesquisaDeItens, i)\">\r\n                        <strong>Selecionar</strong>\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"CD_ITEM\"\r\n                  formControlName=\"CD_ITEM\"\r\n                  (input)=\"onInput()\"\r\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'CD_ITEM') + ' ' + onNestedFieldRequired('objetos', i, 'CD_ITEM')\">\r\n                </div>\r\n                <div class=\"form-group col-2\">\r\n                  <label for=\"NM_ITEM_TIPO\">Tipo do Produto</label>\r\n                  <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"NM_ITEM_TIPO\"\r\n                  formControlName=\"NM_ITEM_TIPO\"\r\n                  (input)=\"onInput()\"\r\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'NM_ITEM_TIPO') + ' ' + onNestedFieldRequired('objetos', i, 'NM_ITEM_TIPO')\">\r\n                </div>\r\n                <div class=\"form-group col-4\">\r\n                  <label for=\"NM_MODE\">Modelo do Produto</label>\r\n                  <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"NM_MODE\"\r\n                  formControlName=\"NM_MODE\"\r\n                  (input)=\"onInput()\"\r\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'NM_MODE') + ' ' + onNestedFieldRequired('objetos', i, 'NM_MODE')\">\r\n                </div>\r\n                <div class=\"form-group col-1\">\r\n                  <label for=\"quantidadeObj\">Quantidade</label>\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control\"\r\n                    id=\"quantidadeObj\"\r\n                    formControlName=\"quantidadeObj\"\r\n                    (input)=\"onInput()\"\r\n                    [ngClass]=\"onNestedFieldError('objetos', i, 'quantidadeObj') + ' ' + onNestedFieldRequired('objetos', i, 'quantidadeObj')\">\r\n                </div>\r\n                <div class=\"form-group col-2\">\r\n                  <label for=\"VL_ITEM\">Valor</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"valorObj\"\r\n                    formControlName=\"VL_ITEM\"\r\n                    currencyMask [options]=\"{ align: 'left', prefix: 'R$ ', thousands: '.', decimal: ',' }\"\r\n                    (input)=\"onInput()\"\r\n                    [ngClass]=\"onNestedFieldError('objetos', i, 'VL_ITEM') + ' ' + onNestedFieldRequired('objetos', i, 'VL_ITEM')\">\r\n                </div>\r\n                <div class=\"col-1 pt-4 d-flex justify-content-center\">\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn-icon\"\r\n                    (click)=\"onDeleteObjeto(i)\">\r\n                    <i class=\"fas fa-trash\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-12\">\r\n                  <label for=\"NM_PROD\">Produto</label>\r\n                  <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"NM_PROD\"\r\n                  formControlName=\"NM_PROD\"\r\n                  (input)=\"onInput()\"\r\n                  [ngClass]=\"onNestedFieldError('objetos', i, 'NM_PROD') + ' ' + onNestedFieldRequired('objetos', i, 'NM_PROD')\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-8\" >\r\n              <label>Observação</label>\r\n              <div >{{ocorrencias.DS_OBSE}}</div>\r\n            </div>\r\n            <div class=\"form-group col-md-4\" >\r\n              <label>Data de cadastro da ocorrência</label>\r\n              <div >{{ocorrencias.DT_INCL | date: 'dd/MM/yyyy HH:mm'}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <ng-template #pesquisaDeItens>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left\">Pesquisa de Itens</h4>\r\n      <div class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-border text-primary mr-2\" role=\"status\" *ngIf=\"loadingItens\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <advanced-filter>\r\n        <form [formGroup]=\"formPesquisaItem\">\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col\">\r\n              <label for=\"cdItem\">BUSCAR POR</label>\r\n              <select\r\n                class=\"form-control custom-select\"\r\n                formControlName=\"buscarPor\"\r\n              >\r\n                <option value=\"ID_TECN_INFO_ITEM\" selected>ID</option>\r\n                <option value=\"NM_PROD\">Produto</option>\r\n                <option value=\"CD_ITEM\">Código/Nº Série</option>\r\n                <option value=\"NM_ITEM_TIPO\">Tipo de Item</option>\r\n                <option value=\"NM_MODE\">Modelo</option>\r\n                <option value=\"DS_CONT\">Contrato</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col\">\r\n              <label>TERMO DE PESQUISA</label>\r\n              <div class=\"input-group\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"pesquisa\"\r\n                  (keyup.enter)=\"getItens()\"\r\n                >\r\n                <div class=\"input-group-append\">\r\n                  <span\r\n                    class=\"input-group-text hover\"\r\n                    (click)=\"getItens()\"\r\n                  >\r\n                    <i class=\"fas fa-search\"></i>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </advanced-filter>\r\n      <custom-table *ngIf=\"!loadingItens && (itens.length > 0)\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th>ID</th>\r\n            <th>Código/Nº Série</th>\r\n            <th>Produto</th>\r\n            <th>Contrato</th>\r\n            <th></th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of itens\">\r\n            <td>{{ item.ID_TECN_INFO_ITEM }}</td>\r\n            <td>{{ item.CD_ITEM }}</td>\r\n            <td>{{ item.NM_PROD}}</td>\r\n            <td>{{ item.DS_CONT }}</td>\r\n            <td>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Salvar Item\"\r\n                container=\"body\"\r\n                (click)=\"setObjetos(item);modalRef.hide()\"\r\n              >\r\n                <i class=\"far fa-save\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n  </ng-template>\r\n  <div class=\"row justify-content-center pt-5 uk-margin-top\" id=\"termo-devolucao\" *ngIf=\"tipoVisao == 'ficha'\" >\r\n    <div class=\" row justify-content-center col-10 pt-5 pb-5\">\r\n      <h1 >CONTRATO DE COMODATO</h1><br>\r\n      <div>\r\n        <div class=\" mt-5 pt-5\">\r\n          <p>\r\n            <strong>COMODANTE:</strong> {{dataFicha.NM_EMPR | uppercase}}, com sede na {{dataFicha.DS_EMPR_ENDE | uppercase }},\r\n            bairro {{dataFicha.NM_EMPR_BAIR | uppercase}}, na cidade de {{dataFicha.NM_EMPR_CIDA | uppercase}}, Estado de {{dataFicha.NM_EMPR_ESTA | uppercase}}, inscrita \r\n            no CNPJ sob o Nº{{dataFicha.CD_EMPR_CNPJ | cnpj }}.\r\n          </p>\r\n          <p>\r\n            <strong>COMODATÁRIO: </strong>{{dataFicha.NM_FUNC | uppercase}}, (estado civil), (profissão), portador da cédula de identidade R.G. nº {{dataFicha.CD_USUA_RG}}, e CPF/MF nº {{dataFicha.CD_USUA_CPF}}, residente e \r\n            domiciliado na residente e domiciliado na {{dataFicha.DS_USUA_ENDE | uppercase}} , {{dataFicha.DS_USUA_BAIR | uppercase}} na \r\n            cidade de, {{dataFicha.NM_FUNC_CIDA | uppercase}} no Estado de {{dataFicha.NM_FUNC_ESTA | uppercase}}, registro nº {{dataFicha.NR_MATR}}, sob a gestão de (nome do Gestor);\r\n          </p>\r\n          <p>\r\n            As partes acima identificadas acordam com o presente Contrato de Comodato de Equipamentos, que se regerá pelas cláusulas seguintes:\r\n          </p>\r\n          <br>\r\n          <p class=\"pt-3\">\r\n            <strong><u>DO OBJETO DO CONTRATO</u></strong>\r\n          </p>\r\n          <p>\r\n            Cláusula 1ª. O OBJETO do presente instrumento é a transferência, pela COMODANTE ao COMODATÁRIO, dos direitos de uso e gozo dos equipamentos e computadores descritos a seguir:\r\n          </p>\r\n          <div *ngIf=\"dataFicha.objetos.length == 0\" class=\"pt-3\">NÃO INFORMADO</div>\r\n          <div *ngIf=\"dataFicha.objetos.length > 0\" class=\"pt-3\">\r\n            <div class=\"row mt-0 col-12\" *ngFor=\"let item of dataFicha.objetos\">\r\n              <div class=\"col-8\">\r\n                <p class=\"mt-0 mb-0\">\r\n                  <strong class=\"mr-2\">Produto:</strong>\r\n                  <span *ngIf=\"item.NM_PROD == null\">NÃO INFORMADO</span>\r\n                  <span *ngIf=\"item.NM_PROD != null\">{{ item.NM_PROD | uppercase }}</span>\r\n                </p>\r\n              </div>\r\n              <div class=\"col-1 mr-5\">\r\n                <p class=\"mt-0 mb-2\">\r\n                  <strong class=\"mr-2\">Quantidade:</strong>\r\n                  <span *ngIf=\"item.quantidadeObj == null\">NÃO INFORMADO</span>\r\n                  <span *ngIf=\"item.quantidadeObj != null\">{{ item.quantidadeObj }}</span>\r\n                </p>\r\n              </div>\r\n              <div class=\"col-2\">\r\n                <p class=\"mt-0 mb-2\">\r\n                  <strong class=\"mr-2\">Valor:</strong>\r\n                  <span *ngIf=\"item.VL_ITEM == null\">NÃO INFORMADO</span>\r\n                  <span *ngIf=\"item.VL_ITEM != null\">{{ item.VL_ITEM | currency:'BRL':'symbol':'1.2-2'}}</span>\r\n                </p>\r\n              </div>\r\n            </div>\r\n            <hr width = “2” size = “100”>\r\n          </div>\r\n          <br>\r\n          <p class=\"pt-3\">\r\n            <strong><u>DO USO E DAS OBRIGAÇÕES DO COMODATÁRIO</u></strong>\r\n          </p>\r\n          <p>\r\n            Cláusula 2ª. Os equipamentos, objeto deste contrato, deverão ser utilizados somente, pelo COMODATÁRIO, não devendo serem utilizados para fins pessoais.\r\n          </p>\r\n          <p>\r\n            Cláusula 3ª. O COMODATÁRIO deverá utilizar o equipamento e devolve-lo nas mesmas condições em que o recebeu - a <strong>{{dataFicha.NM_EMPR | uppercase}}</strong> irá avaliar o objeto quando da devolução.\r\n          </p>\r\n          <p>\r\n            Cláusula 4ª. O COMODATÁRIO de compromete a não ceder, transferir ou emprestar o equipamento a terceiros, assim como a ressarcir à <strong>{{dataFicha.NM_EMPR | uppercase}}</strong>  o valor correspondente ao custo com reparos, caso o equipamento empresado sofra qualquer tipo de dano; \r\n          </p>\r\n          <p>\r\n            Cláusula 5ª. Em caso de perda, o COMODATÁRIO deverá adquirir e restituir à <strong>{{dataFicha.NM_EMPR | uppercase}}</strong>, qualquer que seja o motivo, novo equipamento da mesma marca e modelo similar. Se o original não for mais comercializado, a <strong>{{dataFicha.NM_EMPR | uppercase}}</strong> deverá aprovar o novo modelo e marca.\r\n          </p>\r\n          <p>\r\n            Cláusula 6ª. O uso e gozo do equipamento, assim como o cumprimento das demais cláusulas referentes ao uso e obrigações, é de responsabilidade do COMODATÁRO, assim como do seu gestor direto.\r\n          </p>\r\n          <br>\r\n          <p>\r\n            <strong><u>DA DEVOLUÇÃO</u></strong>\r\n          </p>\r\n          <p>\r\n            Cláusula 7ª. Fica obrigado o COMODATÁRIO em devolver o equipamento à COMODANTE quando forem por esta requisitado, em idênticas condições em que estava, e em condições de uso, devendo reparar os equipamentos quando danificados.\r\n          </p>\r\n          <p>\r\n            Cláusula 8ª. O processo de devolução do equipamento deverá ser acompanhado pelo gestor direto do COMODATÁRIO, assim como deverá ser preenchido o <strong>termo de devolução</strong> anexo a este contrato.\r\n          </p>\r\n          <br>\r\n          <p>\r\n            <strong><u>DA RESCISÃO</u></strong>\r\n          </p>\r\n          <p>\r\n            Cláusula 9ª. O presente contrato é celebrado por prazo indeterminado e será considerado rescindido de pleno direito em caso de infração, por parte da COMODATÁRIA e/ou de seu gestor, de qualquer cláusula acordada, assegurado à COMODANTE o direito de retirar, de onde quer que esteja, o bem ora cedido em comodato.\r\n          </p>\r\n          <br>\r\n          <p>\r\n            <strong><u>CONDIÇÕES GERAIS</u></strong>\r\n          </p>\r\n          <p>\r\n            Cláusula 10ª. Este contrato, passa a vigorar a partir da assinatura das partes.\r\n          </p>\r\n          <br>\r\n          <p>\r\n            <strong><u>DO FORO</u></strong>\r\n          </p>\r\n          <p>\r\n            Cláusula 11ª. As partes elegem o foro da comarca de Piracicaba/SP, para dirimirem quaisquer controvérsias oriundas do presente contrato.\r\n          </p>\r\n          <div class=\"col-11 d-flex justify-content-end pt-3\">{{dataFicha.NM_EMPR_CIDA | uppercase}}/{{dataFicha.NM_EMPR_ESTA | uppercase}}-{{dataFicha.dataHoje}} </div>\r\n          <div class=\"col-11 d-flex justify-content-end pt-5\">_____________________________________________________</div>\r\n          <div class=\"col-11 d-flex justify-content-end\">{{dataFicha.NM_FUNC | uppercase}}</div>\r\n          <div class=\"col-11 d-flex justify-content-end pt-3\">_____________________________________________________</div>\r\n          <div class=\"col-11 d-flex justify-content-end\">(GESTOR DO RESPONSÁVEL)</div>\r\n          <div class=\"col-11 d-flex justify-content-end pt-3\">_____________________________________________________</div>\r\n          <div class=\"col-11 d-flex justify-content-end\">(Comodatária)</div>\r\n          <div class=\"justify-content-end\" style=\"height: 200px;\"></div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n    </div>\r\n    <br>\r\n    <div class=\" row justify-content-center col-10 pt-5 \">\r\n      <br><br>\r\n      <h1 class=\"pt-5\">TERMO DE DEVOLUÇÃO</h1><br>\r\n      <div>\r\n        <div class=\" mt-5 pt-5\">\r\n          <p>\r\n            Pelo presente Termo de Devolução, o COMODATÁRIO acima qualificado declara que devolveu o(s) equipamento(s) e acessórios acima especificados, de guarda e responsabilidade da <strong>{{dataFicha.NM_EMPR | uppercase}}</strong>, nas mesmas condições que os recebeu.\r\n          </p>\r\n          <p>\r\n            A COMODANTE e o gestor do COMODATÁRIO, declaram que receberam os equipamentos em devolução, nas mesmas condições de empréstimo.\r\n          </p>\r\n          <br>\r\n          <p class=\"mb-1\">\r\n            <strong>OBSERVAÇÕES</strong>\r\n          </p>\r\n          <a *ngIf =\"dataFicha.DS_OBSE != null\">{{dataFicha.DS_OBSE}}</a>\r\n          <a *ngIf =\"dataFicha.DS_OBSE == null\">\r\n            <hr style=\"border: 2px;border-bottom-style: solid;\">\r\n            <hr style=\"border: 2px;border-bottom-style: solid;\">\r\n            <hr style=\"border: 2px;border-bottom-style: solid;\">\r\n            <hr style=\"border: 2px;border-bottom-style: solid;\">\r\n          </a>\r\n          <div class=\"col-11 d-flex justify-content-end pt-5\">{{dataFicha.dataHoje}} </div>\r\n          <div class=\"col-11 d-flex justify-content-end pt-5\">_____________________________________________________</div>\r\n          <div class=\"col-11 d-flex justify-content-end\">{{dataFicha.NM_FUNC | uppercase}}</div>\r\n          <div class=\"col-11 d-flex justify-content-end pt-3\">_____________________________________________________</div>\r\n          <div class=\"col-11 d-flex justify-content-end\">(GESTOR DO RESPONSÁVEL)</div>\r\n          <div class=\"col-11 d-flex justify-content-end pt-3\">_____________________________________________________</div>\r\n          <div class=\"col-11 d-flex justify-content-end\">(Comodatária)</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-body>\r\n";
      /***/
    },

    /***/
    "NZE0":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contratos.component.ts ***!
      \********************************************************************************/

    /*! exports provided: TecnologiaInformacaoContratosComponent */

    /***/
    function NZE0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoContratosComponent", function () {
        return TecnologiaInformacaoContratosComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contratos_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contratos.component.html */
      "eIKP");
      /* harmony import */


      var _contratos_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contratos.component.scss */
      "aHKa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/title.service */
      "dNnS"); // Services


      var TecnologiaInformacaoContratosComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoContratosComponent(activatedRoute, router, atividadesService, pnotifyService, titleService) {
          _classCallCheck(this, TecnologiaInformacaoContratosComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.atividadesService = atividadesService;
          this.pnotifyService = pnotifyService;
          this.titleService = titleService;
          this.loaderFullScreen = true;
          this.breadCrumbTree = [{
            descricao: 'Home',
            routerLink: '/tecnologia-informacao/home'
          }, {
            descricao: 'Contratos'
          }];
          this.atividades = [];
          this.pnotifyService.getPNotify();
        }

        _createClass(TecnologiaInformacaoContratosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.titleService.setTitle('contratos');
            this.activatedRoute.params.subscribe(function (params) {
              _this.registrarAcesso();

              _this.getAtividadesInternas(params['idSubModulo']);
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
            var _this2 = this;

            this.atividadesService.getAtividadesInternas(idSubModulo).subscribe(function (response) {
              if (response['responseCode'] === 200) {
                _this2.atividades = response['result'];
                _this2.loaderFullScreen = false;
              } else {
                _this2.handleAtividadesInternasError();
              }
            }, function (error) {
              _this2.handleAtividadesInternasError();
            });
          }
        }, {
          key: "handleAtividadesInternasError",
          value: function handleAtividadesInternasError() {
            this.pnotifyService.error();
            this.router.navigate(['/tecnologia-informacao/home']);
          }
        }]);

        return TecnologiaInformacaoContratosComponent;
      }();

      TecnologiaInformacaoContratosComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]
        }];
      };

      TecnologiaInformacaoContratosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'tecnologia-informacao-contratos',
        template: _raw_loader_contratos_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contratos_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_6__["AtividadesService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_5__["PNotifyService"], src_app_shared_services_core_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]])], TecnologiaInformacaoContratosComponent);
      /***/
    },

    /***/
    "S1or":
    /*!***************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/ocorrencia/services/ocorrencia.service.ts ***!
      \***************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastroOcorrenciaService */

    /***/
    function S1or(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastroOcorrenciaService", function () {
        return TecnologiaInformacaoCadastroOcorrenciaService;
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


      var TecnologiaInformacaoCadastroOcorrenciaService = /*#__PURE__*/function () {
        function TecnologiaInformacaoCadastroOcorrenciaService(http) {
          _classCallCheck(this, TecnologiaInformacaoCadastroOcorrenciaService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
        }

        _createClass(TecnologiaInformacaoCadastroOcorrenciaService, [{
          key: "getOcorrencia",
          value: function getOcorrencia(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/ocorrencias"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postOcorrencia",
          value: function postOcorrencia(ocorrencia) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/ocorrencias"), ocorrencia, {
              observe: 'response'
            });
          }
        }, {
          key: "getResponsaveis",
          value: function getResponsaveis(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/ocorrencias/responsaveis"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postResponsaveis",
          value: function postResponsaveis(params) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/ocorrencias/responsaveis"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getDocumento",
          value: function getDocumento(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/ocorrencias/documentos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postDocumento",
          value: function postDocumento(params, ID_TEIN_OCOR) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/ocorrencias/documentos?ID_TEIN_OCOR=").concat(ID_TEIN_OCOR), params, {
              observe: 'response'
            });
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(params) {
            return this.http.put("".concat(this.API, "/tecnologia-informacao/ocorrencias/documentos"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getParecer",
          value: function getParecer(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/ocorrencias/parecer"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postParecer",
          value: function postParecer(parecer) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/ocorrencias/parecer"), parecer, {
              observe: 'response'
            });
          }
        }, {
          key: "getDocumentoParecer",
          value: function getDocumentoParecer(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/ocorrencias/documentos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postDocumentoParecer",
          value: function postDocumentoParecer(documento, params) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/ocorrencias/documentos?ID_TEIN_OCOR=").concat(params.ID_TEIN_OCOR, "&ID_TEIN_OCPR=").concat(params.ID_TEIN_OCPR), documento, {
              observe: 'response'
            });
          }
        }, {
          key: "putDocumentoParecer",
          value: function putDocumentoParecer(params) {
            return this.http.put("".concat(this.API, "/tecnologia-informacao/ocorrencias/parecer/documentos"), params, {
              observe: 'response'
            });
          }
        }, {
          key: "getResponsaveisParecer",
          value: function getResponsaveisParecer(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/ocorrencias/responsaveis"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoCadastroOcorrenciaService;
      }();

      TecnologiaInformacaoCadastroOcorrenciaService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      TecnologiaInformacaoCadastroOcorrenciaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], TecnologiaInformacaoCadastroOcorrenciaService);
      /***/
    },

    /***/
    "SVrc":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contratos-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastrosRoutingModule */

    /***/
    function SVrc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastrosRoutingModule", function () {
        return TecnologiaInformacaoCadastrosRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _termo_devolucao_termo_devolucao_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./termo-devolucao/termo-devolucao.component */
      "YM0B");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _contratos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./contratos.component */
      "NZE0");
      /* harmony import */


      var _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./termo-responsabilidade/termo-responsabilidade.component */
      "xCq4"); // Components


      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _contratos_component__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoContratosComponent"]
        }, {
          path: 'contratos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | contrato-contrato-module */
            [__webpack_require__.e("common"), __webpack_require__.e("contrato-contrato-module")]).then(__webpack_require__.bind(null,
            /*! ./contrato/contrato.module */
            "fs7y")).then(function (m) {
              return m.TecnologiaInformacaoContratoModule;
            });
          }
        }, {
          path: 'tipo-contrato',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tipo-contrato-tipo-contrato-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tipo-contrato-tipo-contrato-module")]).then(__webpack_require__.bind(null,
            /*! ./tipo-contrato/tipo-contrato.module */
            "ZGnT")).then(function (m) {
              return m.TecnologiaInformacaoTipoContratoModule;
            });
          }
        }, {
          path: 'tipo-item',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tipo-item-tipo-item-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tipo-item-tipo-item-module")]).then(__webpack_require__.bind(null,
            /*! ./tipo-item/tipo-item.module */
            "Jg/J")).then(function (m) {
              return m.TecnologiaInformacaoTipoItemModule;
            });
          }
        }, {
          path: 'modelos',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modelo-modelo-module */
            [__webpack_require__.e("default~modelo-modelo-module~produtos-produtos-module"), __webpack_require__.e("common"), __webpack_require__.e("modelo-modelo-module")]).then(__webpack_require__.bind(null,
            /*! ./modelo/modelo.module */
            "Q6LE")).then(function (m) {
              return m.TecnologiaInformacaoModeloModule;
            });
          }
        }, {
          path: 'item',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | item-item-module */
            [__webpack_require__.e("common"), __webpack_require__.e("item-item-module")]).then(__webpack_require__.bind(null,
            /*! ./item/item.module */
            "+rmI")).then(function (m) {
              return m.TecnologiaInformacaoItemModule;
            });
          }
        }, {
          path: 'ocorrencias',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | ocorrencia-ocorrencia-module */
            [__webpack_require__.e("common"), __webpack_require__.e("ocorrencia-ocorrencia-module")]).then(__webpack_require__.bind(null,
            /*! ./ocorrencia/ocorrencia.module */
            "POIC")).then(function (m) {
              return m.TecnologiaInformacaoOcorrenciaModule;
            });
          }
        }]
      }, {
        path: 'termo-responsabilidade/:item',
        component: _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoTermoResponsabilidadeComponent"]
      }, {
        path: 'termo-devolucao/:ocorrencia',
        component: _termo_devolucao_termo_devolucao_component__WEBPACK_IMPORTED_MODULE_1__["TecnologiaInformacaoTermoDevolucaoComponent"]
      }];

      var TecnologiaInformacaoCadastrosRoutingModule = /*#__PURE__*/_createClass(function TecnologiaInformacaoCadastrosRoutingModule() {
        _classCallCheck(this, TecnologiaInformacaoCadastrosRoutingModule);
      });

      TecnologiaInformacaoCadastrosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], TecnologiaInformacaoCadastrosRoutingModule);
      /***/
    },

    /***/
    "YM0B":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/termo-devolucao/termo-devolucao.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoTermoDevolucaoComponent */

    /***/
    function YM0B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoTermoDevolucaoComponent", function () {
        return TecnologiaInformacaoTermoDevolucaoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_termo_devolucao_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./termo-devolucao.component.html */
      "NFDp");
      /* harmony import */


      var _termo_devolucao_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./termo-devolucao.component.scss */
      "A6pt");
      /* harmony import */


      var _ocorrencia_services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../ocorrencia/services/ocorrencia.service */
      "S1or");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _item_services_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../item/services/item.service */
      "Z7gR");
      /* harmony import */


      var _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../services/funcionarios.service */
      "jMbs");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../../../shared/services/core/pdf.service */
      "GTII");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");

      var TecnologiaInformacaoTermoDevolucaoComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoTermoDevolucaoComponent(pdfService, route, modalService, activatedRoute, funcionarioService, itensService, pnotifyService, ocorrenciaService, routerService, formBuilder, dateService) {
          _classCallCheck(this, TecnologiaInformacaoTermoDevolucaoComponent);

          this.pdfService = pdfService;
          this.route = route;
          this.modalService = modalService;
          this.activatedRoute = activatedRoute;
          this.funcionarioService = funcionarioService;
          this.itensService = itensService;
          this.pnotifyService = pnotifyService;
          this.ocorrenciaService = ocorrenciaService;
          this.routerService = routerService;
          this.formBuilder = formBuilder;
          this.dateService = dateService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_13__["MASKS"];
          this.loaderNavbar = false;
          this.tipoVisao = 'formulario';
          this.breadCrumbTree = [];
          this.dataFicha = [];
          this.funcionario = [];
          this.formChanged = false;
          this.loaderFullScreen = true;
          this.ocorrencias = [];
          this.itens = [];
          this.loadingItens = false;
        }

        _createClass(TecnologiaInformacaoTermoDevolucaoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _params = this.activatedRoute.snapshot.params;
            if (!_params.hasOwnProperty('ocorrencia')) return;
            this.getOcorrencia({
              ID_TEIN_OCOR: _params['ocorrencia']
            });
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
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/tecnologia-informacao/home'
            }, {
              descricao: 'Termo de Devolucao'
            }];
          }
        }, {
          key: "objetos",
          get: function get() {
            return this.form.get('objetos');
          }
        }, {
          key: "getOcorrencia",
          value: function getOcorrencia(params) {
            var _this3 = this;

            this.loading = true;
            this.ocorrenciaService.getOcorrencia(params).subscribe(function (response) {
              if (response.status === 200) {
                var ocorrencia = response.body['data'][0];
                var observacao = ocorrencia['DS_OBSE'];

                _this3.form.get('DS_OBSE').patchValue(observacao);

                var item = ocorrencia['ID_TECN_INFO_ITEM'];
                _this3.ocorrencias = ocorrencia;

                _this3.getObjetos({
                  ID_TECN_INFO_ITEM: item
                });
              } else {
                _this3.ocorrencias = [];
                _this3.loading = false;

                _this3.pnotifyService.error();
              }
            }, function (error) {
              _this3.pnotifyService.error();
            });
          }
        }, {
          key: "getObjetos",
          value: function getObjetos(params) {
            var _this4 = this;

            this.loading = true;
            this.itensService.getItem(params).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var _this5 = this;

                var objetos, _params, promise;

                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (!(response.status !== 200)) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      objetos = response['body']['data'];
                      _params = objetos[0];
                      this.getFuncionario({
                        NR_MATR: _params['NR_MATR']
                      });

                      promise = function promise() {
                        return objetos.forEach(function () {
                          return _this5.onAddObjeto();
                        });
                      };

                      _context.next = 8;
                      return Promise.resolve(promise());

                    case 8:
                      this.form.get('objetos').patchValue(objetos);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));
            }, function (error) {
              _this4.pnotifyService.error('Não foi encontrado nenhum material');
            });
          }
        }, {
          key: "setObjetos",
          value: function setObjetos(objeto) {
            var fg = this.form.get('objetos');
            fg.controls[this.index].patchValue(objeto);
          }
        }, {
          key: "onAddObjeto",
          value: function onAddObjeto() {
            this.objetos.push(this.formBuilder.group({
              NM_ITEM_TIPO: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_MODE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_PROD: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              VL_ITEM: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              CD_ITEM: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              quantidadeObj: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]]
            }));
          }
        }, {
          key: "onDeleteObjeto",
          value: function onDeleteObjeto(index) {
            if (this.objetos.length > 1) {
              this.objetos.removeAt(index);
            } else {
              this.pnotifyService.notice('Informe ao menos um Objeto.');
            }
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              NR_MATR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              DS_EMPR_ENDE: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_EMPR_BAIR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_EMPR_CIDA: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_EMPR_ESTA: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_EMPR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              CD_EMPR_EMPR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_FUNC: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              CD_USUA_RG: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              CD_USUA_CPF: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              DS_USUA_ENDE: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              CD_EMPR_CNPJ: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_FUNC_BAIR: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_FUNC_CIDA: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              NM_FUNC_ESTA: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              DS_OBSE: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
              objetos: this.formBuilder.array([])
            });
            this.formPesquisaItem = this.formBuilder.group({
              buscarPor: ['CD_ITEM'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
              ID_TECN_INFO_ITEM: [null],
              CD_ITEM: [null],
              NM_ITEM_TIPO: [null],
              NM_MODE: [null],
              NM_PROD: [null],
              ID_TECN_INFO_ITEM_DOCU: [null],
              DS_CONT: [null]
            });
          }
        }, {
          key: "getItens",
          value: function getItens() {
            var _this6 = this;

            var _obj = this.formPesquisaItem.value;
            var _params = {};
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.loadingItens = true;
            this.itensService.getItem(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this6.loadingItens = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this6.itens = response.body['data'];
              } else {
                _this6.pnotifyService.notice('Nenhum registro encontrado!');

                _this6.itens = [];
              }
            }, function (error) {
              _this6.pnotifyService.error();
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this7 = this;

            var dataHoje = new Date();
            var dataHojeC = this.dateService.getFullDate(dataHoje, null, false);

            if (this.form.valid) {
              this.loaderNavbar = true;
              setTimeout(function () {
                var formData = _this7.form.getRawValue();

                _this7.tipoVisao = 'ficha';
                _this7.dataFicha = {
                  NR_MATR: formData['NR_MATR'],
                  DS_EMPR_ENDE: formData['DS_EMPR_ENDE'],
                  NM_EMPR_BAIR: formData['NM_EMPR_BAIR'],
                  NM_EMPR_CIDA: formData['NM_EMPR_CIDA'],
                  NM_EMPR_ESTA: formData['NM_EMPR_ESTA'],
                  NM_EMPR: formData['NM_EMPR'],
                  CD_EMPR_EMPR: formData['CD_EMPR_EMPR'],
                  NM_FUNC: formData['NM_FUNC'],
                  CD_USUA_RG: formData['CD_USUA_RG'],
                  CD_USUA_CPF: formData['CD_USUA_CPF'],
                  DS_USUA_ENDE: formData['DS_USUA_ENDE'],
                  CD_EMPR_CNPJ: formData['CD_EMPR_CNPJ'],
                  NM_FUNC_BAIR: formData['NM_FUNC_BAIR'],
                  NM_FUNC_CIDA: formData['NM_FUNC_CIDA'],
                  NM_FUNC_ESTA: formData['NM_FUNC_ESTA'],
                  DS_OBSE: formData['DS_OBSE'],
                  objetos: formData['objetos'],
                  dataHoje: [dataHojeC]
                };
                _this7.formChanged = false;
                _this7.loaderNavbar = false;
              }, 1000);
            }
          }
        }, {
          key: "onDownload",
          value: function onDownload() {
            var _this8 = this;

            this.loaderNavbar = true;
            var _nome = this.form.get('NM_FUNC').value;
            this.pdfService.download('termo-devolucao', "TERMO DE DEVOLU\xC7\xC3O - ".concat(_nome));
            setTimeout(function () {
              _this8.loaderNavbar = false;
            }, 500);
          }
        }, {
          key: "getFuncionario",
          value: function getFuncionario(params) {
            var _this9 = this;

            this.loading = true;
            this.funcionarioService.getFuncionario(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["finalize"])(function () {
              _this9.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this9.funcionario = response.body['data'][0];

                _this9.form.patchValue(_this9.funcionario);
              }
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            var _this10 = this;

            this.loaderNavbar = true;
            setTimeout(function () {
              _this10.tipoVisao = 'formulario';
              _this10.loaderNavbar = false;
            }, 1000);
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
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
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
        }]);

        return TecnologiaInformacaoTermoDevolucaoComponent;
      }();

      TecnologiaInformacaoTermoDevolucaoComponent.ctorParameters = function () {
        return [{
          type: _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_10__["PdfService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]
        }, {
          type: _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoFuncionariosService"]
        }, {
          type: _item_services_item_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoCadastroItemService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"]
        }, {
          type: _ocorrencia_services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoCadastroOcorrenciaService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_15__["RouterService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]
        }];
      };

      TecnologiaInformacaoTermoDevolucaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'termo-devolucao',
        template: _raw_loader_termo_devolucao_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_termo_devolucao_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_10__["PdfService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_6__["TecnologiaInformacaoFuncionariosService"], _item_services_item_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoCadastroItemService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_8__["PNotifyService"], _ocorrencia_services_ocorrencia_service__WEBPACK_IMPORTED_MODULE_3__["TecnologiaInformacaoCadastroOcorrenciaService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_15__["RouterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_7__["DateService"]])], TecnologiaInformacaoTermoDevolucaoComponent);
      /***/
    },

    /***/
    "Z7gR":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/item/services/item.service.ts ***!
      \***************************************************************************************/

    /*! exports provided: TecnologiaInformacaoCadastroItemService */

    /***/
    function Z7gR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoCadastroItemService", function () {
        return TecnologiaInformacaoCadastroItemService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW"); //angular
      // services


      var TecnologiaInformacaoCadastroItemService = /*#__PURE__*/function () {
        function TecnologiaInformacaoCadastroItemService(http) {
          _classCallCheck(this, TecnologiaInformacaoCadastroItemService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API;
        } //-----------------------------------ITENS--------------------------\\


        _createClass(TecnologiaInformacaoCadastroItemService, [{
          key: "getItem",
          value: function getItem(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/itens"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "getUsuariosSituacoes",
          value: function getUsuariosSituacoes() {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/situacao-usuario")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
          }
        }, {
          key: "postItem",
          value: function postItem(item) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/item"), item, {
              observe: 'response'
            });
          } //-----------------------------------Docuementos--------------------------\\

        }, {
          key: "getDocumento",
          value: function getDocumento(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/item/documentos"), {
              params: params,
              observe: 'response'
            });
          }
        }, {
          key: "postDocumento",
          value: function postDocumento(params, ID_TECN_INFO_ITEM) {
            return this.http.post("".concat(this.API, "/tecnologia-informacao/item/documento?ID_TECN_INFO_ITEM=").concat(ID_TECN_INFO_ITEM), params, {
              observe: 'response'
            });
          }
        }, {
          key: "putDocumento",
          value: function putDocumento(params) {
            return this.http.put("".concat(this.API, "/tecnologia-informacao/item/documento"), params, {
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoCadastroItemService;
      }();

      TecnologiaInformacaoCadastroItemService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      TecnologiaInformacaoCadastroItemService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], TecnologiaInformacaoCadastroItemService);
      /***/
    },

    /***/
    "aHKa":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contratos.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function aHKa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVjbm9sb2dpYS1pbmZvcm1hY2FvL2NvbnRyYXRvcy9jb250cmF0b3MuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "eIKP":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tecnologia-informacao/contratos/contratos.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eIKP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loaderFullScreen\"></loader-spinner-full-screen>\r\n<app-header appTitle=\"CONTRATOS\"></app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\" [show]=\"!loaderFullScreen\">\r\n  <card-group text=\"Selecione uma atividade\" [list]=\"atividades\"></card-group>\r\n</app-body>";
      /***/
    },

    /***/
    "fCxQ":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/contratos.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: TecnologiaInformacaoContratosModule */

    /***/
    function fCxQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoContratosModule", function () {
        return TecnologiaInformacaoContratosModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tooltip */
      "978R");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _contratos_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./contratos-routing.module */
      "SVrc");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _contratos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./contratos.component */
      "NZE0");
      /* harmony import */


      var _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./termo-responsabilidade/termo-responsabilidade.component */
      "xCq4");
      /* harmony import */


      var _termo_devolucao_termo_devolucao_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./termo-devolucao/termo-devolucao.component */
      "YM0B"); // Modules
      // Components


      var TecnologiaInformacaoContratosModule = /*#__PURE__*/_createClass(function TecnologiaInformacaoContratosModule() {
        _classCallCheck(this, TecnologiaInformacaoContratosModule);
      });

      TecnologiaInformacaoContratosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [_contratos_component__WEBPACK_IMPORTED_MODULE_15__["TecnologiaInformacaoContratosComponent"], _termo_responsabilidade_termo_responsabilidade_component__WEBPACK_IMPORTED_MODULE_16__["TecnologiaInformacaoTermoResponsabilidadeComponent"], _termo_devolucao_termo_devolucao_component__WEBPACK_IMPORTED_MODULE_17__["TecnologiaInformacaoTermoDevolucaoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _contratos_routing_module__WEBPACK_IMPORTED_MODULE_11__["TecnologiaInformacaoCadastrosRoutingModule"], src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_12__["NotFoundModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(), _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_5__["TextMaskModule"], ng_brazil__WEBPACK_IMPORTED_MODULE_3__["NgBrazil"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_2__["CurrencyMaskModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_14__["TemplatesModule"]]
      })], TecnologiaInformacaoContratosModule);
      /***/
    },

    /***/
    "jMbs":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/services/funcionarios.service.ts ***!
      \******************************************************************************************/

    /*! exports provided: TecnologiaInformacaoFuncionariosService */

    /***/
    function jMbs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoFuncionariosService", function () {
        return TecnologiaInformacaoFuncionariosService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TecnologiaInformacaoFuncionariosService = /*#__PURE__*/function () {
        function TecnologiaInformacaoFuncionariosService(http) {
          _classCallCheck(this, TecnologiaInformacaoFuncionariosService);

          this.http = http;
          this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API;
        }

        _createClass(TecnologiaInformacaoFuncionariosService, [{
          key: "getFuncionario",
          value: function getFuncionario(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/funcionarios"), {
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
          key: "getCentroCusto",
          value: function getCentroCusto(params) {
            return this.http.get("".concat(this.API, "/tecnologia-informacao/centro-custo"), {
              params: params,
              observe: 'response'
            });
          }
        }]);

        return TecnologiaInformacaoFuncionariosService;
      }();

      TecnologiaInformacaoFuncionariosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      TecnologiaInformacaoFuncionariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], TecnologiaInformacaoFuncionariosService);
      /***/
    },

    /***/
    "xCq4":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/modules/tecnologia-informacao/contratos/termo-responsabilidade/termo-responsabilidade.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: TecnologiaInformacaoTermoResponsabilidadeComponent */

    /***/
    function xCq4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TecnologiaInformacaoTermoResponsabilidadeComponent", function () {
        return TecnologiaInformacaoTermoResponsabilidadeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_termo_responsabilidade_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./termo-responsabilidade.component.html */
      "JYNX");
      /* harmony import */


      var _termo_responsabilidade_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./termo-responsabilidade.component.scss */
      "7HvY");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _item_services_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../item/services/item.service */
      "Z7gR");
      /* harmony import */


      var _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../services/funcionarios.service */
      "jMbs");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../../../shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./../../../../shared/services/core/pdf.service */
      "GTII");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");

      var TecnologiaInformacaoTermoResponsabilidadeComponent = /*#__PURE__*/function () {
        function TecnologiaInformacaoTermoResponsabilidadeComponent(pdfService, route, modalService, activatedRoute, funcionarioService, itensService, pnotifyService, routerService, formBuilder, dateService) {
          _classCallCheck(this, TecnologiaInformacaoTermoResponsabilidadeComponent);

          this.pdfService = pdfService;
          this.route = route;
          this.modalService = modalService;
          this.activatedRoute = activatedRoute;
          this.funcionarioService = funcionarioService;
          this.itensService = itensService;
          this.pnotifyService = pnotifyService;
          this.routerService = routerService;
          this.formBuilder = formBuilder;
          this.dateService = dateService;
          this.MASKS = ng_brazil__WEBPACK_IMPORTED_MODULE_12__["MASKS"];
          this.loaderNavbar = false;
          this.tipoVisao = 'formulario';
          this.breadCrumbTree = [];
          this.dataFicha = [];
          this.funcionario = [];
          this.formChanged = false;
          this.loaderFullScreen = true;
          this.itens = [];
          this.loadingItens = false;
        }

        _createClass(TecnologiaInformacaoTermoResponsabilidadeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setBreadCrumb();
            this.setFormBuilder();
            this.onActivatedRoute();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _params = this.activatedRoute.snapshot.params;
            if (!_params.hasOwnProperty('item')) return;
            this.getObjetos({
              ID_TECN_INFO_ITEM: _params['item']
            });
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
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            this.breadCrumbTree = [{
              descricao: 'Home',
              routerLink: '/tecnologia-informacao/home'
            }, {
              descricao: 'Termo de Responsabilidade'
            }];
          }
        }, {
          key: "objetos",
          get: function get() {
            return this.form.get('objetos');
          }
        }, {
          key: "getObjetos",
          value: function getObjetos(params) {
            var _this11 = this;

            this.loading = true;
            this.itensService.getItem(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {})).subscribe(function (response) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                var _this12 = this;

                var objetos, _params, promise;

                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(response.status !== 200)) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 2:
                      objetos = response['body']['data'];
                      _params = objetos[0];
                      this.getFuncionario({
                        NR_MATR: _params['NR_MATR']
                      });

                      promise = function promise() {
                        return objetos.forEach(function () {
                          return _this12.onAddObjeto();
                        });
                      };

                      _context2.next = 8;
                      return Promise.resolve(promise());

                    case 8:
                      this.form.get('objetos').patchValue(objetos);

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));
            }, function (error) {
              _this11.pnotifyService.error('Não foi encontrado nenhum material');
            });
          }
        }, {
          key: "setObjetos",
          value: function setObjetos(objeto) {
            var fg = this.form.get('objetos');
            fg.controls[this.index].patchValue(objeto);
          }
        }, {
          key: "onAddObjeto",
          value: function onAddObjeto() {
            this.objetos.push(this.formBuilder.group({
              NM_PROD: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              VL_ITEM: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              CD_ITEM: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              quantidadeObj: ['1', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]]
            }));
          }
        }, {
          key: "onDeleteObjeto",
          value: function onDeleteObjeto(index) {
            if (this.objetos.length > 1) {
              this.objetos.removeAt(index);
            } else {
              this.pnotifyService.notice('Informe ao menos um Objeto.');
            }
          }
        }, {
          key: "setFormBuilder",
          value: function setFormBuilder() {
            this.form = this.formBuilder.group({
              NR_MATR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              DS_EMPR_ENDE: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_EMPR_BAIR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_EMPR_CIDA: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_EMPR_ESTA: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_EMPR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              CD_EMPR_EMPR: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_FUNC: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              CD_USUA_RG: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              CD_USUA_CPF: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              DS_USUA_ENDE: [{
                value: [null],
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              CD_EMPR_CNPJ: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_FUNC_BAIR: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_FUNC_CIDA: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              NM_FUNC_ESTA: [{
                value: null,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]],
              objetos: this.formBuilder.array([])
            });
            this.formPesquisaItem = this.formBuilder.group({
              buscarPor: ['CD_ITEM'],
              pesquisa: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
              ID_TECN_INFO_ITEM: [null],
              CD_ITEM: [null],
              NM_PROD: [null],
              DS_CONT: [null]
            });
          }
        }, {
          key: "getItens",
          value: function getItens() {
            var _this13 = this;

            var _obj = this.formPesquisaItem.value;
            var _params = {};
            if (_obj['pesquisa']) _params[_obj['buscarPor']] = _obj['pesquisa'];
            this.loadingItens = true;
            this.itensService.getItem(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this13.loadingItens = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this13.itens = response.body['data'];
              } else {
                _this13.pnotifyService.notice('Nenhum registro encontrado!');

                _this13.itens = [];
              }
            }, function (error) {
              _this13.pnotifyService.error();
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this14 = this;

            var dataHoje = new Date();
            var dataHojeC = this.dateService.getFullDate(dataHoje, null, false);

            if (this.form.valid) {
              this.loaderNavbar = true;
              setTimeout(function () {
                var formData = _this14.form.getRawValue();

                _this14.tipoVisao = 'ficha';
                _this14.dataFicha = {
                  NR_MATR: formData['NR_MATR'],
                  DS_EMPR_ENDE: formData['DS_EMPR_ENDE'],
                  NM_EMPR_BAIR: formData['NM_EMPR_BAIR'],
                  NM_EMPR_CIDA: formData['NM_EMPR_CIDA'],
                  NM_EMPR_ESTA: formData['NM_EMPR_ESTA'],
                  NM_EMPR: formData['NM_EMPR'],
                  CD_EMPR_EMPR: formData['CD_EMPR_EMPR'],
                  NM_FUNC: formData['NM_FUNC'],
                  CD_USUA_RG: formData['CD_USUA_RG'],
                  CD_USUA_CPF: formData['CD_USUA_CPF'],
                  DS_USUA_ENDE: formData['DS_USUA_ENDE'],
                  CD_EMPR_CNPJ: formData['CD_EMPR_CNPJ'],
                  NM_FUNC_BAIR: formData['NM_FUNC_BAIR'],
                  NM_FUNC_CIDA: formData['NM_FUNC_CIDA'],
                  NM_FUNC_ESTA: formData['NM_FUNC_ESTA'],
                  objetos: formData['objetos'],
                  dataHoje: [dataHojeC]
                };
                _this14.formChanged = false;
                _this14.loaderNavbar = false;
              }, 1000);
            }
          }
        }, {
          key: "onDownload",
          value: function onDownload() {
            var _this15 = this;

            this.loaderNavbar = true;
            var _nome = this.form.get('NM_FUNC').value;
            this.pdfService.download('termo-responsabilidade', "TERMO - ".concat(_nome));
            setTimeout(function () {
              _this15.loaderNavbar = false;
            }, 500);
          }
        }, {
          key: "getFuncionario",
          value: function getFuncionario(params) {
            var _this16 = this;

            this.loading = true;
            this.funcionarioService.getFuncionario(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this16.loading = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this16.funcionario = response.body['data'][0];

                _this16.form.patchValue(_this16.funcionario);
              }
            });
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            var _this17 = this;

            this.loaderNavbar = true;
            setTimeout(function () {
              _this17.tipoVisao = 'formulario';
              _this17.loaderNavbar = false;
            }, 1000);
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
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
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
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
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
        }]);

        return TecnologiaInformacaoTermoResponsabilidadeComponent;
      }();

      TecnologiaInformacaoTermoResponsabilidadeComponent.ctorParameters = function () {
        return [{
          type: _shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_9__["PdfService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoFuncionariosService"]
        }, {
          type: _item_services_item_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastroItemService"]
        }, {
          type: _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__["RouterService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]
        }];
      };

      TecnologiaInformacaoTermoResponsabilidadeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'termo-responsabilidade',
        template: _raw_loader_termo_responsabilidade_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_termo_responsabilidade_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_9__["PdfService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _services_funcionarios_service__WEBPACK_IMPORTED_MODULE_5__["TecnologiaInformacaoFuncionariosService"], _item_services_item_service__WEBPACK_IMPORTED_MODULE_4__["TecnologiaInformacaoCadastroItemService"], _shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_7__["PNotifyService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_14__["RouterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]])], TecnologiaInformacaoTermoResponsabilidadeComponent);
      /***/
    },

    /***/
    "xYRW":
    /*!************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/contratos/contratos.module.ts ***!
      \************************************************************************/

    /*! exports provided: ComercialKanbanContratosModule */

    /***/
    function xYRW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialKanbanContratosModule", function () {
        return ComercialKanbanContratosModule;
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


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _templates_templates_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../templates/templates.module */
      "9lCC");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../cadastros/materiais/templates/templates.module */
      "11Wi");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _lista_lista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./lista/lista.component */
      "y06A");
      /* harmony import */


      var _contratos_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./contratos.service */
      "E15D");
      /* harmony import */


      var _contratos_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./contratos-routing.module */
      "5Sp0"); // ngx-bootstrap
      // ng-select
      // ng2-currency-mask
      // PNotify
      // Modules
      // Components
      // Services


      var ComercialKanbanContratosModule = /*#__PURE__*/_createClass(function ComercialKanbanContratosModule() {
        _classCallCheck(this, ComercialKanbanContratosModule);
      });

      ComercialKanbanContratosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lista_lista_component__WEBPACK_IMPORTED_MODULE_15__["ComercialKanbanContratosListaComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_8__["CurrencyMaskModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"], _templates_templates_module__WEBPACK_IMPORTED_MODULE_10__["ComercialTemplatesModule"], _cadastros_materiais_templates_templates_module__WEBPACK_IMPORTED_MODULE_13__["ComercialCadastrosMateriaisTemplatesModule"], _contratos_routing_module__WEBPACK_IMPORTED_MODULE_17__["ComercialKanbanContratosRoutingModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot()],
        providers: [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_9__["PNotifyService"], _contratos_service__WEBPACK_IMPORTED_MODULE_16__["ComercialKanbanContratosService"]]
      })], ComercialKanbanContratosModule);
      /***/
    },

    /***/
    "y06A":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/comercial/kanban/contratos/lista/lista.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ComercialKanbanContratosListaComponent */

    /***/
    function y06A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialKanbanContratosListaComponent", function () {
        return ComercialKanbanContratosListaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./lista.component.html */
      "7v+t");
      /* harmony import */


      var _lista_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lista.component.scss */
      "MsxC");
      /* harmony import */


      var _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../cadastros/materiais/grupos/grupos.service */
      "4YhS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "ienR");
      /* harmony import */


      var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/chronos */
      "xj/R");
      /* harmony import */


      var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/locale */
      "0b5p");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./../../../gestao/associacoes/coordenadores-escritorios/coordenadores-escritorios.service */
      "fMkk");
      /* harmony import */


      var _services_vendedores_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./../../../services/vendedores.service */
      "4xRd");
      /* harmony import */


      var _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/auth.service */
      "yxCR");
      /* harmony import */


      var _comercial_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./../../../comercial.service */
      "VgqD");
      /* harmony import */


      var _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./../../../../../shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./../../../../../shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var _contratos_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./../contratos.service */
      "E15D"); // ngx-bootstrap


      Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_10__["defineLocale"])('pt-br', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_11__["ptBrLocale"]); // Services

      var ComercialKanbanContratosListaComponent = /*#__PURE__*/function () {
        function ComercialKanbanContratosListaComponent(router, location, formBuilder, pnotifyService, activatedRoute, atividadesService, kanbanContratosService, dateService, localeService, comercialService, authService, comercialVendedoresService, gestaoAssociacoesService, materiaisGrupoService) {
          _classCallCheck(this, ComercialKanbanContratosListaComponent);

          this.router = router;
          this.location = location;
          this.formBuilder = formBuilder;
          this.pnotifyService = pnotifyService;
          this.activatedRoute = activatedRoute;
          this.atividadesService = atividadesService;
          this.kanbanContratosService = kanbanContratosService;
          this.dateService = dateService;
          this.localeService = localeService;
          this.comercialService = comercialService;
          this.authService = authService;
          this.comercialVendedoresService = comercialVendedoresService;
          this.gestaoAssociacoesService = gestaoAssociacoesService;
          this.materiaisGrupoService = materiaisGrupoService;
          this.user = this.authService.getCurrentUser();
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.idUsuario = this.currentUser['info']['id'];
          this.loaderNavbar = false;
          this.loaderFullScreen = true;
          this.profile = {};
          this.breadCrumbTree = [];
          this.showDashboard = false;
          this.showFilter = false;
          this.showPermissionDenied = false;
          this.coordenadores = [];
          this.vendedores = [];
          this.unidades = [];
          this.linhas = [];
          this.contratos = [];
          this.faturados = [];
          this.pendentes = [];
          this.itemsPerPage = 50;
          this.currentPage = 1;
          this.maxSize = 10;
          this.clientesPagination = [];
          this.detalhes = false;
          this.red = false;
          this.yellow = false;
          this.green = false;
          this.dadosLoaded = false;
          this.dadosEmpty = false;
          this.dadosFiltrados = [];
          this.pnotifyService.getPNotify();
          this.localeService.use('pt-br');
        }

        _createClass(ComercialKanbanContratosListaComponent, [{
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _this18 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this18.breadCrumbTree = [{
                descricao: 'Home',
                routerLink: '/comercial/home'
              }, {
                descricao: 'Kanban',
                routerLink: "/comercial/kanban/".concat(params.idSubModulo)
              }, {
                descricao: 'Kanban Contratos'
              }];
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.registrarAcesso();
            this.setFormFilter();
            this.getPerfil();
            this.getVendedores();
            this.getGestores();
            this.setBreadCrumb();
            this.getFilterValues();
          }
        }, {
          key: "registrarAcesso",
          value: function registrarAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setFormFilter",
          value: function setFormFilter() {
            this.form = this.formBuilder.group({
              dataInicial: [this.dateService.getFirstDayMonth()],
              dataFinal: [this.dateService.getToday()],
              codSituacao: '1',
              codVendedor: [null],
              codGerencia: [null],
              codLinha: [null],
              orderBy: [null],
              orderType: [null],
              pagina: [null]
            });
          } // Pesquisa

        }, {
          key: "onFilter",
          value: function onFilter() {
            if (this.form.valid) {
              this.itemsPerPage = this.form.value.registros;
              this.currentPage = 1;
              this.setRouterParams(this.getParams());
            }
          }
        }, {
          key: "search",
          value: function search(params) {
            var _this19 = this;

            this.loaderNavbar = false;
            this.dadosFiltrados = [];
            this.dadosLoaded = false;
            this.dadosEmpty = false;
            this.kanbanContratosService.getCards(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this19.loaderNavbar = false;
              _this19.dadosLoaded = true;
            })).subscribe({
              next: function next(response) {
                if (response[0].hasOwnProperty('success') && response[0].success === true) {
                  _this19.contratos = response[0].data;
                  _this19.dadosEmpty = true;
                }

                if (response[0].hasOwnProperty('success') && response[0].success === true) {
                  _this19.faturados = response[1].data;
                  _this19.dadosEmpty = true;
                }

                if (response[0].hasOwnProperty('success') && response[0].success === true) {
                  _this19.pendentes = response[2].data;
                  _this19.dadosEmpty = true;
                } else if (response.hasOwnProperty('success') && response.success === false) {
                  _this19.dadosEmpty = true;
                } else {
                  _this19.pnotifyService.error();

                  _this19.dadosEmpty = true;
                }
              },
              error: function error(_error) {
                _this19.dadosEmpty = true;

                if (_error.error.hasOwnProperty('mensagem')) {
                  _this19.pnotifyService.error(_error.error.mensagem);
                } else {
                  _this19.pnotifyService.error();
                }
              }
            });
          }
        }, {
          key: "getFilterValues",
          value: function getFilterValues() {
            var _this20 = this;

            this.materiaisGrupoService.getFilterValues().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this20.loaderFullScreen = false;
            })).subscribe(function (response) {
              if (response[0].responseCode === 200) {
                _this20.linhas = response[0].result;
              } else {
                _this20.pnotifyService.error();

                _this20.location.back();
              }
            });
          }
        }, {
          key: "setRouterParams",
          value: function setRouterParams(params) {
            if (params === null) {
              this.router.navigate([], {
                relativeTo: this.activatedRoute
              });
            } else {
              this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: {
                  q: btoa(JSON.stringify(params))
                },
                queryParamsHandling: 'merge'
              });
            }

            this.search(params);
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

            _params['orderBy'] = this.orderBy;
            _params['orderType'] = this.orderType;
            return _params;
          } // Get perfil

        }, {
          key: "getPerfil",
          value: function getPerfil() {
            var _this21 = this;

            this.comercialService.getPerfil().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this21.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                if (response.responseCode === 200) {
                  _this21.profile = response.result;

                  if (_this21.profile.coordenador === true || _this21.profile.gestor === true || _this21.profile.vendedor === true && _this21.profile.coordenador === false && _this21.profile.gestor === false && _this21.profile.hasVinculoOperadores === true) {
                    _this21.checkRouterParams();
                  } else if (_this21.profile.vendedor === true && _this21.profile.coordenador === false && _this21.profile.gestor === false && _this21.profile.hasVinculoOperadores === false // this.profile.hasVinculoOperadores === true
                  ) {
                    _this21.setRouterParams([]);

                    _this21.profileDisabled();

                    _this21.idVendedor = _this21.user.info.idVendedor;
                    _this21.idEscritorio = _this21.user.info.idEscritorio;

                    _this21.form.get('codVendedor').setValue(parseInt(_this21.user.info.idVendedor));

                    _this21.showDashboard = true;
                  } else {
                    _this21.showPermissionDenied = true;
                  }
                } else {
                  _this21.showPermissionDenied = true;
                }
              },
              error: function error(_error2) {
                _this21.showPermissionDenied = true;
              }
            });
          }
        }, {
          key: "profileDisabled",
          value: function profileDisabled() {
            this.form.get('codVendedor').disable();
            this.form.get('codGerencia').disable();
            this.form.get('codUnidade').disable();
          }
        }, {
          key: "checkRouterParams",
          value: function checkRouterParams() {
            var _this22 = this;

            var formValue = {
              idEscritorio: null,
              idVendedor: null,
              nomeEscritorio: null,
              nomeVendedor: null
            };
            this.activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (queryParams) {
              if (Object.keys(queryParams).length > 0) {
                var params = atob(queryParams['q']);
                params = JSON.parse(params);
                _this22.idEscritorio = parseInt(params.idEscritorio);
                _this22.idVendedor = parseInt(params.idVendedor);
                _this22.nomeEscritorio = params.nomeEscritorio;
                _this22.nomeVendedor = params.nomeVendedor;
                _this22.showFilter = false;
                _this22.showDashboard = true;
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
              } else {
                _this22.showFilter = true;
                _this22.showDashboard = false;
              }
            });
            this.activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "getGestores",
          value: function getGestores() {
            var _this23 = this;

            this.gestaoAssociacoesService.getListaCoordenadoresEscritorios().subscribe({
              next: function next(response) {
                if (response['responseCode'] === 200) {
                  _this23.coordenadores = response['result']['coordenadores'];
                  _this23.unidades = response['result']['escritorios']; // this.setFormBuilder();
                } else {
                  _this23.pnotifyService.error();

                  _this23.location.back();
                }
              },
              error: function error(_error3) {
                _this23.pnotifyService.error();

                _this23.location.back();
              }
            });
          }
        }, {
          key: "getVendedores",
          value: function getVendedores() {
            var _this24 = this;

            this.comercialVendedoresService.getVendedores().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this24.loaderFullScreen = false;
            })).subscribe({
              next: function next(response) {
                _this24.vendedores = response['result'];
              },
              error: function error(_error4) {
                _this24.pnotifyService.error();

                _this24.location.back();
              }
            });
          } // Tratamento de erros

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
            }

            return '';
          }
        }, {
          key: "onFieldRequired",
          value: function onFieldRequired(field) {
            var required = false;
            var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();

            if (this.form.controls[field].validator) {
              var validationResult = this.form.controls[field].validator(formControl);
              required = validationResult !== null && validationResult.required === true;
            }

            if (required) {
              return 'is-required';
            }
          }
        }, {
          key: "handleFormFieldsError",
          value: function handleFormFieldsError() {
            this.pnotifyService.error();
            this.location.back();
          }
        }, {
          key: "onRefresh",
          value: function onRefresh() {
            // location.reload()
            this.onFilter();
          }
        }]);

        return ComercialKanbanContratosListaComponent;
      }();

      ComercialKanbanContratosListaComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_18__["AtividadesService"]
        }, {
          type: _contratos_service__WEBPACK_IMPORTED_MODULE_19__["ComercialKanbanContratosService"]
        }, {
          type: _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"]
        }, {
          type: ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"]
        }, {
          type: _comercial_service__WEBPACK_IMPORTED_MODULE_16__["ComercialService"]
        }, {
          type: _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]
        }, {
          type: _services_vendedores_service__WEBPACK_IMPORTED_MODULE_14__["ComercialVendedoresService"]
        }, {
          type: _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"]
        }, {
          type: _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisGrupoService"]
        }];
      };

      ComercialKanbanContratosListaComponent.propDecorators = {
        scrollToFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['scrollToFilter', {}]
        }]
      };
      ComercialKanbanContratosListaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comercial-kanban-contratos-lista',
        template: _raw_loader_lista_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lista_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_12__["PNotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_18__["AtividadesService"], _contratos_service__WEBPACK_IMPORTED_MODULE_19__["ComercialKanbanContratosService"], _shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_17__["DateService"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"], _comercial_service__WEBPACK_IMPORTED_MODULE_16__["ComercialService"], _shared_services_core_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_vendedores_service__WEBPACK_IMPORTED_MODULE_14__["ComercialVendedoresService"], _gestao_associacoes_coordenadores_escritorios_coordenadores_escritorios_service__WEBPACK_IMPORTED_MODULE_13__["ComercialGestaoAssociacoesCoordenadoresEscritoriosService"], _cadastros_materiais_grupos_grupos_service__WEBPACK_IMPORTED_MODULE_3__["ComercialCadastrosMateriaisGrupoService"]])], ComercialKanbanContratosListaComponent);
      /***/
    },

    /***/
    "zN97":
    /*!************************************************************************!*\
      !*** ./src/app/modules/comercial/tid-software/tid-software.service.ts ***!
      \************************************************************************/

    /*! exports provided: ComercialTidSoftwareService */

    /***/
    function zN97(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComercialTidSoftwareService", function () {
        return ComercialTidSoftwareService;
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
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ComercialTidSoftwareService = /*#__PURE__*/function () {
        function ComercialTidSoftwareService(http) {
          _classCallCheck(this, ComercialTidSoftwareService);

          this.http = http;
          this.API = "https://crm360.monterrey.com.bo/api/comercial/tid-software";
        }

        _createClass(ComercialTidSoftwareService, [{
          key: "loadDependencies",
          value: function loadDependencies() {
            var empresas = this.getEmpresas('vendas');
            var linhas = this.getLinhas();
            var modulosVendas = this.getModulosVendas();
            var modulosProducaoTela = this.getModulosProducaoTela();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([empresas, linhas, modulosVendas, modulosProducaoTela]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getEmpresas",
          value: function getEmpresas(acao) {
            return this.http.get("".concat(this.API, "/empresas/").concat(acao)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getLinhas",
          value: function getLinhas() {
            return this.http.get("".concat(this.API, "/linhas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getModulosVendas",
          value: function getModulosVendas() {
            return this.http.get("".concat(this.API, "/modulos/vendas")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "getModulosProducaoTela",
          value: function getModulosProducaoTela() {
            return this.http.get("".concat(this.API, "/modulos/producao-tela")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }, {
          key: "postGerarAcesso",
          value: function postGerarAcesso(data) {
            return this.http.post("".concat(this.API, "/gerar-acesso"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2));
          }
        }]);

        return ComercialTidSoftwareService;
      }();

      ComercialTidSoftwareService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      ComercialTidSoftwareService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ComercialTidSoftwareService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=contratos-contratos-module-es5.js.map