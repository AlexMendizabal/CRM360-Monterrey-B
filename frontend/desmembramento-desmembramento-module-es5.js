(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["desmembramento-desmembramento-module"], {
    /***/
    "/1Ba":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/desmembramento/desmembramento-routing.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: LogisticaEntregaDesmembramentoRoutingModule */

    /***/
    function Ba(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaDesmembramentoRoutingModule", function () {
        return LogisticaEntregaDesmembramentoRoutingModule;
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


      var _desmembramento_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./desmembramento.component */
      "evSM");

      var routes = [{
        path: '',
        component: _desmembramento_component__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaDesmembramentoComponent"]
      }];

      var LogisticaEntregaDesmembramentoRoutingModule = /*#__PURE__*/_createClass(function LogisticaEntregaDesmembramentoRoutingModule() {
        _classCallCheck(this, LogisticaEntregaDesmembramentoRoutingModule);
      });

      LogisticaEntregaDesmembramentoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      })], LogisticaEntregaDesmembramentoRoutingModule);
      /***/
    },

    /***/
    "3pdl":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/desmembramento/desmembramento.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pdl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<loader-spinner-full-screen *ngIf=\"loading\"></loader-spinner-full-screen>\r\n<loader-spinner-navbar [hidden]=\"!loadingNavBar\"></loader-spinner-navbar>\r\n<app-header appTitle=\"Desmembramiento\">\r\n  <button (click)=\"onReset()\">\r\n    Limpiar\r\n  </button>\r\n  <button\r\n  [disabled]=\"form.status == 'INVALID'\"\r\n  (click)=\"onSearch()\">\r\n    Filtrar\r\n  </button>\r\n</app-header>\r\n<app-body [breadCrumbTree]=\"breadCrumbTree\">\r\n  <advanced-filter>\r\n    <form autocomplete=\"off\" [formGroup]=\"form\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-2 pl-0\">\r\n          <label for=\"dtInicial\">Fecha de início</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtInicial\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Digite...\"\r\n            formControlName=\"DT_INIC\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-2 pl-0\">\r\n          <label for=\"dtFinal\">Fecha de finalizacion</label>\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">\r\n                <i class=\"far fa-calendar-alt\"></i>\r\n              </span>\r\n            </div>\r\n            <input\r\n            class=\"form-control\"\r\n            id=\"dtFinal\"\r\n            type=\"text\"\r\n            bsDatepicker\r\n            [bsConfig]=\"bsConfig\"\r\n            placeholder=\"Digite...\"\r\n            formControlName=\"DT_FINA\"\r\n          />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col p-0\">\r\n          <label for=\"filial\">Subsidiaria</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [multiple]=\"true\"\r\n            [closeOnSelect]=\"false\"\r\n            [loading]=\"loadingFiliais\"\r\n            [items]=\"filiais\"\r\n            [virtualScroll]=\"true\"\r\n            dropdownPosition=\"bottom\"\r\n            labelForId=\"filial\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"idFilial\"\r\n            [ngClass]=\"onFieldRequired('CD_FILI')\"\r\n            placeholder=\"SELECCIONE...\"\r\n            formControlName=\"CD_FILI\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3 pl-0\">\r\n          <label for=\"id\">Lanzamiento</label>\r\n          <input\r\n            id=\"id\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"ID_LOGI_FUSI_PEDI\"\r\n            (keyup.enter)=\"onSearch()\">\r\n        </div>\r\n        <div class=\"form-group col-3 pl-0\">\r\n          <label for=\"pedido\">Órdenes de Venta</label>\r\n          <input\r\n            id=\"pedido\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"CD_PEDI\"\r\n            (keyup.enter)=\"onSearch()\">\r\n        </div>\r\n        <div class=\"form-group col-3 pl-0\">\r\n          <label for=\"romaneio\">Romaneio</label>\r\n          <input\r\n            id=\"romaneio\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"CD_ROMA\"\r\n            (keyup.enter)=\"onSearch()\">\r\n        </div>\r\n        <div class=\"form-group col-3 p-0\">\r\n          <label for=\"cliente\">Cliente</label>\r\n          <input\r\n            id=\"cliente\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"DIGITE...\"\r\n            formControlName=\"DS_CLIE\"\r\n            (keyup.enter)=\"onSearch()\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3 pl-0\">\r\n          <label for=\"categoria\">Niveles</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"false\"\r\n            [items]=\"tipos\"\r\n            [multiple]=\"true\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipo\"\r\n            bindLabel=\"nome\"\r\n            bindValue=\"cod\"\r\n            id=\"categoria\"\r\n            formControlName=\"IN_DESM\"\r\n            (change)=\"onSearch()\"\r\n            placeholder=\"SELECCIONE...\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3 pl-0\">\r\n          <label for=\"tipoOperacao\">Tipo de operación</label>\r\n          <ng-select\r\n            [searchable]=\"true\"\r\n            [clearable]=\"true\"\r\n            [items]=\"tipoOperacao\"\r\n            [multiple]=\"true\"\r\n            [virtualScroll]=\"true\"\r\n            labelForId=\"tipoOperacao\"\r\n            bindLabel=\"TP_OPER\"\r\n            bindValue=\"TP_OPER\"\r\n            id=\"tipoOperacao\"\r\n            formControlName=\"TP_OPER\"\r\n            (change)=\"onSearch()\"\r\n            placeholder=\"SELECCIONE...\"\r\n          >\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3 pl-0 \">\r\n          <label for=\"inSaldo\">saldo</label>\r\n          <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"inSaldo\"\r\n          [virtualScroll]=\"true\"\r\n          labelForId=\"inSaldo\"\r\n          bindLabel=\"nome\"\r\n          bindValue=\"cod\"\r\n          id=\"inSaldo\"\r\n          formControlName=\"IN_SALD\"\r\n          (keydown.enter)=\"onSearch()\"\r\n          placeholder=\"SELECCIONE...\"\r\n        >\r\n        </ng-select>\r\n        </div>\r\n        <div class=\"form-group col-3 pl-0 \">\r\n          <label for=\"integracion\">integracion</label>\r\n          <ng-select\r\n          [searchable]=\"true\"\r\n          [clearable]=\"false\"\r\n          [items]=\"integracion\"\r\n          [virtualScroll]=\"true\"\r\n          labelForId=\"integracion\"\r\n          bindLabel=\"nome\"\r\n          bindValue=\"cod\"\r\n          id=\"integracion\"\r\n          formControlName=\"DS_INTE\"\r\n          (keydown.enter)=\"onSearch()\"\r\n          placeholder=\"SELECCIONE...\"\r\n        >\r\n        </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3 pl-0\">\r\n          <label for=\"itensPorPagina\">Registros</label>\r\n          <select\r\n            class=\"form-control custom-select\"\r\n            (change)=\"setItensPerPage($event); onSearch()\"\r\n            formControlName=\"TT_REGI_PAGI\"\r\n            >\r\n            <option value=\"10\">10</option>\r\n            <option value=\"25\">25</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n            <option value=\"250\">250</option>\r\n            <option value=\"500\">500</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </advanced-filter>\r\n  <div class=\"row\" *ngIf=\"pedidos.length > 0\">\r\n    <div class=\"col-md-4 mb-2\">\r\n      <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n        <div class=\"bg-success rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-paper-plane\"></i></div>\r\n        <div class=\"text-right\" [hidden]=\"loadingNavBar\" >\r\n          <h5\r\n          class=\"font-weight-bolder mb-1\"\r\n          counto\r\n          [step]=\"30\"\r\n          [countTo]=\"integrados\"\r\n          [countFrom]=\"0\"\r\n          [duration]=\"2\"\r\n          (countoChange)=\"countoIntegrados = $event\">\r\n          {{ countoIntegrados | number:'1.0-0' }}\r\n          </h5>\r\n          <div class=\"text-muted small font-weight-bold\">ORDEN DE VENTA TOTAL INTEGRADA</div>\r\n        </div>\r\n        <div class=\"text-right\" *ngIf=\"integradosEmpty\">\r\n          <h5 class=\"font-weight-bolder mb-1\">0</h5>\r\n          <div class=\"text-muted small font-weight-bold\">ORDEN DE VENTA TOTAL INTEGRADA</div>\r\n        </div>\r\n        <div class=\"text-right my-auto\" *ngIf=\"loadingNavBar\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 mb-2\">\r\n      <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n        <div class=\"bg-warning rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-paper-plane\"></i></div>\r\n        <div class=\"text-right\" [hidden]=\"loadingNavBar\">\r\n          <h5\r\n            class=\"font-weight-bolder mb-1\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"noIntegrados\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"2\"\r\n            (countoChange)=\"countoNoIntegrados = $event\">\r\n            {{ countoNoIntegrados | number:'1.0-0' }}\r\n          </h5>\r\n          <div class=\"text-muted small font-weight-bold\">ORDEN DE VENTA TOTAL NO INTEGRADA</div>\r\n        </div>\r\n        <div class=\"text-right\" *ngIf=\"noIntegradosEmpty\">\r\n          <h5 class=\"font-weight-bolder mb-1\">0</h5>\r\n          <div class=\"text-muted small font-weight-bold\">ORDEN DE VENTA TOTAL NO INTEGRADA</div>\r\n        </div>\r\n        <div class=\"text-right my-auto\" *ngIf=\"loadingNavBar\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 mb-2\">\r\n      <div class=\"border rounded bg-white shadow-sm d-flex justify-content-between w-100 p-3\">\r\n        <div class=\"bg-danger rounded-circle text-white icon-40 my-auto\"><i class=\"fas fa-paper-plane\"></i></div>\r\n        <div class=\"text-right\" [hidden]=\"loadingNavBar\">\r\n          <h5\r\n            class=\"font-weight-bolder mb-1\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"InErros\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"2\"\r\n            (countoChange)=\"countoInErros = $event\">\r\n            {{ countoInErros | number:'1.0-0' }}\r\n          </h5>\r\n          <div class=\"text-muted small font-weight-bold\">INTEGRACIONES TOTALES CON ERROR</div>\r\n        </div>\r\n        <div class=\"text-right\" *ngIf=\"InErrosEmpty\">\r\n          <h5 class=\"font-weight-bolder mb-1\">0</h5>\r\n          <div class=\"text-muted small font-weight-bold\">INTEGRACIONES TOTALES CON ERROR</div>\r\n        </div>\r\n        <div class=\"text-right my-auto\" *ngIf=\"loadingNavBar\">\r\n          <div class=\"spinner-border text-dark\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <subtitles\r\n        [data]=\"subtitles\"\r\n        [show]=\"!noResult\">\r\n      </subtitles>\r\n    </div>\r\n  </div>\r\n  <div  class=\"col-12 p-0\" [hidden] = \"loading || noResult\">\r\n    <div>\r\n      <custom-table [config]=\"tableConfig\">\r\n        <ng-template #thead let-thead>\r\n          <tr>\r\n            <th class=\"text-center\">Órdenes de venta</th>\r\n            <th class=\"text-center\">Operación</th>\r\n            <th class=\"text-center\">Fecha del documento</th>\r\n            <th>Subsidiaria</th>\r\n            <th>Cliente</th>\r\n            <th class=\"text-center\">Romaneio</th>\r\n            <th class=\"text-center\">plazo de entrega</th>\r\n            <th class=\"text-center\">Saldo (Tons)</th>\r\n            <th class=\"text-center\"></th>\r\n            <th></th>\r\n            <th class=\"text-center\">\r\n\r\n              <ng-template #tooltipStatusIntegracao>\r\n                <table>\r\n                  <tbody>\r\n                    <tr>\r\n                      <th><i class=\"fas fa-paper-plane text-success\"></i></th>\r\n                      <td class=\"text-left\">Órdenes de venta integrado en Fusion con éxito</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th><i class=\"fas fa-paper-plane text-warning\"></i></th>\r\n                      <td class=\"text-left\">Órdenes de venta no integrado en Fusion</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th><i class=\"fas fa-paper-plane text-danger\"></i></th>\r\n                      <td class=\"text-left\">Órdenes de venta con error de integración</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </ng-template>\r\n\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                [tooltip]=\"tooltipStatusIntegracao\"\r\n                container=\"body\"\r\n                placement=\"left\"\r\n              >\r\n                <i class=\"far fa-question-circle\"></i>\r\n              </button>\r\n            </th>\r\n            <th class=\"text-center\">\r\n              <ng-template #tooltipStatusPedido>\r\n                <table>\r\n                  <tbody>\r\n                    <tr>\r\n                      <th><i class=\"fas fa-user-tie text-success\"></i></th>\r\n                      <td class=\"text-left\">Orden de venta principal</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th><i class=\"fas fa-user-tie text-warning\"></i></th>\r\n                      <td class=\"text-left\">Orden de venta secundaria</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th><i class=\"fas fa-user-tie text-muted\"></i></th>\r\n                      <td class=\"text-left\">Orden no fragmentado</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </ng-template>\r\n\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                [tooltip]=\"tooltipStatusPedido\"\r\n                container=\"body\"\r\n                placement=\"left\"\r\n              >\r\n                <i class=\"far fa-question-circle\"></i>\r\n              </button>\r\n            </th>\r\n            <th>\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                container=\"body\"\r\n                placement=\"left\"\r\n                tooltip=\"Marcar como retira\"\r\n              >\r\n                <i class=\"far fa-question-circle\"></i>\r\n              </button>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template #tbody let-tbody>\r\n          <tr *ngFor=\"let item of pedidos; let i = index\">\r\n            <!-- <td class=\"text-center\" [ngClass]=\"item?.IN_STAT == 1 ? 'border-success' : 'border-danger'\">{{ item?.ID_LOGI_FUSI_PEDI | number: '6.0-0'}}</td> -->\r\n            <td class=\"text-left\" [ngClass]=\"item?.IN_STAT == 1 ? 'border-success' : 'border-danger'\">{{ item?.CD_PEDI }}</td>\r\n            <td class=\"text-center\">{{ item?.TP_OPER}}</td>\r\n            <td class=\"text-center\">{{ item?.DT_PEDI | date: 'dd/MM/yyyy'}}</td>\r\n            <td class=\"text-truncate\">{{ item?.NM_FILI || '-' }}</td>\r\n            <td class=\"text-truncate\">{{ item?.NM_CLIE }}</td>\r\n            <td class=\"text-center\">{{ item?.CD_ROMA_FUSI || '-'  }}</td>\r\n            <td class=\"text-center\">\r\n              <span *ngIf=\"item?.DT_PRZO\">{{ item?.DT_PRZO |  date: 'dd/MM/yyyy'}}</span>\r\n              <span *ngIf=\"!item?.DT_PRZO\">-</span>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <span [tooltip] =\"item?.TT_SALD > 0 ? 'Este pedido tiene un saldo de ' + item.TT_SALD :'Este pedido no tiene saldo'\">{{( item?.TT_SALD | number: '1.3-3') || '0'}}</span>\r\n            </td>\r\n            <td class=\"font-weight-bold text-center\">\r\n              <span\r\n              *ngIf=\"item?.TT_PEDI == 0\"\r\n                tooltip=\"No tiene órdenes secundarias\"\r\n                container=\"body\"\r\n                placement=\"left\"\r\n              >\r\n                -\r\n              </span>\r\n              <span\r\n                *ngIf=\"item?.TT_PEDI > 0\"\r\n                [tooltip]=\"tooltipPedidosIntegrados\"\r\n                container=\"body\"\r\n                placement=\"left\"\r\n              >\r\n                {{ item?.TT_PEDI_INTE }}/{{ item?.TT_PEDI }}\r\n              </span>\r\n\r\n              <ng-template #tooltipPedidosIntegrados>\r\n                <table>\r\n                  <tbody>\r\n                    <tr *ngIf=\"item?.TT_PEDI_INTE > 1\">\r\n                      <td class=\"text-left\">{{item?.TT_PEDI_INTE}} pedidos integrados de {{item?.TT_PEDI}}</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"item?.TT_PEDI_INTE == 1\">\r\n                      <td class=\"text-left\">{{item?.TT_PEDI_INTE}} pedido integrado de {{item?.TT_PEDI}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </ng-template>\r\n\r\n            </td>\r\n            <td class=\"align-middle text-center\">\r\n              <span tooltip=\"Detalhes\" placement=\"left\" container=\"body\" >\r\n                <button type=\"button\" class=\"btn-icon-sm\" (click)=\"openModal(modalDetails, item)\">\r\n                  <i class=\"fas fa-search\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <button\r\n                class=\"btn-icon-sm\"\r\n                tooltip=\"Integrar\"\r\n                placement=\"left\"\r\n                [disabled]=\"item?.IN_DESM == 1\"\r\n                container=\"body\"\r\n                (click)=\"integraPedido(item)\"\r\n                [hidden]=\"item?.loading\">\r\n                <i\r\n                  class=\"fas fa-paper-plane\"\r\n                  [ngClass]=\"{\r\n                    'text-success': item?.DS_INTE === 'I',\r\n                    'text-warning': item?.DS_INTE === 'N',\r\n                    'text-danger': item?.DS_INTE === 'E'}\"\r\n                ></i>\r\n              </button>\r\n              <div class=\"spinner-border text-primary\" role=\"status\" [hidden]=\"!item?.loading\" style=\"height: 1rem; width: 1rem;\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n              </div>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <span  placement=\"left\" container=\"body\">\r\n                <button type=\"button\" class=\"btn-icon-sm\">\r\n                  <i *ngIf=\"item?.IN_DESM == 0\" class=\"fas fa-user-tie text-muted\"></i>\r\n                  <i *ngIf=\"item?.IN_DESM == 1\" class=\"fas fa-user-tie text-success\"></i>\r\n                  <i *ngIf=\"item?.IN_DESM == 2\" class=\"fas fa-user-tie text-warning\"></i>\r\n                </button>\r\n              </span>\r\n            </td>\r\n            <td>\r\n              <span\r\n                [tooltip]=\"item.TP_OPER == 'RETIRA' ? 'Retira' : 'Marcar como retira'\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n              >\r\n                <btn-icon\r\n                  [icon]=\"item.retiraLoading ? 'fas fa-cog fa-spin' : 'fas fa-archive'\"\r\n                  [ngClass]=\"{'text-warning': item.TP_OPER == 'RETIRA'}\"\r\n                  [disabled]=\"item.TP_OPER == 'RETIRA' || item.IN_DESM == 1 || item.IN_ENTR == 1\"\r\n                  size=\"small\"\r\n                  (click)=\"item.TP_OPER == 'RETIRA' || item.IN_DESM == 1 || item.IN_ENTR == 1 || onMarcarRetira(item)\"\r\n                >\r\n                </btn-icon>\r\n                <!-- <button\r\n                  type=\"button\"\r\n                  class=\"btn-icon-sm\"\r\n                  [ngClass]=\"{'text-warning': item.TP_OPER == 'RETIRA'}\"\r\n                  [disabled]=\"item.TP_OPER == 'RETIRA' || item.IN_DESM == 1 || item.IN_ENTR == 1\"\r\n                  (click)=\"onMarcarRetira(item)\"\r\n                >\r\n                  <i [ngClass]=\"item.retiraLoading ? fas fa-archive\"></i>\r\n                </button> -->\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </custom-table>\r\n    </div>\r\n    <div>\r\n      Mostrando {{ itemsPerPage*(currentPage - 1) + 1 }} a {{ currentPage*(itemsPerPage) > totalItems ? totalItems : currentPage*(itemsPerPage) }} de {{ totalItems }}\r\n      <pagination\r\n        [maxSize]=\"10\"\r\n        [totalItems]=\"totalItems\"\r\n        (pageChanged)=\"onPageChanged($event)\"\r\n        [(itemsPerPage)]=\"itemsPerPage\"\r\n        [boundaryLinks]=\"true\"\r\n        [(ngModel)]=\"currentPage\"\r\n        previousText=\"&lsaquo;\"\r\n        nextText=\"&rsaquo;\"\r\n        firstText=\"&laquo;\"\r\n        lastText=\"&raquo;\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading || !noResult\" class=\"text-center d-flex justify-content-center align-items-center\" style=\"height: 250px\">\r\n    <empty-result message=\"Ningún informacion econtrada\"></empty-result>\r\n  </div>\r\n</app-body>\r\n\r\n\r\n<ng-template #modalDetails>\r\n  <logistica-entrega-desmembramento-detalhes\r\n  [pedidoSelecionado] = \"pedidoSelecionado\"\r\n  (close)=\"hideModal()\"\r\n  (reload)=\"onSearch()\"\r\n  >\r\n  </logistica-entrega-desmembramento-detalhes>\r\n</ng-template>\r\n";
      /***/
    },

    /***/
    "9bwc":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/desmembramento/desmembramento.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: LogisticaEntregaDesmembramentoModule */

    /***/
    function bwc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaDesmembramentoModule", function () {
        return LogisticaEntregaDesmembramentoModule;
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


      var _desmembramento_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./desmembramento-routing.module */
      "/1Ba");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/not-found/not-found.module */
      "sCnT");
      /* harmony import */


      var src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/pipes/pipes.module */
      "9Xeq");
      /* harmony import */


      var src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/module-wrapper/module-wrapper.module */
      "RoXV");
      /* harmony import */


      var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/modules/shared.module */
      "UKGz");
      /* harmony import */


      var src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/templates/templates.module */
      "QdM9");
      /* harmony import */


      var ng_brazil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-brazil */
      "hTrW");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! angular2-text-mask */
      "UVXo");
      /* harmony import */


      var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng2-currency-mask */
      "D5nU");
      /* harmony import */


      var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var _desmembramento_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./desmembramento.component */
      "evSM");
      /* harmony import */


      var _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./detalhes/detalhes.component */
      "MjwS");

      var LogisticaEntregaDesmembramentoModule = /*#__PURE__*/_createClass(function LogisticaEntregaDesmembramentoModule() {
        _classCallCheck(this, LogisticaEntregaDesmembramentoModule);
      });

      LogisticaEntregaDesmembramentoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_desmembramento_component__WEBPACK_IMPORTED_MODULE_16__["LogisticaEntregaDesmembramentoComponent"], _detalhes_detalhes_component__WEBPACK_IMPORTED_MODULE_17__["LogisticaEntregaDesmembramentoDetalhesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], angular2_counto__WEBPACK_IMPORTED_MODULE_1__["CountoModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], _desmembramento_routing_module__WEBPACK_IMPORTED_MODULE_2__["LogisticaEntregaDesmembramentoRoutingModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TimepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["SortableModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), src_app_core_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_8__["NotFoundModule"], src_app_shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"], src_app_core_module_wrapper_module_wrapper_module__WEBPACK_IMPORTED_MODULE_10__["ModuleWrapperModule"], src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], src_app_shared_templates_templates_module__WEBPACK_IMPORTED_MODULE_12__["TemplatesModule"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"].forRoot(), ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"].forRoot(), ng_brazil__WEBPACK_IMPORTED_MODULE_13__["NgBrazil"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"], ng2_currency_mask__WEBPACK_IMPORTED_MODULE_15__["CurrencyMaskModule"]]
      })], LogisticaEntregaDesmembramentoModule);
      /***/
    },

    /***/
    "EUHD":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/desmembramento/desmembramento.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function EUHD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naXN0aWNhL2VudHJlZ2EvZGVzbWVtYnJhbWVudG8vZGVzbWVtYnJhbWVudG8uY29tcG9uZW50LnNjc3MifQ== */";
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
    "MjwS":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/desmembramento/detalhes/detalhes.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: LogisticaEntregaDesmembramentoDetalhesComponent */

    /***/
    function MjwS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaDesmembramentoDetalhesComponent", function () {
        return LogisticaEntregaDesmembramentoDetalhesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalhes.component.html */
      "nV8Z");
      /* harmony import */


      var _detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalhes.component.scss */
      "U0fX");
      /* harmony import */


      var _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var _services_fusion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/fusion.service */
      "H8J8");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_desmembramento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../services/desmembramento.service */
      "PUeC");
      /* harmony import */


      var src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/core/pdf.service */
      "GTII");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var LogisticaEntregaDesmembramentoDetalhesComponent = /*#__PURE__*/function () {
        function LogisticaEntregaDesmembramentoDetalhesComponent(pnotify, dateService, localeService, confirmModalService, pdfService, desmembramentoService, fusionService) {
          _classCallCheck(this, LogisticaEntregaDesmembramentoDetalhesComponent);

          this.pnotify = pnotify;
          this.dateService = dateService;
          this.localeService = localeService;
          this.confirmModalService = confirmModalService;
          this.pdfService = pdfService;
          this.desmembramentoService = desmembramentoService;
          this.fusionService = fusionService;
          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
          this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
          this.tableConfig = {
            subtitleBorder: false,
            border: false,
            small: true,
            hover: false,
            theme: {
              color: 'write'
            }
          }; //LOADINGS

          this.loading = false; //VARIAVEIS

          this.produtos = [];
          this.quantidade = 1;
          this.produtosAssociados = [];
          this.pedidos = [];
          this.pedidosAssociados = [];
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntregaDesmembramentoDetalhesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProdutos();

            if (this.pedidoSelecionado.IN_DESM == 1) {
              this.getPedidosAssociados({
                ID_REFE: this.pedidoSelecionado.ID_LOGI_FUSI_PEDI,
                IN_STAT: '1'
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "onClose",
          value: function onClose() {
            this.close.emit(true);
          }
        }, {
          key: "onDownload",
          value: function onDownload(params) {
            this.pnotify.notice('El documento PDF se generará pronto!');
            var romaneio = params['CD_ROMA'];
            this.pdfService.download('pedido-pdf', "ordenes- ".concat(romaneio));
          }
        }, {
          key: "onPrint",
          value: function onPrint() {
            window.print();
          }
        }, {
          key: "getProdutos",
          value: function getProdutos() {
            var _this = this;

            var params = _defineProperty({}, 'ID_LOGI_FUSI_PEDI', this.pedidoSelecionado.ID_LOGI_FUSI_PEDI);

            this.loadingProdutos = true;
            this.desmembramentoService.getProdutos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this.loadingProdutos = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this.produtos = response.body['data'];
                _this.totalProdutos = response.body['total'];
              } else {
                _this.pnotify.notice("Ningún órdenes de venta situado");
              }
            }, function (error) {
              _this.pnotify.error();
            });
          }
        }, {
          key: "onAddPedido",
          value: function onAddPedido(produtos) {
            var _this2 = this;

            var _a; // Verifica se o pedido já foi desmembrado, se foi, pega somente os materiais com saldo maior do que zero


            produtos = ((_a = this.pedidoSelecionado) === null || _a === void 0 ? void 0 : _a.IN_DESM) == '1' ? produtos === null || produtos === void 0 ? void 0 : produtos.filter(function (el) {
              return (el === null || el === void 0 ? void 0 : el.TT_SALD) > 0;
            }) : produtos; // Se não há produtos, finaliza a execução

            if (produtos.length == 0) {
              this.pnotify.notice('el pedido no tiene saldo!');
              return;
            } // Cria uma cópia do objeto para evitar que exista alteração de valores no objeto pai


            var _produtos = JSON.parse(JSON.stringify(produtos));

            var peso = _produtos.reduce(function (acc, cur) {
              return acc += cur['TT_PROD_PESO'];
            }, 0); // adiciona os novos produtos ao pedido


            this.pedidos.push({
              pedidoId: produtos[0].ID_LOGI_FUSI_PEDI,
              CD_PEDI: this.pedidoSelecionado.CD_PEDI,
              TT_PESO: peso,
              produtos: _produtos
            });

            _produtos.forEach(function (item) {
              var saldoPeso = item.TT_PROD_PESO;
              var saldoQuantidade = item.TT_PROD; // Calcula o saldo disponível

              _this2.produtos.filter(function (produto) {
                return produto.CD_PROD == item.CD_PROD && produto.NR_SQNC == item.NR_SQNC;
              }).map(function (produto) {
                var novoSaldoQuantidade = produto.TT_SALD - saldoQuantidade;
                var novoSaldoPeso = produto.TT_SALD_PESO - saldoPeso;

                if (novoSaldoQuantidade < 0) {
                  _this2.pnotify.notice("La cantidad ingresada es mayor que el saldo actual");

                  produto['TT_SALD'] = novoSaldoQuantidade + item.TT_SALD;
                  produto['TT_SALD_PESO'] = novoSaldoPeso + item.TT_SALD_PESO;
                  item.TT_PROD = 0;
                  item.TT_PROD_PESO = 0;
                  item.TT_SALD = 0;
                  item.TT_SALD_PESO = 0;
                  return;
                }

                produto['TT_SALD'] = novoSaldoQuantidade;
                produto['TT_SALD_PESO'] = novoSaldoPeso;
              });
            });
          }
        }, {
          key: "onDesmembrar",
          value: function onDesmembrar(produtos) {
            var _produtos = JSON.parse(JSON.stringify(produtos)); // verifica se ha produto no pedido para desmembramento


            var saldo = _produtos.reduce(function (acc, cur) {
              return acc += cur['TT_SALD'];
            }, 0);

            if (!saldo) {
              this.pnotify.notice('el pedido no tiene saldo!');
              return;
            }

            var quantidade = this.quantidade;

            _produtos.map(function (el) {
              var _a, _b, _c, _d;

              el.TT_PESO_UNIT = el.TT_PROD_PESO / el.TT_PROD;

              if (quantidade == 1) {
                el.TT_PROD = ((_a = el === null || el === void 0 ? void 0 : el.TT_SALD) !== null && _a !== void 0 ? _a : el === null || el === void 0 ? void 0 : el.TT_PROD) / quantidade;
                el.TT_PROD_PESO = ((_b = el === null || el === void 0 ? void 0 : el.TT_SALD_PESO) !== null && _b !== void 0 ? _b : el === null || el === void 0 ? void 0 : el.TT_PROD_PESO) / quantidade;
                return el;
              }

              el.TT_PROD = Math.floor(((_c = el === null || el === void 0 ? void 0 : el.TT_SALD) !== null && _c !== void 0 ? _c : el === null || el === void 0 ? void 0 : el.TT_PROD) / quantidade);
              el.TT_PROD_PESO = Math.floor(((_d = el === null || el === void 0 ? void 0 : el.TT_SALD_PESO) !== null && _d !== void 0 ? _d : el === null || el === void 0 ? void 0 : el.TT_PROD_PESO) / quantidade);
              return el;
            });

            for (var i = 0; i < quantidade; i++) {
              this.onAddPedido(_produtos);
            }
          }
        }, {
          key: "OnCalcPeso",
          value: function OnCalcPeso() {
            var _this3 = this;

            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var item = arguments.length > 1 ? arguments[1] : undefined;
            var pedido = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            var _a, _b;

            var produtos = [];
            var pedidos = [].concat(_toConsumableArray(this.pedidos), _toConsumableArray(this.pedidosAssociados));
            pedidos.map(function (pedido) {
              return pedido.produtos;
            }).forEach(function (_produtos) {
              produtos.push.apply(produtos, _toConsumableArray(_produtos));
            }); // Calcula o saldo consumido

            var saldoQuantidade = produtos.filter(function (produto) {
              return produto.CD_PROD == item.CD_PROD && produto.NR_SQNC == item.NR_SQNC;
            }).map(function (produto) {
              return produto.TT_PROD;
            }).reduce(function (total, corrente) {
              return total + corrente;
            }, 0);
            /* const saldoPeso = produtos
              .filter(produto => (produto.CD_PROD == item.CD_PROD) && (produto.NR_SQNC == item.NR_SQNC))
              .map(produto => produto.TT_PROD_PESO)
              .reduce((total, corrente) => total + corrente, 0) */
            // Calcula o saldo disponível

            this.produtos.filter(function (produto) {
              return produto.CD_PROD == item.CD_PROD && produto.NR_SQNC == item.NR_SQNC;
            }).map(function (produto) {
              var novoSaldoQuantidade = produto.TT_PROD - saldoQuantidade;
              var novoSaldoPeso = novoSaldoQuantidade * (produto.TT_PROD_PESO / produto.TT_PROD);

              if (novoSaldoQuantidade < 0) {
                _this3.pnotify.notice("La cantidad ingresada es mayor que el saldo actual");

                item.TT_PROD = 0;
                item.TT_PROD_PESO = 0;
                item.TT_SALD = 0;
                item.TT_SALD_PESO = 0;

                var _saldoQuantidade = produtos.filter(function (produto) {
                  return produto.CD_PROD == item.CD_PROD && produto.NR_SQNC == item.NR_SQNC;
                }).map(function (produto) {
                  return produto.TT_PROD;
                }).reduce(function (total, corrente) {
                  return total + corrente;
                }, 0);

                var saldoPeso = produtos.filter(function (produto) {
                  return produto.CD_PROD == item.CD_PROD && produto.NR_SQNC == item.NR_SQNC;
                }).map(function (produto) {
                  return produto.TT_PROD_PESO;
                }).reduce(function (total, corrente) {
                  return total + corrente;
                }, 0);
                produto['TT_SALD'] = produto.TT_PROD - _saldoQuantidade;
                produto['TT_SALD_PESO'] = produto.TT_PROD_PESO - saldoPeso;
                return;
              }

              produto['TT_SALD'] = novoSaldoQuantidade;
              produto['TT_SALD_PESO'] = novoSaldoPeso;
            });
            item['TT_PROD_PESO'] = item['TT_PROD'] * item['TT_PESO_UNIT']; // calcula o peso total do pedido

            if (pedido) {
              pedido.TT_PESO = (_b = (_a = pedido === null || pedido === void 0 ? void 0 : pedido.produtos) === null || _a === void 0 ? void 0 : _a.map(function (produto) {
                return parseFloat(produto.TT_PROD_PESO);
              })) === null || _b === void 0 ? void 0 : _b.reduce(function (acc, cur) {
                return acc += cur;
              }, 0);
              console.log(pedido);
            }
          }
        }, {
          key: "removePedido",
          value: function removePedido(index, pedido) {
            var _this4 = this;

            this.pedidos.splice(index, 1);
            pedido.produtos.map(function (el) {
              el.TT_PROD = 0;

              _this4.OnCalcPeso(null, el);
            });
          }
        }, {
          key: "removeProduto",
          value: function removeProduto(indexPedido, indexProduto) {
            if (this.pedidos[indexPedido].produtos.length == 1) {
              this.pnotify.notice('Insertar al menos un producto!');
              return;
            }

            var produto = this.pedidos[indexPedido].produtos[indexProduto];
            produto.TT_PROD = 0;
            this.OnCalcPeso(null, produto);
            this.pedidos[indexPedido].produtos.splice(indexProduto, 1);
          }
        }, {
          key: "postDesmembramento",
          value: function postDesmembramento() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this5 = this;

              var request, promise;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    request = [];
                    this.loading = true;

                    promise = function promise() {
                      _this5.pedidos.forEach(function (pedido, index) {
                        var _pedido = JSON.parse(JSON.stringify(pedido));

                        if (!_pedido.prazoEntrega) {
                          _this5.pnotify.notice("informar el tiempo de entrega del pedido ".concat(_pedido.CD_PEDI, "-").concat(index + 1 + _this5.pedidosAssociados.length));

                          return;
                        }

                        _pedido['prazoEntrega'] = _pedido.prazoEntrega instanceof Date ? _this5.dateService.convertToUrlDate(_pedido.prazoEntrega) : pedido.prazoEntrega;
                        request.push(_this5.desmembramentoService.post(_pedido));
                      });
                    };

                    _context.next = 5;
                    return Promise.resolve(promise());

                  case 5:
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                      _this5.loading = false;
                    })).subscribe(function (responses) {
                      responses.forEach(function (response) {
                        if (response.status === 200) {
                          _this5.pnotify.success('Pedido guardado correctamente!');

                          _this5.reload.emit(true);

                          _this5.close.emit(true);
                        } else {
                          _this5.pnotify.error();
                        }
                      });
                    }, function (error) {
                      try {
                        _this5.pnotify.error(error.error.message);
                      } catch (error) {
                        _this5.pnotify.error();
                      }
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sendDesmembramento",
          value: function sendDesmembramento() {
            var _this6 = this;

            var saldoTotal = this.produtos.map(function (el) {
              return el.TT_SALD;
            }).reduce(function (total, corrente) {
              return total + corrente;
            });

            if (saldoTotal > 0) {
              this.confirmChange().subscribe(function (response) {
                if (response != true) {
                  return;
                }

                _this6.postDesmembramento();
              }, function (error) {
                _this6.pnotify.error();
              });
              return;
            }

            this.postDesmembramento();
          }
        }, {
          key: "confirmChange",
          value: function confirmChange() {
            return this.confirmModalService.showConfirm(null, null, 'Este pedido aún tiene saldo, de verdad quieres continuar ?', 'Cancelar', 'Continuar');
          }
        }, {
          key: "getPedidosAssociados",
          value: function getPedidosAssociados(params) {
            var _this7 = this;

            this.loadingPedidosAssociados = true;
            this.fusionService.getPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              _this7.loadingPedidosAssociados = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this7.pedidosAssociados = response.body['data'];

                _this7.pedidosAssociados.map(function (pedido) {
                  _this7.getProdutosAssociados(pedido);

                  pedido.prazoEntrega = new Date(pedido.DT_PRZO);
                  return pedido;
                });
              } else {
                /* this.pnotify.notice("Ningún órdenes de venta situado") */
              }
            }, function (error) {
              _this7.pnotify.error();
            });
          }
        }, {
          key: "getProdutosAssociados",
          value: function getProdutosAssociados(pedido) {
            var _this8 = this;

            pedido['loadingProdutosAssociados'] = true;
            this.desmembramentoService.getProdutos({
              ID_LOGI_FUSI_PEDI: pedido.ID_LOGI_FUSI_PEDI
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              pedido['loadingProdutosAssociados'] = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                var produtos = response.body['data'];
                pedido.produtos = produtos;
              } else {
                _this8.pnotify.notice("Ningún órdenes de venta situado");
              }
            }, function (error) {
              try {
                _this8.pnotify.error(error.error.message);
              } catch (error) {
                _this8.pnotify.error();
              }
            });
          }
        }, {
          key: "integraPedido",
          value: function integraPedido(item) {
            var _this9 = this;

            item.loading = true;
            var params = {
              CD_FILI: item === null || item === void 0 ? void 0 : item.CD_FILI,
              CD_PEDI: item === null || item === void 0 ? void 0 : item.CD_PEDI
            };
            this.fusionService.integraPedidoFusion(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
              item.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this9.pnotify.success();

              if (item["DS_INTE"] == "I") {
                return;
              }

              item["DS_INTE"] = "I";
              item["DT_INTE"] = new Date();
              _this9.pedidoSelecionado.DS_INTE = "I";
              _this9.pedidoSelecionado.DT_INTE = new Date();

              _this9.reload.emit(true);
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this9.pnotify.error(message) : _this9.pnotify.error();
            });
          }
        }, {
          key: "onExcluirPedido",
          value: function onExcluirPedido(pedido) {
            var _this10 = this;

            this.confirmModalService.showConfirm('null', null, 'Este pedido aún tiene saldo, de verdad quieres continuar ?', 'Cancelar', 'Continuar').subscribe(function (accept) {
              if (accept === false) {
                return;
              }

              pedido.cancelamentoLoading = true;
              var _params = {
                "ID_LOGI_FUSI_PEDI": pedido === null || pedido === void 0 ? void 0 : pedido.ID_LOGI_FUSI_PEDI,
                "DT_PRZO": pedido === null || pedido === void 0 ? void 0 : pedido.DT_PRZO,
                "IN_STAT": "0"
              };

              _this10.desmembramentoService.put(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {//pedido.cancelamentoLoading = false;
              })).subscribe(function (response) {
                if (response.status !== 200) {
                  _this10.reload.emit(true);

                  return;
                }
                /* if(pedido.IN_INTE == 0){
                  this.pedidosAssociados = this.pedidosAssociados.filter(item => item?.ID_LOGI_FUSI_PEDI != pedido?.ID_LOGI_FUSI_PEDI);
                  pedido.cancelamentoLoading = false;
                  this.reload.emit(true);
                  return;
                } */


                _this10.fusionService.integraPedidoFusion(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                  pedido.cancelamentoLoading = false;

                  _this10.reload.emit(true);
                })).subscribe(function (response) {
                  if (response.status !== 200) {
                    return;
                  }

                  _this10.pedidosAssociados = _this10.pedidosAssociados.filter(function (item) {
                    return (item === null || item === void 0 ? void 0 : item.ID_LOGI_FUSI_PEDI) != (pedido === null || pedido === void 0 ? void 0 : pedido.ID_LOGI_FUSI_PEDI);
                  });

                  _this10.pnotify.success();
                }, function (error) {
                  pedido.cancelamentoLoading = false;

                  _this10.pnotify.error("No se pudo cancelar el pedido en la Fusión");
                });
              }, function (error) {
                _this10.reload.emit(true);

                _this10.pnotify.error();
              });
            });
          }
        }, {
          key: "onMarcarRetira",
          value: function onMarcarRetira(pedido) {
            var _this11 = this;

            pedido.retiraLoading = true;
            var _params = {
              'ID_LOGI_FUSI_PEDI': pedido === null || pedido === void 0 ? void 0 : pedido.ID_LOGI_FUSI_PEDI,
              'TP_OPER': 'RETIRA'
            };
            this.desmembramentoService.put(_params).subscribe(function (response) {
              if (response.status != 200) {
                _this11.reload.emit(true);

                return;
              }

              pedido.TP_OPER = 'RETIRA';

              if (pedido.DS_INTE == "N") {
                pedido.retiraLoading = false;

                _this11.reload.emit(true);

                return;
              }

              _this11.fusionService.integraPedidoFusion(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                pedido.retiraLoading = false;

                _this11.reload.emit(true);
              })).subscribe(function (response) {
                if (response.status !== 200) {
                  return;
                }
              }, function (error) {
                _this11.pnotify.error("No se pudo cancelar el pedido en la Fusión");
              });
            }, function (error) {
              pedido.retiraLoading = false;

              _this11.reload.emit(true);

              _this11.pnotify.error("Se produjo un error al procesar la solicitud");
            });
          }
        }]);

        return LogisticaEntregaDesmembramentoDetalhesComponent;
      }();

      LogisticaEntregaDesmembramentoDetalhesComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"]
        }, {
          type: _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"]
        }, {
          type: src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_9__["PdfService"]
        }, {
          type: _services_desmembramento_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntregaDesmembramentoService"]
        }, {
          type: _services_fusion_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntregaFusionService"]
        }];
      };

      LogisticaEntregaDesmembramentoDetalhesComponent.propDecorators = {
        pedidoSelecionado: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"]
        }],
        reload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Output"]
        }]
      };
      LogisticaEntregaDesmembramentoDetalhesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'logistica-entrega-desmembramento-detalhes',
        template: _raw_loader_detalhes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalhes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_10__["PNotifyService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsLocaleService"], _shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalService"], src_app_shared_services_core_pdf_service__WEBPACK_IMPORTED_MODULE_9__["PdfService"], _services_desmembramento_service__WEBPACK_IMPORTED_MODULE_8__["LogisticaEntregaDesmembramentoService"], _services_fusion_service__WEBPACK_IMPORTED_MODULE_4__["LogisticaEntregaFusionService"]])], LogisticaEntregaDesmembramentoDetalhesComponent);
      /***/
    },

    /***/
    "U0fX":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/desmembramento/detalhes/detalhes.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function U0fX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@media print {\n  #pedido-pdf {\n    background-color: white;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 15px;\n    font-size: 14px;\n    line-height: 18px;\n  }\n}\nbutton[disabled] {\n  cursor: no-drop;\n}\nul {\n  list-style: none;\n  padding: 0;\n}\n.card-indication:hover {\n  box-shadow: 10px 10px 8px 0px rgba(0, 0, 0, 0.15);\n  transition: 0.2s;\n}\n.button_action {\n  width: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpc3RpY2EvZW50cmVnYS9kZXNtZW1icmFtZW50by9kZXRhbGhlcy9kZXRhbGhlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0ksdUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBQUo7QUFDRjtBQUdBO0VBQ0UsZUFBQTtBQURGO0FBS0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFGRjtBQUtBO0VBQ0UsaURBQUE7RUFDQSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxZQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2lzdGljYS9lbnRyZWdhL2Rlc21lbWJyYW1lbnRvL2RldGFsaGVzL2RldGFsaGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbkBtZWRpYSBwcmludCB7XHJcbiAgI3BlZGlkby1wZGYge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvbltkaXNhYmxlZF17XHJcbiAgY3Vyc29yOiBuby1kcm9wO1xyXG59XHJcblxyXG5cclxudWx7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiAgXHJcbi5jYXJkLWluZGljYXRpb246aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA4cHggMHB4IHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuLmJ1dHRvbl9hY3Rpb257XHJcbiAgd2lkdGg6IDExMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "evSM":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/logistica/entrega/desmembramento/desmembramento.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: LogisticaEntregaDesmembramentoComponent */

    /***/
    function evSM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogisticaEntregaDesmembramentoComponent", function () {
        return LogisticaEntregaDesmembramentoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_desmembramento_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./desmembramento.component.html */
      "3pdl");
      /* harmony import */


      var _desmembramento_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./desmembramento.component.scss */
      "EUHD");
      /* harmony import */


      var _services_fusion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/fusion.service */
      "H8J8");
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


      var src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/core/router.service */
      "w8rm");
      /* harmony import */


      var src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/core/date.service */
      "Rk3r");
      /* harmony import */


      var src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/requests/atividades.service */
      "0PD5");
      /* harmony import */


      var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap */
      "Jc0W");
      /* harmony import */


      var src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/core/pnotify.service */
      "g+W+");
      /* harmony import */


      var src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/shared/modules/confirm-modal/confirm-modal.service */
      "FOez");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_desmembramento_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/desmembramento.service */
      "PUeC");
      /* harmony import */


      var _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../cadastros/filiais/services/filiais.service */
      "NXOV"); // angular
      // services
      // ngx
      // interfaces


      var LogisticaEntregaDesmembramentoComponent = /*#__PURE__*/function () {
        function LogisticaEntregaDesmembramentoComponent(formBuilder, activatedRoute, route, fusionService, routerService, localeService, dateService, modalService, atividadesService, filiaisService, pnotify, confirmModalService, desmembramentoService) {
          _classCallCheck(this, LogisticaEntregaDesmembramentoComponent);

          this.formBuilder = formBuilder;
          this.activatedRoute = activatedRoute;
          this.route = route;
          this.fusionService = fusionService;
          this.routerService = routerService;
          this.localeService = localeService;
          this.dateService = dateService;
          this.modalService = modalService;
          this.atividadesService = atividadesService;
          this.filiaisService = filiaisService;
          this.pnotify = pnotify;
          this.confirmModalService = confirmModalService;
          this.desmembramentoService = desmembramentoService;
          this.breadCrumbTree = [];
          this.pedidos = [];
          this.filiais = [];
          this.pedidoSelecionado = [];
          this.tipoOperacao = []; //CARDS

          this.integrados = 0;
          this.integradosEmpty = false;
          this.noIntegrados = 0;
          this.noIntegradosEmpty = false;
          this.InErros = 0;
          this.InErrosEmpty = false;
          /* Pagination */

          this.itemsPerPage = 100;
          this.currentPage = 1;
          this.totalItems = 0;
          this.begin = 0;
          this.end = this.itemsPerPage;
          /* Pagination */

          this.tipos = [{
            cod: '1',
            nome: 'Orden de venta principal'
          }, {
            cod: '2',
            nome: 'Orden de venta secundaria'
          }, {
            cod: '0',
            nome: 'Orden no fragmentado'
          }];
          this.inSaldo = [{
            cod: '1',
            nome: 'Registros con saldo'
          }, {
            cod: '0',
            nome: 'Registros que no tienen saldo'
          }, {
            cod: '',
            nome: 'Todos los registros'
          }];
          this.integracion = [{
            cod: 'I',
            nome: 'Integrado'
          }, {
            cod: 'N',
            nome: 'No integrado'
          }, {
            cod: 'E',
            nome: 'Con error'
          }, {
            cod: '',
            nome: 'Todos los registros'
          }];
          this.subtitles = [{
            id: 1,
            text: 'Activo',
            color: 'green'
          }, {
            id: 2,
            text: 'Inactivo',
            color: 'red'
          }];
          /*loading*/

          this.loading = true;
          this.loadingNavBar = false;
          this.loadingFiliais = false;
          this.noResult = true;
          /*loading*/

          this.tableConfig = {
            subtitleBorder: true
          };
          this.localeService.use('pt-br');
          this.bsConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue'
          }, {
            adaptivePosition: true
          }, {
            showWeekNumbers: false
          });
        }

        _createClass(LogisticaEntregaDesmembramentoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForm();
            this.registraAcesso();
            this.setBreadCrumb();
            this.onActivatedRoute();
            this.getFiliais();
            this.getTipoOperacao();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.$activatedRouteSubscription.unsubscribe();
          }
        }, {
          key: "onActivatedRoute",
          value: function onActivatedRoute() {
            var _this12 = this;

            this.$activatedRouteSubscription = this.activatedRoute.queryParams.subscribe(function (response) {
              var _a, _b, _c;

              var _response = _this12.routerService.getBase64UrlParams(response);

              if (Object.keys(_response).length > 0) {
                _response['CD_FILI'] = (_response === null || _response === void 0 ? void 0 : _response.CD_FILI) ? (_a = _response === null || _response === void 0 ? void 0 : _response.CD_FILI) === null || _a === void 0 ? void 0 : _a.split(',') : [];
                _response['IN_DESM'] = (_response === null || _response === void 0 ? void 0 : _response.IN_DESM) ? (_b = _response === null || _response === void 0 ? void 0 : _response.IN_DESM) === null || _b === void 0 ? void 0 : _b.split(',') : [];
                _response['TP_OPER'] = (_response === null || _response === void 0 ? void 0 : _response.TP_OPER) ? (_c = _response === null || _response === void 0 ? void 0 : _response.TP_OPER) === null || _c === void 0 ? void 0 : _c.split(',') : [];

                _this12.form.patchValue(_response);

                _this12.getPedidos(_this12.getParams());
              } else {
                _this12.loading = false;
              }
            });
          }
        }, {
          key: "getFiliais",
          value: function getFiliais() {
            var _this13 = this;

            this.loadingFiliais = true;
            this.filiaisService.getFiliais({
              status: '1'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this13.loadingFiliais = false;
            })).subscribe({
              next: function next(response) {
                _this13.filiais = response.body['data'];
              },
              error: function error() {
                _this13.pnotify.error();
              }
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.form = this.formBuilder.group({
              CD_PEDI: [null],
              CD_FILI: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              ID_LOGI_FUSI_PEDI: [null],
              DS_CLIE: [null],
              TP_OPER: [['DEMEMBRAMENTO', 'FACTURA']],
              IN_SALD: [''],
              CD_ROMA: [null],
              DS_INTE: [''],
              IN_DESM: [['1', '0']],
              DT_INIC: [new Date()],
              DT_FINA: [new Date()],
              TT_REGI_PAGI: [100],
              PAGI: [1],
              TIME: [new Date().getTime()]
            });
          }
        }, {
          key: "registraAcesso",
          value: function registraAcesso() {
            this.atividadesService.registrarAcesso().subscribe();
          }
        }, {
          key: "setBreadCrumb",
          value: function setBreadCrumb() {
            var _a;

            var submoduloId = (_a = this.activatedRoute.snapshot.params) === null || _a === void 0 ? void 0 : _a.idSubModulo;
            this.breadCrumbTree = [{
              descricao: 'Logistica'
            }, {
              descricao: 'Gestíon de Entregas',
              routerLink: "/logistica/entrega/".concat(submoduloId)
            }, {
              descricao: 'LISTA DE DESMEMBRAMIENTO'
            }];
          }
        }, {
          key: "setItensPerPage",
          value: function setItensPerPage(ev) {
            this.itemsPerPage = ev.itensPorPagina;
            return this.itemsPerPage;
          }
        }, {
          key: "openRegister",
          value: function openRegister(item) {
            var queryParams = item ? this.routerService.setBase64UrlParams({
              ID_LOGI_FUSI_PEDI: item["ID_LOGI_FUSI_PEDI"]
            }) : {};
            this.route.navigate(["../cadastro"], {
              relativeTo: this.activatedRoute,
              queryParams: queryParams
            });
          }
        }, {
          key: "openModal",
          value: function openModal(template, pedido) {
            this.pedidoSelecionado = pedido;
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
          /* Paginação */

          /* Paginação */

        }, {
          key: "onPageChanged",
          value: function onPageChanged(event) {
            this.form.get('TIME').setValue(new Date().getTime());
            this.form.get('PAGI').setValue(event.page);
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
          /* Paginação */

          /* Paginação */

        }, {
          key: "getParams",
          value: function getParams() {
            var _params = {};
            var _obj = this.form.value;

            for (var prop in _obj) {
              if (_obj[prop]) {
                if (_obj[prop] instanceof Date) _params[prop] = this.dateService.convertToUrlDate(_obj[prop]);else if (Array.isArray(_obj[prop])) _params[prop] = _obj[prop].toString();else _params[prop] = _obj[prop];
              }
            }

            return _params;
          }
        }, {
          key: "onSearch",
          value: function onSearch() {
            this.form.get("TIME").setValue(new Date().getTime());
            this.route.navigate([], {
              relativeTo: this.activatedRoute,
              queryParams: this.routerService.setBase64UrlParams(this.getParams())
            });
          }
        }, {
          key: "getTipoOperacao",
          value: function getTipoOperacao(params) {
            var _this14 = this;

            this.desmembramentoService.getTipoOperacao(params).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this14.tipoOperacao = response.body['data'];
            }, function (error) {});
          }
        }, {
          key: "getPedidos",
          value: function getPedidos(params) {
            var _this15 = this;

            var _a;

            (_a = this.$service) === null || _a === void 0 ? void 0 : _a.unsubscribe();

            if (!this.loading) {
              this.loadingNavBar = true;
            }

            this.$service = this.fusionService.getPedidos(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              _this15.loading = false;
              _this15.loadingNavBar = false;
            })).subscribe(function (response) {
              if (response.status === 200) {
                _this15.noResult = false;
                _this15.integrados = response.body['counters']['integrados'];
                _this15.noIntegrados = response.body['counters']['naoIntegrados'];
                _this15.InErros = response.body['counters']['comErro'];
                _this15.pedidos = response.body['data'];
                _this15.totalItems = ++response.body['total'];
                _this15.itemsPerPage = _this15.form.get('TT_REGI_PAGI').value;
              } else {
                _this15.noResult = true;
                _this15.pedidos = [];

                _this15.pnotify.notice("Ningún órdenes de venta situado");
              }
            }, function (error) {
              _this15.pedidos = [];
              _this15.noResult = true;

              _this15.pnotify.error();
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.form.reset();
            this.form.updateValueAndValidity();
            this.form.get("TT_REGI_PAGI").setValue(100);
            this.noResult = true;
            this.route.navigate([]);
            this.pedidos = [];
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
        }, {
          key: "integraPedido",
          value: function integraPedido(item) {
            var _this16 = this;

            item.loading = true;
            var params = {
              /* CD_FILI: item?.CD_FILI,
              CD_PEDI: item?.CD_PEDI, */
              ID_LOGI_FUSI_PEDI: item.ID_LOGI_FUSI_PEDI
            };
            this.fusionService.integraPedidoFusion(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
              item.loading = false;
            })).subscribe(function (response) {
              if (response.status !== 200) {
                return;
              }

              _this16.pnotify.success();

              if (item["DS_INTE"] == "I") {
                return;
              }

              _this16.integrados++;

              if (item["DS_INTE"] == "E") {
                _this16.noIntegrados--;
              } else if (item["DS_INTE"] == "N") {
                _this16.InErros--;
              }

              item["DS_INTE"] = "I";
              item["DT_INTE"] = new Date();
            }, function (error) {
              var _a;

              var message = (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message;
              message ? _this16.pnotify.error(message) : _this16.pnotify.error();
            });
          }
        }, {
          key: "onMarcarRetira",
          value: function onMarcarRetira(pedido) {
            var _this17 = this;

            pedido.retiraLoading = true;
            var _params = {
              'ID_LOGI_FUSI_PEDI': pedido === null || pedido === void 0 ? void 0 : pedido.ID_LOGI_FUSI_PEDI,
              'TP_OPER': 'RETIRA'
            };
            this.desmembramentoService.put(_params).subscribe(function (response) {
              if (response.status != 200) {
                return;
              }

              pedido.TP_OPER = 'RETIRA';

              if (pedido.IN_INTE == 0) {
                pedido.retiraLoading = false;
                return;
              }

              _this17.fusionService.integraPedidoFusion(_params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
                pedido.retiraLoading = false;
              })).subscribe(function (response) {
                if (response.status !== 200) {
                  return;
                }
              }, function (error) {
                _this17.pnotify.error("No se pudo cancelar el pedido en la Fusión");
              });
            }, function (error) {
              pedido.retiraLoading = false;

              _this17.pnotify.error("Se produjo un error al procesar la solicitud");
            });
          }
        }]);

        return LogisticaEntregaDesmembramentoComponent;
      }();

      LogisticaEntregaDesmembramentoComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_fusion_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaFusionService"]
        }, {
          type: src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"]
        }, {
          type: src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"]
        }, {
          type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"]
        }, {
          type: src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"]
        }, {
          type: _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_15__["LogisticaFiliaisService"]
        }, {
          type: src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"]
        }, {
          type: src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"]
        }, {
          type: _services_desmembramento_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntregaDesmembramentoService"]
        }];
      };

      LogisticaEntregaDesmembramentoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'logistica-entrega-desmembramento',
        template: _raw_loader_desmembramento_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_desmembramento_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_fusion_service__WEBPACK_IMPORTED_MODULE_3__["LogisticaEntregaFusionService"], src_app_shared_services_core_router_service__WEBPACK_IMPORTED_MODULE_7__["RouterService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"], src_app_shared_services_core_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["BsModalService"], src_app_shared_services_requests_atividades_service__WEBPACK_IMPORTED_MODULE_9__["AtividadesService"], _cadastros_filiais_services_filiais_service__WEBPACK_IMPORTED_MODULE_15__["LogisticaFiliaisService"], src_app_shared_services_core_pnotify_service__WEBPACK_IMPORTED_MODULE_11__["PNotifyService"], src_app_shared_modules_confirm_modal_confirm_modal_service__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalService"], _services_desmembramento_service__WEBPACK_IMPORTED_MODULE_14__["LogisticaEntregaDesmembramentoService"]])], LogisticaEntregaDesmembramentoComponent);
      /***/
    },

    /***/
    "nV8Z":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/logistica/entrega/desmembramento/detalhes/detalhes.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nV8Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div id=\"modalDetalhes\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"mtc-title mb-0 my-auto\" >Detalles del pedido -  {{pedidoSelecionado?.CD_PEDI}}</h4>\r\n    <div>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-icon-sm mx-3\"\r\n        tooltip=\"Download\"\r\n        container=\"body\"\r\n        (click)=\"onDownload(pedidoSelecionado)\"\r\n      >\r\n        <i class=\"fas fa-download\"></i>\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-icon-sm mr-3\"\r\n        tooltip=\"Imprimir\"\r\n        container=\"body\"\r\n        (click)=\"onPrint()\"\r\n      >\r\n        <i class=\"fas fa-print\"></i>\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn-icon-sm\"\r\n        tooltip=\"Fechar\"\r\n        container=\"body\"\r\n        (click)=\"onClose()\"\r\n      >\r\n        <i class=\"fas fa-times\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body\" id=\"pedido-pdf\" >\r\n    <div class=\"d-flex\">\r\n      <div class=\"justify-content-between col-8\">\r\n        <div class=\"mb-1 d-flex justify-content-between\">\r\n          <span class=\"d-block text-uppercase font-weight-bolder\" *ngIf=\"pedidoSelecionado?.CD_CLIE\">({{ pedidoSelecionado?.CD_CLIE }}) &nbsp; {{ pedidoSelecionado?.NM_CLIE }}</span>\r\n        </div>\r\n        <div class=\"d-block text-uppercase\">\r\n          <span *ngIf=\"pedidoSelecionado?.DS_ENDE\">{{ pedidoSelecionado?.DS_ENDE }}</span>\r\n        </div>\r\n        <div class=\"d-block text-uppercase mt-2\">\r\n          <span *ngIf=\"pedidoSelecionado?.NM_FILI\"><strong>Subsidiaria: </strong>{{ pedidoSelecionado?.NM_FILI }}</span>\r\n        </div>\r\n        <div class=\"d-block text-uppercase mt-2\">\r\n          <span *ngIf=\"pedidoSelecionado?.CD_ROMA_FUSI\"><strong>Romaneio: </strong>{{ pedidoSelecionado?.CD_ROMA_FUSI }}</span>\r\n        </div>\r\n        <div class=\"d-block text-uppercase mt-2\">\r\n          <span *ngIf=\"pedidoSelecionado?.DT_PRZO\"><strong>Plazo de entrega: </strong>{{ pedidoSelecionado?.DT_PRZO |  date: 'dd/MM/yyyy' }}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"justify-content-end col pr-0\">\r\n        <div style=\"text-align: end;\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-sm btn-outline-primary button_action p-2\"\r\n            *ngIf =\"pedidos.length > 0 && pedidoSelecionado?.IN_DESM != 2\"\r\n            (click)=\"sendDesmembramento()\">\r\n            <span>\r\n              <i *ngIf=\"!loading\" class=\"fas fa-save\"></i>\r\n              <i *ngIf=\"loading\" class=\"fas fa-cog fa-spin\"></i>\r\n            </span>\r\n            <span *ngIf=\"!loading\">Salvar</span>\r\n          </button>\r\n        </div>\r\n        <div style=\"text-align: end;\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-sm btn-outline-success button_action p-2\"\r\n            *ngIf =\"pedidos.length == 0 && pedidoSelecionado?.IN_DESM != 1\"\r\n            (click)=\"integraPedido(pedidoSelecionado)\">\r\n            <div *ngIf=\"!pedidoSelecionado.loading\">\r\n              <i class=\"fas fa-paper-plane\"></i>\r\n              <span>Integrar</span>\r\n            </div>\r\n            <div *ngIf=\"pedidoSelecionado.loading\">\r\n              <i class=\"fas fa-cog fa-spin\"></i>\r\n              <span>Aguarde</span>\r\n            </div>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"d-flex justify-content-between mt-1\">\r\n      <div class=\"col p-0 card-indication\">\r\n        <div class=\"border rounded bg-white shadow-sm text-center w-100 p-3\">\r\n          <div class=\"font-weight-bolder\">\r\n            <div\r\n              class=\"font-weight-bolder\"\r\n              counto\r\n              [step]=\"30\"\r\n              [countTo]=\"pedidoSelecionado?.VL_NOTA_FISC\"\r\n              [countFrom]=\"0\"\r\n              [duration]=\"2\"\r\n              (countoChange)=\"countoValorNota = $event\">\r\n              {{ countoValorNota | currency:'Bs' }}\r\n            </div>\r\n          </div>\r\n          <div class=\"pb-2 border-bottom\">Monto de la factura</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col p-0 card-indication ml-4\">\r\n        <div class=\"border rounded bg-white shadow-sm text-center w-100 p-3\">\r\n          <div class=\"font-weight-bolder\">\r\n            <div\r\n              class=\"font-weight-bolder\"\r\n              counto\r\n              [step]=\"30\"\r\n              [countTo]=\"pedidoSelecionado?.TT_PESO\"\r\n              [countFrom]=\"0\"\r\n              [duration]=\"2\"\r\n              (countoChange)=\"countoTotalPeso = $event\">\r\n              {{ countoTotalPeso | number: '1.3-3' }}\r\n            </div>\r\n          </div>\r\n          <div class=\"pb-2 border-bottom\">Factura de peso total</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col p-0 card-indication ml-4\">\r\n        <div class=\"border rounded bg-white shadow-sm text-center w-100 p-3\">\r\n          <div class=\"font-weight-bolder\" [hidden]=\"loadingProdutos\">\r\n            <div\r\n            class=\"font-weight-bolder\"\r\n            counto\r\n            [step]=\"30\"\r\n            [countTo]=\"totalProdutos\"\r\n            [countFrom]=\"0\"\r\n            [duration]=\"2\"\r\n            (countoChange)=\"countoTotalProdutos = $event\">\r\n            {{ countoTotalProdutos | number: '1.0-0' }}\r\n          </div>\r\n          </div>\r\n          <div class=\"pb-2 border-bottom\" [hidden]=\"loadingProdutos\">Productos totales</div>\r\n          <div class=\"text-right my-auto\" *ngIf=\"loadingProdutos\">\r\n            <div class=\"spinner-border text-dark\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n      <div class=\"row p-4\" *ngIf=\"loadingProdutos\">\r\n        <div class=\"col\">\r\n          <message\r\n            icon=\"fas fa-cog fa-spin\"\r\n            text=\"Estamos investigando productos para ti...\">\r\n          </message>\r\n        </div>\r\n      </div>\r\n      <div class=\"justify-content-between\" [hidden] = \"produtos.length == 0\">\r\n        <div class=\"my-2 d-flex justify-content-between\">\r\n          <span class=\"d-block text-uppercase font-weight-bolder my-auto\">Productos</span>\r\n          <div class=\"d-flex\">\r\n            <input\r\n            id=\"quantidade\"\r\n            type=\"text\"\r\n            class=\"form-control mr-2\"\r\n            placeholder=\"DIGITE...\"\r\n            [(ngModel)]=\"quantidade\"\r\n            style=\"align-self: center;width: 100px;height: 28px;\"\r\n          >\r\n            <span container=\"body\" placement=\"top\" [tooltip]=\"pedidoSelecionado?.IN_PERM_DESM != 1 ? tooltipPermissaoDesmembramento : 'Desmembrar'\">\r\n              <button\r\n                *ngIf=\"pedidoSelecionado?.IN_DESM != 2\"\r\n                type=\"button\"\r\n                class=\"btn btn-sm btn-outline-danger button_action\"\r\n                [disabled]=\"pedidoSelecionado?.DS_INTE != 'N' && pedidoSelecionado?.IN_PERM_DESM != 1 \"\r\n                (click)=\"onDesmembrar(produtos)\">\r\n                <i class=\"fas fa-clone\"></i>\r\n                <span>Desmembrar</span>\r\n              </button>\r\n            </span>\r\n\r\n\r\n            <ng-template #tooltipPermissaoDesmembramento>\r\n              <table>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"text-left\">No tiene permiso para dividir pedidos que ya están integrados</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </ng-template>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div  class=\"d-flex border rounded\">\r\n          <div class=\"col\">\r\n            <custom-table [config]=\"tableConfig\" class=\"table-borderless\">\r\n              <ng-template #thead let-thead>\r\n                <tr>\r\n                  <th class=\"text-center\">COD.</th>\r\n                  <th>Material</th>\r\n                  <th class=\"text-center\" colspan=\"2\">Quantidade</th>\r\n                  <th class=\"text-center\" colspan=\"2\">Saldo</th> <!-- *ngIf=\"pedidos.length > 0 || pedidosAssociados.length > 0\" -->\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template #tbody let-tbody>\r\n                <tr *ngFor=\"let item of produtos; let i = index\">\r\n                  <td width=\"10%\" class=\"text-center\">{{ item.CD_PROD }}</td>\r\n                  <td width=\"50%\">{{ item.NM_PROD }}</td>\r\n                  <td width=\"10%\" class=\"text-center\">{{ item.TT_PROD | number: '1.3-3' }} {{item.DS_UNID_MEDI}}</td>\r\n                  <td width=\"10%\" class=\"text-center\">{{ item.TT_PROD_PESO / 1000 | number: '1.3-3' }} Tons</td>\r\n                  <td width=\"10%\" class=\"text-center font-weight-bolder text-success\"> <!--  *ngIf=\"pedidos.length > 0 || pedidosAssociados.length > 0\" -->\r\n                    {{ (item?.TT_SALD | number: '1.3-3') || (item?.TT_PROD | number: '1.3-3') }} {{item.DS_UNID_MEDI}}\r\n                  </td>\r\n                  <td width=\"10%\" class=\"text-center font-weight-bolder text-success\"> <!--  *ngIf=\"pedidos.length > 0 || pedidosAssociados.length > 0\" -->\r\n                    {{ (item?.TT_SALD_PESO / 1000 | number: '1.3-3') || (item?.TT_PROD | number: '1.3-3') }} Tons\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n            </custom-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col p-4\" *ngIf=\"loadingPedidosAssociados\">\r\n        <div class=\"col\">\r\n          <message\r\n            icon=\"fas fa-cog fa-spin\"\r\n            text=\"Estamos investigando pedidos para ti...\">\r\n          </message>\r\n        </div>\r\n      </div>\r\n      <div  class=\"d-flex border rounded mt-3\" *ngFor=\"let pedido of pedidosAssociados; let i = index\" [ngClass]=\"pedido.DS_INTE == 'I' ? 'border-success' : ''\">\r\n        <div class=\"col p-4\" *ngIf=\"pedido.loadingProdutosAssociados\">\r\n          <div class=\"col\">\r\n            <message\r\n              icon=\"fas fa-cog fa-spin\"\r\n              text=\"Estamos investigando productos para ti...\">\r\n            </message>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\" [hidden]= \"pedido.loadingProdutosAssociados\">\r\n          <div class=\"d-flex pr-4 mx-2\">\r\n            <div class=\"mtc-title mb-0 my-auto\" *ngIf=\"!pedido?.ID_LOGI_FUSI_PEDI\">{{pedido?.CD_PEDI}}-{{i + 1}}</div>\r\n            <div class=\"mtc-title mb-0 my-auto\" *ngIf=\"pedido?.ID_LOGI_FUSI_PEDI\">{{pedido?.CD_PEDI}}</div>\r\n            <div class=\"col pr-0 d-flex\" style=\"justify-content: flex-end;\">\r\n              <span class=\"mtc-title my-auto\">\r\n                Plazo de entrega\r\n              </span>\r\n              <div class=\"input-group p-2\" style=\"width: 215px;\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"far fa-calendar-alt\"></i>\r\n                  </span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                autocomplete=\"off\"\r\n                [disabled]=\"pedido.ID_LOGI_FUSI_PEDI\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                placeholder=\"Escribelo...\"\r\n                [(ngModel)]=\"pedido.prazoEntrega\"\r\n              />\r\n              </div>\r\n            </div>\r\n            <!--\r\n              [icon]=\"\r\n                  pedido.loading ? 'fas fa-cog fa-spin' :\r\n                    (pedido.DS_INTE == 'I' ? 'fas fa-paper-plane text-success':\r\n                      (pedido.DS_INTE == 'N' ? 'fas fa-paper-plane text-warning':\r\n                        'fas fa-paper-plane text-danger'\r\n                      )\r\n                    )\r\n                \"\r\n             -->\r\n            <div class=\"my-auto pl-2\" style=\"width: 22px;\">\r\n              <span\r\n                tooltip =\"Integrar\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n              >\r\n                <btn-icon\r\n                [icon]=\"\r\n                  pedido.loading ? 'fas fa-cog fa-spin' :\r\n                    (pedido.DS_INTE == 'I' ? 'fas fa-paper-plane text-success':\r\n                      (pedido.DS_INTE == 'N' ? 'fas fa-paper-plane text-warning':\r\n                        'fas fa-paper-plane text-danger'\r\n                      )\r\n                    )\"\r\n                  [disabled]=\"pedido.TP_OPER == 'RETIRA' || pedido?.cancelamentoLoading || pedido.retiraLoading || pedido.loading\"\r\n                  size=\"small\"\r\n                  (click)=\"pedido.TP_OPER == 'RETIRA' || integraPedido(pedido)\">\r\n                </btn-icon>\r\n              </span>\r\n            </div>\r\n            <div class=\"my-auto pl-2\">\r\n              <span\r\n                [tooltip]=\"pedido.TP_OPER == 'RETIRA' ? 'Retira' : 'Marcar como retira'\"\r\n                placement=\"left\"\r\n                container=\"body\"\r\n              >\r\n              <btn-icon\r\n                [icon]=\"pedido.retiraLoading ? 'fas fa-cog fa-spin' : 'fas fa-archive'\"\r\n                [ngClass]=\"{'text-warning': pedido.TP_OPER == 'RETIRA'}\"\r\n                [disabled]=\"pedido?.cancelamentoLoading || pedido.retiraLoading || pedido.loading || pedido.TP_OPER == 'RETIRA' || pedido.IN_DESM == 1 || pedido.IN_ENTR == 1\"\r\n                size=\"small\"\r\n                (click)=\"pedido.TP_OPER == 'RETIRA' || onMarcarRetira(pedido)\"\r\n              >\r\n              </btn-icon>\r\n              </span>\r\n            </div>\r\n            <div class=\"my-auto pl-2\">\r\n              <btn-icon\r\n                [icon] = \"pedido?.cancelamentoLoading ? 'fas fa-cog fa-spin' : 'text-danger fas fa-trash'\"\r\n                size=\"small\"\r\n                tooltip =\"Excluir\"\r\n                [disabled]=\"pedido.IN_ENTR == 1 || pedido?.cancelamentoLoading || pedido.retiraLoading  || pedido.loading\"\r\n                (click)=\"pedido.IN_ENTR == 1 || onExcluirPedido(pedido)\"\r\n              ></btn-icon>\r\n            </div>\r\n          </div>\r\n          <custom-table [config]=\"tableConfig\" class=\"table-borderless\" >\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th class=\"text-center\">COD.</th>\r\n                <th>Material</th>\r\n                <th colspan=\"2\" class=\"text-center\">Saldo</th>\r\n                <th class=\"text-center\">Quantidade</th>\r\n                <th></th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let item of pedido.produtos; let ip = index\">\r\n                <td width=\"10%\" class=\"text-center\">{{ item.CD_PROD }}</td>\r\n                <td width=\"45%\">{{ item.NM_PROD }}</td>\r\n                <td width=\"10%\" class=\"text-center\">{{ item.TT_PROD | number: '1.3-3' }} {{item.DS_UNID_MEDI}}</td>\r\n                <td width=\"10%\" class=\"text-center\">{{ item.TT_PROD_PESO / 1000 | number: '1.3-3' }} Tons</td>\r\n                <td width=\"20%\" class=\"text-center\">\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control\"\r\n                    min = \"0\"\r\n                    [placeholder]=\"'0.000,000 ' + item?.DS_UNID_MEDI \"\r\n                    [disabled]=\"pedido.ID_LOGI_FUSI_PEDI\"\r\n                    (input)=\"OnCalcPeso($event, item, pedido)\"\r\n                    [(ngModel)]=\"item.TT_PROD\"\r\n                    />\r\n                </td>\r\n                <td width=\"5%\">\r\n                  <btn-icon\r\n                  *ngIf=\"!pedido.ID_LOGI_FUSI_PEDI\"\r\n                  icon=\"fas fa-trash\"\r\n                  size=\"small\"\r\n                  (click)=\"removeProduto(i , ip)\"\r\n                >\r\n                </btn-icon>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <div class=\"d-flex justify-content-end mt-2\">\r\n            <span><strong>{{ pedido.TT_PESO / 1000  | number: '1.3-3' }} Tons</strong></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div  class=\"d-flex border rounded mt-3\" *ngFor=\"let pedido of pedidos; let i = index\">\r\n        <div class=\"col\" [hidden] = \"loadingProdutos\">\r\n          <div class=\"d-flex pr-4 mx-2\">\r\n            <div class=\"mtc-title mb-0 my-auto\" *ngIf=\"pedidosAssociados.length == 0\">{{pedido?.CD_PEDI}}-{{i + 1}}</div>\r\n            <div class=\"mtc-title mb-0 my-auto\" *ngIf=\"pedidosAssociados.length > 0\">{{pedido?.CD_PEDI}}-{{pedidosAssociados.length + 1 + i}}</div>\r\n            <div class=\"col pr-0 d-flex\" style=\"justify-content: flex-end;\">\r\n              <span class=\"mtc-title my-auto\">\r\n                Plazo de entrega\r\n              </span>\r\n              <div class=\"input-group p-2\" style=\"width: 215px;\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"far fa-calendar-alt\"></i>\r\n                  </span>\r\n                </div>\r\n                <input\r\n                class=\"form-control\"\r\n                autocomplete=\"off\"\r\n                [disabled]=\"pedido.ID_LOGI_FUSI_PEDI\"\r\n                type=\"text\"\r\n                bsDatepicker\r\n                [bsConfig]=\"bsConfig\"\r\n                placeholder=\"Escribelo...\"\r\n                [(ngModel)]=\"pedido.prazoEntrega\"\r\n              />\r\n              </div>\r\n            </div>\r\n            <div class=\"my-auto pl-2\" style=\"width: 22px;\">\r\n              <btn-icon\r\n                *ngIf=\"!pedido.ID_LOGI_FUSI_PEDI\"\r\n                icon=\"fas fa-trash\"\r\n                size=\"small\"\r\n                (click)=\"removePedido(i, pedido)\">\r\n              </btn-icon>\r\n            </div>\r\n          </div>\r\n          <custom-table [config]=\"tableConfig\" class=\"table-borderless\">\r\n            <ng-template #thead let-thead>\r\n              <tr>\r\n                <th class=\"text-center\">COD.</th>\r\n                <th>Material</th>\r\n                <th class=\"text-center\" colspan=\"2\">Saldo</th>\r\n                <th class=\"text-center\">Quantidade</th>\r\n                <th></th>\r\n              </tr>\r\n            </ng-template>\r\n            <ng-template #tbody let-tbody>\r\n              <tr *ngFor=\"let item of pedido.produtos; let ip = index\">\r\n                <td width=\"10%\" class=\"text-center\">{{ item.CD_PROD }}</td>\r\n                <td width=\"45%\">{{ item.NM_PROD }}</td>\r\n                <td width=\"10%\" class=\"text-center\">{{ item.TT_PROD | number: '1.3-3' }} {{item.DS_UNID_MEDI}}</td>\r\n                <td width=\"10%\" class=\"text-center\">{{ item.TT_PROD_PESO / 1000 | number: '1.3-3' }} Tons</td>\r\n                <td width=\"20%\" class=\"text-center\">\r\n                  <input\r\n                    type=\"number\"\r\n                    class=\"form-control\"\r\n                    min = \"0\"\r\n                    [placeholder]=\"'0.000,000 ' + item?.DS_UNID_MEDI\"\r\n                    [disabled]=\"pedido.ID_LOGI_FUSI_PEDI\"\r\n                    (input)=\"OnCalcPeso($event, item, pedido)\"\r\n                    [(ngModel)]=\"item.TT_PROD\"\r\n                    />\r\n                </td>\r\n                <td width=\"5%\">\r\n                  <btn-icon\r\n                  *ngIf=\"!pedido.ID_LOGI_FUSI_PEDI\"\r\n                  icon=\"fas fa-trash\"\r\n                  size=\"small\"\r\n                  (click)=\"removeProduto(i, ip)\"\r\n                >\r\n                </btn-icon>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n          </custom-table>\r\n          <div class=\"d-flex justify-content-end mt-2\">\r\n            <span><strong>{{ pedido.TT_PESO / 1000  | number: '1.3-3' }} Tons</strong></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=desmembramento-desmembramento-module-es5.js.map