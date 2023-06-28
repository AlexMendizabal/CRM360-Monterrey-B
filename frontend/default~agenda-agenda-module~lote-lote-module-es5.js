(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~agenda-agenda-module~lote-lote-module"], {
    /***/
    "C0Yq":
    /*!********************************************************!*\
      !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
      \********************************************************/

    /*! exports provided: createDateFormatter, createDateParser, compareDates, compareTimes, isBetween, calculateSecondsSinceMidnight, parseSeconds, duration, getDefaultHours */

    /***/
    function C0Yq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createDateFormatter", function () {
        return createDateFormatter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createDateParser", function () {
        return createDateParser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "compareDates", function () {
        return compareDates;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "compareTimes", function () {
        return compareTimes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isBetween", function () {
        return isBetween;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "calculateSecondsSinceMidnight", function () {
        return calculateSecondsSinceMidnight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseSeconds", function () {
        return parseSeconds;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "duration", function () {
        return duration;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDefaultHours", function () {
        return getDefaultHours;
      });
      /* harmony import */


      var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./formatting */
      "gsBn");
      /* harmony import */


      var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../types/options */
      "nFBg");
      /* harmony import */


      var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../l10n/default */
      "TkX7");

      var createDateFormatter = function createDateFormatter(_a) {
        var _b = _a.config,
            config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"] : _b,
            _c = _a.l10n,
            l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__["english"] : _c,
            _d = _a.isMobile,
            isMobile = _d === void 0 ? false : _d;
        return function (dateObj, frmt, overrideLocale) {
          var locale = overrideLocale || l10n;

          if (config.formatDate !== undefined && !isMobile) {
            return config.formatDate(dateObj, frmt, locale);
          }

          return frmt.split("").map(function (c, i, arr) {
            return _formatting__WEBPACK_IMPORTED_MODULE_0__["formats"][c] && arr[i - 1] !== "\\" ? _formatting__WEBPACK_IMPORTED_MODULE_0__["formats"][c](dateObj, locale, config) : c !== "\\" ? c : "";
          }).join("");
        };
      };

      var createDateParser = function createDateParser(_a) {
        var _b = _a.config,
            config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"] : _b,
            _c = _a.l10n,
            l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__["english"] : _c;
        return function (date, givenFormat, timeless, customLocale) {
          if (date !== 0 && !date) return undefined;
          var locale = customLocale || l10n;
          var parsedDate;
          var dateOrig = date;
          if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
            var format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__["defaults"]).dateFormat;
            var datestr = String(date).trim();

            if (datestr === "today") {
              parsedDate = new Date();
              timeless = true;
            } else if (config && config.parseDate) {
              parsedDate = config.parseDate(date, format);
            } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
              parsedDate = new Date(date);
            } else {
              var matched = void 0,
                  ops = [];

              for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                var token = format[i];
                var isBackSlash = token === "\\";
                var escaped = format[i - 1] === "\\" || isBackSlash;

                if (_formatting__WEBPACK_IMPORTED_MODULE_0__["tokenRegex"][token] && !escaped) {
                  regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__["tokenRegex"][token];
                  var match = new RegExp(regexStr).exec(date);

                  if (match && (matched = true)) {
                    ops[token !== "Y" ? "push" : "unshift"]({
                      fn: _formatting__WEBPACK_IMPORTED_MODULE_0__["revFormat"][token],
                      val: match[++matchIndex]
                    });
                  }
                } else if (!isBackSlash) regexStr += ".";
              }

              parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
              ops.forEach(function (_a) {
                var fn = _a.fn,
                    val = _a.val;
                return parsedDate = fn(parsedDate, val, locale) || parsedDate;
              });
              parsedDate = matched ? parsedDate : undefined;
            }
          }

          if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
            config.errorHandler(new Error("Invalid date provided: " + dateOrig));
            return undefined;
          }

          if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
          return parsedDate;
        };
      };

      function compareDates(date1, date2, timeless) {
        if (timeless === void 0) {
          timeless = true;
        }

        if (timeless !== false) {
          return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
        }

        return date1.getTime() - date2.getTime();
      }

      function compareTimes(date1, date2) {
        return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
      }

      var isBetween = function isBetween(ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
      };

      var calculateSecondsSinceMidnight = function calculateSecondsSinceMidnight(hours, minutes, seconds) {
        return hours * 3600 + minutes * 60 + seconds;
      };

      var parseSeconds = function parseSeconds(secondsSinceMidnight) {
        var hours = Math.floor(secondsSinceMidnight / 3600),
            minutes = (secondsSinceMidnight - hours * 3600) / 60;
        return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
      };

      var duration = {
        DAY: 86400000
      };

      function getDefaultHours(config) {
        var hours = config.defaultHour;
        var minutes = config.defaultMinute;
        var seconds = config.defaultSeconds;

        if (config.minDate !== undefined) {
          var minHour = config.minDate.getHours();
          var minMinutes = config.minDate.getMinutes();
          var minSeconds = config.minDate.getSeconds();

          if (hours < minHour) {
            hours = minHour;
          }

          if (hours === minHour && minutes < minMinutes) {
            minutes = minMinutes;
          }

          if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
        }

        if (config.maxDate !== undefined) {
          var maxHr = config.maxDate.getHours();
          var maxMinutes = config.maxDate.getMinutes();
          hours = Math.min(hours, maxHr);
          if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
          if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
        }

        return {
          hours: hours,
          minutes: minutes,
          seconds: seconds
        };
      }
      /***/

    },

    /***/
    "Ciwb":
    /*!*************************************************************************!*\
      !*** ./node_modules/calendar-utils/date-adapters/esm/date-fns/index.js ***!
      \*************************************************************************/

    /*! exports provided: adapterFactory */

    /***/
    function Ciwb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "adapterFactory", function () {
        return adapterFactory;
      });
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! date-fns */
      "b/SL");

      function adapterFactory() {
        return {
          addDays: date_fns__WEBPACK_IMPORTED_MODULE_0__["addDays"],
          addHours: date_fns__WEBPACK_IMPORTED_MODULE_0__["addHours"],
          addMinutes: date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"],
          addSeconds: date_fns__WEBPACK_IMPORTED_MODULE_0__["addSeconds"],
          differenceInDays: date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInDays"],
          differenceInMinutes: date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInMinutes"],
          differenceInSeconds: date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInSeconds"],
          endOfDay: date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfDay"],
          endOfMonth: date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfMonth"],
          endOfWeek: date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfWeek"],
          getDay: date_fns__WEBPACK_IMPORTED_MODULE_0__["getDay"],
          getMonth: date_fns__WEBPACK_IMPORTED_MODULE_0__["getMonth"],
          isSameDay: date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameDay"],
          isSameMonth: date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"],
          isSameSecond: date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameSecond"],
          max: date_fns__WEBPACK_IMPORTED_MODULE_0__["max"],
          setHours: date_fns__WEBPACK_IMPORTED_MODULE_0__["setHours"],
          setMinutes: date_fns__WEBPACK_IMPORTED_MODULE_0__["setMinutes"],
          startOfDay: date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfDay"],
          startOfMinute: date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfMinute"],
          startOfMonth: date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfMonth"],
          startOfWeek: date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfWeek"],
          getHours: date_fns__WEBPACK_IMPORTED_MODULE_0__["getHours"],
          getMinutes: date_fns__WEBPACK_IMPORTED_MODULE_0__["getMinutes"]
        };
      } //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "EwKL":
    /*!************************************************!*\
      !*** ./node_modules/positioning/dist/entry.js ***!
      \************************************************/

    /*! exports provided: positionElements */

    /***/
    function EwKL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./positioning */
      "Xe8C");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "positionElements", function () {
        return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionElements"];
      }); //# sourceMappingURL=entry.js.map

      /***/

    },

    /***/
    "L/mj":
    /*!***************************************************************************!*\
      !*** ./node_modules/angular-calendar/date-adapters/esm/date-fns/index.js ***!
      \***************************************************************************/

    /*! exports provided: adapterFactory */

    /***/
    function LMj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "adapterFactory", function () {
        return adapterFactory;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "b1EX");
      /* harmony import */


      var calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! calendar-utils/date-adapters/date-fns */
      "Ciwb");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! date-fns */
      "b/SL");

      function adapterFactory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_1__["adapterFactory"])()), {
          addWeeks: date_fns__WEBPACK_IMPORTED_MODULE_2__["addWeeks"],
          addMonths: date_fns__WEBPACK_IMPORTED_MODULE_2__["addMonths"],
          subDays: date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"],
          subWeeks: date_fns__WEBPACK_IMPORTED_MODULE_2__["subWeeks"],
          subMonths: date_fns__WEBPACK_IMPORTED_MODULE_2__["subMonths"],
          getISOWeek: date_fns__WEBPACK_IMPORTED_MODULE_2__["getISOWeek"],
          setDate: date_fns__WEBPACK_IMPORTED_MODULE_2__["setDate"],
          setMonth: date_fns__WEBPACK_IMPORTED_MODULE_2__["setMonth"],
          setYear: date_fns__WEBPACK_IMPORTED_MODULE_2__["setYear"],
          getDate: date_fns__WEBPACK_IMPORTED_MODULE_2__["getDate"],
          getYear: date_fns__WEBPACK_IMPORTED_MODULE_2__["getYear"]
        });
      } //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    "LSHg":
    /*!*****************************************************!*\
      !*** ./node_modules/@agm/core/fesm2015/agm-core.js ***!
      \*****************************************************/

    /*! exports provided: AgmBicyclingLayer, AgmCircle, AgmCoreModule, AgmDataLayer, AgmFitBounds, AgmGeocoder, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer, CircleManager, ControlPosition, DataLayerManager, FitBoundsAccessor, GeocoderLocationType, GeocoderStatus, GoogleMapsAPIWrapper, GoogleMapsScriptProtocol, InfoWindowManager, KmlLayerManager, LAZY_MAPS_API_CONFIG, LayerManager, LazyMapsAPILoader, MapTypeId, MapsAPILoader, MarkerManager, NoOpMapsAPILoader, PolygonManager, PolylineManager, RectangleManager, ScaleControlStyle, ZoomControlStyle, ɵa, ɵb, ɵc, ɵd, ɵe */

    /***/
    function LSHg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmBicyclingLayer", function () {
        return AgmBicyclingLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmCircle", function () {
        return AgmCircle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function () {
        return AgmCoreModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function () {
        return AgmDataLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function () {
        return AgmFitBounds;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmGeocoder", function () {
        return AgmGeocoder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function () {
        return AgmInfoWindow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function () {
        return AgmKmlLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmMap", function () {
        return AgmMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmMarker", function () {
        return AgmMarker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmPolygon", function () {
        return AgmPolygon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmPolyline", function () {
        return AgmPolyline;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function () {
        return AgmPolylineIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function () {
        return AgmPolylinePoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmRectangle", function () {
        return AgmRectangle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function () {
        return AgmTransitLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CircleManager", function () {
        return CircleManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlPosition", function () {
        return ControlPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataLayerManager", function () {
        return DataLayerManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function () {
        return FitBoundsAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeocoderLocationType", function () {
        return GeocoderLocationType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeocoderStatus", function () {
        return GeocoderStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function () {
        return GoogleMapsAPIWrapper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function () {
        return GoogleMapsScriptProtocol;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function () {
        return InfoWindowManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function () {
        return KmlLayerManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function () {
        return LAZY_MAPS_API_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayerManager", function () {
        return LayerManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function () {
        return LazyMapsAPILoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapTypeId", function () {
        return MapTypeId;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function () {
        return MapsAPILoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkerManager", function () {
        return MarkerManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function () {
        return NoOpMapsAPILoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolygonManager", function () {
        return PolygonManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolylineManager", function () {
        return PolylineManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RectangleManager", function () {
        return RectangleManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScaleControlStyle", function () {
        return ScaleControlStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZoomControlStyle", function () {
        return ZoomControlStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return FitBoundsService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return coreDirectives;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return WindowRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return DocumentRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return BROWSER_GLOBALS_PROVIDERS;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "b1EX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var MapsAPILoader = /*#__PURE__*/_createClass(function MapsAPILoader() {
        _classCallCheck(this, MapsAPILoader);
      });

      MapsAPILoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MapsAPILoader);
      /**
       * Wrapper class that handles the communication with the Google Maps Javascript
       * API v3
       */

      var GoogleMapsAPIWrapper = /*#__PURE__*/function () {
        function GoogleMapsAPIWrapper(_loader, _zone) {
          var _this2 = this;

          _classCallCheck(this, GoogleMapsAPIWrapper);

          this._loader = _loader;
          this._zone = _zone;
          this._map = new Promise(function (resolve) {
            _this2._mapResolver = resolve;
          });
        }

        _createClass(GoogleMapsAPIWrapper, [{
          key: "createMap",
          value: function createMap(el, mapOptions) {
            var _this3 = this;

            return this._zone.runOutsideAngular(function () {
              return _this3._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);

                _this3._mapResolver(map);

                return;
              });
            });
          }
        }, {
          key: "setMapOptions",
          value: function setMapOptions(options) {
            var _this4 = this;

            return this._zone.runOutsideAngular(function () {
              _this4._map.then(function (m) {
                m.setOptions(options);
              });
            });
          }
          /**
           * Creates a google map marker with the map context
           */

        }, {
          key: "createMarker",
          value: function createMarker() {
            var _this5 = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var addToMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this._zone.runOutsideAngular(function () {
              return _this5._map.then(function (map) {
                if (addToMap) {
                  options.map = map;
                }

                return new google.maps.Marker(options);
              });
            });
          }
        }, {
          key: "createInfoWindow",
          value: function createInfoWindow(options) {
            var _this6 = this;

            return this._zone.runOutsideAngular(function () {
              return _this6._map.then(function () {
                return new google.maps.InfoWindow(options);
              });
            });
          }
          /**
           * Creates a google.map.Circle for the current map.
           */

        }, {
          key: "createCircle",
          value: function createCircle(options) {
            var _this7 = this;

            return this._zone.runOutsideAngular(function () {
              return _this7._map.then(function (map) {
                if (typeof options.strokePosition === 'string') {
                  options.strokePosition = google.maps.StrokePosition[options.strokePosition];
                }

                options.map = map;
                return new google.maps.Circle(options);
              });
            });
          }
          /**
           * Creates a google.map.Rectangle for the current map.
           */

        }, {
          key: "createRectangle",
          value: function createRectangle(options) {
            var _this8 = this;

            return this._zone.runOutsideAngular(function () {
              return _this8._map.then(function (map) {
                options.map = map;
                return new google.maps.Rectangle(options);
              });
            });
          }
        }, {
          key: "createPolyline",
          value: function createPolyline(options) {
            var _this9 = this;

            return this._zone.runOutsideAngular(function () {
              return _this9.getNativeMap().then(function (map) {
                var line = new google.maps.Polyline(options);
                line.setMap(map);
                return line;
              });
            });
          }
        }, {
          key: "createPolygon",
          value: function createPolygon(options) {
            var _this10 = this;

            return this._zone.runOutsideAngular(function () {
              return _this10.getNativeMap().then(function (map) {
                var polygon = new google.maps.Polygon(options);
                polygon.setMap(map);
                return polygon;
              });
            });
          }
          /**
           * Creates a new google.map.Data layer for the current map
           */

        }, {
          key: "createDataLayer",
          value: function createDataLayer(options) {
            var _this11 = this;

            return this._zone.runOutsideAngular(function () {
              return _this11._map.then(function (m) {
                var data = new google.maps.Data(options);
                data.setMap(m);
                return data;
              });
            });
          }
          /**
           * Creates a TransitLayer instance for a map
           * @param {TransitLayerOptions} options - used for setting layer options
           * @returns {Promise<TransitLayer>} a new transit layer object
           */

        }, {
          key: "createTransitLayer",
          value: function createTransitLayer(options) {
            var _this12 = this;

            return this._zone.runOutsideAngular(function () {
              return _this12._map.then(function (map) {
                var newLayer = new google.maps.TransitLayer();
                newLayer.setMap(options.visible ? map : null);
                return newLayer;
              });
            });
          }
          /**
           * Creates a BicyclingLayer instance for a map
           * @param {BicyclingLayerOptions} options - used for setting layer options
           * @returns {Promise<BicyclingLayer>} a new bicycling layer object
           */

        }, {
          key: "createBicyclingLayer",
          value: function createBicyclingLayer(options) {
            var _this13 = this;

            return this._zone.runOutsideAngular(function () {
              return _this13._map.then(function (map) {
                var newLayer = new google.maps.BicyclingLayer();
                newLayer.setMap(options.visible ? map : null);
                return newLayer;
              });
            });
          }
          /**
           * Determines if given coordinates are insite a Polygon path.
           */

        }, {
          key: "containsLocation",
          value: function containsLocation(latLng, polygon) {
            return google.maps.geometry.poly.containsLocation(latLng, polygon);
          }
        }, {
          key: "subscribeToMapEvent",
          value: function subscribeToMapEvent(eventName) {
            var _this14 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this14._map.then(function (m) {
                m.addListener(eventName, function (arg) {
                  _this14._zone.run(function () {
                    return observer.next(arg);
                  });
                });
              });
            });
          }
        }, {
          key: "clearInstanceListeners",
          value: function clearInstanceListeners() {
            var _this15 = this;

            return this._zone.runOutsideAngular(function () {
              _this15._map.then(function (map) {
                google.maps.event.clearInstanceListeners(map);
              });
            });
          }
        }, {
          key: "setCenter",
          value: function setCenter(latLng) {
            var _this16 = this;

            return this._zone.runOutsideAngular(function () {
              return _this16._map.then(function (map) {
                return map.setCenter(latLng);
              });
            });
          }
        }, {
          key: "getZoom",
          value: function getZoom() {
            var _this17 = this;

            return this._zone.runOutsideAngular(function () {
              return _this17._map.then(function (map) {
                return map.getZoom();
              });
            });
          }
        }, {
          key: "getBounds",
          value: function getBounds() {
            var _this18 = this;

            return this._zone.runOutsideAngular(function () {
              return _this18._map.then(function (map) {
                return map.getBounds();
              });
            });
          }
        }, {
          key: "getMapTypeId",
          value: function getMapTypeId() {
            var _this19 = this;

            return this._zone.runOutsideAngular(function () {
              return _this19._map.then(function (map) {
                return map.getMapTypeId();
              });
            });
          }
        }, {
          key: "setZoom",
          value: function setZoom(zoom) {
            var _this20 = this;

            return this._zone.runOutsideAngular(function () {
              return _this20._map.then(function (map) {
                return map.setZoom(zoom);
              });
            });
          }
        }, {
          key: "getCenter",
          value: function getCenter() {
            var _this21 = this;

            return this._zone.runOutsideAngular(function () {
              return _this21._map.then(function (map) {
                return map.getCenter();
              });
            });
          }
        }, {
          key: "panTo",
          value: function panTo(latLng) {
            var _this22 = this;

            return this._zone.runOutsideAngular(function () {
              return _this22._map.then(function (map) {
                return map.panTo(latLng);
              });
            });
          }
        }, {
          key: "panBy",
          value: function panBy(x, y) {
            var _this23 = this;

            return this._zone.runOutsideAngular(function () {
              return _this23._map.then(function (map) {
                return map.panBy(x, y);
              });
            });
          }
        }, {
          key: "fitBounds",
          value: function fitBounds(latLng, padding) {
            var _this24 = this;

            return this._zone.runOutsideAngular(function () {
              return _this24._map.then(function (map) {
                return map.fitBounds(latLng, padding);
              });
            });
          }
        }, {
          key: "panToBounds",
          value: function panToBounds(latLng, padding) {
            var _this25 = this;

            return this._zone.runOutsideAngular(function () {
              return _this25._map.then(function (map) {
                return map.panToBounds(latLng, padding);
              });
            });
          }
          /**
           * Returns the native Google Maps Map instance. Be careful when using this instance directly.
           */

        }, {
          key: "getNativeMap",
          value: function getNativeMap() {
            return this._map;
          }
          /**
           * Triggers the given event name on the map instance.
           */

        }, {
          key: "triggerMapEvent",
          value: function triggerMapEvent(eventName) {
            return this._map.then(function (m) {
              return google.maps.event.trigger(m, eventName);
            });
          }
        }]);

        return GoogleMapsAPIWrapper;
      }();

      GoogleMapsAPIWrapper.ctorParameters = function () {
        return [{
          type: MapsAPILoader
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      GoogleMapsAPIWrapper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], GoogleMapsAPIWrapper);
      /**
       * This class manages Transit and Bicycling Layers for a Google Map instance.
       */

      var LayerManager = /*#__PURE__*/function () {
        function LayerManager(_wrapper) {
          _classCallCheck(this, LayerManager);

          this._wrapper = _wrapper;
          this._layers = new Map();
        }
        /**
         * Adds a transit layer to a map instance.
         * @param {AgmTransitLayer} layer - a TransitLayer object
         * @param {TransitLayerOptions} options - TransitLayerOptions options
         * @returns void
         */


        _createClass(LayerManager, [{
          key: "addTransitLayer",
          value: function addTransitLayer(layer, options) {
            var newLayer = this._wrapper.createTransitLayer(options);

            this._layers.set(layer, newLayer);
          }
          /**
           * Adds a bicycling layer to a map instance.
           * @param {AgmBicyclingLayer} layer - a bicycling layer object
           * @param {BicyclingLayerOptions} options - BicyclingLayer options
           * @returns void
           */

        }, {
          key: "addBicyclingLayer",
          value: function addBicyclingLayer(layer, options) {
            var newLayer = this._wrapper.createBicyclingLayer(options);

            this._layers.set(layer, newLayer);
          }
          /**
           * Deletes a map layer
           * @param {AgmTransitLayer|AgmBicyclingLayer} layer - the layer to delete
           * @returns  Promise<void>
           */

        }, {
          key: "deleteLayer",
          value: function deleteLayer(layer) {
            var _this26 = this;

            return this._layers.get(layer).then(function (currentLayer) {
              currentLayer.setMap(null);

              _this26._layers["delete"](layer);
            });
          }
          /**
           * Hide/Show a google map layer
           * @param { AgmTransitLayer|AgmBicyclingLayer} layer - the layer to hide/show
           * @param {TransitLayerOptions|BicyclingLayerOptions} options - used to set visibility of the layer
           * @returns Promise<void>
           */

        }, {
          key: "toggleLayerVisibility",
          value: function toggleLayerVisibility(layer, options) {
            var _this27 = this;

            return this._layers.get(layer).then(function (currentLayer) {
              if (!options.visible) {
                currentLayer.setMap(null);
                return;
              } else {
                return _this27._wrapper.getNativeMap().then(function (map) {
                  currentLayer.setMap(map);
                });
              }
            });
          }
        }]);

        return LayerManager;
      }();

      LayerManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }];
      };

      LayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper])], LayerManager);
      var layerId = 0;
      /*
       * This directive adds a bicycling layer to a google map instance
       * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
       * */

      var AgmBicyclingLayer = /*#__PURE__*/function () {
        function AgmBicyclingLayer(_manager) {
          _classCallCheck(this, AgmBicyclingLayer);

          this._manager = _manager;
          this._addedToManager = false;
          this._id = (layerId++).toString();
          /**
           * Hide/show bicycling layer
           */

          this.visible = true;
        }

        _createClass(AgmBicyclingLayer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._addedToManager) {
              return;
            }

            this._manager.addBicyclingLayer(this, {
              visible: this.visible
            });

            this._addedToManager = true;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._addedToManager) {
              return;
            }

            if (changes['visible'] != null) {
              this._manager.toggleLayerVisibility(this, {
                visible: changes['visible'].currentValue
              });
            }
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "toString",
          value: function toString() {
            return "AgmBicyclingLayer-".concat(this._id.toString());
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._manager.deleteLayer(this);
          }
        }]);

        return AgmBicyclingLayer;
      }();

      AgmBicyclingLayer.ctorParameters = function () {
        return [{
          type: LayerManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmBicyclingLayer.prototype, "visible", void 0);
      AgmBicyclingLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-bicycling-layer'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])], AgmBicyclingLayer);

      var CircleManager = /*#__PURE__*/function () {
        function CircleManager(_apiWrapper, _zone) {
          _classCallCheck(this, CircleManager);

          this._apiWrapper = _apiWrapper;
          this._zone = _zone;
          this._circles = new Map();
        }

        _createClass(CircleManager, [{
          key: "addCircle",
          value: function addCircle(circle) {
            this._circles.set(circle, this._apiWrapper.createCircle({
              center: {
                lat: circle.latitude,
                lng: circle.longitude
              },
              clickable: circle.clickable,
              draggable: circle.draggable,
              editable: circle.editable,
              fillColor: circle.fillColor,
              fillOpacity: circle.fillOpacity,
              radius: circle.radius,
              strokeColor: circle.strokeColor,
              strokeOpacity: circle.strokeOpacity,
              strokePosition: circle.strokePosition,
              strokeWeight: circle.strokeWeight,
              visible: circle.visible,
              zIndex: circle.zIndex
            }));
          }
          /**
           * Removes the given circle from the map.
           */

        }, {
          key: "removeCircle",
          value: function removeCircle(circle) {
            var _this28 = this;

            return this._circles.get(circle).then(function (c) {
              c.setMap(null);

              _this28._circles["delete"](circle);
            });
          }
        }, {
          key: "setOptions",
          value: function setOptions(circle, options) {
            return this._circles.get(circle).then(function (c) {
              if (typeof options.strokePosition === 'string') {
                options.strokePosition = google.maps.StrokePosition[options.strokePosition];
              }

              c.setOptions(options);
            });
          }
        }, {
          key: "getBounds",
          value: function getBounds(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.getBounds();
            });
          }
        }, {
          key: "getCenter",
          value: function getCenter(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.getCenter();
            });
          }
        }, {
          key: "getRadius",
          value: function getRadius(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.getRadius();
            });
          }
        }, {
          key: "setCenter",
          value: function setCenter(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.setCenter({
                lat: circle.latitude,
                lng: circle.longitude
              });
            });
          }
        }, {
          key: "setEditable",
          value: function setEditable(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.setEditable(circle.editable);
            });
          }
        }, {
          key: "setDraggable",
          value: function setDraggable(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.setDraggable(circle.draggable);
            });
          }
        }, {
          key: "setVisible",
          value: function setVisible(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.setVisible(circle.visible);
            });
          }
        }, {
          key: "setRadius",
          value: function setRadius(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.setRadius(circle.radius);
            });
          }
        }, {
          key: "getNativeCircle",
          value: function getNativeCircle(circle) {
            return this._circles.get(circle);
          }
        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, circle) {
            var _this29 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var listener = null;

              _this29._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) {
                  return _this29._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });

              return function () {
                if (listener !== null) {
                  listener.remove();
                }
              };
            });
          }
        }]);

        return CircleManager;
      }();

      CircleManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CircleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CircleManager);
      var AgmCircle_1;

      var AgmCircle = AgmCircle_1 = /*#__PURE__*/function () {
        function AgmCircle(_manager) {
          _classCallCheck(this, AgmCircle);

          this._manager = _manager;
          /**
           * Indicates whether this Circle handles mouse events. Defaults to true.
           */

          this.clickable = true;
          /**
           * If set to true, the user can drag this circle over the map. Defaults to false.
           */
          // tslint:disable-next-line:no-input-rename

          this.draggable = false;
          /**
           * If set to true, the user can edit this circle by dragging the control points shown at
           * the center and around the circumference of the circle. Defaults to false.
           */

          this.editable = false;
          /**
           * The radius in meters on the Earth's surface.
           */

          this.radius = 0;
          /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */

          this.strokePosition = 'CENTER';
          /**
           * The stroke width in pixels.
           */

          this.strokeWeight = 0;
          /**
           * Whether this circle is visible on the map. Defaults to true.
           */

          this.visible = true;
          /**
           * This event is fired when the circle's center is changed.
           */

          this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user clicks on the circle.
           */

          this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user clicks on the circle.
           */

          this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is repeatedly fired while the user drags the circle.
           */

          this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user stops dragging the circle.
           */

          this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user starts dragging the circle.
           */

          this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousedown event is fired on the circle.
           */

          this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousemove event is fired on the circle.
           */

          this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on circle mouseout.
           */

          this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on circle mouseover.
           */

          this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mouseup event is fired on the circle.
           */

          this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the circle's radius is changed.
           */

          this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the circle is right-clicked on.
           */

          this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._circleAddedToManager = false;
          this._eventSubscriptions = [];
        }
        /** @internal */


        _createClass(AgmCircle, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._manager.addCircle(this);

            this._circleAddedToManager = true;

            this._registerEventListeners();
          }
          /** @internal */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._circleAddedToManager) {
              return;
            }

            if (changes['latitude'] || changes['longitude']) {
              this._manager.setCenter(this);
            }

            if (changes['editable']) {
              this._manager.setEditable(this);
            }

            if (changes['draggable']) {
              this._manager.setDraggable(this);
            }

            if (changes['visible']) {
              this._manager.setVisible(this);
            }

            if (changes['radius']) {
              this._manager.setRadius(this);
            }

            this._updateCircleOptionsChanges(changes);
          }
        }, {
          key: "_updateCircleOptionsChanges",
          value: function _updateCircleOptionsChanges(changes) {
            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) {
              return AgmCircle_1._mapOptions.indexOf(k) !== -1;
            });
            optionKeys.forEach(function (k) {
              options[k] = changes[k].currentValue;
            });

            if (optionKeys.length > 0) {
              this._manager.setOptions(this, options);
            }
          }
        }, {
          key: "_registerEventListeners",
          value: function _registerEventListeners() {
            var _this30 = this;

            var events = new Map();
            events.set('center_changed', this.centerChange);
            events.set('click', this.circleClick);
            events.set('dblclick', this.circleDblClick);
            events.set('drag', this.drag);
            events.set('dragend', this.dragEnd);
            events.set('dragstart', this.dragStart);
            events.set('mousedown', this.mouseDown);
            events.set('mousemove', this.mouseMove);
            events.set('mouseout', this.mouseOut);
            events.set('mouseover', this.mouseOver);
            events.set('mouseup', this.mouseUp);
            events.set('radius_changed', this.radiusChange);
            events.set('rightclick', this.rightClick);
            events.forEach(function (eventEmitter, eventName) {
              _this30._eventSubscriptions.push(_this30._manager.createEventObservable(eventName, _this30).subscribe(function (value) {
                switch (eventName) {
                  case 'radius_changed':
                    _this30._manager.getRadius(_this30).then(function (radius) {
                      return eventEmitter.emit(radius);
                    });

                    break;

                  case 'center_changed':
                    _this30._manager.getCenter(_this30).then(function (center) {
                      return eventEmitter.emit({
                        lat: center.lat(),
                        lng: center.lng()
                      });
                    });

                    break;

                  default:
                    eventEmitter.emit({
                      coords: {
                        lat: value.latLng.lat(),
                        lng: value.latLng.lng()
                      }
                    });
                }
              }));
            });
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventSubscriptions.forEach(function (s) {
              s.unsubscribe();
            });

            this._eventSubscriptions = null;

            this._manager.removeCircle(this);
          }
          /**
           * Gets the LatLngBounds of this Circle.
           */

        }, {
          key: "getBounds",
          value: function getBounds() {
            return this._manager.getBounds(this);
          }
        }, {
          key: "getCenter",
          value: function getCenter() {
            return this._manager.getCenter(this);
          }
        }]);

        return AgmCircle;
      }();

      AgmCircle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

      AgmCircle.ctorParameters = function () {
        return [{
          type: CircleManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "latitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "longitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "clickable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('circleDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "editable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "fillColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "fillOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "radius", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "strokeColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "strokeOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "strokePosition", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "strokeWeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "visible", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "centerChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "circleClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "circleDblClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "drag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "dragEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "dragStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseDown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseMove", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseUp", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "radiusChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "rightClick", void 0);
      AgmCircle = AgmCircle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-circle'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CircleManager])], AgmCircle);
      /**
       * Manages all Data Layers for a Google Map instance.
       */

      var DataLayerManager = /*#__PURE__*/function () {
        function DataLayerManager(_wrapper, _zone) {
          _classCallCheck(this, DataLayerManager);

          this._wrapper = _wrapper;
          this._zone = _zone;
          this._layers = new Map();
        }
        /**
         * Adds a new Data Layer to the map.
         */


        _createClass(DataLayerManager, [{
          key: "addDataLayer",
          value: function addDataLayer(layer) {
            var _this31 = this;

            var newLayer = this._wrapper.createDataLayer({
              style: layer.style
            }).then(function (d) {
              if (layer.geoJson) {
                _this31.getDataFeatures(d, layer.geoJson).then(function (features) {
                  return d.features = features;
                });
              }

              return d;
            });

            this._layers.set(layer, newLayer);
          }
        }, {
          key: "deleteDataLayer",
          value: function deleteDataLayer(layer) {
            var _this32 = this;

            this._layers.get(layer).then(function (l) {
              l.setMap(null);

              _this32._layers["delete"](layer);
            });
          }
        }, {
          key: "updateGeoJson",
          value: function updateGeoJson(layer, geoJson) {
            var _this33 = this;

            this._layers.get(layer).then(function (l) {
              l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);

                if (index > -1) {
                  l.features.splice(index, 1);
                }
              });

              _this33.getDataFeatures(l, geoJson).then(function (features) {
                return l.features = features;
              });
            });
          }
        }, {
          key: "setDataOptions",
          value: function setDataOptions(layer, options) {
            this._layers.get(layer).then(function (l) {
              l.setControlPosition(options.controlPosition);
              l.setControls(options.controls);
              l.setDrawingMode(options.drawingMode);
              l.setStyle(options.style);
            });
          }
          /**
           * Creates a Google Maps event listener for the given DataLayer as an Observable
           */

        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, layer) {
            var _this34 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this34._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) {
                  return _this34._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });
            });
          }
          /**
           * Extract features from a geoJson using google.maps Data Class
           * @param d : google.maps.Data class instance
           * @param geoJson : url or geojson object
           */

        }, {
          key: "getDataFeatures",
          value: function getDataFeatures(d, geoJson) {
            return new Promise(function (resolve, reject) {
              if (typeof geoJson === 'object') {
                try {
                  var features = d.addGeoJson(geoJson);
                  resolve(features);
                } catch (e) {
                  reject(e);
                }
              } else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
              } else {
                reject("Impossible to extract features from geoJson: wrong argument type");
              }
            });
          }
        }]);

        return DataLayerManager;
      }();

      DataLayerManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      DataLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], DataLayerManager);
      var AgmDataLayer_1;
      var layerId$1 = 0;
      /**
       * AgmDataLayer enables the user to add data layers to the map.
       *
       * ### Example
       * ```typescript
       * import { Component } from 'angular2/core';
       * import { AgmMap, AgmDataLayer } from
       * 'angular-google-maps/core';
       *
       * @Component({
       *  selector: 'my-map-cmp',
       *  directives: [AgmMap, AgmDataLayer],
       *  styles: [`
       *    .agm-container {
       *      height: 300px;
       *    }
       * `],
       *  template: `
       * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
       * 	  </agm-data-layer>
       * </agm-map>
       *  `
       * })
       * export class MyMapCmp {
       *   lat: number = -25.274449;
       *   lng: number = 133.775060;
       *   zoom: number = 5;
       *
       * clicked(clickEvent) {
       *    console.log(clickEvent);
       *  }
       *
       *  styleFunc(feature) {
       *    return ({
       *      clickable: false,
       *      fillColor: feature.getProperty('color'),
       *      strokeWeight: 1
       *    });
       *  }
       *
       *  geoJsonObject: Object = {
       *    "type": "FeatureCollection",
       *    "features": [
       *      {
       *        "type": "Feature",
       *        "properties": {
       *          "letter": "G",
       *          "color": "blue",
       *          "rank": "7",
       *          "ascii": "71"
       *        },
       *        "geometry": {
       *          "type": "Polygon",
       *          "coordinates": [
       *            [
       *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
       *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
       *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
       *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
       *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
       *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
       *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
       *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
       *            ]
       *          ]
       *        }
       *      },
       *      {
       *        "type": "Feature",
       *        "properties": {
       *          "letter": "o",
       *          "color": "red",
       *          "rank": "15",
       *          "ascii": "111"
       *        },
       *        "geometry": {
       *          "type": "Polygon",
       *          "coordinates": [
       *            [
       *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
       *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
       *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
       *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
       *            ],
       *            [
       *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
       *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
       *            ]
       *          ]
       *        }
       *      },
       *      {
       *        "type": "Feature",
       *        "properties": {
       *          "letter": "o",
       *          "color": "yellow",
       *          "rank": "15",
       *          "ascii": "111"
       *        },
       *        "geometry": {
       *          "type": "Polygon",
       *          "coordinates": [
       *            [
       *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
       *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
       *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
       *              [132.71, -25.64], [131.87, -25.76]
       *            ],
       *            [
       *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
       *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
       *            ]
       *          ]
       *        }
       *      },
       *      {
       *        "type": "Feature",
       *        "properties": {
       *          "letter": "g",
       *          "color": "blue",
       *          "rank": "7",
       *          "ascii": "103"
       *        },
       *        "geometry": {
       *          "type": "Polygon",
       *          "coordinates": [
       *            [
       *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
       *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
       *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
       *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
       *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
       *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
       *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
       *            ],
       *            [
       *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
       *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
       *            ]
       *          ]
       *        }
       *      },
       *      {
       *        "type": "Feature",
       *        "properties": {
       *          "letter": "l",
       *          "color": "green",
       *          "rank": "12",
       *          "ascii": "108"
       *        },
       *        "geometry": {
       *          "type": "Polygon",
       *          "coordinates": [
       *            [
       *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
       *            ]
       *          ]
       *        }
       *      },
       *      {
       *        "type": "Feature",
       *        "properties": {
       *          "letter": "e",
       *          "color": "red",
       *          "rank": "5",
       *          "ascii": "101"
       *        },
       *        "geometry": {
       *          "type": "Polygon",
       *          "coordinates": [
       *            [
       *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
       *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
       *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
       *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
       *              [144.31, -28.26], [144.14, -27.41]
       *            ],
       *            [
       *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
       *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
       *            ]
       *          ]
       *        }
       *      }
       *    ]
       *  };
       * }
       * ```
       */

      var AgmDataLayer = AgmDataLayer_1 = /*#__PURE__*/function () {
        function AgmDataLayer(_manager) {
          _classCallCheck(this, AgmDataLayer);

          this._manager = _manager;
          this._addedToManager = false;
          this._id = (layerId$1++).toString();
          this._subscriptions = [];
          /**
           * This event is fired when a feature in the layer is clicked.
           */

          this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * The geoJson to be displayed
           */

          this.geoJson = null;
        }

        _createClass(AgmDataLayer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._addedToManager) {
              return;
            }

            this._manager.addDataLayer(this);

            this._addedToManager = true;

            this._addEventListeners();
          }
        }, {
          key: "_addEventListeners",
          value: function _addEventListeners() {
            var _this35 = this;

            var listeners = [{
              name: 'click',
              handler: function handler(ev) {
                return _this35.layerClick.emit(ev);
              }
            }];
            listeners.forEach(function (obj) {
              var os = _this35._manager.createEventObservable(obj.name, _this35).subscribe(obj.handler);

              _this35._subscriptions.push(os);
            });
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "toString",
          value: function toString() {
            return "AgmDataLayer-".concat(this._id.toString());
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._manager.deleteDataLayer(this); // unsubscribe all registered observable subscriptions


            this._subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
          }
          /** @internal */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this36 = this;

            if (!this._addedToManager) {
              return;
            }

            var geoJsonChange = changes['geoJson'];

            if (geoJsonChange) {
              this._manager.updateGeoJson(this, geoJsonChange.currentValue);
            }

            var dataOptions = {};

            AgmDataLayer_1._dataOptionsAttributes.forEach(function (k) {
              return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this36[k];
            });

            this._manager.setDataOptions(this, dataOptions);
          }
        }]);

        return AgmDataLayer;
      }();

      AgmDataLayer._dataOptionsAttributes = ['style'];

      AgmDataLayer.ctorParameters = function () {
        return [{
          type: DataLayerManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmDataLayer.prototype, "layerClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmDataLayer.prototype, "geoJson", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], AgmDataLayer.prototype, "style", void 0);
      AgmDataLayer = AgmDataLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-data-layer'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DataLayerManager])], AgmDataLayer);
      /**
       * Class to implement when you what to be able to make it work with the auto fit bounds feature
       * of AGM.
       */

      var FitBoundsAccessor = /*#__PURE__*/_createClass(function FitBoundsAccessor() {
        _classCallCheck(this, FitBoundsAccessor);
      });
      /**
       * The FitBoundsService is responsible for computing the bounds of the a single map.
       */


      var FitBoundsService = /*#__PURE__*/function () {
        function FitBoundsService(loader) {
          var _this37 = this;

          _classCallCheck(this, FitBoundsService);

          this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](200);
          this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Map());
          this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
            return _this37._includeInBounds$;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (time) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, time);
          }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (includeInBounds) {
            return _this37._generateBounds(includeInBounds);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        }

        _createClass(FitBoundsService, [{
          key: "_generateBounds",
          value: function _generateBounds(includeInBounds) {
            var bounds = new google.maps.LatLngBounds();
            includeInBounds.forEach(function (b) {
              return bounds.extend(b);
            });
            return bounds;
          }
        }, {
          key: "addToBounds",
          value: function addToBounds(latLng) {
            var id = this._createIdentifier(latLng);

            if (this._includeInBounds$.value.has(id)) {
              return;
            }

            var map = this._includeInBounds$.value;
            map.set(id, latLng);

            this._includeInBounds$.next(map);
          }
        }, {
          key: "removeFromBounds",
          value: function removeFromBounds(latLng) {
            var map = this._includeInBounds$.value;
            map["delete"](this._createIdentifier(latLng));

            this._includeInBounds$.next(map);
          }
        }, {
          key: "changeFitBoundsChangeSampleTime",
          value: function changeFitBoundsChangeSampleTime(timeMs) {
            this._boundsChangeSampleTime$.next(timeMs);
          }
        }, {
          key: "getBounds$",
          value: function getBounds$() {
            return this.bounds$;
          }
        }, {
          key: "_createIdentifier",
          value: function _createIdentifier(latLng) {
            return "".concat(latLng.lat, "+").concat(latLng.lng);
          }
        }]);

        return FitBoundsService;
      }();

      FitBoundsService.ctorParameters = function () {
        return [{
          type: MapsAPILoader
        }];
      };

      FitBoundsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])], FitBoundsService);
      /**
       * Adds the given directive to the auto fit bounds feature when the value is true.
       * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
       * @example
       * <agm-marker [agmFitBounds]="true"></agm-marker>
       */

      var AgmFitBounds = /*#__PURE__*/function () {
        function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
          _classCallCheck(this, AgmFitBounds);

          this._fitBoundsAccessor = _fitBoundsAccessor;
          this._fitBoundsService = _fitBoundsService;
          /**
           * If the value is true, the element gets added to the bounds of the map.
           * Default: true.
           */

          this.agmFitBounds = true;
          this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._latestFitBoundsDetails = null;
        }
        /**
         * @internal
         */


        _createClass(AgmFitBounds, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._updateBounds();
          }
          /**
           * @internal
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this38 = this;

            this._fitBoundsAccessor.getFitBoundsDetails$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
              return x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$)).subscribe(function (details) {
              return _this38._updateBounds(details);
            });
          }
          /*
           Either the location changed, or visible status changed.
           Possible state changes are
           invisible -> visible
           visible -> invisible
           visible -> visible (new location)
          */

        }, {
          key: "_updateBounds",
          value: function _updateBounds(newFitBoundsDetails) {
            // either visibility will change, or location, so remove the old one anyway
            if (this._latestFitBoundsDetails) {
              this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng); // don't set latestFitBoundsDetails to null, because we can toggle visibility from
              // true -> false -> true, in which case we still need old value cached here

            }

            if (newFitBoundsDetails) {
              this._latestFitBoundsDetails = newFitBoundsDetails;
            }

            if (!this._latestFitBoundsDetails) {
              return;
            }

            if (this.agmFitBounds === true) {
              this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
            }
          }
          /**
           * @internal
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed$.next();

            this._destroyed$.complete();

            if (this._latestFitBoundsDetails !== null) {
              this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
            }
          }
        }]);

        return AgmFitBounds;
      }();

      AgmFitBounds.ctorParameters = function () {
        return [{
          type: FitBoundsAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: FitBoundsService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmFitBounds.prototype, "agmFitBounds", void 0);
      AgmFitBounds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[agmFitBounds]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FitBoundsAccessor, FitBoundsService])], AgmFitBounds);

      var MarkerManager = /*#__PURE__*/function () {
        function MarkerManager(_mapsWrapper, _zone) {
          _classCallCheck(this, MarkerManager);

          this._mapsWrapper = _mapsWrapper;
          this._zone = _zone;
          this._markers = new Map();
        }

        _createClass(MarkerManager, [{
          key: "convertAnimation",
          value: function convertAnimation(uiAnim) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!(uiAnim === null)) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return", null);

                  case 4:
                    return _context.abrupt("return", this._mapsWrapper.getNativeMap().then(function () {
                      return google.maps.Animation[uiAnim];
                    }));

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteMarker",
          value: function deleteMarker(marker) {
            var _this39 = this;

            var m = this._markers.get(marker);

            if (m == null) {
              // marker already deleted
              return Promise.resolve();
            }

            return m.then(function (m) {
              return _this39._zone.run(function () {
                m.setMap(null);

                _this39._markers["delete"](marker);
              });
            });
          }
        }, {
          key: "updateMarkerPosition",
          value: function updateMarkerPosition(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setPosition({
                lat: marker.latitude,
                lng: marker.longitude
              });
            });
          }
        }, {
          key: "updateTitle",
          value: function updateTitle(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setTitle(marker.title);
            });
          }
        }, {
          key: "updateLabel",
          value: function updateLabel(marker) {
            return this._markers.get(marker).then(function (m) {
              m.setLabel(marker.label);
            });
          }
        }, {
          key: "updateDraggable",
          value: function updateDraggable(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setDraggable(marker.draggable);
            });
          }
        }, {
          key: "updateIcon",
          value: function updateIcon(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setIcon(marker.iconUrl);
            });
          }
        }, {
          key: "updateOpacity",
          value: function updateOpacity(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setOpacity(marker.opacity);
            });
          }
        }, {
          key: "updateVisible",
          value: function updateVisible(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setVisible(marker.visible);
            });
          }
        }, {
          key: "updateZIndex",
          value: function updateZIndex(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setZIndex(marker.zIndex);
            });
          }
        }, {
          key: "updateClickable",
          value: function updateClickable(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setClickable(marker.clickable);
            });
          }
        }, {
          key: "updateAnimation",
          value: function updateAnimation(marker) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var m;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this._markers.get(marker);

                  case 2:
                    m = _context2.sent;
                    _context2.t0 = m;
                    _context2.next = 6;
                    return this.convertAnimation(marker.animation);

                  case 6:
                    _context2.t1 = _context2.sent;

                    _context2.t0.setAnimation.call(_context2.t0, _context2.t1);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "addMarker",
          value: function addMarker(marker) {
            var _this40 = this;

            var markerPromise = new Promise(function (resolve) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this40, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.t0 = this._mapsWrapper;
                      _context3.t1 = {
                        lat: marker.latitude,
                        lng: marker.longitude
                      };
                      _context3.t2 = marker.label;
                      _context3.t3 = marker.draggable;
                      _context3.t4 = marker.iconUrl;
                      _context3.t5 = marker.opacity;
                      _context3.t6 = marker.visible;
                      _context3.t7 = marker.zIndex;
                      _context3.t8 = marker.title;
                      _context3.t9 = marker.clickable;
                      _context3.next = 12;
                      return this.convertAnimation(marker.animation);

                    case 12:
                      _context3.t10 = _context3.sent;
                      _context3.t11 = {
                        position: _context3.t1,
                        label: _context3.t2,
                        draggable: _context3.t3,
                        icon: _context3.t4,
                        opacity: _context3.t5,
                        visible: _context3.t6,
                        zIndex: _context3.t7,
                        title: _context3.t8,
                        clickable: _context3.t9,
                        animation: _context3.t10
                      };
                      return _context3.abrupt("return", _context3.t0.createMarker.call(_context3.t0, _context3.t11).then(resolve));

                    case 15:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3, this);
              }));
            });

            this._markers.set(marker, markerPromise);
          }
        }, {
          key: "getNativeMarker",
          value: function getNativeMarker(marker) {
            return this._markers.get(marker);
          }
        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, marker) {
            var _this41 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this41._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) {
                  return _this41._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });
            });
          }
        }]);

        return MarkerManager;
      }();

      MarkerManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      MarkerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], MarkerManager);

      var InfoWindowManager = /*#__PURE__*/function () {
        function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
          _classCallCheck(this, InfoWindowManager);

          this._mapsWrapper = _mapsWrapper;
          this._zone = _zone;
          this._markerManager = _markerManager;
          this._infoWindows = new Map();
        }

        _createClass(InfoWindowManager, [{
          key: "deleteInfoWindow",
          value: function deleteInfoWindow(infoWindow) {
            var _this42 = this;

            var iWindow = this._infoWindows.get(infoWindow);

            if (iWindow == null) {
              // info window already deleted
              return Promise.resolve();
            }

            return iWindow.then(function (i) {
              return _this42._zone.run(function () {
                i.close();

                _this42._infoWindows["delete"](infoWindow);
              });
            });
          }
        }, {
          key: "setPosition",
          value: function setPosition(infoWindow) {
            return this._infoWindows.get(infoWindow).then(function (i) {
              return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
              });
            });
          }
        }, {
          key: "setZIndex",
          value: function setZIndex(infoWindow) {
            return this._infoWindows.get(infoWindow).then(function (i) {
              return i.setZIndex(infoWindow.zIndex);
            });
          }
        }, {
          key: "open",
          value: function open(infoWindow) {
            var _this43 = this;

            return this._infoWindows.get(infoWindow).then(function (w) {
              if (infoWindow.hostMarker != null) {
                return _this43._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                  return _this43._mapsWrapper.getNativeMap().then(function (map) {
                    return w.open(map, marker);
                  });
                });
              }

              return _this43._mapsWrapper.getNativeMap().then(function (map) {
                return w.open(map);
              });
            });
          }
        }, {
          key: "close",
          value: function close(infoWindow) {
            return this._infoWindows.get(infoWindow).then(function (w) {
              return w.close();
            });
          }
        }, {
          key: "setOptions",
          value: function setOptions(infoWindow, options) {
            return this._infoWindows.get(infoWindow).then(function (i) {
              return i.setOptions(options);
            });
          }
        }, {
          key: "addInfoWindow",
          value: function addInfoWindow(infoWindow) {
            var options = {
              content: infoWindow.content,
              maxWidth: infoWindow.maxWidth,
              zIndex: infoWindow.zIndex,
              disableAutoPan: infoWindow.disableAutoPan
            };

            if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
              options.position = {
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
              };
            }

            var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);

            this._infoWindows.set(infoWindow, infoWindowPromise);
          }
          /**
           * Creates a Google Maps event listener for the given InfoWindow as an Observable
           */

        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, infoWindow) {
            var _this44 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this44._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) {
                  return _this44._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });
            });
          }
        }]);

        return InfoWindowManager;
      }();

      InfoWindowManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: MarkerManager
        }];
      };

      InfoWindowManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], MarkerManager])], InfoWindowManager);
      var AgmInfoWindow_1;
      var infoWindowId = 0;
      /**
       * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
       *
       * ### Example
       * ```typescript
       * import { Component } from '@angular/core';
       *
       * @Component({
       *  selector: 'my-map-cmp',
       *  styles: [`
       *    .agm-map-container {
       *      height: 300px;
       *    }
       * `],
       *  template: `
       *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
       *        <agm-info-window [disableAutoPan]="true">
       *          Hi, this is the content of the <strong>info window</strong>
       *        </agm-info-window>
       *      </agm-marker>
       *    </agm-map>
       *  `
       * })
       * ```
       */

      var AgmInfoWindow = AgmInfoWindow_1 = /*#__PURE__*/function () {
        function AgmInfoWindow(_infoWindowManager, _el) {
          _classCallCheck(this, AgmInfoWindow);

          this._infoWindowManager = _infoWindowManager;
          this._el = _el;
          /**
           * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
           */

          this.isOpen = false;
          /**
           * Emits an event when the info window is closed.
           */

          this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._infoWindowAddedToManager = false;
          this._id = (infoWindowId++).toString();
        }

        _createClass(AgmInfoWindow, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.content = this._el.nativeElement.querySelector('.agm-info-window-content');

            this._infoWindowManager.addInfoWindow(this);

            this._infoWindowAddedToManager = true;

            this._updateOpenState();

            this._registerEventListeners();
          }
          /** @internal */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._infoWindowAddedToManager) {
              return;
            }

            if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' && typeof this.longitude === 'number') {
              this._infoWindowManager.setPosition(this);
            }

            if (changes['zIndex']) {
              this._infoWindowManager.setZIndex(this);
            }

            if (changes['isOpen']) {
              this._updateOpenState();
            }

            this._setInfoWindowOptions(changes);
          }
        }, {
          key: "_registerEventListeners",
          value: function _registerEventListeners() {
            var _this45 = this;

            this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
              _this45.isOpen = false;

              _this45.infoWindowClose.emit();
            });
          }
        }, {
          key: "_updateOpenState",
          value: function _updateOpenState() {
            this.isOpen ? this.open() : this.close();
          }
        }, {
          key: "_setInfoWindowOptions",
          value: function _setInfoWindowOptions(changes) {
            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) {
              return AgmInfoWindow_1._infoWindowOptionsInputs.indexOf(k) !== -1;
            });
            optionKeys.forEach(function (k) {
              options[k] = changes[k].currentValue;
            });

            this._infoWindowManager.setOptions(this, options);
          }
          /**
           * Opens the info window.
           */

        }, {
          key: "open",
          value: function open() {
            return this._infoWindowManager.open(this);
          }
          /**
           * Closes the info window.
           */

        }, {
          key: "close",
          value: function close() {
            var _this46 = this;

            return this._infoWindowManager.close(this).then(function () {
              _this46.infoWindowClose.emit();
            });
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "toString",
          value: function toString() {
            return 'AgmInfoWindow-' + this._id.toString();
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._infoWindowManager.deleteInfoWindow(this);
          }
        }]);

        return AgmInfoWindow;
      }();

      AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];

      AgmInfoWindow.ctorParameters = function () {
        return [{
          type: InfoWindowManager
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "latitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "longitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmInfoWindow.prototype, "disableAutoPan", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "maxWidth", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmInfoWindow.prototype, "isOpen", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmInfoWindow.prototype, "infoWindowClose", void 0);
      AgmInfoWindow = AgmInfoWindow_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'agm-info-window',
        template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [InfoWindowManager, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], AgmInfoWindow);
      /**
       * Manages all KML Layers for a Google Map instance.
       */

      var KmlLayerManager = /*#__PURE__*/function () {
        function KmlLayerManager(_wrapper, _zone) {
          _classCallCheck(this, KmlLayerManager);

          this._wrapper = _wrapper;
          this._zone = _zone;
          this._layers = new Map();
        }
        /**
         * Adds a new KML Layer to the map.
         */


        _createClass(KmlLayerManager, [{
          key: "addKmlLayer",
          value: function addKmlLayer(layer) {
            var newLayer = this._wrapper.getNativeMap().then(function (m) {
              return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
              });
            });

            this._layers.set(layer, newLayer);
          }
        }, {
          key: "setOptions",
          value: function setOptions(layer, options) {
            this._layers.get(layer).then(function (l) {
              return l.setOptions(options);
            });
          }
        }, {
          key: "deleteKmlLayer",
          value: function deleteKmlLayer(layer) {
            var _this47 = this;

            this._layers.get(layer).then(function (l) {
              l.setMap(null);

              _this47._layers["delete"](layer);
            });
          }
          /**
           * Creates a Google Maps event listener for the given KmlLayer as an Observable
           */

        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, layer) {
            var _this48 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this48._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) {
                  return _this48._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });
            });
          }
        }]);

        return KmlLayerManager;
      }();

      KmlLayerManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      KmlLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], KmlLayerManager);
      var AgmKmlLayer_1;
      var layerId$2 = 0;

      var AgmKmlLayer = AgmKmlLayer_1 = /*#__PURE__*/function () {
        function AgmKmlLayer(_manager) {
          _classCallCheck(this, AgmKmlLayer);

          this._manager = _manager;
          this._addedToManager = false;
          this._id = (layerId$2++).toString();
          this._subscriptions = [];
          /**
           * If true, the layer receives mouse events. Default value is true.
           */

          this.clickable = true;
          /**
           * By default, the input map is centered and zoomed to the bounding box of the contents of the
           * layer.
           * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
           * were never set.
           */

          this.preserveViewport = false;
          /**
           * Whether to render the screen overlays. Default true.
           */

          this.screenOverlays = true;
          /**
           * Suppress the rendering of info windows when layer features are clicked.
           */

          this.suppressInfoWindows = false;
          /**
           * The URL of the KML document to display.
           */

          this.url = null;
          /**
           * The z-index of the layer.
           */

          this.zIndex = null;
          /**
           * This event is fired when a feature in the layer is clicked.
           */

          this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the KML layers default viewport has changed.
           */

          this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the KML layer has finished loading.
           * At this point it is safe to read the status property to determine if the layer loaded
           * successfully.
           */

          this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(AgmKmlLayer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._addedToManager) {
              return;
            }

            this._manager.addKmlLayer(this);

            this._addedToManager = true;

            this._addEventListeners();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._addedToManager) {
              return;
            }

            this._updatePolygonOptions(changes);
          }
        }, {
          key: "_updatePolygonOptions",
          value: function _updatePolygonOptions(changes) {
            var options = Object.keys(changes).filter(function (k) {
              return AgmKmlLayer_1._kmlLayerOptions.indexOf(k) !== -1;
            }).reduce(function (obj, k) {
              obj[k] = changes[k].currentValue;
              return obj;
            }, {});

            if (Object.keys(options).length > 0) {
              this._manager.setOptions(this, options);
            }
          }
        }, {
          key: "_addEventListeners",
          value: function _addEventListeners() {
            var _this49 = this;

            var listeners = [{
              name: 'click',
              handler: function handler(ev) {
                return _this49.layerClick.emit(ev);
              }
            }, {
              name: 'defaultviewport_changed',
              handler: function handler() {
                return _this49.defaultViewportChange.emit();
              }
            }, {
              name: 'status_changed',
              handler: function handler() {
                return _this49.statusChange.emit();
              }
            }];
            listeners.forEach(function (obj) {
              var os = _this49._manager.createEventObservable(obj.name, _this49).subscribe(obj.handler);

              _this49._subscriptions.push(os);
            });
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "toString",
          value: function toString() {
            return "AgmKmlLayer-".concat(this._id.toString());
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._manager.deleteKmlLayer(this); // unsubscribe all registered observable subscriptions


            this._subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return AgmKmlLayer;
      }();

      AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];

      AgmKmlLayer.ctorParameters = function () {
        return [{
          type: KmlLayerManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "clickable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "preserveViewport", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "screenOverlays", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "suppressInfoWindows", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmKmlLayer.prototype, "url", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmKmlLayer.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "layerClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "defaultViewportChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "statusChange", void 0);
      AgmKmlLayer = AgmKmlLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-kml-layer'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KmlLayerManager])], AgmKmlLayer);

      function createMVCEventObservable(array) {
        var eventNames = ['insert_at', 'remove_at', 'set_at'];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(function (handler) {
          return eventNames.map(function (evName) {
            return array.addListener(evName, function (index, previous) {
              return handler.apply(array, [{
                'newArr': array.getArray(),
                evName: evName,
                index: index,
                previous: previous
              }]);
            });
          });
        }, function (_handler, evListeners) {
          return evListeners.forEach(function (evListener) {
            return evListener.remove();
          });
        });
      }

      var MvcArrayMock = /*#__PURE__*/function () {
        function MvcArrayMock() {
          _classCallCheck(this, MvcArrayMock);

          this.vals = [];
          this.listeners = {
            'remove_at': [],
            'insert_at': [],
            'set_at': []
          };
        }

        _createClass(MvcArrayMock, [{
          key: "clear",
          value: function clear() {
            for (var i = this.vals.length - 1; i >= 0; i--) {
              this.removeAt(i);
            }
          }
        }, {
          key: "getArray",
          value: function getArray() {
            return _toConsumableArray(this.vals);
          }
        }, {
          key: "getAt",
          value: function getAt(i) {
            return this.vals[i];
          }
        }, {
          key: "getLength",
          value: function getLength() {
            return this.vals.length;
          }
        }, {
          key: "insertAt",
          value: function insertAt(i, elem) {
            this.vals.splice(i, 0, elem);
            this.listeners.insert_at.map(function (listener) {
              return listener(i);
            });
          }
        }, {
          key: "pop",
          value: function pop() {
            var _this50 = this;

            var deleted = this.vals.pop();
            this.listeners.remove_at.map(function (listener) {
              return listener(_this50.vals.length, deleted);
            });
            return deleted;
          }
        }, {
          key: "push",
          value: function push(elem) {
            var _this51 = this;

            this.vals.push(elem);
            this.listeners.insert_at.map(function (listener) {
              return listener(_this51.vals.length - 1);
            });
            return this.vals.length;
          }
        }, {
          key: "removeAt",
          value: function removeAt(i) {
            var deleted = this.vals.splice(i, 1)[0];
            this.listeners.remove_at.map(function (listener) {
              return listener(i, deleted);
            });
            return deleted;
          }
        }, {
          key: "setAt",
          value: function setAt(i, elem) {
            var deleted = this.vals[i];
            this.vals[i] = elem;
            this.listeners.set_at.map(function (listener) {
              return listener(i, deleted);
            });
          }
        }, {
          key: "forEach",
          value: function forEach(callback) {
            this.vals.forEach(callback);
          }
        }, {
          key: "addListener",
          value: function addListener(eventName, handler) {
            var listenerArr = this.listeners[eventName];
            listenerArr.push(handler);
            return {
              remove: function remove() {
                listenerArr.splice(listenerArr.indexOf(handler), 1);
              }
            };
          }
        }]);

        return MvcArrayMock;
      }();

      var PolygonManager = /*#__PURE__*/function () {
        function PolygonManager(_mapsWrapper, _zone) {
          _classCallCheck(this, PolygonManager);

          this._mapsWrapper = _mapsWrapper;
          this._zone = _zone;
          this._polygons = new Map();
        }

        _createClass(PolygonManager, [{
          key: "addPolygon",
          value: function addPolygon(path) {
            var polygonPromise = this._mapsWrapper.createPolygon({
              clickable: path.clickable,
              draggable: path.draggable,
              editable: path.editable,
              fillColor: path.fillColor,
              fillOpacity: path.fillOpacity,
              geodesic: path.geodesic,
              paths: path.paths,
              strokeColor: path.strokeColor,
              strokeOpacity: path.strokeOpacity,
              strokeWeight: path.strokeWeight,
              visible: path.visible,
              zIndex: path.zIndex
            });

            this._polygons.set(path, polygonPromise);
          }
        }, {
          key: "updatePolygon",
          value: function updatePolygon(polygon) {
            var _this52 = this;

            var m = this._polygons.get(polygon);

            if (m == null) {
              return Promise.resolve();
            }

            return m.then(function (l) {
              return _this52._zone.run(function () {
                l.setPaths(polygon.paths);
              });
            });
          }
        }, {
          key: "setPolygonOptions",
          value: function setPolygonOptions(path, options) {
            return this._polygons.get(path).then(function (l) {
              l.setOptions(options);
            });
          }
        }, {
          key: "deletePolygon",
          value: function deletePolygon(paths) {
            var _this53 = this;

            var m = this._polygons.get(paths);

            if (m == null) {
              return Promise.resolve();
            }

            return m.then(function (l) {
              return _this53._zone.run(function () {
                l.setMap(null);

                _this53._polygons["delete"](paths);
              });
            });
          }
        }, {
          key: "getPath",
          value: function getPath(polygon) {
            return this._polygons.get(polygon).then(function (polygon) {
              return polygon.getPath().getArray();
            });
          }
        }, {
          key: "getPaths",
          value: function getPaths(polygon) {
            return this._polygons.get(polygon).then(function (polygon) {
              return polygon.getPaths().getArray().map(function (p) {
                return p.getArray();
              });
            });
          }
        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, path) {
            var _this54 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this54._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) {
                  return _this54._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });
            });
          }
        }, {
          key: "createPathEventObservable",
          value: function createPathEventObservable(agmPolygon) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var polygon, paths, pathsChanges$;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this._polygons.get(agmPolygon);

                  case 2:
                    polygon = _context4.sent;
                    paths = polygon.getPaths();
                    pathsChanges$ = createMVCEventObservable(paths);
                    return _context4.abrupt("return", pathsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
                      newArr: paths.getArray()
                    }), // in order to subscribe to them all
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (parentMVEvent) {
                      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray( // rest parameter
                      parentMVEvent.newArr.map(function (chMVC, index) {
                        return createMVCEventObservable(chMVC).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (chMVCEvent) {
                          return {
                            parentMVEvent: parentMVEvent,
                            chMVCEvent: chMVCEvent,
                            pathIndex: index
                          };
                        }));
                      }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
                        parentMVEvent: parentMVEvent,
                        chMVCEvent: null,
                        pathIndex: null
                      }));
                    }), // start the merged ob with an event signinifing change to parent
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), // skip the manually added event
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
                      var parentMVEvent = _ref.parentMVEvent,
                          chMVCEvent = _ref.chMVCEvent,
                          pathIndex = _ref.pathIndex;
                      var retVal;

                      if (!chMVCEvent) {
                        retVal = {
                          newArr: parentMVEvent.newArr.map(function (subArr) {
                            return subArr.getArray().map(function (latLng) {
                              return latLng.toJSON();
                            });
                          }),
                          eventName: parentMVEvent.evName,
                          index: parentMVEvent.index
                        };

                        if (parentMVEvent.previous) {
                          retVal.previous = parentMVEvent.previous.getArray();
                        }
                      } else {
                        retVal = {
                          newArr: parentMVEvent.newArr.map(function (subArr) {
                            return subArr.getArray().map(function (latLng) {
                              return latLng.toJSON();
                            });
                          }),
                          pathIndex: pathIndex,
                          eventName: chMVCEvent.evName,
                          index: chMVCEvent.index
                        };

                        if (chMVCEvent.previous) {
                          retVal.previous = chMVCEvent.previous;
                        }
                      }

                      return retVal;
                    })));

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }]);

        return PolygonManager;
      }();

      PolygonManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      PolygonManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], PolygonManager);
      var PolylineManager_1;

      var PolylineManager = PolylineManager_1 = /*#__PURE__*/function () {
        function PolylineManager(_mapsWrapper, _zone) {
          _classCallCheck(this, PolylineManager);

          this._mapsWrapper = _mapsWrapper;
          this._zone = _zone;
          this._polylines = new Map();
        }

        _createClass(PolylineManager, [{
          key: "addPolyline",
          value: function addPolyline(line) {
            var _this55 = this;

            var polylinePromise = this._mapsWrapper.getNativeMap().then(function () {
              return [PolylineManager_1._convertPoints(line), PolylineManager_1._convertIcons(line)];
            }).then(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                  path = _ref3[0],
                  icons = _ref3[1];

              return _this55._mapsWrapper.createPolyline({
                clickable: line.clickable,
                draggable: line.draggable,
                editable: line.editable,
                geodesic: line.geodesic,
                strokeColor: line.strokeColor,
                strokeOpacity: line.strokeOpacity,
                strokeWeight: line.strokeWeight,
                visible: line.visible,
                zIndex: line.zIndex,
                path: path,
                icons: icons
              });
            });

            this._polylines.set(line, polylinePromise);
          }
        }, {
          key: "updatePolylinePoints",
          value: function updatePolylinePoints(line) {
            var _this56 = this;

            var path = PolylineManager_1._convertPoints(line);

            var m = this._polylines.get(line);

            if (m == null) {
              return Promise.resolve();
            }

            return m.then(function (l) {
              return _this56._zone.run(function () {
                l.setPath(path);
              });
            });
          }
        }, {
          key: "updateIconSequences",
          value: function updateIconSequences(line) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this57 = this;

              var icons, m;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this._mapsWrapper.getNativeMap();

                  case 2:
                    icons = PolylineManager_1._convertIcons(line);
                    m = this._polylines.get(line);

                    if (!(m == null)) {
                      _context5.next = 6;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 6:
                    return _context5.abrupt("return", m.then(function (l) {
                      return _this57._zone.run(function () {
                        return l.setOptions({
                          icons: icons
                        });
                      });
                    }));

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "setPolylineOptions",
          value: function setPolylineOptions(line, options) {
            return this._polylines.get(line).then(function (l) {
              l.setOptions(options);
            });
          }
        }, {
          key: "deletePolyline",
          value: function deletePolyline(line) {
            var _this58 = this;

            var m = this._polylines.get(line);

            if (m == null) {
              return Promise.resolve();
            }

            return m.then(function (l) {
              return _this58._zone.run(function () {
                l.setMap(null);

                _this58._polylines["delete"](line);
              });
            });
          }
        }, {
          key: "getMVCPath",
          value: function getMVCPath(agmPolyline) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var polyline;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this._polylines.get(agmPolyline);

                  case 2:
                    polyline = _context6.sent;
                    return _context6.abrupt("return", polyline.getPath());

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getPath",
          value: function getPath(agmPolyline) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.getMVCPath(agmPolyline);

                  case 2:
                    return _context7.abrupt("return", _context7.sent.getArray());

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, line) {
            var _this59 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this59._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) {
                  return _this59._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });
            });
          }
        }, {
          key: "createPathEventObservable",
          value: function createPathEventObservable(line) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var mvcPath;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.getMVCPath(line);

                  case 2:
                    mvcPath = _context8.sent;
                    return _context8.abrupt("return", createMVCEventObservable(mvcPath));

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          }
        }], [{
          key: "_convertPoints",
          value: function _convertPoints(line) {
            var path = line._getPoints().map(function (point) {
              return {
                lat: point.latitude,
                lng: point.longitude
              };
            });

            return path;
          }
        }, {
          key: "_convertPath",
          value: function _convertPath(path) {
            var symbolPath = google.maps.SymbolPath[path];

            if (typeof symbolPath === 'number') {
              return symbolPath;
            } else {
              return path;
            }
          }
        }, {
          key: "_convertIcons",
          value: function _convertIcons(line) {
            var icons = line._getIcons().map(function (agmIcon) {
              return {
                fixedRotation: agmIcon.fixedRotation,
                offset: agmIcon.offset,
                repeat: agmIcon.repeat,
                icon: {
                  anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
                  fillColor: agmIcon.fillColor,
                  fillOpacity: agmIcon.fillOpacity,
                  path: PolylineManager_1._convertPath(agmIcon.path),
                  rotation: agmIcon.rotation,
                  scale: agmIcon.scale,
                  strokeColor: agmIcon.strokeColor,
                  strokeOpacity: agmIcon.strokeOpacity,
                  strokeWeight: agmIcon.strokeWeight
                }
              };
            }); // prune undefineds;


            icons.forEach(function (icon) {
              Object.entries(icon).forEach(function (_ref4) {
                var _ref5 = _slicedToArray(_ref4, 2),
                    key = _ref5[0],
                    val = _ref5[1];

                if (typeof val === 'undefined') {
                  delete icon[key];
                }
              });

              if (typeof icon.icon.anchor.x === 'undefined' || typeof icon.icon.anchor.y === 'undefined') {
                delete icon.icon.anchor;
              }
            });
            return icons;
          }
        }]);

        return PolylineManager;
      }();

      PolylineManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      PolylineManager = PolylineManager_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], PolylineManager);

      var RectangleManager = /*#__PURE__*/function () {
        function RectangleManager(_apiWrapper, _zone) {
          _classCallCheck(this, RectangleManager);

          this._apiWrapper = _apiWrapper;
          this._zone = _zone;
          this._rectangles = new Map();
        }

        _createClass(RectangleManager, [{
          key: "addRectangle",
          value: function addRectangle(rectangle) {
            this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
              bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
              },
              clickable: rectangle.clickable,
              draggable: rectangle.draggable,
              editable: rectangle.editable,
              fillColor: rectangle.fillColor,
              fillOpacity: rectangle.fillOpacity,
              strokeColor: rectangle.strokeColor,
              strokeOpacity: rectangle.strokeOpacity,
              strokePosition: rectangle.strokePosition,
              strokeWeight: rectangle.strokeWeight,
              visible: rectangle.visible,
              zIndex: rectangle.zIndex
            }));
          }
          /**
           * Removes the given rectangle from the map.
           */

        }, {
          key: "removeRectangle",
          value: function removeRectangle(rectangle) {
            var _this60 = this;

            return this._rectangles.get(rectangle).then(function (r) {
              r.setMap(null);

              _this60._rectangles["delete"](rectangle);
            });
          }
        }, {
          key: "setOptions",
          value: function setOptions(rectangle, options) {
            return this._rectangles.get(rectangle).then(function (r) {
              return r.setOptions(options);
            });
          }
        }, {
          key: "getBounds",
          value: function getBounds(rectangle) {
            return this._rectangles.get(rectangle).then(function (r) {
              return r.getBounds();
            });
          }
        }, {
          key: "setBounds",
          value: function setBounds(rectangle) {
            return this._rectangles.get(rectangle).then(function (r) {
              return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
              });
            });
          }
        }, {
          key: "setEditable",
          value: function setEditable(rectangle) {
            return this._rectangles.get(rectangle).then(function (r) {
              return r.setEditable(rectangle.editable);
            });
          }
        }, {
          key: "setDraggable",
          value: function setDraggable(rectangle) {
            return this._rectangles.get(rectangle).then(function (r) {
              return r.setDraggable(rectangle.draggable);
            });
          }
        }, {
          key: "setVisible",
          value: function setVisible(rectangle) {
            return this._rectangles.get(rectangle).then(function (r) {
              return r.setVisible(rectangle.visible);
            });
          }
        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, rectangle) {
            var _this61 = this;

            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
              var listener = null;

              _this61._rectangles.get(rectangle).then(function (r) {
                listener = r.addListener(eventName, function (e) {
                  return _this61._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });

              return function () {
                if (listener !== null) {
                  listener.remove();
                }
              };
            });
          }
        }]);

        return RectangleManager;
      }();

      RectangleManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      RectangleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], RectangleManager);
      var AgmMap_1;
      /**
       * AgmMap renders a Google Map.
       * **Important note**: To be able see a map in the browser, you have to define a height for the
       * element `agm-map`.
       *
       * ### Example
       * ```typescript
       * import { Component } from '@angular/core';
       *
       * @Component({
       *  selector: 'my-map-cmp',
       *  styles: [`
       *    agm-map {
       *      height: 300px;
       *    }
       * `],
       *  template: `
       *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       *    </agm-map>
       *  `
       * })
       * ```
       */

      var AgmMap = AgmMap_1 = /*#__PURE__*/function () {
        function AgmMap(_elem, _mapsWrapper, _platformId, _fitBoundsService, _zone) {
          _classCallCheck(this, AgmMap);

          this._elem = _elem;
          this._mapsWrapper = _mapsWrapper;
          this._platformId = _platformId;
          this._fitBoundsService = _fitBoundsService;
          this._zone = _zone;
          /**
           * The longitude that defines the center of the map.
           */

          this.longitude = 0;
          /**
           * The latitude that defines the center of the map.
           */

          this.latitude = 0;
          /**
           * The zoom level of the map. The default zoom level is 8.
           */

          this.zoom = 8;
          /**
           * Enables/disables if map is draggable.
           */
          // tslint:disable-next-line:no-input-rename

          this.draggable = true;
          /**
           * Enables/disables zoom and center on double click. Enabled by default.
           */

          this.disableDoubleClickZoom = false;
          /**
           * Enables/disables all default UI of the Google map. Please note: When the map is created, this
           * value cannot get updated.
           */

          this.disableDefaultUI = false;
          /**
           * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
           */

          this.scrollwheel = true;
          /**
           * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
           * enabled by default.
           */

          this.keyboardShortcuts = true;
          /**
           * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
           * modes, these styles will only apply to labels and geometry.
           */

          this.styles = [];
          /**
           * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
           * used to
           * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
           */

          this.usePanning = false;
          /**
           * Sets the viewport to contain the given bounds.
           * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
           */

          this.fitBounds = false;
          /**
           * The initial enabled/disabled state of the Scale control. This is disabled by default.
           */

          this.scaleControl = false;
          /**
           * The initial enabled/disabled state of the Map type control.
           */

          this.mapTypeControl = false;
          /**
           * The initial enabled/disabled state of the Pan control.
           */

          this.panControl = false;
          /**
           * The initial enabled/disabled state of the Rotate control.
           */

          this.rotateControl = false;
          /**
           * The initial enabled/disabled state of the Fullscreen control.
           */

          this.fullscreenControl = false;
          /**
           * The map mapTypeId. Defaults to 'roadmap'.
           */

          this.mapTypeId = 'roadmap';
          /**
           * When false, map icons are not clickable. A map icon represents a point of interest,
           * also known as a POI. By default map icons are clickable.
           */

          this.clickableIcons = true;
          /**
           * A map icon represents a point of interest, also known as a POI.
           * When map icons are clickable by default, an info window is displayed.
           * When this property is set to false, the info window will not be shown but the click event
           * will still fire
           */

          this.showDefaultInfoWindow = true;
          /**
           * This setting controls how gestures on the map are handled.
           * Allowed values:
           * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
           * - 'greedy'      (All touch gestures pan or zoom the map.)
           * - 'none'        (The map cannot be panned or zoomed by user gestures.)
           * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
           */

          this.gestureHandling = 'auto';
          /**
           * Controls the automatic switching behavior for the angle of incidence of
           * the map. The only allowed values are 0 and 45. The value 0 causes the map
           * to always use a 0° overhead view regardless of the zoom level and
           * viewport. The value 45 causes the tilt angle to automatically switch to
           * 45 whenever 45° imagery is available for the current zoom level and
           * viewport, and switch back to 0 whenever 45° imagery is not available
           * (this is the default behavior). 45° imagery is only available for
           * satellite and hybrid map types, within some locations, and at some zoom
           * levels. Note: getTilt returns the current tilt angle, not the value
           * specified by this option. Because getTilt and this option refer to
           * different things, do not bind() the tilt property; doing so may yield
           * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
           */

          this.tilt = 0;
          this._observableSubscriptions = [];
          /**
           * This event emitter gets emitted when the user clicks on the map (but not when they click on a
           * marker or infoWindow).
           */

          this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user right-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */

          this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user double-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */

          this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter is fired when the map center changes.
           */

          this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the viewport bounds have changed.
           */

          this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the mapTypeId property changes.
           */

          this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the map becomes idle after panning or zooming.
           */

          this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the zoom level has changed.
           */

          this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the google map is fully initialized.
           * You get the google.maps.Map instance as a result of this EventEmitter.
           */

          this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the visible tiles have finished loading.
           */

          this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /** @internal */


        _createClass(AgmMap, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(this._platformId)) {
              // The code is running on the server, do nothing
              return;
            } // todo: this should be solved with a new component and a viewChild decorator


            var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');

            this._initMapInstance(container);
          }
        }, {
          key: "_initMapInstance",
          value: function _initMapInstance(el) {
            var _this62 = this;

            this._mapsWrapper.createMap(el, {
              center: {
                lat: this.latitude || 0,
                lng: this.longitude || 0
              },
              zoom: this.zoom,
              minZoom: this.minZoom,
              maxZoom: this.maxZoom,
              controlSize: this.controlSize,
              disableDefaultUI: this.disableDefaultUI,
              disableDoubleClickZoom: this.disableDoubleClickZoom,
              scrollwheel: this.scrollwheel,
              backgroundColor: this.backgroundColor,
              draggable: this.draggable,
              draggableCursor: this.draggableCursor,
              draggingCursor: this.draggingCursor,
              keyboardShortcuts: this.keyboardShortcuts,
              styles: this.styles,
              zoomControl: this.zoomControl,
              zoomControlOptions: this.zoomControlOptions,
              streetViewControl: this.streetViewControl,
              streetViewControlOptions: this.streetViewControlOptions,
              scaleControl: this.scaleControl,
              scaleControlOptions: this.scaleControlOptions,
              mapTypeControl: this.mapTypeControl,
              mapTypeControlOptions: this.mapTypeControlOptions,
              panControl: this.panControl,
              panControlOptions: this.panControlOptions,
              rotateControl: this.rotateControl,
              rotateControlOptions: this.rotateControlOptions,
              fullscreenControl: this.fullscreenControl,
              fullscreenControlOptions: this.fullscreenControlOptions,
              mapTypeId: this.mapTypeId,
              clickableIcons: this.clickableIcons,
              gestureHandling: this.gestureHandling,
              tilt: this.tilt,
              restriction: this.restriction
            }).then(function () {
              return _this62._mapsWrapper.getNativeMap();
            }).then(function (map) {
              return _this62.mapReady.emit(map);
            }); // register event listeners


            this._handleMapCenterChange();

            this._handleMapZoomChange();

            this._handleMapMouseEvents();

            this._handleBoundsChange();

            this._handleMapTypeIdChange();

            this._handleTilesLoadedEvent();

            this._handleIdleEvent();
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // unsubscribe all registered observable subscriptions
            this._observableSubscriptions.forEach(function (s) {
              return s.unsubscribe();
            }); // remove all listeners from the map instance


            this._mapsWrapper.clearInstanceListeners();

            if (this._fitBoundsSubscription) {
              this._fitBoundsSubscription.unsubscribe();
            }
          }
          /* @internal */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._updateMapOptionsChanges(changes);

            this._updatePosition(changes);
          }
        }, {
          key: "_updateMapOptionsChanges",
          value: function _updateMapOptionsChanges(changes) {
            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) {
              return AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1;
            });
            optionKeys.forEach(function (k) {
              options[k] = changes[k].currentValue;
            });

            this._mapsWrapper.setMapOptions(options);
          }
          /**
           * Triggers a resize event on the google map instance.
           * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
           * Returns a promise that gets resolved after the event was triggered.
           */

        }, {
          key: "triggerResize",
          value: function triggerResize() {
            var _this63 = this;

            var recenter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            // Note: When we would trigger the resize event and show the map in the same turn (which is a
            // common case for triggering a resize event), then the resize event would not
            // work (to show the map), so we trigger the event in a timeout.
            return new Promise(function (resolve) {
              setTimeout(function () {
                return _this63._mapsWrapper.triggerMapEvent('resize').then(function () {
                  if (recenter) {
                    _this63.fitBounds != null ? _this63._fitBounds() : _this63._setCenter();
                  }

                  resolve();
                });
              });
            });
          }
        }, {
          key: "_updatePosition",
          value: function _updatePosition(changes) {
            if (changes['latitude'] == null && changes['longitude'] == null && !changes['fitBounds']) {
              // no position update needed
              return;
            } // we prefer fitBounds in changes


            if ('fitBounds' in changes) {
              this._fitBounds();

              return;
            }

            if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
              return;
            }

            this._setCenter();
          }
        }, {
          key: "_setCenter",
          value: function _setCenter() {
            var newCenter = {
              lat: this.latitude,
              lng: this.longitude
            };

            if (this.usePanning) {
              this._mapsWrapper.panTo(newCenter);
            } else {
              this._mapsWrapper.setCenter(newCenter);
            }
          }
        }, {
          key: "_fitBounds",
          value: function _fitBounds() {
            switch (this.fitBounds) {
              case true:
                this._subscribeToFitBoundsUpdates();

                break;

              case false:
                if (this._fitBoundsSubscription) {
                  this._fitBoundsSubscription.unsubscribe();
                }

                break;

              default:
                this._updateBounds(this.fitBounds, this.fitBoundsPadding);

            }
          }
        }, {
          key: "_subscribeToFitBoundsUpdates",
          value: function _subscribeToFitBoundsUpdates() {
            var _this64 = this;

            this._zone.runOutsideAngular(function () {
              _this64._fitBoundsSubscription = _this64._fitBoundsService.getBounds$().subscribe(function (b) {
                _this64._zone.run(function () {
                  return _this64._updateBounds(b, _this64.fitBoundsPadding);
                });
              });
            });
          }
        }, {
          key: "_updateBounds",
          value: function _updateBounds(bounds, padding) {
            if (!bounds) {
              return;
            }

            if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
              var newBounds = new google.maps.LatLngBounds();
              newBounds.union(bounds);
              bounds = newBounds;
            }

            if (this.usePanning) {
              this._mapsWrapper.panToBounds(bounds, padding);

              return;
            }

            this._mapsWrapper.fitBounds(bounds, padding);
          }
        }, {
          key: "_isLatLngBoundsLiteral",
          value: function _isLatLngBoundsLiteral(bounds) {
            return bounds != null && bounds.extend === undefined;
          }
        }, {
          key: "_handleMapCenterChange",
          value: function _handleMapCenterChange() {
            var _this65 = this;

            var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
              _this65._mapsWrapper.getCenter().then(function (center) {
                _this65.latitude = center.lat();
                _this65.longitude = center.lng();

                _this65.centerChange.emit({
                  lat: _this65.latitude,
                  lng: _this65.longitude
                });
              });
            });

            this._observableSubscriptions.push(s);
          }
        }, {
          key: "_handleBoundsChange",
          value: function _handleBoundsChange() {
            var _this66 = this;

            var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
              _this66._mapsWrapper.getBounds().then(function (bounds) {
                _this66.boundsChange.emit(bounds);
              });
            });

            this._observableSubscriptions.push(s);
          }
        }, {
          key: "_handleMapTypeIdChange",
          value: function _handleMapTypeIdChange() {
            var _this67 = this;

            var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
              _this67._mapsWrapper.getMapTypeId().then(function (mapTypeId) {
                _this67.mapTypeIdChange.emit(mapTypeId);
              });
            });

            this._observableSubscriptions.push(s);
          }
        }, {
          key: "_handleMapZoomChange",
          value: function _handleMapZoomChange() {
            var _this68 = this;

            var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
              _this68._mapsWrapper.getZoom().then(function (z) {
                _this68.zoom = z;

                _this68.zoomChange.emit(z);
              });
            });

            this._observableSubscriptions.push(s);
          }
        }, {
          key: "_handleIdleEvent",
          value: function _handleIdleEvent() {
            var _this69 = this;

            var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () {
              _this69.idle.emit(void 0);
            });

            this._observableSubscriptions.push(s);
          }
        }, {
          key: "_handleTilesLoadedEvent",
          value: function _handleTilesLoadedEvent() {
            var _this70 = this;

            var s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(function () {
              return _this70.tilesLoaded.emit(void 0);
            });

            this._observableSubscriptions.push(s);
          }
        }, {
          key: "_handleMapMouseEvents",
          value: function _handleMapMouseEvents() {
            var _this71 = this;

            var events = [{
              name: 'click',
              emitter: this.mapClick
            }, {
              name: 'rightclick',
              emitter: this.mapRightClick
            }, {
              name: 'dblclick',
              emitter: this.mapDblClick
            }];
            events.forEach(function (e) {
              var s = _this71._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = {
                  coords: {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                  },
                  placeId: event.placeId
                }; // the placeId will be undefined in case the event was not an IconMouseEvent (google types)

                if (value.placeId && !_this71.showDefaultInfoWindow) {
                  event.stop();
                }

                e.emitter.emit(value);
              });

              _this71._observableSubscriptions.push(s);
            });
          }
        }]);

        return AgmMap;
      }();
      /**
       * Map option attributes that can change over time
       */


      AgmMap._mapOptionsAttributes = ['disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor', 'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl', 'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom', 'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions', 'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions', 'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction'];

      AgmMap.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: GoogleMapsAPIWrapper
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: FitBoundsService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "longitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "latitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "zoom", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "minZoom", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "maxZoom", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "controlSize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mapDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "disableDoubleClickZoom", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "disableDefaultUI", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scrollwheel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "backgroundColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "draggableCursor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "draggingCursor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "keyboardShortcuts", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmMap.prototype, "zoomControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "zoomControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], AgmMap.prototype, "styles", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "usePanning", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmMap.prototype, "streetViewControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "streetViewControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fitBounds", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fitBoundsPadding", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scaleControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scaleControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "mapTypeControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "mapTypeControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "panControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "panControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "rotateControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "rotateControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fullscreenControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fullscreenControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "mapTypeId", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "clickableIcons", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "showDefaultInfoWindow", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "gestureHandling", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "tilt", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "restriction", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapRightClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapDblClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "centerChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "boundsChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapTypeIdChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "idle", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "zoomChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapReady", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "tilesLoaded", void 0);
      AgmMap = AgmMap_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'agm-map',
        providers: [CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager],
        host: {
          // todo: deprecated - we will remove it with the next version
          '[class.sebm-google-map-container]': 'true'
        },
        template: "\n              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n              <div class='agm-map-content'>\n                <ng-content></ng-content>\n              </div>\n  ",
        styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleMapsAPIWrapper, Object, FitBoundsService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], AgmMap);
      var AgmMarker_1;
      var markerId = 0;
      /**
       * AgmMarker renders a map marker inside a {@link AgmMap}.
       *
       * ### Example
       * ```typescript
       * import { Component } from '@angular/core';
       *
       * @Component({
       *  selector: 'my-map-cmp',
       *  styles: [`
       *    .agm-map-container {
       *      height: 300px;
       *    }
       * `],
       *  template: `
       *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
       *      </agm-marker>
       *    </agm-map>
       *  `
       * })
       * ```
       */

      var AgmMarker = AgmMarker_1 = /*#__PURE__*/function () {
        function AgmMarker(_markerManager) {
          _classCallCheck(this, AgmMarker);

          this._markerManager = _markerManager;
          /**
           * If true, the marker can be dragged. Default value is false.
           */
          // tslint:disable-next-line:no-input-rename

          this.draggable = false;
          /**
           * If true, the marker is visible
           */

          this.visible = true;
          /**
           * Whether to automatically open the child info window when the marker is clicked.
           */

          this.openInfoWindow = true;
          /**
           * The marker's opacity between 0.0 and 1.0.
           */

          this.opacity = 1;
          /**
           * All markers are displayed on the map in order of their zIndex, with higher values displaying in
           * front of markers with lower values. By default, markers are displayed according to their
           * vertical position on screen, with lower markers appearing in front of markers further up the
           * screen.
           */

          this.zIndex = 1;
          /**
           * If true, the marker can be clicked. Default value is true.
           */
          // tslint:disable-next-line:no-input-rename

          this.clickable = true;
          /**
           * This event is fired when the marker's animation property changes.
           *
           * @memberof AgmMarker
           */

          this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user clicks on the marker.
           */

          this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user clicks twice on the marker.
           */

          this.markerDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user rightclicks on the marker.
           */

          this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user starts dragging the marker.
           */

          this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is repeatedly fired while the user drags the marker.
           */

          this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user stops dragging the marker.
           */

          this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user mouses over the marker.
           */

          this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user mouses outside the marker.
           */

          this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** @internal */

          this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
          this._markerAddedToManger = false;
          this._observableSubscriptions = [];
          this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
          this._id = (markerId++).toString();
        }
        /* @internal */


        _createClass(AgmMarker, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this72 = this;

            this.handleInfoWindowUpdate();
            this.infoWindow.changes.subscribe(function () {
              return _this72.handleInfoWindowUpdate();
            });
          }
        }, {
          key: "handleInfoWindowUpdate",
          value: function handleInfoWindowUpdate() {
            var _this73 = this;

            if (this.infoWindow.length > 1) {
              throw new Error('Expected no more than one info window.');
            }

            this.infoWindow.forEach(function (marker) {
              marker.hostMarker = _this73;
            });
          }
          /** @internal */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (typeof this.latitude === 'string') {
              this.latitude = Number(this.latitude);
            }

            if (typeof this.longitude === 'string') {
              this.longitude = Number(this.longitude);
            }

            if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
              return;
            }

            if (!this._markerAddedToManger) {
              this._markerManager.addMarker(this);

              this._updateFitBoundsDetails();

              this._markerAddedToManger = true;

              this._addEventListeners();

              return;
            }

            if (changes['latitude'] || changes['longitude']) {
              this._markerManager.updateMarkerPosition(this);

              this._updateFitBoundsDetails();
            }

            if (changes['title']) {
              this._markerManager.updateTitle(this);
            }

            if (changes['label']) {
              this._markerManager.updateLabel(this);
            }

            if (changes['draggable']) {
              this._markerManager.updateDraggable(this);
            }

            if (changes['iconUrl']) {
              this._markerManager.updateIcon(this);
            }

            if (changes['opacity']) {
              this._markerManager.updateOpacity(this);
            }

            if (changes['visible']) {
              this._markerManager.updateVisible(this);
            }

            if (changes['zIndex']) {
              this._markerManager.updateZIndex(this);
            }

            if (changes['clickable']) {
              this._markerManager.updateClickable(this);
            }

            if (changes['animation']) {
              this._markerManager.updateAnimation(this);
            }
          }
          /** @internal */

        }, {
          key: "getFitBoundsDetails$",
          value: function getFitBoundsDetails$() {
            return this._fitBoundsDetails$.asObservable();
          }
        }, {
          key: "_updateFitBoundsDetails",
          value: function _updateFitBoundsDetails() {
            this._fitBoundsDetails$.next({
              latLng: {
                lat: this.latitude,
                lng: this.longitude
              }
            });
          }
        }, {
          key: "_addEventListeners",
          value: function _addEventListeners() {
            var _this74 = this;

            var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
              if (_this74.openInfoWindow) {
                _this74.infoWindow.forEach(function (infoWindow) {
                  return infoWindow.open();
                });
              }

              _this74.markerClick.emit(_this74);
            });

            this._observableSubscriptions.push(cs);

            var dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(function () {
              _this74.markerDblClick.emit(null);
            });

            this._observableSubscriptions.push(dcs);

            var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
              _this74.markerRightClick.emit(null);
            });

            this._observableSubscriptions.push(rc);

            var ds = this._markerManager.createEventObservable('dragstart', this).subscribe(function (e) {
              _this74.dragStart.emit({
                coords: {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng()
                }
              });
            });

            this._observableSubscriptions.push(ds);

            var d = this._markerManager.createEventObservable('drag', this).subscribe(function (e) {
              _this74.drag.emit({
                coords: {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng()
                }
              });
            });

            this._observableSubscriptions.push(d);

            var de = this._markerManager.createEventObservable('dragend', this).subscribe(function (e) {
              _this74.dragEnd.emit({
                coords: {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng()
                }
              });
            });

            this._observableSubscriptions.push(de);

            var mover = this._markerManager.createEventObservable('mouseover', this).subscribe(function (e) {
              _this74.mouseOver.emit({
                coords: {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng()
                }
              });
            });

            this._observableSubscriptions.push(mover);

            var mout = this._markerManager.createEventObservable('mouseout', this).subscribe(function (e) {
              _this74.mouseOut.emit({
                coords: {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng()
                }
              });
            });

            this._observableSubscriptions.push(mout);

            var anChng = this._markerManager.createEventObservable('animation_changed', this).subscribe(function () {
              _this74.animationChange.emit(_this74.animation);
            });

            this._observableSubscriptions.push(anChng);
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "toString",
          value: function toString() {
            return 'AgmMarker-' + this._id.toString();
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._markerManager.deleteMarker(this); // unsubscribe all registered observable subscriptions


            this._observableSubscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return AgmMarker;
      }();

      AgmMarker.ctorParameters = function () {
        return [{
          type: MarkerManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMarker.prototype, "latitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMarker.prototype, "longitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "title", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "label", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "iconUrl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "visible", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "openInfoWindow", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "opacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerClickable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "clickable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "animation", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "animationChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerDblClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerRightClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "dragStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "drag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "dragEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "mouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "mouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmInfoWindow), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmMarker.prototype, "infoWindow", void 0);
      AgmMarker = AgmMarker_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-marker',
        providers: [{
          provide: FitBoundsAccessor,
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return AgmMarker_1;
          })
        }],
        inputs: ['latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl', 'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'],
        outputs: ['markerClick', 'dragStart', 'drag', 'dragEnd', 'mouseOver', 'mouseOut']
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MarkerManager])], AgmMarker);
      var AgmPolygon_1;
      /**
       * AgmPolygon renders a polygon on a {@link AgmMap}
       *
       * ### Example
       * ```typescript
       * import { Component } from '@angular/core';
       *
       * @Component({
       *  selector: 'my-map-cmp',
       *  styles: [`
       *    agm-map {
       *      height: 300px;
       *    }
       * `],
       *  template: `
       *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       *      <agm-polygon [paths]="paths">
       *      </agm-polygon>
       *    </agm-map>
       *  `
       * })
       * export class MyMapCmp {
       *   lat: number = 0;
       *   lng: number = 0;
       *   zoom: number = 10;
       *   paths: Array<LatLngLiteral> = [
       *     { lat: 0,  lng: 10 },
       *     { lat: 0,  lng: 20 },
       *     { lat: 10, lng: 20 },
       *     { lat: 10, lng: 10 },
       *     { lat: 0,  lng: 10 }
       *   ]
       *   // Nesting paths will create a hole where they overlap;
       *   nestedPaths: Array<Array<LatLngLiteral>> = [[
       *     { lat: 0,  lng: 10 },
       *     { lat: 0,  lng: 20 },
       *     { lat: 10, lng: 20 },
       *     { lat: 10, lng: 10 },
       *     { lat: 0,  lng: 10 }
       *   ], [
       *     { lat: 0, lng: 15 },
       *     { lat: 0, lng: 20 },
       *     { lat: 5, lng: 20 },
       *     { lat: 5, lng: 15 },
       *     { lat: 0, lng: 15 }
       *   ]]
       * }
       * ```
       */

      var AgmPolygon = AgmPolygon_1 = /*#__PURE__*/function () {
        function AgmPolygon(_polygonManager) {
          _classCallCheck(this, AgmPolygon);

          this._polygonManager = _polygonManager;
          /**
           * Indicates whether this Polygon handles mouse events. Defaults to true.
           */

          this.clickable = true;
          /**
           * If set to true, the user can drag this shape over the map. The geodesic
           * property defines the mode of dragging. Defaults to false.
           */
          // tslint:disable-next-line:no-input-rename

          this.draggable = false;
          /**
           * If set to true, the user can edit this shape by dragging the control
           * points shown at the vertices and on each segment. Defaults to false.
           */

          this.editable = false;
          /**
           * When true, edges of the polygon are interpreted as geodesic and will
           * follow the curvature of the Earth. When false, edges of the polygon are
           * rendered as straight lines in screen space. Note that the shape of a
           * geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */

          this.geodesic = false;
          /**
           * The ordered sequence of coordinates that designates a closed loop.
           * Unlike polylines, a polygon may consist of one or more paths.
           *  As a result, the paths property may specify one or more arrays of
           * LatLng coordinates. Paths are closed automatically; do not repeat the
           * first vertex of the path as the last vertex. Simple polygons may be
           * defined using a single array of LatLngs. More complex polygons may
           * specify an array of arrays. Any simple arrays are converted into Arrays.
           * Inserting or removing LatLngs from the Array will automatically update
           * the polygon on the map.
           */

          this.paths = [];
          /**
           * This event is fired when the DOM click event is fired on the Polygon.
           */

          this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM dblclick event is fired on the Polygon.
           */

          this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is repeatedly fired while the user drags the polygon.
           */

          this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user stops dragging the polygon.
           */

          this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user starts dragging the polygon.
           */

          this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousedown event is fired on the Polygon.
           */

          this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousemove event is fired on the Polygon.
           */

          this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on Polygon mouseout.
           */

          this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on Polygon mouseover.
           */

          this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired whe the DOM mouseup event is fired on the Polygon
           */

          this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the Polygon is right-clicked on.
           */

          this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired after Polygon first path changes.
           */

          this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._polygonAddedToManager = false;
          this._subscriptions = [];
        }
        /** @internal */


        _createClass(AgmPolygon, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (!this._polygonAddedToManager) {
              this._init();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._polygonAddedToManager) {
              this._init();

              return;
            }

            this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
          }
        }, {
          key: "_init",
          value: function _init() {
            this._polygonManager.addPolygon(this);

            this._polygonAddedToManager = true;

            this._addEventListeners();
          }
        }, {
          key: "_addEventListeners",
          value: function _addEventListeners() {
            var _this75 = this;

            var handlers = [{
              name: 'click',
              handler: function handler(ev) {
                return _this75.polyClick.emit(ev);
              }
            }, {
              name: 'dblclick',
              handler: function handler(ev) {
                return _this75.polyDblClick.emit(ev);
              }
            }, {
              name: 'drag',
              handler: function handler(ev) {
                return _this75.polyDrag.emit(ev);
              }
            }, {
              name: 'dragend',
              handler: function handler(ev) {
                return _this75.polyDragEnd.emit(ev);
              }
            }, {
              name: 'dragstart',
              handler: function handler(ev) {
                return _this75.polyDragStart.emit(ev);
              }
            }, {
              name: 'mousedown',
              handler: function handler(ev) {
                return _this75.polyMouseDown.emit(ev);
              }
            }, {
              name: 'mousemove',
              handler: function handler(ev) {
                return _this75.polyMouseMove.emit(ev);
              }
            }, {
              name: 'mouseout',
              handler: function handler(ev) {
                return _this75.polyMouseOut.emit(ev);
              }
            }, {
              name: 'mouseover',
              handler: function handler(ev) {
                return _this75.polyMouseOver.emit(ev);
              }
            }, {
              name: 'mouseup',
              handler: function handler(ev) {
                return _this75.polyMouseUp.emit(ev);
              }
            }, {
              name: 'rightclick',
              handler: function handler(ev) {
                return _this75.polyRightClick.emit(ev);
              }
            }];
            handlers.forEach(function (obj) {
              var os = _this75._polygonManager.createEventObservable(obj.name, _this75).subscribe(obj.handler);

              _this75._subscriptions.push(os);
            });

            this._polygonManager.createPathEventObservable(this).then(function (paths$) {
              var os = paths$.subscribe(function (pathEvent) {
                return _this75.polyPathsChange.emit(pathEvent);
              });

              _this75._subscriptions.push(os);
            });
          }
        }, {
          key: "_updatePolygonOptions",
          value: function _updatePolygonOptions(changes) {
            return Object.keys(changes).filter(function (k) {
              return AgmPolygon_1._polygonOptionsAttributes.indexOf(k) !== -1;
            }).reduce(function (obj, k) {
              obj[k] = changes[k].currentValue;
              return obj;
            }, {});
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._polygonManager.deletePolygon(this); // unsubscribe all registered observable subscriptions


            this._subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
          }
        }, {
          key: "getPath",
          value: function getPath() {
            return this._polygonManager.getPath(this);
          }
        }, {
          key: "getPaths",
          value: function getPaths() {
            return this._polygonManager.getPaths(this);
          }
        }]);

        return AgmPolygon;
      }();

      AgmPolygon._polygonOptionsAttributes = ['clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map', 'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable', 'editable', 'visible'];

      AgmPolygon.ctorParameters = function () {
        return [{
          type: PolygonManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "clickable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polyDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "editable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolygon.prototype, "fillColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "fillOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "geodesic", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], AgmPolygon.prototype, "paths", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolygon.prototype, "strokeColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "strokeOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "strokeWeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmPolygon.prototype, "visible", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDblClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDrag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDragEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDragStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseDown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseMove", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseUp", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyRightClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "polyPathsChange", void 0);
      AgmPolygon = AgmPolygon_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-polygon'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolygonManager])], AgmPolygon);
      /**
       * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
       * or custom icons either along the entire line, or in a specific part of it.
       * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
       *
       * ### Example
       * ```html
       *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       *      <agm-polyline>
       *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
       *          </agm-icon-sequence>
       *      </agm-polyline>
       *    </agm-map>
       * ```
       *
       * @export
       * @class AgmPolylineIcon
       */

      var AgmPolylineIcon = /*#__PURE__*/function () {
        function AgmPolylineIcon() {
          _classCallCheck(this, AgmPolylineIcon);
        }

        _createClass(AgmPolylineIcon, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.path == null) {
              throw new Error('Icon Sequence path is required');
            }
          }
        }]);

        return AgmPolylineIcon;
      }();

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmPolylineIcon.prototype, "fixedRotation", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "offset", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "repeat", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "anchorX", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "anchorY", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "fillColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "fillOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "path", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "rotation", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "scale", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "strokeColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "strokeOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "strokeWeight", void 0);
      AgmPolylineIcon = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-polyline agm-icon-sequence'
      })], AgmPolylineIcon);
      var AgmPolylinePoint_1;
      /**
       * AgmPolylinePoint represents one element of a polyline within a  {@link
       * AgmPolyline}
       */

      var AgmPolylinePoint = AgmPolylinePoint_1 = /*#__PURE__*/function () {
        function AgmPolylinePoint() {
          _classCallCheck(this, AgmPolylinePoint);

          /**
           * This event emitter gets emitted when the position of the point changed.
           */
          this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(AgmPolylinePoint, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['latitude'] || changes['longitude']) {
              var position = {
                lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
                lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude
              };
              this.positionChanged.emit(position);
            }
          }
          /** @internal */

        }, {
          key: "getFitBoundsDetails$",
          value: function getFitBoundsDetails$() {
            return this.positionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
              lat: this.latitude,
              lng: this.longitude
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (position) {
              return {
                latLng: position
              };
            }));
          }
        }]);

        return AgmPolylinePoint;
      }();

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylinePoint.prototype, "latitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylinePoint.prototype, "longitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolylinePoint.prototype, "positionChanged", void 0);
      AgmPolylinePoint = AgmPolylinePoint_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-polyline-point',
        providers: [{
          provide: FitBoundsAccessor,
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return AgmPolylinePoint_1;
          })
        }]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AgmPolylinePoint);
      var AgmPolyline_1;
      var polylineId = 0;
      /**
       * AgmPolyline renders a polyline on a {@link AgmMap}
       *
       * ### Example
       * ```typescript
       * import { Component } from '@angular/core';
       *
       * @Component({
       *  selector: 'my-map-cmp',
       *  styles: [`
       *    .agm-map-container {
       *      height: 300px;
       *    }
       * `],
       *  template: `
       *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       *      <agm-polyline>
       *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
       *          </agm-polyline-point>
       *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
       *          </agm-polyline-point>
       *      </agm-polyline>
       *    </agm-map>
       *  `
       * })
       * ```
       */

      var AgmPolyline = AgmPolyline_1 = /*#__PURE__*/function () {
        function AgmPolyline(_polylineManager) {
          _classCallCheck(this, AgmPolyline);

          this._polylineManager = _polylineManager;
          /**
           * Indicates whether this Polyline handles mouse events. Defaults to true.
           */

          this.clickable = true;
          /**
           * If set to true, the user can drag this shape over the map. The geodesic property defines the
           * mode of dragging. Defaults to false.
           */
          // tslint:disable-next-line:no-input-rename

          this.draggable = false;
          /**
           * If set to true, the user can edit this shape by dragging the control points shown at the
           * vertices and on each segment. Defaults to false.
           */

          this.editable = false;
          /**
           * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
           * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
           * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */

          this.geodesic = false;
          /**
           * Whether this polyline is visible on the map. Defaults to true.
           */

          this.visible = true;
          /**
           * This event is fired when the DOM click event is fired on the Polyline.
           */

          this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM dblclick event is fired on the Polyline.
           */

          this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is repeatedly fired while the user drags the polyline.
           */

          this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user stops dragging the polyline.
           */

          this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user starts dragging the polyline.
           */

          this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousedown event is fired on the Polyline.
           */

          this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousemove event is fired on the Polyline.
           */

          this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on Polyline mouseout.
           */

          this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on Polyline mouseover.
           */

          this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired whe the DOM mouseup event is fired on the Polyline
           */

          this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the Polyline is right-clicked on.
           */

          this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired after Polyline's path changes.
           */

          this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._polylineAddedToManager = false;
          this._subscriptions = [];
          this._id = (polylineId++).toString();
        }
        /** @internal */


        _createClass(AgmPolyline, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this76 = this;

            if (this.points.length) {
              this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () {
                  _this76._polylineManager.updatePolylinePoints(_this76);
                });

                _this76._subscriptions.push(s);
              });
            }

            if (!this._polylineAddedToManager) {
              this._init();
            }

            var pointSub = this.points.changes.subscribe(function () {
              return _this76._polylineManager.updatePolylinePoints(_this76);
            });

            this._subscriptions.push(pointSub);

            this._polylineManager.updatePolylinePoints(this);

            var iconSub = this.iconSequences.changes.subscribe(function () {
              return _this76._polylineManager.updateIconSequences(_this76);
            });

            this._subscriptions.push(iconSub);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._polylineAddedToManager) {
              this._init();

              return;
            }

            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) {
              return AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1;
            });
            optionKeys.forEach(function (k) {
              return options[k] = changes[k].currentValue;
            });

            this._polylineManager.setPolylineOptions(this, options);
          }
        }, {
          key: "getPath",
          value: function getPath() {
            return this._polylineManager.getPath(this);
          }
        }, {
          key: "_init",
          value: function _init() {
            this._polylineManager.addPolyline(this);

            this._polylineAddedToManager = true;

            this._addEventListeners();
          }
        }, {
          key: "_addEventListeners",
          value: function _addEventListeners() {
            var _this77 = this;

            var handlers = [{
              name: 'click',
              handler: function handler(ev) {
                return _this77.lineClick.emit(ev);
              }
            }, {
              name: 'dblclick',
              handler: function handler(ev) {
                return _this77.lineDblClick.emit(ev);
              }
            }, {
              name: 'drag',
              handler: function handler(ev) {
                return _this77.lineDrag.emit(ev);
              }
            }, {
              name: 'dragend',
              handler: function handler(ev) {
                return _this77.lineDragEnd.emit(ev);
              }
            }, {
              name: 'dragstart',
              handler: function handler(ev) {
                return _this77.lineDragStart.emit(ev);
              }
            }, {
              name: 'mousedown',
              handler: function handler(ev) {
                return _this77.lineMouseDown.emit(ev);
              }
            }, {
              name: 'mousemove',
              handler: function handler(ev) {
                return _this77.lineMouseMove.emit(ev);
              }
            }, {
              name: 'mouseout',
              handler: function handler(ev) {
                return _this77.lineMouseOut.emit(ev);
              }
            }, {
              name: 'mouseover',
              handler: function handler(ev) {
                return _this77.lineMouseOver.emit(ev);
              }
            }, {
              name: 'mouseup',
              handler: function handler(ev) {
                return _this77.lineMouseUp.emit(ev);
              }
            }, {
              name: 'rightclick',
              handler: function handler(ev) {
                return _this77.lineRightClick.emit(ev);
              }
            }];
            handlers.forEach(function (obj) {
              var os = _this77._polylineManager.createEventObservable(obj.name, _this77).subscribe(obj.handler);

              _this77._subscriptions.push(os);
            });

            this._polylineManager.createPathEventObservable(this).then(function (ob$) {
              var os = ob$.subscribe(function (pathEvent) {
                return _this77.polyPathChange.emit(pathEvent);
              });

              _this77._subscriptions.push(os);
            });
          }
          /** @internal */

        }, {
          key: "_getPoints",
          value: function _getPoints() {
            if (this.points) {
              return this.points.toArray();
            }

            return [];
          }
        }, {
          key: "_getIcons",
          value: function _getIcons() {
            if (this.iconSequences) {
              return this.iconSequences.toArray();
            }

            return [];
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._polylineManager.deletePolyline(this); // unsubscribe all registered observable subscriptions


            this._subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return AgmPolyline;
      }();

      AgmPolyline._polylineOptionsAttributes = ['draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'zIndex'];

      AgmPolyline.ctorParameters = function () {
        return [{
          type: PolylineManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "clickable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polylineDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "editable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "geodesic", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolyline.prototype, "strokeColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "strokeOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "strokeWeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "visible", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDblClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDrag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDragEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDragStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseDown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseMove", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseUp", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineRightClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "polyPathChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylinePoint), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmPolyline.prototype, "points", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylineIcon), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmPolyline.prototype, "iconSequences", void 0);
      AgmPolyline = AgmPolyline_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-polyline'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolylineManager])], AgmPolyline);
      var AgmRectangle_1;

      var AgmRectangle = AgmRectangle_1 = /*#__PURE__*/function () {
        function AgmRectangle(_manager) {
          _classCallCheck(this, AgmRectangle);

          this._manager = _manager;
          /**
           * Indicates whether this Rectangle handles mouse events. Defaults to true.
           */

          this.clickable = true;
          /**
           * If set to true, the user can drag this rectangle over the map. Defaults to false.
           */
          // tslint:disable-next-line:no-input-rename

          this.draggable = false;
          /**
           * If set to true, the user can edit this rectangle by dragging the control points shown at
           * the center and around the circumference of the rectangle. Defaults to false.
           */

          this.editable = false;
          /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */

          this.strokePosition = 'CENTER';
          /**
           * The stroke width in pixels.
           */

          this.strokeWeight = 0;
          /**
           * Whether this rectangle is visible on the map. Defaults to true.
           */

          this.visible = true;
          /**
           * This event is fired when the rectangle's is changed.
           */

          this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */

          this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */

          this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is repeatedly fired while the user drags the rectangle.
           */

          this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user stops dragging the rectangle.
           */

          this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user starts dragging the rectangle.
           */

          this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousedown event is fired on the rectangle.
           */

          this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousemove event is fired on the rectangle.
           */

          this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on rectangle mouseout.
           */

          this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on rectangle mouseover.
           */

          this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mouseup event is fired on the rectangle.
           */

          this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the rectangle is right-clicked on.
           */

          this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._rectangleAddedToManager = false;
          this._eventSubscriptions = [];
        }
        /** @internal */


        _createClass(AgmRectangle, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._manager.addRectangle(this);

            this._rectangleAddedToManager = true;

            this._registerEventListeners();
          }
          /** @internal */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._rectangleAddedToManager) {
              return;
            }

            if (changes['north'] || changes['east'] || changes['south'] || changes['west']) {
              this._manager.setBounds(this);
            }

            if (changes['editable']) {
              this._manager.setEditable(this);
            }

            if (changes['draggable']) {
              this._manager.setDraggable(this);
            }

            if (changes['visible']) {
              this._manager.setVisible(this);
            }

            this._updateRectangleOptionsChanges(changes);
          }
        }, {
          key: "_updateRectangleOptionsChanges",
          value: function _updateRectangleOptionsChanges(changes) {
            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) {
              return AgmRectangle_1._mapOptions.indexOf(k) !== -1;
            });
            optionKeys.forEach(function (k) {
              options[k] = changes[k].currentValue;
            });

            if (optionKeys.length > 0) {
              this._manager.setOptions(this, options);
            }
          }
        }, {
          key: "_registerEventListeners",
          value: function _registerEventListeners() {
            var _this78 = this;

            var events = new Map();
            events.set('bounds_changed', this.boundsChange);
            events.set('click', this.rectangleClick);
            events.set('dblclick', this.rectangleDblClick);
            events.set('drag', this.drag);
            events.set('dragend', this.dragEnd);
            events.set('dragStart', this.dragStart);
            events.set('mousedown', this.mouseDown);
            events.set('mousemove', this.mouseMove);
            events.set('mouseout', this.mouseOut);
            events.set('mouseover', this.mouseOver);
            events.set('mouseup', this.mouseUp);
            events.set('rightclick', this.rightClick);
            events.forEach(function (eventEmitter, eventName) {
              _this78._eventSubscriptions.push(_this78._manager.createEventObservable(eventName, _this78).subscribe(function (value) {
                switch (eventName) {
                  case 'bounds_changed':
                    _this78._manager.getBounds(_this78).then(function (bounds) {
                      return eventEmitter.emit({
                        north: bounds.getNorthEast().lat(),
                        east: bounds.getNorthEast().lng(),
                        south: bounds.getSouthWest().lat(),
                        west: bounds.getSouthWest().lng()
                      });
                    });

                    break;

                  default:
                    eventEmitter.emit({
                      coords: {
                        lat: value.latLng.lat(),
                        lng: value.latLng.lng()
                      }
                    });
                }
              }));
            });
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventSubscriptions.forEach(function (s) {
              s.unsubscribe();
            });

            this._eventSubscriptions = null;

            this._manager.removeRectangle(this);
          }
          /**
           * Gets the LatLngBounds of this Rectangle.
           */

        }, {
          key: "getBounds",
          value: function getBounds() {
            return this._manager.getBounds(this);
          }
        }]);

        return AgmRectangle;
      }();

      AgmRectangle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

      AgmRectangle.ctorParameters = function () {
        return [{
          type: RectangleManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "north", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "east", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "south", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "west", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "clickable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rectangleDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "editable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "fillColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "fillOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "strokeColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "strokeOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "strokePosition", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "strokeWeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "visible", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "boundsChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rectangleClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rectangleDblClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "drag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "dragEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "dragStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseDown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseMove", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseUp", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rightClick", void 0);
      AgmRectangle = AgmRectangle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-rectangle'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [RectangleManager])], AgmRectangle);
      var layerId$3 = 0;
      /*
       * This directive adds a transit layer to a google map instance
       * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
       * */

      var AgmTransitLayer = /*#__PURE__*/function () {
        function AgmTransitLayer(_manager) {
          _classCallCheck(this, AgmTransitLayer);

          this._manager = _manager;
          this._addedToManager = false;
          this._id = (layerId$3++).toString();
          /**
           * Hide/show transit layer
           */

          this.visible = true;
        }

        _createClass(AgmTransitLayer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._addedToManager) {
              return;
            }

            this._manager.addTransitLayer(this, {
              visible: this.visible
            });

            this._addedToManager = true;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._addedToManager) {
              return;
            }

            if (changes['visible'] != null) {
              this._manager.toggleLayerVisibility(this, {
                visible: changes['visible'].currentValue
              });
            }
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "toString",
          value: function toString() {
            return "AgmTransitLayer-".concat(this._id.toString());
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._manager.deleteLayer(this);
          }
        }]);

        return AgmTransitLayer;
      }();

      AgmTransitLayer.ctorParameters = function () {
        return [{
          type: LayerManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmTransitLayer.prototype, "visible", void 0);
      AgmTransitLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-transit-layer'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])], AgmTransitLayer);
      var google$1;
      var SymbolPath;

      (function (SymbolPath) {
        SymbolPath[SymbolPath["BACKWARD_CLOSED_ARROW"] = 3] = "BACKWARD_CLOSED_ARROW";
        SymbolPath[SymbolPath["BACKWARD_OPEN_ARROW"] = 4] = "BACKWARD_OPEN_ARROW";
        SymbolPath[SymbolPath["CIRCLE"] = 0] = "CIRCLE";
        SymbolPath[SymbolPath["FORWARD_CLOSED_ARROW"] = 1] = "FORWARD_CLOSED_ARROW";
        SymbolPath[SymbolPath["FORWARD_OPEN_ARROW"] = 2] = "FORWARD_OPEN_ARROW";
      })(SymbolPath || (SymbolPath = {}));
      /**
       * Identifiers used to specify the placement of controls on the map. Controls are
       * positioned relative to other controls in the same layout position. Controls that
       * are added first are positioned closer to the edge of the map.
       */


      var ControlPosition;

      (function (ControlPosition) {
        ControlPosition[ControlPosition["RIGHT_BOTTOM"] = 0] = "RIGHT_BOTTOM";
        ControlPosition[ControlPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
        ControlPosition[ControlPosition["TOP_CENTER"] = 2] = "TOP_CENTER";
        ControlPosition[ControlPosition["TOP_RIGHT"] = 3] = "TOP_RIGHT";
        ControlPosition[ControlPosition["LEFT_CENTER"] = 4] = "LEFT_CENTER";
        ControlPosition[ControlPosition["LEFT_TOP"] = 5] = "LEFT_TOP";
        ControlPosition[ControlPosition["LEFT_BOTTOM"] = 6] = "LEFT_BOTTOM";
        ControlPosition[ControlPosition["RIGHT_TOP"] = 7] = "RIGHT_TOP";
        ControlPosition[ControlPosition["RIGHT_CENTER"] = 8] = "RIGHT_CENTER";
        ControlPosition[ControlPosition["BOTTOM_RIGHT"] = 9] = "BOTTOM_RIGHT";
        ControlPosition[ControlPosition["BOTTOM_LEFT"] = 10] = "BOTTOM_LEFT";
        ControlPosition[ControlPosition["BOTTOM_CENTER"] = 11] = "BOTTOM_CENTER";
      })(ControlPosition || (ControlPosition = {}));

      var MapTypeId;

      (function (MapTypeId) {
        /** This map type displays a transparent layer of major streets on satellite images. */
        MapTypeId[MapTypeId["HYBRID"] = 0] = "HYBRID";
        /** This map type displays a normal street map. */

        MapTypeId[MapTypeId["ROADMAP"] = 1] = "ROADMAP";
        /** This map type displays satellite images. */

        MapTypeId[MapTypeId["SATELLITE"] = 2] = "SATELLITE";
        /** This map type displays maps with physical features such as terrain and vegetation. */

        MapTypeId[MapTypeId["TERRAIN"] = 3] = "TERRAIN";
      })(MapTypeId || (MapTypeId = {}));

      var MapTypeControlStyle;

      (function (MapTypeControlStyle) {
        MapTypeControlStyle[MapTypeControlStyle["DEFAULT"] = 0] = "DEFAULT";
        MapTypeControlStyle[MapTypeControlStyle["DROPDOWN_MENU"] = 2] = "DROPDOWN_MENU";
        MapTypeControlStyle[MapTypeControlStyle["HORIZONTAL_BAR"] = 1] = "HORIZONTAL_BAR";
      })(MapTypeControlStyle || (MapTypeControlStyle = {}));

      var ScaleControlStyle;

      (function (ScaleControlStyle) {
        ScaleControlStyle[ScaleControlStyle["DEFAULT"] = 0] = "DEFAULT";
      })(ScaleControlStyle || (ScaleControlStyle = {}));

      var ZoomControlStyle;

      (function (ZoomControlStyle) {
        ZoomControlStyle[ZoomControlStyle["DEFAULT"] = 0] = "DEFAULT";
        ZoomControlStyle[ZoomControlStyle["LARGE"] = 1] = "LARGE";
        ZoomControlStyle[ZoomControlStyle["SMALL"] = 2] = "SMALL";
      })(ZoomControlStyle || (ZoomControlStyle = {}));

      var GeocoderLocationType;

      (function (GeocoderLocationType) {
        GeocoderLocationType["APPROXIMATE"] = "APPROXIMATE";
        GeocoderLocationType["GEOMETRIC_CENTER"] = "GEOMETRIC_CENTER";
        GeocoderLocationType["RANGE_INTERPOLATED"] = "RANGE_INTERPOLATED";
        GeocoderLocationType["ROOFTOP"] = "ROOFTOP";
      })(GeocoderLocationType || (GeocoderLocationType = {}));

      var GeocoderStatus;

      (function (GeocoderStatus) {
        GeocoderStatus["ERROR"] = "ERROR";
        GeocoderStatus["INVALID_REQUEST"] = "INVALID_REQUEST";
        GeocoderStatus["OK"] = "OK";
        GeocoderStatus["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
        GeocoderStatus["REQUEST_DENIED"] = "REQUEST_DENIED";
        GeocoderStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
        GeocoderStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
      })(GeocoderStatus || (GeocoderStatus = {}));

      var AgmGeocoder = /*#__PURE__*/function () {
        function AgmGeocoder(loader) {
          var _this79 = this;

          _classCallCheck(this, AgmGeocoder);

          var connectableGeocoder$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
            loader.load().then(function () {
              return subscriber.next();
            });
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this79._createGeocoder();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["multicast"])(new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1)));
          connectableGeocoder$.connect(); // ignore the subscription
          // since we will remain subscribed till application exits

          this.geocoder$ = connectableGeocoder$;
        }

        _createClass(AgmGeocoder, [{
          key: "geocode",
          value: function geocode(request) {
            var _this80 = this;

            return this.geocoder$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (geocoder) {
              return _this80._getGoogleResults(geocoder, request);
            }));
          }
        }, {
          key: "_getGoogleResults",
          value: function _getGoogleResults(geocoder, request) {
            var geocodeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["bindCallback"])(geocoder.geocode);
            return geocodeObservable(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref6) {
              var _ref7 = _slicedToArray(_ref6, 2),
                  results = _ref7[0],
                  status = _ref7[1];

              if (status === GeocoderStatus.OK) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(results);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(status);
            }));
          }
        }, {
          key: "_createGeocoder",
          value: function _createGeocoder() {
            return new google.maps.Geocoder();
          }
        }]);

        return AgmGeocoder;
      }();

      AgmGeocoder.ctorParameters = function () {
        return [{
          type: MapsAPILoader
        }];
      };

      AgmGeocoder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function AgmGeocoder_Factory() {
          return new AgmGeocoder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MapsAPILoader));
        },
        token: AgmGeocoder,
        providedIn: "root"
      });
      AgmGeocoder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])], AgmGeocoder);

      var WindowRef = /*#__PURE__*/function () {
        function WindowRef() {
          _classCallCheck(this, WindowRef);
        }

        _createClass(WindowRef, [{
          key: "getNativeWindow",
          value: function getNativeWindow() {
            return window;
          }
        }]);

        return WindowRef;
      }();

      var DocumentRef = /*#__PURE__*/function () {
        function DocumentRef() {
          _classCallCheck(this, DocumentRef);
        }

        _createClass(DocumentRef, [{
          key: "getNativeDocument",
          value: function getNativeDocument() {
            return document;
          }
        }]);

        return DocumentRef;
      }();

      var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
      var GoogleMapsScriptProtocol;

      (function (GoogleMapsScriptProtocol) {
        GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
        GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
        GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
      })(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
      /**
       * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
       * LazyMapsAPILoaderConfig}.
       */


      var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');

      var LazyMapsAPILoader = /*#__PURE__*/function (_MapsAPILoader) {
        _inherits(LazyMapsAPILoader, _MapsAPILoader);

        var _super = _createSuper(LazyMapsAPILoader);

        function LazyMapsAPILoader() {
          var _this81;

          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var w = arguments.length > 1 ? arguments[1] : undefined;
          var d = arguments.length > 2 ? arguments[2] : undefined;
          var localeId = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, LazyMapsAPILoader);

          _this81 = _super.call(this);
          _this81.localeId = localeId;
          _this81._SCRIPT_ID = 'agmGoogleMapsApiScript';
          _this81.callbackName = "agmLazyMapsAPILoader";
          _this81._config = config || {};
          _this81._windowRef = w;
          _this81._documentRef = d;
          return _this81;
        }

        _createClass(LazyMapsAPILoader, [{
          key: "load",
          value: function load() {
            var window = this._windowRef.getNativeWindow();

            if (window.google && window.google.maps) {
              // Google maps already loaded on the page.
              return Promise.resolve();
            }

            if (this._scriptLoadingPromise) {
              return this._scriptLoadingPromise;
            } // this can happen in HMR situations or Stackblitz.io editors.


            var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);

            if (scriptOnPage) {
              this._assignScriptLoadingPromise(scriptOnPage);

              return this._scriptLoadingPromise;
            }

            var script = this._documentRef.getNativeDocument().createElement('script');

            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.id = this._SCRIPT_ID;
            script.src = this._getScriptSrc(this.callbackName);

            this._assignScriptLoadingPromise(script);

            this._documentRef.getNativeDocument().body.appendChild(script);

            return this._scriptLoadingPromise;
          }
        }, {
          key: "_assignScriptLoadingPromise",
          value: function _assignScriptLoadingPromise(scriptElem) {
            var _this82 = this;

            this._scriptLoadingPromise = new Promise(function (resolve, reject) {
              _this82._windowRef.getNativeWindow()[_this82.callbackName] = function () {
                resolve();
              };

              scriptElem.onerror = function (error) {
                reject(error);
              };
            });
          }
        }, {
          key: "_getScriptSrc",
          value: function _getScriptSrc(callbackName) {
            var protocolType = this._config && this._config.protocol || GoogleMapsScriptProtocol.HTTPS;
            var protocol;

            switch (protocolType) {
              case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;

              case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;

              case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
            }

            var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
            var queryParams = {
              v: this._config.apiVersion || 'quarterly',
              callback: callbackName,
              key: this._config.apiKey,
              client: this._config.clientId,
              channel: this._config.channel,
              libraries: this._config.libraries,
              region: this._config.region,
              language: this._config.language || this.localeId !== 'en-US' ? this.localeId : null
            };
            var params = Object.keys(queryParams).filter(function (k) {
              return queryParams[k] != null;
            }).filter(function (k) {
              // remove empty arrays
              return !Array.isArray(queryParams[k]) || Array.isArray(queryParams[k]) && queryParams[k].length > 0;
            }).map(function (k) {
              // join arrays as comma seperated strings
              var i = queryParams[k];

              if (Array.isArray(i)) {
                return {
                  key: k,
                  value: i.join(',')
                };
              }

              return {
                key: k,
                value: queryParams[k]
              };
            }).map(function (entry) {
              return "".concat(entry.key, "=").concat(entry.value);
            }).join('&');
            return "".concat(protocol, "//").concat(hostAndPath, "?").concat(params);
          }
        }]);

        return LazyMapsAPILoader;
      }(MapsAPILoader);

      LazyMapsAPILoader.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LAZY_MAPS_API_CONFIG]
          }]
        }, {
          type: WindowRef
        }, {
          type: DocumentRef
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }];
      };

      LazyMapsAPILoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(LAZY_MAPS_API_CONFIG)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, WindowRef, DocumentRef, String])], LazyMapsAPILoader);
      /**
       * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
       * Tag.
       * It's important that the Google Maps API script gets loaded first on the page.
       */

      var NoOpMapsAPILoader = /*#__PURE__*/function () {
        function NoOpMapsAPILoader() {
          _classCallCheck(this, NoOpMapsAPILoader);
        }

        _createClass(NoOpMapsAPILoader, [{
          key: "load",
          value: function load() {
            if (!window.google || !window.google.maps) {
              throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
            }

            return Promise.resolve();
          }
        }]);

        return NoOpMapsAPILoader;
      }(); // exported map types


      var AgmCoreModule_1;
      /**
       * @internal
       */

      function coreDirectives() {
        return [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer];
      }
      /**
       * The angular-google-maps core module. Contains all Directives/Services/Pipes
       * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
       */


      var AgmCoreModule = AgmCoreModule_1 = /*#__PURE__*/function () {
        function AgmCoreModule() {
          _classCallCheck(this, AgmCoreModule);
        }

        _createClass(AgmCoreModule, null, [{
          key: "forRoot",
          value:
          /**
           * Please use this method when you register the module at the root level.
           */
          function forRoot(lazyMapsAPILoaderConfig) {
            return {
              ngModule: AgmCoreModule_1,
              providers: [].concat(BROWSER_GLOBALS_PROVIDERS, [{
                provide: MapsAPILoader,
                useClass: LazyMapsAPILoader
              }, {
                provide: LAZY_MAPS_API_CONFIG,
                useValue: lazyMapsAPILoaderConfig
              }])
            };
          }
        }]);

        return AgmCoreModule;
      }();

      AgmCoreModule = AgmCoreModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: coreDirectives(),
        exports: coreDirectives()
      })], AgmCoreModule); // main modules

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=agm-core.js.map

      /***/
    },

    /***/
    "N3r0":
    /*!********************************************************!*\
      !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
      \********************************************************/

    /*! exports provided: pad, int, debounce, arrayify */

    /***/
    function N3r0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pad", function () {
        return pad;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "int", function () {
        return _int;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "debounce", function () {
        return debounce;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "arrayify", function () {
        return arrayify;
      });

      var pad = function pad(number, length) {
        if (length === void 0) {
          length = 2;
        }

        return ("000" + number).slice(length * -1);
      };

      var _int = function _int(bool) {
        return bool === true ? 1 : 0;
      };

      function debounce(fn, wait) {
        var t;
        return function () {
          var _this = this;

          var args = arguments;
          clearTimeout(t);
          t = setTimeout(function () {
            return fn.apply(_this, args);
          }, wait);
        };
      }

      var arrayify = function arrayify(obj) {
        return obj instanceof Array ? obj : [obj];
      };
      /***/

    },

    /***/
    "QBGs":
    /*!******************************************************************************************!*\
      !*** ./node_modules/angular-draggable-droppable/fesm2015/angular-draggable-droppable.js ***!
      \******************************************************************************************/

    /*! exports provided: DragAndDropModule, ɵc, ɵd, ɵb, ɵa */

    /***/
    function QBGs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragAndDropModule", function () {
        return DragAndDropModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return DraggableHelper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return DraggableScrollContainerDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return DraggableDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return DroppableDirective;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @mattlewis92/dom-autoscroller */
      "ahUn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var DraggableHelper = /*#__PURE__*/_createClass(function DraggableHelper() {
        _classCallCheck(this, DraggableHelper);

        this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
      });

      DraggableHelper.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }];
      /** @nocollapse */

      DraggableHelper.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({
        factory: function DraggableHelper_Factory() {
          return new DraggableHelper();
        },
        token: DraggableHelper,
        providedIn: "root"
      });
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
       * ```html
       * <div style="overflow: scroll" mwlDraggableScrollContainer>
       * <div mwlDraggable>Drag me!</div>
       * </div>
       * ```
       */

      var DraggableScrollContainerDirective = /*#__PURE__*/_createClass(
      /**
       * @hidden
       * @param {?} elementRef
       */
      function DraggableScrollContainerDirective(elementRef) {
        _classCallCheck(this, DraggableScrollContainerDirective);

        this.elementRef = elementRef;
        /**
         * Trigger the DragStart after a long touch in scrollable container when true
         * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
         */

        this.activeLongPressDrag = false;
        /**
         * Configuration of a long touch
         * Duration in ms of a long touch before activating DragStart
         * Delta of the
         * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
         */

        this.longPressConfig = {
          duration: 300,
          delta: 30
        };
      });

      DraggableScrollContainerDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlDraggableScrollContainer]'
        }]
      }];
      /** @nocollapse */

      DraggableScrollContainerDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      DraggableScrollContainerDirective.propDecorators = {
        activeLongPressDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        longPressConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} renderer
       * @param {?} element
       * @param {?} classToAdd
       * @return {?}
       */

      function addClass(renderer, element, classToAdd) {
        if (classToAdd) {
          classToAdd.split(' ').forEach(
          /**
          * @param {?} className
          * @return {?}
          */
          function (className) {
            return renderer.addClass(element.nativeElement, className);
          });
        }
      }
      /**
       * @param {?} renderer
       * @param {?} element
       * @param {?} classToRemove
       * @return {?}
       */


      function removeClass(renderer, element, classToRemove) {
        if (classToRemove) {
          classToRemove.split(' ').forEach(
          /**
          * @param {?} className
          * @return {?}
          */
          function (className) {
            return renderer.removeClass(element.nativeElement, className);
          });
        }
      }
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var DraggableDirective = /*#__PURE__*/function () {
        /**
         * @hidden
         * @param {?} element
         * @param {?} renderer
         * @param {?} draggableHelper
         * @param {?} zone
         * @param {?} vcr
         * @param {?} scrollContainer
         * @param {?} document
         */
        function DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
          _classCallCheck(this, DraggableDirective);

          this.element = element;
          this.renderer = renderer;
          this.draggableHelper = draggableHelper;
          this.zone = zone;
          this.vcr = vcr;
          this.scrollContainer = scrollContainer;
          this.document = document;
          /**
           * The axis along which the element is draggable
           */

          this.dragAxis = {
            x: true,
            y: true
          };
          /**
           * Snap all drags to an x / y grid
           */

          this.dragSnapGrid = {};
          /**
           * Show a ghost element that shows the drag when dragging
           */

          this.ghostDragEnabled = true;
          /**
           * Show the original element when ghostDragEnabled is true
           */

          this.showOriginalElementWhileDragging = false;
          /**
           * The cursor to use when hovering over a draggable element
           */

          this.dragCursor = '';
          /*
             * Options used to control the behaviour of auto scrolling: https://www.npmjs.com/package/dom-autoscroller
             */

          this.autoScroll = {
            margin: 20
          };
          /**
           * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
           */

          this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Called when the element has started to be dragged.
           * Only called after at least one mouse or touch move event.
           * If you call $event.cancelDrag$.emit() it will cancel the current drag
           */

          this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Called after the ghost element has been created
           */

          this.ghostElementCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Called when the element is being dragged
           */

          this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Called after the element is dragged
           */

          this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * @hidden
           */

          this.pointerDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          /**
           * @hidden
           */

          this.pointerMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          /**
           * @hidden
           */

          this.pointerUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.eventListenerSubscriptions = {};
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.timeLongPress = {
            timerBegin: 0,
            timerEnd: 0
          };
        }
        /**
         * @return {?}
         */


        _createClass(DraggableDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this83 = this;

            this.checkEventListeners();
            /** @type {?} */

            var pointerDragged$ = this.pointerDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return _this83.canDrag();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(
            /**
            * @param {?} pointerDownEvent
            * @return {?}
            */
            function (pointerDownEvent) {
              // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
              // stop mouse events propagating up the chain
              if (pointerDownEvent.event.stopPropagation && !_this83.scrollContainer) {
                pointerDownEvent.event.stopPropagation();
              } // hack to prevent text getting selected in safari while dragging

              /** @type {?} */


              var globalDragStyle = _this83.renderer.createElement('style');

              _this83.renderer.setAttribute(globalDragStyle, 'type', 'text/css');

              _this83.renderer.appendChild(globalDragStyle, _this83.renderer.createText("\n          body * {\n           -moz-user-select: none;\n           -ms-user-select: none;\n           -webkit-user-select: none;\n           user-select: none;\n          }\n        "));

              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                _this83.document.head.appendChild(globalDragStyle);
              });
              /** @type {?} */

              var startScrollPosition = _this83.getScrollPosition();
              /** @type {?} */


              var scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
              /**
              * @param {?} observer
              * @return {?}
              */
              function (observer) {
                /** @type {?} */
                var scrollContainer = _this83.scrollContainer ? _this83.scrollContainer.elementRef.nativeElement : 'window';
                return _this83.renderer.listen(scrollContainer, 'scroll',
                /**
                * @param {?} e
                * @return {?}
                */
                function (e) {
                  return observer.next(e);
                });
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(startScrollPosition), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @return {?}
              */
              function () {
                return _this83.getScrollPosition();
              }));
              /** @type {?} */

              var currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
              /** @type {?} */

              var cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();

              _this83.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this83.dragPointerDown.next({
                  x: 0,
                  y: 0
                });
              });
              /** @type {?} */


              var dragComplete$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(_this83.pointerUp$, _this83.pointerDown$, cancelDrag$, _this83.destroy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
              /** @type {?} */

              var pointerMove = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([_this83.pointerMove$, scrollContainerScroll$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref8) {
                var _ref9 = _slicedToArray(_ref8, 2),
                    pointerMoveEvent = _ref9[0],
                    scroll = _ref9[1];

                return {
                  currentDrag$: currentDrag$,
                  transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                  transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                  clientX: pointerMoveEvent.clientX,
                  clientY: pointerMoveEvent.clientY,
                  scrollLeft: scroll.left,
                  scrollTop: scroll.top,
                  target: pointerMoveEvent.event.target
                };
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} moveData
              * @return {?}
              */
              function (moveData) {
                if (_this83.dragSnapGrid.x) {
                  moveData.transformX = Math.round(moveData.transformX / _this83.dragSnapGrid.x) * _this83.dragSnapGrid.x;
                }

                if (_this83.dragSnapGrid.y) {
                  moveData.transformY = Math.round(moveData.transformY / _this83.dragSnapGrid.y) * _this83.dragSnapGrid.y;
                }

                return moveData;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} moveData
              * @return {?}
              */
              function (moveData) {
                if (!_this83.dragAxis.x) {
                  moveData.transformX = 0;
                }

                if (!_this83.dragAxis.y) {
                  moveData.transformY = 0;
                }

                return moveData;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} moveData
              * @return {?}
              */
              function (moveData) {
                /** @type {?} */
                var scrollX = moveData.scrollLeft - startScrollPosition.left;
                /** @type {?} */

                var scrollY = moveData.scrollTop - startScrollPosition.top;
                return Object.assign({}, moveData, {
                  x: moveData.transformX + scrollX,
                  y: moveData.transformY + scrollY
                });
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref10) {
                var x = _ref10.x,
                    y = _ref10.y,
                    transformX = _ref10.transformX,
                    transformY = _ref10.transformY;
                return !_this83.validateDrag || _this83.validateDrag({
                  x: x,
                  y: y,
                  transform: {
                    x: transformX,
                    y: transformY
                  }
                });
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(dragComplete$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
              /** @type {?} */

              var dragStarted$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
              /** @type {?} */

              var dragEnded$ = pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeLast"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
              dragStarted$.subscribe(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref11) {
                var clientX = _ref11.clientX,
                    clientY = _ref11.clientY,
                    x = _ref11.x,
                    y = _ref11.y;

                _this83.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this83.dragStart.next({
                    cancelDrag$: cancelDrag$
                  });
                });

                _this83.scroller = Object(_mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__["default"])([_this83.scrollContainer ? _this83.scrollContainer.elementRef.nativeElement : _this83.document.defaultView], Object.assign({}, _this83.autoScroll, {
                  /**
                  * @return {?}
                  */
                  autoScroll: function autoScroll() {
                    return true;
                  }
                }));
                addClass(_this83.renderer, _this83.element, _this83.dragActiveClass);

                if (_this83.ghostDragEnabled) {
                  /** @type {?} */
                  var rect = _this83.element.nativeElement.getBoundingClientRect();
                  /** @type {?} */


                  var clone =
                  /** @type {?} */
                  _this83.element.nativeElement.cloneNode(true);

                  if (!_this83.showOriginalElementWhileDragging) {
                    _this83.renderer.setStyle(_this83.element.nativeElement, 'visibility', 'hidden');
                  }

                  if (_this83.ghostElementAppendTo) {
                    _this83.ghostElementAppendTo.appendChild(clone);
                  } else {
                    /** @type {?} */
                    _this83.element.nativeElement.parentNode.insertBefore(clone, _this83.element.nativeElement.nextSibling);
                  }

                  _this83.ghostElement = clone;
                  _this83.document.body.style.cursor = _this83.dragCursor;

                  _this83.setElementStyles(clone, {
                    position: 'fixed',
                    top: "".concat(rect.top, "px"),
                    left: "".concat(rect.left, "px"),
                    width: "".concat(rect.width, "px"),
                    height: "".concat(rect.height, "px"),
                    cursor: _this83.dragCursor,
                    margin: '0',
                    willChange: 'transform',
                    pointerEvents: 'none'
                  });

                  if (_this83.ghostElementTemplate) {
                    /** @type {?} */
                    var viewRef = _this83.vcr.createEmbeddedView(_this83.ghostElementTemplate);

                    clone.innerHTML = '';
                    viewRef.rootNodes.filter(
                    /**
                    * @param {?} node
                    * @return {?}
                    */
                    function (node) {
                      return node instanceof Node;
                    }).forEach(
                    /**
                    * @param {?} node
                    * @return {?}
                    */
                    function (node) {
                      clone.appendChild(node);
                    });
                    dragEnded$.subscribe(
                    /**
                    * @return {?}
                    */
                    function () {
                      _this83.vcr.remove(_this83.vcr.indexOf(viewRef));
                    });
                  }

                  _this83.zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this83.ghostElementCreated.emit({
                      clientX: clientX - x,
                      clientY: clientY - y,
                      element: clone
                    });
                  });

                  dragEnded$.subscribe(
                  /**
                  * @return {?}
                  */
                  function () {
                    /** @type {?} */
                    clone.parentElement.removeChild(clone);
                    _this83.ghostElement = null;

                    _this83.renderer.setStyle(_this83.element.nativeElement, 'visibility', '');
                  });
                }

                _this83.draggableHelper.currentDrag.next(currentDrag$);
              });
              dragEnded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(
              /**
              * @param {?} dragEndData
              * @return {?}
              */
              function (dragEndData) {
                /** @type {?} */
                var dragEndData$ = cancelDrag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["count"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
                /**
                * @param {?} calledCount
                * @return {?}
                */
                function (calledCount) {
                  return Object.assign({}, dragEndData, {
                    dragCancelled: calledCount > 0
                  });
                }));
                cancelDrag$.complete();
                return dragEndData$;
              })).subscribe(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref12) {
                var x = _ref12.x,
                    y = _ref12.y,
                    dragCancelled = _ref12.dragCancelled;

                _this83.scroller.destroy();

                _this83.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this83.dragEnd.next({
                    x: x,
                    y: y,
                    dragCancelled: dragCancelled
                  });
                });

                removeClass(_this83.renderer, _this83.element, _this83.dragActiveClass);
                currentDrag$.complete();
              });
              Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(dragComplete$, dragEnded$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(
              /**
              * @return {?}
              */
              function () {
                requestAnimationFrame(
                /**
                * @return {?}
                */
                function () {
                  _this83.document.head.removeChild(globalDragStyle);
                });
              });
              return pointerMove;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return [, value];
            })), pointerDragged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref13) {
              var _ref14 = _slicedToArray(_ref13, 2),
                  previous = _ref14[0],
                  next = _ref14[1];

              if (!previous) {
                return true;
              }

              return previous.x !== next.x || previous.y !== next.y;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref15) {
              var _ref16 = _slicedToArray(_ref15, 2),
                  previous = _ref16[0],
                  next = _ref16[1];

              return next;
            })).subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref17) {
              var x = _ref17.x,
                  y = _ref17.y,
                  currentDrag$ = _ref17.currentDrag$,
                  clientX = _ref17.clientX,
                  clientY = _ref17.clientY,
                  transformX = _ref17.transformX,
                  transformY = _ref17.transformY,
                  target = _ref17.target;

              _this83.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this83.dragging.next({
                  x: x,
                  y: y
                });
              });

              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                if (_this83.ghostElement) {
                  /** @type {?} */
                  var transform = "translate3d(".concat(transformX, "px, ").concat(transformY, "px, 0px)");

                  _this83.setElementStyles(_this83.ghostElement, {
                    transform: transform,
                    '-webkit-transform': transform,
                    '-ms-transform': transform,
                    '-moz-transform': transform,
                    '-o-transform': transform
                  });
                }
              });
              currentDrag$.next({
                clientX: clientX,
                clientY: clientY,
                dropData: _this83.dropData,
                target: target
              });
            });
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.dragAxis) {
              this.checkEventListeners();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeEventListeners();
            this.pointerDown$.complete();
            this.pointerMove$.complete();
            this.pointerUp$.complete();
            this.destroy$.next();
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "checkEventListeners",
          value: function checkEventListeners() {
            var _this84 = this;

            /** @type {?} */
            var canDrag = this.canDrag();
            /** @type {?} */

            var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;

            if (canDrag && !hasEventListeners) {
              this.zone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                _this84.eventListenerSubscriptions.mousedown = _this84.renderer.listen(_this84.element.nativeElement, 'mousedown',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this84.onMouseDown(event);
                });
                _this84.eventListenerSubscriptions.mouseup = _this84.renderer.listen('document', 'mouseup',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this84.onMouseUp(event);
                });
                _this84.eventListenerSubscriptions.touchstart = _this84.renderer.listen(_this84.element.nativeElement, 'touchstart',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this84.onTouchStart(event);
                });
                _this84.eventListenerSubscriptions.touchend = _this84.renderer.listen('document', 'touchend',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this84.onTouchEnd(event);
                });
                _this84.eventListenerSubscriptions.touchcancel = _this84.renderer.listen('document', 'touchcancel',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this84.onTouchEnd(event);
                });
                _this84.eventListenerSubscriptions.mouseenter = _this84.renderer.listen(_this84.element.nativeElement, 'mouseenter',
                /**
                * @return {?}
                */
                function () {
                  _this84.onMouseEnter();
                });
                _this84.eventListenerSubscriptions.mouseleave = _this84.renderer.listen(_this84.element.nativeElement, 'mouseleave',
                /**
                * @return {?}
                */
                function () {
                  _this84.onMouseLeave();
                });
              });
            } else if (!canDrag && hasEventListeners) {
              this.unsubscribeEventListeners();
            }
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onMouseDown",
          value: function onMouseDown(event) {
            var _this85 = this;

            if (event.button === 0) {
              if (!this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove',
                /**
                * @param {?} mouseMoveEvent
                * @return {?}
                */
                function (mouseMoveEvent) {
                  _this85.pointerMove$.next({
                    event: mouseMoveEvent,
                    clientX: mouseMoveEvent.clientX,
                    clientY: mouseMoveEvent.clientY
                  });
                });
              }

              this.pointerDown$.next({
                event: event,
                clientX: event.clientX,
                clientY: event.clientY
              });
            }
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onMouseUp",
          value: function onMouseUp(event) {
            if (event.button === 0) {
              if (this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove();
                delete this.eventListenerSubscriptions.mousemove;
              }

              this.pointerUp$.next({
                event: event,
                clientX: event.clientX,
                clientY: event.clientY
              });
            }
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onTouchStart",
          value: function onTouchStart(event) {
            var _this86 = this;

            /** @type {?} */
            var startScrollPosition;
            /** @type {?} */

            var isDragActivated;
            /** @type {?} */

            var hasContainerScrollbar;

            if (this.scrollContainer && this.scrollContainer.activeLongPressDrag || this.touchStartLongPress) {
              this.timeLongPress.timerBegin = Date.now();
              isDragActivated = false;
              hasContainerScrollbar = this.hasScrollbar();
              startScrollPosition = this.getScrollPosition();
            }

            if (!this.eventListenerSubscriptions.touchmove) {
              /** @type {?} */
              var contextMenuListener = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.document, 'contextmenu').subscribe(
              /**
              * @param {?} e
              * @return {?}
              */
              function (e) {
                e.preventDefault();
              });
              /** @type {?} */

              var touchMoveListener = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.document, 'touchmove', {
                passive: false
              }).subscribe(
              /**
              * @param {?} touchMoveEvent
              * @return {?}
              */
              function (touchMoveEvent) {
                if ((_this86.scrollContainer && _this86.scrollContainer.activeLongPressDrag || _this86.touchStartLongPress) && !isDragActivated && hasContainerScrollbar) {
                  isDragActivated = _this86.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
                }

                if ((!_this86.scrollContainer || !_this86.scrollContainer.activeLongPressDrag) && !_this86.touchStartLongPress || !hasContainerScrollbar || isDragActivated) {
                  touchMoveEvent.preventDefault();

                  _this86.pointerMove$.next({
                    event: touchMoveEvent,
                    clientX: touchMoveEvent.targetTouches[0].clientX,
                    clientY: touchMoveEvent.targetTouches[0].clientY
                  });
                }
              });

              this.eventListenerSubscriptions.touchmove =
              /**
              * @return {?}
              */
              function () {
                contextMenuListener.unsubscribe();
                touchMoveListener.unsubscribe();
              };
            }

            this.pointerDown$.next({
              event: event,
              clientX: event.touches[0].clientX,
              clientY: event.touches[0].clientY
            });
          }
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onTouchEnd",
          value: function onTouchEnd(event) {
            if (this.eventListenerSubscriptions.touchmove) {
              this.eventListenerSubscriptions.touchmove();
              delete this.eventListenerSubscriptions.touchmove;

              if (this.scrollContainer && this.scrollContainer.activeLongPressDrag || this.touchStartLongPress) {
                this.enableScroll();
              }
            }

            this.pointerUp$.next({
              event: event,
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "onMouseEnter",
          value: function onMouseEnter() {
            this.setCursor(this.dragCursor);
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.setCursor('');
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "canDrag",
          value: function canDrag() {
            return this.dragAxis.x || this.dragAxis.y;
          }
          /**
           * @private
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setCursor",
          value: function setCursor(value) {
            if (!this.eventListenerSubscriptions.mousemove) {
              this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "unsubscribeEventListeners",
          value: function unsubscribeEventListeners() {
            var _this87 = this;

            Object.keys(this.eventListenerSubscriptions).forEach(
            /**
            * @param {?} type
            * @return {?}
            */
            function (type) {
              /** @type {?} */
              _this87.eventListenerSubscriptions[type]();

              delete
              /** @type {?} */
              _this87.eventListenerSubscriptions[type];
            });
          }
          /**
           * @private
           * @param {?} element
           * @param {?} styles
           * @return {?}
           */

        }, {
          key: "setElementStyles",
          value: function setElementStyles(element, styles) {
            var _this88 = this;

            Object.keys(styles).forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              _this88.renderer.setStyle(element, key, styles[key]);
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getScrollElement",
          value: function getScrollElement() {
            if (this.scrollContainer) {
              return this.scrollContainer.elementRef.nativeElement;
            } else {
              return this.document.body;
            }
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "getScrollPosition",
          value: function getScrollPosition() {
            if (this.scrollContainer) {
              return {
                top: this.scrollContainer.elementRef.nativeElement.scrollTop,
                left: this.scrollContainer.elementRef.nativeElement.scrollLeft
              };
            } else {
              return {
                top: window.pageYOffset || this.document.documentElement.scrollTop,
                left: window.pageXOffset || this.document.documentElement.scrollLeft
              };
            }
          }
          /**
           * @private
           * @param {?} event
           * @param {?} touchMoveEvent
           * @param {?} startScrollPosition
           * @return {?}
           */

        }, {
          key: "shouldBeginDrag",
          value: function shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
            /** @type {?} */
            var moveScrollPosition = this.getScrollPosition();
            /** @type {?} */

            var deltaScroll = {
              top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
              left: Math.abs(moveScrollPosition.left - startScrollPosition.left)
            };
            /** @type {?} */

            var deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
            /** @type {?} */

            var deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
            /** @type {?} */

            var deltaTotal = deltaX + deltaY;
            /** @type {?} */

            var longPressConfig = this.touchStartLongPress ? this.touchStartLongPress :
            /* istanbul ignore next */
            {
              delta: this.scrollContainer.longPressConfig.delta,
              delay: this.scrollContainer.longPressConfig.duration
            };

            if (deltaTotal > longPressConfig.delta || deltaScroll.top > 0 || deltaScroll.left > 0) {
              this.timeLongPress.timerBegin = Date.now();
            }

            this.timeLongPress.timerEnd = Date.now();
            /** @type {?} */

            var duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;

            if (duration >= longPressConfig.delay) {
              this.disableScroll();
              return true;
            }

            return false;
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "enableScroll",
          value: function enableScroll() {
            if (this.scrollContainer) {
              this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', '');
            }

            this.renderer.setStyle(this.document.body, 'overflow', '');
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "disableScroll",
          value: function disableScroll() {
            /* istanbul ignore next */
            if (this.scrollContainer) {
              this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', 'hidden');
            }

            this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "hasScrollbar",
          value: function hasScrollbar() {
            /** @type {?} */
            var scrollContainer = this.getScrollElement();
            /** @type {?} */

            var containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
            /** @type {?} */

            var containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
            return containerHasHorizontalScroll || containerHasVerticalScroll;
          }
        }]);

        return DraggableDirective;
      }();

      DraggableDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlDraggable]'
        }]
      }];
      /** @nocollapse */

      DraggableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: DraggableHelper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: DraggableScrollContainerDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      };

      DraggableDirective.propDecorators = {
        dropData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragAxis: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragSnapGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ghostDragEnabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        showOriginalElementWhileDragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        validateDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragCursor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragActiveClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ghostElementAppendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ghostElementTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        touchStartLongPress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        autoScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragPointerDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        ghostElementCreated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragging: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} clientX
       * @param {?} clientY
       * @param {?} rect
       * @return {?}
       */

      function isCoordinateWithinRectangle(clientX, clientY, rect) {
        return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
      }

      var DroppableDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         * @param {?} draggableHelper
         * @param {?} zone
         * @param {?} renderer
         * @param {?} scrollContainer
         */
        function DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
          _classCallCheck(this, DroppableDirective);

          this.element = element;
          this.draggableHelper = draggableHelper;
          this.zone = zone;
          this.renderer = renderer;
          this.scrollContainer = scrollContainer;
          /**
           * Called when a draggable element starts overlapping the element
           */

          this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Called when a draggable element stops overlapping the element
           */

          this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Called when a draggable element is moved over the element
           */

          this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Called when a draggable element is dropped on this element
           */

          this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](); // tslint:disable-line no-output-named-after-standard-event
        }
        /**
         * @return {?}
         */


        _createClass(DroppableDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this89 = this;

            this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(
            /**
            * @param {?} drag$
            * @return {?}
            */
            function (drag$) {
              addClass(_this89.renderer, _this89.element, _this89.dragActiveClass);
              /** @type {?} */

              var droppableElement = {
                updateCache: true
              };
              /** @type {?} */

              var deregisterScrollListener = _this89.renderer.listen(_this89.scrollContainer ? _this89.scrollContainer.elementRef.nativeElement : 'window', 'scroll',
              /**
              * @return {?}
              */
              function () {
                droppableElement.updateCache = true;
              });
              /** @type {?} */


              var currentDragDropData;
              /** @type {?} */

              var overlaps$ = drag$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref18) {
                var clientX = _ref18.clientX,
                    clientY = _ref18.clientY,
                    dropData = _ref18.dropData,
                    target = _ref18.target;
                currentDragDropData = dropData;

                if (droppableElement.updateCache) {
                  droppableElement.rect = _this89.element.nativeElement.getBoundingClientRect();

                  if (_this89.scrollContainer) {
                    droppableElement.scrollContainerRect = _this89.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                  }

                  droppableElement.updateCache = false;
                }
                /** @type {?} */


                var isWithinElement = isCoordinateWithinRectangle(clientX, clientY,
                /** @type {?} */
                droppableElement.rect);
                /** @type {?} */

                var isDropAllowed = !_this89.validateDrop || _this89.validateDrop({
                  clientX: clientX,
                  clientY: clientY,
                  target: target
                });

                if (droppableElement.scrollContainerRect) {
                  return isWithinElement && isDropAllowed && isCoordinateWithinRectangle(clientX, clientY,
                  /** @type {?} */
                  droppableElement.scrollContainerRect);
                } else {
                  return isWithinElement && isDropAllowed;
                }
              }));
              /** @type {?} */

              var overlapsChanged$ = overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
              /** @type {?} */

              var dragOverActive;
              overlapsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
              /**
              * @param {?} overlapsNow
              * @return {?}
              */
              function (overlapsNow) {
                return overlapsNow;
              })).subscribe(
              /**
              * @return {?}
              */
              function () {
                dragOverActive = true;
                addClass(_this89.renderer, _this89.element, _this89.dragOverClass);

                _this89.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this89.dragEnter.next({
                    dropData: currentDragDropData
                  });
                });
              });
              overlaps$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
              /**
              * @param {?} overlapsNow
              * @return {?}
              */
              function (overlapsNow) {
                return overlapsNow;
              })).subscribe(
              /**
              * @return {?}
              */
              function () {
                _this89.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this89.dragOver.next({
                    dropData: currentDragDropData
                  });
                });
              });
              overlapsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref19) {
                var _ref20 = _slicedToArray(_ref19, 2),
                    didOverlap = _ref20[0],
                    overlapsNow = _ref20[1];

                return didOverlap && !overlapsNow;
              })).subscribe(
              /**
              * @return {?}
              */
              function () {
                dragOverActive = false;
                removeClass(_this89.renderer, _this89.element, _this89.dragOverClass);

                _this89.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this89.dragLeave.next({
                    dropData: currentDragDropData
                  });
                });
              });
              drag$.subscribe({
                complete:
                /**
                * @return {?}
                */
                function complete() {
                  deregisterScrollListener();
                  removeClass(_this89.renderer, _this89.element, _this89.dragActiveClass);

                  if (dragOverActive) {
                    removeClass(_this89.renderer, _this89.element, _this89.dragOverClass);

                    _this89.zone.run(
                    /**
                    * @return {?}
                    */
                    function () {
                      _this89.drop.next({
                        dropData: currentDragDropData
                      });
                    });
                  }
                }
              });
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.currentDragSubscription) {
              this.currentDragSubscription.unsubscribe();
            }
          }
        }]);

        return DroppableDirective;
      }();

      DroppableDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlDroppable]'
        }]
      }];
      /** @nocollapse */

      DroppableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: DraggableHelper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: DraggableScrollContainerDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }];
      };

      DroppableDirective.propDecorators = {
        dragOverClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragActiveClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        validateDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dragEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        dragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        drop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var DragAndDropModule = /*#__PURE__*/_createClass(function DragAndDropModule() {
        _classCallCheck(this, DragAndDropModule);
      });

      DragAndDropModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective],
          exports: [DraggableDirective, DroppableDirective, DraggableScrollContainerDirective]
        }]
      }];
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-draggable-droppable.js.map

      /***/
    },

    /***/
    "TkX7":
    /*!*********************************************************!*\
      !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
      \*********************************************************/

    /*! exports provided: english, default */

    /***/
    function TkX7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "english", function () {
        return english;
      });

      var english = {
        weekdays: {
          shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        months: {
          shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function ordinal(nth) {
          var s = nth % 100;
          if (s > 3 && s < 21) return "th";

          switch (s % 10) {
            case 1:
              return "st";

            case 2:
              return "nd";

            case 3:
              return "rd";

            default:
              return "th";
          }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        monthAriaLabel: "Month",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false
      };
      /* harmony default export */

      __webpack_exports__["default"] = english;
      /***/
    },

    /***/
    "X2Dv":
    /*!**************************************************!*\
      !*** ./node_modules/flatpickr/dist/esm/index.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function X2Dv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./types/options */
      "nFBg");
      /* harmony import */


      var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./l10n/default */
      "TkX7");
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./utils */
      "N3r0");
      /* harmony import */


      var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils/dom */
      "YqbJ");
      /* harmony import */


      var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./utils/dates */
      "C0Yq");
      /* harmony import */


      var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./utils/formatting */
      "gsBn");
      /* harmony import */


      var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./utils/polyfills */
      "cW3J");
      /* harmony import */


      var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);

      var __assign = undefined && undefined.__assign || function () {
        __assign = Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }

          return t;
        };

        return __assign.apply(this, arguments);
      };

      var __spreadArrays = undefined && undefined.__spreadArrays || function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

        for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

        return r;
      };

      var DEBOUNCED_CHANGE_MS = 300;

      function FlatpickrInstance(element, instanceConfig) {
        var self = {
          config: __assign(__assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"]), flatpickr.defaultConfig),
          l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]
        };
        self.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({
          config: self.config,
          l10n: self.l10n
        });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self.onMouseOver = onMouseOver;
        self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"];
        self.createDay = createDay;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.updateValue = updateValue;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;

        function setupHelperFunctions() {
          self.utils = {
            getDaysInMonth: function getDaysInMonth(month, yr) {
              if (month === void 0) {
                month = self.currentMonth;
              }

              if (yr === void 0) {
                yr = self.currentYear;
              }

              if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
              return self.l10n.daysInMonth[month];
            }
          };
        }

        function init() {
          self.element = self.input = element;
          self.isOpen = false;
          parseConfig();
          setupLocale();
          setupInputs();
          setupDates();
          setupHelperFunctions();
          if (!self.isMobile) build();
          bindEvents();

          if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
              setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            }

            updateValue(false);
          }

          setCalendarWidth();
          var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

          if (!self.isMobile && isSafari) {
            positionCalendar();
          }

          triggerEvent("onReady");
        }

        function getClosestActiveElement() {
          var _a;

          return ((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
        }

        function bindToInstance(fn) {
          return fn.bind(self);
        }

        function setCalendarWidth() {
          var config = self.config;

          if (config.weekNumbers === false && config.showMonths === 1) {
            return;
          } else if (config.noCalendar !== true) {
            window.requestAnimationFrame(function () {
              if (self.calendarContainer !== undefined) {
                self.calendarContainer.style.visibility = "hidden";
                self.calendarContainer.style.display = "block";
              }

              if (self.daysContainer !== undefined) {
                var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                self.daysContainer.style.width = daysWidth + "px";
                self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
                self.calendarContainer.style.removeProperty("visibility");
                self.calendarContainer.style.removeProperty("display");
              }
            });
          }
        }

        function updateTime(e) {
          if (self.selectedDates.length === 0) {
            var defaultDate = self.config.minDate === undefined || Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
            var defaults = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [defaultDate];
            self.latestSelectedDateObj = defaultDate;
          }

          if (e !== undefined && e.type !== "blur") {
            timeWrapper(e);
          }

          var prevValue = self._input.value;
          setHoursFromInputs();
          updateValue();

          if (self._input.value !== prevValue) {
            self._debouncedChange();
          }
        }

        function ampm2military(hour, amPM) {
          return hour % 12 + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(amPM === self.l10n.amPM[1]);
        }

        function military2ampm(hour) {
          switch (hour % 24) {
            case 0:
            case 12:
              return 12;

            default:
              return hour % 12;
          }
        }

        function setHoursFromInputs() {
          if (self.hourElement === undefined || self.minuteElement === undefined) return;
          var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
              minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
              seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

          if (self.amPM !== undefined) {
            hours = ampm2military(hours, self.amPM.textContent);
          }

          var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(self.latestSelectedDateObj, self.config.minDate, true) === 0;
          var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

          if (self.config.maxTime !== undefined && self.config.minTime !== undefined && self.config.minTime > self.config.maxTime) {
            var minBound = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["calculateSecondsSinceMidnight"])(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
            var maxBound = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["calculateSecondsSinceMidnight"])(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
            var currentTime = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["calculateSecondsSinceMidnight"])(hours, minutes, seconds);

            if (currentTime > maxBound && currentTime < minBound) {
              var result = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["parseSeconds"])(minBound);
              hours = result[0];
              minutes = result[1];
              seconds = result[2];
            }
          } else {
            if (limitMaxHours) {
              var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
              hours = Math.min(hours, maxTime.getHours());
              if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
              if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
            }

            if (limitMinHours) {
              var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
              hours = Math.max(hours, minTime.getHours());
              if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
              if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
            }
          }

          setHours(hours, minutes, seconds);
        }

        function setHoursFromDate(dateObj) {
          var date = dateObj || self.latestSelectedDateObj;

          if (date && date instanceof Date) {
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
          }
        }

        function setHours(hours, minutes, seconds) {
          if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
          }

          if (!self.hourElement || !self.minuteElement || self.isMobile) return;
          self.hourElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(!self.config.time_24hr ? (12 + hours) % 12 + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(hours % 12 === 0) : hours);
          self.minuteElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(minutes);
          if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(hours >= 12)];
          if (self.secondElement !== undefined) self.secondElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(seconds);
        }

        function onYearInput(event) {
          var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(event);
          var year = parseInt(eventTarget.value) + (event.delta || 0);

          if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
            changeYear(year);
          }
        }

        function bind(element, event, handler, options) {
          if (event instanceof Array) return event.forEach(function (ev) {
            return bind(element, ev, handler, options);
          });
          if (element instanceof Array) return element.forEach(function (el) {
            return bind(el, event, handler, options);
          });
          element.addEventListener(event, handler, options);

          self._handlers.push({
            remove: function remove() {
              return element.removeEventListener(event, handler, options);
            }
          });
        }

        function triggerChange() {
          triggerEvent("onChange");
        }

        function bindEvents() {
          if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
              Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                return bind(el, "click", self[evt]);
              });
            });
          }

          if (self.isMobile) {
            setupMobile();
            return;
          }

          var debouncedResize = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(onResize, 50);
          self._debouncedChange = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(triggerChange, DEBOUNCED_CHANGE_MS);
          if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
            if (self.config.mode === "range") onMouseOver(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e));
          });
          bind(self._input, "keydown", onKeyDown);

          if (self.calendarContainer !== undefined) {
            bind(self.calendarContainer, "keydown", onKeyDown);
          }

          if (!self.config.inline && !self.config["static"]) bind(window, "resize", debouncedResize);
          if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", documentClick);
          bind(window.document, "focus", documentClick, {
            capture: true
          });

          if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "click", self.open);
          }

          if (self.daysContainer !== undefined) {
            bind(self.monthNav, "click", onMonthNavClick);
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "click", selectDate);
          }

          if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
            var selText = function selText(e) {
              return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e).select();
            };

            bind(self.timeContainer, ["increment"], updateTime);
            bind(self.timeContainer, "blur", updateTime, {
              capture: true
            });
            bind(self.timeContainer, "click", timeIncrement);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
              return self.secondElement && self.secondElement.select();
            });

            if (self.amPM !== undefined) {
              bind(self.amPM, "click", function (e) {
                updateTime(e);
              });
            }
          }

          if (self.config.allowInput) {
            bind(self._input, "blur", onBlur);
          }
        }

        function jumpToDate(jumpDate, triggerChange) {
          var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
          var oldYear = self.currentYear;
          var oldMonth = self.currentMonth;

          try {
            if (jumpTo !== undefined) {
              self.currentYear = jumpTo.getFullYear();
              self.currentMonth = jumpTo.getMonth();
            }
          } catch (e) {
            e.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(e);
          }

          if (triggerChange && self.currentYear !== oldYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
          }

          if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
            triggerEvent("onMonthChange");
          }

          self.redraw();
        }

        function timeIncrement(e) {
          var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
          if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
        }

        function incrementNumInput(e, delta, inputElem) {
          var target = e && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
          var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
          var event = createEvent("increment");
          event.delta = delta;
          input && input.dispatchEvent(event);
        }

        function build() {
          var fragment = window.document.createDocumentFragment();
          self.calendarContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-calendar");
          self.calendarContainer.tabIndex = -1;

          if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-innerContainer");

            if (self.config.weekNumbers) {
              var _a = buildWeeks(),
                  weekWrapper = _a.weekWrapper,
                  weekNumbers = _a.weekNumbers;

              self.innerContainer.appendChild(weekWrapper);
              self.weekNumbers = weekNumbers;
              self.weekWrapper = weekWrapper;
            }

            self.rContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());

            if (!self.daysContainer) {
              self.daysContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-days");
              self.daysContainer.tabIndex = -1;
            }

            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
          }

          if (self.config.enableTime) {
            fragment.appendChild(buildTime());
          }

          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rangeMode", self.config.mode === "range");
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "animate", self.config.animate === true);
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
          self.calendarContainer.appendChild(fragment);
          var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

          if (self.config.inline || self.config["static"]) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

            if (self.config.inline) {
              if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
            }

            if (self.config["static"]) {
              var wrapper = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-wrapper");
              if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
              wrapper.appendChild(self.element);
              if (self.altInput) wrapper.appendChild(self.altInput);
              wrapper.appendChild(self.calendarContainer);
            }
          }

          if (!self.config["static"] && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
        }

        function createDay(className, date, _dayNumber, i) {
          var dateIsEnabled = isEnabled(date, true),
              dayElement = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", className, date.getDate().toString());
          dayElement.dateObj = date;
          dayElement.$i = i;
          dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

          if (className.indexOf("hidden") === -1 && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
            dayElement.setAttribute("aria-current", "date");
          }

          if (dateIsEnabled) {
            dayElement.tabIndex = -1;

            if (isDateSelected(date)) {
              dayElement.classList.add("selected");
              self.selectedDateElem = dayElement;

              if (self.config.mode === "range") {
                Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(dayElement, "startRange", self.selectedDates[0] && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[0], true) === 0);
                Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(dayElement, "endRange", self.selectedDates[1] && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[1], true) === 0);
                if (className === "nextMonthDay") dayElement.classList.add("inRange");
              }
            }
          } else {
            dayElement.classList.add("flatpickr-disabled");
          }

          if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
          }

          if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i % 7 === 6) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
          }

          triggerEvent("onDayCreate", dayElement);
          return dayElement;
        }

        function focusOnDayElem(targetNode) {
          targetNode.focus();
          if (self.config.mode === "range") onMouseOver(targetNode);
        }

        function getFirstAvailableDay(delta) {
          var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
          var endMonth = delta > 0 ? self.config.showMonths : -1;

          for (var m = startMonth; m != endMonth; m += delta) {
            var month = self.daysContainer.children[m];
            var startIndex = delta > 0 ? 0 : month.children.length - 1;
            var endIndex = delta > 0 ? month.children.length : -1;

            for (var i = startIndex; i != endIndex; i += delta) {
              var c = month.children[i];
              if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
            }
          }

          return undefined;
        }

        function getNextAvailableDay(current, delta) {
          var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
          var endMonth = delta > 0 ? self.config.showMonths : -1;
          var loopDelta = delta > 0 ? 1 : -1;

          for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
            var month = self.daysContainer.children[m];
            var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
            var numMonthDays = month.children.length;

            for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
              var c = month.children[i];
              if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
            }
          }

          self.changeMonth(loopDelta);
          focusOnDay(getFirstAvailableDay(loopDelta), 0);
          return undefined;
        }

        function focusOnDay(current, offset) {
          var activeElement = getClosestActiveElement();
          var dayFocused = isInView(activeElement || document.body);
          var startElem = current !== undefined ? current : dayFocused ? activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);

          if (startElem === undefined) {
            self._input.focus();
          } else if (!dayFocused) {
            focusOnDayElem(startElem);
          } else {
            getNextAvailableDay(startElem, offset);
          }
        }

        function buildMonthDays(year, month) {
          var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
          var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
          var daysInMonth = self.utils.getDaysInMonth(month, year),
              days = window.document.createDocumentFragment(),
              isMultiMonth = self.config.showMonths > 1,
              prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
              nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
          var dayNumber = prevMonthDays + 1 - firstOfMonth,
              dayIndex = 0;

          for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
          }

          for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
          }

          for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
          }

          var dayContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "dayContainer");
          dayContainer.appendChild(days);
          return dayContainer;
        }

        function buildDays() {
          if (self.daysContainer === undefined) {
            return;
          }

          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.daysContainer);
          if (self.weekNumbers) Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.weekNumbers);
          var frag = document.createDocumentFragment();

          for (var i = 0; i < self.config.showMonths; i++) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
          }

          self.daysContainer.appendChild(frag);
          self.days = self.daysContainer.firstChild;

          if (self.config.mode === "range" && self.selectedDates.length === 1) {
            onMouseOver();
          }
        }

        function buildMonthSwitch() {
          if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;

          var shouldBuildMonth = function shouldBuildMonth(month) {
            if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
              return false;
            }

            return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
          };

          self.monthsDropdownContainer.tabIndex = -1;
          self.monthsDropdownContainer.innerHTML = "";

          for (var i = 0; i < 12; i++) {
            if (!shouldBuildMonth(i)) continue;
            var month = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("option", "flatpickr-monthDropdown-month");
            month.value = new Date(self.currentYear, i).getMonth().toString();
            month.textContent = Object(_utils_formatting__WEBPACK_IMPORTED_MODULE_5__["monthToStr"])(i, self.config.shorthandCurrentMonth, self.l10n);
            month.tabIndex = -1;

            if (self.currentMonth === i) {
              month.selected = true;
            }

            self.monthsDropdownContainer.appendChild(month);
          }
        }

        function buildMonth() {
          var container = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-month");
          var monthNavFragment = window.document.createDocumentFragment();
          var monthElement;

          if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
            monthElement = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "cur-month");
          } else {
            self.monthsDropdownContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("select", "flatpickr-monthDropdown-months");
            self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
            bind(self.monthsDropdownContainer, "change", function (e) {
              var target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
              var selectedMonth = parseInt(target.value, 10);
              self.changeMonth(selectedMonth - self.currentMonth);
              triggerEvent("onMonthChange");
            });
            buildMonthSwitch();
            monthElement = self.monthsDropdownContainer;
          }

          var yearInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("cur-year", {
            tabindex: "-1"
          });
          var yearElement = yearInput.getElementsByTagName("input")[0];
          yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);

          if (self.config.minDate) {
            yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
          }

          if (self.config.maxDate) {
            yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
          }

          var currentMonth = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-current-month");
          currentMonth.appendChild(monthElement);
          currentMonth.appendChild(yearInput);
          monthNavFragment.appendChild(currentMonth);
          container.appendChild(monthNavFragment);
          return {
            container: container,
            yearElement: yearElement,
            monthElement: monthElement
          };
        }

        function buildMonths() {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.monthNav);
          self.monthNav.appendChild(self.prevMonthNav);

          if (self.config.showMonths) {
            self.yearElements = [];
            self.monthElements = [];
          }

          for (var m = self.config.showMonths; m--;) {
            var month = buildMonth();
            self.yearElements.push(month.yearElement);
            self.monthElements.push(month.monthElement);
            self.monthNav.appendChild(month.container);
          }

          self.monthNav.appendChild(self.nextMonthNav);
        }

        function buildMonthNav() {
          self.monthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-months");
          self.yearElements = [];
          self.monthElements = [];
          self.prevMonthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-prev-month");
          self.prevMonthNav.innerHTML = self.config.prevArrow;
          self.nextMonthNav = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-next-month");
          self.nextMonthNav.innerHTML = self.config.nextArrow;
          buildMonths();
          Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function get() {
              return self.__hidePrevMonthArrow;
            },
            set: function set(bool) {
              if (self.__hidePrevMonthArrow !== bool) {
                Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.prevMonthNav, "flatpickr-disabled", bool);
                self.__hidePrevMonthArrow = bool;
              }
            }
          });
          Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function get() {
              return self.__hideNextMonthArrow;
            },
            set: function set(bool) {
              if (self.__hideNextMonthArrow !== bool) {
                Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.nextMonthNav, "flatpickr-disabled", bool);
                self.__hideNextMonthArrow = bool;
              }
            }
          });
          self.currentYearElement = self.yearElements[0];
          updateNavigationCurrentMonth();
          return self.monthNav;
        }

        function buildTime() {
          self.calendarContainer.classList.add("hasTime");
          if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
          var defaults = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config);
          self.timeContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-time");
          self.timeContainer.tabIndex = -1;
          var separator = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-time-separator", ":");
          var hourInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-hour", {
            "aria-label": self.l10n.hourAriaLabel
          });
          self.hourElement = hourInput.getElementsByTagName("input")[0];
          var minuteInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-minute", {
            "aria-label": self.l10n.minuteAriaLabel
          });
          self.minuteElement = minuteInput.getElementsByTagName("input")[0];
          self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
          self.hourElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
          self.minuteElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
          self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
          self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
          self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
          self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
          self.hourElement.setAttribute("maxlength", "2");
          self.minuteElement.setAttribute("min", "0");
          self.minuteElement.setAttribute("max", "59");
          self.minuteElement.setAttribute("maxlength", "2");
          self.timeContainer.appendChild(hourInput);
          self.timeContainer.appendChild(separator);
          self.timeContainer.appendChild(minuteInput);
          if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

          if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNumberInput"])("flatpickr-second");
            self.secondElement = secondInput.getElementsByTagName("input")[0];
            self.secondElement.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
          }

          if (!self.config.time_24hr) {
            self.amPM = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-am-pm", self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
          }

          return self.timeContainer;
        }

        function buildWeekdays() {
          if (!self.weekdayContainer) self.weekdayContainer = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekdays");else Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["clearNode"])(self.weekdayContainer);

          for (var i = self.config.showMonths; i--;) {
            var container = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
          }

          updateWeekdays();
          return self.weekdayContainer;
        }

        function updateWeekdays() {
          if (!self.weekdayContainer) {
            return;
          }

          var firstDayOfWeek = self.l10n.firstDayOfWeek;

          var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);

          if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
          }

          for (var i = self.config.showMonths; i--;) {
            self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
          }
        }

        function buildWeeks() {
          self.calendarContainer.classList.add("hasWeeks");
          var weekWrapper = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weekwrapper");
          weekWrapper.appendChild(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
          var weekNumbers = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", "flatpickr-weeks");
          weekWrapper.appendChild(weekNumbers);
          return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers
          };
        }

        function changeMonth(value, isOffset) {
          if (isOffset === void 0) {
            isOffset = true;
          }

          var delta = isOffset ? value : value - self.currentMonth;
          if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
          self.currentMonth += delta;

          if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
            buildMonthSwitch();
          }

          buildDays();
          triggerEvent("onMonthChange");
          updateNavigationCurrentMonth();
        }

        function clear(triggerChangeEvent, toInitial) {
          if (triggerChangeEvent === void 0) {
            triggerChangeEvent = true;
          }

          if (toInitial === void 0) {
            toInitial = true;
          }

          self.input.value = "";
          if (self.altInput !== undefined) self.altInput.value = "";
          if (self.mobileInput !== undefined) self.mobileInput.value = "";
          self.selectedDates = [];
          self.latestSelectedDateObj = undefined;

          if (toInitial === true) {
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
          }

          if (self.config.enableTime === true) {
            var _a = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["getDefaultHours"])(self.config),
                hours = _a.hours,
                minutes = _a.minutes,
                seconds = _a.seconds;

            setHours(hours, minutes, seconds);
          }

          self.redraw();
          if (triggerChangeEvent) triggerEvent("onChange");
        }

        function close() {
          self.isOpen = false;

          if (!self.isMobile) {
            if (self.calendarContainer !== undefined) {
              self.calendarContainer.classList.remove("open");
            }

            if (self._input !== undefined) {
              self._input.classList.remove("active");
            }
          }

          triggerEvent("onClose");
        }

        function destroy() {
          if (self.config !== undefined) triggerEvent("onDestroy");

          for (var i = self._handlers.length; i--;) {
            self._handlers[i].remove();
          }

          self._handlers = [];

          if (self.mobileInput) {
            if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
          } else if (self.calendarContainer && self.calendarContainer.parentNode) {
            if (self.config["static"] && self.calendarContainer.parentNode) {
              var wrapper = self.calendarContainer.parentNode;
              wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

              if (wrapper.parentNode) {
                while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);

                wrapper.parentNode.removeChild(wrapper);
              }
            } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
          }

          if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
          }

          if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
          }

          ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
            try {
              delete self[k];
            } catch (_) {}
          });
        }

        function isCalendarElem(elem) {
          return self.calendarContainer.contains(elem);
        }

        function documentClick(e) {
          if (self.isOpen && !self.config.inline) {
            var eventTarget_1 = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
            var isCalendarElement = isCalendarElem(eventTarget_1);
            var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
            var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
            var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
              return elem.contains(eventTarget_1);
            });

            if (lostFocus && isIgnored) {
              if (self.config.allowInput) {
                self.setDate(self._input.value, false, self.config.altInput ? self.config.altFormat : self.config.dateFormat);
              }

              if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) {
                updateTime();
              }

              self.close();
              if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) self.clear(false);
            }
          }
        }

        function changeYear(newYear) {
          if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
          var newYearNum = newYear,
              isNewYear = self.currentYear !== newYearNum;
          self.currentYear = newYearNum || self.currentYear;

          if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
          } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
          }

          if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
            buildMonthSwitch();
          }
        }

        function isEnabled(date, timeless) {
          var _a;

          if (timeless === void 0) {
            timeless = true;
          }

          var dateToCheck = self.parseDate(date, undefined, timeless);
          if (self.config.minDate && dateToCheck && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
          if (!self.config.enable && self.config.disable.length === 0) return true;
          if (dateToCheck === undefined) return false;
          var bool = !!self.config.enable,
              array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;

          for (var i = 0, d = void 0; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string") {
              var parsed = self.parseDate(d, undefined, true);
              return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
            } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
          }

          return !bool;
        }

        function isInView(elem) {
          if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
          return false;
        }

        function onBlur(e) {
          var isInput = e.target === self._input;
          var valueChanged = self._input.value.trimEnd() !== getDateStr();

          if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
            self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
          }
        }

        function onKeyDown(e) {
          var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
          var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
          var allowInput = self.config.allowInput;
          var allowKeydown = self.isOpen && (!allowInput || !isInput);
          var allowInlineKeydown = self.config.inline && isInput && !allowInput;

          if (e.keyCode === 13 && isInput) {
            if (allowInput) {
              self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
              self.close();
              return eventTarget.blur();
            } else {
              self.open();
            }
          } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);

            switch (e.keyCode) {
              case 13:
                if (isTimeObj) {
                  e.preventDefault();
                  updateTime();
                  focusAndClose();
                } else selectDate(e);

                break;

              case 27:
                e.preventDefault();
                focusAndClose();
                break;

              case 8:
              case 46:
                if (isInput && !self.config.allowInput) {
                  e.preventDefault();
                  self.clear();
                }

                break;

              case 37:
              case 39:
                if (!isTimeObj && !isInput) {
                  e.preventDefault();
                  var activeElement = getClosestActiveElement();

                  if (self.daysContainer !== undefined && (allowInput === false || activeElement && isInView(activeElement))) {
                    var delta_1 = e.keyCode === 39 ? 1 : -1;
                    if (!e.ctrlKey) focusOnDay(undefined, delta_1);else {
                      e.stopPropagation();
                      changeMonth(delta_1);
                      focusOnDay(getFirstAvailableDay(1), 0);
                    }
                  }
                } else if (self.hourElement) self.hourElement.focus();

                break;

              case 38:
              case 40:
                e.preventDefault();
                var delta = e.keyCode === 40 ? 1 : -1;

                if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
                  if (e.ctrlKey) {
                    e.stopPropagation();
                    changeYear(self.currentYear - delta);
                    focusOnDay(getFirstAvailableDay(1), 0);
                  } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
                } else if (eventTarget === self.currentYearElement) {
                  changeYear(self.currentYear - delta);
                } else if (self.config.enableTime) {
                  if (!isTimeObj && self.hourElement) self.hourElement.focus();
                  updateTime(e);

                  self._debouncedChange();
                }

                break;

              case 9:
                if (isTimeObj) {
                  var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(function (x) {
                    return x;
                  });
                  var i = elems.indexOf(eventTarget);

                  if (i !== -1) {
                    var target = elems[i + (e.shiftKey ? -1 : 1)];
                    e.preventDefault();

                    (target || self._input).focus();
                  }
                } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
                  e.preventDefault();

                  self._input.focus();
                }

                break;

              default:
                break;
            }
          }

          if (self.amPM !== undefined && eventTarget === self.amPM) {
            switch (e.key) {
              case self.l10n.amPM[0].charAt(0):
              case self.l10n.amPM[0].charAt(0).toLowerCase():
                self.amPM.textContent = self.l10n.amPM[0];
                setHoursFromInputs();
                updateValue();
                break;

              case self.l10n.amPM[1].charAt(0):
              case self.l10n.amPM[1].charAt(0).toLowerCase():
                self.amPM.textContent = self.l10n.amPM[1];
                setHoursFromInputs();
                updateValue();
                break;
            }
          }

          if (isInput || isCalendarElem(eventTarget)) {
            triggerEvent("onKeyDown", e);
          }
        }

        function onMouseOver(elem, cellClass) {
          if (cellClass === void 0) {
            cellClass = "flatpickr-day";
          }

          if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled"))) return;
          var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
              initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
              rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
              rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
          var containsDisabled = false;
          var minRange = 0,
              maxRange = 0;

          for (var t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__["duration"].DAY) {
            if (!isEnabled(new Date(t), true)) {
              containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
              if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
            }
          }

          var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
          hoverableCells.forEach(function (dayElem) {
            var date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

            if (outOfRange) {
              dayElem.classList.add("notAllowed");
              ["inRange", "startRange", "endRange"].forEach(function (c) {
                dayElem.classList.remove(c);
              });
              return;
            } else if (containsDisabled && !outOfRange) return;

            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
              dayElem.classList.remove(c);
            });

            if (elem !== undefined) {
              elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
              if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
              if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["isBetween"])(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
            }
          });
        }

        function onResize() {
          if (self.isOpen && !self.config["static"] && !self.config.inline) positionCalendar();
        }

        function open(e, positionElement) {
          if (positionElement === void 0) {
            positionElement = self._positionElement;
          }

          if (self.isMobile === true) {
            if (e) {
              e.preventDefault();
              var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);

              if (eventTarget) {
                eventTarget.blur();
              }
            }

            if (self.mobileInput !== undefined) {
              self.mobileInput.focus();
              self.mobileInput.click();
            }

            triggerEvent("onOpen");
            return;
          } else if (self._input.disabled || self.config.inline) {
            return;
          }

          var wasOpen = self.isOpen;
          self.isOpen = true;

          if (!wasOpen) {
            self.calendarContainer.classList.add("open");

            self._input.classList.add("active");

            triggerEvent("onOpen");
            positionCalendar(positionElement);
          }

          if (self.config.enableTime === true && self.config.noCalendar === true) {
            if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
              setTimeout(function () {
                return self.hourElement.select();
              }, 50);
            }
          }
        }

        function minMaxDateSetter(type) {
          return function (date) {
            var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

            if (dateObj !== undefined) {
              self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
            }

            if (self.selectedDates) {
              self.selectedDates = self.selectedDates.filter(function (d) {
                return isEnabled(d);
              });
              if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
              updateValue();
            }

            if (self.daysContainer) {
              redraw();
              if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
              self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
          };
        }

        function parseConfig() {
          var boolOpts = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

          var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);

          var formats = {};
          self.config.parseDate = userConfig.parseDate;
          self.config.formatDate = userConfig.formatDate;
          Object.defineProperty(self.config, "enable", {
            get: function get() {
              return self.config._enable;
            },
            set: function set(dates) {
              self.config._enable = parseDateRules(dates);
            }
          });
          Object.defineProperty(self.config, "disable", {
            get: function get() {
              return self.config._disable;
            },
            set: function set(dates) {
              self.config._disable = parseDateRules(dates);
            }
          });
          var timeMode = userConfig.mode === "time";

          if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
            var defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"].dateFormat;
            formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
          }

          if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
            var defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__["defaults"].altFormat;
            formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
          }

          Object.defineProperty(self.config, "minDate", {
            get: function get() {
              return self.config._minDate;
            },
            set: minMaxDateSetter("min")
          });
          Object.defineProperty(self.config, "maxDate", {
            get: function get() {
              return self.config._maxDate;
            },
            set: minMaxDateSetter("max")
          });

          var minMaxTimeSetter = function minMaxTimeSetter(type) {
            return function (val) {
              self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            };
          };

          Object.defineProperty(self.config, "minTime", {
            get: function get() {
              return self.config._minTime;
            },
            set: minMaxTimeSetter("min")
          });
          Object.defineProperty(self.config, "maxTime", {
            get: function get() {
              return self.config._maxTime;
            },
            set: minMaxTimeSetter("max")
          });

          if (userConfig.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
          }

          Object.assign(self.config, formats, userConfig);

          for (var i = 0; i < boolOpts.length; i++) self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";

          _types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].filter(function (hook) {
            return self.config[hook] !== undefined;
          }).forEach(function (hook) {
            self.config[hook] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(self.config[hook] || []).map(bindToInstance);
          });

          self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

          for (var i = 0; i < self.config.plugins.length; i++) {
            var pluginConf = self.config.plugins[i](self) || {};

            for (var key in pluginConf) {
              if (_types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].indexOf(key) > -1) {
                self.config[key] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
              } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
            }
          }

          if (!userConfig.altInputClass) {
            self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
          }

          triggerEvent("onParseConfig");
        }

        function getInputElem() {
          return self.config.wrap ? element.querySelector("[data-input]") : element;
        }

        function setupLocale() {
          if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
          self.l10n = __assign(__assign({}, flatpickr.l10ns["default"]), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
          _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
          _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
          _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].M = "(" + self.l10n.months.shorthand.join("|") + ")";
          _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].F = "(" + self.l10n.months.longhand.join("|") + ")";
          _utils_formatting__WEBPACK_IMPORTED_MODULE_5__["tokenRegex"].K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";

          var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));

          if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
            self.config.time_24hr = self.l10n.time_24hr;
          }

          self.formatDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateFormatter"])(self);
          self.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({
            config: self.config,
            l10n: self.l10n
          });
        }

        function positionCalendar(customPositionElement) {
          if (typeof self.config.position === "function") {
            return void self.config.position(self, customPositionElement);
          }

          if (self.calendarContainer === undefined) return;
          triggerEvent("onPreCalendarPosition");
          var positionElement = customPositionElement || self._positionElement;
          var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
            return acc + child.offsetHeight;
          }, 0),
              calendarWidth = self.calendarContainer.offsetWidth,
              configPos = self.config.position.split(" "),
              configPosVertical = configPos[0],
              configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
              inputBounds = positionElement.getBoundingClientRect(),
              distanceFromBottom = window.innerHeight - inputBounds.bottom,
              showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
          var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowTop", !showOnTop);
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowBottom", showOnTop);
          if (self.config.inline) return;
          var left = window.pageXOffset + inputBounds.left;
          var isCenter = false;
          var isRight = false;

          if (configPosHorizontal === "center") {
            left -= (calendarWidth - inputBounds.width) / 2;
            isCenter = true;
          } else if (configPosHorizontal === "right") {
            left -= calendarWidth - inputBounds.width;
            isRight = true;
          }

          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowCenter", isCenter);
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "arrowRight", isRight);
          var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
          var rightMost = left + calendarWidth > window.document.body.offsetWidth;
          var centerMost = right + calendarWidth > window.document.body.offsetWidth;
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rightMost", rightMost);
          if (self.config["static"]) return;
          self.calendarContainer.style.top = top + "px";

          if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
          } else if (!centerMost) {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
          } else {
            var doc = getDocumentStyleSheet();
            if (doc === undefined) return;
            var bodyWidth = window.document.body.offsetWidth;
            var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
            var centerBefore = ".flatpickr-calendar.centerMost:before";
            var centerAfter = ".flatpickr-calendar.centerMost:after";
            var centerIndex = doc.cssRules.length;
            var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
            Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "rightMost", false);
            Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["toggleClass"])(self.calendarContainer, "centerMost", true);
            doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
            self.calendarContainer.style.left = centerLeft + "px";
            self.calendarContainer.style.right = "auto";
          }
        }

        function getDocumentStyleSheet() {
          var editableSheet = null;

          for (var i = 0; i < document.styleSheets.length; i++) {
            var sheet = document.styleSheets[i];
            if (!sheet.cssRules) continue;

            try {
              sheet.cssRules;
            } catch (err) {
              continue;
            }

            editableSheet = sheet;
            break;
          }

          return editableSheet != null ? editableSheet : createStyleSheet();
        }

        function createStyleSheet() {
          var style = document.createElement("style");
          document.head.appendChild(style);
          return style.sheet;
        }

        function redraw() {
          if (self.config.noCalendar || self.isMobile) return;
          buildMonthSwitch();
          updateNavigationCurrentMonth();
          buildDays();
        }

        function focusAndClose() {
          self._input.focus();

          if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
            setTimeout(self.close, 0);
          } else {
            self.close();
          }
        }

        function selectDate(e) {
          e.preventDefault();
          e.stopPropagation();

          var isSelectable = function isSelectable(day) {
            return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
          };

          var t = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["findParent"])(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e), isSelectable);
          if (t === undefined) return;
          var target = t;
          var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
          var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
          self.selectedDateElem = target;
          if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
          } else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) {
              self.clear(false, false);
            }

            self.latestSelectedDateObj = selectedDate;
            self.selectedDates.push(selectedDate);
            if (Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
              return a.getTime() - b.getTime();
            });
          }
          setHoursFromInputs();

          if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();

            if (isNewYear) {
              triggerEvent("onYearChange");
              buildMonthSwitch();
            }

            triggerEvent("onMonthChange");
          }

          updateNavigationCurrentMonth();
          buildDays();
          updateValue();
          if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
            self.selectedDateElem && self.selectedDateElem.focus();
          }
          if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();

          if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

            if (single || range) {
              focusAndClose();
            }
          }

          triggerChange();
        }

        var CALLBACKS = {
          locale: [setupLocale, updateWeekdays],
          showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
          minDate: [jumpToDate],
          maxDate: [jumpToDate],
          positionElement: [updatePositionElement],
          clickOpens: [function () {
            if (self.config.clickOpens === true) {
              bind(self._input, "focus", self.open);
              bind(self._input, "click", self.open);
            } else {
              self._input.removeEventListener("focus", self.open);

              self._input.removeEventListener("click", self.open);
            }
          }]
        };

        function set(option, value) {
          if (option !== null && typeof option === "object") {
            Object.assign(self.config, option);

            for (var key in option) {
              if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function (x) {
                return x();
              });
            }
          } else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
              return x();
            });else if (_types_options__WEBPACK_IMPORTED_MODULE_0__["HOOKS"].indexOf(option) > -1) self.config[option] = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["arrayify"])(value);
          }

          self.redraw();
          updateValue(true);
        }

        function setSelectedDate(inputDate, format) {
          var dates = [];
          if (inputDate instanceof Array) dates = inputDate.map(function (d) {
            return self.parseDate(d, format);
          });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
            switch (self.config.mode) {
              case "single":
              case "time":
                dates = [self.parseDate(inputDate, format)];
                break;

              case "multiple":
                dates = inputDate.split(self.config.conjunction).map(function (date) {
                  return self.parseDate(date, format);
                });
                break;

              case "range":
                dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
                  return self.parseDate(date, format);
                });
                break;

              default:
                break;
            }
          } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
          self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function (d) {
            return d instanceof Date && isEnabled(d, false);
          });
          if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
            return a.getTime() - b.getTime();
          });
        }

        function setDate(date, triggerChange, format) {
          if (triggerChange === void 0) {
            triggerChange = false;
          }

          if (format === void 0) {
            format = self.config.dateFormat;
          }

          if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
          setSelectedDate(date, format);
          self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
          self.redraw();
          jumpToDate(undefined, triggerChange);
          setHoursFromDate();

          if (self.selectedDates.length === 0) {
            self.clear(false);
          }

          updateValue(triggerChange);
          if (triggerChange) triggerEvent("onChange");
        }

        function parseDateRules(arr) {
          return arr.slice().map(function (rule) {
            if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
              return self.parseDate(rule, undefined, true);
            } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
              from: self.parseDate(rule.from, undefined),
              to: self.parseDate(rule.to, undefined)
            };

            return rule;
          }).filter(function (x) {
            return x;
          });
        }

        function setupDates() {
          self.selectedDates = [];
          self.now = self.parseDate(self.config.now) || new Date();
          var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
          if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
          self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
          self.currentYear = self._initialDate.getFullYear();
          self.currentMonth = self._initialDate.getMonth();
          if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
          if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
          if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
          self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
          self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
        }

        function setupInputs() {
          self.input = getInputElem();

          if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
          }

          self.input._type = self.input.type;
          self.input.type = "text";
          self.input.classList.add("flatpickr-input");
          self._input = self.input;

          if (self.config.altInput) {
            self.altInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])(self.input.nodeName, self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.setAttribute("type", "hidden");
            if (!self.config["static"] && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
          }

          if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
          updatePositionElement();
        }

        function updatePositionElement() {
          self._positionElement = self.config.positionElement || self._input;
        }

        function setupMobile() {
          var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
          self.mobileInput = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createElement"])("input", self.input.className + " flatpickr-mobile");
          self.mobileInput.tabIndex = 1;
          self.mobileInput.type = inputType;
          self.mobileInput.disabled = self.input.disabled;
          self.mobileInput.required = self.input.required;
          self.mobileInput.placeholder = self.input.placeholder;
          self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

          if (self.selectedDates.length > 0) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
          }

          if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
          if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
          if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
          self.input.type = "hidden";
          if (self.altInput !== undefined) self.altInput.type = "hidden";

          try {
            if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
          } catch (_a) {}

          bind(self.mobileInput, "change", function (e) {
            self.setDate(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e).value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
          });
        }

        function toggle(e) {
          if (self.isOpen === true) return self.close();
          self.open(e);
        }

        function triggerEvent(event, data) {
          if (self.config === undefined) return;
          var hooks = self.config[event];

          if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++) hooks[i](self.selectedDates, self.input.value, self, data);
          }

          if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
          }
        }

        function createEvent(name) {
          var e = document.createEvent("Event");
          e.initEvent(name, true, true);
          return e;
        }

        function isDateSelected(date) {
          for (var i = 0; i < self.selectedDates.length; i++) {
            var selectedDate = self.selectedDates[i];
            if (selectedDate instanceof Date && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(selectedDate, date) === 0) return "" + i;
          }

          return false;
        }

        function isDateInRange(date) {
          if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
          return Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[0]) >= 0 && Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"])(date, self.selectedDates[1]) <= 0;
        }

        function updateNavigationCurrentMonth() {
          if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
          self.yearElements.forEach(function (yearElement, i) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);

            if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
              self.monthElements[i].textContent = Object(_utils_formatting__WEBPACK_IMPORTED_MODULE_5__["monthToStr"])(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
            } else {
              self.monthsDropdownContainer.value = d.getMonth().toString();
            }

            yearElement.value = d.getFullYear().toString();
          });
          self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
          self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
        }

        function getDateStr(specificFormat) {
          var format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
          return self.selectedDates.map(function (dObj) {
            return self.formatDate(dObj, format);
          }).filter(function (d, i, arr) {
            return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
          }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
        }

        function updateValue(triggerChange) {
          if (triggerChange === void 0) {
            triggerChange = true;
          }

          if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
          }

          self.input.value = getDateStr(self.config.dateFormat);

          if (self.altInput !== undefined) {
            self.altInput.value = getDateStr(self.config.altFormat);
          }

          if (triggerChange !== false) triggerEvent("onValueUpdate");
        }

        function onMonthNavClick(e) {
          var eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e);
          var isPrevMonth = self.prevMonthNav.contains(eventTarget);
          var isNextMonth = self.nextMonthNav.contains(eventTarget);

          if (isPrevMonth || isNextMonth) {
            changeMonth(isPrevMonth ? -1 : 1);
          } else if (self.yearElements.indexOf(eventTarget) >= 0) {
            eventTarget.select();
          } else if (eventTarget.classList.contains("arrowUp")) {
            self.changeYear(self.currentYear + 1);
          } else if (eventTarget.classList.contains("arrowDown")) {
            self.changeYear(self.currentYear - 1);
          }
        }

        function timeWrapper(e) {
          e.preventDefault();
          var isKeyDown = e.type === "keydown",
              eventTarget = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["getEventTarget"])(e),
              input = eventTarget;

          if (self.amPM !== undefined && eventTarget === self.amPM) {
            self.amPM.textContent = self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(self.amPM.textContent === self.l10n.amPM[0])];
          }

          var min = parseFloat(input.getAttribute("min")),
              max = parseFloat(input.getAttribute("max")),
              step = parseFloat(input.getAttribute("step")),
              curValue = parseInt(input.value, 10),
              delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
          var newValue = curValue + step * delta;

          if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement,
                isMinuteElem = input === self.minuteElement;

            if (newValue < min) {
              newValue = max + newValue + Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!isHourElem) + (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(isHourElem) && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!self.amPM));
              if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
            } else if (newValue > max) {
              newValue = input === self.hourElement ? newValue - max - Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(!self.amPM) : min;
              if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
            }

            if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
              self.amPM.textContent = self.l10n.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["int"])(self.amPM.textContent === self.l10n.amPM[0])];
            }

            input.value = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["pad"])(newValue);
          }
        }

        init();
        return self;
      }

      function _flatpickr(nodeList, config) {
        var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
          return x instanceof HTMLElement;
        });
        var instances = [];

        for (var i = 0; i < nodes.length; i++) {
          var node = nodes[i];

          try {
            if (node.getAttribute("data-fp-omit") !== null) continue;

            if (node._flatpickr !== undefined) {
              node._flatpickr.destroy();

              node._flatpickr = undefined;
            }

            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
          } catch (e) {
            console.error(e);
          }
        }

        return instances.length === 1 ? instances[0] : instances;
      }

      if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
          return _flatpickr(this, config);
        };

        HTMLElement.prototype.flatpickr = function (config) {
          return _flatpickr([this], config);
        };
      }

      var flatpickr = function flatpickr(selector, config) {
        if (typeof selector === "string") {
          return _flatpickr(window.document.querySelectorAll(selector), config);
        } else if (selector instanceof Node) {
          return _flatpickr([selector], config);
        } else {
          return _flatpickr(selector, config);
        }
      };

      flatpickr.defaultConfig = {};
      flatpickr.l10ns = {
        en: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
        "default": __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"])
      };

      flatpickr.localize = function (l10n) {
        flatpickr.l10ns["default"] = __assign(__assign({}, flatpickr.l10ns["default"]), l10n);
      };

      flatpickr.setDefaults = function (config) {
        flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
      };

      flatpickr.parseDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateParser"])({});
      flatpickr.formatDate = Object(_utils_dates__WEBPACK_IMPORTED_MODULE_4__["createDateFormatter"])({});
      flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__["compareDates"];

      if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
          return _flatpickr(this, config);
        };
      }

      Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
      };

      if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
      }
      /* harmony default export */


      __webpack_exports__["default"] = flatpickr;
      /***/
    },

    /***/
    "Xe8C":
    /*!******************************************************!*\
      !*** ./node_modules/positioning/dist/positioning.js ***!
      \******************************************************/

    /*! exports provided: Positioning, positionElements */

    /***/
    function Xe8C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Positioning", function () {
        return Positioning;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "positionElements", function () {
        return positionElements;
      }); // previous version:
      // https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js


      var Positioning =
      /** @class */
      function () {
        function Positioning() {}

        Positioning.prototype.getAllStyles = function (element) {
          return window.getComputedStyle(element);
        };

        Positioning.prototype.getStyle = function (element, prop) {
          return this.getAllStyles(element)[prop];
        };

        Positioning.prototype.isStaticPositioned = function (element) {
          return (this.getStyle(element, 'position') || 'static') === 'static';
        };

        Positioning.prototype.offsetParent = function (element) {
          var offsetParentEl = element.offsetParent || document.documentElement;

          while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
          }

          return offsetParentEl || document.documentElement;
        };

        Positioning.prototype.position = function (element, round) {
          if (round === void 0) {
            round = true;
          }

          var elPosition;
          var parentOffset = {
            width: 0,
            height: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          };

          if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
            elPosition = {
              top: elPosition.top,
              bottom: elPosition.bottom,
              left: elPosition.left,
              right: elPosition.right,
              height: elPosition.height,
              width: elPosition.width
            };
          } else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);

            if (offsetParentEl !== document.documentElement) {
              parentOffset = this.offset(offsetParentEl, false);
            }

            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
          }

          elPosition.top -= parentOffset.top;
          elPosition.bottom -= parentOffset.top;
          elPosition.left -= parentOffset.left;
          elPosition.right -= parentOffset.left;

          if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
          }

          return elPosition;
        };

        Positioning.prototype.offset = function (element, round) {
          if (round === void 0) {
            round = true;
          }

          var elBcr = element.getBoundingClientRect();
          var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
          };
          var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
          };

          if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
          }

          return elOffset;
        };
        /*
          Return false if the element to position is outside the viewport
        */


        Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
          var _a = placement.split('-'),
              _b = _a[0],
              placementPrimary = _b === void 0 ? 'top' : _b,
              _c = _a[1],
              placementSecondary = _c === void 0 ? 'center' : _c;

          var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
          var targetElStyles = this.getAllStyles(targetElement);
          var marginTop = parseFloat(targetElStyles.marginTop);
          var marginBottom = parseFloat(targetElStyles.marginBottom);
          var marginLeft = parseFloat(targetElStyles.marginLeft);
          var marginRight = parseFloat(targetElStyles.marginRight);
          var topPosition = 0;
          var leftPosition = 0;

          switch (placementPrimary) {
            case 'top':
              topPosition = hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom);
              break;

            case 'bottom':
              topPosition = hostElPosition.top + hostElPosition.height;
              break;

            case 'left':
              leftPosition = hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight);
              break;

            case 'right':
              leftPosition = hostElPosition.left + hostElPosition.width;
              break;
          }

          switch (placementSecondary) {
            case 'top':
              topPosition = hostElPosition.top;
              break;

            case 'bottom':
              topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
              break;

            case 'left':
              leftPosition = hostElPosition.left;
              break;

            case 'right':
              leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
              break;

            case 'center':
              if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
              } else {
                topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
              }

              break;
          } /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
          // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;


          targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)"; // Check if the targetElement is inside the viewport

          var targetElBCR = targetElement.getBoundingClientRect();
          var html = document.documentElement;
          var windowHeight = window.innerHeight || html.clientHeight;
          var windowWidth = window.innerWidth || html.clientWidth;
          return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth && targetElBCR.bottom <= windowHeight;
        };

        return Positioning;
      }();

      var placementSeparator = /\s+/;
      var positionService = new Positioning();
      /*
       * Accept the placement array and applies the appropriate placement dependent on the viewport.
       * Returns the applied placement.
       * In case of auto placement, placements are selected in order
       *   'top', 'bottom', 'left', 'right',
       *   'top-left', 'top-right',
       *   'bottom-left', 'bottom-right',
       *   'left-top', 'left-bottom',
       *   'right-top', 'right-bottom'.
       * */

      function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
        var placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
        var allowedPlacements = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom', 'right-top', 'right-bottom'];
        var classList = targetElement.classList;

        var addClassesToTarget = function addClassesToTarget(targetPlacement) {
          var _a = targetPlacement.split('-'),
              primary = _a[0],
              secondary = _a[1];

          var classes = [];

          if (baseClass) {
            classes.push(baseClass + "-" + primary);

            if (secondary) {
              classes.push(baseClass + "-" + primary + "-" + secondary);
            }

            classes.forEach(function (classname) {
              classList.add(classname);
            });
          }

          return classes;
        }; // Remove old placement classes to avoid issues


        if (baseClass) {
          allowedPlacements.forEach(function (placementToRemove) {
            classList.remove(baseClass + "-" + placementToRemove);
          });
        } // replace auto placement with other placements


        var hasAuto = placementVals.findIndex(function (val) {
          return val === 'auto';
        });

        if (hasAuto >= 0) {
          allowedPlacements.forEach(function (obj) {
            if (placementVals.find(function (val) {
              return val.search('^' + obj) !== -1;
            }) == null) {
              placementVals.splice(hasAuto++, 1, obj);
            }
          });
        } // coordinates where to position
        // Required for transform:


        var style = targetElement.style;
        style.position = 'absolute';
        style.top = '0';
        style.left = '0';
        style['will-change'] = 'transform';
        var testPlacement;
        var isInViewport = false;

        for (var _i = 0, placementVals_1 = placementVals; _i < placementVals_1.length; _i++) {
          testPlacement = placementVals_1[_i];
          var addedClasses = addClassesToTarget(testPlacement);

          if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
            isInViewport = true;
            break;
          } // Remove the baseClasses for further calculation


          if (baseClass) {
            addedClasses.forEach(function (classname) {
              classList.remove(classname);
            });
          }
        }

        if (!isInViewport) {
          // If nothing match, the first placement is the default one
          testPlacement = placementVals[0];
          addClassesToTarget(testPlacement);
          positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
        }

        return testPlacement;
      } //# sourceMappingURL=positioning.js.map

      /***/

    },

    /***/
    "YozJ":
    /*!*******************************************************!*\
      !*** ./node_modules/@angular/common/locales/es-BO.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function YozJ(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * @license
      * Copyright Google LLC All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */


      (function (factory) {
        if (true && typeof module.exports === "object") {
          var v = factory(null, exports);
          if (v !== undefined) module.exports = v;
        } else if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
      })(function (require, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        }); // THIS CODE IS GENERATED - DO NOT MODIFY
        // See angular/tools/gulp-tasks/cldr/extract.js

        var u = undefined;

        function plural(n) {
          if (n === 1) return 1;
          return 5;
        }

        exports["default"] = ['es-BO', [['a. m.', 'p. m.'], u, u], u, [['d', 'l', 'm', 'm', 'j', 'v', 's'], ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'], ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'], ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA']], [['D', 'L', 'M', 'M', 'J', 'V', 'S'], ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'], ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'], ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA']], [['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'], ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']], u, [['a. C.', 'd. C.'], u, ['antes de Cristo', 'después de Cristo']], 1, [6, 0], ['d/M/yy', 'd MMM \'de\' y', 'd \'de\' MMMM \'de\' y', 'EEEE, d \'de\' MMMM \'de\' y'], ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, '{1} \'a\' \'las\' {0}', u], [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0 %', '¤#,##0.00', '#E0'], 'BOB', 'Bs', 'boliviano', {
          'AUD': [u, '$'],
          'BOB': ['Bs'],
          'BRL': [u, 'R$'],
          'CAD': [u, '$'],
          'CNY': [u, '¥'],
          'ESP': ['₧'],
          'EUR': [u, '€'],
          'FKP': [u, 'FK£'],
          'GBP': [u, '£'],
          'HKD': [u, '$'],
          'ILS': [u, '₪'],
          'INR': [u, '₹'],
          'JPY': [u, '¥'],
          'KRW': [u, '₩'],
          'MXN': [u, '$'],
          'NZD': [u, '$'],
          'RON': [u, 'L'],
          'SSP': [u, 'SD£'],
          'SYP': [u, 'S£'],
          'TWD': [u, 'NT$'],
          'USD': [u, '$'],
          'VEF': [u, 'BsF'],
          'VND': [u, '₫'],
          'XAF': [],
          'XCD': [u, '$'],
          'XOF': []
        }, 'ltr', plural];
      }); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXMtQk8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9lcy1CTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsT0FBTztRQUNQLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBQzdGLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO1lBQzFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzNDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBQzdGLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO1lBQzFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1NBQzNDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVEO2dCQUNFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTthQUMvRjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWTtnQkFDdEYsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXO2FBQ3BDO1NBQ0Y7UUFDRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDTixDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQztRQUN0RixDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztRQUNwRCxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUM7UUFDNUMsS0FBSztRQUNMLElBQUk7UUFDSixXQUFXO1FBQ1g7WUFDRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNaLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsRUFBRTtTQUNWO1FBQ0QsS0FBSztRQUNMLE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKG4gPT09IDEpIHJldHVybiAxO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnZXMtQk8nLFxuICBbWydhLsKgbS4nLCAncC7CoG0uJ10sIHUsIHVdLFxuICB1LFxuICBbXG4gICAgWydkJywgJ2wnLCAnbScsICdtJywgJ2onLCAndicsICdzJ10sIFsnZG9tLicsICdsdW4uJywgJ21hci4nLCAnbWnDqS4nLCAnanVlLicsICd2aWUuJywgJ3PDoWIuJ10sXG4gICAgWydkb21pbmdvJywgJ2x1bmVzJywgJ21hcnRlcycsICdtacOpcmNvbGVzJywgJ2p1ZXZlcycsICd2aWVybmVzJywgJ3PDoWJhZG8nXSxcbiAgICBbJ0RPJywgJ0xVJywgJ01BJywgJ01JJywgJ0pVJywgJ1ZJJywgJ1NBJ11cbiAgXSxcbiAgW1xuICAgIFsnRCcsICdMJywgJ00nLCAnTScsICdKJywgJ1YnLCAnUyddLCBbJ2RvbS4nLCAnbHVuLicsICdtYXIuJywgJ21pw6kuJywgJ2p1ZS4nLCAndmllLicsICdzw6FiLiddLFxuICAgIFsnZG9taW5nbycsICdsdW5lcycsICdtYXJ0ZXMnLCAnbWnDqXJjb2xlcycsICdqdWV2ZXMnLCAndmllcm5lcycsICdzw6FiYWRvJ10sXG4gICAgWydETycsICdMVScsICdNQScsICdNSScsICdKVScsICdWSScsICdTQSddXG4gIF0sXG4gIFtcbiAgICBbJ0UnLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gICAgW1xuICAgICAgJ2VuZS4nLCAnZmViLicsICdtYXIuJywgJ2Fici4nLCAnbWF5LicsICdqdW4uJywgJ2p1bC4nLCAnYWdvLicsICdzZXAuJywgJ29jdC4nLCAnbm92LicsICdkaWMuJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ2VuZXJvJywgJ2ZlYnJlcm8nLCAnbWFyem8nLCAnYWJyaWwnLCAnbWF5bycsICdqdW5pbycsICdqdWxpbycsICdhZ29zdG8nLCAnc2VwdGllbWJyZScsXG4gICAgICAnb2N0dWJyZScsICdub3ZpZW1icmUnLCAnZGljaWVtYnJlJ1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1snYS4gQy4nLCAnZC4gQy4nXSwgdSwgWydhbnRlcyBkZSBDcmlzdG8nLCAnZGVzcHXDqXMgZGUgQ3Jpc3RvJ11dLFxuICAxLFxuICBbNiwgMF0sXG4gIFsnZC9NL3l5JywgJ2QgTU1NIFxcJ2RlXFwnIHknLCAnZCBcXCdkZVxcJyBNTU1NIFxcJ2RlXFwnIHknLCAnRUVFRSwgZCBcXCdkZVxcJyBNTU1NIFxcJ2RlXFwnIHknXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0gezB9JywgdSwgJ3sxfSBcXCdhXFwnIFxcJ2xhc1xcJyB7MH0nLCB1XSxcbiAgWycsJywgJy4nLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzDCoCUnLCAnwqQjLCMjMC4wMCcsICcjRTAnXSxcbiAgJ0JPQicsXG4gICdCcycsXG4gICdib2xpdmlhbm8nLFxuICB7XG4gICAgJ0FVRCc6IFt1LCAnJCddLFxuICAgICdCT0InOiBbJ0JzJ10sXG4gICAgJ0JSTCc6IFt1LCAnUiQnXSxcbiAgICAnQ0FEJzogW3UsICckJ10sXG4gICAgJ0NOWSc6IFt1LCAnwqUnXSxcbiAgICAnRVNQJzogWyfigqcnXSxcbiAgICAnRVVSJzogW3UsICfigqwnXSxcbiAgICAnRktQJzogW3UsICdGS8KjJ10sXG4gICAgJ0dCUCc6IFt1LCAnwqMnXSxcbiAgICAnSEtEJzogW3UsICckJ10sXG4gICAgJ0lMUyc6IFt1LCAn4oKqJ10sXG4gICAgJ0lOUic6IFt1LCAn4oK5J10sXG4gICAgJ0pQWSc6IFt1LCAnwqUnXSxcbiAgICAnS1JXJzogW3UsICfigqknXSxcbiAgICAnTVhOJzogW3UsICckJ10sXG4gICAgJ05aRCc6IFt1LCAnJCddLFxuICAgICdST04nOiBbdSwgJ0wnXSxcbiAgICAnU1NQJzogW3UsICdTRMKjJ10sXG4gICAgJ1NZUCc6IFt1LCAnU8KjJ10sXG4gICAgJ1RXRCc6IFt1LCAnTlQkJ10sXG4gICAgJ1VTRCc6IFt1LCAnJCddLFxuICAgICdWRUYnOiBbdSwgJ0JzRiddLFxuICAgICdWTkQnOiBbdSwgJ+KCqyddLFxuICAgICdYQUYnOiBbXSxcbiAgICAnWENEJzogW3UsICckJ10sXG4gICAgJ1hPRic6IFtdXG4gIH0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=

      /***/

    },

    /***/
    "YqbJ":
    /*!******************************************************!*\
      !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
      \******************************************************/

    /*! exports provided: toggleClass, createElement, clearNode, findParent, createNumberInput, getEventTarget */

    /***/
    function YqbJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toggleClass", function () {
        return toggleClass;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createElement", function () {
        return createElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clearNode", function () {
        return clearNode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findParent", function () {
        return findParent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createNumberInput", function () {
        return createNumberInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getEventTarget", function () {
        return getEventTarget;
      });

      function toggleClass(elem, className, bool) {
        if (bool === true) return elem.classList.add(className);
        elem.classList.remove(className);
      }

      function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined) e.textContent = content;
        return e;
      }

      function clearNode(node) {
        while (node.firstChild) node.removeChild(node.firstChild);
      }

      function findParent(node, condition) {
        if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
        return undefined;
      }

      function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"),
            numInput = createElement("input", "numInput " + inputClassName),
            arrowUp = createElement("span", "arrowUp"),
            arrowDown = createElement("span", "arrowDown");

        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
          numInput.type = "number";
        } else {
          numInput.type = "text";
          numInput.pattern = "\\d*";
        }

        if (opts !== undefined) for (var key in opts) numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
      }

      function getEventTarget(event) {
        try {
          if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
          }

          return event.target;
        } catch (error) {
          return event.target;
        }
      }
      /***/

    },

    /***/
    "ahUn":
    /*!**********************************************************************!*\
      !*** ./node_modules/@mattlewis92/dom-autoscroller/dist/bundle.es.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function ahUn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      function getDef(f, d) {
        if (typeof f === 'undefined') {
          return typeof d === 'undefined' ? f : d;
        }

        return f;
      }

      function _boolean(func, def) {
        func = getDef(func, def);

        if (typeof func === 'function') {
          return function f() {
            var arguments$1 = arguments;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments$1[_key];
            }

            return !!func.apply(this, args);
          };
        }

        return !!func ? function () {
          return true;
        } : function () {
          return false;
        };
      }

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      /**
       * Returns `true` if provided input is Element.
       * @name isElement
       * @param {*} [input]
       * @returns {boolean}
       */


      var isElement$1 = function isElement$1(input) {
        return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
      };

      function indexOfElement(elements, element) {
        element = resolveElement(element, true);

        if (!isElement$1(element)) {
          return -1;
        }

        for (var i = 0; i < elements.length; i++) {
          if (elements[i] === element) {
            return i;
          }
        }

        return -1;
      }

      function hasElement(elements, element) {
        return -1 !== indexOfElement(elements, element);
      }

      function pushElements(elements, toAdd) {
        for (var i = 0; i < toAdd.length; i++) {
          if (!hasElement(elements, toAdd[i])) {
            elements.push(toAdd[i]);
          }
        }

        return toAdd;
      }

      function addElements(elements) {
        var arguments$1 = arguments;
        var toAdd = [],
            len = arguments.length - 1;

        while (len-- > 0) {
          toAdd[len] = arguments$1[len + 1];
        }

        toAdd = toAdd.map(resolveElement);
        return pushElements(elements, toAdd);
      }

      function removeElements(elements) {
        var arguments$1 = arguments;
        var toRemove = [],
            len = arguments.length - 1;

        while (len-- > 0) {
          toRemove[len] = arguments$1[len + 1];
        }

        return toRemove.map(resolveElement).reduce(function (last, e) {
          var index = indexOfElement(elements, e);

          if (index !== -1) {
            return last.concat(elements.splice(index, 1));
          }

          return last;
        }, []);
      }

      function resolveElement(element, noThrow) {
        if (typeof element === 'string') {
          try {
            return document.querySelector(element);
          } catch (e) {
            throw e;
          }
        }

        if (!isElement$1(element) && !noThrow) {
          throw new TypeError(element + " is not a DOM element.");
        }

        return element;
      }

      function createPointCB(object, options) {
        // A persistent object (as opposed to returned object) is used to save memory
        // This is good to prevent layout thrashing, or for games, and such
        // NOTE
        // This uses IE fixes which should be OK to remove some day. :)
        // Some speed will be gained by removal of these.
        // pointCB should be saved in a variable on return
        // This allows the usage of element.removeEventListener
        options = options || {};

        var allowUpdate = _boolean(options.allowUpdate, true);
        /*if(typeof options.allowUpdate === 'function'){
            allowUpdate = options.allowUpdate;
        }else{
            allowUpdate = function(){return true;};
        }*/


        return function pointCB(event) {
          event = event || window.event; // IE-ism

          object.target = event.target || event.srcElement || event.originalTarget;
          object.element = this;
          object.type = event.type;

          if (!allowUpdate(event)) {
            return;
          } // Support touch
          // http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644


          if (event.targetTouches) {
            object.x = event.targetTouches[0].clientX;
            object.y = event.targetTouches[0].clientY;
            object.pageX = event.targetTouches[0].pageX;
            object.pageY = event.targetTouches[0].pageY;
            object.screenX = event.targetTouches[0].screenX;
            object.screenY = event.targetTouches[0].screenY;
          } else {
            // If pageX/Y aren't available and clientX/Y are,
            // calculate pageX/Y - logic taken from jQuery.
            // (This is to support old IE)
            // NOTE Hopefully this can be removed soon.
            if (event.pageX === null && event.clientX !== null) {
              var eventDoc = event.target && event.target.ownerDocument || document;
              var doc = eventDoc.documentElement;
              var body = eventDoc.body;
              object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
              object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
            } else {
              object.pageX = event.pageX;
              object.pageY = event.pageY;
            } // pageX, and pageY change with page scroll
            // so we're not going to use those for x, and y.
            // NOTE Most browsers also alias clientX/Y with x/y
            // so that's something to consider down the road.


            object.x = event.clientX;
            object.y = event.clientY;
            object.screenX = event.screenX;
            object.screenY = event.screenY;
          }

          object.clientX = object.x;
          object.clientY = object.y;
        }; //NOTE Remember accessibility, Aria roles, and labels.
      }

      function createWindowRect() {
        var props = {
          top: {
            value: 0,
            enumerable: true
          },
          left: {
            value: 0,
            enumerable: true
          },
          right: {
            value: window.innerWidth,
            enumerable: true
          },
          bottom: {
            value: window.innerHeight,
            enumerable: true
          },
          width: {
            value: window.innerWidth,
            enumerable: true
          },
          height: {
            value: window.innerHeight,
            enumerable: true
          },
          x: {
            value: 0,
            enumerable: true
          },
          y: {
            value: 0,
            enumerable: true
          }
        };

        if (Object.create) {
          return Object.create({}, props);
        } else {
          var rect = {};
          Object.defineProperties(rect, props);
          return rect;
        }
      }

      function getClientRect(el) {
        if (el === window) {
          return createWindowRect();
        } else {
          try {
            var rect = el.getBoundingClientRect();

            if (rect.x === undefined) {
              rect.x = rect.left;
              rect.y = rect.top;
            }

            return rect;
          } catch (e) {
            throw new TypeError("Can't call getBoundingClientRect on " + el);
          }
        }
      }

      function pointInside(point, el) {
        var rect = getClientRect(el);
        return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
      }

      var objectCreate = void 0;

      if (typeof Object.create != 'function') {
        objectCreate = function (undefined$1) {
          var Temp = function Temp() {};

          return function (prototype, propertiesObject) {
            if (prototype !== Object(prototype) && prototype !== null) {
              throw TypeError('Argument must be an object, or null');
            }

            Temp.prototype = prototype || {};
            var result = new Temp();
            Temp.prototype = null;

            if (propertiesObject !== undefined$1) {
              Object.defineProperties(result, propertiesObject);
            } // to imitate the case of Object.create(null)


            if (prototype === null) {
              result.__proto__ = null;
            }

            return result;
          };
        }();
      } else {
        objectCreate = Object.create;
      }

      var objectCreate$1 = objectCreate;
      var mouseEventProps = ['altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'region', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'which', 'x', 'y'];

      function createDispatcher(element) {
        var defaultSettings = {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          ctrlKey: false,
          shiftKey: false,
          altKey: false,
          metaKey: false,
          button: 0,
          buttons: 1,
          relatedTarget: null,
          region: null
        };

        if (element !== undefined) {
          element.addEventListener('mousemove', onMove);
        }

        function onMove(e) {
          for (var i = 0; i < mouseEventProps.length; i++) {
            defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
          }
        }

        var dispatch = function () {
          if (MouseEvent) {
            return function m1(element, initMove, data) {
              var evt = new MouseEvent('mousemove', createMoveInit(defaultSettings, initMove)); //evt.dispatched = 'mousemove';

              setSpecial(evt, data);
              return element.dispatchEvent(evt);
            };
          } else if (typeof document.createEvent === 'function') {
            return function m2(element, initMove, data) {
              var settings = createMoveInit(defaultSettings, initMove);
              var evt = document.createEvent('MouseEvents');
              evt.initMouseEvent("mousemove", true, //can bubble
              true, //cancelable
              window, //view
              0, //detail
              settings.screenX, //0, //screenX
              settings.screenY, //0, //screenY
              settings.clientX, //80, //clientX
              settings.clientY, //20, //clientY
              settings.ctrlKey, //false, //ctrlKey
              settings.altKey, //false, //altKey
              settings.shiftKey, //false, //shiftKey
              settings.metaKey, //false, //metaKey
              settings.button, //0, //button
              settings.relatedTarget //null //relatedTarget
              ); //evt.dispatched = 'mousemove';

              setSpecial(evt, data);
              return element.dispatchEvent(evt);
            };
          } else if (typeof document.createEventObject === 'function') {
            return function m3(element, initMove, data) {
              var evt = document.createEventObject();
              var settings = createMoveInit(defaultSettings, initMove);

              for (var name in settings) {
                evt[name] = settings[name];
              } //evt.dispatched = 'mousemove';


              setSpecial(evt, data);
              return element.dispatchEvent(evt);
            };
          }
        }();

        function destroy() {
          if (element) {
            element.removeEventListener('mousemove', onMove, false);
          }

          defaultSettings = null;
        }

        return {
          destroy: destroy,
          dispatch: dispatch
        };
      }

      function createMoveInit(defaultSettings, initMove) {
        initMove = initMove || {};
        var settings = objectCreate$1(defaultSettings);

        for (var i = 0; i < mouseEventProps.length; i++) {
          if (initMove[mouseEventProps[i]] !== undefined) {
            settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
          }
        }

        return settings;
      }

      function setSpecial(e, data) {
        console.log('data ', data);
        e.data = data || {};
        e.dispatched = 'mousemove';
      }

      var prefix = ['webkit', 'moz', 'ms', 'o'];

      var requestFrame = function () {
        if (typeof window === "undefined") {
          return function () {};
        }

        for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
          window.requestAnimationFrame = window[prefix[i] + 'RequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame) {
          var lastTime = 0;

          window.requestAnimationFrame = function (callback) {
            var now = new Date().getTime();
            var ttc = Math.max(0, 16 - now - lastTime);
            var timer = window.setTimeout(function () {
              return callback(now + ttc);
            }, ttc);
            lastTime = now + ttc;
            return timer;
          };
        }

        return window.requestAnimationFrame.bind(window);
      }();

      var cancelFrame = function () {
        if (typeof window === "undefined") {
          return function () {};
        }

        for (var i = 0, limit = prefix.length; i < limit && !window.cancelAnimationFrame; ++i) {
          window.cancelAnimationFrame = window[prefix[i] + 'CancelAnimationFrame'] || window[prefix[i] + 'CancelRequestAnimationFrame'];
        }

        if (!window.cancelAnimationFrame) {
          window.cancelAnimationFrame = function (timer) {
            window.clearTimeout(timer);
          };
        }

        return window.cancelAnimationFrame.bind(window);
      }();

      function AutoScroller(elements, options) {
        if (options === void 0) options = {};
        var self = this;
        var maxSpeed = 4,
            scrolling = false;

        if (typeof options.margin !== 'object') {
          var margin = options.margin || -1;
          this.margin = {
            left: margin,
            right: margin,
            top: margin,
            bottom: margin
          };
        } else {
          this.margin = options.margin;
        } //this.scrolling = false;


        this.scrollWhenOutside = options.scrollWhenOutside || false;
        var point = {},
            pointCB = createPointCB(point),
            dispatcher = createDispatcher(),
            down = false;
        window.addEventListener('mousemove', pointCB, false);
        window.addEventListener('touchmove', pointCB, false);

        if (!isNaN(options.maxSpeed)) {
          maxSpeed = options.maxSpeed;
        }

        if (typeof maxSpeed !== 'object') {
          maxSpeed = {
            left: maxSpeed,
            right: maxSpeed,
            top: maxSpeed,
            bottom: maxSpeed
          };
        }

        this.autoScroll = _boolean(options.autoScroll);
        this.syncMove = _boolean(options.syncMove, false);

        this.destroy = function (forceCleanAnimation) {
          window.removeEventListener('mousemove', pointCB, false);
          window.removeEventListener('touchmove', pointCB, false);
          window.removeEventListener('mousedown', onDown, false);
          window.removeEventListener('touchstart', onDown, false);
          window.removeEventListener('mouseup', onUp, false);
          window.removeEventListener('touchend', onUp, false);
          window.removeEventListener('pointerup', onUp, false);
          window.removeEventListener('mouseleave', onMouseOut, false);
          window.removeEventListener('mousemove', onMove, false);
          window.removeEventListener('touchmove', onMove, false);
          window.removeEventListener('scroll', setScroll, true);
          elements = [];

          if (forceCleanAnimation) {
            cleanAnimation();
          }
        };

        this.add = function () {
          var element = [],
              len = arguments.length;

          while (len--) element[len] = arguments[len];

          addElements.apply(void 0, [elements].concat(element));
          return this;
        };

        this.remove = function () {
          var element = [],
              len = arguments.length;

          while (len--) element[len] = arguments[len];

          return removeElements.apply(void 0, [elements].concat(element));
        };

        var hasWindow = null,
            windowAnimationFrame;

        if (Object.prototype.toString.call(elements) !== '[object Array]') {
          elements = [elements];
        }

        (function (temp) {
          elements = [];
          temp.forEach(function (element) {
            if (element === window) {
              hasWindow = window;
            } else {
              self.add(element);
            }
          });
        })(elements);

        Object.defineProperties(this, {
          down: {
            get: function get() {
              return down;
            }
          },
          maxSpeed: {
            get: function get() {
              return maxSpeed;
            }
          },
          point: {
            get: function get() {
              return point;
            }
          },
          scrolling: {
            get: function get() {
              return scrolling;
            }
          }
        });
        var current = null,
            animationFrame;
        window.addEventListener('mousedown', onDown, false);
        window.addEventListener('touchstart', onDown, false);
        window.addEventListener('mouseup', onUp, false);
        window.addEventListener('touchend', onUp, false);
        /*
        IE does not trigger mouseup event when scrolling.
        It is a known issue that Microsoft won't fix.
        https://connect.microsoft.com/IE/feedback/details/783058/scrollbar-trigger-mousedown-but-not-mouseup
        IE supports pointer events instead
        */

        window.addEventListener('pointerup', onUp, false);
        window.addEventListener('mousemove', onMove, false);
        window.addEventListener('touchmove', onMove, false);
        window.addEventListener('mouseleave', onMouseOut, false);
        window.addEventListener('scroll', setScroll, true);

        function setScroll(e) {
          for (var i = 0; i < elements.length; i++) {
            if (elements[i] === e.target) {
              scrolling = true;
              break;
            }
          }

          if (scrolling) {
            requestFrame(function () {
              return scrolling = false;
            });
          }
        }

        function onDown() {
          down = true;
        }

        function onUp() {
          down = false;
          cleanAnimation();
        }

        function cleanAnimation() {
          cancelFrame(animationFrame);
          cancelFrame(windowAnimationFrame);
        }

        function onMouseOut() {
          down = false;
        }

        function getTarget(target) {
          if (!target) {
            return null;
          }

          if (current === target) {
            return target;
          }

          if (hasElement(elements, target)) {
            return target;
          }

          while (target = target.parentNode) {
            if (hasElement(elements, target)) {
              return target;
            }
          }

          return null;
        }

        function getElementUnderPoint() {
          var underPoint = null;

          for (var i = 0; i < elements.length; i++) {
            if (inside(point, elements[i])) {
              underPoint = elements[i];
            }
          }

          return underPoint;
        }

        function onMove(event) {
          if (!self.autoScroll()) {
            return;
          }

          if (event['dispatched']) {
            return;
          }

          var target = event.target,
              body = document.body;

          if (current && !inside(point, current)) {
            if (!self.scrollWhenOutside) {
              current = null;
            }
          }

          if (target && target.parentNode === body) {
            //The special condition to improve speed.
            target = getElementUnderPoint();
          } else {
            target = getTarget(target);

            if (!target) {
              target = getElementUnderPoint();
            }
          }

          if (target && target !== current) {
            current = target;
          }

          if (hasWindow) {
            cancelFrame(windowAnimationFrame);
            windowAnimationFrame = requestFrame(scrollWindow);
          }

          if (!current) {
            return;
          }

          cancelFrame(animationFrame);
          animationFrame = requestFrame(scrollTick);
        }

        function scrollWindow() {
          autoScroll(hasWindow);
          cancelFrame(windowAnimationFrame);
          windowAnimationFrame = requestFrame(scrollWindow);
        }

        function scrollTick() {
          if (!current) {
            return;
          }

          autoScroll(current);
          cancelFrame(animationFrame);
          animationFrame = requestFrame(scrollTick);
        }

        function autoScroll(el) {
          var rect = getClientRect(el),
              scrollx,
              scrolly;

          if (point.x < rect.left + self.margin.left) {
            scrollx = Math.floor(Math.max(-1, (point.x - rect.left) / self.margin.left - 1) * self.maxSpeed.left);
          } else if (point.x > rect.right - self.margin.right) {
            scrollx = Math.ceil(Math.min(1, (point.x - rect.right) / self.margin.right + 1) * self.maxSpeed.right);
          } else {
            scrollx = 0;
          }

          if (point.y < rect.top + self.margin.top) {
            scrolly = Math.floor(Math.max(-1, (point.y - rect.top) / self.margin.top - 1) * self.maxSpeed.top);
          } else if (point.y > rect.bottom - self.margin.bottom) {
            scrolly = Math.ceil(Math.min(1, (point.y - rect.bottom) / self.margin.bottom + 1) * self.maxSpeed.bottom);
          } else {
            scrolly = 0;
          }

          if (self.syncMove()) {
            /*
            Notes about mousemove event dispatch.
            screen(X/Y) should need to be updated.
            Some other properties might need to be set.
            Keep the syncMove option default false until all inconsistencies are taken care of.
            */
            dispatcher.dispatch(el, {
              pageX: point.pageX + scrollx,
              pageY: point.pageY + scrolly,
              clientX: point.x + scrollx,
              clientY: point.y + scrolly
            });
          }

          setTimeout(function () {
            if (scrolly) {
              scrollY(el, scrolly);
            }

            if (scrollx) {
              scrollX(el, scrollx);
            }
          });
        }

        function scrollY(el, amount) {
          if (el === window) {
            window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
          } else {
            el.scrollTop += amount;
          }
        }

        function scrollX(el, amount) {
          if (el === window) {
            window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
          } else {
            el.scrollLeft += amount;
          }
        }
      }

      function AutoScrollerFactory(element, options) {
        return new AutoScroller(element, options);
      }

      function inside(point, el, rect) {
        if (!rect) {
          return pointInside(point, el);
        } else {
          return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
        }
      }
      /*
      git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
      git push -u origin master
      */

      /* harmony default export */


      __webpack_exports__["default"] = AutoScrollerFactory;
      /***/
    },

    /***/
    "b1EX":
    /*!****************************************************************!*\
      !*** ./node_modules/@agm/core/node_modules/tslib/tslib.es6.js ***!
      \****************************************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function b1EX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }

      function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

        return ar;
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

        for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

        return r;
      }

      ;

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    },

    /***/
    "cW3J":
    /*!************************************************************!*\
      !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function cW3J(module, exports, __webpack_require__) {
      "use strict";

      if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
          var args = [];

          for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
          }

          if (!target) {
            throw TypeError("Cannot convert undefined or null to object");
          }

          var _loop_1 = function _loop_1(source) {
            if (source) {
              Object.keys(source).forEach(function (key) {
                return target[key] = source[key];
              });
            }
          };

          for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var source = args_1[_a];

            _loop_1(source);
          }

          return target;
        };
      }
      /***/

    },

    /***/
    "gsBn":
    /*!*************************************************************!*\
      !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
      \*************************************************************/

    /*! exports provided: monthToStr, revFormat, tokenRegex, formats */

    /***/
    function gsBn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "monthToStr", function () {
        return monthToStr;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "revFormat", function () {
        return revFormat;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tokenRegex", function () {
        return tokenRegex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "formats", function () {
        return formats;
      });
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils */
      "N3r0");

      var doNothing = function doNothing() {
        return undefined;
      };

      var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
        return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
      };

      var revFormat = {
        D: doNothing,
        F: function F(dateObj, monthName, locale) {
          dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function G(dateObj, hour) {
          dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
        },
        H: function H(dateObj, hour) {
          dateObj.setHours(parseFloat(hour));
        },
        J: function J(dateObj, day) {
          dateObj.setDate(parseFloat(day));
        },
        K: function K(dateObj, amPM, locale) {
          dateObj.setHours(dateObj.getHours() % 12 + 12 * Object(_utils__WEBPACK_IMPORTED_MODULE_0__["int"])(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function M(dateObj, shortMonth, locale) {
          dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function S(dateObj, seconds) {
          dateObj.setSeconds(parseFloat(seconds));
        },
        U: function U(_, unixSeconds) {
          return new Date(parseFloat(unixSeconds) * 1000);
        },
        W: function W(dateObj, weekNum, locale) {
          var weekNumber = parseInt(weekNum);
          var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
          date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
          return date;
        },
        Y: function Y(dateObj, year) {
          dateObj.setFullYear(parseFloat(year));
        },
        Z: function Z(_, ISODate) {
          return new Date(ISODate);
        },
        d: function d(dateObj, day) {
          dateObj.setDate(parseFloat(day));
        },
        h: function h(dateObj, hour) {
          dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
        },
        i: function i(dateObj, minutes) {
          dateObj.setMinutes(parseFloat(minutes));
        },
        j: function j(dateObj, day) {
          dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: function m(dateObj, month) {
          dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function n(dateObj, month) {
          dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function s(dateObj, seconds) {
          dateObj.setSeconds(parseFloat(seconds));
        },
        u: function u(_, unixMillSeconds) {
          return new Date(parseFloat(unixMillSeconds));
        },
        w: doNothing,
        y: function y(dateObj, year) {
          dateObj.setFullYear(2000 + parseFloat(year));
        }
      };
      var tokenRegex = {
        D: "",
        F: "",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
      };
      var formats = {
        Z: function Z(date) {
          return date.toISOString();
        },
        D: function D(date, locale, options) {
          return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        F: function F(date, locale, options) {
          return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        G: function G(date, locale, options) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(formats.h(date, locale, options));
        },
        H: function H(date) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getHours());
        },
        J: function J(date, locale) {
          return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
        },
        K: function K(date, locale) {
          return locale.amPM[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["int"])(date.getHours() > 11)];
        },
        M: function M(date, locale) {
          return monthToStr(date.getMonth(), true, locale);
        },
        S: function S(date) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getSeconds());
        },
        U: function U(date) {
          return date.getTime() / 1000;
        },
        W: function W(date, _, options) {
          return options.getWeek(date);
        },
        Y: function Y(date) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getFullYear(), 4);
        },
        d: function d(date) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getDate());
        },
        h: function h(date) {
          return date.getHours() % 12 ? date.getHours() % 12 : 12;
        },
        i: function i(date) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getMinutes());
        },
        j: function j(date) {
          return date.getDate();
        },
        l: function l(date, locale) {
          return locale.weekdays.longhand[date.getDay()];
        },
        m: function m(date) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["pad"])(date.getMonth() + 1);
        },
        n: function n(date) {
          return date.getMonth() + 1;
        },
        s: function s(date) {
          return date.getSeconds();
        },
        u: function u(date) {
          return date.getTime();
        },
        w: function w(date) {
          return date.getDay();
        },
        y: function y(date) {
          return String(date.getFullYear()).substring(2);
        }
      };
      /***/
    },

    /***/
    "i5S4":
    /*!********************************************************************!*\
      !*** ./node_modules/angular-calendar/fesm2015/angular-calendar.js ***!
      \********************************************************************/

    /*! exports provided: DAYS_OF_WEEK, CalendarA11y, CalendarAngularDateFormatter, CalendarCommonModule, CalendarDateFormatter, CalendarDayModule, CalendarDayViewComponent, CalendarEventTimesChangedEventType, CalendarEventTitleFormatter, CalendarModule, CalendarMomentDateFormatter, CalendarMonthModule, CalendarMonthViewComponent, CalendarNativeDateFormatter, CalendarUtils, CalendarView, CalendarWeekModule, CalendarWeekViewComponent, DateAdapter, MOMENT, collapseAnimation, getWeekViewPeriod, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */

    /***/
    function i5S4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarA11y", function () {
        return CalendarA11y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function () {
        return CalendarAngularDateFormatter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function () {
        return CalendarCommonModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function () {
        return CalendarDateFormatter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function () {
        return CalendarDayModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function () {
        return CalendarDayViewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function () {
        return CalendarEventTimesChangedEventType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function () {
        return CalendarEventTitleFormatter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarModule", function () {
        return CalendarModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function () {
        return CalendarMomentDateFormatter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function () {
        return CalendarMonthModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function () {
        return CalendarMonthViewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function () {
        return CalendarNativeDateFormatter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarUtils", function () {
        return CalendarUtils;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarView", function () {
        return CalendarView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function () {
        return CalendarWeekModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function () {
        return CalendarWeekViewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
        return DateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MOMENT", function () {
        return MOMENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "collapseAnimation", function () {
        return collapseAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function () {
        return getWeekViewPeriod;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return CalendarOpenDayEventsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return CalendarEventActionsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return CalendarEventTitleComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return CalendarTooltipWindowComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return CalendarTooltipDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵf", function () {
        return CalendarPreviousViewDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵg", function () {
        return CalendarNextViewDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵh", function () {
        return CalendarTodayDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵi", function () {
        return CalendarDatePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵj", function () {
        return CalendarEventTitlePipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵk", function () {
        return CalendarA11yPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵl", function () {
        return ClickDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵm", function () {
        return KeydownEnterDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵn", function () {
        return CalendarMonthCellComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵo", function () {
        return CalendarMonthViewHeaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵp", function () {
        return CalendarWeekViewHeaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵq", function () {
        return CalendarWeekViewEventComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵr", function () {
        return CalendarWeekViewHourSegmentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵs", function () {
        return CalendarWeekViewCurrentTimeMarkerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "b1EX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! positioning */
      "EwKL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var calendar_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! calendar-utils */
      "r5Jv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
        return calendar_utils__WEBPACK_IMPORTED_MODULE_6__["DAYS_OF_WEEK"];
      });
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-draggable-droppable */
      "QBGs");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /* harmony import */


      var angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-resizable-element */
      "yotz");

      var CalendarEventActionsComponent = /*#__PURE__*/_createClass(function CalendarEventActionsComponent() {
        _classCallCheck(this, CalendarEventActionsComponent);

        this.trackByActionId = function (index, action) {
          return action.id ? action.id : action;
        };
      });

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarEventActionsComponent.prototype, "event", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarEventActionsComponent.prototype, "customTemplate", void 0);
      CalendarEventActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-event-actions',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event, sourceEvent: $event })\"\n          (mwlKeydownEnter)=\"\n            action.onClick({ event: event, sourceEvent: $event })\n          \"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n          tabindex=\"0\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            { action: action } | calendarA11y: 'actionButtonLabel'\n          \"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
      })], CalendarEventActionsComponent);

      var CalendarEventTitleComponent = /*#__PURE__*/_createClass(function CalendarEventTitleComponent() {
        _classCallCheck(this, CalendarEventTitleComponent);
      });

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarEventTitleComponent.prototype, "event", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarEventTitleComponent.prototype, "view", void 0);
      CalendarEventTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-event-title',
        template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n        [attr.aria-hidden]=\"{} | calendarA11y: 'hideEventTitle'\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
      })], CalendarEventTitleComponent);

      var CalendarTooltipWindowComponent = /*#__PURE__*/_createClass(function CalendarTooltipWindowComponent() {
        _classCallCheck(this, CalendarTooltipWindowComponent);
      });

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarTooltipWindowComponent.prototype, "contents", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarTooltipWindowComponent.prototype, "placement", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarTooltipWindowComponent.prototype, "event", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);
      CalendarTooltipWindowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-tooltip-window',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\"\n    >\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
      })], CalendarTooltipWindowComponent);

      var CalendarTooltipDirective = /*#__PURE__*/function () {
        function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
        ) {
          _classCallCheck(this, CalendarTooltipDirective);

          this.elementRef = elementRef;
          this.injector = injector;
          this.renderer = renderer;
          this.viewContainerRef = viewContainerRef;
          this.document = document;
          this.placement = 'auto'; // tslint:disable-line no-input-rename

          this.delay = null; // tslint:disable-line no-input-rename

          this.cancelTooltipDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
        }

        _createClass(CalendarTooltipDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this.tooltipRef && (changes.contents || changes.customTemplate || changes.event)) {
              this.tooltipRef.instance.contents = this.contents;
              this.tooltipRef.instance.customTemplate = this.customTemplate;
              this.tooltipRef.instance.event = this.event;
              this.tooltipRef.changeDetectorRef.markForCheck();

              if (!this.contents) {
                this.hide();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.hide();
          }
        }, {
          key: "onMouseOver",
          value: function onMouseOver() {
            var _this90 = this;

            var delay$ = this.delay === null ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('now') : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay);
            delay$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.cancelTooltipDelay$)).subscribe(function () {
              _this90.show();
            });
          }
        }, {
          key: "onMouseOut",
          value: function onMouseOut() {
            this.hide();
          }
        }, {
          key: "show",
          value: function show() {
            var _this91 = this;

            if (!this.tooltipRef && this.contents) {
              this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
              this.tooltipRef.instance.contents = this.contents;
              this.tooltipRef.instance.customTemplate = this.customTemplate;
              this.tooltipRef.instance.event = this.event;

              if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
              }

              requestAnimationFrame(function () {
                _this91.positionTooltip();
              });
            }
          }
        }, {
          key: "hide",
          value: function hide() {
            if (this.tooltipRef) {
              this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
              this.tooltipRef = null;
            }

            this.cancelTooltipDelay$.next();
          }
        }, {
          key: "positionTooltip",
          value: function positionTooltip() {
            var previousPositions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            if (this.tooltipRef) {
              this.tooltipRef.changeDetectorRef.detectChanges();
              this.tooltipRef.instance.placement = Object(positioning__WEBPACK_IMPORTED_MODULE_3__["positionElements"])(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody); // keep re-positioning the tooltip until the arrow position doesn't make a difference

              if (previousPositions.indexOf(this.tooltipRef.instance.placement) === -1) {
                this.positionTooltip([].concat(_toConsumableArray(previousPositions), [this.tooltipRef.instance.placement]));
              }
            }
          }
        }]);

        return CalendarTooltipDirective;
      }();

      CalendarTooltipDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mwlCalendarTooltip'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarTooltipDirective.prototype, "contents", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipPlacement'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarTooltipDirective.prototype, "placement", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipTemplate'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarTooltipDirective.prototype, "customTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipEvent'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarTooltipDirective.prototype, "event", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipAppendToBody'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarTooltipDirective.prototype, "appendToBody", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tooltipDelay'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarTooltipDirective.prototype, "delay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarTooltipDirective.prototype, "onMouseOver", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarTooltipDirective.prototype, "onMouseOut", null);
      CalendarTooltipDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[mwlCalendarTooltip]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], Object])], CalendarTooltipDirective);

      var DateAdapter = /*#__PURE__*/_createClass(function DateAdapter() {
        _classCallCheck(this, DateAdapter);
      });

      var CalendarView;

      (function (CalendarView) {
        CalendarView["Month"] = "month";
        CalendarView["Week"] = "week";
        CalendarView["Day"] = "day";
      })(CalendarView || (CalendarView = {}));

      var validateEvents = function validateEvents(events) {
        var warn = function warn() {
          var _console;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return (_console = console).warn.apply(_console, ['angular-calendar'].concat(args));
        };

        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["validateEvents"])(events, warn);
      };

      function isInside(outer, inner) {
        return Math.floor(outer.left) <= Math.ceil(inner.left) && Math.floor(inner.left) <= Math.ceil(outer.right) && Math.floor(outer.left) <= Math.ceil(inner.right) && Math.floor(inner.right) <= Math.ceil(outer.right) && Math.floor(outer.top) <= Math.ceil(inner.top) && Math.floor(inner.top) <= Math.ceil(outer.bottom) && Math.floor(outer.top) <= Math.ceil(inner.bottom) && Math.floor(inner.bottom) <= Math.ceil(outer.bottom);
      }

      function roundToNearest(amount, precision) {
        return Math.round(amount / precision) * precision;
      }

      var trackByEventId = function trackByEventId(index, event) {
        return event.id ? event.id : event;
      };

      var trackByWeekDayHeaderDate = function trackByWeekDayHeaderDate(index, day) {
        return day.date.toISOString();
      };

      var trackByHourSegment = function trackByHourSegment(index, segment) {
        return segment.date.toISOString();
      };

      var trackByHour = function trackByHour(index, hour) {
        return hour.segments[0].date.toISOString();
      };

      var trackByWeekAllDayEvent = function trackByWeekAllDayEvent(index, weekEvent) {
        return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
      };

      var trackByWeekTimeEvent = function trackByWeekTimeEvent(index, weekEvent) {
        return weekEvent.event.id ? weekEvent.event.id : weekEvent.event;
      };

      var MINUTES_IN_HOUR = 60;

      function getPixelAmountInMinutes(hourSegments, hourSegmentHeight) {
        return MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
      }

      function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
        var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
        var pixelAmountInMinutes = getPixelAmountInMinutes(hourSegments, hourSegmentHeight);
        return draggedInPixelsSnapSize * pixelAmountInMinutes;
      }

      function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
        return getPixelAmountInMinutes(hourSegments, hourSegmentHeight) * hourSegmentHeight;
      }

      function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
        if (event.end) {
          return event.end;
        } else {
          return dateAdapter.addMinutes(event.start, minimumMinutes);
        }
      }

      function addDaysWithExclusions(dateAdapter, date, days, excluded) {
        var daysCounter = 0;
        var daysToAdd = 0;
        var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
        var result = date;

        while (daysToAdd <= Math.abs(days)) {
          result = changeDays(date, daysCounter);
          var day = dateAdapter.getDay(result);

          if (excluded.indexOf(day) === -1) {
            daysToAdd++;
          }

          daysCounter++;
        }

        return result;
      }

      function isDraggedWithinPeriod(newStart, newEnd, period) {
        var end = newEnd || newStart;
        return period.start <= newStart && newStart <= period.end || period.start <= end && end <= period.end;
      }

      function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
        return dropEvent.dropData && dropEvent.dropData.event && (dropEvent.dropData.calendarId !== calendarId || dropEvent.dropData.event.allDay && !allDay || !dropEvent.dropData.event.allDay && allDay);
      }

      function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn) {
        var excluded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var daysInWeek = arguments.length > 4 ? arguments[4] : undefined;
        var viewStart = daysInWeek ? dateAdapter.startOfDay(viewDate) : dateAdapter.startOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        });
        var endOfWeek = dateAdapter.endOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        });

        while (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1 && viewStart < endOfWeek) {
          viewStart = dateAdapter.addDays(viewStart, 1);
        }

        if (daysInWeek) {
          var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
          return {
            viewStart: viewStart,
            viewEnd: viewEnd
          };
        } else {
          var _viewEnd = endOfWeek;

          while (excluded.indexOf(dateAdapter.getDay(_viewEnd)) > -1 && _viewEnd > viewStart) {
            _viewEnd = dateAdapter.subDays(_viewEnd, 1);
          }

          return {
            viewStart: viewStart,
            viewEnd: _viewEnd
          };
        }
      }

      function isWithinThreshold(_ref21) {
        var x = _ref21.x,
            y = _ref21.y;
        var DRAG_THRESHOLD = 1;
        return Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
      }
      /**
       * Change the view date to the previous view. For example:
       *
       * ```typescript
       * <button
       *  mwlCalendarPreviousView
       *  [(viewDate)]="viewDate"
       *  [view]="view">
       *  Previous
       * </button>
       * ```
       */


      var CalendarPreviousViewDirective = /*#__PURE__*/function () {
        function CalendarPreviousViewDirective(dateAdapter) {
          _classCallCheck(this, CalendarPreviousViewDirective);

          this.dateAdapter = dateAdapter;
          /**
           * Days to skip when going back by 1 day
           */

          this.excludeDays = [];
          /**
           * Called when the view date is changed
           */

          this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /**
         * @hidden
         */


        _createClass(CalendarPreviousViewDirective, [{
          key: "onClick",
          value: function onClick() {
            var subFn = {
              day: this.dateAdapter.subDays,
              week: this.dateAdapter.subWeeks,
              month: this.dateAdapter.subMonths
            }[this.view];

            if (this.view === CalendarView.Day) {
              this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
            } else if (this.view === CalendarView.Week && this.daysInWeek) {
              this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
            } else {
              this.viewDateChange.emit(subFn(this.viewDate, 1));
            }
          }
        }]);

        return CalendarPreviousViewDirective;
      }();

      CalendarPreviousViewDirective.ctorParameters = function () {
        return [{
          type: DateAdapter
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarPreviousViewDirective.prototype, "view", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarPreviousViewDirective.prototype, "onClick", null);
      CalendarPreviousViewDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[mwlCalendarPreviousView]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarPreviousViewDirective);
      /**
       * Change the view date to the next view. For example:
       *
       * ```typescript
       * <button
       *  mwlCalendarNextView
       *  [(viewDate)]="viewDate"
       *  [view]="view">
       *  Next
       * </button>
       * ```
       */

      var CalendarNextViewDirective = /*#__PURE__*/function () {
        function CalendarNextViewDirective(dateAdapter) {
          _classCallCheck(this, CalendarNextViewDirective);

          this.dateAdapter = dateAdapter;
          /**
           * Days to skip when going forward by 1 day
           */

          this.excludeDays = [];
          /**
           * Called when the view date is changed
           */

          this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /**
         * @hidden
         */


        _createClass(CalendarNextViewDirective, [{
          key: "onClick",
          value: function onClick() {
            var addFn = {
              day: this.dateAdapter.addDays,
              week: this.dateAdapter.addWeeks,
              month: this.dateAdapter.addMonths
            }[this.view];

            if (this.view === CalendarView.Day) {
              this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, 1, this.excludeDays));
            } else if (this.view === CalendarView.Week && this.daysInWeek) {
              this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
            } else {
              this.viewDateChange.emit(addFn(this.viewDate, 1));
            }
          }
        }]);

        return CalendarNextViewDirective;
      }();

      CalendarNextViewDirective.ctorParameters = function () {
        return [{
          type: DateAdapter
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarNextViewDirective.prototype, "view", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarNextViewDirective.prototype, "viewDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarNextViewDirective.prototype, "excludeDays", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarNextViewDirective.prototype, "daysInWeek", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarNextViewDirective.prototype, "viewDateChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarNextViewDirective.prototype, "onClick", null);
      CalendarNextViewDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[mwlCalendarNextView]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarNextViewDirective);
      /**
       * Change the view date to the current day. For example:
       *
       * ```typescript
       * <button
       *  mwlCalendarToday
       *  [(viewDate)]="viewDate">
       *  Today
       * </button>
       * ```
       */

      var CalendarTodayDirective = /*#__PURE__*/function () {
        function CalendarTodayDirective(dateAdapter) {
          _classCallCheck(this, CalendarTodayDirective);

          this.dateAdapter = dateAdapter;
          /**
           * Called when the view date is changed
           */

          this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /**
         * @hidden
         */


        _createClass(CalendarTodayDirective, [{
          key: "onClick",
          value: function onClick() {
            this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
          }
        }]);

        return CalendarTodayDirective;
      }();

      CalendarTodayDirective.ctorParameters = function () {
        return [{
          type: DateAdapter
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarTodayDirective.prototype, "viewDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarTodayDirective.prototype, "viewDateChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], CalendarTodayDirective.prototype, "onClick", null);
      CalendarTodayDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[mwlCalendarToday]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarTodayDirective);
      /**
       * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
       */

      var CalendarAngularDateFormatter = /*#__PURE__*/function () {
        function CalendarAngularDateFormatter(dateAdapter) {
          _classCallCheck(this, CalendarAngularDateFormatter);

          this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */


        _createClass(CalendarAngularDateFormatter, [{
          key: "monthViewColumnHeader",
          value: function monthViewColumnHeader(_ref22) {
            var date = _ref22.date,
                locale = _ref22.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE', locale);
          }
          /**
           * The month view cell day number
           */

        }, {
          key: "monthViewDayNumber",
          value: function monthViewDayNumber(_ref23) {
            var date = _ref23.date,
                locale = _ref23.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'd', locale);
          }
          /**
           * The month view title
           */

        }, {
          key: "monthViewTitle",
          value: function monthViewTitle(_ref24) {
            var date = _ref24.date,
                locale = _ref24.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'LLLL y', locale);
          }
          /**
           * The week view header week day labels
           */

        }, {
          key: "weekViewColumnHeader",
          value: function weekViewColumnHeader(_ref25) {
            var date = _ref25.date,
                locale = _ref25.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE', locale);
          }
          /**
           * The week view sub header day and month labels
           */

        }, {
          key: "weekViewColumnSubHeader",
          value: function weekViewColumnSubHeader(_ref26) {
            var date = _ref26.date,
                locale = _ref26.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'MMM d', locale);
          }
          /**
           * The week view title
           */

        }, {
          key: "weekViewTitle",
          value: function weekViewTitle(_ref27) {
            var date = _ref27.date,
                locale = _ref27.locale,
                weekStartsOn = _ref27.weekStartsOn,
                excludeDays = _ref27.excludeDays,
                daysInWeek = _ref27.daysInWeek;

            var _getWeekViewPeriod = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
                viewStart = _getWeekViewPeriod.viewStart,
                viewEnd = _getWeekViewPeriod.viewEnd;

            var format = function format(dateToFormat, showYear) {
              return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), locale);
            };

            return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
          }
          /**
           * The time formatting down the left hand side of the week view
           */

        }, {
          key: "weekViewHour",
          value: function weekViewHour(_ref28) {
            var date = _ref28.date,
                locale = _ref28.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'h a', locale);
          }
          /**
           * The time formatting down the left hand side of the day view
           */

        }, {
          key: "dayViewHour",
          value: function dayViewHour(_ref29) {
            var date = _ref29.date,
                locale = _ref29.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'h a', locale);
          }
          /**
           * The day view title
           */

        }, {
          key: "dayViewTitle",
          value: function dayViewTitle(_ref30) {
            var date = _ref30.date,
                locale = _ref30.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE, MMMM d, y', locale);
          }
        }]);

        return CalendarAngularDateFormatter;
      }();

      CalendarAngularDateFormatter.ctorParameters = function () {
        return [{
          type: DateAdapter
        }];
      };

      CalendarAngularDateFormatter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarAngularDateFormatter);
      /**
       * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
       *
       * If you wish, you may override any of the defaults via angulars DI. For example:
       *
       * ```typescript
       * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
       * import { formatDate } from '@angular/common';
       * import { Injectable } from '@angular/core';
       *
       * @Injectable()
       * class CustomDateFormatter extends CalendarDateFormatter {
       *
       *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
       *     return formatDate(date, 'EEE', locale); // use short week days
       *   }
       *
       * }
       *
       * // in your component that uses the calendar
       * providers: [{
       *   provide: CalendarDateFormatter,
       *   useClass: CustomDateFormatter
       * }]
       * ```
       */

      var CalendarDateFormatter = /*#__PURE__*/function (_CalendarAngularDateF) {
        _inherits(CalendarDateFormatter, _CalendarAngularDateF);

        var _super2 = _createSuper(CalendarDateFormatter);

        function CalendarDateFormatter() {
          _classCallCheck(this, CalendarDateFormatter);

          return _super2.apply(this, arguments);
        }

        return _createClass(CalendarDateFormatter);
      }(CalendarAngularDateFormatter);

      CalendarDateFormatter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CalendarDateFormatter);
      /**
       * This pipe is primarily for rendering the current view title. Example usage:
       * ```typescript
       * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
       * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
       * ```
       */

      var CalendarDatePipe = /*#__PURE__*/function () {
        function CalendarDatePipe(dateFormatter, locale) {
          _classCallCheck(this, CalendarDatePipe);

          this.dateFormatter = dateFormatter;
          this.locale = locale;
        }

        _createClass(CalendarDatePipe, [{
          key: "transform",
          value: function transform(date, method) {
            var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;
            var weekStartsOn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
            var excludeDays = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
            var daysInWeek = arguments.length > 5 ? arguments[5] : undefined;

            if (typeof this.dateFormatter[method] === 'undefined') {
              var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(function (iMethod) {
                return iMethod !== 'constructor';
              });
              throw new Error("".concat(method, " is not a valid date formatter. Can only be one of ").concat(allowedMethods.join(', ')));
            }

            return this.dateFormatter[method]({
              date: date,
              locale: locale,
              weekStartsOn: weekStartsOn,
              excludeDays: excludeDays,
              daysInWeek: daysInWeek
            });
          }
        }]);

        return CalendarDatePipe;
      }();

      CalendarDatePipe.ctorParameters = function () {
        return [{
          type: CalendarDateFormatter
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }];
      };

      CalendarDatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'calendarDate'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CalendarDateFormatter, String])], CalendarDatePipe);
      /**
       * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
       *
       * ```typescript
       * import { Injectable } from '@angular/core';
       * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
       *
       * @Injectable()
       * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
       *
       *   month(event: CalendarEvent): string {
       *     return `Custom prefix: ${event.title}`;
       *   }
       *
       * }
       *
       * // in your component
       * providers: [{
       *  provide: CalendarEventTitleFormatter,
       *  useClass: CustomEventTitleFormatter
       * }]
       * ```
       */

      var CalendarEventTitleFormatter = /*#__PURE__*/function () {
        function CalendarEventTitleFormatter() {
          _classCallCheck(this, CalendarEventTitleFormatter);
        }

        _createClass(CalendarEventTitleFormatter, [{
          key: "month",
          value:
          /**
           * The month view event title.
           */
          function month(event, title) {
            return event.title;
          }
          /**
           * The month view event tooltip. Return a falsey value from this to disable the tooltip.
           */

        }, {
          key: "monthTooltip",
          value: function monthTooltip(event, title) {
            return event.title;
          }
          /**
           * The week view event title.
           */

        }, {
          key: "week",
          value: function week(event, title) {
            return event.title;
          }
          /**
           * The week view event tooltip. Return a falsey value from this to disable the tooltip.
           */

        }, {
          key: "weekTooltip",
          value: function weekTooltip(event, title) {
            return event.title;
          }
          /**
           * The day view event title.
           */

        }, {
          key: "day",
          value: function day(event, title) {
            return event.title;
          }
          /**
           * The day view event tooltip. Return a falsey value from this to disable the tooltip.
           */

        }, {
          key: "dayTooltip",
          value: function dayTooltip(event, title) {
            return event.title;
          }
        }]);

        return CalendarEventTitleFormatter;
      }();

      var CalendarEventTitlePipe = /*#__PURE__*/function () {
        function CalendarEventTitlePipe(calendarEventTitle) {
          _classCallCheck(this, CalendarEventTitlePipe);

          this.calendarEventTitle = calendarEventTitle;
        }

        _createClass(CalendarEventTitlePipe, [{
          key: "transform",
          value: function transform(title, titleType, event) {
            return this.calendarEventTitle[titleType](event, title);
          }
        }]);

        return CalendarEventTitlePipe;
      }();

      CalendarEventTitlePipe.ctorParameters = function () {
        return [{
          type: CalendarEventTitleFormatter
        }];
      };

      CalendarEventTitlePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'calendarEventTitle'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CalendarEventTitleFormatter])], CalendarEventTitlePipe);

      var ClickDirective = /*#__PURE__*/function () {
        function ClickDirective(renderer, elm, document) {
          _classCallCheck(this, ClickDirective);

          this.renderer = renderer;
          this.elm = elm;
          this.document = document;
          this.clickListenerDisabled = false;
          this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line

          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }

        _createClass(ClickDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this92 = this;

            if (!this.clickListenerDisabled) {
              this.listen().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (event) {
                event.stopPropagation();

                _this92.click.emit(event);
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
          }
        }, {
          key: "listen",
          value: function listen() {
            var _this93 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
              return _this93.renderer.listen(_this93.elm.nativeElement, 'click', function (event) {
                observer.next(event);
              });
            });
          }
        }]);

        return ClickDirective;
      }();

      ClickDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ClickDirective.prototype, "clickListenerDisabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('mwlClick'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ClickDirective.prototype, "click", void 0);
      ClickDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[mwlClick]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])], ClickDirective);

      var KeydownEnterDirective = /*#__PURE__*/function () {
        function KeydownEnterDirective(host, ngZone, renderer) {
          _classCallCheck(this, KeydownEnterDirective);

          this.host = host;
          this.ngZone = ngZone;
          this.renderer = renderer;
          this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line

          this.keydownListener = null;
        }

        _createClass(KeydownEnterDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this94 = this;

            this.ngZone.runOutsideAngular(function () {
              _this94.keydownListener = _this94.renderer.listen(_this94.host.nativeElement, 'keydown', function (event) {
                if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
                  event.preventDefault();
                  event.stopPropagation();

                  _this94.ngZone.run(function () {
                    _this94.keydown.emit(event);
                  });
                }
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.keydownListener !== null) {
              this.keydownListener();
              this.keydownListener = null;
            }
          }
        }]);

        return KeydownEnterDirective;
      }();

      KeydownEnterDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('mwlKeydownEnter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], KeydownEnterDirective.prototype, "keydown", void 0);
      KeydownEnterDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[mwlKeydownEnter]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], KeydownEnterDirective);

      var CalendarUtils = /*#__PURE__*/function () {
        function CalendarUtils(dateAdapter) {
          _classCallCheck(this, CalendarUtils);

          this.dateAdapter = dateAdapter;
        }

        _createClass(CalendarUtils, [{
          key: "getMonthView",
          value: function getMonthView(args) {
            return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getMonthView"])(this.dateAdapter, args);
          }
        }, {
          key: "getWeekViewHeader",
          value: function getWeekViewHeader(args) {
            return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getWeekViewHeader"])(this.dateAdapter, args);
          }
        }, {
          key: "getWeekView",
          value: function getWeekView(args) {
            return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_6__["getWeekView"])(this.dateAdapter, args);
          }
        }]);

        return CalendarUtils;
      }();

      CalendarUtils.ctorParameters = function () {
        return [{
          type: DateAdapter
        }];
      };

      CalendarUtils = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarUtils);
      /**
       * This class is responsible for adding accessibility to the calendar.
       * You may override any of its methods via angulars DI to suit your requirements.
       * For example:
       *
       * ```typescript
       * import { A11yParams, CalendarA11y } from 'angular-calendar';
       * import { formatDate, I18nPluralPipe } from '@angular/common';
       * import { Injectable } from '@angular/core';
       *
       * // adding your own a11y params
       * export interface CustomA11yParams extends A11yParams {
       *   isDrSuess?: boolean;
       * }
       *
       * @Injectable()
       * export class CustomCalendarA11y extends CalendarA11y {
       *   constructor(protected i18nPlural: I18nPluralPipe) {
       *     super(i18nPlural);
       *   }
       *
       *   // overriding a function
       *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
       *     if (isDrSuess) {
       *       return `
       *         ${formatDate(date, 'EEEE MMMM d', locale)}
       *          Today you are you! That is truer than true! There is no one alive
       *          who is you-er than you!
       *       `;
       *     }
       *   }
       * }
       *
       * // in your component that uses the calendar
       * providers: [{
       *  provide: CalendarA11y,
       *  useClass: CustomCalendarA11y
       * }]
       * ```
       */

      var CalendarA11y = /*#__PURE__*/function () {
        function CalendarA11y(i18nPlural) {
          _classCallCheck(this, CalendarA11y);

          this.i18nPlural = i18nPlural;
        }
        /**
         * Aria label for the badges/date of a cell
         * @example: `Saturday October 19 1 event click to expand`
         */


        _createClass(CalendarA11y, [{
          key: "monthCell",
          value: function monthCell(_ref31) {
            var day = _ref31.day,
                locale = _ref31.locale;

            if (day.badgeTotal > 0) {
              return "\n        ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(day.date, 'EEEE MMMM d', locale), ",\n        ").concat(this.i18nPlural.transform(day.badgeTotal, {
                '=0': 'No events',
                '=1': 'One event',
                other: '# events'
              }), ",\n         click to expand\n      ");
            } else {
              return "".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(day.date, 'EEEE MMMM d', locale));
            }
          }
          /**
           * Aria label for the open day events start landmark
           * @example: `Saturday October 19 expanded view`
           */

        }, {
          key: "openDayEventsLandmark",
          value: function openDayEventsLandmark(_ref32) {
            var date = _ref32.date,
                locale = _ref32.locale;
            return "\n      Beginning of expanded view for ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE MMMM dd', locale), "\n    ");
          }
          /**
           * Aria label for alert that a day in the month view was expanded
           * @example: `Saturday October 19 expanded`
           */

        }, {
          key: "openDayEventsAlert",
          value: function openDayEventsAlert(_ref33) {
            var date = _ref33.date,
                locale = _ref33.locale;
            return "".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE MMMM dd', locale), " expanded");
          }
          /**
           * Descriptive aria label for an event
           * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
           */

        }, {
          key: "eventDescription",
          value: function eventDescription(_ref34) {
            var event = _ref34.event,
                locale = _ref34.locale;

            if (event.allDay === true) {
              return this.allDayEventDescription({
                event: event,
                locale: locale
              });
            }

            var aria = "\n      ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.start, 'EEEE MMMM dd', locale), ",\n      ").concat(event.title, ", from ").concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.start, 'hh:mm a', locale), "\n    ");

            if (event.end) {
              return aria + " to ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.end, 'hh:mm a', locale));
            }

            return aria;
          }
          /**
           * Descriptive aria label for an all day event
           * @example:
           * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
           */

        }, {
          key: "allDayEventDescription",
          value: function allDayEventDescription(_ref35) {
            var event = _ref35.event,
                locale = _ref35.locale;
            var aria = "\n      ".concat(event.title, ", event spans multiple days:\n      start time ").concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.start, 'MMMM dd hh:mm a', locale), "\n    ");

            if (event.end) {
              return aria + ", stop time ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(event.end, 'MMMM d hh:mm a', locale));
            }

            return aria + ", no stop time";
          }
          /**
           * Aria label for the calendar event actions icons
           * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
           */

        }, {
          key: "actionButtonLabel",
          value: function actionButtonLabel(_ref36) {
            var action = _ref36.action;
            return action.a11yLabel;
          }
          /**
           * @returns {number} Tab index to be given to month cells
           */

        }, {
          key: "monthCellTabIndex",
          value: function monthCellTabIndex() {
            return 0;
          }
          /**
           * @returns true if the events inside the month cell should be aria-hidden
           */

        }, {
          key: "hideMonthCellEvents",
          value: function hideMonthCellEvents() {
            return true;
          }
          /**
           * @returns true if event titles should be aria-hidden (global)
           */

        }, {
          key: "hideEventTitle",
          value: function hideEventTitle() {
            return true;
          }
          /**
           * @returns true if hour segments in the week view should be aria-hidden
           */

        }, {
          key: "hideWeekHourSegment",
          value: function hideWeekHourSegment() {
            return true;
          }
          /**
           * @returns true if hour segments in the day view should be aria-hidden
           */

        }, {
          key: "hideDayHourSegment",
          value: function hideDayHourSegment() {
            return true;
          }
        }]);

        return CalendarA11y;
      }();

      CalendarA11y.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]
        }];
      };

      CalendarA11y = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]])], CalendarA11y);
      /**
       * This pipe is primarily for rendering aria labels. Example usage:
       * ```typescript
       * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
       * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
       * ```
       */

      var CalendarA11yPipe = /*#__PURE__*/function () {
        function CalendarA11yPipe(calendarA11y, locale) {
          _classCallCheck(this, CalendarA11yPipe);

          this.calendarA11y = calendarA11y;
          this.locale = locale;
        }

        _createClass(CalendarA11yPipe, [{
          key: "transform",
          value: function transform(a11yParams, method) {
            a11yParams.locale = a11yParams.locale || this.locale;

            if (typeof this.calendarA11y[method] === 'undefined') {
              var allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter(function (iMethod) {
                return iMethod !== 'constructor';
              });
              throw new Error("".concat(method, " is not a valid a11y method. Can only be one of ").concat(allowedMethods.join(', ')));
            }

            return this.calendarA11y[method](a11yParams);
          }
        }]);

        return CalendarA11yPipe;
      }();

      CalendarA11yPipe.ctorParameters = function () {
        return [{
          type: CalendarA11y
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }];
      };

      CalendarA11yPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'calendarA11y'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CalendarA11y, String])], CalendarA11yPipe);
      var MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('Moment');
      /**
       * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
       *
       * ```typescript
       * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
       * import moment from 'moment';
       *
       * // in your component
       * provide: [{
       *   provide: MOMENT, useValue: moment
       * }, {
       *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
       * }]
       *
       * ```
       */

      var CalendarMomentDateFormatter = /*#__PURE__*/function () {
        /**
         * @hidden
         */
        function CalendarMomentDateFormatter(moment, dateAdapter) {
          _classCallCheck(this, CalendarMomentDateFormatter);

          this.moment = moment;
          this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */


        _createClass(CalendarMomentDateFormatter, [{
          key: "monthViewColumnHeader",
          value: function monthViewColumnHeader(_ref37) {
            var date = _ref37.date,
                locale = _ref37.locale;
            return this.moment(date).locale(locale).format('dddd');
          }
          /**
           * The month view cell day number
           */

        }, {
          key: "monthViewDayNumber",
          value: function monthViewDayNumber(_ref38) {
            var date = _ref38.date,
                locale = _ref38.locale;
            return this.moment(date).locale(locale).format('D');
          }
          /**
           * The month view title
           */

        }, {
          key: "monthViewTitle",
          value: function monthViewTitle(_ref39) {
            var date = _ref39.date,
                locale = _ref39.locale;
            return this.moment(date).locale(locale).format('MMMM YYYY');
          }
          /**
           * The week view header week day labels
           */

        }, {
          key: "weekViewColumnHeader",
          value: function weekViewColumnHeader(_ref40) {
            var date = _ref40.date,
                locale = _ref40.locale;
            return this.moment(date).locale(locale).format('dddd');
          }
          /**
           * The week view sub header day and month labels
           */

        }, {
          key: "weekViewColumnSubHeader",
          value: function weekViewColumnSubHeader(_ref41) {
            var date = _ref41.date,
                locale = _ref41.locale;
            return this.moment(date).locale(locale).format('MMM D');
          }
          /**
           * The week view title
           */

        }, {
          key: "weekViewTitle",
          value: function weekViewTitle(_ref42) {
            var _this95 = this;

            var date = _ref42.date,
                locale = _ref42.locale,
                weekStartsOn = _ref42.weekStartsOn,
                excludeDays = _ref42.excludeDays,
                daysInWeek = _ref42.daysInWeek;

            var _getWeekViewPeriod2 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
                viewStart = _getWeekViewPeriod2.viewStart,
                viewEnd = _getWeekViewPeriod2.viewEnd;

            var format = function format(dateToFormat, showYear) {
              return _this95.moment(dateToFormat).locale(locale).format('MMM D' + (showYear ? ', YYYY' : ''));
            };

            return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
          }
          /**
           * The time formatting down the left hand side of the week view
           */

        }, {
          key: "weekViewHour",
          value: function weekViewHour(_ref43) {
            var date = _ref43.date,
                locale = _ref43.locale;
            return this.moment(date).locale(locale).format('ha');
          }
          /**
           * The time formatting down the left hand side of the day view
           */

        }, {
          key: "dayViewHour",
          value: function dayViewHour(_ref44) {
            var date = _ref44.date,
                locale = _ref44.locale;
            return this.moment(date).locale(locale).format('ha');
          }
          /**
           * The day view title
           */

        }, {
          key: "dayViewTitle",
          value: function dayViewTitle(_ref45) {
            var date = _ref45.date,
                locale = _ref45.locale;
            return this.moment(date).locale(locale).format('dddd, D MMMM, YYYY');
          }
        }]);

        return CalendarMomentDateFormatter;
      }();

      CalendarMomentDateFormatter.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MOMENT]
          }]
        }, {
          type: DateAdapter
        }];
      };

      CalendarMomentDateFormatter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(MOMENT)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, DateAdapter])], CalendarMomentDateFormatter);
      /**
       * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
       *
       * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
       */

      var CalendarNativeDateFormatter = /*#__PURE__*/function () {
        function CalendarNativeDateFormatter(dateAdapter) {
          _classCallCheck(this, CalendarNativeDateFormatter);

          this.dateAdapter = dateAdapter;
        }
        /**
         * The month view header week day labels
         */


        _createClass(CalendarNativeDateFormatter, [{
          key: "monthViewColumnHeader",
          value: function monthViewColumnHeader(_ref46) {
            var date = _ref46.date,
                locale = _ref46.locale;
            return new Intl.DateTimeFormat(locale, {
              weekday: 'long'
            }).format(date);
          }
          /**
           * The month view cell day number
           */

        }, {
          key: "monthViewDayNumber",
          value: function monthViewDayNumber(_ref47) {
            var date = _ref47.date,
                locale = _ref47.locale;
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric'
            }).format(date);
          }
          /**
           * The month view title
           */

        }, {
          key: "monthViewTitle",
          value: function monthViewTitle(_ref48) {
            var date = _ref48.date,
                locale = _ref48.locale;
            return new Intl.DateTimeFormat(locale, {
              year: 'numeric',
              month: 'long'
            }).format(date);
          }
          /**
           * The week view header week day labels
           */

        }, {
          key: "weekViewColumnHeader",
          value: function weekViewColumnHeader(_ref49) {
            var date = _ref49.date,
                locale = _ref49.locale;
            return new Intl.DateTimeFormat(locale, {
              weekday: 'long'
            }).format(date);
          }
          /**
           * The week view sub header day and month labels
           */

        }, {
          key: "weekViewColumnSubHeader",
          value: function weekViewColumnSubHeader(_ref50) {
            var date = _ref50.date,
                locale = _ref50.locale;
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric',
              month: 'short'
            }).format(date);
          }
          /**
           * The week view title
           */

        }, {
          key: "weekViewTitle",
          value: function weekViewTitle(_ref51) {
            var date = _ref51.date,
                locale = _ref51.locale,
                weekStartsOn = _ref51.weekStartsOn,
                excludeDays = _ref51.excludeDays,
                daysInWeek = _ref51.daysInWeek;

            var _getWeekViewPeriod3 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
                viewStart = _getWeekViewPeriod3.viewStart,
                viewEnd = _getWeekViewPeriod3.viewEnd;

            var format = function format(dateToFormat, showYear) {
              return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'short',
                year: showYear ? 'numeric' : undefined
              }).format(dateToFormat);
            };

            return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
          }
          /**
           * The time formatting down the left hand side of the week view
           */

        }, {
          key: "weekViewHour",
          value: function weekViewHour(_ref52) {
            var date = _ref52.date,
                locale = _ref52.locale;
            return new Intl.DateTimeFormat(locale, {
              hour: 'numeric'
            }).format(date);
          }
          /**
           * The time formatting down the left hand side of the day view
           */

        }, {
          key: "dayViewHour",
          value: function dayViewHour(_ref53) {
            var date = _ref53.date,
                locale = _ref53.locale;
            return new Intl.DateTimeFormat(locale, {
              hour: 'numeric'
            }).format(date);
          }
          /**
           * The day view title
           */

        }, {
          key: "dayViewTitle",
          value: function dayViewTitle(_ref54) {
            var date = _ref54.date,
                locale = _ref54.locale;
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              weekday: 'long'
            }).format(date);
          }
        }]);

        return CalendarNativeDateFormatter;
      }();

      CalendarNativeDateFormatter.ctorParameters = function () {
        return [{
          type: DateAdapter
        }];
      };

      CalendarNativeDateFormatter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarNativeDateFormatter);
      var CalendarEventTimesChangedEventType;

      (function (CalendarEventTimesChangedEventType) {
        CalendarEventTimesChangedEventType["Drag"] = "drag";
        CalendarEventTimesChangedEventType["Drop"] = "drop";
        CalendarEventTimesChangedEventType["Resize"] = "resize";
      })(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));

      var CalendarCommonModule_1;
      /**
       * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
       *
       * ```typescript
       * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
       *
       * @NgModule({
       *   imports: [
       *     CalendarCommonModule.forRoot(),
       *     CalendarMonthModule
       *   ]
       * })
       * class MyModule {}
       * ```
       *
       */

      var CalendarCommonModule = CalendarCommonModule_1 = /*#__PURE__*/function () {
        function CalendarCommonModule() {
          _classCallCheck(this, CalendarCommonModule);
        }

        _createClass(CalendarCommonModule, null, [{
          key: "forRoot",
          value: function forRoot(dateAdapter) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return {
              ngModule: CalendarCommonModule_1,
              providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
            };
          }
        }]);

        return CalendarCommonModule;
      }();

      CalendarCommonModule = CalendarCommonModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [CalendarEventActionsComponent, CalendarEventTitleComponent, CalendarTooltipWindowComponent, CalendarTooltipDirective, CalendarPreviousViewDirective, CalendarNextViewDirective, CalendarTodayDirective, CalendarDatePipe, CalendarEventTitlePipe, CalendarA11yPipe, ClickDirective, KeydownEnterDirective],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"]],
        entryComponents: [CalendarTooltipWindowComponent]
      })], CalendarCommonModule);
      /**
       * Shows all events on a given month. Example usage:
       *
       * ```typescript
       * <mwl-calendar-month-view
       *  [viewDate]="viewDate"
       *  [events]="events">
       * </mwl-calendar-month-view>
       * ```
       */

      var CalendarMonthViewComponent = /*#__PURE__*/function () {
        /**
         * @hidden
         */
        function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
          var _this96 = this;

          _classCallCheck(this, CalendarMonthViewComponent);

          this.cdr = cdr;
          this.utils = utils;
          this.dateAdapter = dateAdapter;
          /**
           * An array of events to display on view.
           * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
           */

          this.events = [];
          /**
           * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
           */

          this.excludeDays = [];
          /**
           * Whether the events list for the day of the `viewDate` option is visible or not
           */

          this.activeDayIsOpen = false;
          /**
           * The placement of the event tooltip
           */

          this.tooltipPlacement = 'auto';
          /**
           * Whether to append tooltips to the body or next to the trigger element
           */

          this.tooltipAppendToBody = true;
          /**
           * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
           * will be displayed immediately.
           */

          this.tooltipDelay = null;
          /**
           * An output that will be called before the view is rendered for the current month.
           * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
           */

          this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Called when the day cell is clicked
           */

          this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Called when the event title is clicked
           */

          this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Called when a header week day is clicked. Returns ISO day number.
           */

          this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Called when an event is dragged and dropped
           */

          this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @hidden
           */

          this.trackByRowOffset = function (index, offset) {
            return _this96.view.days.slice(offset, _this96.view.totalDaysVisibleInWeek).map(function (day) {
              return day.date.toISOString();
            }).join('-');
          };
          /**
           * @hidden
           */


          this.trackByDate = function (index, day) {
            return day.date.toISOString();
          };

          this.locale = locale;
        }
        /**
         * @hidden
         */


        _createClass(CalendarMonthViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this97 = this;

            if (this.refresh) {
              this.refreshSubscription = this.refresh.subscribe(function () {
                _this97.refreshAll();

                _this97.cdr.markForCheck();
              });
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
            var refreshBody = changes.viewDate || changes.events || changes.excludeDays || changes.weekendDays;

            if (refreshHeader) {
              this.refreshHeader();
            }

            if (changes.events) {
              validateEvents(this.events);
            }

            if (refreshBody) {
              this.refreshBody();
            }

            if (refreshHeader || refreshBody) {
              this.emitBeforeViewRender();
            }

            if (changes.activeDayIsOpen || changes.viewDate || changes.events || changes.excludeDays || changes.activeDay) {
              this.checkActiveDayIsOpen();
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.refreshSubscription) {
              this.refreshSubscription.unsubscribe();
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "toggleDayHighlight",
          value: function toggleDayHighlight(event, isHighlighted) {
            this.view.days.forEach(function (day) {
              if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor = event.color && event.color.secondary || '#D1E8FF';
              } else {
                delete day.backgroundColor;
              }
            });
          }
          /**
           * @hidden
           */

        }, {
          key: "eventDropped",
          value: function eventDropped(droppedOn, event, draggedFrom) {
            if (droppedOn !== draggedFrom) {
              var year = this.dateAdapter.getYear(droppedOn.date);
              var month = this.dateAdapter.getMonth(droppedOn.date);
              var date = this.dateAdapter.getDate(droppedOn.date);
              var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
              var newEnd;

              if (event.end) {
                var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
              }

              this.eventTimesChanged.emit({
                event: event,
                newStart: newStart,
                newEnd: newEnd,
                day: droppedOn,
                type: CalendarEventTimesChangedEventType.Drop
              });
            }
          }
        }, {
          key: "refreshHeader",
          value: function refreshHeader() {
            this.columnHeaders = this.utils.getWeekViewHeader({
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              weekendDays: this.weekendDays
            });
          }
        }, {
          key: "refreshBody",
          value: function refreshBody() {
            this.view = this.utils.getMonthView({
              events: this.events,
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              weekendDays: this.weekendDays
            });
          }
        }, {
          key: "checkActiveDayIsOpen",
          value: function checkActiveDayIsOpen() {
            var _this98 = this;

            if (this.activeDayIsOpen === true) {
              var activeDay = this.activeDay || this.viewDate;
              this.openDay = this.view.days.find(function (day) {
                return _this98.dateAdapter.isSameDay(day.date, activeDay);
              });
              var index = this.view.days.indexOf(this.openDay);
              this.openRowIndex = Math.floor(index / this.view.totalDaysVisibleInWeek) * this.view.totalDaysVisibleInWeek;
            } else {
              this.openRowIndex = null;
              this.openDay = null;
            }
          }
        }, {
          key: "refreshAll",
          value: function refreshAll() {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
            this.checkActiveDayIsOpen();
          }
        }, {
          key: "emitBeforeViewRender",
          value: function emitBeforeViewRender() {
            if (this.columnHeaders && this.view) {
              this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
              });
            }
          }
        }]);

        return CalendarMonthViewComponent;
      }();

      CalendarMonthViewComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: CalendarUtils
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }, {
          type: DateAdapter
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarMonthViewComponent.prototype, "viewDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewComponent.prototype, "events", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewComponent.prototype, "excludeDays", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarMonthViewComponent.prototype, "activeDay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"])], CalendarMonthViewComponent.prototype, "refresh", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarMonthViewComponent.prototype, "locale", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarMonthViewComponent.prototype, "tooltipDelay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "headerTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "cellTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewComponent.prototype, "eventActionsTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewComponent.prototype, "weekendDays", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "dayClicked", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "eventClicked", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "columnHeaderClicked", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
      CalendarMonthViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-month-view',
        template: "\n    <div class=\"cal-month-view\" role=\"grid\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div role=\"row\" class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              role=\"gridcell\"\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day, sourceEvent: $event })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (mwlKeydownEnter)=\"\n                dayClicked.emit({ day: day, sourceEvent: $event })\n              \"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: $event.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n              [attr.tabindex]=\"{} | calendarA11y: 'monthCellTabIndex'\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [locale]=\"locale\"\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [date]=\"openDay?.date\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"\n              eventClicked.emit({\n                event: $event.event,\n                sourceEvent: $event.sourceEvent\n              })\n            \"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], CalendarUtils, String, DateAdapter])], CalendarMonthViewComponent);

      var CalendarMonthViewHeaderComponent = /*#__PURE__*/_createClass(function CalendarMonthViewHeaderComponent() {
        _classCallCheck(this, CalendarMonthViewHeaderComponent);

        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
      });

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewHeaderComponent.prototype, "days", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewHeaderComponent.prototype, "columnHeaderClicked", void 0);
      CalendarMonthViewHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-month-view-header',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\" role=\"row\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"\n            columnHeaderClicked.emit({\n              isoDayNumber: day.day,\n              sourceEvent: $event\n            })\n          \"\n          [ngClass]=\"day.cssClass\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
      })], CalendarMonthViewHeaderComponent);

      var CalendarMonthCellComponent = /*#__PURE__*/_createClass(function CalendarMonthCellComponent() {
        _classCallCheck(this, CalendarMonthCellComponent);

        this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
      });

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthCellComponent.prototype, "day", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthCellComponent.prototype, "openDay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarMonthCellComponent.prototype, "locale", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthCellComponent.prototype, "customTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarMonthCellComponent.prototype, "tooltipDelay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthCellComponent.prototype, "eventClicked", void 0);
      CalendarMonthCellComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-month-cell',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-cell-top\"\n        [attr.aria-label]=\"\n          { day: day, locale: locale } | calendarA11y: 'monthCell'\n        \"\n      >\n        <span aria-hidden=\"true\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n            day.badgeTotal\n          }}</span>\n          <span class=\"cal-day-number\">{{\n            day.date | calendarDate: 'monthViewDayNumber':locale\n          }}</span>\n        </span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n          (mwlClick)=\"eventClicked.emit({ event: event, sourceEvent: $event })\"\n          [attr.aria-hidden]=\"{} | calendarA11y: 'hideMonthCellEvents'\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
        host: {
          "class": 'cal-cell cal-day-cell',
          '[class.cal-past]': 'day.isPast',
          '[class.cal-today]': 'day.isToday',
          '[class.cal-future]': 'day.isFuture',
          '[class.cal-weekend]': 'day.isWeekend',
          '[class.cal-in-month]': 'day.inMonth',
          '[class.cal-out-month]': '!day.inMonth',
          '[class.cal-has-events]': 'day.events.length > 0',
          '[class.cal-open]': 'day === openDay',
          '[class.cal-event-highlight]': '!!day.backgroundColor'
        }
      })], CalendarMonthCellComponent);
      var collapseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('collapse', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        height: 0,
        overflow: 'hidden',
        'padding-top': 0,
        'padding-bottom': 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        height: '*',
        overflow: 'hidden',
        'padding-top': '*',
        'padding-bottom': '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms ease-in'))]);

      var CalendarOpenDayEventsComponent = /*#__PURE__*/_createClass(function CalendarOpenDayEventsComponent() {
        _classCallCheck(this, CalendarOpenDayEventsComponent);

        this.isOpen = false;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
      });

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarOpenDayEventsComponent.prototype, "locale", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarOpenDayEventsComponent.prototype, "events", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarOpenDayEventsComponent.prototype, "eventActionsTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarOpenDayEventsComponent.prototype, "date", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);
      CalendarOpenDayEventsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-open-day-events',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-open-day-events\"\n        [@collapse]\n        *ngIf=\"isOpen\"\n        role=\"application\"\n      >\n        <span\n          tabindex=\"-1\"\n          role=\"alert\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'\n          \"\n        ></span>\n        <span\n          tabindex=\"0\"\n          role=\"landmark\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale }\n              | calendarA11y: 'openDayEventsLandmark'\n          \"\n        ></span>\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            (mwlKeydownEnter)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            tabindex=\"0\"\n            [attr.aria-label]=\"\n              { event: event, locale: locale }\n                | calendarA11y: 'eventDescription'\n            \"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
        animations: [collapseAnimation]
      })], CalendarOpenDayEventsComponent);

      var CalendarMonthModule = /*#__PURE__*/_createClass(function CalendarMonthModule() {
        _classCallCheck(this, CalendarMonthModule);
      });

      CalendarMonthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule],
        declarations: [CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent],
        exports: [angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarMonthViewComponent, CalendarMonthCellComponent, CalendarOpenDayEventsComponent, CalendarMonthViewHeaderComponent]
      })], CalendarMonthModule);

      var CalendarDragHelper = /*#__PURE__*/function () {
        function CalendarDragHelper(dragContainerElement, draggableElement) {
          _classCallCheck(this, CalendarDragHelper);

          this.dragContainerElement = dragContainerElement;
          this.startPosition = draggableElement.getBoundingClientRect();
        }

        _createClass(CalendarDragHelper, [{
          key: "validateDrag",
          value: function validateDrag(_ref55) {
            var x = _ref55.x,
                y = _ref55.y,
                snapDraggedEvents = _ref55.snapDraggedEvents,
                dragAlreadyMoved = _ref55.dragAlreadyMoved,
                transform = _ref55.transform;

            if (snapDraggedEvents) {
              var newRect = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + transform.x,
                right: this.startPosition.right + transform.x,
                top: this.startPosition.top + transform.y,
                bottom: this.startPosition.bottom + transform.y
              });
              return (isWithinThreshold({
                x: x,
                y: y
              }) || dragAlreadyMoved) && isInside(this.dragContainerElement.getBoundingClientRect(), newRect);
            } else {
              return isWithinThreshold({
                x: x,
                y: y
              }) || dragAlreadyMoved;
            }
          }
        }]);

        return CalendarDragHelper;
      }();

      var CalendarResizeHelper = /*#__PURE__*/function () {
        function CalendarResizeHelper(resizeContainerElement, minWidth) {
          _classCallCheck(this, CalendarResizeHelper);

          this.resizeContainerElement = resizeContainerElement;
          this.minWidth = minWidth;
        }

        _createClass(CalendarResizeHelper, [{
          key: "validateResize",
          value: function validateResize(_ref56) {
            var rectangle = _ref56.rectangle;

            if (this.minWidth && Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
              return false;
            }

            return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
          }
        }]);

        return CalendarResizeHelper;
      }();
      /**
       * Shows all events on a given week. Example usage:
       *
       * ```typescript
       * <mwl-calendar-week-view
       *  [viewDate]="viewDate"
       *  [events]="events">
       * </mwl-calendar-week-view>
       * ```
       */


      var CalendarWeekViewComponent = /*#__PURE__*/function () {
        /**
         * @hidden
         */
        function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
          _classCallCheck(this, CalendarWeekViewComponent);

          this.cdr = cdr;
          this.utils = utils;
          this.dateAdapter = dateAdapter;
          /**
           * An array of events to display on view
           * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
           */

          this.events = [];
          /**
           * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
           */

          this.excludeDays = [];
          /**
           * The placement of the event tooltip
           */

          this.tooltipPlacement = 'auto';
          /**
           * Whether to append tooltips to the body or next to the trigger element
           */

          this.tooltipAppendToBody = true;
          /**
           * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
           * will be displayed immediately.
           */

          this.tooltipDelay = null;
          /**
           * The precision to display events.
           * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
           */

          this.precision = 'days';
          /**
           * Whether to snap events to a grid when dragging
           */

          this.snapDraggedEvents = true;
          /**
           * The number of segments in an hour. Must divide equally into 60.
           */

          this.hourSegments = 2;
          /**
           * The height in pixels of each hour segment
           */

          this.hourSegmentHeight = 30;
          /**
           * The day start hours in 24 hour time. Must be 0-23
           */

          this.dayStartHour = 0;
          /**
           * The day start minutes. Must be 0-59
           */

          this.dayStartMinute = 0;
          /**
           * The day end hours in 24 hour time. Must be 0-23
           */

          this.dayEndHour = 23;
          /**
           * The day end minutes. Must be 0-59
           */

          this.dayEndMinute = 59;
          /**
           * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
           */

          this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Called when the event title is clicked
           */

          this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Called when an event is resized or dragged and dropped
           */

          this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * An output that will be called before the view is rendered for the current week.
           * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
           */

          this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Called when an hour segment is clicked
           */

          this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @hidden
           */

          this.allDayEventResizes = new Map();
          /**
           * @hidden
           */

          this.timeEventResizes = new Map();
          /**
           * @hidden
           */

          this.eventDragEnterByType = {
            allDay: 0,
            time: 0
          };
          /**
           * @hidden
           */

          this.dragActive = false;
          /**
           * @hidden
           */

          this.dragAlreadyMoved = false;
          /**
           * @hidden
           */

          this.calendarId = Symbol('angular calendar week view id');
          /**
           * @hidden
           */

          this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
          /**
           * @hidden
           */

          this.trackByHourSegment = trackByHourSegment;
          /**
           * @hidden
           */

          this.trackByHour = trackByHour;
          /**
           * @hidden
           */

          this.trackByWeekAllDayEvent = trackByWeekAllDayEvent;
          /**
           * @hidden
           */

          this.trackByWeekTimeEvent = trackByWeekTimeEvent;
          /**
           * @hidden
           */

          this.trackByHourColumn = function (index, column) {
            return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
          };
          /**
           * @hidden
           */


          this.trackById = function (index, row) {
            return row.id;
          };

          this.locale = locale;
        }
        /**
         * @hidden
         */


        _createClass(CalendarWeekViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this99 = this;

            if (this.refresh) {
              this.refreshSubscription = this.refresh.subscribe(function () {
                _this99.refreshAll();

                _this99.cdr.markForCheck();
              });
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays || changes.daysInWeek || changes.weekStartsOn;
            var refreshBody = changes.viewDate || changes.dayStartHour || changes.dayStartMinute || changes.dayEndHour || changes.dayEndMinute || changes.hourSegments || changes.weekStartsOn || changes.weekendDays || changes.excludeDays || changes.hourSegmentHeight || changes.events || changes.daysInWeek;

            if (refreshHeader) {
              this.refreshHeader();
            }

            if (changes.events) {
              validateEvents(this.events);
            }

            if (refreshBody) {
              this.refreshBody();
            }

            if (refreshHeader || refreshBody) {
              this.emitBeforeViewRender();
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.refreshSubscription) {
              this.refreshSubscription.unsubscribe();
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "timeEventResizeStarted",
          value: function timeEventResizeStarted(eventsContainer, timeEvent, resizeEvent) {
            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            this.resizeStarted(eventsContainer);
          }
          /**
           * @hidden
           */

        }, {
          key: "timeEventResizing",
          value: function timeEventResizing(timeEvent, resizeEvent) {
            var _this100 = this;

            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            var adjustedEvents = new Map();

            var tempEvents = _toConsumableArray(this.events);

            this.timeEventResizes.forEach(function (lastResizeEvent, event) {
              var newEventDates = _this100.getTimeEventResizedDates(event, lastResizeEvent);

              var adjustedEvent = Object.assign(Object.assign({}, event), newEventDates);
              adjustedEvents.set(adjustedEvent, event);
              var eventIndex = tempEvents.indexOf(event);
              tempEvents[eventIndex] = adjustedEvent;
            });
            this.restoreOriginalEvents(tempEvents, adjustedEvents, true);
          }
          /**
           * @hidden
           */

        }, {
          key: "timeEventResizeEnded",
          value: function timeEventResizeEnded(timeEvent) {
            this.view = this.getWeekView(this.events);
            var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);

            if (lastResizeEvent) {
              this.timeEventResizes["delete"](timeEvent.event);
              var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
              this.eventTimesChanged.emit({
                newStart: newEventDates.start,
                newEnd: newEventDates.end,
                event: timeEvent.event,
                type: CalendarEventTimesChangedEventType.Resize
              });
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "allDayEventResizeStarted",
          value: function allDayEventResizeStarted(allDayEventsContainer, allDayEvent, resizeEvent) {
            this.allDayEventResizes.set(allDayEvent, {
              originalOffset: allDayEvent.offset,
              originalSpan: allDayEvent.span,
              edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
            });
            this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
          }
          /**
           * @hidden
           */

        }, {
          key: "allDayEventResizing",
          value: function allDayEventResizing(allDayEvent, resizeEvent, dayWidth) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);

            if (typeof resizeEvent.edges.left !== 'undefined') {
              var diff = Math.round(+resizeEvent.edges.left / dayWidth);
              allDayEvent.offset = currentResize.originalOffset + diff;
              allDayEvent.span = currentResize.originalSpan - diff;
            } else if (typeof resizeEvent.edges.right !== 'undefined') {
              var _diff = Math.round(+resizeEvent.edges.right / dayWidth);

              allDayEvent.span = currentResize.originalSpan + _diff;
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "allDayEventResizeEnded",
          value: function allDayEventResizeEnded(allDayEvent) {
            var currentResize = this.allDayEventResizes.get(allDayEvent);

            if (currentResize) {
              var allDayEventResizingBeforeStart = currentResize.edge === 'left';
              var daysDiff;

              if (allDayEventResizingBeforeStart) {
                daysDiff = allDayEvent.offset - currentResize.originalOffset;
              } else {
                daysDiff = allDayEvent.span - currentResize.originalSpan;
              }

              allDayEvent.offset = currentResize.originalOffset;
              allDayEvent.span = currentResize.originalSpan;
              var newStart = allDayEvent.event.start;
              var newEnd = allDayEvent.event.end || allDayEvent.event.start;

              if (allDayEventResizingBeforeStart) {
                newStart = addDaysWithExclusions(this.dateAdapter, newStart, daysDiff, this.excludeDays);
              } else {
                newEnd = addDaysWithExclusions(this.dateAdapter, newEnd, daysDiff, this.excludeDays);
              }

              this.eventTimesChanged.emit({
                newStart: newStart,
                newEnd: newEnd,
                event: allDayEvent.event,
                type: CalendarEventTimesChangedEventType.Resize
              });
              this.allDayEventResizes["delete"](allDayEvent);
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "getDayColumnWidth",
          value: function getDayColumnWidth(eventRowContainer) {
            return Math.floor(eventRowContainer.offsetWidth / this.days.length);
          }
          /**
           * @hidden
           */

        }, {
          key: "dateDragEnter",
          value: function dateDragEnter(date) {
            this.lastDragEnterDate = date;
          }
          /**
           * @hidden
           */

        }, {
          key: "eventDropped",
          value: function eventDropped(dropEvent, date, allDay) {
            if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) && this.lastDragEnterDate.getTime() === date.getTime() && (!this.snapDraggedEvents || dropEvent.dropData.event !== this.lastDraggedEvent)) {
              this.eventTimesChanged.emit({
                type: CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
              });
            }

            this.lastDraggedEvent = null;
          }
          /**
           * @hidden
           */

        }, {
          key: "dragEnter",
          value: function dragEnter(type) {
            this.eventDragEnterByType[type]++;
          }
          /**
           * @hidden
           */

        }, {
          key: "dragLeave",
          value: function dragLeave(type) {
            this.eventDragEnterByType[type]--;
          }
          /**
           * @hidden
           */

        }, {
          key: "dragStarted",
          value: function dragStarted(eventsContainer, event, dayEvent) {
            var _this101 = this;

            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var dragHelper = new CalendarDragHelper(eventsContainer, event);

            this.validateDrag = function (_ref57) {
              var x = _ref57.x,
                  y = _ref57.y,
                  transform = _ref57.transform;
              return _this101.allDayEventResizes.size === 0 && _this101.timeEventResizes.size === 0 && dragHelper.validateDrag({
                x: x,
                y: y,
                snapDraggedEvents: _this101.snapDraggedEvents,
                dragAlreadyMoved: _this101.dragAlreadyMoved,
                transform: transform
              });
            };

            this.dragActive = true;
            this.dragAlreadyMoved = false;
            this.lastDraggedEvent = null;
            this.eventDragEnterByType = {
              allDay: 0,
              time: 0
            };

            if (!this.snapDraggedEvents && dayEvent) {
              this.view.hourColumns.forEach(function (column) {
                var linkedEvent = column.events.find(function (columnEvent) {
                  return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
                }); // hide any linked events while dragging

                if (linkedEvent) {
                  linkedEvent.width = 0;
                  linkedEvent.height = 0;
                }
              });
            }

            this.cdr.markForCheck();
          }
          /**
           * @hidden
           */

        }, {
          key: "dragMove",
          value: function dragMove(dayEvent, dragEvent) {
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            var originalEvent = dayEvent.event;
            var adjustedEvent = Object.assign(Object.assign({}, originalEvent), newEventTimes);
            var tempEvents = this.events.map(function (event) {
              if (event === originalEvent) {
                return adjustedEvent;
              }

              return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]), this.snapDraggedEvents);
            this.dragAlreadyMoved = true;
          }
          /**
           * @hidden
           */

        }, {
          key: "allDayEventDragMove",
          value: function allDayEventDragMove() {
            this.dragAlreadyMoved = true;
          }
          /**
           * @hidden
           */

        }, {
          key: "dragEnded",
          value: function dragEnded(weekEvent, dragEndEvent, dayWidth) {
            var useY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            this.view = this.getWeekView(this.events);
            this.dragActive = false;
            this.validateDrag = null;

            var _this$getDragMovedEve = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY),
                start = _this$getDragMovedEve.start,
                end = _this$getDragMovedEve.end;

            if ((this.snapDraggedEvents || this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0) && isDraggedWithinPeriod(start, end, this.view.period)) {
              this.lastDraggedEvent = weekEvent.event;
              this.eventTimesChanged.emit({
                newStart: start,
                newEnd: end,
                event: weekEvent.event,
                type: CalendarEventTimesChangedEventType.Drag,
                allDay: !useY
              });
            }
          }
        }, {
          key: "refreshHeader",
          value: function refreshHeader() {
            this.days = this.utils.getWeekViewHeader(Object.assign({
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              weekendDays: this.weekendDays
            }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
          }
        }, {
          key: "refreshBody",
          value: function refreshBody() {
            this.view = this.getWeekView(this.events);
          }
        }, {
          key: "refreshAll",
          value: function refreshAll() {
            this.refreshHeader();
            this.refreshBody();
            this.emitBeforeViewRender();
          }
        }, {
          key: "emitBeforeViewRender",
          value: function emitBeforeViewRender() {
            if (this.days && this.view) {
              this.beforeViewRender.emit(Object.assign({
                header: this.days
              }, this.view));
            }
          }
        }, {
          key: "getWeekView",
          value: function getWeekView(events) {
            return this.utils.getWeekView(Object.assign({
              events: events,
              viewDate: this.viewDate,
              weekStartsOn: this.weekStartsOn,
              excluded: this.excludeDays,
              precision: this.precision,
              absolutePositionedEvents: true,
              hourSegments: this.hourSegments,
              dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
              },
              dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
              },
              segmentHeight: this.hourSegmentHeight,
              weekendDays: this.weekendDays
            }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
          }
        }, {
          key: "getDragMovedEventTimes",
          value: function getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY) {
            var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
            var minutesMoved = useY ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize) : 0;
            var start = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.start, daysDragged, this.excludeDays), minutesMoved);
            var end;

            if (weekEvent.event.end) {
              end = this.dateAdapter.addMinutes(addDaysWithExclusions(this.dateAdapter, weekEvent.event.end, daysDragged, this.excludeDays), minutesMoved);
            }

            return {
              start: start,
              end: end
            };
          }
        }, {
          key: "restoreOriginalEvents",
          value: function restoreOriginalEvents(tempEvents, adjustedEvents) {
            var snapDraggedEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var previousView = this.view;

            if (snapDraggedEvents) {
              this.view = this.getWeekView(tempEvents);
            }

            var adjustedEventsArray = tempEvents.filter(function (event) {
              return adjustedEvents.has(event);
            });
            this.view.hourColumns.forEach(function (column, columnIndex) {
              previousView.hourColumns[columnIndex].hours.forEach(function (hour, hourIndex) {
                hour.segments.forEach(function (segment, segmentIndex) {
                  column.hours[hourIndex].segments[segmentIndex].cssClass = segment.cssClass;
                });
              });
              adjustedEventsArray.forEach(function (adjustedEvent) {
                var originalEvent = adjustedEvents.get(adjustedEvent);
                var existingColumnEvent = column.events.find(function (columnEvent) {
                  return columnEvent.event === (snapDraggedEvents ? adjustedEvent : originalEvent);
                });

                if (existingColumnEvent) {
                  // restore the original event so trackBy kicks in and the dom isn't changed
                  existingColumnEvent.event = originalEvent;
                  existingColumnEvent['tempEvent'] = adjustedEvent;

                  if (!snapDraggedEvents) {
                    existingColumnEvent.height = 0;
                    existingColumnEvent.width = 0;
                  }
                } else {
                  // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                  var event = {
                    event: originalEvent,
                    left: 0,
                    top: 0,
                    height: 0,
                    width: 0,
                    startsBeforeDay: false,
                    endsAfterDay: false,
                    tempEvent: adjustedEvent
                  };
                  column.events.push(event);
                }
              });
            });
            adjustedEvents.clear();
          }
        }, {
          key: "getTimeEventResizedDates",
          value: function getTimeEventResizedDates(calendarEvent, resizeEvent) {
            var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
            var newEventDates = {
              start: calendarEvent.start,
              end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight)
            };
            var end = calendarEvent.end,
                eventWithoutEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(calendarEvent, ["end"]);
            var smallestResizes = {
              start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
              end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
            };

            if (typeof resizeEvent.edges.left !== 'undefined') {
              var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
              var newStart = addDaysWithExclusions(this.dateAdapter, newEventDates.start, daysDiff, this.excludeDays);

              if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
              } else {
                newEventDates.start = smallestResizes.start;
              }
            } else if (typeof resizeEvent.edges.right !== 'undefined') {
              var _daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);

              var newEnd = addDaysWithExclusions(this.dateAdapter, newEventDates.end, _daysDiff, this.excludeDays);

              if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
              } else {
                newEventDates.end = smallestResizes.end;
              }
            }

            if (typeof resizeEvent.edges.top !== 'undefined') {
              var minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);

              var _newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);

              if (_newStart < smallestResizes.start) {
                newEventDates.start = _newStart;
              } else {
                newEventDates.start = smallestResizes.start;
              }
            } else if (typeof resizeEvent.edges.bottom !== 'undefined') {
              var _minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);

              var _newEnd = this.dateAdapter.addMinutes(newEventDates.end, _minutesMoved);

              if (_newEnd > smallestResizes.end) {
                newEventDates.end = _newEnd;
              } else {
                newEventDates.end = smallestResizes.end;
              }
            }

            return newEventDates;
          }
        }, {
          key: "resizeStarted",
          value: function resizeStarted(eventsContainer, minWidth) {
            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);

            this.validateResize = function (_ref58) {
              var rectangle = _ref58.rectangle;
              return resizeHelper.validateResize({
                rectangle: rectangle
              });
            };

            this.cdr.markForCheck();
          }
        }]);

        return CalendarWeekViewComponent;
      }();

      CalendarWeekViewComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: CalendarUtils
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }, {
          type: DateAdapter
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarWeekViewComponent.prototype, "viewDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarWeekViewComponent.prototype, "events", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarWeekViewComponent.prototype, "excludeDays", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"])], CalendarWeekViewComponent.prototype, "refresh", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewComponent.prototype, "locale", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "tooltipDelay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "headerTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "eventTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "eventActionsTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewComponent.prototype, "precision", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarWeekViewComponent.prototype, "weekendDays", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewComponent.prototype, "snapDraggedEvents", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "hourSegments", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "hourSegmentHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "dayStartHour", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "dayStartMinute", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "dayEndHour", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "dayEndMinute", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "hourSegmentTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "eventSnapSize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewComponent.prototype, "daysInWeek", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "eventClicked", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewComponent.prototype, "hourSegmentClicked", void 0);
      CalendarWeekViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-week-view',
        template: "\n    <div class=\"cal-week-view\" role=\"grid\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n            (dragEnter)=\"dateDragEnter(day.date)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByWeekAllDayEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [locale]=\"locale\"\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              [daysInWeek]=\"daysInWeek\"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: allDayEvent.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div\n          class=\"cal-time-label-column\"\n          *ngIf=\"view.hourColumns.length > 0 && daysInWeek !== 1\"\n        >\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <mwl-calendar-week-view-current-time-marker\n              [columnDate]=\"column.date\"\n              [dayStartHour]=\"dayStartHour\"\n              [dayStartMinute]=\"dayStartMinute\"\n              [dayEndHour]=\"dayEndHour\"\n              [dayEndMinute]=\"dayEndMinute\"\n              [hourSegments]=\"hourSegments\"\n              [hourSegmentHeight]=\"hourSegmentHeight\"\n              [customTemplate]=\"currentTimeMarkerTemplate\"\n            ></mwl-calendar-week-view-current-time-marker>\n            <div class=\"cal-events-container\">\n              <div\n                *ngFor=\"\n                  let timeEvent of column.events;\n                  trackBy: trackByWeekTimeEvent\n                \"\n                #event\n                class=\"cal-event-container\"\n                [class.cal-draggable]=\"\n                  timeEvent.event.draggable && timeEventResizes.size === 0\n                \"\n                [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n                [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n                [ngClass]=\"timeEvent.event.cssClass\"\n                [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                [style.top.px]=\"timeEvent.top\"\n                [style.height.px]=\"timeEvent.height\"\n                [style.left.%]=\"timeEvent.left\"\n                [style.width.%]=\"timeEvent.width\"\n                mwlResizable\n                [resizeSnapGrid]=\"{\n                  left: dayColumnWidth,\n                  right: dayColumnWidth,\n                  top: eventSnapSize || hourSegmentHeight,\n                  bottom: eventSnapSize || hourSegmentHeight\n                }\"\n                [validateResize]=\"validateResize\"\n                [allowNegativeResizes]=\"true\"\n                (resizeStart)=\"\n                  timeEventResizeStarted(dayColumns, timeEvent, $event)\n                \"\n                (resizing)=\"timeEventResizing(timeEvent, $event)\"\n                (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n                mwlDraggable\n                dragActiveClass=\"cal-drag-active\"\n                [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n                [dragAxis]=\"{\n                  x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                  y: timeEvent.event.draggable && timeEventResizes.size === 0\n                }\"\n                [dragSnapGrid]=\"\n                  snapDraggedEvents\n                    ? {\n                        x: dayColumnWidth,\n                        y: eventSnapSize || hourSegmentHeight\n                      }\n                    : {}\n                \"\n                [touchStartLongPress]=\"{ delay: 300, delta: 30 }\"\n                [ghostDragEnabled]=\"!snapDraggedEvents\"\n                [ghostElementTemplate]=\"weekEventTemplate\"\n                [validateDrag]=\"validateDrag\"\n                (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n                (dragging)=\"dragMove(timeEvent, $event)\"\n                (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n              >\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-before-start\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.beforeStart &&\n                    !timeEvent.startsBeforeDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    left: true,\n                    top: true\n                  }\"\n                ></div>\n                <ng-template\n                  [ngTemplateOutlet]=\"weekEventTemplate\"\n                ></ng-template>\n                <ng-template #weekEventTemplate>\n                  <mwl-calendar-week-view-event\n                    [locale]=\"locale\"\n                    [weekEvent]=\"timeEvent\"\n                    [tooltipPlacement]=\"tooltipPlacement\"\n                    [tooltipTemplate]=\"tooltipTemplate\"\n                    [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                    [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                    [tooltipDelay]=\"tooltipDelay\"\n                    [customTemplate]=\"eventTemplate\"\n                    [eventTitleTemplate]=\"eventTitleTemplate\"\n                    [eventActionsTemplate]=\"eventActionsTemplate\"\n                    [column]=\"column\"\n                    [daysInWeek]=\"daysInWeek\"\n                    (eventClicked)=\"\n                      eventClicked.emit({\n                        event: timeEvent.event,\n                        sourceEvent: $event.sourceEvent\n                      })\n                    \"\n                  >\n                  </mwl-calendar-week-view-event>\n                </ng-template>\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-after-end\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.afterEnd &&\n                    !timeEvent.endsAfterDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    right: true,\n                    bottom: true\n                  }\"\n                ></div>\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n                (mwlClick)=\"\n                  hourSegmentClicked.emit({\n                    date: segment.date,\n                    sourceEvent: $event\n                  })\n                \"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n                (dragEnter)=\"dateDragEnter(segment.date)\"\n                [isTimeLabel]=\"daysInWeek === 1\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], CalendarUtils, String, DateAdapter])], CalendarWeekViewComponent);

      var CalendarWeekViewHeaderComponent = /*#__PURE__*/_createClass(function CalendarWeekViewHeaderComponent() {
        _classCallCheck(this, CalendarWeekViewHeaderComponent);

        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
      });

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarWeekViewHeaderComponent.prototype, "days", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewHeaderComponent.prototype, "dragEnter", void 0);
      CalendarWeekViewHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-week-view-header',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
      })], CalendarWeekViewHeaderComponent);

      var CalendarWeekViewEventComponent = /*#__PURE__*/_createClass(function CalendarWeekViewEventComponent() {
        _classCallCheck(this, CalendarWeekViewEventComponent);

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      });

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewEventComponent.prototype, "locale", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewEventComponent.prototype, "tooltipAppendToBody", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewEventComponent.prototype, "tooltipDisabled", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewEventComponent.prototype, "tooltipDelay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewEventComponent.prototype, "customTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewEventComponent.prototype, "eventTitleTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewEventComponent.prototype, "eventActionsTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewEventComponent.prototype, "tooltipTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewEventComponent.prototype, "column", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewEventComponent.prototype, "daysInWeek", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);
      CalendarWeekViewEventComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-week-view-event',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.tempEvent || weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.tempEvent || weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.tempEvent || weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.tempEvent || weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
      })], CalendarWeekViewEventComponent);

      var CalendarWeekViewHourSegmentComponent = /*#__PURE__*/_createClass(function CalendarWeekViewHourSegmentComponent() {
        _classCallCheck(this, CalendarWeekViewHourSegmentComponent);
      });

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarWeekViewHourSegmentComponent.prototype, "segment", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewHourSegmentComponent.prototype, "segmentHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarWeekViewHourSegmentComponent.prototype, "locale", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarWeekViewHourSegmentComponent.prototype, "isTimeLabel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewHourSegmentComponent.prototype, "daysInWeek", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewHourSegmentComponent.prototype, "customTemplate", void 0);
      CalendarWeekViewHourSegmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-week-view-hour-segment',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        [attr.aria-hidden]=\"\n          {}\n            | calendarA11y\n              : (daysInWeek === 1\n                  ? 'hideDayHourSegment'\n                  : 'hideWeekHourSegment')\n        \"\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\"\n      >\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{\n            segment.displayDate\n              | calendarDate\n                : (daysInWeek === 1 ? 'dayViewHour' : 'weekViewHour')\n                : locale\n          }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
      })], CalendarWeekViewHourSegmentComponent);

      var CalendarWeekViewCurrentTimeMarkerComponent = /*#__PURE__*/function () {
        function CalendarWeekViewCurrentTimeMarkerComponent(dateAdapter, zone) {
          var _this102 = this;

          _classCallCheck(this, CalendarWeekViewCurrentTimeMarkerComponent);

          this.dateAdapter = dateAdapter;
          this.zone = zone;
          this.columnDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.columnDate);
          this.marker$ = this.zone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(60 * 1000);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMapTo"])(this.columnDate$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (columnDate) {
            var startOfDay = _this102.dateAdapter.setMinutes(_this102.dateAdapter.setHours(columnDate, _this102.dayStartHour), _this102.dayStartMinute);

            var endOfDay = _this102.dateAdapter.setMinutes(_this102.dateAdapter.setHours(columnDate, _this102.dayEndHour), _this102.dayEndMinute);

            var hourHeightModifier = _this102.hourSegments * _this102.hourSegmentHeight / 60;
            var now = new Date();
            return {
              isVisible: _this102.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay && now <= endOfDay,
              top: _this102.dateAdapter.differenceInMinutes(now, startOfDay) * hourHeightModifier
            };
          }));
        }

        _createClass(CalendarWeekViewCurrentTimeMarkerComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.columnDate) {
              this.columnDate$.next(changes.columnDate.currentValue);
            }
          }
        }]);

        return CalendarWeekViewCurrentTimeMarkerComponent;
      }();

      CalendarWeekViewCurrentTimeMarkerComponent.ctorParameters = function () {
        return [{
          type: DateAdapter
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "columnDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartHour", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartMinute", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndHour", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndMinute", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegments", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegmentHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "customTemplate", void 0);
      CalendarWeekViewCurrentTimeMarkerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-week-view-current-time-marker',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-columnDate=\"columnDate\"\n      let-dayStartHour=\"dayStartHour\"\n      let-dayStartMinute=\"dayStartMinute\"\n      let-dayEndHour=\"dayEndHour\"\n      let-dayEndMinute=\"dayEndMinute\"\n      let-isVisible=\"isVisible\"\n      let-topPx=\"topPx\"\n    >\n      <div\n        class=\"cal-current-time-marker\"\n        *ngIf=\"isVisible\"\n        [style.top.px]=\"topPx\"\n      ></div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        columnDate: columnDate,\n        dayStartHour: dayStartHour,\n        dayStartMinute: dayStartMinute,\n        dayEndHour: dayEndHour,\n        dayEndMinute: dayEndMinute,\n        isVisible: (marker$ | async)?.isVisible,\n        topPx: (marker$ | async)?.top\n      }\"\n    >\n    </ng-template>\n  "
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CalendarWeekViewCurrentTimeMarkerComponent);

      var CalendarWeekModule = /*#__PURE__*/_createClass(function CalendarWeekModule() {
        _classCallCheck(this, CalendarWeekModule);
      });

      CalendarWeekModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarCommonModule],
        declarations: [CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent],
        exports: [angular_resizable_element__WEBPACK_IMPORTED_MODULE_9__["ResizableModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"], CalendarWeekViewComponent, CalendarWeekViewHeaderComponent, CalendarWeekViewEventComponent, CalendarWeekViewHourSegmentComponent, CalendarWeekViewCurrentTimeMarkerComponent]
      })], CalendarWeekModule);
      /**
       * Shows all events on a given day. Example usage:
       *
       * ```typescript
       * <mwl-calendar-day-view
       *  [viewDate]="viewDate"
       *  [events]="events">
       * </mwl-calendar-day-view>
       * ```
       */

      var CalendarDayViewComponent = /*#__PURE__*/_createClass(function CalendarDayViewComponent() {
        _classCallCheck(this, CalendarDayViewComponent);

        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must divide equally into 60.
         */

        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */

        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */

        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */

        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */

        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */

        this.dayEndMinute = 59;
        /**
         * The placement of the event tooltip
         */

        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */

        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */

        this.tooltipDelay = null;
        /**
         * Whether to snap events to a grid when dragging
         */

        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */

        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */

        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */

        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      });

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Date)], CalendarDayViewComponent.prototype, "viewDate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarDayViewComponent.prototype, "events", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "hourSegments", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"])], CalendarDayViewComponent.prototype, "refresh", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarDayViewComponent.prototype, "locale", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], CalendarDayViewComponent.prototype, "tooltipDelay", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "eventTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarDayViewComponent.prototype, "currentTimeMarkerTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "eventClicked", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);
      CalendarDayViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-day-view',
        template: "\n    <mwl-calendar-week-view\n      class=\"cal-day-view\"\n      [daysInWeek]=\"1\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [hourSegments]=\"hourSegments\"\n      [hourSegmentHeight]=\"hourSegmentHeight\"\n      [dayStartHour]=\"dayStartHour\"\n      [dayStartMinute]=\"dayStartMinute\"\n      [dayEndHour]=\"dayEndHour\"\n      [dayEndMinute]=\"dayEndMinute\"\n      [refresh]=\"refresh\"\n      [locale]=\"locale\"\n      [eventSnapSize]=\"eventSnapSize\"\n      [tooltipPlacement]=\"tooltipPlacement\"\n      [tooltipTemplate]=\"tooltipTemplate\"\n      [tooltipAppendToBody]=\"tooltipAppendToBody\"\n      [tooltipDelay]=\"tooltipDelay\"\n      [hourSegmentTemplate]=\"hourSegmentTemplate\"\n      [eventTemplate]=\"eventTemplate\"\n      [eventTitleTemplate]=\"eventTitleTemplate\"\n      [eventActionsTemplate]=\"eventActionsTemplate\"\n      [snapDraggedEvents]=\"snapDraggedEvents\"\n      [allDayEventsLabelTemplate]=\"allDayEventsLabelTemplate\"\n      [currentTimeMarkerTemplate]=\"currentTimeMarkerTemplate\"\n      (eventClicked)=\"eventClicked.emit($event)\"\n      (hourSegmentClicked)=\"hourSegmentClicked.emit($event)\"\n      (eventTimesChanged)=\"eventTimesChanged.emit($event)\"\n      (beforeViewRender)=\"beforeViewRender.emit($event)\"\n    ></mwl-calendar-week-view>\n  "
      })], CalendarDayViewComponent);

      var CalendarDayModule = /*#__PURE__*/_createClass(function CalendarDayModule() {
        _classCallCheck(this, CalendarDayModule);
      });

      CalendarDayModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], CalendarCommonModule, CalendarWeekModule],
        declarations: [CalendarDayViewComponent],
        exports: [CalendarDayViewComponent]
      })], CalendarDayModule);
      var CalendarModule_1;
      /**
       * The main module of this library. Example usage:
       *
       * ```typescript
       * import { CalenderModule } from 'angular-calendar';
       *
       * @NgModule({
       *   imports: [
       *     CalenderModule.forRoot()
       *   ]
       * })
       * class MyModule {}
       * ```
       *
       */

      var CalendarModule = CalendarModule_1 = /*#__PURE__*/function () {
        function CalendarModule() {
          _classCallCheck(this, CalendarModule);
        }

        _createClass(CalendarModule, null, [{
          key: "forRoot",
          value: function forRoot(dateAdapter) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return {
              ngModule: CalendarModule_1,
              providers: [dateAdapter, config.eventTitleFormatter || CalendarEventTitleFormatter, config.dateFormatter || CalendarDateFormatter, config.utils || CalendarUtils, config.a11y || CalendarA11y]
            };
          }
        }]);

        return CalendarModule;
      }();

      CalendarModule = CalendarModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule],
        exports: [CalendarCommonModule, CalendarMonthModule, CalendarWeekModule, CalendarDayModule]
      })], CalendarModule);
      /*
       * Public API Surface of angular-calendar
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angular-calendar.js.map

      /***/
    },

    /***/
    "iMgG":
    /*!*************************************************!*\
      !*** ./src/app/guards/form-deactivate.guard.ts ***!
      \*************************************************/

    /*! exports provided: FormDeactivateGuard */

    /***/
    function iMgG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormDeactivateGuard", function () {
        return FormDeactivateGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var FormDeactivateGuard = /*#__PURE__*/function () {
        function FormDeactivateGuard() {
          _classCallCheck(this, FormDeactivateGuard);
        }

        _createClass(FormDeactivateGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component, route, state) {
            return component.formCanDeactivate();
          }
        }]);

        return FormDeactivateGuard;
      }();

      FormDeactivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FormDeactivateGuard);
      /***/
    },

    /***/
    "nFBg":
    /*!**********************************************************!*\
      !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
      \**********************************************************/

    /*! exports provided: HOOKS, defaults */

    /***/
    function nFBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HOOKS", function () {
        return HOOKS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaults", function () {
        return defaults;
      });

      var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
      var defaults = {
        _disable: [],
        allowInput: false,
        allowInvalidPreload: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        autoFillDefaultTime: true,
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enableSeconds: false,
        enableTime: false,
        errorHandler: function errorHandler(err) {
          return typeof console !== "undefined" && console.warn(err);
        },
        getWeek: function getWeek(givenDate) {
          var date = new Date(givenDate.getTime());
          date.setHours(0, 0, 0, 0);
          date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
          var week1 = new Date(date.getFullYear(), 0, 4);
          return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        "static": false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false
      };
      /***/
    },

    /***/
    "nFnn":
    /*!************************************************************************!*\
      !*** ./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js ***!
      \************************************************************************/

    /*! exports provided: FlatpickrDefaults, FlatpickrDirective, USER_DEFAULTS, defaultsFactory, FlatpickrModule, ɵa */

    /***/
    function nFnn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlatpickrDefaults", function () {
        return FlatpickrDefaults;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlatpickrDirective", function () {
        return FlatpickrDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "USER_DEFAULTS", function () {
        return USER_DEFAULTS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultsFactory", function () {
        return defaultsFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlatpickrModule", function () {
        return FlatpickrModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return FLATPICKR_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var flatpickr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! flatpickr */
      "X2Dv");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */


      var FlatpickrDefaults = /*#__PURE__*/_createClass(function FlatpickrDefaults() {
        _classCallCheck(this, FlatpickrDefaults);

        /**
         * Exactly the same as date format, but for the altInput field.
         */
        this.altFormat = 'F j, Y';
        /**
         * 	Show the user a readable date (as per altFormat), but return something totally different to the server.
         */

        this.altInput = false;
        /**
         * This class will be added to the input element created by the altInput option.
         * Note that `altInput` already inherits classes from the original input.
         */

        this.altInputClass = '';
        /**
         * Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
         */

        this.allowInput = false;
        /**
         * Instead of `body`, appends the calendar to the specified node instead.
         */

        this.appendTo = undefined;
        /**
         * Defines how the date will be formatted in the aria-label for calendar days, using the same tokens as dateFormat. If you change this, you should choose a value that will make sense if a screen reader reads it out loud.
         */

        this.ariaDateFormat = 'F j, Y';
        /**
         * Whether clicking on the input should open the picker.
         * You could disable this if you wish to open the calendar manually `with.open()`.
         */

        this.clickOpens = true;
        /**
         * A string of characters which are used to define how the date will be displayed in the input box.
         * The supported characters are defined in the table below.
         */

        this.dateFormat = 'Y-m-d';
        /**
         * Initial value of the hour element.
         */

        this.defaultHour = 12;
        /**
         * Initial value of the minute element.
         */

        this.defaultMinute = 0;
        /**
         * Initial value of the seconds element.
         */

        this.defaultSeconds = 0;
        /**
         * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-specific-dates">disabling dates</a>.
         */

        this.disable = [];
        /**
         * Set disableMobile to true to always use the non-native picker.
         * By default, Flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used.
         */

        this.disableMobile = false;
        /**
         * Enables time picker.
         */

        this.enableTime = false;
        /**
         * Enables seconds in the time picker.
         */

        this.enableSeconds = false;
        /**
         * Allows using a custom date formatting function instead of the built-in handling for date formats using dateFormat, altFormat, etc.
         */

        this.formatDate = undefined;
        /**
         * Adjusts the step for the hour input (incl. scrolling).
         */

        this.hourIncrement = 1;
        /**
         * Displays the calendar inline.
         */

        this.inline = false;
        /**
         * The maximum date that a user can pick to (inclusive).
         */

        this.maxDate = undefined;
        /**
         * The minimum date that a user can start picking from (inclusive).
         */

        this.minDate = undefined;
        /**
         * Adjusts the step for the minute input (incl. scrolling).
         */

        this.minuteIncrement = 5;
        /**
         * Select a single date, multiple dates or a date range.
         */

        this.mode = 'single';
        /**
         * HTML for the arrow icon, used to switch months.
         */

        this.nextArrow = '>';
        /**
         * Hides the day selection in calendar. Use it along with `enableTime` to create a time picker.
         */

        this.noCalendar = false;
        /**
         * Default now to the current date
         */

        this.now = new Date();
        /**
         * HTML for the left arrow icon.
         */

        this.prevArrow = '<';
        /**
         * Show the month using the shorthand version (ie, Sep instead of September).
         */

        this.shorthandCurrentMonth = false;
        /**
         * Position the calendar inside the wrapper and next to the input element. (Leave `false` unless you know what you're doing).
         */

        this["static"] = false;
        /**
         * Displays time picker in 24 hour mode without AM/PM selection when enabled.
         */

        this.time24hr = false;
        /**
         * When true, dates will parsed, formatted, and displayed in UTC.
         * It's recommended that date strings contain the timezone, but not necessary.
         */

        this.utc = false;
        /**
         * Enables display of week numbers in calendar.
         */

        this.weekNumbers = false;
        /**
         * Custom elements and input groups.
         */

        this.wrap = false;
        /**
         * Array of plugin instances to use.
         */

        this.plugins = [];
        /**
         * The locale object or string to use for the locale.
         */

        this.locale = 'default';
        /**
         * Auto convert the ngModel value from a string to a date / array of dates / from - to date object depending on the `mode`
         */

        this.convertModelValue = false;
        /**
         * The number of months shown.
         */

        this.showMonths = 1;
        /**
         * How the month should be displayed in the header of the calendar.
         */

        this.monthSelectorType = 'static';
      });

      FlatpickrDefaults.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }];
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      var
      /** @type {?} */
      FLATPICKR_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FlatpickrDirective;
        }),
        //tslint:disable-line
        multi: true
      };

      var FlatpickrDirective = /*#__PURE__*/function () {
        /**
         * @param {?} elm
         * @param {?} defaults
         * @param {?} renderer
         */
        function FlatpickrDirective(elm, defaults, renderer) {
          _classCallCheck(this, FlatpickrDirective);

          this.elm = elm;
          this.defaults = defaults;
          this.renderer = renderer;
          /**
           * Object-options that can be user for multiple instances of Flatpickr.
           * Option from this object is applied only if specific option is not specified.
           * Example:
           * ```typescript
           * options: FlatpickrDefaultsInterface = {
           *      altFormat: 'd/m/Y',   // will be ignored since altFormat is provided via specific attribute
           *      altInput: true        // will be used since specific attribute is not provided
           * };
           * ```
           * ```html
           * <input
           *   class="form-control"
           *   type="text"
           *   mwlFlatpickr
           *   [options]="options"
           *   altFormat="d/m/Y">
           * ```
           */

          this.options = {};
          /**
           * Gets triggered once the calendar is in a ready state
           */

          this.flatpickrReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Gets triggered when the user selects a date, or changes the time on a selected date.
           */

          this.flatpickrChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Gets triggered when the input value is updated with a new date string.
           */

          this.flatpickrValueUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Gets triggered when the calendar is opened.
           */

          this.flatpickrOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Gets triggered when the calendar is closed.
           */

          this.flatpickrClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Gets triggered when the month is changed, either by the user or programmatically.
           */

          this.flatpickrMonthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Gets triggered when the year is changed, either by the user or programmatically.
           */

          this.flatpickrYearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Take full control of every date cell with this output
           */

          this.flatpickrDayCreate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isDisabled = false;

          this.onChangeFn = function () {};

          this.onTouchedFn = function () {};
        }
        /**
         * @return {?}
         */


        _createClass(FlatpickrDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this103 = this;

            var
            /** @type {?} */
            options = {
              altFormat: this.altFormat,
              altInput: this.altInput,
              altInputClass: this.altInputClass,
              allowInput: this.allowInput,
              appendTo: this.appendTo,
              ariaDateFormat: this.ariaDateFormat,
              clickOpens: this.clickOpens,
              dateFormat: this.dateFormat,
              defaultHour: this.defaultHour,
              defaultMinute: this.defaultMinute,
              defaultSeconds: this.defaultSeconds,
              disable: this.disable,
              disableMobile: this.disableMobile,
              enable: this.enable,
              enableTime: this.enableTime,
              enableSeconds: this.enableSeconds,
              formatDate: this.formatDate,
              hourIncrement: this.hourIncrement,
              defaultDate: this.initialValue,
              inline: this.inline,
              maxDate: this.maxDate,
              minDate: this.minDate,
              minuteIncrement: this.minuteIncrement,
              mode: this.mode,
              nextArrow: this.nextArrow,
              noCalendar: this.noCalendar,
              now: this.now,
              parseDate: this.parseDate,
              prevArrow: this.prevArrow,
              shorthandCurrentMonth: this.shorthandCurrentMonth,
              showMonths: this.showMonths,
              monthSelectorType: this.monthSelectorType,
              "static": this["static"],
              time24hr: this.time24hr,
              weekNumbers: this.weekNumbers,
              getWeek: this.getWeek,
              wrap: this.wrap,
              plugins: this.plugins,
              locale: this.locale,
              onChange: function onChange(selectedDates, dateString, instance) {
                _this103.flatpickrChange.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onOpen: function onOpen(selectedDates, dateString, instance) {
                _this103.flatpickrOpen.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onClose: function onClose(selectedDates, dateString, instance) {
                _this103.flatpickrClose.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onMonthChange: function onMonthChange(selectedDates, dateString, instance) {
                _this103.flatpickrMonthChange.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onYearChange: function onYearChange(selectedDates, dateString, instance) {
                _this103.flatpickrYearChange.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onReady: function onReady(selectedDates, dateString, instance) {
                _this103.flatpickrReady.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onValueUpdate: function onValueUpdate(selectedDates, dateString, instance) {
                _this103.flatpickrValueUpdate.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onDayCreate: function onDayCreate(selectedDates, dateString, instance, dayElement) {
                _this103.flatpickrDayCreate.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance,
                  dayElement: dayElement
                });
              }
            };
            Object.keys(options).forEach(function (key) {
              if (typeof options[key] === 'undefined') {
                if (typeof _this103.options[key] !== 'undefined') {
                  options[key] =
                  /** @type {?} */
                  _this103.options[key];
                } else {
                  options[key] =
                  /** @type {?} */
                  _this103.defaults[key];
                }
              }
            });
            options.time_24hr = options.time24hr; // workaround bug in flatpickr 4.6 where it doesn't copy the classes across
            // TODO - remove once fix in https://github.com/flatpickr/flatpickr/issues/1860 is released

            options.altInputClass = (options.altInputClass || '') + ' ' + this.elm.nativeElement.className;

            if (!options.enable) {
              delete options.enable;
            }

            this.instance =
            /** @type {?} */
            Object(flatpickr__WEBPACK_IMPORTED_MODULE_2__["default"])(this.elm.nativeElement, options);
            this.setDisabledState(this.isDisabled);
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this104 = this;

            if (this.instance) {
              Object.keys(changes).forEach(function (inputKey) {
                _this104.instance.set(
                /** @type {?} */
                inputKey,
                /** @type {?} */
                _this104[inputKey]);
              });
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.instance) {
              this.instance.destroy();
            }
          }
          /**
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var
            /** @type {?} */
            convertedValue = value;

            if (this.convertModelValue && this.mode === 'range' && value) {
              convertedValue = [value.from, value.to];
            }

            if (this.instance) {
              this.instance.setDate(convertedValue);
            } else {
              // flatpickr hasn't been initialised yet, store the value for later use
              this.initialValue = convertedValue;
            }
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChangeFn = fn;
          }
          /**
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouchedFn = fn;
          }
          /**
           * @param {?} isDisabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.isDisabled = isDisabled;

            if (this.instance) {
              if (this.isDisabled) {
                this.renderer.setProperty(this.instance._input, 'disabled', 'disabled');
              } else {
                this.renderer.removeAttribute(this.instance._input, 'disabled');
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "inputChanged",
          value: function inputChanged() {
            var _this105 = this;

            var
            /** @type {?} */
            value = this.elm.nativeElement.value;

            if (this.convertModelValue && typeof value === 'string') {
              switch (this.mode) {
                case 'multiple':
                  var
                  /** @type {?} */
                  dates = value.split('; ').map(function (str) {
                    return _this105.instance.parseDate(str, _this105.instance.config.dateFormat, !_this105.instance.config.enableTime);
                  });
                  this.onChangeFn(dates);
                  break;

                case 'range':
                  var _value$split$map = value.split(this.instance.l10n.rangeSeparator).map(function (str) {
                    return _this105.instance.parseDate(str, _this105.instance.config.dateFormat, !_this105.instance.config.enableTime);
                  }),
                      _value$split$map2 = _slicedToArray(_value$split$map, 2),
                      from = _value$split$map2[0],
                      to = _value$split$map2[1];

                  this.onChangeFn({
                    from: from,
                    to: to
                  });
                  break;

                case 'single':
                default:
                  this.onChangeFn(this.instance.parseDate(value, this.instance.config.dateFormat, !this.instance.config.enableTime));
              }
            } else {
              this.onChangeFn(value);
            }
          }
        }]);

        return FlatpickrDirective;
      }();

      FlatpickrDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mwlFlatpickr]',
          providers: [FLATPICKR_CONTROL_VALUE_ACCESSOR],
          host: {
            // tslint:disable-line use-host-property-decorator
            '(blur)': 'onTouchedFn()'
          },
          exportAs: 'mwlFlatpickr'
        }]
      }];
      /** @nocollapse */

      FlatpickrDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: FlatpickrDefaults
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      FlatpickrDirective.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        altFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        altInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        altInputClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        allowInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        appendTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ariaDateFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickOpens: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dateFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultHour: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultMinute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultSeconds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disableMobile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enableTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        enableSeconds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        formatDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hourIncrement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minuteIncrement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextArrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        noCalendar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        now: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        parseDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        prevArrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        shorthandCurrentMonth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showMonths: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "static": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        time24hr: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        weekNumbers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        getWeek: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        wrap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        plugins: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        locale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        convertModelValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        monthSelectorType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        flatpickrReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        flatpickrChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        flatpickrValueUpdate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        flatpickrOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        flatpickrClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        flatpickrMonthChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        flatpickrYearChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        flatpickrDayCreate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['input']
        }]
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      var
      /** @type {?} */
      USER_DEFAULTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('flatpickr defaults');
      /**
       * @param {?} userDefaults
       * @return {?}
       */

      function defaultsFactory(userDefaults) {
        var
        /** @type {?} */
        defaults = new FlatpickrDefaults();
        Object.assign(defaults, userDefaults);
        return defaults;
      }

      var FlatpickrModule = /*#__PURE__*/function () {
        function FlatpickrModule() {
          _classCallCheck(this, FlatpickrModule);
        }

        _createClass(FlatpickrModule, null, [{
          key: "forRoot",
          value:
          /**
           * @param {?=} userDefaults
           * @return {?}
           */
          function forRoot() {
            var userDefaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: FlatpickrModule,
              providers: [{
                provide: USER_DEFAULTS,
                useValue: userDefaults
              }, {
                provide: FlatpickrDefaults,
                useFactory: defaultsFactory,
                deps: [USER_DEFAULTS]
              }]
            };
          }
        }]);

        return FlatpickrModule;
      }();

      FlatpickrModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [FlatpickrDirective],
          exports: [FlatpickrDirective]
        }]
      }];
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcngtZmxhdHBpY2tyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyeC1mbGF0cGlja3IvZmxhdHBpY2tyLWRlZmF1bHRzLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXJ4LWZsYXRwaWNrci9mbGF0cGlja3IuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyeC1mbGF0cGlja3IvZmxhdHBpY2tyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIERpc2FibGVFbmFibGVEYXRlID1cbiAgfCBzdHJpbmdcbiAgfCBEYXRlXG4gIHwgeyBmcm9tOiBEYXRlIHwgc3RyaW5nOyB0bzogRGF0ZSB8IHN0cmluZyB9XG4gIHwgKChkYXRlOiBEYXRlKSA9PiBib29sZWFuKTtcblxuLy8gdHNsaW50OmRpc2FibGUgbm8taW5mZXJyYWJsZS10eXBlc1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYXRwaWNrckRlZmF1bHRzSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEV4YWN0bHkgdGhlIHNhbWUgYXMgZGF0ZSBmb3JtYXQsIGJ1dCBmb3IgdGhlIGFsdElucHV0IGZpZWxkLlxuICAgKi9cbiAgYWx0Rm9ybWF0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBcdFNob3cgdGhlIHVzZXIgYSByZWFkYWJsZSBkYXRlIChhcyBwZXIgYWx0Rm9ybWF0KSwgYnV0IHJldHVybiBzb21ldGhpbmcgdG90YWxseSBkaWZmZXJlbnQgdG8gdGhlIHNlcnZlci5cbiAgICovXG4gIGFsdElucHV0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhpcyBjbGFzcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBpbnB1dCBlbGVtZW50IGNyZWF0ZWQgYnkgdGhlIGFsdElucHV0IG9wdGlvbi5cbiAgICogTm90ZSB0aGF0IGBhbHRJbnB1dGAgYWxyZWFkeSBpbmhlcml0cyBjbGFzc2VzIGZyb20gdGhlIG9yaWdpbmFsIGlucHV0LlxuICAgKi9cbiAgYWx0SW5wdXRDbGFzcz86IHN0cmluZztcblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGVudGVyIGEgZGF0ZSBkaXJlY3RseSBpbnB1dCB0aGUgaW5wdXQgZmllbGQuIEJ5IGRlZmF1bHQsIGRpcmVjdCBlbnRyeSBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGFsbG93SW5wdXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbnN0ZWFkIG9mIGBib2R5YCwgYXBwZW5kcyB0aGUgY2FsZW5kYXIgdG8gdGhlIHNwZWNpZmllZCBub2RlIGluc3RlYWQuXG4gICAqL1xuICBhcHBlbmRUbz86IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGhvdyB0aGUgZGF0ZSB3aWxsIGJlIGZvcm1hdHRlZCBpbiB0aGUgYXJpYS1sYWJlbCBmb3IgY2FsZW5kYXIgZGF5cywgdXNpbmcgdGhlIHNhbWUgdG9rZW5zIGFzIGRhdGVGb3JtYXQuIElmIHlvdSBjaGFuZ2UgdGhpcywgeW91IHNob3VsZCBjaG9vc2UgYSB2YWx1ZSB0aGF0IHdpbGwgbWFrZSBzZW5zZSBpZiBhIHNjcmVlbiByZWFkZXIgcmVhZHMgaXQgb3V0IGxvdWQuXG4gICAqL1xuICBhcmlhRGF0ZUZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciBjbGlja2luZyBvbiB0aGUgaW5wdXQgc2hvdWxkIG9wZW4gdGhlIHBpY2tlci5cbiAgICogWW91IGNvdWxkIGRpc2FibGUgdGhpcyBpZiB5b3Ugd2lzaCB0byBvcGVuIHRoZSBjYWxlbmRhciBtYW51YWxseSBgd2l0aC5vcGVuKClgLlxuICAgKi9cbiAgY2xpY2tPcGVucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgd2hpY2ggYXJlIHVzZWQgdG8gZGVmaW5lIGhvdyB0aGUgZGF0ZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYm94LlxuICAgKiBUaGUgc3VwcG9ydGVkIGNoYXJhY3RlcnMgYXJlIGRlZmluZWQgaW4gdGhlIHRhYmxlIGJlbG93LlxuICAgKi9cbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIGhvdXIgZWxlbWVudC5cbiAgICovXG4gIGRlZmF1bHRIb3VyPzogbnVtYmVyO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiB0aGUgbWludXRlIGVsZW1lbnQuXG4gICAqL1xuICBkZWZhdWx0TWludXRlPzogbnVtYmVyO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiB0aGUgc2Vjb25kcyBlbGVtZW50LlxuICAgKi9cbiAgZGVmYXVsdFNlY29uZHM/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNlZSA8YSBocmVmPVwiaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyL2V4YW1wbGVzLyNkaXNhYmxpbmctc3BlY2lmaWMtZGF0ZXNcIj5kaXNhYmxpbmcgZGF0ZXM8L2E+LlxuICAgKi9cbiAgZGlzYWJsZT86IERpc2FibGVFbmFibGVEYXRlW107XG5cbiAgLyoqXG4gICAqIFNldCBkaXNhYmxlTW9iaWxlIHRvIHRydWUgdG8gYWx3YXlzIHVzZSB0aGUgbm9uLW5hdGl2ZSBwaWNrZXIuXG4gICAqIEJ5IGRlZmF1bHQsIEZsYXRwaWNrciB1dGlsaXplcyBuYXRpdmUgZGF0ZXRpbWUgd2lkZ2V0cyB1bmxlc3MgY2VydGFpbiBvcHRpb25zIChlLmcuIGRpc2FibGUpIGFyZSB1c2VkLlxuICAgKi9cbiAgZGlzYWJsZU1vYmlsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNlZSA8YSBocmVmPVwiaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyL2V4YW1wbGVzLyNkaXNhYmxpbmctYWxsLWRhdGVzLWV4Y2VwdC1zZWxlY3QtZmV3XCI+ZW5hYmxpbmcgZGF0ZXM8L2E+LlxuICAgKi9cbiAgZW5hYmxlPzogRGlzYWJsZUVuYWJsZURhdGVbXTtcblxuICAvKipcbiAgICogRW5hYmxlcyB0aW1lIHBpY2tlci5cbiAgICovXG4gIGVuYWJsZVRpbWU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIHNlY29uZHMgaW4gdGhlIHRpbWUgcGlja2VyLlxuICAgKi9cbiAgZW5hYmxlU2Vjb25kcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBbGxvd3MgdXNpbmcgYSBjdXN0b20gZGF0ZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGluc3RlYWQgb2YgdGhlIGJ1aWx0LWluIGhhbmRsaW5nIGZvciBkYXRlIGZvcm1hdHMgdXNpbmcgZGF0ZUZvcm1hdCwgYWx0Rm9ybWF0LCBldGMuXG4gICAqL1xuICBmb3JtYXREYXRlPzogKHZhbHVlOiBhbnkpID0+IHN0cmluZztcbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHN0ZXAgZm9yIHRoZSBob3VyIGlucHV0IChpbmNsLiBzY3JvbGxpbmcpLlxuICAgKi9cbiAgaG91ckluY3JlbWVudD86IG51bWJlcjtcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGNhbGVuZGFyIGlubGluZS5cbiAgICovXG4gIGlubGluZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIGRhdGUgdGhhdCBhIHVzZXIgY2FuIHBpY2sgdG8gKGluY2x1c2l2ZSkuXG4gICAqL1xuICBtYXhEYXRlPzogc3RyaW5nIHwgRGF0ZTtcblxuICAvKipcbiAgICogVGhlIG1pbmltdW0gZGF0ZSB0aGF0IGEgdXNlciBjYW4gc3RhcnQgcGlja2luZyBmcm9tIChpbmNsdXNpdmUpLlxuICAgKi9cbiAgbWluRGF0ZT86IHN0cmluZyB8IERhdGU7XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHN0ZXAgZm9yIHRoZSBtaW51dGUgaW5wdXQgKGluY2wuIHNjcm9sbGluZykuXG4gICAqL1xuICBtaW51dGVJbmNyZW1lbnQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhIHNpbmdsZSBkYXRlLCBtdWx0aXBsZSBkYXRlcyBvciBhIGRhdGUgcmFuZ2UuXG4gICAqL1xuICBtb2RlPzogJ3NpbmdsZScgfCAnbXVsdGlwbGUnIHwgJ3JhbmdlJztcblxuICAvKipcbiAgICogSFRNTCBmb3IgdGhlIGFycm93IGljb24sIHVzZWQgdG8gc3dpdGNoIG1vbnRocy5cbiAgICovXG4gIG5leHRBcnJvdz86IHN0cmluZztcblxuICAvKipcbiAgICogSGlkZXMgdGhlIGRheSBzZWxlY3Rpb24gaW4gY2FsZW5kYXIuIFVzZSBpdCBhbG9uZyB3aXRoIGBlbmFibGVUaW1lYCB0byBjcmVhdGUgYSB0aW1lIHBpY2tlci5cbiAgICovXG4gIG5vQ2FsZW5kYXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm92aWRlIGEgZGF0ZSBmb3IgJ3RvZGF5Jywgd2hpY2ggd2lsbCBiZSB1c2VkIGluc3RlYWQgb2YgXCJuZXcgRGF0ZSgpXCJcbiAgICovXG4gIG5vdz86IERhdGUgfCBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgZXhwZWN0cyBhIGRhdGUgc3RyaW5nIGFuZCBtdXN0IHJldHVybiBhIERhdGUgb2JqZWN0LlxuICAgKi9cbiAgcGFyc2VEYXRlPzogKHN0cjogc3RyaW5nKSA9PiBEYXRlO1xuXG4gIC8qKlxuICAgKiBIVE1MIGZvciB0aGUgbGVmdCBhcnJvdyBpY29uLlxuICAgKi9cbiAgcHJldkFycm93Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBtb250aCB1c2luZyB0aGUgc2hvcnRoYW5kIHZlcnNpb24gKGllLCBTZXAgaW5zdGVhZCBvZiBTZXB0ZW1iZXIpLlxuICAgKi9cbiAgc2hvcnRoYW5kQ3VycmVudE1vbnRoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUG9zaXRpb24gdGhlIGNhbGVuZGFyIGluc2lkZSB0aGUgd3JhcHBlciBhbmQgbmV4dCB0byB0aGUgaW5wdXQgZWxlbWVudC4gKExlYXZlIGBmYWxzZWAgdW5sZXNzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nKS5cbiAgICovXG4gIHN0YXRpYz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRpbWUgcGlja2VyIGluIDI0IGhvdXIgbW9kZSB3aXRob3V0IEFNL1BNIHNlbGVjdGlvbiB3aGVuIGVuYWJsZWQuXG4gICAqL1xuICB0aW1lMjRocj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgZGF0ZXMgd2lsbCBwYXJzZWQsIGZvcm1hdHRlZCwgYW5kIGRpc3BsYXllZCBpbiBVVEMuXG4gICAqIEl0J3MgcmVjb21tZW5kZWQgdGhhdCBkYXRlIHN0cmluZ3MgY29udGFpbiB0aGUgdGltZXpvbmUsIGJ1dCBub3QgbmVjZXNzYXJ5LlxuICAgKi9cbiAgdXRjPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW5hYmxlcyBkaXNwbGF5IG9mIHdlZWsgbnVtYmVycyBpbiBjYWxlbmRhci5cbiAgICovXG4gIHdlZWtOdW1iZXJzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogWW91IG1heSBvdmVycmlkZSB0aGUgZnVuY3Rpb24gdGhhdCBleHRyYWN0cyB0aGUgd2VlayBudW1iZXJzIGZyb20gYSBEYXRlIGJ5IHN1cHBseWluZyBhIGdldFdlZWsgZnVuY3Rpb24uXG4gICAqIEl0IHRha2VzIGluIGEgZGF0ZSBhcyBhIHBhcmFtZXRlciBhbmQgc2hvdWxkIHJldHVybiBhIGNvcnJlc3BvbmRpbmcgc3RyaW5nIHRoYXQgeW91IHdhbnQgdG8gYXBwZWFyIGxlZnQgb2YgZXZlcnkgd2Vlay5cbiAgICovXG4gIGdldFdlZWs/OiAoZGF0ZTogRGF0ZSkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZWxlbWVudHMgYW5kIGlucHV0IGdyb3Vwcy5cbiAgICovXG4gIHdyYXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBwbHVnaW4gaW5zdGFuY2VzIHRvIHVzZS5cbiAgICovXG4gIHBsdWdpbnM/OiBhbnlbXTtcblxuICAvKipcbiAgICogVGhlIGxvY2FsZSBvYmplY3Qgb3Igc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGxvY2FsZS5cbiAgICovXG4gIGxvY2FsZT86IG9iamVjdCB8IHN0cmluZztcblxuICAvKipcbiAgICogQXV0byBjb252ZXJ0IHRoZSBuZ01vZGVsIHZhbHVlIGZyb20gYSBzdHJpbmcgdG8gYSBkYXRlIC8gYXJyYXkgb2YgZGF0ZXMgLyBmcm9tIC0gdG8gZGF0ZSBvYmplY3QgZGVwZW5kaW5nIG9uIHRoZSBgbW9kZWBcbiAgICovXG4gIGNvbnZlcnRNb2RlbFZhbHVlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBtb250aHMgc2hvd24uXG4gICAqL1xuICBzaG93TW9udGhzPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBIb3cgdGhlIG1vbnRoIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGhlYWRlciBvZiB0aGUgY2FsZW5kYXIuXG4gICAqL1xuICBtb250aFNlbGVjdG9yVHlwZT86ICdzdGF0aWMnIHwgJ2Ryb3Bkb3duJztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZsYXRwaWNrckRlZmF1bHRzIGltcGxlbWVudHMgRmxhdHBpY2tyRGVmYXVsdHNJbnRlcmZhY2Uge1xuICAvKipcbiAgICogRXhhY3RseSB0aGUgc2FtZSBhcyBkYXRlIGZvcm1hdCwgYnV0IGZvciB0aGUgYWx0SW5wdXQgZmllbGQuXG4gICAqL1xuICBhbHRGb3JtYXQ6IHN0cmluZyA9ICdGIGosIFknO1xuXG4gIC8qKlxuICAgKiBcdFNob3cgdGhlIHVzZXIgYSByZWFkYWJsZSBkYXRlIChhcyBwZXIgYWx0Rm9ybWF0KSwgYnV0IHJldHVybiBzb21ldGhpbmcgdG90YWxseSBkaWZmZXJlbnQgdG8gdGhlIHNlcnZlci5cbiAgICovXG4gIGFsdElucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoaXMgY2xhc3Mgd2lsbCBiZSBhZGRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCBjcmVhdGVkIGJ5IHRoZSBhbHRJbnB1dCBvcHRpb24uXG4gICAqIE5vdGUgdGhhdCBgYWx0SW5wdXRgIGFscmVhZHkgaW5oZXJpdHMgY2xhc3NlcyBmcm9tIHRoZSBvcmlnaW5hbCBpbnB1dC5cbiAgICovXG4gIGFsdElucHV0Q2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIHVzZXIgdG8gZW50ZXIgYSBkYXRlIGRpcmVjdGx5IGlucHV0IHRoZSBpbnB1dCBmaWVsZC4gQnkgZGVmYXVsdCwgZGlyZWN0IGVudHJ5IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgYWxsb3dJbnB1dDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbnN0ZWFkIG9mIGBib2R5YCwgYXBwZW5kcyB0aGUgY2FsZW5kYXIgdG8gdGhlIHNwZWNpZmllZCBub2RlIGluc3RlYWQuXG4gICAqL1xuICBhcHBlbmRUbzogSFRNTEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIERlZmluZXMgaG93IHRoZSBkYXRlIHdpbGwgYmUgZm9ybWF0dGVkIGluIHRoZSBhcmlhLWxhYmVsIGZvciBjYWxlbmRhciBkYXlzLCB1c2luZyB0aGUgc2FtZSB0b2tlbnMgYXMgZGF0ZUZvcm1hdC4gSWYgeW91IGNoYW5nZSB0aGlzLCB5b3Ugc2hvdWxkIGNob29zZSBhIHZhbHVlIHRoYXQgd2lsbCBtYWtlIHNlbnNlIGlmIGEgc2NyZWVuIHJlYWRlciByZWFkcyBpdCBvdXQgbG91ZC5cbiAgICovXG4gIGFyaWFEYXRlRm9ybWF0Pzogc3RyaW5nID0gJ0YgaiwgWSc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgY2xpY2tpbmcgb24gdGhlIGlucHV0IHNob3VsZCBvcGVuIHRoZSBwaWNrZXIuXG4gICAqIFlvdSBjb3VsZCBkaXNhYmxlIHRoaXMgaWYgeW91IHdpc2ggdG8gb3BlbiB0aGUgY2FsZW5kYXIgbWFudWFsbHkgYHdpdGgub3BlbigpYC5cbiAgICovXG4gIGNsaWNrT3BlbnM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBvZiBjaGFyYWN0ZXJzIHdoaWNoIGFyZSB1c2VkIHRvIGRlZmluZSBob3cgdGhlIGRhdGUgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGJveC5cbiAgICogVGhlIHN1cHBvcnRlZCBjaGFyYWN0ZXJzIGFyZSBkZWZpbmVkIGluIHRoZSB0YWJsZSBiZWxvdy5cbiAgICovXG4gIGRhdGVGb3JtYXQ6IHN0cmluZyA9ICdZLW0tZCc7XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIGhvdXIgZWxlbWVudC5cbiAgICovXG4gIGRlZmF1bHRIb3VyPzogbnVtYmVyID0gMTI7XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIG1pbnV0ZSBlbGVtZW50LlxuICAgKi9cbiAgZGVmYXVsdE1pbnV0ZT86IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIHNlY29uZHMgZWxlbWVudC5cbiAgICovXG4gIGRlZmF1bHRTZWNvbmRzPzogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogU2VlIDxhIGhyZWY9XCJodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvZXhhbXBsZXMvI2Rpc2FibGluZy1zcGVjaWZpYy1kYXRlc1wiPmRpc2FibGluZyBkYXRlczwvYT4uXG4gICAqL1xuICBkaXNhYmxlOiBEaXNhYmxlRW5hYmxlRGF0ZVtdID0gW107XG5cbiAgLyoqXG4gICAqIFNldCBkaXNhYmxlTW9iaWxlIHRvIHRydWUgdG8gYWx3YXlzIHVzZSB0aGUgbm9uLW5hdGl2ZSBwaWNrZXIuXG4gICAqIEJ5IGRlZmF1bHQsIEZsYXRwaWNrciB1dGlsaXplcyBuYXRpdmUgZGF0ZXRpbWUgd2lkZ2V0cyB1bmxlc3MgY2VydGFpbiBvcHRpb25zIChlLmcuIGRpc2FibGUpIGFyZSB1c2VkLlxuICAgKi9cbiAgZGlzYWJsZU1vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTZWUgPGEgaHJlZj1cImh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci9leGFtcGxlcy8jZGlzYWJsaW5nLWFsbC1kYXRlcy1leGNlcHQtc2VsZWN0LWZld1wiPmVuYWJsaW5nIGRhdGVzPC9hPi5cbiAgICovXG4gIGVuYWJsZTogRGlzYWJsZUVuYWJsZURhdGVbXTtcblxuICAvKipcbiAgICogRW5hYmxlcyB0aW1lIHBpY2tlci5cbiAgICovXG4gIGVuYWJsZVRpbWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRW5hYmxlcyBzZWNvbmRzIGluIHRoZSB0aW1lIHBpY2tlci5cbiAgICovXG4gIGVuYWJsZVNlY29uZHM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQWxsb3dzIHVzaW5nIGEgY3VzdG9tIGRhdGUgZm9ybWF0dGluZyBmdW5jdGlvbiBpbnN0ZWFkIG9mIHRoZSBidWlsdC1pbiBoYW5kbGluZyBmb3IgZGF0ZSBmb3JtYXRzIHVzaW5nIGRhdGVGb3JtYXQsIGFsdEZvcm1hdCwgZXRjLlxuICAgKi9cbiAgZm9ybWF0RGF0ZT86ICh2YWx1ZTogYW55KSA9PiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHN0ZXAgZm9yIHRoZSBob3VyIGlucHV0IChpbmNsLiBzY3JvbGxpbmcpLlxuICAgKi9cbiAgaG91ckluY3JlbWVudDogbnVtYmVyID0gMTtcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGNhbGVuZGFyIGlubGluZS5cbiAgICovXG4gIGlubGluZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBkYXRlIHRoYXQgYSB1c2VyIGNhbiBwaWNrIHRvIChpbmNsdXNpdmUpLlxuICAgKi9cbiAgbWF4RGF0ZTogc3RyaW5nIHwgRGF0ZSA9IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogVGhlIG1pbmltdW0gZGF0ZSB0aGF0IGEgdXNlciBjYW4gc3RhcnQgcGlja2luZyBmcm9tIChpbmNsdXNpdmUpLlxuICAgKi9cbiAgbWluRGF0ZTogc3RyaW5nIHwgRGF0ZSA9IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQWRqdXN0cyB0aGUgc3RlcCBmb3IgdGhlIG1pbnV0ZSBpbnB1dCAoaW5jbC4gc2Nyb2xsaW5nKS5cbiAgICovXG4gIG1pbnV0ZUluY3JlbWVudDogbnVtYmVyID0gNTtcblxuICAvKipcbiAgICogU2VsZWN0IGEgc2luZ2xlIGRhdGUsIG11bHRpcGxlIGRhdGVzIG9yIGEgZGF0ZSByYW5nZS5cbiAgICovXG4gIG1vZGU6ICdzaW5nbGUnIHwgJ211bHRpcGxlJyB8ICdyYW5nZScgPSAnc2luZ2xlJztcblxuICAvKipcbiAgICogSFRNTCBmb3IgdGhlIGFycm93IGljb24sIHVzZWQgdG8gc3dpdGNoIG1vbnRocy5cbiAgICovXG4gIG5leHRBcnJvdzogc3RyaW5nID0gJz4nO1xuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgZGF5IHNlbGVjdGlvbiBpbiBjYWxlbmRhci4gVXNlIGl0IGFsb25nIHdpdGggYGVuYWJsZVRpbWVgIHRvIGNyZWF0ZSBhIHRpbWUgcGlja2VyLlxuICAgKi9cbiAgbm9DYWxlbmRhcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG5vdyB0byB0aGUgY3VycmVudCBkYXRlXG4gICAqL1xuICBub3c6IERhdGUgfCBzdHJpbmcgfCBudW1iZXIgPSBuZXcgRGF0ZSgpO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IGV4cGVjdHMgYSBkYXRlIHN0cmluZyBhbmQgbXVzdCByZXR1cm4gYSBEYXRlIG9iamVjdC5cbiAgICovXG4gIHBhcnNlRGF0ZTogKHN0cjogc3RyaW5nKSA9PiBEYXRlO1xuXG4gIC8qKlxuICAgKiBIVE1MIGZvciB0aGUgbGVmdCBhcnJvdyBpY29uLlxuICAgKi9cbiAgcHJldkFycm93OiBzdHJpbmcgPSAnPCc7XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIG1vbnRoIHVzaW5nIHRoZSBzaG9ydGhhbmQgdmVyc2lvbiAoaWUsIFNlcCBpbnN0ZWFkIG9mIFNlcHRlbWJlcikuXG4gICAqL1xuICBzaG9ydGhhbmRDdXJyZW50TW9udGg6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogUG9zaXRpb24gdGhlIGNhbGVuZGFyIGluc2lkZSB0aGUgd3JhcHBlciBhbmQgbmV4dCB0byB0aGUgaW5wdXQgZWxlbWVudC4gKExlYXZlIGBmYWxzZWAgdW5sZXNzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nKS5cbiAgICovXG4gIHN0YXRpYzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aW1lIHBpY2tlciBpbiAyNCBob3VyIG1vZGUgd2l0aG91dCBBTS9QTSBzZWxlY3Rpb24gd2hlbiBlbmFibGVkLlxuICAgKi9cbiAgdGltZTI0aHI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBkYXRlcyB3aWxsIHBhcnNlZCwgZm9ybWF0dGVkLCBhbmQgZGlzcGxheWVkIGluIFVUQy5cbiAgICogSXQncyByZWNvbW1lbmRlZCB0aGF0IGRhdGUgc3RyaW5ncyBjb250YWluIHRoZSB0aW1lem9uZSwgYnV0IG5vdCBuZWNlc3NhcnkuXG4gICAqL1xuICB1dGM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogRW5hYmxlcyBkaXNwbGF5IG9mIHdlZWsgbnVtYmVycyBpbiBjYWxlbmRhci5cbiAgICovXG4gIHdlZWtOdW1iZXJzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFlvdSBtYXkgb3ZlcnJpZGUgdGhlIGZ1bmN0aW9uIHRoYXQgZXh0cmFjdHMgdGhlIHdlZWsgbnVtYmVycyBmcm9tIGEgRGF0ZSBieSBzdXBwbHlpbmcgYSBnZXRXZWVrIGZ1bmN0aW9uLlxuICAgKiBJdCB0YWtlcyBpbiBhIGRhdGUgYXMgYSBwYXJhbWV0ZXIgYW5kIHNob3VsZCByZXR1cm4gYSBjb3JyZXNwb25kaW5nIHN0cmluZyB0aGF0IHlvdSB3YW50IHRvIGFwcGVhciBsZWZ0IG9mIGV2ZXJ5IHdlZWsuXG4gICAqL1xuICBnZXRXZWVrOiAoZGF0ZTogRGF0ZSkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZWxlbWVudHMgYW5kIGlucHV0IGdyb3Vwcy5cbiAgICovXG4gIHdyYXA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQXJyYXkgb2YgcGx1Z2luIGluc3RhbmNlcyB0byB1c2UuXG4gICAqL1xuICBwbHVnaW5zOiBhbnlbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgbG9jYWxlIG9iamVjdCBvciBzdHJpbmcgdG8gdXNlIGZvciB0aGUgbG9jYWxlLlxuICAgKi9cbiAgbG9jYWxlOiBvYmplY3QgfCBzdHJpbmcgPSAnZGVmYXVsdCc7XG5cbiAgLyoqXG4gICAqIEF1dG8gY29udmVydCB0aGUgbmdNb2RlbCB2YWx1ZSBmcm9tIGEgc3RyaW5nIHRvIGEgZGF0ZSAvIGFycmF5IG9mIGRhdGVzIC8gZnJvbSAtIHRvIGRhdGUgb2JqZWN0IGRlcGVuZGluZyBvbiB0aGUgYG1vZGVgXG4gICAqL1xuICBjb252ZXJ0TW9kZWxWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIG1vbnRocyBzaG93bi5cbiAgICovXG4gIHNob3dNb250aHM6IG51bWJlciA9IDE7XG5cbiAgLyoqXG4gICAqIEhvdyB0aGUgbW9udGggc2hvdWxkIGJlIGRpc3BsYXllZCBpbiB0aGUgaGVhZGVyIG9mIHRoZSBjYWxlbmRhci5cbiAgICovXG4gIG1vbnRoU2VsZWN0b3JUeXBlOiAnc3RhdGljJyB8ICdkcm9wZG93bicgPSAnc3RhdGljJztcbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGbGF0cGlja3JEZWZhdWx0cyxcbiAgRGlzYWJsZUVuYWJsZURhdGUsXG4gIEZsYXRwaWNrckRlZmF1bHRzSW50ZXJmYWNlXG59IGZyb20gJy4vZmxhdHBpY2tyLWRlZmF1bHRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYXRQaWNrck91dHB1dE9wdGlvbnMge1xuICBzZWxlY3RlZERhdGVzOiBEYXRlW107XG4gIGRhdGVTdHJpbmc6IHN0cmluZztcbiAgaW5zdGFuY2U6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGbGF0UGlja3JEYXlDcmVhdGVPdXRwdXRPcHRpb25zXG4gIGV4dGVuZHMgRmxhdFBpY2tyT3V0cHV0T3B0aW9ucyB7XG4gIGRheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgRkxBVFBJQ0tSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZsYXRwaWNrckRpcmVjdGl2ZSksIC8vdHNsaW50OmRpc2FibGUtbGluZVxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bEZsYXRwaWNrcl0nLFxuICBwcm92aWRlcnM6IFtGTEFUUElDS1JfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl0sXG4gIGhvc3Q6IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxuICAgICcoYmx1ciknOiAnb25Ub3VjaGVkRm4oKSdcbiAgfSxcbiAgZXhwb3J0QXM6ICdtd2xGbGF0cGlja3InXG59KVxuZXhwb3J0IGNsYXNzIEZsYXRwaWNrckRpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIC8qKlxuICAgKiBPYmplY3Qtb3B0aW9ucyB0aGF0IGNhbiBiZSB1c2VyIGZvciBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgRmxhdHBpY2tyLlxuICAgKiBPcHRpb24gZnJvbSB0aGlzIG9iamVjdCBpcyBhcHBsaWVkIG9ubHkgaWYgc3BlY2lmaWMgb3B0aW9uIGlzIG5vdCBzcGVjaWZpZWQuXG4gICAqIEV4YW1wbGU6XG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogb3B0aW9uczogRmxhdHBpY2tyRGVmYXVsdHNJbnRlcmZhY2UgPSB7XG4gICAqICAgICAgYWx0Rm9ybWF0OiAnZC9tL1knLCAgIC8vIHdpbGwgYmUgaWdub3JlZCBzaW5jZSBhbHRGb3JtYXQgaXMgcHJvdmlkZWQgdmlhIHNwZWNpZmljIGF0dHJpYnV0ZVxuICAgKiAgICAgIGFsdElucHV0OiB0cnVlICAgICAgICAvLyB3aWxsIGJlIHVzZWQgc2luY2Ugc3BlY2lmaWMgYXR0cmlidXRlIGlzIG5vdCBwcm92aWRlZFxuICAgKiB9O1xuICAgKiBgYGBcbiAgICogYGBgaHRtbFxuICAgKiA8aW5wdXRcbiAgICogICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAqICAgdHlwZT1cInRleHRcIlxuICAgKiAgIG13bEZsYXRwaWNrclxuICAgKiAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuICAgKiAgIGFsdEZvcm1hdD1cImQvbS9ZXCI+XG4gICAqIGBgYFxuICAgKi9cbiAgQElucHV0KCkgb3B0aW9uczogRmxhdHBpY2tyRGVmYXVsdHNJbnRlcmZhY2UgPSB7fTtcblxuICAvKipcbiAgICogRXhhY3RseSB0aGUgc2FtZSBhcyBkYXRlIGZvcm1hdCwgYnV0IGZvciB0aGUgYWx0SW5wdXQgZmllbGQuXG4gICAqL1xuICBASW5wdXQoKSBhbHRGb3JtYXQ6IHN0cmluZztcblxuICAvKipcbiAgICogXHRTaG93IHRoZSB1c2VyIGEgcmVhZGFibGUgZGF0ZSAoYXMgcGVyIGFsdEZvcm1hdCksIGJ1dCByZXR1cm4gc29tZXRoaW5nIHRvdGFsbHkgZGlmZmVyZW50IHRvIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBASW5wdXQoKSBhbHRJbnB1dDogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhpcyBjbGFzcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBpbnB1dCBlbGVtZW50IGNyZWF0ZWQgYnkgdGhlIGFsdElucHV0IG9wdGlvbi5cbiAgICogTm90ZSB0aGF0IGBhbHRJbnB1dGAgYWxyZWFkeSBpbmhlcml0cyBjbGFzc2VzIGZyb20gdGhlIG9yaWdpbmFsIGlucHV0LlxuICAgKi9cbiAgQElucHV0KCkgYWx0SW5wdXRDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIHVzZXIgdG8gZW50ZXIgYSBkYXRlIGRpcmVjdGx5IGlucHV0IHRoZSBpbnB1dCBmaWVsZC4gQnkgZGVmYXVsdCwgZGlyZWN0IGVudHJ5IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgQElucHV0KCkgYWxsb3dJbnB1dDogYm9vbGVhbjtcblxuICAvKipcbiAgICogSW5zdGVhZCBvZiBgYm9keWAsIGFwcGVuZHMgdGhlIGNhbGVuZGFyIHRvIHRoZSBzcGVjaWZpZWQgbm9kZSBpbnN0ZWFkLlxuICAgKi9cbiAgQElucHV0KCkgYXBwZW5kVG86IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGhvdyB0aGUgZGF0ZSB3aWxsIGJlIGZvcm1hdHRlZCBpbiB0aGUgYXJpYS1sYWJlbCBmb3IgY2FsZW5kYXIgZGF5cywgdXNpbmcgdGhlIHNhbWUgdG9rZW5zIGFzIGRhdGVGb3JtYXQuIElmIHlvdSBjaGFuZ2UgdGhpcywgeW91IHNob3VsZCBjaG9vc2UgYSB2YWx1ZSB0aGF0IHdpbGwgbWFrZSBzZW5zZSBpZiBhIHNjcmVlbiByZWFkZXIgcmVhZHMgaXQgb3V0IGxvdWQuXG4gICAqL1xuICBASW5wdXQoKSBhcmlhRGF0ZUZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciBjbGlja2luZyBvbiB0aGUgaW5wdXQgc2hvdWxkIG9wZW4gdGhlIHBpY2tlci5cbiAgICogWW91IGNvdWxkIGRpc2FibGUgdGhpcyBpZiB5b3Ugd2lzaCB0byBvcGVuIHRoZSBjYWxlbmRhciBtYW51YWxseSBgd2l0aC5vcGVuKClgLlxuICAgKi9cbiAgQElucHV0KCkgY2xpY2tPcGVuczogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBzdHJpbmcgb2YgY2hhcmFjdGVycyB3aGljaCBhcmUgdXNlZCB0byBkZWZpbmUgaG93IHRoZSBkYXRlIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSBpbnB1dCBib3guXG4gICAqIFRoZSBzdXBwb3J0ZWQgY2hhcmFjdGVycyBhcmUgZGVmaW5lZCBpbiB0aGUgdGFibGUgYmVsb3cuXG4gICAqL1xuICBASW5wdXQoKSBkYXRlRm9ybWF0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIGhvdXIgZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgpIGRlZmF1bHRIb3VyPzogbnVtYmVyO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiB0aGUgbWludXRlIGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoKSBkZWZhdWx0TWludXRlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIG9mIHRoZSBzZWNvbmRzIGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoKSBkZWZhdWx0U2Vjb25kcz86IG51bWJlcjtcblxuICAvKipcbiAgICogU2VlIDxhIGhyZWY9XCJodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvZXhhbXBsZXMvI2Rpc2FibGluZy1zcGVjaWZpYy1kYXRlc1wiPmRpc2FibGluZyBkYXRlczwvYT4uXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlOiBEaXNhYmxlRW5hYmxlRGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBTZXQgZGlzYWJsZU1vYmlsZSB0byB0cnVlIHRvIGFsd2F5cyB1c2UgdGhlIG5vbi1uYXRpdmUgcGlja2VyLlxuICAgKiBCeSBkZWZhdWx0LCBGbGF0cGlja3IgdXRpbGl6ZXMgbmF0aXZlIGRhdGV0aW1lIHdpZGdldHMgdW5sZXNzIGNlcnRhaW4gb3B0aW9ucyAoZS5nLiBkaXNhYmxlKSBhcmUgdXNlZC5cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVNb2JpbGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNlZSA8YSBocmVmPVwiaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyL2V4YW1wbGVzLyNkaXNhYmxpbmctYWxsLWRhdGVzLWV4Y2VwdC1zZWxlY3QtZmV3XCI+ZW5hYmxpbmcgZGF0ZXM8L2E+LlxuICAgKi9cbiAgQElucHV0KCkgZW5hYmxlOiBEaXNhYmxlRW5hYmxlRGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRpbWUgcGlja2VyLlxuICAgKi9cbiAgQElucHV0KCkgZW5hYmxlVGltZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW5hYmxlcyBzZWNvbmRzIGluIHRoZSB0aW1lIHBpY2tlci5cbiAgICovXG4gIEBJbnB1dCgpIGVuYWJsZVNlY29uZHM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFsbG93cyB1c2luZyBhIGN1c3RvbSBkYXRlIGZvcm1hdHRpbmcgZnVuY3Rpb24gaW5zdGVhZCBvZiB0aGUgYnVpbHQtaW4gaGFuZGxpbmcgZm9yIGRhdGUgZm9ybWF0cyB1c2luZyBkYXRlRm9ybWF0LCBhbHRGb3JtYXQsIGV0Yy5cbiAgICovXG4gIEBJbnB1dCgpIGZvcm1hdERhdGU/OiAodmFsdWU6IGFueSkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzdGVwIGZvciB0aGUgaG91ciBpbnB1dCAoaW5jbC4gc2Nyb2xsaW5nKS5cbiAgICovXG4gIEBJbnB1dCgpIGhvdXJJbmNyZW1lbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGNhbGVuZGFyIGlubGluZS5cbiAgICovXG4gIEBJbnB1dCgpIGlubGluZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gZGF0ZSB0aGF0IGEgdXNlciBjYW4gcGljayB0byAoaW5jbHVzaXZlKS5cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IHN0cmluZyB8IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIGRhdGUgdGhhdCBhIHVzZXIgY2FuIHN0YXJ0IHBpY2tpbmcgZnJvbSAoaW5jbHVzaXZlKS5cbiAgICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IHN0cmluZyB8IERhdGU7XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHN0ZXAgZm9yIHRoZSBtaW51dGUgaW5wdXQgKGluY2wuIHNjcm9sbGluZykuXG4gICAqL1xuICBASW5wdXQoKSBtaW51dGVJbmNyZW1lbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2VsZWN0IGEgc2luZ2xlIGRhdGUsIG11bHRpcGxlIGRhdGVzIG9yIGEgZGF0ZSByYW5nZS5cbiAgICovXG4gIEBJbnB1dCgpIG1vZGU6ICdzaW5nbGUnIHwgJ211bHRpcGxlJyB8ICdyYW5nZSc7XG5cbiAgLyoqXG4gICAqIEhUTUwgZm9yIHRoZSBhcnJvdyBpY29uLCB1c2VkIHRvIHN3aXRjaCBtb250aHMuXG4gICAqL1xuICBASW5wdXQoKSBuZXh0QXJyb3c6IHN0cmluZztcblxuICAvKipcbiAgICogSGlkZXMgdGhlIGRheSBzZWxlY3Rpb24gaW4gY2FsZW5kYXIuIFVzZSBpdCBhbG9uZyB3aXRoIGBlbmFibGVUaW1lYCB0byBjcmVhdGUgYSB0aW1lIHBpY2tlci5cbiAgICovXG4gIEBJbnB1dCgpIG5vQ2FsZW5kYXI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByb3ZpZGUgYSBkYXRlIGZvciAndG9kYXknLCB3aGljaCB3aWxsIGJlIHVzZWQgaW5zdGVhZCBvZiBcIm5ldyBEYXRlKClcIlxuICAgKi9cbiAgQElucHV0KCkgbm93PzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBleHBlY3RzIGEgZGF0ZSBzdHJpbmcgYW5kIG11c3QgcmV0dXJuIGEgRGF0ZSBvYmplY3QuXG4gICAqL1xuICBASW5wdXQoKSBwYXJzZURhdGU6IChzdHI6IHN0cmluZykgPT4gRGF0ZTtcblxuICAvKipcbiAgICogSFRNTCBmb3IgdGhlIGxlZnQgYXJyb3cgaWNvbi5cbiAgICovXG4gIEBJbnB1dCgpIHByZXZBcnJvdzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBtb250aCB1c2luZyB0aGUgc2hvcnRoYW5kIHZlcnNpb24gKGllLCBTZXAgaW5zdGVhZCBvZiBTZXB0ZW1iZXIpLlxuICAgKi9cbiAgQElucHV0KCkgc2hvcnRoYW5kQ3VycmVudE1vbnRoOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIG1vbnRocyBzaG93bi5cbiAgICovXG4gIEBJbnB1dCgpIHNob3dNb250aHM6IG51bWJlcjtcblxuICAvKipcbiAgICogUG9zaXRpb24gdGhlIGNhbGVuZGFyIGluc2lkZSB0aGUgd3JhcHBlciBhbmQgbmV4dCB0byB0aGUgaW5wdXQgZWxlbWVudC4gKExlYXZlIGBmYWxzZWAgdW5sZXNzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nKS5cbiAgICovXG4gIEBJbnB1dCgpIHN0YXRpYzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzcGxheXMgdGltZSBwaWNrZXIgaW4gMjQgaG91ciBtb2RlIHdpdGhvdXQgQU0vUE0gc2VsZWN0aW9uIHdoZW4gZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIHRpbWUyNGhyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIGRpc3BsYXkgb2Ygd2VlayBudW1iZXJzIGluIGNhbGVuZGFyLlxuICAgKi9cbiAgQElucHV0KCkgd2Vla051bWJlcnM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFlvdSBtYXkgb3ZlcnJpZGUgdGhlIGZ1bmN0aW9uIHRoYXQgZXh0cmFjdHMgdGhlIHdlZWsgbnVtYmVycyBmcm9tIGEgRGF0ZSBieSBzdXBwbHlpbmcgYSBnZXRXZWVrIGZ1bmN0aW9uLlxuICAgKiBJdCB0YWtlcyBpbiBhIGRhdGUgYXMgYSBwYXJhbWV0ZXIgYW5kIHNob3VsZCByZXR1cm4gYSBjb3JyZXNwb25kaW5nIHN0cmluZyB0aGF0IHlvdSB3YW50IHRvIGFwcGVhciBsZWZ0IG9mIGV2ZXJ5IHdlZWsuXG4gICAqL1xuICBASW5wdXQoKSBnZXRXZWVrOiAoZGF0ZTogRGF0ZSkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZWxlbWVudHMgYW5kIGlucHV0IGdyb3Vwcy5cbiAgICovXG4gIEBJbnB1dCgpIHdyYXA6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIHBsdWdpbiBpbnN0YW5jZXMgdG8gdXNlLlxuICAgKi9cbiAgQElucHV0KCkgcGx1Z2luczogYW55W107XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgb2JqZWN0IG9yIHN0cmluZyB0byB1c2UgZm9yIHRoZSBsb2NhbGUuXG4gICAqL1xuICBASW5wdXQoKSBsb2NhbGU6IG9iamVjdCB8IHN0cmluZztcblxuICAvKipcbiAgICogQXV0byBjb252ZXJ0IHRoZSBuZ01vZGVsIHZhbHVlIGZyb20gYSBzdHJpbmcgdG8gYSBkYXRlIC8gYXJyYXkgb2YgZGF0ZXMgLyBmcm9tIC0gdG8gZGF0ZSBvYmplY3QgZGVwZW5kaW5nIG9uIHRoZSBgbW9kZWBcbiAgICovXG4gIEBJbnB1dCgpIGNvbnZlcnRNb2RlbFZhbHVlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIb3cgdGhlIG1vbnRoIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGhlYWRlciBvZiB0aGUgY2FsZW5kYXIuXG4gICAqL1xuICBASW5wdXQoKSBtb250aFNlbGVjdG9yVHlwZTogJ3N0YXRpYycgfCAnZHJvcGRvd24nO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRyaWdnZXJlZCBvbmNlIHRoZSBjYWxlbmRhciBpcyBpbiBhIHJlYWR5IHN0YXRlXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZmxhdHBpY2tyUmVhZHk6IEV2ZW50RW1pdHRlcjxGbGF0UGlja3JPdXRwdXRPcHRpb25zPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIGEgZGF0ZSwgb3IgY2hhbmdlcyB0aGUgdGltZSBvbiBhIHNlbGVjdGVkIGRhdGUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZmxhdHBpY2tyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RmxhdFBpY2tyT3V0cHV0T3B0aW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIGlzIHVwZGF0ZWQgd2l0aCBhIG5ldyBkYXRlIHN0cmluZy5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBmbGF0cGlja3JWYWx1ZVVwZGF0ZTogRXZlbnRFbWl0dGVyPFxuICAgIEZsYXRQaWNrck91dHB1dE9wdGlvbnNcbiAgPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgY2FsZW5kYXIgaXMgb3BlbmVkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrck9wZW46IEV2ZW50RW1pdHRlcjxGbGF0UGlja3JPdXRwdXRPcHRpb25zPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgY2FsZW5kYXIgaXMgY2xvc2VkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrckNsb3NlOiBFdmVudEVtaXR0ZXI8RmxhdFBpY2tyT3V0cHV0T3B0aW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIG1vbnRoIGlzIGNoYW5nZWQsIGVpdGhlciBieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrck1vbnRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8XG4gICAgRmxhdFBpY2tyT3V0cHV0T3B0aW9uc1xuICA+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRyaWdnZXJlZCB3aGVuIHRoZSB5ZWFyIGlzIGNoYW5nZWQsIGVpdGhlciBieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrclllYXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxcbiAgICBGbGF0UGlja3JPdXRwdXRPcHRpb25zXG4gID4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRha2UgZnVsbCBjb250cm9sIG9mIGV2ZXJ5IGRhdGUgY2VsbCB3aXRoIHRoaXMgb3V0cHV0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgZmxhdHBpY2tyRGF5Q3JlYXRlOiBFdmVudEVtaXR0ZXI8XG4gICAgRmxhdFBpY2tyRGF5Q3JlYXRlT3V0cHV0T3B0aW9uc1xuICA+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBUaGUgZmxhdHBpY2tyIGluc3RhbmNlIHdoZXJlIHlvdSBjYW4gY2FsbCBtZXRob2RzIGxpa2UgdG9nZ2xlKCksIG9wZW4oKSwgY2xvc2UoKSBldGNcbiAgICovXG4gIGluc3RhbmNlOiBmbGF0cGlja3IuSW5zdGFuY2U7XG5cbiAgcHJpdmF0ZSBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgaW5pdGlhbFZhbHVlOiBhbnk7XG5cbiAgb25DaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4gIG9uVG91Y2hlZEZuID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbG06IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBkZWZhdWx0czogRmxhdHBpY2tyRGVmYXVsdHMsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgYWx0Rm9ybWF0OiB0aGlzLmFsdEZvcm1hdCxcbiAgICAgIGFsdElucHV0OiB0aGlzLmFsdElucHV0LFxuICAgICAgYWx0SW5wdXRDbGFzczogdGhpcy5hbHRJbnB1dENsYXNzLFxuICAgICAgYWxsb3dJbnB1dDogdGhpcy5hbGxvd0lucHV0LFxuICAgICAgYXBwZW5kVG86IHRoaXMuYXBwZW5kVG8sXG4gICAgICBhcmlhRGF0ZUZvcm1hdDogdGhpcy5hcmlhRGF0ZUZvcm1hdCxcbiAgICAgIGNsaWNrT3BlbnM6IHRoaXMuY2xpY2tPcGVucyxcbiAgICAgIGRhdGVGb3JtYXQ6IHRoaXMuZGF0ZUZvcm1hdCxcbiAgICAgIGRlZmF1bHRIb3VyOiB0aGlzLmRlZmF1bHRIb3VyLFxuICAgICAgZGVmYXVsdE1pbnV0ZTogdGhpcy5kZWZhdWx0TWludXRlLFxuICAgICAgZGVmYXVsdFNlY29uZHM6IHRoaXMuZGVmYXVsdFNlY29uZHMsXG4gICAgICBkaXNhYmxlOiB0aGlzLmRpc2FibGUsXG4gICAgICBkaXNhYmxlTW9iaWxlOiB0aGlzLmRpc2FibGVNb2JpbGUsXG4gICAgICBlbmFibGU6IHRoaXMuZW5hYmxlLFxuICAgICAgZW5hYmxlVGltZTogdGhpcy5lbmFibGVUaW1lLFxuICAgICAgZW5hYmxlU2Vjb25kczogdGhpcy5lbmFibGVTZWNvbmRzLFxuICAgICAgZm9ybWF0RGF0ZTogdGhpcy5mb3JtYXREYXRlLFxuICAgICAgaG91ckluY3JlbWVudDogdGhpcy5ob3VySW5jcmVtZW50LFxuICAgICAgZGVmYXVsdERhdGU6IHRoaXMuaW5pdGlhbFZhbHVlLFxuICAgICAgaW5saW5lOiB0aGlzLmlubGluZSxcbiAgICAgIG1heERhdGU6IHRoaXMubWF4RGF0ZSxcbiAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSxcbiAgICAgIG1pbnV0ZUluY3JlbWVudDogdGhpcy5taW51dGVJbmNyZW1lbnQsXG4gICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICBuZXh0QXJyb3c6IHRoaXMubmV4dEFycm93LFxuICAgICAgbm9DYWxlbmRhcjogdGhpcy5ub0NhbGVuZGFyLFxuICAgICAgbm93OiB0aGlzLm5vdyxcbiAgICAgIHBhcnNlRGF0ZTogdGhpcy5wYXJzZURhdGUsXG4gICAgICBwcmV2QXJyb3c6IHRoaXMucHJldkFycm93LFxuICAgICAgc2hvcnRoYW5kQ3VycmVudE1vbnRoOiB0aGlzLnNob3J0aGFuZEN1cnJlbnRNb250aCxcbiAgICAgIHNob3dNb250aHM6IHRoaXMuc2hvd01vbnRocyxcbiAgICAgIG1vbnRoU2VsZWN0b3JUeXBlOiB0aGlzLm1vbnRoU2VsZWN0b3JUeXBlLFxuICAgICAgc3RhdGljOiB0aGlzLnN0YXRpYyxcbiAgICAgIHRpbWUyNGhyOiB0aGlzLnRpbWUyNGhyLFxuICAgICAgd2Vla051bWJlcnM6IHRoaXMud2Vla051bWJlcnMsXG4gICAgICBnZXRXZWVrOiB0aGlzLmdldFdlZWssXG4gICAgICB3cmFwOiB0aGlzLndyYXAsXG4gICAgICBwbHVnaW5zOiB0aGlzLnBsdWdpbnMsXG4gICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZERhdGVzOiBEYXRlW10sIGRhdGVTdHJpbmc6IHN0cmluZywgaW5zdGFuY2U6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmZsYXRwaWNrckNoYW5nZS5lbWl0KHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0cmluZywgaW5zdGFuY2UgfSk7XG4gICAgICB9LFxuICAgICAgb25PcGVuOiAoc2VsZWN0ZWREYXRlczogRGF0ZVtdLCBkYXRlU3RyaW5nOiBzdHJpbmcsIGluc3RhbmNlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5mbGF0cGlja3JPcGVuLmVtaXQoeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyaW5nLCBpbnN0YW5jZSB9KTtcbiAgICAgIH0sXG4gICAgICBvbkNsb3NlOiAoc2VsZWN0ZWREYXRlczogRGF0ZVtdLCBkYXRlU3RyaW5nOiBzdHJpbmcsIGluc3RhbmNlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5mbGF0cGlja3JDbG9zZS5lbWl0KHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0cmluZywgaW5zdGFuY2UgfSk7XG4gICAgICB9LFxuICAgICAgb25Nb250aENoYW5nZTogKFxuICAgICAgICBzZWxlY3RlZERhdGVzOiBEYXRlW10sXG4gICAgICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcbiAgICAgICAgaW5zdGFuY2U6IGFueVxuICAgICAgKSA9PiB7XG4gICAgICAgIHRoaXMuZmxhdHBpY2tyTW9udGhDaGFuZ2UuZW1pdCh7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHJpbmcsIGluc3RhbmNlIH0pO1xuICAgICAgfSxcbiAgICAgIG9uWWVhckNoYW5nZTogKFxuICAgICAgICBzZWxlY3RlZERhdGVzOiBEYXRlW10sXG4gICAgICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcbiAgICAgICAgaW5zdGFuY2U6IGFueVxuICAgICAgKSA9PiB7XG4gICAgICAgIHRoaXMuZmxhdHBpY2tyWWVhckNoYW5nZS5lbWl0KHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0cmluZywgaW5zdGFuY2UgfSk7XG4gICAgICB9LFxuICAgICAgb25SZWFkeTogKHNlbGVjdGVkRGF0ZXM6IERhdGVbXSwgZGF0ZVN0cmluZzogc3RyaW5nLCBpbnN0YW5jZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZmxhdHBpY2tyUmVhZHkuZW1pdCh7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHJpbmcsIGluc3RhbmNlIH0pO1xuICAgICAgfSxcbiAgICAgIG9uVmFsdWVVcGRhdGU6IChcbiAgICAgICAgc2VsZWN0ZWREYXRlczogRGF0ZVtdLFxuICAgICAgICBkYXRlU3RyaW5nOiBzdHJpbmcsXG4gICAgICAgIGluc3RhbmNlOiBhbnlcbiAgICAgICkgPT4ge1xuICAgICAgICB0aGlzLmZsYXRwaWNrclZhbHVlVXBkYXRlLmVtaXQoeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyaW5nLCBpbnN0YW5jZSB9KTtcbiAgICAgIH0sXG4gICAgICBvbkRheUNyZWF0ZTogKFxuICAgICAgICBzZWxlY3RlZERhdGVzOiBEYXRlW10sXG4gICAgICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcbiAgICAgICAgaW5zdGFuY2U6IGFueSxcbiAgICAgICAgZGF5RWxlbWVudDogSFRNTEVsZW1lbnRcbiAgICAgICkgPT4ge1xuICAgICAgICB0aGlzLmZsYXRwaWNrckRheUNyZWF0ZS5lbWl0KHtcbiAgICAgICAgICBzZWxlY3RlZERhdGVzLFxuICAgICAgICAgIGRhdGVTdHJpbmcsXG4gICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgZGF5RWxlbWVudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgb3B0aW9uc1trZXldID0gKHRoaXMub3B0aW9ucyBhcyBhbnkpW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9uc1trZXldID0gKHRoaXMuZGVmYXVsdHMgYXMgYW55KVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgb3B0aW9ucy50aW1lXzI0aHIgPSBvcHRpb25zLnRpbWUyNGhyO1xuXG4gICAgLy8gd29ya2Fyb3VuZCBidWcgaW4gZmxhdHBpY2tyIDQuNiB3aGVyZSBpdCBkb2Vzbid0IGNvcHkgdGhlIGNsYXNzZXMgYWNyb3NzXG4gICAgLy8gVE9ETyAtIHJlbW92ZSBvbmNlIGZpeCBpbiBodHRwczovL2dpdGh1Yi5jb20vZmxhdHBpY2tyL2ZsYXRwaWNrci9pc3N1ZXMvMTg2MCBpcyByZWxlYXNlZFxuICAgIG9wdGlvbnMuYWx0SW5wdXRDbGFzcyA9XG4gICAgICAob3B0aW9ucy5hbHRJbnB1dENsYXNzIHx8ICcnKSArICcgJyArIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lO1xuXG4gICAgaWYgKCFvcHRpb25zLmVuYWJsZSkge1xuICAgICAgZGVsZXRlIG9wdGlvbnMuZW5hYmxlO1xuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UgPSBmbGF0cGlja3IoXG4gICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LFxuICAgICAgb3B0aW9uc1xuICAgICkgYXMgZmxhdHBpY2tyLkluc3RhbmNlO1xuICAgIHRoaXMuc2V0RGlzYWJsZWRTdGF0ZSh0aGlzLmlzRGlzYWJsZWQpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5mb3JFYWNoKGlucHV0S2V5ID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXQoaW5wdXRLZXkgYXMgYW55LCAodGhpcyBhcyBhbnkpW2lucHV0S2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IGNvbnZlcnRlZFZhbHVlOiBhbnkgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5jb252ZXJ0TW9kZWxWYWx1ZSAmJiB0aGlzLm1vZGUgPT09ICdyYW5nZScgJiYgdmFsdWUpIHtcbiAgICAgIGNvbnZlcnRlZFZhbHVlID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXREYXRlKGNvbnZlcnRlZFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZmxhdHBpY2tyIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIHlldCwgc3RvcmUgdGhlIHZhbHVlIGZvciBsYXRlciB1c2VcbiAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gY29udmVydGVkVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmluc3RhbmNlLl9pbnB1dCwgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmluc3RhbmNlLl9pbnB1dCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKVxuICBpbnB1dENoYW5nZWQoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgaWYgKHRoaXMuY29udmVydE1vZGVsVmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgY2FzZSAnbXVsdGlwbGUnOlxuICAgICAgICAgIGNvbnN0IGRhdGVzOiBEYXRlW10gPSB2YWx1ZVxuICAgICAgICAgICAgLnNwbGl0KCc7ICcpXG4gICAgICAgICAgICAubWFwKHN0ciA9PlxuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnBhcnNlRGF0ZShcbiAgICAgICAgICAgICAgICBzdHIsXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5jb25maWcuZGF0ZUZvcm1hdCxcbiAgICAgICAgICAgICAgICAhdGhpcy5pbnN0YW5jZS5jb25maWcuZW5hYmxlVGltZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbihkYXRlcyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSB2YWx1ZVxuICAgICAgICAgICAgLnNwbGl0KHRoaXMuaW5zdGFuY2UubDEwbi5yYW5nZVNlcGFyYXRvcilcbiAgICAgICAgICAgIC5tYXAoc3RyID0+XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucGFyc2VEYXRlKFxuICAgICAgICAgICAgICAgIHN0cixcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmNvbmZpZy5kYXRlRm9ybWF0LFxuICAgICAgICAgICAgICAgICF0aGlzLmluc3RhbmNlLmNvbmZpZy5lbmFibGVUaW1lXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKHsgZnJvbSwgdG8gfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnc2luZ2xlJzpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnBhcnNlRGF0ZShcbiAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuY29uZmlnLmRhdGVGb3JtYXQsXG4gICAgICAgICAgICAgICF0aGlzLmluc3RhbmNlLmNvbmZpZy5lbmFibGVUaW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkNoYW5nZUZuKHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIE5nTW9kdWxlLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgUHJvdmlkZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGbGF0cGlja3JEaXJlY3RpdmUgfSBmcm9tICcuL2ZsYXRwaWNrci5kaXJlY3RpdmUnO1xuaW1wb3J0IHtcbiAgRmxhdHBpY2tyRGVmYXVsdHMsXG4gIEZsYXRwaWNrckRlZmF1bHRzSW50ZXJmYWNlXG59IGZyb20gJy4vZmxhdHBpY2tyLWRlZmF1bHRzLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgVVNFUl9ERUZBVUxUUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignZmxhdHBpY2tyIGRlZmF1bHRzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0c0ZhY3RvcnkoXG4gIHVzZXJEZWZhdWx0czogRmxhdHBpY2tyRGVmYXVsdHNJbnRlcmZhY2Vcbik6IEZsYXRwaWNrckRlZmF1bHRzIHtcbiAgY29uc3QgZGVmYXVsdHM6IEZsYXRwaWNrckRlZmF1bHRzID0gbmV3IEZsYXRwaWNrckRlZmF1bHRzKCk7XG4gIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHVzZXJEZWZhdWx0cyk7XG4gIHJldHVybiBkZWZhdWx0cztcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRmxhdHBpY2tyRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0ZsYXRwaWNrckRpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgRmxhdHBpY2tyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgdXNlckRlZmF1bHRzOiBGbGF0cGlja3JEZWZhdWx0c0ludGVyZmFjZSA9IHt9XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRmxhdHBpY2tyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBVU0VSX0RFRkFVTFRTLFxuICAgICAgICAgIHVzZVZhbHVlOiB1c2VyRGVmYXVsdHNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEZsYXRwaWNrckRlZmF1bHRzLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGRlZmF1bHRzRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbVVNFUl9ERUZBVUxUU11cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozt5QkEwTnNCLFFBQVE7Ozs7d0JBS1IsS0FBSzs7Ozs7NkJBTUQsRUFBRTs7OzswQkFLSixLQUFLOzs7O3dCQUtILFNBQVM7Ozs7OEJBS1AsUUFBUTs7Ozs7MEJBTVosSUFBSTs7Ozs7MEJBTUwsT0FBTzs7OzsyQkFLTCxFQUFFOzs7OzZCQUtBLENBQUM7Ozs7OEJBS0EsQ0FBQzs7Ozt1QkFLSSxFQUFFOzs7Ozs2QkFNUixLQUFLOzs7OzBCQVVSLEtBQUs7Ozs7NkJBS0YsS0FBSzs7OzswQkFLUSxTQUFTOzs7OzZCQUt2QixDQUFDOzs7O3NCQUtQLEtBQUs7Ozs7dUJBS0UsU0FBUzs7Ozt1QkFLVCxTQUFTOzs7OytCQUtSLENBQUM7Ozs7b0JBS2EsUUFBUTs7Ozt5QkFLNUIsR0FBRzs7OzswQkFLRCxLQUFLOzs7O21CQUtHLElBQUksSUFBSSxFQUFFOzs7O3lCQVVwQixHQUFHOzs7O3FDQUtVLEtBQUs7Ozs7c0JBS3BCLEtBQUs7Ozs7d0JBS0gsS0FBSzs7Ozs7bUJBTVYsS0FBSzs7OzsyQkFLRyxLQUFLOzs7O29CQVdaLEtBQUs7Ozs7dUJBS0osRUFBRTs7OztzQkFLTyxTQUFTOzs7O2lDQUtOLEtBQUs7Ozs7MEJBS2IsQ0FBQzs7OztpQ0FLcUIsUUFBUTs7OztZQTlNcEQsVUFBVTs7Ozs7OztBQ3JOWCx1QkFpQ2EsZ0NBQWdDLEdBQVE7SUFDbkQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0sa0JBQWtCLENBQUM7O0lBQ2pELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQVdGOzs7Ozs7SUFrU0UsWUFDVSxLQUNBLFVBQ0E7UUFGQSxRQUFHLEdBQUgsR0FBRztRQUNILGFBQVEsR0FBUixRQUFRO1FBQ1IsYUFBUSxHQUFSLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQWhSNkIsRUFBRTs7Ozs4QkE2TU0sSUFBSSxZQUFZLEVBQUU7Ozs7K0JBTWpCLElBQUksWUFBWSxFQUFFOzs7O29DQVF0RSxJQUFJLFlBQVksRUFBRTs7Ozs2QkFNZ0MsSUFBSSxZQUFZLEVBQUU7Ozs7OEJBTWpCLElBQUksWUFBWSxFQUFFOzs7O29DQVFyRSxJQUFJLFlBQVksRUFBRTs7OzttQ0FRbEIsSUFBSSxZQUFZLEVBQUU7Ozs7a0NBUWxCLElBQUksWUFBWSxFQUFFOzBCQU9ELEtBQUs7MEJBR1MsU0FBUTsyQkFFN0IsU0FBUTtLQU1sQjs7OztJQUVKLGVBQWU7UUFDYix1QkFBTSxPQUFPLEdBQVE7WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQzlCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNqRCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN6QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsQ0FBQyxhQUFxQixFQUFFLFVBQWtCLEVBQUUsUUFBYTtnQkFDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDcEU7WUFDRCxNQUFNLEVBQUUsQ0FBQyxhQUFxQixFQUFFLFVBQWtCLEVBQUUsUUFBYTtnQkFDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDbEU7WUFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFxQixFQUFFLFVBQWtCLEVBQUUsUUFBYTtnQkFDaEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDbkU7WUFDRCxhQUFhLEVBQUUsQ0FDYixhQUFxQixFQUNyQixVQUFrQixFQUNsQixRQUFhO2dCQUViLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDekU7WUFDRCxZQUFZLEVBQUUsQ0FDWixhQUFxQixFQUNyQixVQUFrQixFQUNsQixRQUFhO2dCQUViLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDeEU7WUFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFxQixFQUFFLFVBQWtCLEVBQUUsUUFBYTtnQkFDaEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDbkU7WUFDRCxhQUFhLEVBQUUsQ0FDYixhQUFxQixFQUNyQixVQUFrQixFQUNsQixRQUFhO2dCQUViLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDekU7WUFDRCxXQUFXLEVBQUUsQ0FDWCxhQUFxQixFQUNyQixVQUFrQixFQUNsQixRQUFhLEVBQ2IsVUFBdUI7Z0JBRXZCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7b0JBQzNCLGFBQWE7b0JBQ2IsVUFBVTtvQkFDVixRQUFRO29CQUNSLFVBQVU7aUJBQ1gsQ0FBQyxDQUFDO2FBQ0o7U0FDRixDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRztZQUM5QixJQUFJLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFdBQVcsRUFBRTtnQkFDdkMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxFQUFFO29CQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsbUJBQUMsSUFBSSxDQUFDLE9BQWMsR0FBRSxHQUFHLENBQUMsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLG1CQUFDLElBQUksQ0FBQyxRQUFlLEdBQUUsR0FBRyxDQUFDLENBQUM7aUJBQzVDO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7OztRQUlyQyxPQUFPLENBQUMsYUFBYTtZQUNuQixDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksRUFBRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFFekUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbkIsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxDQUFDLFFBQVEscUJBQUcsU0FBUyxDQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIsT0FBTyxDQUNjLENBQUEsQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3hDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUTtnQkFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLG1CQUFDLFFBQWUsR0FBRSxtQkFBQyxJQUFXLEdBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUM3RCxDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO0tBQ0Y7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIscUJBQUksY0FBYyxHQUFRLEtBQUssQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLEVBQUU7WUFDNUQsY0FBYyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDdkM7YUFBTTs7WUFFTCxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztTQUNwQztLQUNGOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FDdEI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDekU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDakU7U0FDRjtLQUNGOzs7O0lBR0QsWUFBWTtRQUNWLHVCQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQ3ZELFFBQVEsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsS0FBSyxVQUFVO29CQUNiLHVCQUFNLEtBQUssR0FBVyxLQUFLO3lCQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDO3lCQUNYLEdBQUcsQ0FBQyxHQUFHLElBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3JCLEdBQUcsRUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQy9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUNqQyxDQUNGLENBQUM7b0JBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkIsTUFBTTtnQkFFUixLQUFLLE9BQU87b0JBQ1YsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLO3lCQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO3lCQUN4QyxHQUFHLENBQUMsR0FBRyxJQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNyQixHQUFHLEVBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUMvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FDakMsQ0FDRixDQUFDO29CQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDOUIsTUFBTTtnQkFFUixLQUFLLFFBQVEsQ0FBQztnQkFDZDtvQkFDRSxJQUFJLENBQUMsVUFBVSxDQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNyQixLQUFLLEVBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUMvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FDakMsQ0FDRixDQUFDO2FBQ0w7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtLQUNGOzs7WUFoZ0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDN0MsSUFBSSxFQUFFOztvQkFFSixRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Z0JBQ0QsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7WUE3Q0MsVUFBVTtZQWFWLGlCQUFpQjtZQUhqQixTQUFTOzs7c0JBeURSLEtBQUs7d0JBS0wsS0FBSzt1QkFLTCxLQUFLOzRCQU1MLEtBQUs7eUJBS0wsS0FBSzt1QkFLTCxLQUFLOzZCQUtMLEtBQUs7eUJBTUwsS0FBSzt5QkFNTCxLQUFLOzBCQUtMLEtBQUs7NEJBSUwsS0FBSzs2QkFLTCxLQUFLO3NCQUtMLEtBQUs7NEJBTUwsS0FBSztxQkFLTCxLQUFLO3lCQUtMLEtBQUs7NEJBS0wsS0FBSzt5QkFLTCxLQUFLOzRCQUtMLEtBQUs7cUJBS0wsS0FBSztzQkFLTCxLQUFLO3NCQUtMLEtBQUs7OEJBS0wsS0FBSzttQkFLTCxLQUFLO3dCQUtMLEtBQUs7eUJBS0wsS0FBSztrQkFLTCxLQUFLO3dCQUtMLEtBQUs7d0JBS0wsS0FBSztvQ0FLTCxLQUFLO3lCQUtMLEtBQUs7cUJBS0wsS0FBSzt1QkFLTCxLQUFLOzBCQUtMLEtBQUs7c0JBTUwsS0FBSzttQkFLTCxLQUFLO3NCQUtMLEtBQUs7cUJBS0wsS0FBSztnQ0FLTCxLQUFLO2dDQUtMLEtBQUs7NkJBS0wsTUFBTTs4QkFNTixNQUFNO21DQU1OLE1BQU07NEJBUU4sTUFBTTs2QkFNTixNQUFNO21DQU1OLE1BQU07a0NBUU4sTUFBTTtpQ0FRTixNQUFNOzJCQTBMTixZQUFZLFNBQUMsT0FBTzs7Ozs7OztBQzNmdkIsdUJBWWEsYUFBYSxHQUFHLElBQUksY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Ozs7O0FBRXRFLHlCQUNFLFlBQXdDO0lBRXhDLHVCQUFNLFFBQVEsR0FBc0IsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0lBQzVELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLE9BQU8sUUFBUSxDQUFDO0NBQ2pCO0FBTUQ7Ozs7O0lBQ0UsT0FBTyxPQUFPLENBQ1osZUFBMkMsRUFBRTtRQUU3QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsVUFBVSxFQUFFLGVBQWU7b0JBQzNCLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDdEI7YUFDRjtTQUNGLENBQUM7S0FDSDs7O1lBdEJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDOUI7Ozs7Ozs7Ozs7Ozs7OzsifQ==

      /***/
    },

    /***/
    "r5Jv":
    /*!*******************************************************!*\
      !*** ./node_modules/calendar-utils/calendar-utils.js ***!
      \*******************************************************/

    /*! exports provided: DAYS_OF_WEEK, SECONDS_IN_DAY, getEventsInPeriod, getWeekViewHeader, getDifferenceInDaysWithExclusions, getAllDayWeekEvents, getWeekView, getMonthView, EventValidationErrorMessage, validateEvents */

    /***/
    function r5Jv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function () {
        return DAYS_OF_WEEK;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SECONDS_IN_DAY", function () {
        return SECONDS_IN_DAY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getEventsInPeriod", function () {
        return getEventsInPeriod;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getWeekViewHeader", function () {
        return getWeekViewHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDifferenceInDaysWithExclusions", function () {
        return getDifferenceInDaysWithExclusions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAllDayWeekEvents", function () {
        return getAllDayWeekEvents;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getWeekView", function () {
        return getWeekView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMonthView", function () {
        return getMonthView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventValidationErrorMessage", function () {
        return EventValidationErrorMessage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateEvents", function () {
        return validateEvents;
      });

      var __assign = undefined && undefined.__assign || function () {
        __assign = Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }

          return t;
        };

        return __assign.apply(this, arguments);
      };

      var __spreadArrays = undefined && undefined.__spreadArrays || function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

        for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

        return r;
      };

      var DAYS_OF_WEEK;

      (function (DAYS_OF_WEEK) {
        DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
        DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
        DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
        DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
        DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
        DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
        DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
      })(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));

      var DEFAULT_WEEKEND_DAYS = [DAYS_OF_WEEK.SUNDAY, DAYS_OF_WEEK.SATURDAY];
      var DAYS_IN_WEEK = 7;
      var HOURS_IN_DAY = 24;
      var MINUTES_IN_HOUR = 60;
      var SECONDS_IN_DAY = 60 * 60 * 24;

      function getExcludedSeconds(dateAdapter, _a) {
        var startDate = _a.startDate,
            seconds = _a.seconds,
            excluded = _a.excluded,
            precision = _a.precision;

        if (excluded.length < 1) {
          return 0;
        }

        var addSeconds = dateAdapter.addSeconds,
            getDay = dateAdapter.getDay,
            addDays = dateAdapter.addDays;
        var endDate = addSeconds(startDate, seconds - 1);
        var dayStart = getDay(startDate);
        var dayEnd = getDay(endDate);
        var result = 0; // Calculated in seconds

        var current = startDate;

        var _loop_1 = function _loop_1() {
          var day = getDay(current);

          if (excluded.some(function (excludedDay) {
            return excludedDay === day;
          })) {
            result += calculateExcludedSeconds(dateAdapter, {
              dayStart: dayStart,
              dayEnd: dayEnd,
              day: day,
              precision: precision,
              startDate: startDate,
              endDate: endDate
            });
          }

          current = addDays(current, 1);
        };

        while (current < endDate) {
          _loop_1();
        }

        return result;
      }

      function calculateExcludedSeconds(dateAdapter, _a) {
        var precision = _a.precision,
            day = _a.day,
            dayStart = _a.dayStart,
            dayEnd = _a.dayEnd,
            startDate = _a.startDate,
            endDate = _a.endDate;
        var differenceInSeconds = dateAdapter.differenceInSeconds,
            endOfDay = dateAdapter.endOfDay,
            startOfDay = dateAdapter.startOfDay;

        if (precision === 'minutes') {
          if (day === dayStart) {
            return differenceInSeconds(endOfDay(startDate), startDate) + 1;
          } else if (day === dayEnd) {
            return differenceInSeconds(endDate, startOfDay(endDate)) + 1;
          }
        }

        return SECONDS_IN_DAY;
      }

      function getWeekViewEventSpan(dateAdapter, _a) {
        var event = _a.event,
            offset = _a.offset,
            startOfWeekDate = _a.startOfWeekDate,
            excluded = _a.excluded,
            precision = _a.precision,
            totalDaysInView = _a.totalDaysInView;
        var max = dateAdapter.max,
            differenceInSeconds = dateAdapter.differenceInSeconds,
            addDays = dateAdapter.addDays,
            endOfDay = dateAdapter.endOfDay,
            differenceInDays = dateAdapter.differenceInDays;
        var span = SECONDS_IN_DAY;
        var begin = max([event.start, startOfWeekDate]);

        if (event.end) {
          switch (precision) {
            case 'minutes':
              span = differenceInSeconds(event.end, begin);
              break;

            default:
              span = differenceInDays(addDays(endOfDay(event.end), 1), begin) * SECONDS_IN_DAY;
              break;
          }
        }

        var offsetSeconds = offset * SECONDS_IN_DAY;
        var totalLength = offsetSeconds + span; // the best way to detect if an event is outside the week-view
        // is to check if the total span beginning (from startOfWeekDay or event start) exceeds the total days in the view

        var secondsInView = totalDaysInView * SECONDS_IN_DAY;

        if (totalLength > secondsInView) {
          span = secondsInView - offsetSeconds;
        }

        span -= getExcludedSeconds(dateAdapter, {
          startDate: begin,
          seconds: span,
          excluded: excluded,
          precision: precision
        });
        return span / SECONDS_IN_DAY;
      }

      function getWeekViewEventOffset(dateAdapter, _a) {
        var event = _a.event,
            startOfWeekDate = _a.startOfWeek,
            excluded = _a.excluded,
            precision = _a.precision;
        var differenceInDays = dateAdapter.differenceInDays,
            startOfDay = dateAdapter.startOfDay,
            differenceInSeconds = dateAdapter.differenceInSeconds;

        if (event.start < startOfWeekDate) {
          return 0;
        }

        var offset = 0;

        switch (precision) {
          case 'days':
            offset = differenceInDays(startOfDay(event.start), startOfWeekDate) * SECONDS_IN_DAY;
            break;

          case 'minutes':
            offset = differenceInSeconds(event.start, startOfWeekDate);
            break;
        }

        offset -= getExcludedSeconds(dateAdapter, {
          startDate: startOfWeekDate,
          seconds: offset,
          excluded: excluded,
          precision: precision
        });
        return Math.abs(offset / SECONDS_IN_DAY);
      }

      function isEventIsPeriod(dateAdapter, _a) {
        var event = _a.event,
            periodStart = _a.periodStart,
            periodEnd = _a.periodEnd;
        var isSameSecond = dateAdapter.isSameSecond;
        var eventStart = event.start;
        var eventEnd = event.end || event.start;

        if (eventStart > periodStart && eventStart < periodEnd) {
          return true;
        }

        if (eventEnd > periodStart && eventEnd < periodEnd) {
          return true;
        }

        if (eventStart < periodStart && eventEnd > periodEnd) {
          return true;
        }

        if (isSameSecond(eventStart, periodStart) || isSameSecond(eventStart, periodEnd)) {
          return true;
        }

        if (isSameSecond(eventEnd, periodStart) || isSameSecond(eventEnd, periodEnd)) {
          return true;
        }

        return false;
      }

      function getEventsInPeriod(dateAdapter, _a) {
        var events = _a.events,
            periodStart = _a.periodStart,
            periodEnd = _a.periodEnd;
        return events.filter(function (event) {
          return isEventIsPeriod(dateAdapter, {
            event: event,
            periodStart: periodStart,
            periodEnd: periodEnd
          });
        });
      }

      function getWeekDay(dateAdapter, _a) {
        var date = _a.date,
            _b = _a.weekendDays,
            weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
        var startOfDay = dateAdapter.startOfDay,
            isSameDay = dateAdapter.isSameDay,
            getDay = dateAdapter.getDay;
        var today = startOfDay(new Date());
        var day = getDay(date);
        return {
          date: date,
          day: day,
          isPast: date < today,
          isToday: isSameDay(date, today),
          isFuture: date > today,
          isWeekend: weekendDays.indexOf(day) > -1
        };
      }

      function getWeekViewHeader(dateAdapter, _a) {
        var viewDate = _a.viewDate,
            weekStartsOn = _a.weekStartsOn,
            _b = _a.excluded,
            excluded = _b === void 0 ? [] : _b,
            weekendDays = _a.weekendDays,
            _c = _a.viewStart,
            viewStart = _c === void 0 ? dateAdapter.startOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        }) : _c,
            _d = _a.viewEnd,
            viewEnd = _d === void 0 ? dateAdapter.addDays(viewStart, DAYS_IN_WEEK) : _d;
        var addDays = dateAdapter.addDays,
            getDay = dateAdapter.getDay;
        var days = [];
        var date = viewStart;

        while (date < viewEnd) {
          if (!excluded.some(function (e) {
            return getDay(date) === e;
          })) {
            days.push(getWeekDay(dateAdapter, {
              date: date,
              weekendDays: weekendDays
            }));
          }

          date = addDays(date, 1);
        }

        return days;
      }

      function getDifferenceInDaysWithExclusions(dateAdapter, _a) {
        var date1 = _a.date1,
            date2 = _a.date2,
            excluded = _a.excluded;
        var date = date1;
        var diff = 0;

        while (date < date2) {
          if (excluded.indexOf(dateAdapter.getDay(date)) === -1) {
            diff++;
          }

          date = dateAdapter.addDays(date, 1);
        }

        return diff;
      }

      function getAllDayWeekEvents(dateAdapter, _a) {
        var _b = _a.events,
            events = _b === void 0 ? [] : _b,
            _c = _a.excluded,
            excluded = _c === void 0 ? [] : _c,
            _d = _a.precision,
            precision = _d === void 0 ? 'days' : _d,
            _e = _a.absolutePositionedEvents,
            absolutePositionedEvents = _e === void 0 ? false : _e,
            viewStart = _a.viewStart,
            viewEnd = _a.viewEnd;
        viewStart = dateAdapter.startOfDay(viewStart);
        viewEnd = dateAdapter.endOfDay(viewEnd);
        var differenceInSeconds = dateAdapter.differenceInSeconds,
            differenceInDays = dateAdapter.differenceInDays;
        var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
          date1: viewStart,
          date2: viewEnd,
          excluded: excluded
        });
        var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
        var eventsMapped = events.filter(function (event) {
          return event.allDay;
        }).map(function (event) {
          var offset = getWeekViewEventOffset(dateAdapter, {
            event: event,
            startOfWeek: viewStart,
            excluded: excluded,
            precision: precision
          });
          var span = getWeekViewEventSpan(dateAdapter, {
            event: event,
            offset: offset,
            startOfWeekDate: viewStart,
            excluded: excluded,
            precision: precision,
            totalDaysInView: totalDaysInView
          });
          return {
            event: event,
            offset: offset,
            span: span
          };
        }).filter(function (e) {
          return e.offset < maxRange;
        }).filter(function (e) {
          return e.span > 0;
        }).map(function (entry) {
          return {
            event: entry.event,
            offset: entry.offset,
            span: entry.span,
            startsBeforeWeek: entry.event.start < viewStart,
            endsAfterWeek: (entry.event.end || entry.event.start) > viewEnd
          };
        }).sort(function (itemA, itemB) {
          var startSecondsDiff = differenceInSeconds(itemA.event.start, itemB.event.start);

          if (startSecondsDiff === 0) {
            return differenceInSeconds(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
          }

          return startSecondsDiff;
        });
        var allDayEventRows = [];
        var allocatedEvents = [];
        eventsMapped.forEach(function (event, index) {
          if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            var rowSpan_1 = event.span + event.offset;
            var otherRowEvents = eventsMapped.slice(index + 1).filter(function (nextEvent) {
              if (nextEvent.offset >= rowSpan_1 && rowSpan_1 + nextEvent.span <= totalDaysInView && allocatedEvents.indexOf(nextEvent) === -1) {
                var nextEventOffset = nextEvent.offset - rowSpan_1;

                if (!absolutePositionedEvents) {
                  nextEvent.offset = nextEventOffset;
                }

                rowSpan_1 += nextEvent.span + nextEventOffset;
                allocatedEvents.push(nextEvent);
                return true;
              }
            });

            var weekEvents = __spreadArrays([event], otherRowEvents);

            var id = weekEvents.filter(function (weekEvent) {
              return weekEvent.event.id;
            }).map(function (weekEvent) {
              return weekEvent.event.id;
            }).join('-');
            allDayEventRows.push(__assign({
              row: weekEvents
            }, id ? {
              id: id
            } : {}));
          }
        });
        return allDayEventRows;
      }

      function getWeekViewHourGrid(dateAdapter, _a) {
        var events = _a.events,
            viewDate = _a.viewDate,
            hourSegments = _a.hourSegments,
            hourDuration = _a.hourDuration,
            dayStart = _a.dayStart,
            dayEnd = _a.dayEnd,
            weekStartsOn = _a.weekStartsOn,
            excluded = _a.excluded,
            weekendDays = _a.weekendDays,
            segmentHeight = _a.segmentHeight,
            viewStart = _a.viewStart,
            viewEnd = _a.viewEnd,
            minimumEventHeight = _a.minimumEventHeight;
        var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
          viewDate: viewDate,
          hourSegments: hourSegments,
          hourDuration: hourDuration,
          dayStart: dayStart,
          dayEnd: dayEnd
        });
        var weekDays = getWeekViewHeader(dateAdapter, {
          viewDate: viewDate,
          weekStartsOn: weekStartsOn,
          excluded: excluded,
          weekendDays: weekendDays,
          viewStart: viewStart,
          viewEnd: viewEnd
        });
        var setHours = dateAdapter.setHours,
            setMinutes = dateAdapter.setMinutes,
            getHours = dateAdapter.getHours,
            getMinutes = dateAdapter.getMinutes;
        return weekDays.map(function (day) {
          var dayView = getDayView(dateAdapter, {
            events: events,
            viewDate: day.date,
            hourSegments: hourSegments,
            dayStart: dayStart,
            dayEnd: dayEnd,
            segmentHeight: segmentHeight,
            eventWidth: 1,
            hourDuration: hourDuration,
            minimumEventHeight: minimumEventHeight
          });
          var hours = dayViewHourGrid.map(function (hour) {
            var segments = hour.segments.map(function (segment) {
              var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
              return __assign(__assign({}, segment), {
                date: date
              });
            });
            return __assign(__assign({}, hour), {
              segments: segments
            });
          });

          function getColumnCount(allEvents, prevOverlappingEvents) {
            var columnCount = Math.max.apply(Math, prevOverlappingEvents.map(function (iEvent) {
              return iEvent.left + 1;
            }));
            var nextOverlappingEvents = allEvents.filter(function (iEvent) {
              return iEvent.left >= columnCount;
            }).filter(function (iEvent) {
              return getOverLappingWeekViewEvents(prevOverlappingEvents, iEvent.top, iEvent.top + iEvent.height).length > 0;
            });

            if (nextOverlappingEvents.length > 0) {
              return getColumnCount(allEvents, nextOverlappingEvents);
            } else {
              return columnCount;
            }
          }

          var mappedEvents = dayView.events.map(function (event) {
            var columnCount = getColumnCount(dayView.events, getOverLappingWeekViewEvents(dayView.events, event.top, event.top + event.height));
            var width = 100 / columnCount;
            return __assign(__assign({}, event), {
              left: event.left * width,
              width: width
            });
          });
          return {
            hours: hours,
            date: day.date,
            events: mappedEvents.map(function (event) {
              var overLappingEvents = getOverLappingWeekViewEvents(mappedEvents.filter(function (otherEvent) {
                return otherEvent.left > event.left;
              }), event.top, event.top + event.height);

              if (overLappingEvents.length > 0) {
                return __assign(__assign({}, event), {
                  width: Math.min.apply(Math, overLappingEvents.map(function (otherEvent) {
                    return otherEvent.left;
                  })) - event.left
                });
              }

              return event;
            })
          };
        });
      }

      function getWeekView(dateAdapter, _a) {
        var _b = _a.events,
            events = _b === void 0 ? [] : _b,
            viewDate = _a.viewDate,
            weekStartsOn = _a.weekStartsOn,
            _c = _a.excluded,
            excluded = _c === void 0 ? [] : _c,
            _d = _a.precision,
            precision = _d === void 0 ? 'days' : _d,
            _e = _a.absolutePositionedEvents,
            absolutePositionedEvents = _e === void 0 ? false : _e,
            hourSegments = _a.hourSegments,
            hourDuration = _a.hourDuration,
            dayStart = _a.dayStart,
            dayEnd = _a.dayEnd,
            weekendDays = _a.weekendDays,
            segmentHeight = _a.segmentHeight,
            minimumEventHeight = _a.minimumEventHeight,
            _f = _a.viewStart,
            viewStart = _f === void 0 ? dateAdapter.startOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        }) : _f,
            _g = _a.viewEnd,
            viewEnd = _g === void 0 ? dateAdapter.endOfWeek(viewDate, {
          weekStartsOn: weekStartsOn
        }) : _g;

        if (!events) {
          events = [];
        }

        var startOfDay = dateAdapter.startOfDay,
            endOfDay = dateAdapter.endOfDay;
        viewStart = startOfDay(viewStart);
        viewEnd = endOfDay(viewEnd);
        var eventsInPeriod = getEventsInPeriod(dateAdapter, {
          events: events,
          periodStart: viewStart,
          periodEnd: viewEnd
        });
        var header = getWeekViewHeader(dateAdapter, {
          viewDate: viewDate,
          weekStartsOn: weekStartsOn,
          excluded: excluded,
          weekendDays: weekendDays,
          viewStart: viewStart,
          viewEnd: viewEnd
        });
        return {
          allDayEventRows: getAllDayWeekEvents(dateAdapter, {
            events: eventsInPeriod,
            excluded: excluded,
            precision: precision,
            absolutePositionedEvents: absolutePositionedEvents,
            viewStart: viewStart,
            viewEnd: viewEnd
          }),
          period: {
            events: eventsInPeriod,
            start: header[0].date,
            end: endOfDay(header[header.length - 1].date)
          },
          hourColumns: getWeekViewHourGrid(dateAdapter, {
            events: events,
            viewDate: viewDate,
            hourSegments: hourSegments,
            hourDuration: hourDuration,
            dayStart: dayStart,
            dayEnd: dayEnd,
            weekStartsOn: weekStartsOn,
            excluded: excluded,
            weekendDays: weekendDays,
            segmentHeight: segmentHeight,
            viewStart: viewStart,
            viewEnd: viewEnd,
            minimumEventHeight: minimumEventHeight
          })
        };
      }

      function getMonthView(dateAdapter, _a) {
        var _b = _a.events,
            events = _b === void 0 ? [] : _b,
            viewDate = _a.viewDate,
            weekStartsOn = _a.weekStartsOn,
            _c = _a.excluded,
            excluded = _c === void 0 ? [] : _c,
            _d = _a.viewStart,
            viewStart = _d === void 0 ? dateAdapter.startOfMonth(viewDate) : _d,
            _e = _a.viewEnd,
            viewEnd = _e === void 0 ? dateAdapter.endOfMonth(viewDate) : _e,
            weekendDays = _a.weekendDays;

        if (!events) {
          events = [];
        }

        var startOfWeek = dateAdapter.startOfWeek,
            endOfWeek = dateAdapter.endOfWeek,
            differenceInDays = dateAdapter.differenceInDays,
            startOfDay = dateAdapter.startOfDay,
            addHours = dateAdapter.addHours,
            endOfDay = dateAdapter.endOfDay,
            isSameMonth = dateAdapter.isSameMonth,
            getDay = dateAdapter.getDay,
            getMonth = dateAdapter.getMonth;
        var start = startOfWeek(viewStart, {
          weekStartsOn: weekStartsOn
        });
        var end = endOfWeek(viewEnd, {
          weekStartsOn: weekStartsOn
        });
        var eventsInMonth = getEventsInPeriod(dateAdapter, {
          events: events,
          periodStart: start,
          periodEnd: end
        });
        var initialViewDays = [];
        var previousDate;

        var _loop_2 = function _loop_2(i) {
          // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
          var date;

          if (previousDate) {
            date = startOfDay(addHours(previousDate, HOURS_IN_DAY));

            if (previousDate.getTime() === date.getTime()) {
              // DST change, so need to add 25 hours

              /* istanbul ignore next */
              date = startOfDay(addHours(previousDate, HOURS_IN_DAY + 1));
            }

            previousDate = date;
          } else {
            date = previousDate = start;
          }

          if (!excluded.some(function (e) {
            return getDay(date) === e;
          })) {
            var day = getWeekDay(dateAdapter, {
              date: date,
              weekendDays: weekendDays
            });
            var eventsInPeriod = getEventsInPeriod(dateAdapter, {
              events: eventsInMonth,
              periodStart: startOfDay(date),
              periodEnd: endOfDay(date)
            });
            day.inMonth = isSameMonth(date, viewDate);
            day.events = eventsInPeriod;
            day.badgeTotal = eventsInPeriod.length;
            initialViewDays.push(day);
          }
        };

        for (var i = 0; i < differenceInDays(end, start) + 1; i++) {
          _loop_2(i);
        }

        var days = [];
        var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;

        if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
          for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
            var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
            var isRowInMonth = row.some(function (day) {
              return viewStart <= day.date && day.date < viewEnd;
            });

            if (isRowInMonth) {
              days = __spreadArrays(days, row);
            }
          }
        } else {
          days = initialViewDays;
        }

        var rows = Math.floor(days.length / totalDaysVisibleInWeek);
        var rowOffsets = [];

        for (var i = 0; i < rows; i++) {
          rowOffsets.push(i * totalDaysVisibleInWeek);
        }

        return {
          rowOffsets: rowOffsets,
          totalDaysVisibleInWeek: totalDaysVisibleInWeek,
          days: days,
          period: {
            start: days[0].date,
            end: endOfDay(days[days.length - 1].date),
            events: eventsInMonth
          }
        };
      }

      function getOverLappingWeekViewEvents(events, top, bottom) {
        return events.filter(function (previousEvent) {
          var previousEventTop = previousEvent.top;
          var previousEventBottom = previousEvent.top + previousEvent.height;

          if (top < previousEventBottom && previousEventBottom < bottom) {
            return true;
          } else if (top < previousEventTop && previousEventTop < bottom) {
            return true;
          } else if (previousEventTop <= top && bottom <= previousEventBottom) {
            return true;
          }

          return false;
        });
      }

      function getDayView(dateAdapter, _a) {
        var events = _a.events,
            viewDate = _a.viewDate,
            hourSegments = _a.hourSegments,
            dayStart = _a.dayStart,
            dayEnd = _a.dayEnd,
            eventWidth = _a.eventWidth,
            segmentHeight = _a.segmentHeight,
            hourDuration = _a.hourDuration,
            minimumEventHeight = _a.minimumEventHeight;
        var setMinutes = dateAdapter.setMinutes,
            setHours = dateAdapter.setHours,
            startOfDay = dateAdapter.startOfDay,
            startOfMinute = dateAdapter.startOfMinute,
            endOfDay = dateAdapter.endOfDay,
            differenceInMinutes = dateAdapter.differenceInMinutes;
        var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
        var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
        endOfView.setSeconds(59, 999);
        var previousDayEvents = [];
        var eventsInPeriod = getEventsInPeriod(dateAdapter, {
          events: events.filter(function (event) {
            return !event.allDay;
          }),
          periodStart: startOfView,
          periodEnd: endOfView
        });
        var dayViewEvents = eventsInPeriod.sort(function (eventA, eventB) {
          return eventA.start.valueOf() - eventB.start.valueOf();
        }).map(function (event) {
          var eventStart = event.start;
          var eventEnd = event.end || eventStart;
          var startsBeforeDay = eventStart < startOfView;
          var endsAfterDay = eventEnd > endOfView;
          var hourHeightModifier = hourSegments * segmentHeight / (hourDuration || MINUTES_IN_HOUR);
          var top = 0;

          if (eventStart > startOfView) {
            // adjust the difference in minutes if the user's offset is different between the start of the day and the event (e.g. when going to or from DST)
            var eventOffset = eventStart.getTimezoneOffset();
            var startOffset = startOfView.getTimezoneOffset();
            var diff = startOffset - eventOffset;
            top += differenceInMinutes(eventStart, startOfView) + diff;
          }

          top *= hourHeightModifier;
          top = Math.floor(top);
          var startDate = startsBeforeDay ? startOfView : eventStart;
          var endDate = endsAfterDay ? endOfView : eventEnd;
          var timezoneOffset = startDate.getTimezoneOffset() - endDate.getTimezoneOffset();
          var height = differenceInMinutes(endDate, startDate) + timezoneOffset;

          if (!event.end) {
            height = segmentHeight;
          } else {
            height *= hourHeightModifier;
          }

          if (minimumEventHeight && height < minimumEventHeight) {
            height = minimumEventHeight;
          }

          height = Math.floor(height);
          var bottom = top + height;
          var overlappingPreviousEvents = getOverLappingWeekViewEvents(previousDayEvents, top, bottom);
          var left = 0;

          while (overlappingPreviousEvents.some(function (previousEvent) {
            return previousEvent.left === left;
          })) {
            left += eventWidth;
          }

          var dayEvent = {
            event: event,
            height: height,
            width: eventWidth,
            top: top,
            left: left,
            startsBeforeDay: startsBeforeDay,
            endsAfterDay: endsAfterDay
          };
          previousDayEvents.push(dayEvent);
          return dayEvent;
        });
        var width = Math.max.apply(Math, dayViewEvents.map(function (event) {
          return event.left + event.width;
        }));
        var allDayEvents = getEventsInPeriod(dateAdapter, {
          events: events.filter(function (event) {
            return event.allDay;
          }),
          periodStart: startOfDay(startOfView),
          periodEnd: endOfDay(endOfView)
        });
        return {
          events: dayViewEvents,
          width: width,
          allDayEvents: allDayEvents,
          period: {
            events: eventsInPeriod,
            start: startOfView,
            end: endOfView
          }
        };
      }

      function sanitiseHours(hours) {
        return Math.max(Math.min(23, hours), 0);
      }

      function sanitiseMinutes(minutes) {
        return Math.max(Math.min(59, minutes), 0);
      }

      function getDayViewHourGrid(dateAdapter, _a) {
        var viewDate = _a.viewDate,
            hourSegments = _a.hourSegments,
            hourDuration = _a.hourDuration,
            dayStart = _a.dayStart,
            dayEnd = _a.dayEnd;
        var setMinutes = dateAdapter.setMinutes,
            setHours = dateAdapter.setHours,
            startOfDay = dateAdapter.startOfDay,
            startOfMinute = dateAdapter.startOfMinute,
            endOfDay = dateAdapter.endOfDay,
            addMinutes = dateAdapter.addMinutes,
            addHours = dateAdapter.addHours,
            addDays = dateAdapter.addDays;
        var hours = [];
        var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
        var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
        var segmentDuration = (hourDuration || MINUTES_IN_HOUR) / hourSegments;
        var startOfViewDay = startOfDay(viewDate);
        var endOfViewDay = endOfDay(viewDate);

        var dateAdjustment = function dateAdjustment(d) {
          return d;
        }; // this means that we change from or to DST on this day and that's going to cause problems so we bump the date


        if (startOfViewDay.getTimezoneOffset() !== endOfViewDay.getTimezoneOffset()) {
          startOfViewDay = addDays(startOfViewDay, 1);
          startOfView = addDays(startOfView, 1);
          endOfView = addDays(endOfView, 1);

          dateAdjustment = function dateAdjustment(d) {
            return addDays(d, -1);
          };
        }

        var dayDuration = hourDuration ? HOURS_IN_DAY * 60 / hourDuration : MINUTES_IN_HOUR;

        for (var i = 0; i < dayDuration; i++) {
          var segments = [];

          for (var j = 0; j < hourSegments; j++) {
            var date = addMinutes(addMinutes(startOfView, i * (hourDuration || MINUTES_IN_HOUR)), j * segmentDuration);

            if (date >= startOfView && date < endOfView) {
              segments.push({
                date: dateAdjustment(date),
                displayDate: date,
                isStart: j === 0
              });
            }
          }

          if (segments.length > 0) {
            hours.push({
              segments: segments
            });
          }
        }

        return hours;
      }

      var EventValidationErrorMessage;

      (function (EventValidationErrorMessage) {
        EventValidationErrorMessage["NotArray"] = "Events must be an array";
        EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
        EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
        EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
        EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
      })(EventValidationErrorMessage || (EventValidationErrorMessage = {}));

      function validateEvents(events, log) {
        var isValid = true;

        function isError(msg, event) {
          log(msg, event);
          isValid = false;
        }

        if (!Array.isArray(events)) {
          log(EventValidationErrorMessage.NotArray, events);
          return false;
        }

        events.forEach(function (event) {
          if (!event.start) {
            isError(EventValidationErrorMessage.StartPropertyMissing, event);
          } else if (!(event.start instanceof Date)) {
            isError(EventValidationErrorMessage.StartPropertyNotDate, event);
          }

          if (event.end) {
            if (!(event.end instanceof Date)) {
              isError(EventValidationErrorMessage.EndPropertyNotDate, event);
            }

            if (event.start > event.end) {
              isError(EventValidationErrorMessage.EndsBeforeStart, event);
            }
          }
        });
        return isValid;
      } //# sourceMappingURL=calendar-utils.js.map

      /***/

    },

    /***/
    "yotz":
    /*!**************************************************************************************!*\
      !*** ./node_modules/angular-resizable-element/fesm2015/angular-resizable-element.js ***!
      \**************************************************************************************/

    /*! exports provided: ResizableDirective, ResizeHandleDirective, ResizableModule */

    /***/
    function yotz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResizableDirective", function () {
        return ResizableDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResizeHandleDirective", function () {
        return ResizeHandleDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResizableModule", function () {
        return ResizableModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @hidden
       * @type {?}
       */


      var IS_TOUCH_DEVICE = function () {
        // In case we're in Node.js environment.
        if (typeof window === 'undefined') {
          return false;
        } else {
          return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        }
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} value1
       * @param {?} value2
       * @param {?=} precision
       * @return {?}
       */


      function isNumberCloseTo(value1, value2) {
        var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

        /** @type {?} */
        var diff = Math.abs(value1 - value2);
        return diff < precision;
      }
      /**
       * @param {?} startingRect
       * @param {?} edges
       * @param {?} clientX
       * @param {?} clientY
       * @return {?}
       */


      function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
        /** @type {?} */
        var newBoundingRect = {
          top: startingRect.top,
          bottom: startingRect.bottom,
          left: startingRect.left,
          right: startingRect.right
        };

        if (edges.top) {
          newBoundingRect.top += clientY;
        }

        if (edges.bottom) {
          newBoundingRect.bottom += clientY;
        }

        if (edges.left) {
          newBoundingRect.left += clientX;
        }

        if (edges.right) {
          newBoundingRect.right += clientX;
        }

        newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
        newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
        return newBoundingRect;
      }
      /**
       * @param {?} element
       * @param {?} ghostElementPositioning
       * @return {?}
       */


      function getElementRect(element, ghostElementPositioning) {
        /** @type {?} */
        var translateX = 0;
        /** @type {?} */

        var translateY = 0;
        /** @type {?} */

        var style = element.nativeElement.style;
        /** @type {?} */

        var transformProperties = ['transform', '-ms-transform', '-moz-transform', '-o-transform'];
        /** @type {?} */

        var transform = transformProperties.map(function (property) {
          return style[property];
        }).find(function (value) {
          return !!value;
        });

        if (transform && transform.includes('translate')) {
          translateX = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$1');
          translateY = transform.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/, '$2');
        }

        if (ghostElementPositioning === 'absolute') {
          return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop - translateY,
            bottom: element.nativeElement.offsetHeight + element.nativeElement.offsetTop - translateY,
            left: element.nativeElement.offsetLeft - translateX,
            right: element.nativeElement.offsetWidth + element.nativeElement.offsetLeft - translateX
          };
        } else {
          /** @type {?} */
          var boundingRect = element.nativeElement.getBoundingClientRect();
          return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top - translateY,
            bottom: boundingRect.bottom - translateY,
            left: boundingRect.left - translateX,
            right: boundingRect.right - translateX,
            scrollTop: element.nativeElement.scrollTop,
            scrollLeft: element.nativeElement.scrollLeft
          };
        }
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      function isWithinBoundingY(_ref59) {
        var clientY = _ref59.clientY,
            rect = _ref59.rect;
        return clientY >= rect.top && clientY <= rect.bottom;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      function isWithinBoundingX(_ref60) {
        var clientX = _ref60.clientX,
            rect = _ref60.rect;
        return clientX >= rect.left && clientX <= rect.right;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      function getResizeEdges(_ref61) {
        var clientX = _ref61.clientX,
            clientY = _ref61.clientY,
            elm = _ref61.elm,
            allowedEdges = _ref61.allowedEdges,
            cursorPrecision = _ref61.cursorPrecision;

        /** @type {?} */
        var elmPosition = elm.nativeElement.getBoundingClientRect();
        /** @type {?} */

        var edges = {};

        if (allowedEdges.left && isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) && isWithinBoundingY({
          clientY: clientY,
          rect: elmPosition
        })) {
          edges.left = true;
        }

        if (allowedEdges.right && isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) && isWithinBoundingY({
          clientY: clientY,
          rect: elmPosition
        })) {
          edges.right = true;
        }

        if (allowedEdges.top && isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) && isWithinBoundingX({
          clientX: clientX,
          rect: elmPosition
        })) {
          edges.top = true;
        }

        if (allowedEdges.bottom && isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) && isWithinBoundingX({
          clientX: clientX,
          rect: elmPosition
        })) {
          edges.bottom = true;
        }

        return edges;
      }
      /** @type {?} */


      var DEFAULT_RESIZE_CURSORS = Object.freeze({
        topLeft: 'nw-resize',
        topRight: 'ne-resize',
        bottomLeft: 'sw-resize',
        bottomRight: 'se-resize',
        leftOrRight: 'col-resize',
        topOrBottom: 'row-resize'
      });
      /**
       * @param {?} edges
       * @param {?} cursors
       * @return {?}
       */

      function getResizeCursor(edges, cursors) {
        if (edges.left && edges.top) {
          return cursors.topLeft;
        } else if (edges.right && edges.top) {
          return cursors.topRight;
        } else if (edges.left && edges.bottom) {
          return cursors.bottomLeft;
        } else if (edges.right && edges.bottom) {
          return cursors.bottomRight;
        } else if (edges.left || edges.right) {
          return cursors.leftOrRight;
        } else if (edges.top || edges.bottom) {
          return cursors.topOrBottom;
        } else {
          return '';
        }
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      function getEdgesDiff(_ref62) {
        var edges = _ref62.edges,
            initialRectangle = _ref62.initialRectangle,
            newRectangle = _ref62.newRectangle;

        /** @type {?} */
        var edgesDiff = {};
        Object.keys(edges).forEach(function (edge) {
          edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
        });
        return edgesDiff;
      }
      /** @type {?} */


      var RESIZE_ACTIVE_CLASS = 'resize-active';
      /** @type {?} */

      var RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
      /** @type {?} */

      var RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
      /** @type {?} */

      var RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
      /** @type {?} */

      var RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
      /** @type {?} */

      var RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
      /** @type {?} */

      var MOUSE_MOVE_THROTTLE_MS = 50;
      /**
       * Place this on an element to make it resizable. For example:
       *
       * ```html
       * <div
       *   mwlResizable
       *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
       *   [enableGhostResize]="true">
       * </div>
       * ```
       * Or in case they are sibling elements:
       * ```html
       * <div mwlResizable #resizableElement="mwlResizable"></div>
       * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
       * ```
       */

      var ResizableDirective = /*#__PURE__*/function () {
        /**
         * @hidden
         * @param {?} platformId
         * @param {?} renderer
         * @param {?} elm
         * @param {?} zone
         */
        function ResizableDirective(platformId, renderer, elm, zone) {
          _classCallCheck(this, ResizableDirective);

          this.platformId = platformId;
          this.renderer = renderer;
          this.elm = elm;
          this.zone = zone;
          /**
           * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
           * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
           */

          this.resizeEdges = {};
          /**
           * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
           */

          this.enableGhostResize = false;
          /**
           * A snap grid that resize events will be locked to.
           *
           * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
           */

          this.resizeSnapGrid = {};
          /**
           * The mouse cursors that will be set on the resize edges
           */

          this.resizeCursors = DEFAULT_RESIZE_CURSORS;
          /**
           * Mouse over thickness to active cursor.
           * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
           */

          this.resizeCursorPrecision = 3;
          /**
           * Define the positioning of the ghost element (can be fixed or absolute)
           */

          this.ghostElementPositioning = 'fixed';
          /**
           * Allow elements to be resized to negative dimensions
           */

          this.allowNegativeResizes = false;
          /**
           * The mouse move throttle in milliseconds, default: 50 ms
           */

          this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
          /**
           * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
           */

          this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
           */

          this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
           */

          this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * @hidden
           */

          this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * @hidden
           */

          this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /**
           * @hidden
           */

          this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.resizeEdges$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
        }
        /**
         * @hidden
         * @return {?}
         */


        _createClass(ResizableDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this106 = this;

            /** @type {?} */
            var mousedown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.pointerEventListeners.pointerDown, this.mousedown);
            /** @type {?} */

            var mousemove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.pointerEventListeners.pointerMove, this.mousemove).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_ref63) {
              var event = _ref63.event;

              if (currentResize) {
                try {
                  event.preventDefault();
                } catch (e) {// just adding try-catch not to see errors in console if there is a passive listener for same event somewhere
                  // browser does nothing except of writing errors to console
                }
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
            /** @type {?} */

            var mouseup$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.pointerEventListeners.pointerUp, this.mouseup);
            /** @type {?} */

            var currentResize;
            /** @type {?} */

            var removeGhostElement = function removeGhostElement() {
              if (currentResize && currentResize.clonedNode) {
                _this106.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);

                _this106.renderer.setStyle(_this106.elm.nativeElement, 'visibility', 'inherit');
              }
            };
            /** @type {?} */


            var getResizeCursors = function getResizeCursors() {
              return Object.assign({}, DEFAULT_RESIZE_CURSORS, _this106.resizeCursors);
            };

            this.resizeEdges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(this.resizeEdges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
              return _this106.resizeEdges && Object.keys(_this106.resizeEdges).some(function (edge) {
                return !!_this106.resizeEdges[edge];
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (legacyResizeEdgesEnabled) {
              return legacyResizeEdgesEnabled ? mousemove$ : rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(this.mouseMoveThrottleMS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (_ref64) {
              var clientX = _ref64.clientX,
                  clientY = _ref64.clientY;

              /** @type {?} */
              var resizeEdges = getResizeEdges({
                clientX: clientX,
                clientY: clientY,
                elm: _this106.elm,
                allowedEdges: _this106.resizeEdges,
                cursorPrecision: _this106.resizeCursorPrecision
              });
              /** @type {?} */

              var resizeCursors = getResizeCursors();

              if (!currentResize) {
                /** @type {?} */
                var cursor = getResizeCursor(resizeEdges, resizeCursors);

                _this106.renderer.setStyle(_this106.elm.nativeElement, 'cursor', cursor);
              }

              _this106.setElementClass(_this106.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);

              _this106.setElementClass(_this106.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);

              _this106.setElementClass(_this106.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);

              _this106.setElementClass(_this106.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
            });
            /** @type {?} */

            var mousedrag = mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (startCoords) {
              /**
               * @param {?} moveCoords
               * @return {?}
               */
              function getDiff(moveCoords) {
                return {
                  clientX: moveCoords.clientX - startCoords.clientX,
                  clientY: moveCoords.clientY - startCoords.clientY
                };
              }
              /** @type {?} */


              var getSnapGrid = function getSnapGrid() {
                /** @type {?} */
                var snapGrid = {
                  x: 1,
                  y: 1
                };

                if (currentResize) {
                  if (_this106.resizeSnapGrid.left && currentResize.edges.left) {
                    snapGrid.x = +_this106.resizeSnapGrid.left;
                  } else if (_this106.resizeSnapGrid.right && currentResize.edges.right) {
                    snapGrid.x = +_this106.resizeSnapGrid.right;
                  }

                  if (_this106.resizeSnapGrid.top && currentResize.edges.top) {
                    snapGrid.y = +_this106.resizeSnapGrid.top;
                  } else if (_this106.resizeSnapGrid.bottom && currentResize.edges.bottom) {
                    snapGrid.y = +_this106.resizeSnapGrid.bottom;
                  }
                }

                return snapGrid;
              };
              /**
               * @param {?} coords
               * @param {?} snapGrid
               * @return {?}
               */


              function getGrid(coords, snapGrid) {
                return {
                  x: Math.ceil(coords.clientX / snapGrid.x),
                  y: Math.ceil(coords.clientY / snapGrid.y)
                };
              }

              return (
                /** @type {?} */
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (coords) {
                  return [, coords];
                })), mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref65) {
                  var _ref66 = _slicedToArray(_ref65, 2),
                      previousCoords = _ref66[0],
                      newCoords = _ref66[1];

                  return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_ref67) {
                  var _ref68 = _slicedToArray(_ref67, 2),
                      previousCoords = _ref68[0],
                      newCoords = _ref68[1];

                  if (!previousCoords) {
                    return true;
                  }
                  /** @type {?} */


                  var snapGrid = getSnapGrid();
                  /** @type {?} */

                  var previousGrid = getGrid(previousCoords, snapGrid);
                  /** @type {?} */

                  var newGrid = getGrid(newCoords, snapGrid);
                  return previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y;
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref69) {
                  var _ref70 = _slicedToArray(_ref69, 2),
                      newCoords = _ref70[1];

                  /** @type {?} */
                  var snapGrid = getSnapGrid();
                  return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                  };
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(mouseup$, mousedown$)))
              );
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () {
              return !!currentResize;
            }));
            mousedrag.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref71) {
              var clientX = _ref71.clientX,
                  clientY = _ref71.clientY;
              return getNewBoundingRectangle(
              /** @type {?} */
              currentResize.startingRect,
              /** @type {?} */
              currentResize.edges, clientX, clientY);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (newBoundingRect) {
              return _this106.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (newBoundingRect) {
              return _this106.validateResize ? _this106.validateResize({
                rectangle: newBoundingRect,
                edges: getEdgesDiff({
                  edges:
                  /** @type {?} */
                  currentResize.edges,
                  initialRectangle:
                  /** @type {?} */
                  currentResize.startingRect,
                  newRectangle: newBoundingRect
                })
              }) : true;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (newBoundingRect) {
              if (currentResize && currentResize.clonedNode) {
                _this106.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(newBoundingRect.height, "px"));

                _this106.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(newBoundingRect.width, "px"));

                _this106.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(newBoundingRect.top, "px"));

                _this106.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(newBoundingRect.left, "px"));
              }

              if (_this106.resizing.observers.length > 0) {
                _this106.zone.run(function () {
                  _this106.resizing.emit({
                    edges: getEdgesDiff({
                      edges:
                      /** @type {?} */
                      currentResize.edges,
                      initialRectangle:
                      /** @type {?} */
                      currentResize.startingRect,
                      newRectangle: newBoundingRect
                    }),
                    rectangle: newBoundingRect
                  });
                });
              }

              /** @type {?} */
              currentResize.currentRect = newBoundingRect;
            });
            mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref72) {
              var clientX = _ref72.clientX,
                  clientY = _ref72.clientY,
                  edges = _ref72.edges;
              return edges || getResizeEdges({
                clientX: clientX,
                clientY: clientY,
                elm: _this106.elm,
                allowedEdges: _this106.resizeEdges,
                cursorPrecision: _this106.resizeCursorPrecision
              });
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (edges) {
              return Object.keys(edges).length > 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (edges) {
              if (currentResize) {
                removeGhostElement();
              }
              /** @type {?} */


              var startingRect = getElementRect(_this106.elm, _this106.ghostElementPositioning);
              currentResize = {
                edges: edges,
                startingRect: startingRect,
                currentRect: startingRect
              };
              /** @type {?} */

              var resizeCursors = getResizeCursors();
              /** @type {?} */

              var cursor = getResizeCursor(currentResize.edges, resizeCursors);

              _this106.renderer.setStyle(document.body, 'cursor', cursor);

              _this106.setElementClass(_this106.elm, RESIZE_ACTIVE_CLASS, true);

              if (_this106.enableGhostResize) {
                currentResize.clonedNode = _this106.elm.nativeElement.cloneNode(true);

                _this106.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);

                _this106.renderer.setStyle(_this106.elm.nativeElement, 'visibility', 'hidden');

                _this106.renderer.setStyle(currentResize.clonedNode, 'position', _this106.ghostElementPositioning);

                _this106.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(currentResize.startingRect.left, "px"));

                _this106.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(currentResize.startingRect.top, "px"));

                _this106.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(currentResize.startingRect.height, "px"));

                _this106.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(currentResize.startingRect.width, "px"));

                _this106.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));

                _this106.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);

                /** @type {?} */
                currentResize.clonedNode.scrollTop =
                /** @type {?} */
                currentResize.startingRect.scrollTop;

                /** @type {?} */
                currentResize.clonedNode.scrollLeft =
                /** @type {?} */
                currentResize.startingRect.scrollLeft;
              }

              if (_this106.resizeStart.observers.length > 0) {
                _this106.zone.run(function () {
                  _this106.resizeStart.emit({
                    edges: getEdgesDiff({
                      edges: edges,
                      initialRectangle: startingRect,
                      newRectangle: startingRect
                    }),
                    rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                  });
                });
              }
            });
            mouseup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function () {
              if (currentResize) {
                _this106.renderer.removeClass(_this106.elm.nativeElement, RESIZE_ACTIVE_CLASS);

                _this106.renderer.setStyle(document.body, 'cursor', '');

                _this106.renderer.setStyle(_this106.elm.nativeElement, 'cursor', '');

                if (_this106.resizeEnd.observers.length > 0) {
                  _this106.zone.run(function () {
                    _this106.resizeEnd.emit({
                      edges: getEdgesDiff({
                        edges:
                        /** @type {?} */
                        currentResize.edges,
                        initialRectangle:
                        /** @type {?} */
                        currentResize.startingRect,
                        newRectangle:
                        /** @type {?} */
                        currentResize.currentRect
                      }),
                      rectangle:
                      /** @type {?} */
                      currentResize.currentRect
                    });
                  });
                }

                removeGhostElement();
                currentResize = null;
              }
            });
          }
          /**
           * @hidden
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.resizeEdges) {
              this.resizeEdges$.next(this.resizeEdges);
            }
          }
          /**
           * @hidden
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // browser check for angular universal, because it doesn't know what document is
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
              this.renderer.setStyle(document.body, 'cursor', '');
            }

            this.mousedown.complete();
            this.mouseup.complete();
            this.mousemove.complete();
            this.resizeEdges$.complete();
            this.destroy$.next();
          }
          /**
           * @private
           * @param {?} elm
           * @param {?} name
           * @param {?} add
           * @return {?}
           */

        }, {
          key: "setElementClass",
          value: function setElementClass(elm, name, add) {
            if (add) {
              this.renderer.addClass(elm.nativeElement, name);
            } else {
              this.renderer.removeClass(elm.nativeElement, name);
            }
          }
        }]);

        return ResizableDirective;
      }();

      ResizableDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlResizable]',
          exportAs: 'mwlResizable'
        }]
      }];
      /** @nocollapse */

      ResizableDirective.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      ResizableDirective.propDecorators = {
        validateResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resizeEdges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        enableGhostResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resizeSnapGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resizeCursors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resizeCursorPrecision: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ghostElementPositioning: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        allowNegativeResizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        mouseMoveThrottleMS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resizeStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        resizing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        resizeEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };

      var PointerEventListeners = /*#__PURE__*/function () {
        /**
         * @param {?} renderer
         * @param {?} zone
         */
        function PointerEventListeners(renderer, zone) {
          _classCallCheck(this, PointerEventListeners);

          this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var unsubscribeMouseDown;
            /** @type {?} */

            var unsubscribeTouchStart;
            zone.runOutsideAngular(function () {
              unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
                observer.next({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  event: event
                });
              });

              if (IS_TOUCH_DEVICE) {
                unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
                  observer.next({
                    clientX: event.touches[0].clientX,
                    clientY: event.touches[0].clientY,
                    event: event
                  });
                });
              }
            });
            return function () {
              unsubscribeMouseDown();

              if (IS_TOUCH_DEVICE) {
                /** @type {?} */
                unsubscribeTouchStart();
              }
            };
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
          this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var unsubscribeMouseMove;
            /** @type {?} */

            var unsubscribeTouchMove;
            zone.runOutsideAngular(function () {
              unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
                observer.next({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  event: event
                });
              });

              if (IS_TOUCH_DEVICE) {
                unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
                  observer.next({
                    clientX: event.targetTouches[0].clientX,
                    clientY: event.targetTouches[0].clientY,
                    event: event
                  });
                });
              }
            });
            return function () {
              unsubscribeMouseMove();

              if (IS_TOUCH_DEVICE) {
                /** @type {?} */
                unsubscribeTouchMove();
              }
            };
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
          this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var unsubscribeMouseUp;
            /** @type {?} */

            var unsubscribeTouchEnd;
            /** @type {?} */

            var unsubscribeTouchCancel;
            zone.runOutsideAngular(function () {
              unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
                observer.next({
                  clientX: event.clientX,
                  clientY: event.clientY,
                  event: event
                });
              });

              if (IS_TOUCH_DEVICE) {
                unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
                  observer.next({
                    clientX: event.changedTouches[0].clientX,
                    clientY: event.changedTouches[0].clientY,
                    event: event
                  });
                });
                unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
                  observer.next({
                    clientX: event.changedTouches[0].clientX,
                    clientY: event.changedTouches[0].clientY,
                    event: event
                  });
                });
              }
            });
            return function () {
              unsubscribeMouseUp();

              if (IS_TOUCH_DEVICE) {
                /** @type {?} */
                unsubscribeTouchEnd();

                /** @type {?} */
                unsubscribeTouchCancel();
              }
            };
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        }

        _createClass(PointerEventListeners, null, [{
          key: "getInstance",
          value: // tslint:disable-line

          /**
           * @param {?} renderer
           * @param {?} zone
           * @return {?}
           */
          function getInstance(renderer, zone) {
            if (!PointerEventListeners.instance) {
              PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
            }

            return PointerEventListeners.instance;
          }
        }]);

        return PointerEventListeners;
      }();
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
       *
       * For example
       *
       * ```html
       * <div mwlResizable>
       *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
       * </div>
       * ```
       * Or in case they are sibling elements:
       * ```html
       * <div mwlResizable #resizableElement="mwlResizable"></div>
       * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
       * ```
       */


      var ResizeHandleDirective = /*#__PURE__*/function () {
        /**
         * @param {?} renderer
         * @param {?} element
         * @param {?} zone
         * @param {?} resizableDirective
         */
        function ResizeHandleDirective(renderer, element, zone, resizableDirective) {
          _classCallCheck(this, ResizeHandleDirective);

          this.renderer = renderer;
          this.element = element;
          this.zone = zone;
          this.resizableDirective = resizableDirective;
          /**
           * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
           */

          this.resizeEdges = {};
          this.eventListeners = {};
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }
        /**
         * @return {?}
         */


        _createClass(ResizeHandleDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this107 = this;

            this.zone.runOutsideAngular(function () {
              _this107.listenOnTheHost('mousedown').subscribe(function (event) {
                _this107.onMousedown(event, event.clientX, event.clientY);
              });

              _this107.listenOnTheHost('mouseup').subscribe(function (event) {
                _this107.onMouseup(event.clientX, event.clientY);
              });

              if (IS_TOUCH_DEVICE) {
                _this107.listenOnTheHost('touchstart').subscribe(function (event) {
                  _this107.onMousedown(event, event.touches[0].clientX, event.touches[0].clientY);
                });

                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(_this107.listenOnTheHost('touchend'), _this107.listenOnTheHost('touchcancel')).subscribe(function (event) {
                  _this107.onMouseup(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
                });
              }
            });
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.unsubscribeEventListeners();
          }
          /**
           * @hidden
           * @param {?} event
           * @param {?} clientX
           * @param {?} clientY
           * @return {?}
           */

        }, {
          key: "onMousedown",
          value: function onMousedown(event, clientX, clientY) {
            var _this108 = this;

            event.preventDefault();

            if (!this.eventListeners.touchmove) {
              this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                _this108.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
              });
            }

            if (!this.eventListeners.mousemove) {
              this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                _this108.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
              });
            }

            this.resizable.mousedown.next({
              clientX: clientX,
              clientY: clientY,
              edges: this.resizeEdges
            });
          }
          /**
           * @hidden
           * @param {?} clientX
           * @param {?} clientY
           * @return {?}
           */

        }, {
          key: "onMouseup",
          value: function onMouseup(clientX, clientY) {
            this.unsubscribeEventListeners();
            this.resizable.mouseup.next({
              clientX: clientX,
              clientY: clientY,
              edges: this.resizeEdges
            });
          } // directive might be passed from DI or as an input

          /**
           * @private
           * @return {?}
           */

        }, {
          key: "resizable",
          get: function get() {
            return this.resizableDirective || this.resizableContainer;
          }
          /**
           * @private
           * @param {?} event
           * @param {?} clientX
           * @param {?} clientY
           * @return {?}
           */

        }, {
          key: "onMousemove",
          value: function onMousemove(event, clientX, clientY) {
            this.resizable.mousemove.next({
              clientX: clientX,
              clientY: clientY,
              edges: this.resizeEdges,
              event: event
            });
          }
          /**
           * @private
           * @return {?}
           */

        }, {
          key: "unsubscribeEventListeners",
          value: function unsubscribeEventListeners() {
            var _this109 = this;

            Object.keys(this.eventListeners).forEach(function (type) {
              /** @type {?} */
              _this109.eventListeners[type]();

              delete _this109.eventListeners[type];
            });
          }
          /**
           * @private
           * @template T
           * @param {?} eventName
           * @return {?}
           */

        }, {
          key: "listenOnTheHost",
          value: function listenOnTheHost(eventName) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element.nativeElement, eventName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$));
          }
        }]);

        return ResizeHandleDirective;
      }();

      ResizeHandleDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mwlResizeHandle]'
        }]
      }];
      /** @nocollapse */

      ResizeHandleDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: ResizableDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      };

      ResizeHandleDirective.propDecorators = {
        resizeEdges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resizableContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var ResizableModule = /*#__PURE__*/_createClass(function ResizableModule() {
        _classCallCheck(this, ResizableModule);
      });

      ResizableModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [ResizableDirective, ResizeHandleDirective],
          exports: [ResizableDirective, ResizeHandleDirective]
        }]
      }];
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-resizable-element.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=default~agenda-agenda-module~lote-lote-module-es5.js.map