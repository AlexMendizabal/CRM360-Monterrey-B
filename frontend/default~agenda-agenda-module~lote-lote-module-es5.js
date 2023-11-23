(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~agenda-agenda-module~lote-lote-module"], {
    /***/
    "1BeU":
    /*!***********************************************************************!*\
      !*** ./node_modules/angular-calendar/date-adapters/date-fns/index.js ***!
      \***********************************************************************/

    /*! no static exports found */

    /***/
    function BeU(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var tslib_1 = __webpack_require__(
      /*! tslib */
      "UWrc");

      var date_fns_1 = __webpack_require__(
      /*! calendar-utils/date-adapters/date-fns */
      "agoU");

      var date_fns_2 = __webpack_require__(
      /*! date-fns */
      "b/SL");

      function adapterFactory() {
        return tslib_1.__assign({}, date_fns_1.adapterFactory(), {
          addWeeks: date_fns_2.addWeeks,
          addMonths: date_fns_2.addMonths,
          subDays: date_fns_2.subDays,
          subWeeks: date_fns_2.subWeeks,
          subMonths: date_fns_2.subMonths,
          getISOWeek: date_fns_2.getISOWeek,
          setDate: date_fns_2.setDate,
          setMonth: date_fns_2.setMonth,
          setYear: date_fns_2.setYear,
          getDate: date_fns_2.getDate,
          getYear: date_fns_2.getYear
        });
      }

      exports.adapterFactory = adapterFactory; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "6yRa":
    /*!*****************************************************!*\
      !*** ./node_modules/create-point-cb/dist/bundle.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function yRa(module, exports, __webpack_require__) {
      "use strict";

      var typeFunc = __webpack_require__(
      /*! type-func */
      "OJSY");

      function createPointCB(object, options) {
        // A persistent object (as opposed to returned object) is used to save memory
        // This is good to prevent layout thrashing, or for games, and such
        // NOTE
        // This uses IE fixes which should be OK to remove some day. :)
        // Some speed will be gained by removal of these.
        // pointCB should be saved in a variable on return
        // This allows the usage of element.removeEventListener
        options = options || {};
        var allowUpdate = typeFunc["boolean"](options.allowUpdate, true);
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
      /*
      git remote add origin https://github.com/hollowdoor/create_point_cb.git
      git push -u origin master
      */


      module.exports = createPointCB; //# sourceMappingURL=bundle.js.map

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
    "OJSY":
    /*!***********************************************!*\
      !*** ./node_modules/type-func/dist/bundle.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function OJSY(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

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
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
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

      function integer(func, def) {
        func = getDef(func, def);

        if (typeof func === 'function') {
          return function f() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            var n = parseInt(func.apply(this, args), 10);
            return n != n ? 0 : n;
          };
        }

        func = parseInt(func, 10);
        return func != func ? function () {
          return 0;
        } : function () {
          return func;
        };
      }

      function string(func, def) {
        func = getDef(func, def);

        if (typeof func === 'function') {
          return function f() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return '' + func.apply(this, args);
          };
        }

        func = '' + func;
        return function () {
          return func;
        };
      }

      exports["boolean"] = _boolean;
      exports.integer = integer;
      exports.string = string; //# sourceMappingURL=bundle.js.map

      /***/
    },

    /***/
    "PTRy":
    /*!***********************************************!*\
      !*** ./node_modules/dom-plane/dist/bundle.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function PTRy(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopDefault(ex) {
        return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
      }

      var createPointCb = _interopDefault(__webpack_require__(
      /*! create-point-cb */
      "6yRa"));

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

      exports.createPointCB = createPointCb;
      exports.getClientRect = getClientRect;
      exports.pointInside = pointInside; //# sourceMappingURL=bundle.js.map

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


      var dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! dom-autoscroller */
      "rJ3z");
      /* harmony import */


      var dom_autoscroller__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dom_autoscroller__WEBPACK_IMPORTED_MODULE_2__);
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


      var DraggableHelper = function DraggableHelper() {
        _classCallCheck(this, DraggableHelper);

        this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
      };

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

      var DraggableScrollContainerDirective = /*#__PURE__*/function () {
        /**
         * @hidden
         * @param {?} elementRef
         * @param {?} renderer
         * @param {?} zone
         */
        function DraggableScrollContainerDirective(elementRef, renderer, zone) {
          _classCallCheck(this, DraggableScrollContainerDirective);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this.zone = zone;
          /**
           * Trigger the DragStart after a long touch in scrollable container when true
           */

          this.activeLongPressDrag = false;
          /**
           * Configuration of a long touch
           * Duration in ms of a long touch before activating DragStart
           * Delta of the
           */

          this.longPressConfig = {
            duration: 300,
            delta: 30
          };
          this.cancelledScroll = false;
        }
        /**
         * @return {?}
         */


        _createClass(DraggableScrollContainerDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              _this.renderer.listen(_this.elementRef.nativeElement, 'touchmove',
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                if (_this.cancelledScroll && event.cancelable) {
                  event.preventDefault();
                }
              });
            });
          }
          /**
           * @hidden
           * @return {?}
           */

        }, {
          key: "disableScroll",
          value: function disableScroll() {
            this.cancelledScroll = true;
            this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden');
          }
          /**
           * @hidden
           * @return {?}
           */

        }, {
          key: "enableScroll",
          value: function enableScroll() {
            this.cancelledScroll = false;
            this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'auto');
          }
          /**
           * @hidden
           * @return {?}
           */

        }, {
          key: "hasScrollbar",
          value: function hasScrollbar() {
            /** @type {?} */
            var containerHasHorizontalScroll = this.elementRef.nativeElement.scrollWidth - this.elementRef.nativeElement.clientWidth > 0;
            /** @type {?} */

            var containerHasVerticalScroll = this.elementRef.nativeElement.scrollHeight - this.elementRef.nativeElement.clientHeight > 0;
            return containerHasHorizontalScroll || containerHasVerticalScroll;
          }
        }]);

        return DraggableScrollContainerDirective;
      }();

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
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
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
            var _this2 = this;

            this.checkEventListeners();
            /** @type {?} */

            var pointerDragged$ = this.pointerDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @return {?}
            */
            function () {
              return _this2.canDrag();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(
            /**
            * @param {?} pointerDownEvent
            * @return {?}
            */
            function (pointerDownEvent) {
              // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
              // stop mouse events propagating up the chain
              if (pointerDownEvent.event.stopPropagation && !_this2.scrollContainer) {
                pointerDownEvent.event.stopPropagation();
              }
              /** @type {?} */


              var startScrollPosition = _this2.getScrollPosition();
              /** @type {?} */


              var scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
              /**
              * @param {?} observer
              * @return {?}
              */
              function (observer) {
                /** @type {?} */
                var scrollContainer = _this2.scrollContainer ? _this2.scrollContainer.elementRef.nativeElement : 'window';
                return _this2.renderer.listen(scrollContainer, 'scroll',
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
                return _this2.getScrollPosition();
              }));
              /** @type {?} */

              var currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
              /** @type {?} */

              var cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();

              _this2.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this2.dragPointerDown.next({
                  x: 0,
                  y: 0
                });
              });
              /** @type {?} */


              var dragComplete$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(_this2.pointerUp$, _this2.pointerDown$, cancelDrag$, _this2.destroy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
              /** @type {?} */

              var pointerMove = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([_this2.pointerMove$, scrollContainerScroll$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    pointerMoveEvent = _ref2[0],
                    scroll = _ref2[1];

                return {
                  currentDrag$: currentDrag$,
                  transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                  transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                  clientX: pointerMoveEvent.clientX,
                  clientY: pointerMoveEvent.clientY,
                  scrollLeft: scroll.left,
                  scrollTop: scroll.top
                };
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} moveData
              * @return {?}
              */
              function (moveData) {
                if (_this2.dragSnapGrid.x) {
                  moveData.transformX = Math.round(moveData.transformX / _this2.dragSnapGrid.x) * _this2.dragSnapGrid.x;
                }

                if (_this2.dragSnapGrid.y) {
                  moveData.transformY = Math.round(moveData.transformY / _this2.dragSnapGrid.y) * _this2.dragSnapGrid.y;
                }

                return moveData;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} moveData
              * @return {?}
              */
              function (moveData) {
                if (!_this2.dragAxis.x) {
                  moveData.transformX = 0;
                }

                if (!_this2.dragAxis.y) {
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
              function (_ref3) {
                var x = _ref3.x,
                    y = _ref3.y,
                    transformX = _ref3.transformX,
                    transformY = _ref3.transformY;
                return !_this2.validateDrag || _this2.validateDrag({
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
              function (_ref4) {
                var clientX = _ref4.clientX,
                    clientY = _ref4.clientY,
                    x = _ref4.x,
                    y = _ref4.y;

                _this2.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this2.dragStart.next({
                    cancelDrag$: cancelDrag$
                  });
                });

                _this2.scroller = dom_autoscroller__WEBPACK_IMPORTED_MODULE_2___default()([_this2.scrollContainer ? _this2.scrollContainer.elementRef.nativeElement : _this2.document.defaultView], {
                  margin: 20,

                  /**
                   * @return {?}
                   */
                  autoScroll: function autoScroll() {
                    return true;
                  }
                });

                _this2.renderer.addClass(_this2.element.nativeElement, _this2.dragActiveClass);

                if (_this2.ghostDragEnabled) {
                  /** @type {?} */
                  var rect = _this2.element.nativeElement.getBoundingClientRect();
                  /** @type {?} */


                  var clone =
                  /** @type {?} */
                  _this2.element.nativeElement.cloneNode(true);

                  if (!_this2.showOriginalElementWhileDragging) {
                    _this2.renderer.setStyle(_this2.element.nativeElement, 'visibility', 'hidden');
                  }

                  if (_this2.ghostElementAppendTo) {
                    _this2.ghostElementAppendTo.appendChild(clone);
                  } else {
                    /** @type {?} */
                    _this2.element.nativeElement.parentNode.insertBefore(clone, _this2.element.nativeElement.nextSibling);
                  }

                  _this2.ghostElement = clone;
                  document.body.style.cursor = _this2.dragCursor;

                  _this2.setElementStyles(clone, {
                    position: 'fixed',
                    top: "".concat(rect.top, "px"),
                    left: "".concat(rect.left, "px"),
                    width: "".concat(rect.width, "px"),
                    height: "".concat(rect.height, "px"),
                    cursor: _this2.dragCursor,
                    margin: '0',
                    willChange: 'transform',
                    pointerEvents: 'none'
                  });

                  if (_this2.ghostElementTemplate) {
                    /** @type {?} */
                    var viewRef = _this2.vcr.createEmbeddedView(_this2.ghostElementTemplate);

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
                      _this2.vcr.remove(_this2.vcr.indexOf(viewRef));
                    });
                  }

                  _this2.zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    _this2.ghostElementCreated.emit({
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
                    _this2.ghostElement = null;

                    _this2.renderer.setStyle(_this2.element.nativeElement, 'visibility', '');
                  });
                }

                _this2.draggableHelper.currentDrag.next(currentDrag$);
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
              function (_ref5) {
                var x = _ref5.x,
                    y = _ref5.y,
                    dragCancelled = _ref5.dragCancelled;

                _this2.scroller.destroy();

                _this2.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this2.dragEnd.next({
                    x: x,
                    y: y,
                    dragCancelled: dragCancelled
                  });
                });

                _this2.renderer.removeClass(_this2.element.nativeElement, _this2.dragActiveClass);

                currentDrag$.complete();
              });
              /** @type {?} */

              var selectionStart$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](
              /**
              * @param {?} observer
              * @return {?}
              */
              function (observer) {
                return _this2.renderer.listen('document', 'selectstart',
                /**
                * @param {?} e
                * @return {?}
                */
                function (e) {
                  return observer.next(e);
                });
              }); // hack to prevent text getting selected in safari while dragging

              selectionStart$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(dragComplete$, dragEnded$))).subscribe(
              /**
              * @param {?} event
              * @return {?}
              */
              function (event) {
                event.preventDefault();
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
            function (_ref6) {
              var _ref7 = _slicedToArray(_ref6, 2),
                  previous = _ref7[0],
                  next = _ref7[1];

              if (!previous) {
                return true;
              }

              return previous.x !== next.x || previous.y !== next.y;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref8) {
              var _ref9 = _slicedToArray(_ref8, 2),
                  previous = _ref9[0],
                  next = _ref9[1];

              return next;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_0__["animationFrameScheduler"])).subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref10) {
              var x = _ref10.x,
                  y = _ref10.y,
                  currentDrag$ = _ref10.currentDrag$,
                  clientX = _ref10.clientX,
                  clientY = _ref10.clientY,
                  transformX = _ref10.transformX,
                  transformY = _ref10.transformY;

              _this2.zone.run(
              /**
              * @return {?}
              */
              function () {
                _this2.dragging.next({
                  x: x,
                  y: y
                });
              });

              if (_this2.ghostElement) {
                /** @type {?} */
                var transform = "translate3d(".concat(transformX, "px, ").concat(transformY, "px, 0px)");

                _this2.setElementStyles(_this2.ghostElement, {
                  transform: transform,
                  '-webkit-transform': transform,
                  '-ms-transform': transform,
                  '-moz-transform': transform,
                  '-o-transform': transform
                });
              }

              currentDrag$.next({
                clientX: clientX,
                clientY: clientY,
                dropData: _this2.dropData
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
            var _this3 = this;

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
                _this3.eventListenerSubscriptions.mousedown = _this3.renderer.listen(_this3.element.nativeElement, 'mousedown',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this3.onMouseDown(event);
                });
                _this3.eventListenerSubscriptions.mouseup = _this3.renderer.listen('document', 'mouseup',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this3.onMouseUp(event);
                });
                _this3.eventListenerSubscriptions.touchstart = _this3.renderer.listen(_this3.element.nativeElement, 'touchstart',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this3.onTouchStart(event);
                });
                _this3.eventListenerSubscriptions.touchend = _this3.renderer.listen('document', 'touchend',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this3.onTouchEnd(event);
                });
                _this3.eventListenerSubscriptions.touchcancel = _this3.renderer.listen('document', 'touchcancel',
                /**
                * @param {?} event
                * @return {?}
                */
                function (event) {
                  _this3.onTouchEnd(event);
                });
                _this3.eventListenerSubscriptions.mouseenter = _this3.renderer.listen(_this3.element.nativeElement, 'mouseenter',
                /**
                * @return {?}
                */
                function () {
                  _this3.onMouseEnter();
                });
                _this3.eventListenerSubscriptions.mouseleave = _this3.renderer.listen(_this3.element.nativeElement, 'mouseleave',
                /**
                * @return {?}
                */
                function () {
                  _this3.onMouseLeave();
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
            var _this4 = this;

            if (!this.eventListenerSubscriptions.mousemove) {
              this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove',
              /**
              * @param {?} mouseMoveEvent
              * @return {?}
              */
              function (mouseMoveEvent) {
                _this4.pointerMove$.next({
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
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onMouseUp",
          value: function onMouseUp(event) {
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
          /**
           * @private
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onTouchStart",
          value: function onTouchStart(event) {
            var _this5 = this;

            if (!this.scrollContainer) {
              try {
                event.preventDefault();
              } catch (e) {}
            }
            /** @type {?} */


            var hasContainerScrollbar;
            /** @type {?} */

            var startScrollPosition;
            /** @type {?} */

            var isDragActivated;

            if (this.scrollContainer && this.scrollContainer.activeLongPressDrag) {
              this.timeLongPress.timerBegin = Date.now();
              isDragActivated = false;
              hasContainerScrollbar = this.scrollContainer.hasScrollbar();
              startScrollPosition = this.getScrollPosition();
            }

            if (!this.eventListenerSubscriptions.touchmove) {
              this.eventListenerSubscriptions.touchmove = this.renderer.listen('document', 'touchmove',
              /**
              * @param {?} touchMoveEvent
              * @return {?}
              */
              function (touchMoveEvent) {
                if (_this5.scrollContainer && _this5.scrollContainer.activeLongPressDrag && !isDragActivated && hasContainerScrollbar) {
                  isDragActivated = _this5.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
                }

                if (!_this5.scrollContainer || !_this5.scrollContainer.activeLongPressDrag || !hasContainerScrollbar || isDragActivated) {
                  _this5.pointerMove$.next({
                    event: touchMoveEvent,
                    clientX: touchMoveEvent.targetTouches[0].clientX,
                    clientY: touchMoveEvent.targetTouches[0].clientY
                  });
                }
              });
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

              if (this.scrollContainer && this.scrollContainer.activeLongPressDrag) {
                this.scrollContainer.enableScroll();
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
            var _this6 = this;

            Object.keys(this.eventListenerSubscriptions).forEach(
            /**
            * @param {?} type
            * @return {?}
            */
            function (type) {
              /** @type {?} */
              _this6.eventListenerSubscriptions[type]();

              delete
              /** @type {?} */
              _this6.eventListenerSubscriptions[type];
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
            var _this7 = this;

            Object.keys(styles).forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              _this7.renderer.setStyle(element, key, styles[key]);
            });
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
                top: window.pageYOffset || document.documentElement.scrollTop,
                left: window.pageXOffset || document.documentElement.scrollLeft
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

            if (deltaTotal > this.scrollContainer.longPressConfig.delta || deltaScroll.top > 0 || deltaScroll.left > 0) {
              this.timeLongPress.timerBegin = Date.now();
            }

            this.timeLongPress.timerEnd = Date.now();
            /** @type {?} */

            var duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;

            if (duration >= this.scrollContainer.longPressConfig.duration) {
              this.scrollContainer.disableScroll();
              return true;
            }

            return false;
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
            var _this8 = this;

            this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(
            /**
            * @param {?} drag$
            * @return {?}
            */
            function (drag$) {
              _this8.renderer.addClass(_this8.element.nativeElement, _this8.dragActiveClass);
              /** @type {?} */


              var droppableElement = {
                updateCache: true
              };
              /** @type {?} */

              var deregisterScrollListener = _this8.renderer.listen(_this8.scrollContainer ? _this8.scrollContainer.elementRef.nativeElement : 'window', 'scroll',
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
              function (_ref11) {
                var clientX = _ref11.clientX,
                    clientY = _ref11.clientY,
                    dropData = _ref11.dropData;
                currentDragDropData = dropData;

                if (droppableElement.updateCache) {
                  droppableElement.rect = _this8.element.nativeElement.getBoundingClientRect();

                  if (_this8.scrollContainer) {
                    droppableElement.scrollContainerRect = _this8.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                  }

                  droppableElement.updateCache = false;
                }
                /** @type {?} */


                var isWithinElement = isCoordinateWithinRectangle(clientX, clientY,
                /** @type {?} */
                droppableElement.rect);

                if (droppableElement.scrollContainerRect) {
                  return isWithinElement && isCoordinateWithinRectangle(clientX, clientY,
                  /** @type {?} */
                  droppableElement.scrollContainerRect);
                } else {
                  return isWithinElement;
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

                _this8.renderer.addClass(_this8.element.nativeElement, _this8.dragOverClass);

                _this8.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this8.dragEnter.next({
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
                _this8.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this8.dragOver.next({
                    dropData: currentDragDropData
                  });
                });
              });
              overlapsChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref12) {
                var _ref13 = _slicedToArray(_ref12, 2),
                    didOverlap = _ref13[0],
                    overlapsNow = _ref13[1];

                return didOverlap && !overlapsNow;
              })).subscribe(
              /**
              * @return {?}
              */
              function () {
                dragOverActive = false;

                _this8.renderer.removeClass(_this8.element.nativeElement, _this8.dragOverClass);

                _this8.zone.run(
                /**
                * @return {?}
                */
                function () {
                  _this8.dragLeave.next({
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

                  _this8.renderer.removeClass(_this8.element.nativeElement, _this8.dragActiveClass);

                  if (dragOverActive) {
                    _this8.renderer.removeClass(_this8.element.nativeElement, _this8.dragOverClass);

                    _this8.zone.run(
                    /**
                    * @return {?}
                    */
                    function () {
                      _this8.drop.next({
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

      var DragAndDropModule = function DragAndDropModule() {
        _classCallCheck(this, DragAndDropModule);
      };

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
    "RX3l":
    /*!****************************************!*\
      !*** ./node_modules/is-array/index.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function RX3l(module, exports) {
      /**
       * isArray
       */
      var isArray = Array.isArray;
      /**
       * toString
       */

      var str = Object.prototype.toString;
      /**
       * Whether or not the given `val`
       * is an array.
       *
       * example:
       *
       *        isArray([]);
       *        // > true
       *        isArray(arguments);
       *        // > false
       *        isArray('');
       *        // > false
       *
       * @param {mixed} val
       * @return {bool}
       */

      module.exports = isArray || function (val) {
        return !!val && '[object Array]' == str.call(val);
      };
      /***/

    },

    /***/
    "VJNc":
    /*!*********************************************!*\
      !*** ./node_modules/dom-set/dist/bundle.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function VJNc(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, '__esModule', {
        value: true
      });

      function _interopDefault(ex) {
        return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
      }

      var arrayFrom = _interopDefault(__webpack_require__(
      /*! array-from */
      "uMIJ"));

      var isArray = _interopDefault(__webpack_require__(
      /*! is-array */
      "RX3l"));

      var isElement = _interopDefault(__webpack_require__(
      /*! iselement */
      "xijO"));

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

      function select(selector) {
        if (typeof selector === 'string') {
          try {
            return document.querySelector(selector);
          } catch (e) {
            throw e;
          }
        } else if (isElement(selector)) {
          return selector;
        }
      }

      function selectAll(selector) {
        if (typeof selector === 'string') {
          return Array.prototype.slice.apply(document.querySelectorAll(selector));
        } else if (isArray(selector)) {
          return selector.map(select);
        } else if ('length' in selector) {
          return arrayFrom(selector).map(select);
        }
      }

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

      function domListOf(arr) {
        if (!arr) {
          return [];
        }

        try {
          if (typeof arr === 'string') {
            return arrayFrom(document.querySelectorAll(arr));
          } else if (isArray(arr)) {
            return arr.map(resolveElement);
          } else {
            if (typeof arr.length === 'undefined') {
              return [resolveElement(arr)];
            }

            return arrayFrom(arr, resolveElement);
          }
        } catch (e) {
          throw new Error(e);
        }
      }

      function concatElementLists() {
        var lists = [],
            len = arguments.length;

        while (len--) {
          lists[len] = arguments[len];
        }

        return lists.reduce(function (last, list) {
          return list.length ? last : last.concat(domListOf(list));
        }, []);
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
        var toAdd = [],
            len = arguments.length - 1;

        while (len-- > 0) {
          toAdd[len] = arguments[len + 1];
        }

        toAdd = toAdd.map(resolveElement);
        return pushElements(elements, toAdd);
      }

      function removeElements(elements) {
        var toRemove = [],
            len = arguments.length - 1;

        while (len-- > 0) {
          toRemove[len] = arguments[len + 1];
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

      exports.indexOfElement = indexOfElement;
      exports.hasElement = hasElement;
      exports.domListOf = domListOf;
      exports.concatElementLists = concatElementLists;
      exports.addElements = addElements;
      exports.removeElements = removeElements;
      exports.resolveElement = resolveElement;
      exports.select = select;
      exports.selectAll = selectAll; //# sourceMappingURL=bundle.js.map

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
    "agoU":
    /*!*********************************************************************!*\
      !*** ./node_modules/calendar-utils/date-adapters/date-fns/index.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function agoU(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var date_fns_1 = __webpack_require__(
      /*! date-fns */
      "b/SL");

      function adapterFactory() {
        return {
          addDays: date_fns_1.addDays,
          addHours: date_fns_1.addHours,
          addMinutes: date_fns_1.addMinutes,
          addSeconds: date_fns_1.addSeconds,
          differenceInDays: date_fns_1.differenceInDays,
          differenceInMinutes: date_fns_1.differenceInMinutes,
          differenceInSeconds: date_fns_1.differenceInSeconds,
          endOfDay: date_fns_1.endOfDay,
          endOfMonth: date_fns_1.endOfMonth,
          endOfWeek: date_fns_1.endOfWeek,
          getDay: date_fns_1.getDay,
          getMonth: date_fns_1.getMonth,
          isSameDay: date_fns_1.isSameDay,
          isSameMonth: date_fns_1.isSameMonth,
          isSameSecond: date_fns_1.isSameSecond,
          max: date_fns_1.max,
          setHours: date_fns_1.setHours,
          setMinutes: date_fns_1.setMinutes,
          startOfDay: date_fns_1.startOfDay,
          startOfMinute: date_fns_1.startOfMinute,
          startOfMonth: date_fns_1.startOfMonth,
          startOfWeek: date_fns_1.startOfWeek,
          getHours: date_fns_1.getHours,
          getMinutes: date_fns_1.getMinutes
        };
      }

      exports.adapterFactory = adapterFactory; //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "c/fO":
    /*!***********************************************************************************!*\
      !*** ./node_modules/animation-frame-polyfill/lib/animation-frame-polyfill.cjs.js ***!
      \***********************************************************************************/

    /*! no static exports found */

    /***/
    function cFO(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = ['webkit', 'moz', 'ms', 'o'];

      var requestAnimationFrame = exports.requestAnimationFrame = function () {
        for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
          window.requestAnimationFrame = window[prefix[i] + 'RequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame) {
          (function () {
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
          })();
        }

        return window.requestAnimationFrame.bind(window);
      }();

      var cancelAnimationFrame = exports.cancelAnimationFrame = function () {
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
      "UWrc");
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

      var CalendarEventActionsComponent = function CalendarEventActionsComponent() {
        _classCallCheck(this, CalendarEventActionsComponent);

        this.trackByActionId = function (index, action) {
          return action.id ? action.id : action;
        };
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarEventActionsComponent.prototype, "event", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarEventActionsComponent.prototype, "customTemplate", void 0);
      CalendarEventActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-event-actions',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-trackByActionId=\"trackByActionId\"\n    >\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByActionId\"\n          (mwlClick)=\"action.onClick({ event: event, sourceEvent: $event })\"\n          (mwlKeydownEnter)=\"\n            action.onClick({ event: event, sourceEvent: $event })\n          \"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n          tabindex=\"0\"\n          role=\"button\"\n          [attr.aria-label]=\"\n            { action: action } | calendarA11y: 'actionButtonLabel'\n          \"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        trackByActionId: trackByActionId\n      }\"\n    >\n    </ng-template>\n  "
      })], CalendarEventActionsComponent);

      var CalendarEventTitleComponent = function CalendarEventTitleComponent() {
        _classCallCheck(this, CalendarEventTitleComponent);
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarEventTitleComponent.prototype, "event", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarEventTitleComponent.prototype, "view", void 0);
      CalendarEventTitleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-event-title',
        template: "\n    <ng-template #defaultTemplate let-event=\"event\" let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle: view:event\"\n        [attr.aria-hidden]=\"{} | calendarA11y: 'hideEventTitle'\"\n      >\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\"\n    >\n    </ng-template>\n  "
      })], CalendarEventTitleComponent);

      var CalendarTooltipWindowComponent = function CalendarTooltipWindowComponent() {
        _classCallCheck(this, CalendarTooltipWindowComponent);
      };

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
            var _this9 = this;

            var delay$ = this.delay === null ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('now') : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(this.delay);
            delay$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.cancelTooltipDelay$)).subscribe(function () {
              _this9.show();
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
            var _this10 = this;

            if (!this.tooltipRef && this.contents) {
              this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
              this.tooltipRef.instance.contents = this.contents;
              this.tooltipRef.instance.customTemplate = this.customTemplate;
              this.tooltipRef.instance.event = this.event;

              if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
              }

              requestAnimationFrame(function () {
                _this10.positionTooltip();
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

      var DateAdapter = function DateAdapter() {
        _classCallCheck(this, DateAdapter);
      };

      var CalendarView;

      (function (CalendarView) {
        CalendarView["Month"] = "month";
        CalendarView["Week"] = "week";
        CalendarView["Day"] = "day";
      })(CalendarView || (CalendarView = {}));

      var validateEvents = function validateEvents(events) {
        var warn = function warn() {
          var _console;

          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
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

      function isWithinThreshold(_ref14) {
        var x = _ref14.x,
            y = _ref14.y;
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
          value: function monthViewColumnHeader(_ref15) {
            var date = _ref15.date,
                locale = _ref15.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE', locale);
          }
          /**
           * The month view cell day number
           */

        }, {
          key: "monthViewDayNumber",
          value: function monthViewDayNumber(_ref16) {
            var date = _ref16.date,
                locale = _ref16.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'd', locale);
          }
          /**
           * The month view title
           */

        }, {
          key: "monthViewTitle",
          value: function monthViewTitle(_ref17) {
            var date = _ref17.date,
                locale = _ref17.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'LLLL y', locale);
          }
          /**
           * The week view header week day labels
           */

        }, {
          key: "weekViewColumnHeader",
          value: function weekViewColumnHeader(_ref18) {
            var date = _ref18.date,
                locale = _ref18.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE', locale);
          }
          /**
           * The week view sub header day and month labels
           */

        }, {
          key: "weekViewColumnSubHeader",
          value: function weekViewColumnSubHeader(_ref19) {
            var date = _ref19.date,
                locale = _ref19.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'MMM d', locale);
          }
          /**
           * The week view title
           */

        }, {
          key: "weekViewTitle",
          value: function weekViewTitle(_ref20) {
            var date = _ref20.date,
                locale = _ref20.locale,
                weekStartsOn = _ref20.weekStartsOn,
                excludeDays = _ref20.excludeDays,
                daysInWeek = _ref20.daysInWeek;

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
          value: function weekViewHour(_ref21) {
            var date = _ref21.date,
                locale = _ref21.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'h a', locale);
          }
          /**
           * The time formatting down the left hand side of the day view
           */

        }, {
          key: "dayViewHour",
          value: function dayViewHour(_ref22) {
            var date = _ref22.date,
                locale = _ref22.locale;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'h a', locale);
          }
          /**
           * The day view title
           */

        }, {
          key: "dayViewTitle",
          value: function dayViewTitle(_ref23) {
            var date = _ref23.date,
                locale = _ref23.locale;
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

        var _super = _createSuper(CalendarDateFormatter);

        function CalendarDateFormatter() {
          _classCallCheck(this, CalendarDateFormatter);

          return _super.apply(this, arguments);
        }

        return CalendarDateFormatter;
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

          /**
           * The month view event title.
           */
          value: function month(event, title) {
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
            var _this11 = this;

            if (!this.clickListenerDisabled) {
              this.listen().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (event) {
                event.stopPropagation();

                _this11.click.emit(event);
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
            var _this12 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
              return _this12.renderer.listen(_this12.elm.nativeElement, 'click', function (event) {
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
        function KeydownEnterDirective() {
          _classCallCheck(this, KeydownEnterDirective);

          this.keydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        }

        _createClass(KeydownEnterDirective, [{
          key: "onKeyPress",
          value: function onKeyPress(event) {
            if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
              event.preventDefault();
              event.stopPropagation();
              this.keydown.emit(event);
            }
          }
        }]);

        return KeydownEnterDirective;
      }();

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('mwlKeydownEnter'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], KeydownEnterDirective.prototype, "keydown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KeyboardEvent]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], KeydownEnterDirective.prototype, "onKeyPress", null);
      KeydownEnterDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[mwlKeydownEnter]'
      })], KeydownEnterDirective);

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
          value: function monthCell(_ref24) {
            var day = _ref24.day,
                locale = _ref24.locale;

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
          value: function openDayEventsLandmark(_ref25) {
            var date = _ref25.date,
                locale = _ref25.locale;
            return "\n      Beginning of expanded view for ".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE MMMM dd', locale), "\n    ");
          }
          /**
           * Aria label for alert that a day in the month view was expanded
           * @example: `Saturday October 19 expanded`
           */

        }, {
          key: "openDayEventsAlert",
          value: function openDayEventsAlert(_ref26) {
            var date = _ref26.date,
                locale = _ref26.locale;
            return "".concat(Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'EEEE MMMM dd', locale), " expanded");
          }
          /**
           * Descriptive aria label for an event
           * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
           */

        }, {
          key: "eventDescription",
          value: function eventDescription(_ref27) {
            var event = _ref27.event,
                locale = _ref27.locale;

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
          value: function allDayEventDescription(_ref28) {
            var event = _ref28.event,
                locale = _ref28.locale;
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
          value: function actionButtonLabel(_ref29) {
            var action = _ref29.action;
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
          value: function monthViewColumnHeader(_ref30) {
            var date = _ref30.date,
                locale = _ref30.locale;
            return this.moment(date).locale(locale).format('dddd');
          }
          /**
           * The month view cell day number
           */

        }, {
          key: "monthViewDayNumber",
          value: function monthViewDayNumber(_ref31) {
            var date = _ref31.date,
                locale = _ref31.locale;
            return this.moment(date).locale(locale).format('D');
          }
          /**
           * The month view title
           */

        }, {
          key: "monthViewTitle",
          value: function monthViewTitle(_ref32) {
            var date = _ref32.date,
                locale = _ref32.locale;
            return this.moment(date).locale(locale).format('MMMM YYYY');
          }
          /**
           * The week view header week day labels
           */

        }, {
          key: "weekViewColumnHeader",
          value: function weekViewColumnHeader(_ref33) {
            var date = _ref33.date,
                locale = _ref33.locale;
            return this.moment(date).locale(locale).format('dddd');
          }
          /**
           * The week view sub header day and month labels
           */

        }, {
          key: "weekViewColumnSubHeader",
          value: function weekViewColumnSubHeader(_ref34) {
            var date = _ref34.date,
                locale = _ref34.locale;
            return this.moment(date).locale(locale).format('MMM D');
          }
          /**
           * The week view title
           */

        }, {
          key: "weekViewTitle",
          value: function weekViewTitle(_ref35) {
            var _this13 = this;

            var date = _ref35.date,
                locale = _ref35.locale,
                weekStartsOn = _ref35.weekStartsOn,
                excludeDays = _ref35.excludeDays,
                daysInWeek = _ref35.daysInWeek;

            var _getWeekViewPeriod2 = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek),
                viewStart = _getWeekViewPeriod2.viewStart,
                viewEnd = _getWeekViewPeriod2.viewEnd;

            var format = function format(dateToFormat, showYear) {
              return _this13.moment(dateToFormat).locale(locale).format('MMM D' + (showYear ? ', YYYY' : ''));
            };

            return "".concat(format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()), " - ").concat(format(viewEnd, true));
          }
          /**
           * The time formatting down the left hand side of the week view
           */

        }, {
          key: "weekViewHour",
          value: function weekViewHour(_ref36) {
            var date = _ref36.date,
                locale = _ref36.locale;
            return this.moment(date).locale(locale).format('ha');
          }
          /**
           * The time formatting down the left hand side of the day view
           */

        }, {
          key: "dayViewHour",
          value: function dayViewHour(_ref37) {
            var date = _ref37.date,
                locale = _ref37.locale;
            return this.moment(date).locale(locale).format('ha');
          }
          /**
           * The day view title
           */

        }, {
          key: "dayViewTitle",
          value: function dayViewTitle(_ref38) {
            var date = _ref38.date,
                locale = _ref38.locale;
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
          value: function monthViewColumnHeader(_ref39) {
            var date = _ref39.date,
                locale = _ref39.locale;
            return new Intl.DateTimeFormat(locale, {
              weekday: 'long'
            }).format(date);
          }
          /**
           * The month view cell day number
           */

        }, {
          key: "monthViewDayNumber",
          value: function monthViewDayNumber(_ref40) {
            var date = _ref40.date,
                locale = _ref40.locale;
            return new Intl.DateTimeFormat(locale, {
              day: 'numeric'
            }).format(date);
          }
          /**
           * The month view title
           */

        }, {
          key: "monthViewTitle",
          value: function monthViewTitle(_ref41) {
            var date = _ref41.date,
                locale = _ref41.locale;
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
          value: function weekViewColumnHeader(_ref42) {
            var date = _ref42.date,
                locale = _ref42.locale;
            return new Intl.DateTimeFormat(locale, {
              weekday: 'long'
            }).format(date);
          }
          /**
           * The week view sub header day and month labels
           */

        }, {
          key: "weekViewColumnSubHeader",
          value: function weekViewColumnSubHeader(_ref43) {
            var date = _ref43.date,
                locale = _ref43.locale;
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
          value: function weekViewTitle(_ref44) {
            var date = _ref44.date,
                locale = _ref44.locale,
                weekStartsOn = _ref44.weekStartsOn,
                excludeDays = _ref44.excludeDays,
                daysInWeek = _ref44.daysInWeek;

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
          value: function weekViewHour(_ref45) {
            var date = _ref45.date,
                locale = _ref45.locale;
            return new Intl.DateTimeFormat(locale, {
              hour: 'numeric'
            }).format(date);
          }
          /**
           * The time formatting down the left hand side of the day view
           */

        }, {
          key: "dayViewHour",
          value: function dayViewHour(_ref46) {
            var date = _ref46.date,
                locale = _ref46.locale;
            return new Intl.DateTimeFormat(locale, {
              hour: 'numeric'
            }).format(date);
          }
          /**
           * The day view title
           */

        }, {
          key: "dayViewTitle",
          value: function dayViewTitle(_ref47) {
            var date = _ref47.date,
                locale = _ref47.locale;
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
          var _this14 = this;

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
            return _this14.view.days.slice(offset, _this14.view.totalDaysVisibleInWeek).map(function (day) {
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
            var _this15 = this;

            if (this.refresh) {
              this.refreshSubscription = this.refresh.subscribe(function () {
                _this15.refreshAll();

                _this15.cdr.markForCheck();
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
            var _this16 = this;

            if (this.activeDayIsOpen === true) {
              var activeDay = this.activeDay || this.viewDate;
              this.openDay = this.view.days.find(function (day) {
                return _this16.dateAdapter.isSameDay(day.date, activeDay);
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
        template: "\n    <div class=\"cal-month-view\" role=\"grid\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day, sourceEvent: $event })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (mwlKeydownEnter)=\"\n                dayClicked.emit({ day: day, sourceEvent: $event })\n              \"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: $event.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n              [attr.tabindex]=\"{} | calendarA11y: 'monthCellTabIndex'\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [locale]=\"locale\"\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [date]=\"openDay?.date\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"\n              eventClicked.emit({\n                event: $event.event,\n                sourceEvent: $event.sourceEvent\n              })\n            \"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], CalendarUtils, String, DateAdapter])], CalendarMonthViewComponent);

      var CalendarMonthViewHeaderComponent = function CalendarMonthViewHeaderComponent() {
        _classCallCheck(this, CalendarMonthViewHeaderComponent);

        this.columnHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], CalendarMonthViewHeaderComponent.prototype, "days", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CalendarMonthViewHeaderComponent.prototype, "columnHeaderClicked", void 0);
      CalendarMonthViewHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mwl-calendar-month-view-header',
        template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n    >\n      <div class=\"cal-cell-row cal-header\" role=\"row\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          (click)=\"\n            columnHeaderClicked.emit({\n              isoDayNumber: day.day,\n              sourceEvent: $event\n            })\n          \"\n          [ngClass]=\"day.cssClass\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          {{ day.date | calendarDate: 'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
      })], CalendarMonthViewHeaderComponent);

      var CalendarMonthCellComponent = function CalendarMonthCellComponent() {
        _classCallCheck(this, CalendarMonthCellComponent);

        this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
      };

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
        template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-cell-top\"\n        [attr.aria-label]=\"\n          { day: day, locale: locale } | calendarA11y: 'monthCell'\n        \"\n      >\n        <span aria-hidden=\"true\">\n          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{\n            day.badgeTotal\n          }}</span>\n          <span class=\"cal-day-number\">{{\n            day.date | calendarDate: 'monthViewDayNumber':locale\n          }}</span>\n        </span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy: trackByEventId\"\n          [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({ event: event })\"\n          (mouseleave)=\"unhighlightDay.emit({ event: event })\"\n          [mwlCalendarTooltip]=\"\n            event.title | calendarEventTitle: 'monthTooltip':event\n          \"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [tooltipDelay]=\"tooltipDelay\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event, draggedFrom: day }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n          (mwlClick)=\"eventClicked.emit({ event: event, sourceEvent: $event })\"\n          [attr.aria-hidden]=\"{} | calendarA11y: 'hideMonthCellEvents'\"\n        ></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDelay: tooltipDelay,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
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

      var CalendarOpenDayEventsComponent = function CalendarOpenDayEventsComponent() {
        _classCallCheck(this, CalendarOpenDayEventsComponent);

        this.isOpen = false;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
      };

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
        template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n      let-trackByEventId=\"trackByEventId\"\n      let-validateDrag=\"validateDrag\"\n    >\n      <div\n        class=\"cal-open-day-events\"\n        [@collapse]\n        *ngIf=\"isOpen\"\n        role=\"application\"\n      >\n        <span\n          tabindex=\"-1\"\n          role=\"alert\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'\n          \"\n        ></span>\n        <span\n          tabindex=\"0\"\n          role=\"landmark\"\n          [attr.aria-label]=\"\n            { date: date, locale: locale }\n              | calendarA11y: 'openDayEventsLandmark'\n          \"\n        ></span>\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n          [validateDrag]=\"validateDrag\"\n        >\n          <span\n            class=\"cal-event\"\n            [ngStyle]=\"{ backgroundColor: event.color?.primary }\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            (mwlKeydownEnter)=\"\n              eventClicked.emit({ event: event, sourceEvent: $event })\n            \"\n            tabindex=\"0\"\n            [attr.aria-label]=\"\n              { event: event, locale: locale }\n                | calendarA11y: 'eventDescription'\n            \"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen,\n        trackByEventId: trackByEventId,\n        validateDrag: validateDrag\n      }\"\n    >\n    </ng-template>\n  ",
        animations: [collapseAnimation]
      })], CalendarOpenDayEventsComponent);

      var CalendarMonthModule = function CalendarMonthModule() {
        _classCallCheck(this, CalendarMonthModule);
      };

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
          value: function validateDrag(_ref48) {
            var x = _ref48.x,
                y = _ref48.y,
                snapDraggedEvents = _ref48.snapDraggedEvents,
                dragAlreadyMoved = _ref48.dragAlreadyMoved,
                transform = _ref48.transform;

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
          value: function validateResize(_ref49) {
            var rectangle = _ref49.rectangle;

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
           * The number of segments in an hour. Must be <= 6
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
            var _this17 = this;

            if (this.refresh) {
              this.refreshSubscription = this.refresh.subscribe(function () {
                _this17.refreshAll();

                _this17.cdr.markForCheck();
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
        }, {
          key: "resizeStarted",
          value: function resizeStarted(eventsContainer, minWidth) {
            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);

            this.validateResize = function (_ref50) {
              var rectangle = _ref50.rectangle;
              return resizeHelper.validateResize({
                rectangle: rectangle
              });
            };

            this.cdr.markForCheck();
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
            var _this18 = this;

            this.timeEventResizes.set(timeEvent.event, resizeEvent);
            var adjustedEvents = new Map();

            var tempEvents = _toConsumableArray(this.events);

            this.timeEventResizes.forEach(function (lastResizeEvent, event) {
              var newEventDates = _this18.getTimeEventResizedDates(event, lastResizeEvent);

              var adjustedEvent = Object.assign({}, event, newEventDates);
              adjustedEvents.set(adjustedEvent, event);
              var eventIndex = tempEvents.indexOf(event);
              tempEvents[eventIndex] = adjustedEvent;
            });
            this.restoreOriginalEvents(tempEvents, adjustedEvents);
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
            if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId) && this.lastDragEnterDate.getTime() === date.getTime()) {
              this.eventTimesChanged.emit({
                type: CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
              });
            }
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
            var _this19 = this;

            this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
            var dragHelper = new CalendarDragHelper(eventsContainer, event);

            this.validateDrag = function (_ref51) {
              var x = _ref51.x,
                  y = _ref51.y,
                  transform = _ref51.transform;
              return _this19.allDayEventResizes.size === 0 && _this19.timeEventResizes.size === 0 && dragHelper.validateDrag({
                x: x,
                y: y,
                snapDraggedEvents: _this19.snapDraggedEvents,
                dragAlreadyMoved: _this19.dragAlreadyMoved,
                transform: transform
              });
            };

            this.dragActive = true;
            this.dragAlreadyMoved = false;
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
            if (this.snapDraggedEvents) {
              var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
              var originalEvent = dayEvent.event;
              var adjustedEvent = Object.assign({}, originalEvent, newEventTimes);
              var tempEvents = this.events.map(function (event) {
                if (event === originalEvent) {
                  return adjustedEvent;
                }

                return event;
              });
              this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent, originalEvent]]));
            }

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

            var _this$getDragMovedEve = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY),
                start = _this$getDragMovedEve.start,
                end = _this$getDragMovedEve.end;

            if (this.eventDragEnterByType[useY ? 'time' : 'allDay'] > 0 && isDraggedWithinPeriod(start, end, this.view.period)) {
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
            var previousView = this.view;
            this.view = this.getWeekView(tempEvents);
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
                  return columnEvent.event === adjustedEvent;
                });

                if (existingColumnEvent) {
                  // restore the original event so trackBy kicks in and the dom isn't changed
                  existingColumnEvent.event = originalEvent;
                } else {
                  // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                  column.events.push({
                    event: originalEvent,
                    left: 0,
                    top: 0,
                    height: 0,
                    width: 0,
                    startsBeforeDay: false,
                    endsAfterDay: false
                  });
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
        template: "\n    <div class=\"cal-week-view\" role=\"grid\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"\n          eventDropped({ dropData: $event }, $event.newStart, true)\n        \"\n        (dragEnter)=\"dateDragEnter($event.date)\"\n      >\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('allDay')\"\n        (dragLeave)=\"dragLeave('allDay')\"\n      >\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\"\n          ></div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\"\n            (dragEnter)=\"dateDragEnter(day.date)\"\n          ></div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy: trackById\"\n          #eventRowContainer\n          class=\"cal-events-row\"\n        >\n          <div\n            *ngFor=\"\n              let allDayEvent of eventRow.row;\n              trackBy: trackByWeekAllDayEvent\n            \"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"\n              allDayEvent.event.draggable && allDayEventResizes.size === 0\n            \"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{ left: dayColumnWidth, right: dayColumnWidth }\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"\n              allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\n            \"\n            (resizing)=\"\n              allDayEventResizing(allDayEvent, $event, dayColumnWidth)\n            \"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{ event: allDayEvent.event, calendarId: calendarId }\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y:\n                !snapDraggedEvents &&\n                allDayEvent.event.draggable &&\n                allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? { x: dayColumnWidth } : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragStart)=\"dragStarted(eventRowContainer, event)\"\n            (dragging)=\"allDayEventDragMove()\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\"\n          >\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.beforeStart &&\n                !allDayEvent.startsBeforeWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\"\n            ></div>\n            <mwl-calendar-week-view-event\n              [locale]=\"locale\"\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              [daysInWeek]=\"daysInWeek\"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: allDayEvent.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n            >\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"\n                allDayEvent.event?.resizable?.afterEnd &&\n                !allDayEvent.endsAfterWeek\n              \"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\"\n            ></div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"dragEnter('time')\"\n        (dragLeave)=\"dragLeave('time')\"\n      >\n        <div\n          class=\"cal-time-label-column\"\n          *ngIf=\"view.hourColumns.length > 0 && daysInWeek !== 1\"\n        >\n          <div\n            *ngFor=\"\n              let hour of view.hourColumns[0].hours;\n              trackBy: trackByHour;\n              let odd = odd\n            \"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\"\n          >\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy: trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\"\n              [daysInWeek]=\"daysInWeek\"\n            >\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns\n        >\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy: trackByHourColumn\"\n          >\n            <mwl-calendar-week-view-current-time-marker\n              [columnDate]=\"column.date\"\n              [dayStartHour]=\"dayStartHour\"\n              [dayStartMinute]=\"dayStartMinute\"\n              [dayEndHour]=\"dayEndHour\"\n              [dayEndMinute]=\"dayEndMinute\"\n              [hourSegments]=\"hourSegments\"\n              [hourSegmentHeight]=\"hourSegmentHeight\"\n              [customTemplate]=\"currentTimeMarkerTemplate\"\n            ></mwl-calendar-week-view-current-time-marker>\n            <div class=\"cal-events-container\">\n              <div\n                *ngFor=\"\n                  let timeEvent of column.events;\n                  trackBy: trackByWeekTimeEvent\n                \"\n                #event\n                class=\"cal-event-container\"\n                [class.cal-draggable]=\"\n                  timeEvent.event.draggable && timeEventResizes.size === 0\n                \"\n                [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n                [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n                [ngClass]=\"timeEvent.event.cssClass\"\n                [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n                [style.top.px]=\"timeEvent.top\"\n                [style.height.px]=\"timeEvent.height\"\n                [style.left.%]=\"timeEvent.left\"\n                [style.width.%]=\"timeEvent.width\"\n                mwlResizable\n                [resizeSnapGrid]=\"{\n                  left: dayColumnWidth,\n                  right: dayColumnWidth,\n                  top: eventSnapSize || hourSegmentHeight,\n                  bottom: eventSnapSize || hourSegmentHeight\n                }\"\n                [validateResize]=\"validateResize\"\n                [allowNegativeResizes]=\"true\"\n                (resizeStart)=\"\n                  timeEventResizeStarted(dayColumns, timeEvent, $event)\n                \"\n                (resizing)=\"timeEventResizing(timeEvent, $event)\"\n                (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n                mwlDraggable\n                dragActiveClass=\"cal-drag-active\"\n                [dropData]=\"{ event: timeEvent.event, calendarId: calendarId }\"\n                [dragAxis]=\"{\n                  x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                  y: timeEvent.event.draggable && timeEventResizes.size === 0\n                }\"\n                [dragSnapGrid]=\"\n                  snapDraggedEvents\n                    ? {\n                        x: dayColumnWidth,\n                        y: eventSnapSize || hourSegmentHeight\n                      }\n                    : {}\n                \"\n                [ghostDragEnabled]=\"!snapDraggedEvents\"\n                [validateDrag]=\"validateDrag\"\n                (dragStart)=\"dragStarted(dayColumns, event, timeEvent)\"\n                (dragging)=\"dragMove(timeEvent, $event)\"\n                (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\"\n              >\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-before-start\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.beforeStart &&\n                    !timeEvent.startsBeforeDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    left: true,\n                    top: true\n                  }\"\n                ></div>\n                <mwl-calendar-week-view-event\n                  [locale]=\"locale\"\n                  [weekEvent]=\"timeEvent\"\n                  [tooltipPlacement]=\"tooltipPlacement\"\n                  [tooltipTemplate]=\"tooltipTemplate\"\n                  [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                  [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                  [tooltipDelay]=\"tooltipDelay\"\n                  [customTemplate]=\"eventTemplate\"\n                  [eventTitleTemplate]=\"eventTitleTemplate\"\n                  [eventActionsTemplate]=\"eventActionsTemplate\"\n                  [column]=\"column\"\n                  [daysInWeek]=\"daysInWeek\"\n                  (eventClicked)=\"\n                    eventClicked.emit({\n                      event: timeEvent.event,\n                      sourceEvent: $event.sourceEvent\n                    })\n                  \"\n                >\n                </mwl-calendar-week-view-event>\n                <div\n                  class=\"cal-resize-handle cal-resize-handle-after-end\"\n                  *ngIf=\"\n                    timeEvent.event?.resizable?.afterEnd &&\n                    !timeEvent.endsAfterDay\n                  \"\n                  mwlResizeHandle\n                  [resizeEdges]=\"{\n                    right: true,\n                    bottom: true\n                  }\"\n                ></div>\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"\n                let hour of column.hours;\n                trackBy: trackByHour;\n                let odd = odd\n              \"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\"\n            >\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"\n                  let segment of hour.segments;\n                  trackBy: trackByHourSegment\n                \"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                [daysInWeek]=\"daysInWeek\"\n                (mwlClick)=\"\n                  hourSegmentClicked.emit({\n                    date: segment.date,\n                    sourceEvent: $event\n                  })\n                \"\n                [clickListenerDisabled]=\"\n                  hourSegmentClicked.observers.length === 0\n                \"\n                mwlDroppable\n                [dragOverClass]=\"\n                  !dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\n                \"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\"\n                (dragEnter)=\"dateDragEnter(segment.date)\"\n                [isTimeLabel]=\"daysInWeek === 1\"\n              >\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], CalendarUtils, String, DateAdapter])], CalendarWeekViewComponent);

      var CalendarWeekViewHeaderComponent = function CalendarWeekViewHeaderComponent() {
        _classCallCheck(this, CalendarWeekViewHeaderComponent);

        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
      };

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

      var CalendarWeekViewEventComponent = function CalendarWeekViewEventComponent() {
        _classCallCheck(this, CalendarWeekViewEventComponent);

        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      };

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
        template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\"\n      let-tooltipDelay=\"tooltipDelay\"\n      let-column=\"column\"\n      let-daysInWeek=\"daysInWeek\"\n    >\n      <div\n        class=\"cal-event\"\n        [ngStyle]=\"{\n          backgroundColor: weekEvent.event.color?.secondary,\n          borderColor: weekEvent.event.color?.primary\n        }\"\n        [mwlCalendarTooltip]=\"\n          !tooltipDisabled\n            ? (weekEvent.event.title\n              | calendarEventTitle\n                : (daysInWeek === 1 ? 'dayTooltip' : 'weekTooltip')\n                : weekEvent.event)\n            : ''\n        \"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        [tooltipDelay]=\"tooltipDelay\"\n        (mwlClick)=\"eventClicked.emit({ sourceEvent: $event })\"\n        (mwlKeydownEnter)=\"eventClicked.emit({ sourceEvent: $event })\"\n        tabindex=\"0\"\n        role=\"application\"\n        [attr.aria-label]=\"\n          { event: weekEvent.event, locale: locale }\n            | calendarA11y: 'eventDescription'\n        \"\n      >\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\"\n        >\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          [view]=\"daysInWeek === 1 ? 'day' : 'week'\"\n        >\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled,\n        tooltipDelay: tooltipDelay,\n        column: column,\n        daysInWeek: daysInWeek\n      }\"\n    >\n    </ng-template>\n  "
      })], CalendarWeekViewEventComponent);

      var CalendarWeekViewHourSegmentComponent = function CalendarWeekViewHourSegmentComponent() {
        _classCallCheck(this, CalendarWeekViewHourSegmentComponent);
      };

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
        function CalendarWeekViewCurrentTimeMarkerComponent(dateAdapter) {
          var _this20 = this;

          _classCallCheck(this, CalendarWeekViewCurrentTimeMarkerComponent);

          this.dateAdapter = dateAdapter;
          this.columnDate$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.columnDate);
          this.marker$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(60 * 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMapTo"])(this.columnDate$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (columnDate) {
            var startOfDay = _this20.dateAdapter.setMinutes(_this20.dateAdapter.setHours(columnDate, _this20.dayStartHour), _this20.dayStartMinute);

            var endOfDay = _this20.dateAdapter.setMinutes(_this20.dateAdapter.setHours(columnDate, _this20.dayEndHour), _this20.dayEndMinute);

            var hourHeightModifier = _this20.hourSegments * _this20.hourSegmentHeight / 60;
            var now = new Date();
            return {
              isVisible: _this20.dateAdapter.isSameDay(columnDate, now) && now >= startOfDay && now <= endOfDay,
              top: _this20.dateAdapter.differenceInMinutes(now, startOfDay) * hourHeightModifier
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
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DateAdapter])], CalendarWeekViewCurrentTimeMarkerComponent);

      var CalendarWeekModule = function CalendarWeekModule() {
        _classCallCheck(this, CalendarWeekModule);
      };

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

      var CalendarDayViewComponent =
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
      function CalendarDayViewComponent() {
        _classCallCheck(this, CalendarDayViewComponent);

        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
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
      };

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

      var CalendarDayModule = function CalendarDayModule() {
        _classCallCheck(this, CalendarDayModule);
      };

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
    "lipz":
    /*!*********************************************!*\
      !*** ./node_modules/array-from/polyfill.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function lipz(module, exports) {
      // Production steps of ECMA-262, Edition 6, 22.1.2.1
      // Reference: http://www.ecma-international.org/ecma-262/6.0/#sec-array.from
      module.exports = function () {
        var isCallable = function isCallable(fn) {
          return typeof fn === 'function';
        };

        var toInteger = function toInteger(value) {
          var number = Number(value);

          if (isNaN(number)) {
            return 0;
          }

          if (number === 0 || !isFinite(number)) {
            return number;
          }

          return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };

        var maxSafeInteger = Math.pow(2, 53) - 1;

        var toLength = function toLength(value) {
          var len = toInteger(value);
          return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        var iteratorProp = function iteratorProp(value) {
          if (value != null) {
            if (['string', 'number', 'boolean', 'symbol'].indexOf(typeof value) > -1) {
              return Symbol.iterator;
            } else if (typeof Symbol !== 'undefined' && 'iterator' in Symbol && Symbol.iterator in value) {
              return Symbol.iterator;
            } // Support "@@iterator" placeholder, Gecko 27 to Gecko 35
            else if ('@@iterator' in value) {
                return '@@iterator';
              }
          }
        };

        var getMethod = function getMethod(O, P) {
          // Assert: IsPropertyKey(P) is true.
          if (O != null && P != null) {
            // Let func be GetV(O, P).
            var func = O[P]; // ReturnIfAbrupt(func).
            // If func is either undefined or null, return undefined.

            if (func == null) {
              return void 0;
            } // If IsCallable(func) is false, throw a TypeError exception.


            if (!isCallable(func)) {
              throw new TypeError(func + ' is not a function');
            }

            return func;
          }
        };

        var iteratorStep = function iteratorStep(iterator) {
          // Let result be IteratorNext(iterator).
          // ReturnIfAbrupt(result).
          var result = iterator.next(); // Let done be IteratorComplete(result).
          // ReturnIfAbrupt(done).

          var done = Boolean(result.done); // If done is true, return false.

          if (done) {
            return false;
          } // Return result.


          return result;
        }; // The length property of the from method is 1.


        return function from(items
        /*, mapFn, thisArg */
        ) {
          'use strict'; // 1. Let C be the this value.

          var C = this; // 2. If mapfn is undefined, let mapping be false.

          var mapFn = arguments.length > 1 ? arguments[1] : void 0;
          var T;

          if (typeof mapFn !== 'undefined') {
            // 3. else
            //   a. If IsCallable(mapfn) is false, throw a TypeError exception.
            if (!isCallable(mapFn)) {
              throw new TypeError('Array.from: when provided, the second argument must be a function');
            } //   b. If thisArg was supplied, let T be thisArg; else let T
            //      be undefined.


            if (arguments.length > 2) {
              T = arguments[2];
            } //   c. Let mapping be true (implied by mapFn)

          }

          var A, k; // 4. Let usingIterator be GetMethod(items, @@iterator).
          // 5. ReturnIfAbrupt(usingIterator).

          var usingIterator = getMethod(items, iteratorProp(items)); // 6. If usingIterator is not undefined, then

          if (usingIterator !== void 0) {
            // a. If IsConstructor(C) is true, then
            //   i. Let A be the result of calling the [[Construct]]
            //      internal method of C with an empty argument list.
            // b. Else,
            //   i. Let A be the result of the abstract operation ArrayCreate
            //      with argument 0.
            // c. ReturnIfAbrupt(A).
            A = isCallable(C) ? Object(new C()) : []; // d. Let iterator be GetIterator(items, usingIterator).

            var iterator = usingIterator.call(items); // e. ReturnIfAbrupt(iterator).

            if (iterator == null) {
              throw new TypeError('Array.from requires an array-like or iterable object');
            } // f. Let k be 0.


            k = 0; // g. Repeat

            var next, nextValue;

            while (true) {
              // i. Let Pk be ToString(k).
              // ii. Let next be IteratorStep(iterator).
              // iii. ReturnIfAbrupt(next).
              next = iteratorStep(iterator); // iv. If next is false, then

              if (!next) {
                // 1. Let setStatus be Set(A, "length", k, true).
                // 2. ReturnIfAbrupt(setStatus).
                A.length = k; // 3. Return A.

                return A;
              } // v. Let nextValue be IteratorValue(next).
              // vi. ReturnIfAbrupt(nextValue)


              nextValue = next.value; // vii. If mapping is true, then
              //   1. Let mappedValue be Call(mapfn, T, «nextValue, k»).
              //   2. If mappedValue is an abrupt completion, return
              //      IteratorClose(iterator, mappedValue).
              //   3. Let mappedValue be mappedValue.[[value]].
              // viii. Else, let mappedValue be nextValue.
              // ix.  Let defineStatus be the result of
              //      CreateDataPropertyOrThrow(A, Pk, mappedValue).
              // x. [TODO] If defineStatus is an abrupt completion, return
              //    IteratorClose(iterator, defineStatus).

              if (mapFn) {
                A[k] = mapFn.call(T, nextValue, k);
              } else {
                A[k] = nextValue;
              } // xi. Increase k by 1.


              k++;
            } // 7. Assert: items is not an Iterable so assume it is
            //    an array-like object.

          } else {
            // 8. Let arrayLike be ToObject(items).
            var arrayLike = Object(items); // 9. ReturnIfAbrupt(items).

            if (items == null) {
              throw new TypeError('Array.from requires an array-like object - not null or undefined');
            } // 10. Let len be ToLength(Get(arrayLike, "length")).
            // 11. ReturnIfAbrupt(len).


            var len = toLength(arrayLike.length); // 12. If IsConstructor(C) is true, then
            //     a. Let A be Construct(C, «len»).
            // 13. Else
            //     a. Let A be ArrayCreate(len).
            // 14. ReturnIfAbrupt(A).

            A = isCallable(C) ? Object(new C(len)) : new Array(len); // 15. Let k be 0.

            k = 0; // 16. Repeat, while k < len… (also steps a - h)

            var kValue;

            while (k < len) {
              kValue = arrayLike[k];

              if (mapFn) {
                A[k] = mapFn.call(T, kValue, k);
              } else {
                A[k] = kValue;
              }

              k++;
            } // 17. Let setStatus be Set(A, "length", len, true).
            // 18. ReturnIfAbrupt(setStatus).


            A.length = len; // 19. Return A.
          }

          return A;
        };
      }();
      /***/

    },

    /***/
    "nFnn":
    /*!************************************************************************!*\
      !*** ./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js ***!
      \************************************************************************/

    /*! exports provided: FlatpickrDefaults, USER_DEFAULTS, defaultsFactory, FlatpickrModule, ɵa, ɵb */

    /***/
    function nFnn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlatpickrDefaults", function () {
        return FlatpickrDefaults;
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
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return FlatpickrDirective;
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
      "zwY0");
      /* harmony import */


      var flatpickr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_2__);
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes} checked by tsc
       */


      var FlatpickrDefaults = function FlatpickrDefaults() {
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
         * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-specific-dates">disabling dates</a>.
         */

        this.disable = [];
        /**
         * Set disableMobile to true to always use the non-native picker.
         * By default, Flatpickr utilizes native datetime widgets unless certain options (e.g. disable) are used.
         */

        this.disableMobile = false;
        /**
         * See <a href="https://chmln.github.io/flatpickr/examples/#disabling-all-dates-except-select-few">enabling dates</a>.
         */

        this.enable = [];
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
      };

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
            var _this21 = this;

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
              "static": this["static"],
              time24hr: this.time24hr,
              weekNumbers: this.weekNumbers,
              getWeek: this.getWeek,
              wrap: this.wrap,
              plugins: this.plugins,
              locale: this.locale,
              onChange: function onChange(selectedDates, dateString, instance) {
                _this21.flatpickrChange.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onOpen: function onOpen(selectedDates, dateString, instance) {
                _this21.flatpickrOpen.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onClose: function onClose(selectedDates, dateString, instance) {
                _this21.flatpickrClose.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onMonthChange: function onMonthChange(selectedDates, dateString, instance) {
                _this21.flatpickrMonthChange.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onYearChange: function onYearChange(selectedDates, dateString, instance) {
                _this21.flatpickrYearChange.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onReady: function onReady(selectedDates, dateString, instance) {
                _this21.flatpickrReady.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onValueUpdate: function onValueUpdate(selectedDates, dateString, instance) {
                _this21.flatpickrValueUpdate.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance
                });
              },
              onDayCreate: function onDayCreate(selectedDates, dateString, instance, dayElement) {
                _this21.flatpickrDayCreate.emit({
                  selectedDates: selectedDates,
                  dateString: dateString,
                  instance: instance,
                  dayElement: dayElement
                });
              }
            };
            Object.keys(options).forEach(function (key) {
              if (typeof options[key] === 'undefined') {
                options[key] =
                /** @type {?} */
                _this21.defaults[key];
              }
            });
            options.time_24hr = options.time24hr;
            this.instance =
            /** @type {?} */
            flatpickr__WEBPACK_IMPORTED_MODULE_2___default()(this.elm.nativeElement, options);
            this.setDisabledState(this.isDisabled);
          }
          /**
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this22 = this;

            if (this.instance) {
              Object.keys(changes).forEach(function (inputKey) {
                _this22.instance.set(
                /** @type {?} */
                inputKey,
                /** @type {?} */
                _this22[inputKey]);
              });
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.instance.destroy();
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
            var _this23 = this;

            var
            /** @type {?} */
            value = this.elm.nativeElement.value;

            if (this.convertModelValue && typeof value === 'string') {
              switch (this.mode) {
                case 'multiple':
                  var
                  /** @type {?} */
                  dates = value.split('; ').map(function (str) {
                    return _this23.instance.parseDate(str, _this23.instance.config.dateFormat, !_this23.instance.config.enableTime);
                  });
                  this.onChangeFn(dates);
                  break;

                case 'range':
                  var _value$split$map = value.split(this.instance.l10n.rangeSeparator).map(function (str) {
                    return _this23.instance.parseDate(str, _this23.instance.config.dateFormat, !_this23.instance.config.enableTime);
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
          }
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

          /**
           * @param {?=} userDefaults
           * @return {?}
           */
          value: function forRoot() {
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
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcngtZmxhdHBpY2tyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyeC1mbGF0cGlja3IvZmxhdHBpY2tyLWRlZmF1bHRzLnNlcnZpY2UudHMiLCJuZzovL2FuZ3VsYXJ4LWZsYXRwaWNrci9mbGF0cGlja3IuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyeC1mbGF0cGlja3IvZmxhdHBpY2tyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIERpc2FibGVFbmFibGVEYXRlID1cbiAgfCBzdHJpbmdcbiAgfCBEYXRlXG4gIHwgeyBmcm9tOiBEYXRlIHwgc3RyaW5nOyB0bzogRGF0ZSB8IHN0cmluZyB9XG4gIHwgKChkYXRlOiBEYXRlKSA9PiBib29sZWFuKTtcblxuLy8gdHNsaW50OmRpc2FibGUgbm8taW5mZXJyYWJsZS10eXBlc1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsYXRwaWNrckRlZmF1bHRzSW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIEV4YWN0bHkgdGhlIHNhbWUgYXMgZGF0ZSBmb3JtYXQsIGJ1dCBmb3IgdGhlIGFsdElucHV0IGZpZWxkLlxuICAgKi9cbiAgYWx0Rm9ybWF0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBcdFNob3cgdGhlIHVzZXIgYSByZWFkYWJsZSBkYXRlIChhcyBwZXIgYWx0Rm9ybWF0KSwgYnV0IHJldHVybiBzb21ldGhpbmcgdG90YWxseSBkaWZmZXJlbnQgdG8gdGhlIHNlcnZlci5cbiAgICovXG4gIGFsdElucHV0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhpcyBjbGFzcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBpbnB1dCBlbGVtZW50IGNyZWF0ZWQgYnkgdGhlIGFsdElucHV0IG9wdGlvbi5cbiAgICogTm90ZSB0aGF0IGBhbHRJbnB1dGAgYWxyZWFkeSBpbmhlcml0cyBjbGFzc2VzIGZyb20gdGhlIG9yaWdpbmFsIGlucHV0LlxuICAgKi9cbiAgYWx0SW5wdXRDbGFzcz86IHN0cmluZztcblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGVudGVyIGEgZGF0ZSBkaXJlY3RseSBpbnB1dCB0aGUgaW5wdXQgZmllbGQuIEJ5IGRlZmF1bHQsIGRpcmVjdCBlbnRyeSBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGFsbG93SW5wdXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbnN0ZWFkIG9mIGBib2R5YCwgYXBwZW5kcyB0aGUgY2FsZW5kYXIgdG8gdGhlIHNwZWNpZmllZCBub2RlIGluc3RlYWQuXG4gICAqL1xuICBhcHBlbmRUbz86IEhUTUxFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGhvdyB0aGUgZGF0ZSB3aWxsIGJlIGZvcm1hdHRlZCBpbiB0aGUgYXJpYS1sYWJlbCBmb3IgY2FsZW5kYXIgZGF5cywgdXNpbmcgdGhlIHNhbWUgdG9rZW5zIGFzIGRhdGVGb3JtYXQuIElmIHlvdSBjaGFuZ2UgdGhpcywgeW91IHNob3VsZCBjaG9vc2UgYSB2YWx1ZSB0aGF0IHdpbGwgbWFrZSBzZW5zZSBpZiBhIHNjcmVlbiByZWFkZXIgcmVhZHMgaXQgb3V0IGxvdWQuXG4gICAqL1xuICBhcmlhRGF0ZUZvcm1hdD86IHN0cmluZztcblxuICAvKipcbiAgICogV2hldGhlciBjbGlja2luZyBvbiB0aGUgaW5wdXQgc2hvdWxkIG9wZW4gdGhlIHBpY2tlci5cbiAgICogWW91IGNvdWxkIGRpc2FibGUgdGhpcyBpZiB5b3Ugd2lzaCB0byBvcGVuIHRoZSBjYWxlbmRhciBtYW51YWxseSBgd2l0aC5vcGVuKClgLlxuICAgKi9cbiAgY2xpY2tPcGVucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgd2hpY2ggYXJlIHVzZWQgdG8gZGVmaW5lIGhvdyB0aGUgZGF0ZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYm94LlxuICAgKiBUaGUgc3VwcG9ydGVkIGNoYXJhY3RlcnMgYXJlIGRlZmluZWQgaW4gdGhlIHRhYmxlIGJlbG93LlxuICAgKi9cbiAgZGF0ZUZvcm1hdD86IHN0cmluZztcbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIGhvdXIgZWxlbWVudC5cbiAgICovXG4gIGRlZmF1bHRIb3VyPzogbnVtYmVyO1xuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiB0aGUgbWludXRlIGVsZW1lbnQuXG4gICAqL1xuICBkZWZhdWx0TWludXRlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZWUgPGEgaHJlZj1cImh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci9leGFtcGxlcy8jZGlzYWJsaW5nLXNwZWNpZmljLWRhdGVzXCI+ZGlzYWJsaW5nIGRhdGVzPC9hPi5cbiAgICovXG4gIGRpc2FibGU/OiBEaXNhYmxlRW5hYmxlRGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBTZXQgZGlzYWJsZU1vYmlsZSB0byB0cnVlIHRvIGFsd2F5cyB1c2UgdGhlIG5vbi1uYXRpdmUgcGlja2VyLlxuICAgKiBCeSBkZWZhdWx0LCBGbGF0cGlja3IgdXRpbGl6ZXMgbmF0aXZlIGRhdGV0aW1lIHdpZGdldHMgdW5sZXNzIGNlcnRhaW4gb3B0aW9ucyAoZS5nLiBkaXNhYmxlKSBhcmUgdXNlZC5cbiAgICovXG4gIGRpc2FibGVNb2JpbGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZWUgPGEgaHJlZj1cImh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci9leGFtcGxlcy8jZGlzYWJsaW5nLWFsbC1kYXRlcy1leGNlcHQtc2VsZWN0LWZld1wiPmVuYWJsaW5nIGRhdGVzPC9hPi5cbiAgICovXG4gIGVuYWJsZT86IERpc2FibGVFbmFibGVEYXRlW107XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgdGltZSBwaWNrZXIuXG4gICAqL1xuICBlbmFibGVUaW1lPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW5hYmxlcyBzZWNvbmRzIGluIHRoZSB0aW1lIHBpY2tlci5cbiAgICovXG4gIGVuYWJsZVNlY29uZHM/OiBib29sZWFuO1xuICAvKipcbiAgICogQWxsb3dzIHVzaW5nIGEgY3VzdG9tIGRhdGUgZm9ybWF0dGluZyBmdW5jdGlvbiBpbnN0ZWFkIG9mIHRoZSBidWlsdC1pbiBoYW5kbGluZyBmb3IgZGF0ZSBmb3JtYXRzIHVzaW5nIGRhdGVGb3JtYXQsIGFsdEZvcm1hdCwgZXRjLlxuICAgKi9cbiAgZm9ybWF0RGF0ZT86ICh2YWx1ZTogYW55KSA9PiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzdGVwIGZvciB0aGUgaG91ciBpbnB1dCAoaW5jbC4gc2Nyb2xsaW5nKS5cbiAgICovXG4gIGhvdXJJbmNyZW1lbnQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSBjYWxlbmRhciBpbmxpbmUuXG4gICAqL1xuICBpbmxpbmU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBkYXRlIHRoYXQgYSB1c2VyIGNhbiBwaWNrIHRvIChpbmNsdXNpdmUpLlxuICAgKi9cbiAgbWF4RGF0ZT86IHN0cmluZyB8IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIGRhdGUgdGhhdCBhIHVzZXIgY2FuIHN0YXJ0IHBpY2tpbmcgZnJvbSAoaW5jbHVzaXZlKS5cbiAgICovXG4gIG1pbkRhdGU/OiBzdHJpbmcgfCBEYXRlO1xuXG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzdGVwIGZvciB0aGUgbWludXRlIGlucHV0IChpbmNsLiBzY3JvbGxpbmcpLlxuICAgKi9cbiAgbWludXRlSW5jcmVtZW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgYSBzaW5nbGUgZGF0ZSwgbXVsdGlwbGUgZGF0ZXMgb3IgYSBkYXRlIHJhbmdlLlxuICAgKi9cbiAgbW9kZT86ICdzaW5nbGUnIHwgJ211bHRpcGxlJyB8ICdyYW5nZSc7XG5cbiAgLyoqXG4gICAqIEhUTUwgZm9yIHRoZSBhcnJvdyBpY29uLCB1c2VkIHRvIHN3aXRjaCBtb250aHMuXG4gICAqL1xuICBuZXh0QXJyb3c/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBkYXkgc2VsZWN0aW9uIGluIGNhbGVuZGFyLiBVc2UgaXQgYWxvbmcgd2l0aCBgZW5hYmxlVGltZWAgdG8gY3JlYXRlIGEgdGltZSBwaWNrZXIuXG4gICAqL1xuICBub0NhbGVuZGFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvdmlkZSBhIGRhdGUgZm9yICd0b2RheScsIHdoaWNoIHdpbGwgYmUgdXNlZCBpbnN0ZWFkIG9mIFwibmV3IERhdGUoKVwiXG4gICAqL1xuICBub3c/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IGV4cGVjdHMgYSBkYXRlIHN0cmluZyBhbmQgbXVzdCByZXR1cm4gYSBEYXRlIG9iamVjdC5cbiAgICovXG4gIHBhcnNlRGF0ZT86IChzdHI6IHN0cmluZykgPT4gRGF0ZTtcblxuICAvKipcbiAgICogSFRNTCBmb3IgdGhlIGxlZnQgYXJyb3cgaWNvbi5cbiAgICovXG4gIHByZXZBcnJvdz86IHN0cmluZztcblxuICAvKipcbiAgICogU2hvdyB0aGUgbW9udGggdXNpbmcgdGhlIHNob3J0aGFuZCB2ZXJzaW9uIChpZSwgU2VwIGluc3RlYWQgb2YgU2VwdGVtYmVyKS5cbiAgICovXG4gIHNob3J0aGFuZEN1cnJlbnRNb250aD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIHRoZSBjYWxlbmRhciBpbnNpZGUgdGhlIHdyYXBwZXIgYW5kIG5leHQgdG8gdGhlIGlucHV0IGVsZW1lbnQuIChMZWF2ZSBgZmFsc2VgIHVubGVzcyB5b3Uga25vdyB3aGF0IHlvdSdyZSBkb2luZykuXG4gICAqL1xuICBzdGF0aWM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aW1lIHBpY2tlciBpbiAyNCBob3VyIG1vZGUgd2l0aG91dCBBTS9QTSBzZWxlY3Rpb24gd2hlbiBlbmFibGVkLlxuICAgKi9cbiAgdGltZTI0aHI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGRhdGVzIHdpbGwgcGFyc2VkLCBmb3JtYXR0ZWQsIGFuZCBkaXNwbGF5ZWQgaW4gVVRDLlxuICAgKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgZGF0ZSBzdHJpbmdzIGNvbnRhaW4gdGhlIHRpbWV6b25lLCBidXQgbm90IG5lY2Vzc2FyeS5cbiAgICovXG4gIHV0Yz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgZGlzcGxheSBvZiB3ZWVrIG51bWJlcnMgaW4gY2FsZW5kYXIuXG4gICAqL1xuICB3ZWVrTnVtYmVycz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFlvdSBtYXkgb3ZlcnJpZGUgdGhlIGZ1bmN0aW9uIHRoYXQgZXh0cmFjdHMgdGhlIHdlZWsgbnVtYmVycyBmcm9tIGEgRGF0ZSBieSBzdXBwbHlpbmcgYSBnZXRXZWVrIGZ1bmN0aW9uLlxuICAgKiBJdCB0YWtlcyBpbiBhIGRhdGUgYXMgYSBwYXJhbWV0ZXIgYW5kIHNob3VsZCByZXR1cm4gYSBjb3JyZXNwb25kaW5nIHN0cmluZyB0aGF0IHlvdSB3YW50IHRvIGFwcGVhciBsZWZ0IG9mIGV2ZXJ5IHdlZWsuXG4gICAqL1xuICBnZXRXZWVrPzogKGRhdGU6IERhdGUpID0+IHN0cmluZztcblxuICAvKipcbiAgICogQ3VzdG9tIGVsZW1lbnRzIGFuZCBpbnB1dCBncm91cHMuXG4gICAqL1xuICB3cmFwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQXJyYXkgb2YgcGx1Z2luIGluc3RhbmNlcyB0byB1c2UuXG4gICAqL1xuICBwbHVnaW5zPzogYW55W107XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgb2JqZWN0IG9yIHN0cmluZyB0byB1c2UgZm9yIHRoZSBsb2NhbGUuXG4gICAqL1xuICBsb2NhbGU/OiBvYmplY3QgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEF1dG8gY29udmVydCB0aGUgbmdNb2RlbCB2YWx1ZSBmcm9tIGEgc3RyaW5nIHRvIGEgZGF0ZSAvIGFycmF5IG9mIGRhdGVzIC8gZnJvbSAtIHRvIGRhdGUgb2JqZWN0IGRlcGVuZGluZyBvbiB0aGUgYG1vZGVgXG4gICAqL1xuICBjb252ZXJ0TW9kZWxWYWx1ZT86IGJvb2xlYW47XG4gIFxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBtb250aHMgc2hvd24uXG4gICAqL1xuICBzaG93TW9udGhzPzogbnVtYmVyO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmxhdHBpY2tyRGVmYXVsdHMgaW1wbGVtZW50cyBGbGF0cGlja3JEZWZhdWx0c0ludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBFeGFjdGx5IHRoZSBzYW1lIGFzIGRhdGUgZm9ybWF0LCBidXQgZm9yIHRoZSBhbHRJbnB1dCBmaWVsZC5cbiAgICovXG4gIGFsdEZvcm1hdDogc3RyaW5nID0gJ0YgaiwgWSc7XG5cbiAgLyoqXG4gICAqIFx0U2hvdyB0aGUgdXNlciBhIHJlYWRhYmxlIGRhdGUgKGFzIHBlciBhbHRGb3JtYXQpLCBidXQgcmV0dXJuIHNvbWV0aGluZyB0b3RhbGx5IGRpZmZlcmVudCB0byB0aGUgc2VydmVyLlxuICAgKi9cbiAgYWx0SW5wdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhpcyBjbGFzcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBpbnB1dCBlbGVtZW50IGNyZWF0ZWQgYnkgdGhlIGFsdElucHV0IG9wdGlvbi5cbiAgICogTm90ZSB0aGF0IGBhbHRJbnB1dGAgYWxyZWFkeSBpbmhlcml0cyBjbGFzc2VzIGZyb20gdGhlIG9yaWdpbmFsIGlucHV0LlxuICAgKi9cbiAgYWx0SW5wdXRDbGFzczogc3RyaW5nID0gJyc7XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0aGUgdXNlciB0byBlbnRlciBhIGRhdGUgZGlyZWN0bHkgaW5wdXQgdGhlIGlucHV0IGZpZWxkLiBCeSBkZWZhdWx0LCBkaXJlY3QgZW50cnkgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBhbGxvd0lucHV0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEluc3RlYWQgb2YgYGJvZHlgLCBhcHBlbmRzIHRoZSBjYWxlbmRhciB0byB0aGUgc3BlY2lmaWVkIG5vZGUgaW5zdGVhZC5cbiAgICovXG4gIGFwcGVuZFRvOiBIVE1MRWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogRGVmaW5lcyBob3cgdGhlIGRhdGUgd2lsbCBiZSBmb3JtYXR0ZWQgaW4gdGhlIGFyaWEtbGFiZWwgZm9yIGNhbGVuZGFyIGRheXMsIHVzaW5nIHRoZSBzYW1lIHRva2VucyBhcyBkYXRlRm9ybWF0LiBJZiB5b3UgY2hhbmdlIHRoaXMsIHlvdSBzaG91bGQgY2hvb3NlIGEgdmFsdWUgdGhhdCB3aWxsIG1ha2Ugc2Vuc2UgaWYgYSBzY3JlZW4gcmVhZGVyIHJlYWRzIGl0IG91dCBsb3VkLlxuICAgKi9cbiAgYXJpYURhdGVGb3JtYXQ/OiBzdHJpbmcgPSAnRiBqLCBZJztcblxuICAvKipcbiAgICogV2hldGhlciBjbGlja2luZyBvbiB0aGUgaW5wdXQgc2hvdWxkIG9wZW4gdGhlIHBpY2tlci5cbiAgICogWW91IGNvdWxkIGRpc2FibGUgdGhpcyBpZiB5b3Ugd2lzaCB0byBvcGVuIHRoZSBjYWxlbmRhciBtYW51YWxseSBgd2l0aC5vcGVuKClgLlxuICAgKi9cbiAgY2xpY2tPcGVuczogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgd2hpY2ggYXJlIHVzZWQgdG8gZGVmaW5lIGhvdyB0aGUgZGF0ZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYm94LlxuICAgKiBUaGUgc3VwcG9ydGVkIGNoYXJhY3RlcnMgYXJlIGRlZmluZWQgaW4gdGhlIHRhYmxlIGJlbG93LlxuICAgKi9cbiAgZGF0ZUZvcm1hdDogc3RyaW5nID0gJ1ktbS1kJztcblxuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiB0aGUgaG91ciBlbGVtZW50LlxuICAgKi9cbiAgZGVmYXVsdEhvdXI/OiBudW1iZXIgPSAxMjtcblxuICAvKipcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiB0aGUgbWludXRlIGVsZW1lbnQuXG4gICAqL1xuICBkZWZhdWx0TWludXRlPzogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogU2VlIDxhIGhyZWY9XCJodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvZXhhbXBsZXMvI2Rpc2FibGluZy1zcGVjaWZpYy1kYXRlc1wiPmRpc2FibGluZyBkYXRlczwvYT4uXG4gICAqL1xuICBkaXNhYmxlOiBEaXNhYmxlRW5hYmxlRGF0ZVtdID0gW107XG5cbiAgLyoqXG4gICAqIFNldCBkaXNhYmxlTW9iaWxlIHRvIHRydWUgdG8gYWx3YXlzIHVzZSB0aGUgbm9uLW5hdGl2ZSBwaWNrZXIuXG4gICAqIEJ5IGRlZmF1bHQsIEZsYXRwaWNrciB1dGlsaXplcyBuYXRpdmUgZGF0ZXRpbWUgd2lkZ2V0cyB1bmxlc3MgY2VydGFpbiBvcHRpb25zIChlLmcuIGRpc2FibGUpIGFyZSB1c2VkLlxuICAgKi9cbiAgZGlzYWJsZU1vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBTZWUgPGEgaHJlZj1cImh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci9leGFtcGxlcy8jZGlzYWJsaW5nLWFsbC1kYXRlcy1leGNlcHQtc2VsZWN0LWZld1wiPmVuYWJsaW5nIGRhdGVzPC9hPi5cbiAgICovXG4gIGVuYWJsZTogRGlzYWJsZUVuYWJsZURhdGVbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRpbWUgcGlja2VyLlxuICAgKi9cbiAgZW5hYmxlVGltZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIHNlY29uZHMgaW4gdGhlIHRpbWUgcGlja2VyLlxuICAgKi9cbiAgZW5hYmxlU2Vjb25kczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBbGxvd3MgdXNpbmcgYSBjdXN0b20gZGF0ZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGluc3RlYWQgb2YgdGhlIGJ1aWx0LWluIGhhbmRsaW5nIGZvciBkYXRlIGZvcm1hdHMgdXNpbmcgZGF0ZUZvcm1hdCwgYWx0Rm9ybWF0LCBldGMuXG4gICAqL1xuICBmb3JtYXREYXRlPzogKHZhbHVlOiBhbnkpID0+IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQWRqdXN0cyB0aGUgc3RlcCBmb3IgdGhlIGhvdXIgaW5wdXQgKGluY2wuIHNjcm9sbGluZykuXG4gICAqL1xuICBob3VySW5jcmVtZW50OiBudW1iZXIgPSAxO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgY2FsZW5kYXIgaW5saW5lLlxuICAgKi9cbiAgaW5saW5lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIGRhdGUgdGhhdCBhIHVzZXIgY2FuIHBpY2sgdG8gKGluY2x1c2l2ZSkuXG4gICAqL1xuICBtYXhEYXRlOiBzdHJpbmcgfCBEYXRlID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBkYXRlIHRoYXQgYSB1c2VyIGNhbiBzdGFydCBwaWNraW5nIGZyb20gKGluY2x1c2l2ZSkuXG4gICAqL1xuICBtaW5EYXRlOiBzdHJpbmcgfCBEYXRlID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzdGVwIGZvciB0aGUgbWludXRlIGlucHV0IChpbmNsLiBzY3JvbGxpbmcpLlxuICAgKi9cbiAgbWludXRlSW5jcmVtZW50OiBudW1iZXIgPSA1O1xuXG4gIC8qKlxuICAgKiBTZWxlY3QgYSBzaW5nbGUgZGF0ZSwgbXVsdGlwbGUgZGF0ZXMgb3IgYSBkYXRlIHJhbmdlLlxuICAgKi9cbiAgbW9kZTogJ3NpbmdsZScgfCAnbXVsdGlwbGUnIHwgJ3JhbmdlJyA9ICdzaW5nbGUnO1xuXG4gIC8qKlxuICAgKiBIVE1MIGZvciB0aGUgYXJyb3cgaWNvbiwgdXNlZCB0byBzd2l0Y2ggbW9udGhzLlxuICAgKi9cbiAgbmV4dEFycm93OiBzdHJpbmcgPSAnPic7XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBkYXkgc2VsZWN0aW9uIGluIGNhbGVuZGFyLiBVc2UgaXQgYWxvbmcgd2l0aCBgZW5hYmxlVGltZWAgdG8gY3JlYXRlIGEgdGltZSBwaWNrZXIuXG4gICAqL1xuICBub0NhbGVuZGFyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgbm93IHRvIHRoZSBjdXJyZW50IGRhdGVcbiAgICovXG4gIG5vdzogRGF0ZSB8IHN0cmluZyB8IG51bWJlciA9IG5ldyBEYXRlKCk7XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgZXhwZWN0cyBhIGRhdGUgc3RyaW5nIGFuZCBtdXN0IHJldHVybiBhIERhdGUgb2JqZWN0LlxuICAgKi9cbiAgcGFyc2VEYXRlOiAoc3RyOiBzdHJpbmcpID0+IERhdGU7XG5cbiAgLyoqXG4gICAqIEhUTUwgZm9yIHRoZSBsZWZ0IGFycm93IGljb24uXG4gICAqL1xuICBwcmV2QXJyb3c6IHN0cmluZyA9ICc8JztcblxuICAvKipcbiAgICogU2hvdyB0aGUgbW9udGggdXNpbmcgdGhlIHNob3J0aGFuZCB2ZXJzaW9uIChpZSwgU2VwIGluc3RlYWQgb2YgU2VwdGVtYmVyKS5cbiAgICovXG4gIHNob3J0aGFuZEN1cnJlbnRNb250aDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBQb3NpdGlvbiB0aGUgY2FsZW5kYXIgaW5zaWRlIHRoZSB3cmFwcGVyIGFuZCBuZXh0IHRvIHRoZSBpbnB1dCBlbGVtZW50LiAoTGVhdmUgYGZhbHNlYCB1bmxlc3MgeW91IGtub3cgd2hhdCB5b3UncmUgZG9pbmcpLlxuICAgKi9cbiAgc3RhdGljOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRpbWUgcGlja2VyIGluIDI0IGhvdXIgbW9kZSB3aXRob3V0IEFNL1BNIHNlbGVjdGlvbiB3aGVuIGVuYWJsZWQuXG4gICAqL1xuICB0aW1lMjRocjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGRhdGVzIHdpbGwgcGFyc2VkLCBmb3JtYXR0ZWQsIGFuZCBkaXNwbGF5ZWQgaW4gVVRDLlxuICAgKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgZGF0ZSBzdHJpbmdzIGNvbnRhaW4gdGhlIHRpbWV6b25lLCBidXQgbm90IG5lY2Vzc2FyeS5cbiAgICovXG4gIHV0YzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIGRpc3BsYXkgb2Ygd2VlayBudW1iZXJzIGluIGNhbGVuZGFyLlxuICAgKi9cbiAgd2Vla051bWJlcnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogWW91IG1heSBvdmVycmlkZSB0aGUgZnVuY3Rpb24gdGhhdCBleHRyYWN0cyB0aGUgd2VlayBudW1iZXJzIGZyb20gYSBEYXRlIGJ5IHN1cHBseWluZyBhIGdldFdlZWsgZnVuY3Rpb24uXG4gICAqIEl0IHRha2VzIGluIGEgZGF0ZSBhcyBhIHBhcmFtZXRlciBhbmQgc2hvdWxkIHJldHVybiBhIGNvcnJlc3BvbmRpbmcgc3RyaW5nIHRoYXQgeW91IHdhbnQgdG8gYXBwZWFyIGxlZnQgb2YgZXZlcnkgd2Vlay5cbiAgICovXG4gIGdldFdlZWs6IChkYXRlOiBEYXRlKSA9PiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBlbGVtZW50cyBhbmQgaW5wdXQgZ3JvdXBzLlxuICAgKi9cbiAgd3JhcDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBwbHVnaW4gaW5zdGFuY2VzIHRvIHVzZS5cbiAgICovXG4gIHBsdWdpbnM6IGFueVtdID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgb2JqZWN0IG9yIHN0cmluZyB0byB1c2UgZm9yIHRoZSBsb2NhbGUuXG4gICAqL1xuICBsb2NhbGU6IG9iamVjdCB8IHN0cmluZyA9ICdkZWZhdWx0JztcblxuICAvKipcbiAgICogQXV0byBjb252ZXJ0IHRoZSBuZ01vZGVsIHZhbHVlIGZyb20gYSBzdHJpbmcgdG8gYSBkYXRlIC8gYXJyYXkgb2YgZGF0ZXMgLyBmcm9tIC0gdG8gZGF0ZSBvYmplY3QgZGVwZW5kaW5nIG9uIHRoZSBgbW9kZWBcbiAgICovXG4gIGNvbnZlcnRNb2RlbFZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gIFxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBtb250aHMgc2hvd24uXG4gICAqL1xuICBzaG93TW9udGhzOiBudW1iZXIgPSAxO1xufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZsYXRwaWNrckRlZmF1bHRzLFxuICBEaXNhYmxlRW5hYmxlRGF0ZVxufSBmcm9tICcuL2ZsYXRwaWNrci1kZWZhdWx0cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBmbGF0cGlja3IgZnJvbSAnZmxhdHBpY2tyJztcblxuZXhwb3J0IGludGVyZmFjZSBGbGF0UGlja3JPdXRwdXRPcHRpb25zIHtcbiAgc2VsZWN0ZWREYXRlczogRGF0ZVtdO1xuICBkYXRlU3RyaW5nOiBzdHJpbmc7XG4gIGluc3RhbmNlOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhdFBpY2tyRGF5Q3JlYXRlT3V0cHV0T3B0aW9uc1xuICBleHRlbmRzIEZsYXRQaWNrck91dHB1dE9wdGlvbnMge1xuICBkYXlFbGVtZW50OiBIVE1MRWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IEZMQVRQSUNLUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGbGF0cGlja3JEaXJlY3RpdmUpLCAvL3RzbGludDpkaXNhYmxlLWxpbmVcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xGbGF0cGlja3JdJyxcbiAgcHJvdmlkZXJzOiBbRkxBVFBJQ0tSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBob3N0OiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbGluZSB1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcbiAgICAnKGJsdXIpJzogJ29uVG91Y2hlZEZuKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRmxhdHBpY2tyRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLyoqXG4gICAqIEV4YWN0bHkgdGhlIHNhbWUgYXMgZGF0ZSBmb3JtYXQsIGJ1dCBmb3IgdGhlIGFsdElucHV0IGZpZWxkLlxuICAgKi9cbiAgQElucHV0KCkgYWx0Rm9ybWF0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFx0U2hvdyB0aGUgdXNlciBhIHJlYWRhYmxlIGRhdGUgKGFzIHBlciBhbHRGb3JtYXQpLCBidXQgcmV0dXJuIHNvbWV0aGluZyB0b3RhbGx5IGRpZmZlcmVudCB0byB0aGUgc2VydmVyLlxuICAgKi9cbiAgQElucHV0KCkgYWx0SW5wdXQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoaXMgY2xhc3Mgd2lsbCBiZSBhZGRlZCB0byB0aGUgaW5wdXQgZWxlbWVudCBjcmVhdGVkIGJ5IHRoZSBhbHRJbnB1dCBvcHRpb24uXG4gICAqIE5vdGUgdGhhdCBgYWx0SW5wdXRgIGFscmVhZHkgaW5oZXJpdHMgY2xhc3NlcyBmcm9tIHRoZSBvcmlnaW5hbCBpbnB1dC5cbiAgICovXG4gIEBJbnB1dCgpIGFsdElucHV0Q2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGVudGVyIGEgZGF0ZSBkaXJlY3RseSBpbnB1dCB0aGUgaW5wdXQgZmllbGQuIEJ5IGRlZmF1bHQsIGRpcmVjdCBlbnRyeSBpcyBkaXNhYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIGFsbG93SW5wdXQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEluc3RlYWQgb2YgYGJvZHlgLCBhcHBlbmRzIHRoZSBjYWxlbmRhciB0byB0aGUgc3BlY2lmaWVkIG5vZGUgaW5zdGVhZC5cbiAgICovXG4gIEBJbnB1dCgpIGFwcGVuZFRvOiBIVE1MRWxlbWVudDtcblxuICAvKipcbiAgICogRGVmaW5lcyBob3cgdGhlIGRhdGUgd2lsbCBiZSBmb3JtYXR0ZWQgaW4gdGhlIGFyaWEtbGFiZWwgZm9yIGNhbGVuZGFyIGRheXMsIHVzaW5nIHRoZSBzYW1lIHRva2VucyBhcyBkYXRlRm9ybWF0LiBJZiB5b3UgY2hhbmdlIHRoaXMsIHlvdSBzaG91bGQgY2hvb3NlIGEgdmFsdWUgdGhhdCB3aWxsIG1ha2Ugc2Vuc2UgaWYgYSBzY3JlZW4gcmVhZGVyIHJlYWRzIGl0IG91dCBsb3VkLlxuICAgKi9cbiAgQElucHV0KCkgYXJpYURhdGVGb3JtYXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgY2xpY2tpbmcgb24gdGhlIGlucHV0IHNob3VsZCBvcGVuIHRoZSBwaWNrZXIuXG4gICAqIFlvdSBjb3VsZCBkaXNhYmxlIHRoaXMgaWYgeW91IHdpc2ggdG8gb3BlbiB0aGUgY2FsZW5kYXIgbWFudWFsbHkgYHdpdGgub3BlbigpYC5cbiAgICovXG4gIEBJbnB1dCgpIGNsaWNrT3BlbnM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgd2hpY2ggYXJlIHVzZWQgdG8gZGVmaW5lIGhvdyB0aGUgZGF0ZSB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYm94LlxuICAgKiBUaGUgc3VwcG9ydGVkIGNoYXJhY3RlcnMgYXJlIGRlZmluZWQgaW4gdGhlIHRhYmxlIGJlbG93LlxuICAgKi9cbiAgQElucHV0KCkgZGF0ZUZvcm1hdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIG9mIHRoZSBob3VyIGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoKSBkZWZhdWx0SG91cj86IG51bWJlcjtcbiAgLyoqXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgdGhlIG1pbnV0ZSBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KCkgZGVmYXVsdE1pbnV0ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogU2VlIDxhIGhyZWY9XCJodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvZXhhbXBsZXMvI2Rpc2FibGluZy1zcGVjaWZpYy1kYXRlc1wiPmRpc2FibGluZyBkYXRlczwvYT4uXG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlOiBEaXNhYmxlRW5hYmxlRGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBTZXQgZGlzYWJsZU1vYmlsZSB0byB0cnVlIHRvIGFsd2F5cyB1c2UgdGhlIG5vbi1uYXRpdmUgcGlja2VyLlxuICAgKiBCeSBkZWZhdWx0LCBGbGF0cGlja3IgdXRpbGl6ZXMgbmF0aXZlIGRhdGV0aW1lIHdpZGdldHMgdW5sZXNzIGNlcnRhaW4gb3B0aW9ucyAoZS5nLiBkaXNhYmxlKSBhcmUgdXNlZC5cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVNb2JpbGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNlZSA8YSBocmVmPVwiaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyL2V4YW1wbGVzLyNkaXNhYmxpbmctYWxsLWRhdGVzLWV4Y2VwdC1zZWxlY3QtZmV3XCI+ZW5hYmxpbmcgZGF0ZXM8L2E+LlxuICAgKi9cbiAgQElucHV0KCkgZW5hYmxlOiBEaXNhYmxlRW5hYmxlRGF0ZVtdO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIHRpbWUgcGlja2VyLlxuICAgKi9cbiAgQElucHV0KCkgZW5hYmxlVGltZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW5hYmxlcyBzZWNvbmRzIGluIHRoZSB0aW1lIHBpY2tlci5cbiAgICovXG4gIEBJbnB1dCgpIGVuYWJsZVNlY29uZHM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFsbG93cyB1c2luZyBhIGN1c3RvbSBkYXRlIGZvcm1hdHRpbmcgZnVuY3Rpb24gaW5zdGVhZCBvZiB0aGUgYnVpbHQtaW4gaGFuZGxpbmcgZm9yIGRhdGUgZm9ybWF0cyB1c2luZyBkYXRlRm9ybWF0LCBhbHRGb3JtYXQsIGV0Yy5cbiAgICovXG4gIEBJbnB1dCgpIGZvcm1hdERhdGU/OiAodmFsdWU6IGFueSkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzdGVwIGZvciB0aGUgaG91ciBpbnB1dCAoaW5jbC4gc2Nyb2xsaW5nKS5cbiAgICovXG4gIEBJbnB1dCgpIGhvdXJJbmNyZW1lbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGNhbGVuZGFyIGlubGluZS5cbiAgICovXG4gIEBJbnB1dCgpIGlubGluZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gZGF0ZSB0aGF0IGEgdXNlciBjYW4gcGljayB0byAoaW5jbHVzaXZlKS5cbiAgICovXG4gIEBJbnB1dCgpIG1heERhdGU6IHN0cmluZyB8IERhdGU7XG5cbiAgLyoqXG4gICAqIFRoZSBtaW5pbXVtIGRhdGUgdGhhdCBhIHVzZXIgY2FuIHN0YXJ0IHBpY2tpbmcgZnJvbSAoaW5jbHVzaXZlKS5cbiAgICovXG4gIEBJbnB1dCgpIG1pbkRhdGU6IHN0cmluZyB8IERhdGU7XG5cbiAgLyoqXG4gICAqIEFkanVzdHMgdGhlIHN0ZXAgZm9yIHRoZSBtaW51dGUgaW5wdXQgKGluY2wuIHNjcm9sbGluZykuXG4gICAqL1xuICBASW5wdXQoKSBtaW51dGVJbmNyZW1lbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogU2VsZWN0IGEgc2luZ2xlIGRhdGUsIG11bHRpcGxlIGRhdGVzIG9yIGEgZGF0ZSByYW5nZS5cbiAgICovXG4gIEBJbnB1dCgpIG1vZGU6ICdzaW5nbGUnIHwgJ211bHRpcGxlJyB8ICdyYW5nZSc7XG5cbiAgLyoqXG4gICAqIEhUTUwgZm9yIHRoZSBhcnJvdyBpY29uLCB1c2VkIHRvIHN3aXRjaCBtb250aHMuXG4gICAqL1xuICBASW5wdXQoKSBuZXh0QXJyb3c6IHN0cmluZztcblxuICAvKipcbiAgICogSGlkZXMgdGhlIGRheSBzZWxlY3Rpb24gaW4gY2FsZW5kYXIuIFVzZSBpdCBhbG9uZyB3aXRoIGBlbmFibGVUaW1lYCB0byBjcmVhdGUgYSB0aW1lIHBpY2tlci5cbiAgICovXG4gIEBJbnB1dCgpIG5vQ2FsZW5kYXI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFByb3ZpZGUgYSBkYXRlIGZvciAndG9kYXknLCB3aGljaCB3aWxsIGJlIHVzZWQgaW5zdGVhZCBvZiBcIm5ldyBEYXRlKClcIlxuICAgKi9cbiAgQElucHV0KCkgbm93PzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBleHBlY3RzIGEgZGF0ZSBzdHJpbmcgYW5kIG11c3QgcmV0dXJuIGEgRGF0ZSBvYmplY3QuXG4gICAqL1xuICBASW5wdXQoKSBwYXJzZURhdGU6IChzdHI6IHN0cmluZykgPT4gRGF0ZTtcblxuICAvKipcbiAgICogSFRNTCBmb3IgdGhlIGxlZnQgYXJyb3cgaWNvbi5cbiAgICovXG4gIEBJbnB1dCgpIHByZXZBcnJvdzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBtb250aCB1c2luZyB0aGUgc2hvcnRoYW5kIHZlcnNpb24gKGllLCBTZXAgaW5zdGVhZCBvZiBTZXB0ZW1iZXIpLlxuICAgKi9cbiAgQElucHV0KCkgc2hvcnRoYW5kQ3VycmVudE1vbnRoOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIG1vbnRocyBzaG93bi5cbiAgICovXG4gIEBJbnB1dCgpIHNob3dNb250aHM6IG51bWJlcjtcblxuICAvKipcbiAgICogUG9zaXRpb24gdGhlIGNhbGVuZGFyIGluc2lkZSB0aGUgd3JhcHBlciBhbmQgbmV4dCB0byB0aGUgaW5wdXQgZWxlbWVudC4gKExlYXZlIGBmYWxzZWAgdW5sZXNzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nKS5cbiAgICovXG4gIEBJbnB1dCgpIHN0YXRpYzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzcGxheXMgdGltZSBwaWNrZXIgaW4gMjQgaG91ciBtb2RlIHdpdGhvdXQgQU0vUE0gc2VsZWN0aW9uIHdoZW4gZW5hYmxlZC5cbiAgICovXG4gIEBJbnB1dCgpIHRpbWUyNGhyOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbmFibGVzIGRpc3BsYXkgb2Ygd2VlayBudW1iZXJzIGluIGNhbGVuZGFyLlxuICAgKi9cbiAgQElucHV0KCkgd2Vla051bWJlcnM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFlvdSBtYXkgb3ZlcnJpZGUgdGhlIGZ1bmN0aW9uIHRoYXQgZXh0cmFjdHMgdGhlIHdlZWsgbnVtYmVycyBmcm9tIGEgRGF0ZSBieSBzdXBwbHlpbmcgYSBnZXRXZWVrIGZ1bmN0aW9uLlxuICAgKiBJdCB0YWtlcyBpbiBhIGRhdGUgYXMgYSBwYXJhbWV0ZXIgYW5kIHNob3VsZCByZXR1cm4gYSBjb3JyZXNwb25kaW5nIHN0cmluZyB0aGF0IHlvdSB3YW50IHRvIGFwcGVhciBsZWZ0IG9mIGV2ZXJ5IHdlZWsuXG4gICAqL1xuICBASW5wdXQoKSBnZXRXZWVrOiAoZGF0ZTogRGF0ZSkgPT4gc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDdXN0b20gZWxlbWVudHMgYW5kIGlucHV0IGdyb3Vwcy5cbiAgICovXG4gIEBJbnB1dCgpIHdyYXA6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIHBsdWdpbiBpbnN0YW5jZXMgdG8gdXNlLlxuICAgKi9cbiAgQElucHV0KCkgcGx1Z2luczogYW55W107XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgb2JqZWN0IG9yIHN0cmluZyB0byB1c2UgZm9yIHRoZSBsb2NhbGUuXG4gICAqL1xuICBASW5wdXQoKSBsb2NhbGU6IG9iamVjdCB8IHN0cmluZztcblxuICAvKipcbiAgICogQXV0byBjb252ZXJ0IHRoZSBuZ01vZGVsIHZhbHVlIGZyb20gYSBzdHJpbmcgdG8gYSBkYXRlIC8gYXJyYXkgb2YgZGF0ZXMgLyBmcm9tIC0gdG8gZGF0ZSBvYmplY3QgZGVwZW5kaW5nIG9uIHRoZSBgbW9kZWBcbiAgICovXG4gIEBJbnB1dCgpIGNvbnZlcnRNb2RlbFZhbHVlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRyaWdnZXJlZCBvbmNlIHRoZSBjYWxlbmRhciBpcyBpbiBhIHJlYWR5IHN0YXRlXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZmxhdHBpY2tyUmVhZHk6IEV2ZW50RW1pdHRlcjxGbGF0UGlja3JPdXRwdXRPcHRpb25zPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIGEgZGF0ZSwgb3IgY2hhbmdlcyB0aGUgdGltZSBvbiBhIHNlbGVjdGVkIGRhdGUuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZmxhdHBpY2tyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RmxhdFBpY2tyT3V0cHV0T3B0aW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIGlucHV0IHZhbHVlIGlzIHVwZGF0ZWQgd2l0aCBhIG5ldyBkYXRlIHN0cmluZy5cbiAgICovXG4gIEBPdXRwdXQoKVxuICBmbGF0cGlja3JWYWx1ZVVwZGF0ZTogRXZlbnRFbWl0dGVyPFxuICAgIEZsYXRQaWNrck91dHB1dE9wdGlvbnNcbiAgPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgY2FsZW5kYXIgaXMgb3BlbmVkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrck9wZW46IEV2ZW50RW1pdHRlcjxGbGF0UGlja3JPdXRwdXRPcHRpb25zPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGUgY2FsZW5kYXIgaXMgY2xvc2VkLlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrckNsb3NlOiBFdmVudEVtaXR0ZXI8RmxhdFBpY2tyT3V0cHV0T3B0aW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIG1vbnRoIGlzIGNoYW5nZWQsIGVpdGhlciBieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrck1vbnRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8XG4gICAgRmxhdFBpY2tyT3V0cHV0T3B0aW9uc1xuICA+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBHZXRzIHRyaWdnZXJlZCB3aGVuIHRoZSB5ZWFyIGlzIGNoYW5nZWQsIGVpdGhlciBieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5LlxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGZsYXRwaWNrclllYXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxcbiAgICBGbGF0UGlja3JPdXRwdXRPcHRpb25zXG4gID4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRha2UgZnVsbCBjb250cm9sIG9mIGV2ZXJ5IGRhdGUgY2VsbCB3aXRoIHRoaXMgb3V0cHV0XG4gICAqL1xuICBAT3V0cHV0KClcbiAgZmxhdHBpY2tyRGF5Q3JlYXRlOiBFdmVudEVtaXR0ZXI8XG4gICAgRmxhdFBpY2tyRGF5Q3JlYXRlT3V0cHV0T3B0aW9uc1xuICA+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgaW5zdGFuY2U6IGZsYXRwaWNrci5JbnN0YW5jZTtcbiAgcHJpdmF0ZSBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgaW5pdGlhbFZhbHVlOiBhbnk7XG5cbiAgb25DaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4gIG9uVG91Y2hlZEZuID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbG06IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBkZWZhdWx0czogRmxhdHBpY2tyRGVmYXVsdHMsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgYWx0Rm9ybWF0OiB0aGlzLmFsdEZvcm1hdCxcbiAgICAgIGFsdElucHV0OiB0aGlzLmFsdElucHV0LFxuICAgICAgYWx0SW5wdXRDbGFzczogdGhpcy5hbHRJbnB1dENsYXNzLFxuICAgICAgYWxsb3dJbnB1dDogdGhpcy5hbGxvd0lucHV0LFxuICAgICAgYXBwZW5kVG86IHRoaXMuYXBwZW5kVG8sXG4gICAgICBhcmlhRGF0ZUZvcm1hdDogdGhpcy5hcmlhRGF0ZUZvcm1hdCxcbiAgICAgIGNsaWNrT3BlbnM6IHRoaXMuY2xpY2tPcGVucyxcbiAgICAgIGRhdGVGb3JtYXQ6IHRoaXMuZGF0ZUZvcm1hdCxcbiAgICAgIGRlZmF1bHRIb3VyOiB0aGlzLmRlZmF1bHRIb3VyLFxuICAgICAgZGVmYXVsdE1pbnV0ZTogdGhpcy5kZWZhdWx0TWludXRlLFxuICAgICAgZGlzYWJsZTogdGhpcy5kaXNhYmxlLFxuICAgICAgZGlzYWJsZU1vYmlsZTogdGhpcy5kaXNhYmxlTW9iaWxlLFxuICAgICAgZW5hYmxlOiB0aGlzLmVuYWJsZSxcbiAgICAgIGVuYWJsZVRpbWU6IHRoaXMuZW5hYmxlVGltZSxcbiAgICAgIGVuYWJsZVNlY29uZHM6IHRoaXMuZW5hYmxlU2Vjb25kcyxcbiAgICAgIGZvcm1hdERhdGU6IHRoaXMuZm9ybWF0RGF0ZSxcbiAgICAgIGhvdXJJbmNyZW1lbnQ6IHRoaXMuaG91ckluY3JlbWVudCxcbiAgICAgIGRlZmF1bHREYXRlOiB0aGlzLmluaXRpYWxWYWx1ZSxcbiAgICAgIGlubGluZTogdGhpcy5pbmxpbmUsXG4gICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUsXG4gICAgICBtaW5EYXRlOiB0aGlzLm1pbkRhdGUsXG4gICAgICBtaW51dGVJbmNyZW1lbnQ6IHRoaXMubWludXRlSW5jcmVtZW50LFxuICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgbmV4dEFycm93OiB0aGlzLm5leHRBcnJvdyxcbiAgICAgIG5vQ2FsZW5kYXI6IHRoaXMubm9DYWxlbmRhcixcbiAgICAgIG5vdzogdGhpcy5ub3csXG4gICAgICBwYXJzZURhdGU6IHRoaXMucGFyc2VEYXRlLFxuICAgICAgcHJldkFycm93OiB0aGlzLnByZXZBcnJvdyxcbiAgICAgIHNob3J0aGFuZEN1cnJlbnRNb250aDogdGhpcy5zaG9ydGhhbmRDdXJyZW50TW9udGgsXG4gICAgICBzaG93TW9udGhzOiB0aGlzLnNob3dNb250aHMsXG4gICAgICBzdGF0aWM6IHRoaXMuc3RhdGljLFxuICAgICAgdGltZTI0aHI6IHRoaXMudGltZTI0aHIsXG4gICAgICB3ZWVrTnVtYmVyczogdGhpcy53ZWVrTnVtYmVycyxcbiAgICAgIGdldFdlZWs6IHRoaXMuZ2V0V2VlayxcbiAgICAgIHdyYXA6IHRoaXMud3JhcCxcbiAgICAgIHBsdWdpbnM6IHRoaXMucGx1Z2lucyxcbiAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICBvbkNoYW5nZTogKHNlbGVjdGVkRGF0ZXM6IERhdGVbXSwgZGF0ZVN0cmluZzogc3RyaW5nLCBpbnN0YW5jZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZmxhdHBpY2tyQ2hhbmdlLmVtaXQoeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyaW5nLCBpbnN0YW5jZSB9KTtcbiAgICAgIH0sXG4gICAgICBvbk9wZW46IChzZWxlY3RlZERhdGVzOiBEYXRlW10sIGRhdGVTdHJpbmc6IHN0cmluZywgaW5zdGFuY2U6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmZsYXRwaWNrck9wZW4uZW1pdCh7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHJpbmcsIGluc3RhbmNlIH0pO1xuICAgICAgfSxcbiAgICAgIG9uQ2xvc2U6IChzZWxlY3RlZERhdGVzOiBEYXRlW10sIGRhdGVTdHJpbmc6IHN0cmluZywgaW5zdGFuY2U6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmZsYXRwaWNrckNsb3NlLmVtaXQoeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyaW5nLCBpbnN0YW5jZSB9KTtcbiAgICAgIH0sXG4gICAgICBvbk1vbnRoQ2hhbmdlOiAoXG4gICAgICAgIHNlbGVjdGVkRGF0ZXM6IERhdGVbXSxcbiAgICAgICAgZGF0ZVN0cmluZzogc3RyaW5nLFxuICAgICAgICBpbnN0YW5jZTogYW55XG4gICAgICApID0+IHtcbiAgICAgICAgdGhpcy5mbGF0cGlja3JNb250aENoYW5nZS5lbWl0KHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0cmluZywgaW5zdGFuY2UgfSk7XG4gICAgICB9LFxuICAgICAgb25ZZWFyQ2hhbmdlOiAoXG4gICAgICAgIHNlbGVjdGVkRGF0ZXM6IERhdGVbXSxcbiAgICAgICAgZGF0ZVN0cmluZzogc3RyaW5nLFxuICAgICAgICBpbnN0YW5jZTogYW55XG4gICAgICApID0+IHtcbiAgICAgICAgdGhpcy5mbGF0cGlja3JZZWFyQ2hhbmdlLmVtaXQoeyBzZWxlY3RlZERhdGVzLCBkYXRlU3RyaW5nLCBpbnN0YW5jZSB9KTtcbiAgICAgIH0sXG4gICAgICBvblJlYWR5OiAoc2VsZWN0ZWREYXRlczogRGF0ZVtdLCBkYXRlU3RyaW5nOiBzdHJpbmcsIGluc3RhbmNlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5mbGF0cGlja3JSZWFkeS5lbWl0KHsgc2VsZWN0ZWREYXRlcywgZGF0ZVN0cmluZywgaW5zdGFuY2UgfSk7XG4gICAgICB9LFxuICAgICAgb25WYWx1ZVVwZGF0ZTogKFxuICAgICAgICBzZWxlY3RlZERhdGVzOiBEYXRlW10sXG4gICAgICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcbiAgICAgICAgaW5zdGFuY2U6IGFueVxuICAgICAgKSA9PiB7XG4gICAgICAgIHRoaXMuZmxhdHBpY2tyVmFsdWVVcGRhdGUuZW1pdCh7IHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHJpbmcsIGluc3RhbmNlIH0pO1xuICAgICAgfSxcbiAgICAgIG9uRGF5Q3JlYXRlOiAoXG4gICAgICAgIHNlbGVjdGVkRGF0ZXM6IERhdGVbXSxcbiAgICAgICAgZGF0ZVN0cmluZzogc3RyaW5nLFxuICAgICAgICBpbnN0YW5jZTogYW55LFxuICAgICAgICBkYXlFbGVtZW50OiBIVE1MRWxlbWVudFxuICAgICAgKSA9PiB7XG4gICAgICAgIHRoaXMuZmxhdHBpY2tyRGF5Q3JlYXRlLmVtaXQoe1xuICAgICAgICAgIHNlbGVjdGVkRGF0ZXMsXG4gICAgICAgICAgZGF0ZVN0cmluZyxcbiAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICBkYXlFbGVtZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uc1trZXldID0gKHRoaXMuZGVmYXVsdHMgYXMgYW55KVtrZXldO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9wdGlvbnMudGltZV8yNGhyID0gb3B0aW9ucy50aW1lMjRocjtcbiAgICB0aGlzLmluc3RhbmNlID0gZmxhdHBpY2tyKFxuICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudCxcbiAgICAgIG9wdGlvbnNcbiAgICApIGFzIGZsYXRwaWNrci5JbnN0YW5jZTtcbiAgICB0aGlzLnNldERpc2FibGVkU3RhdGUodGhpcy5pc0Rpc2FibGVkKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgT2JqZWN0LmtleXMoY2hhbmdlcykuZm9yRWFjaChpbnB1dEtleSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0KGlucHV0S2V5IGFzIGFueSwgKHRoaXMgYXMgYW55KVtpbnB1dEtleV0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgY29udmVydGVkVmFsdWU6IGFueSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmNvbnZlcnRNb2RlbFZhbHVlICYmIHRoaXMubW9kZSA9PT0gJ3JhbmdlJyAmJiB2YWx1ZSkge1xuICAgICAgY29udmVydGVkVmFsdWUgPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldERhdGUoY29udmVydGVkVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmbGF0cGlja3IgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgeWV0LCBzdG9yZSB0aGUgdmFsdWUgZm9yIGxhdGVyIHVzZVxuICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSBjb252ZXJ0ZWRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuaW5zdGFuY2UuX2lucHV0LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuaW5zdGFuY2UuX2lucHV0LCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpXG4gIGlucHV0Q2hhbmdlZCgpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICBpZiAodGhpcy5jb252ZXJ0TW9kZWxWYWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICBjYXNlICdtdWx0aXBsZSc6XG4gICAgICAgICAgY29uc3QgZGF0ZXM6IERhdGVbXSA9IHZhbHVlXG4gICAgICAgICAgICAuc3BsaXQoJzsgJylcbiAgICAgICAgICAgIC5tYXAoc3RyID0+XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucGFyc2VEYXRlKFxuICAgICAgICAgICAgICAgIHN0cixcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmNvbmZpZy5kYXRlRm9ybWF0LFxuICAgICAgICAgICAgICAgICF0aGlzLmluc3RhbmNlLmNvbmZpZy5lbmFibGVUaW1lXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUZuKGRhdGVzKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgICAgY29uc3QgW2Zyb20sIHRvXSA9IHZhbHVlXG4gICAgICAgICAgICAuc3BsaXQodGhpcy5pbnN0YW5jZS5sMTBuLnJhbmdlU2VwYXJhdG9yKVxuICAgICAgICAgICAgLm1hcChzdHIgPT5cbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5wYXJzZURhdGUoXG4gICAgICAgICAgICAgICAgc3RyLFxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuY29uZmlnLmRhdGVGb3JtYXQsXG4gICAgICAgICAgICAgICAgIXRoaXMuaW5zdGFuY2UuY29uZmlnLmVuYWJsZVRpbWVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oeyBmcm9tLCB0byB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzaW5nbGUnOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMub25DaGFuZ2VGbihcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UucGFyc2VEYXRlKFxuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5jb25maWcuZGF0ZUZvcm1hdCxcbiAgICAgICAgICAgICAgIXRoaXMuaW5zdGFuY2UuY29uZmlnLmVuYWJsZVRpbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlRm4odmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIEluamVjdGlvblRva2VuLFxuICBQcm92aWRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZsYXRwaWNrckRpcmVjdGl2ZSB9IGZyb20gJy4vZmxhdHBpY2tyLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBGbGF0cGlja3JEZWZhdWx0cyxcbiAgRmxhdHBpY2tyRGVmYXVsdHNJbnRlcmZhY2Vcbn0gZnJvbSAnLi9mbGF0cGlja3ItZGVmYXVsdHMuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBVU0VSX0RFRkFVTFRTID0gbmV3IEluamVjdGlvblRva2VuKCdmbGF0cGlja3IgZGVmYXVsdHMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRzRmFjdG9yeShcbiAgdXNlckRlZmF1bHRzOiBGbGF0cGlja3JEZWZhdWx0c0ludGVyZmFjZVxuKTogRmxhdHBpY2tyRGVmYXVsdHMge1xuICBjb25zdCBkZWZhdWx0czogRmxhdHBpY2tyRGVmYXVsdHMgPSBuZXcgRmxhdHBpY2tyRGVmYXVsdHMoKTtcbiAgT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgdXNlckRlZmF1bHRzKTtcbiAgcmV0dXJuIGRlZmF1bHRzO1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGbGF0cGlja3JEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbRmxhdHBpY2tyRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBGbGF0cGlja3JNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICB1c2VyRGVmYXVsdHM6IEZsYXRwaWNrckRlZmF1bHRzSW50ZXJmYWNlID0ge31cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGbGF0cGlja3JNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFVTRVJfREVGQVVMVFMsXG4gICAgICAgICAgdXNlVmFsdWU6IHVzZXJEZWZhdWx0c1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRmxhdHBpY2tyRGVmYXVsdHMsXG4gICAgICAgICAgdXNlRmFjdG9yeTogZGVmYXVsdHNGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtVU0VSX0RFRkFVTFRTXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7O3lCQWlOc0IsUUFBUTs7Ozt3QkFLUixLQUFLOzs7Ozs2QkFNRCxFQUFFOzs7OzBCQUtKLEtBQUs7Ozs7d0JBS0gsU0FBUzs7Ozs4QkFLUCxRQUFROzs7OzswQkFNWixJQUFJOzs7OzswQkFNTCxPQUFPOzs7OzJCQUtMLEVBQUU7Ozs7NkJBS0EsQ0FBQzs7Ozt1QkFLSyxFQUFFOzs7Ozs2QkFNUixLQUFLOzs7O3NCQUtBLEVBQUU7Ozs7MEJBS1YsS0FBSzs7Ozs2QkFLRixLQUFLOzs7OzBCQUtRLFNBQVM7Ozs7NkJBS3ZCLENBQUM7Ozs7c0JBS1AsS0FBSzs7Ozt1QkFLRSxTQUFTOzs7O3VCQUtULFNBQVM7Ozs7K0JBS1IsQ0FBQzs7OztvQkFLYSxRQUFROzs7O3lCQUs1QixHQUFHOzs7OzBCQUtELEtBQUs7Ozs7bUJBS0csSUFBSSxJQUFJLEVBQUU7Ozs7eUJBVXBCLEdBQUc7Ozs7cUNBS1UsS0FBSzs7OztzQkFLcEIsS0FBSzs7Ozt3QkFLSCxLQUFLOzs7OzttQkFNVixLQUFLOzs7OzJCQUtHLEtBQUs7Ozs7b0JBV1osS0FBSzs7Ozt1QkFLSixFQUFFOzs7O3NCQUtPLFNBQVM7Ozs7aUNBS04sS0FBSzs7OzswQkFLYixDQUFDOzs7O1lBcE12QixVQUFVOzs7Ozs7O0FDNU1YLHVCQWdDYSxnQ0FBZ0MsR0FBUTtJQUNuRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsTUFBTSxrQkFBa0IsQ0FBQzs7SUFDakQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBVUY7Ozs7OztJQStQRSxZQUNVLEtBQ0EsVUFDQTtRQUZBLFFBQUcsR0FBSCxHQUFHO1FBQ0gsYUFBUSxHQUFSLFFBQVE7UUFDUixhQUFRLEdBQVIsUUFBUTs7Ozs4QkEvRHFDLElBQUksWUFBWSxFQUFFOzs7OytCQU1qQixJQUFJLFlBQVksRUFBRTs7OztvQ0FRdEUsSUFBSSxZQUFZLEVBQUU7Ozs7NkJBTWdDLElBQUksWUFBWSxFQUFFOzs7OzhCQU1qQixJQUFJLFlBQVksRUFBRTs7OztvQ0FRckUsSUFBSSxZQUFZLEVBQUU7Ozs7bUNBUWxCLElBQUksWUFBWSxFQUFFOzs7O2tDQVFsQixJQUFJLFlBQVksRUFBRTswQkFHRCxLQUFLOzBCQUdTLFNBQVE7MkJBRTdCLFNBQVE7S0FNbEI7Ozs7SUFFSixlQUFlO1FBQ2IsdUJBQU0sT0FBTyxHQUFRO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQzlCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNqRCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsUUFBUSxFQUFFLENBQUMsYUFBcUIsRUFBRSxVQUFrQixFQUFFLFFBQWE7Z0JBQ2pFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsTUFBTSxFQUFFLENBQUMsYUFBcUIsRUFBRSxVQUFrQixFQUFFLFFBQWE7Z0JBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2xFO1lBQ0QsT0FBTyxFQUFFLENBQUMsYUFBcUIsRUFBRSxVQUFrQixFQUFFLFFBQWE7Z0JBQ2hFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ25FO1lBQ0QsYUFBYSxFQUFFLENBQ2IsYUFBcUIsRUFDckIsVUFBa0IsRUFDbEIsUUFBYTtnQkFFYixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3pFO1lBQ0QsWUFBWSxFQUFFLENBQ1osYUFBcUIsRUFDckIsVUFBa0IsRUFDbEIsUUFBYTtnQkFFYixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3hFO1lBQ0QsT0FBTyxFQUFFLENBQUMsYUFBcUIsRUFBRSxVQUFrQixFQUFFLFFBQWE7Z0JBQ2hFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ25FO1lBQ0QsYUFBYSxFQUFFLENBQ2IsYUFBcUIsRUFDckIsVUFBa0IsRUFDbEIsUUFBYTtnQkFFYixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3pFO1lBQ0QsV0FBVyxFQUFFLENBQ1gsYUFBcUIsRUFDckIsVUFBa0IsRUFDbEIsUUFBYSxFQUNiLFVBQXVCO2dCQUV2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO29CQUMzQixhQUFhO29CQUNiLFVBQVU7b0JBQ1YsUUFBUTtvQkFDUixVQUFVO2lCQUNYLENBQUMsQ0FBQzthQUNKO1NBQ0YsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUc7WUFDOUIsSUFBSSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLEVBQUU7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxtQkFBQyxJQUFJLENBQUMsUUFBZSxHQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzVDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLHFCQUFHLFNBQVMsQ0FDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLE9BQU8sQ0FDYyxDQUFBLENBQUM7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN4Qzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVE7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxtQkFBQyxRQUFlLEdBQUUsbUJBQUMsSUFBVyxHQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDN0QsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3pCOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLHFCQUFJLGNBQWMsR0FBUSxLQUFLLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxFQUFFO1lBQzVELGNBQWMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07O1lBRUwsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7U0FDcEM7S0FDRjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0tBQ3RCOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7S0FDdkI7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3pFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ2pFO1NBQ0Y7S0FDRjs7OztJQUdELFlBQVk7UUFDVix1QkFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ25ELElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUN2RCxRQUFRLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssVUFBVTtvQkFDYix1QkFBTSxLQUFLLEdBQVcsS0FBSzt5QkFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQzt5QkFDWCxHQUFHLENBQUMsR0FBRyxJQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNyQixHQUFHLEVBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUMvQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FDakMsQ0FDRixDQUFDO29CQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU07Z0JBRVIsS0FBSyxPQUFPO29CQUNWLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSzt5QkFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzt5QkFDeEMsR0FBRyxDQUFDLEdBQUcsSUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDckIsR0FBRyxFQUNILElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFDL0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQ2pDLENBQ0YsQ0FBQztvQkFDSixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQzlCLE1BQU07Z0JBRVIsS0FBSyxRQUFRLENBQUM7Z0JBQ2Q7b0JBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FDYixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDckIsS0FBSyxFQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFDL0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQ2pDLENBQ0YsQ0FBQzthQUNMO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7S0FDRjs7O1lBMWNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDN0MsSUFBSSxFQUFFOztvQkFFSixRQUFRLEVBQUUsZUFBZTtpQkFDMUI7YUFDRjs7OztZQTNDQyxVQUFVO1lBYVYsaUJBQWlCO1lBSGpCLFNBQVM7Ozt3QkF1Q1IsS0FBSzt1QkFLTCxLQUFLOzRCQU1MLEtBQUs7eUJBS0wsS0FBSzt1QkFLTCxLQUFLOzZCQUtMLEtBQUs7eUJBTUwsS0FBSzt5QkFNTCxLQUFLOzBCQUtMLEtBQUs7NEJBSUwsS0FBSztzQkFLTCxLQUFLOzRCQU1MLEtBQUs7cUJBS0wsS0FBSzt5QkFLTCxLQUFLOzRCQUtMLEtBQUs7eUJBS0wsS0FBSzs0QkFLTCxLQUFLO3FCQUtMLEtBQUs7c0JBS0wsS0FBSztzQkFLTCxLQUFLOzhCQUtMLEtBQUs7bUJBS0wsS0FBSzt3QkFLTCxLQUFLO3lCQUtMLEtBQUs7a0JBS0wsS0FBSzt3QkFLTCxLQUFLO3dCQUtMLEtBQUs7b0NBS0wsS0FBSzt5QkFLTCxLQUFLO3FCQUtMLEtBQUs7dUJBS0wsS0FBSzswQkFLTCxLQUFLO3NCQU1MLEtBQUs7bUJBS0wsS0FBSztzQkFLTCxLQUFLO3FCQUtMLEtBQUs7Z0NBS0wsS0FBSzs2QkFLTCxNQUFNOzhCQU1OLE1BQU07bUNBTU4sTUFBTTs0QkFRTixNQUFNOzZCQU1OLE1BQU07bUNBTU4sTUFBTTtrQ0FRTixNQUFNO2lDQVFOLE1BQU07MkJBb0tOLFlBQVksU0FBQyxPQUFPOzs7Ozs7O0FDcGN2Qix1QkFZYSxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7Ozs7QUFFdEUseUJBQ0UsWUFBd0M7SUFFeEMsdUJBQU0sUUFBUSxHQUFzQixJQUFJLGlCQUFpQixFQUFFLENBQUM7SUFDNUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEMsT0FBTyxRQUFRLENBQUM7Q0FDakI7QUFNRDs7Ozs7SUFDRSxPQUFPLE9BQU8sQ0FDWixlQUEyQyxFQUFFO1FBRTdDLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFFBQVEsRUFBRSxZQUFZO2lCQUN2QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixVQUFVLEVBQUUsZUFBZTtvQkFDM0IsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUN0QjthQUNGO1NBQ0YsQ0FBQztLQUNIOzs7WUF0QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUM5Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9

      /***/
    },

    /***/
    "r5Jv":
    /*!*******************************************************!*\
      !*** ./node_modules/calendar-utils/calendar-utils.js ***!
      \*******************************************************/

    /*! exports provided: DAYS_OF_WEEK, SECONDS_IN_DAY, getEventsInPeriod, getWeekViewHeader, getDifferenceInDaysWithExclusions, getWeekView, getMonthView, EventValidationErrorMessage, validateEvents */

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

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return __assign.apply(this, arguments);
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
        var events = _a.events,
            excluded = _a.excluded,
            precision = _a.precision,
            absolutePositionedEvents = _a.absolutePositionedEvents,
            viewStart = _a.viewStart,
            viewEnd = _a.viewEnd,
            eventsInPeriod = _a.eventsInPeriod;
        var differenceInSeconds = dateAdapter.differenceInSeconds,
            differenceInDays = dateAdapter.differenceInDays;
        var maxRange = getDifferenceInDaysWithExclusions(dateAdapter, {
          date1: viewStart,
          date2: viewEnd,
          excluded: excluded
        });
        var totalDaysInView = differenceInDays(viewEnd, viewStart) + 1;
        var eventsMapped = eventsInPeriod.filter(function (event) {
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
            var weekEvents = [event].concat(otherRowEvents);
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
            dayStart = _a.dayStart,
            dayEnd = _a.dayEnd,
            weekStartsOn = _a.weekStartsOn,
            excluded = _a.excluded,
            weekendDays = _a.weekendDays,
            segmentHeight = _a.segmentHeight,
            viewStart = _a.viewStart,
            viewEnd = _a.viewEnd;
        var dayViewHourGrid = getDayViewHourGrid(dateAdapter, {
          viewDate: viewDate,
          hourSegments: hourSegments,
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
            eventWidth: 1
          });
          var hours = dayViewHourGrid.map(function (hour) {
            var segments = hour.segments.map(function (segment) {
              var date = setMinutes(setHours(day.date, getHours(segment.date)), getMinutes(segment.date));
              return __assign({}, segment, {
                date: date
              });
            });
            return __assign({}, hour, {
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
            return __assign({}, event, {
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
                return __assign({}, event, {
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
            dayStart = _a.dayStart,
            dayEnd = _a.dayEnd,
            weekendDays = _a.weekendDays,
            segmentHeight = _a.segmentHeight,
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
            events: events,
            excluded: excluded,
            precision: precision,
            absolutePositionedEvents: absolutePositionedEvents,
            viewStart: viewStart,
            viewEnd: viewEnd,
            eventsInPeriod: eventsInPeriod
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
            dayStart: dayStart,
            dayEnd: dayEnd,
            weekStartsOn: weekStartsOn,
            excluded: excluded,
            weekendDays: weekendDays,
            segmentHeight: segmentHeight,
            viewStart: viewStart,
            viewEnd: viewEnd
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
              return getMonth(day.date) === getMonth(viewDate);
            });

            if (isRowInMonth) {
              days = days.concat(row);
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
            segmentHeight = _a.segmentHeight;
        var setMinutes = dateAdapter.setMinutes,
            setHours = dateAdapter.setHours,
            startOfDay = dateAdapter.startOfDay,
            startOfMinute = dateAdapter.startOfMinute,
            endOfDay = dateAdapter.endOfDay,
            differenceInMinutes = dateAdapter.differenceInMinutes;
        var startOfView = setMinutes(setHours(startOfDay(viewDate), sanitiseHours(dayStart.hour)), sanitiseMinutes(dayStart.minute));
        var endOfView = setMinutes(setHours(startOfMinute(endOfDay(viewDate)), sanitiseHours(dayEnd.hour)), sanitiseMinutes(dayEnd.minute));
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
          var hourHeightModifier = hourSegments * segmentHeight / MINUTES_IN_HOUR;
          var top = 0;

          if (eventStart > startOfView) {
            // adjust the difference in minutes if the user's offset is different between the start of the day and the event (e.g. when going to or from DST)
            var eventOffset = eventStart.getTimezoneOffset();
            var startOffset = startOfView.getTimezoneOffset();
            var diff = startOffset - eventOffset;
            top += differenceInMinutes(eventStart, startOfView) + diff;
          }

          top *= hourHeightModifier;
          var startDate = startsBeforeDay ? startOfView : eventStart;
          var endDate = endsAfterDay ? endOfView : eventEnd;
          var height = differenceInMinutes(endDate, startDate);

          if (!event.end) {
            height = segmentHeight;
          } else {
            height *= hourHeightModifier;
          }

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
        var segmentDuration = MINUTES_IN_HOUR / hourSegments;
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

        for (var i = 0; i < HOURS_IN_DAY; i++) {
          var segments = [];

          for (var j = 0; j < hourSegments; j++) {
            var date = addMinutes(addHours(startOfViewDay, i), j * segmentDuration);

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
    "rJ3z":
    /*!******************************************************!*\
      !*** ./node_modules/dom-autoscroller/dist/bundle.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function rJ3z(module, exports, __webpack_require__) {
      "use strict";

      function _interopDefault(ex) {
        return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
      }

      var typeFunc = __webpack_require__(
      /*! type-func */
      "OJSY");

      var animationFramePolyfill = __webpack_require__(
      /*! animation-frame-polyfill */
      "c/fO");

      var domSet = __webpack_require__(
      /*! dom-set */
      "VJNc");

      var domPlane = __webpack_require__(
      /*! dom-plane */
      "PTRy");

      var mousemoveDispatcher = _interopDefault(__webpack_require__(
      /*! dom-mousemove-dispatcher */
      "uzHG"));

      function AutoScroller(elements, options) {
        if (options === void 0) options = {};
        var self = this;
        var maxSpeed = 4,
            scrolling = false;
        this.margin = options.margin || -1; //this.scrolling = false;

        this.scrollWhenOutside = options.scrollWhenOutside || false;
        var point = {},
            pointCB = domPlane.createPointCB(point),
            dispatcher = mousemoveDispatcher(),
            down = false;
        window.addEventListener('mousemove', pointCB, false);
        window.addEventListener('touchmove', pointCB, false);

        if (!isNaN(options.maxSpeed)) {
          maxSpeed = options.maxSpeed;
        }

        this.autoScroll = typeFunc["boolean"](options.autoScroll);
        this.syncMove = typeFunc["boolean"](options.syncMove, false);

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

          while (len--) {
            element[len] = arguments[len];
          }

          domSet.addElements.apply(void 0, [elements].concat(element));
          return this;
        };

        this.remove = function () {
          var element = [],
              len = arguments.length;

          while (len--) {
            element[len] = arguments[len];
          }

          return domSet.removeElements.apply(void 0, [elements].concat(element));
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
        var n = 0,
            current = null,
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
            animationFramePolyfill.requestAnimationFrame(function () {
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
          animationFramePolyfill.cancelAnimationFrame(animationFrame);
          animationFramePolyfill.cancelAnimationFrame(windowAnimationFrame);
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

          if (domSet.hasElement(elements, target)) {
            return target;
          }

          while (target = target.parentNode) {
            if (domSet.hasElement(elements, target)) {
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
            animationFramePolyfill.cancelAnimationFrame(windowAnimationFrame);
            windowAnimationFrame = animationFramePolyfill.requestAnimationFrame(scrollWindow);
          }

          if (!current) {
            return;
          }

          animationFramePolyfill.cancelAnimationFrame(animationFrame);
          animationFrame = animationFramePolyfill.requestAnimationFrame(scrollTick);
        }

        function scrollWindow() {
          autoScroll(hasWindow);
          animationFramePolyfill.cancelAnimationFrame(windowAnimationFrame);
          windowAnimationFrame = animationFramePolyfill.requestAnimationFrame(scrollWindow);
        }

        function scrollTick() {
          if (!current) {
            return;
          }

          autoScroll(current);
          animationFramePolyfill.cancelAnimationFrame(animationFrame);
          animationFrame = animationFramePolyfill.requestAnimationFrame(scrollTick);
        }

        function autoScroll(el) {
          var rect = domPlane.getClientRect(el),
              scrollx,
              scrolly;

          if (point.x < rect.left + self.margin) {
            scrollx = Math.floor(Math.max(-1, (point.x - rect.left) / self.margin - 1) * self.maxSpeed);
          } else if (point.x > rect.right - self.margin) {
            scrollx = Math.ceil(Math.min(1, (point.x - rect.right) / self.margin + 1) * self.maxSpeed);
          } else {
            scrollx = 0;
          }

          if (point.y < rect.top + self.margin) {
            scrolly = Math.floor(Math.max(-1, (point.y - rect.top) / self.margin - 1) * self.maxSpeed);
          } else if (point.y > rect.bottom - self.margin) {
            scrolly = Math.ceil(Math.min(1, (point.y - rect.bottom) / self.margin + 1) * self.maxSpeed);
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
          return domPlane.pointInside(point, el);
        } else {
          return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
        }
      }
      /*
      git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
      git push -u origin master
      */


      module.exports = AutoScrollerFactory; //# sourceMappingURL=bundle.js.map

      /***/
    },

    /***/
    "uMIJ":
    /*!******************************************!*\
      !*** ./node_modules/array-from/index.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function uMIJ(module, exports, __webpack_require__) {
      module.exports = typeof Array.from === 'function' ? Array.from : __webpack_require__(
      /*! ./polyfill */
      "lipz");
      /***/
    },

    /***/
    "uzHG":
    /*!**************************************************************!*\
      !*** ./node_modules/dom-mousemove-dispatcher/dist/bundle.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function uzHG(module, exports, __webpack_require__) {
      "use strict";

      var objectCreate = void 0;

      if (typeof Object.create != 'function') {
        objectCreate = function (undefined) {
          var Temp = function Temp() {};

          return function (prototype, propertiesObject) {
            if (prototype !== Object(prototype) && prototype !== null) {
              throw TypeError('Argument must be an object, or null');
            }

            Temp.prototype = prototype || {};
            var result = new Temp();
            Temp.prototype = null;

            if (propertiesObject !== undefined) {
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
          if (element) element.removeEventListener('mousemove', onMove, false);
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
          if (initMove[mouseEventProps[i]] !== undefined) settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
        }

        return settings;
      }

      function setSpecial(e, data) {
        console.log('data ', data);
        e.data = data || {};
        e.dispatched = 'mousemove';
      }
      /*
      http://marcgrabanski.com/simulating-mouse-click-events-in-javascript/
      */


      module.exports = createDispatcher; //# sourceMappingURL=bundle.js.map

      /***/
    },

    /***/
    "xijO":
    /*!************************************************!*\
      !*** ./node_modules/iselement/module/index.js ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function xijO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

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

      /* harmony default export */


      __webpack_exports__["default"] = function (input) {
        return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
      };
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


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
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
          translateX = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$1');
          translateY = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$2');
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


      function isWithinBoundingY(_ref52) {
        var clientY = _ref52.clientY,
            rect = _ref52.rect;
        return clientY >= rect.top && clientY <= rect.bottom;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      function isWithinBoundingX(_ref53) {
        var clientX = _ref53.clientX,
            rect = _ref53.rect;
        return clientX >= rect.left && clientX <= rect.right;
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      function getResizeEdges(_ref54) {
        var clientX = _ref54.clientX,
            clientY = _ref54.clientY,
            elm = _ref54.elm,
            allowedEdges = _ref54.allowedEdges,
            cursorPrecision = _ref54.cursorPrecision;

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


      function getEdgesDiff(_ref55) {
        var edges = _ref55.edges,
            initialRectangle = _ref55.initialRectangle,
            newRectangle = _ref55.newRectangle;

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

          this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
           */

          this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
           */

          this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          /**
           * @hidden
           */

          this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          /**
           * @hidden
           */

          this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          /**
           * @hidden
           */

          this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.resizeEdges$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
        }
        /**
         * @hidden
         * @return {?}
         */


        _createClass(ResizableDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            /** @type {?} */
            var mousedown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerDown, this.mousedown);
            /** @type {?} */

            var mousemove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerMove, this.mousemove).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref56) {
              var event = _ref56.event;

              if (currentResize) {
                event.preventDefault();
              }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
            /** @type {?} */

            var mouseup$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerUp, this.mouseup);
            /** @type {?} */

            var currentResize;
            /** @type {?} */

            var removeGhostElement = function removeGhostElement() {
              if (currentResize && currentResize.clonedNode) {
                _this24.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);

                _this24.renderer.setStyle(_this24.elm.nativeElement, 'visibility', 'inherit');
              }
            };
            /** @type {?} */


            var getResizeCursors = function getResizeCursors() {
              return Object.assign({}, DEFAULT_RESIZE_CURSORS, _this24.resizeCursors);
            };

            this.resizeEdges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.resizeEdges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
              return _this24.resizeEdges && Object.keys(_this24.resizeEdges).some(function (edge) {
                return !!_this24.resizeEdges[edge];
              });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (legacyResizeEdgesEnabled) {
              return legacyResizeEdgesEnabled ? mousemove$ : rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(this.mouseMoveThrottleMS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (_ref57) {
              var clientX = _ref57.clientX,
                  clientY = _ref57.clientY;

              /** @type {?} */
              var resizeEdges = getResizeEdges({
                clientX: clientX,
                clientY: clientY,
                elm: _this24.elm,
                allowedEdges: _this24.resizeEdges,
                cursorPrecision: _this24.resizeCursorPrecision
              });
              /** @type {?} */

              var resizeCursors = getResizeCursors();

              if (!currentResize) {
                /** @type {?} */
                var cursor = getResizeCursor(resizeEdges, resizeCursors);

                _this24.renderer.setStyle(_this24.elm.nativeElement, 'cursor', cursor);
              }

              _this24.setElementClass(_this24.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);

              _this24.setElementClass(_this24.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);

              _this24.setElementClass(_this24.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);

              _this24.setElementClass(_this24.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
            });
            /** @type {?} */

            var mousedrag = mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (startCoords) {
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
                  if (_this24.resizeSnapGrid.left && currentResize.edges.left) {
                    snapGrid.x = +_this24.resizeSnapGrid.left;
                  } else if (_this24.resizeSnapGrid.right && currentResize.edges.right) {
                    snapGrid.x = +_this24.resizeSnapGrid.right;
                  }

                  if (_this24.resizeSnapGrid.top && currentResize.edges.top) {
                    snapGrid.y = +_this24.resizeSnapGrid.top;
                  } else if (_this24.resizeSnapGrid.bottom && currentResize.edges.bottom) {
                    snapGrid.y = +_this24.resizeSnapGrid.bottom;
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
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (coords) {
                  return [, coords];
                })), mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])())).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref58) {
                  var _ref59 = _slicedToArray(_ref58, 2),
                      previousCoords = _ref59[0],
                      newCoords = _ref59[1];

                  return [previousCoords ? getDiff(previousCoords) : previousCoords, getDiff(newCoords)];
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_ref60) {
                  var _ref61 = _slicedToArray(_ref60, 2),
                      previousCoords = _ref61[0],
                      newCoords = _ref61[1];

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
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref62) {
                  var _ref63 = _slicedToArray(_ref62, 2),
                      newCoords = _ref63[1];

                  /** @type {?} */
                  var snapGrid = getSnapGrid();
                  return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                  };
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mouseup$, mousedown$)))
              );
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function () {
              return !!currentResize;
            }));
            mousedrag.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref64) {
              var clientX = _ref64.clientX,
                  clientY = _ref64.clientY;
              return getNewBoundingRectangle(
              /** @type {?} */
              currentResize.startingRect,
              /** @type {?} */
              currentResize.edges, clientX, clientY);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newBoundingRect) {
              return _this24.allowNegativeResizes || !!(newBoundingRect.height && newBoundingRect.width && newBoundingRect.height > 0 && newBoundingRect.width > 0);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newBoundingRect) {
              return _this24.validateResize ? _this24.validateResize({
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
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (newBoundingRect) {
              if (currentResize && currentResize.clonedNode) {
                _this24.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(newBoundingRect.height, "px"));

                _this24.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(newBoundingRect.width, "px"));

                _this24.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(newBoundingRect.top, "px"));

                _this24.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(newBoundingRect.left, "px"));
              }

              _this24.zone.run(function () {
                _this24.resizing.emit({
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

              /** @type {?} */
              currentResize.currentRect = newBoundingRect;
            });
            mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref65) {
              var clientX = _ref65.clientX,
                  clientY = _ref65.clientY,
                  edges = _ref65.edges;
              return edges || getResizeEdges({
                clientX: clientX,
                clientY: clientY,
                elm: _this24.elm,
                allowedEdges: _this24.resizeEdges,
                cursorPrecision: _this24.resizeCursorPrecision
              });
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (edges) {
              return Object.keys(edges).length > 0;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (edges) {
              if (currentResize) {
                removeGhostElement();
              }
              /** @type {?} */


              var startingRect = getElementRect(_this24.elm, _this24.ghostElementPositioning);
              currentResize = {
                edges: edges,
                startingRect: startingRect,
                currentRect: startingRect
              };
              /** @type {?} */

              var resizeCursors = getResizeCursors();
              /** @type {?} */

              var cursor = getResizeCursor(currentResize.edges, resizeCursors);

              _this24.renderer.setStyle(document.body, 'cursor', cursor);

              _this24.setElementClass(_this24.elm, RESIZE_ACTIVE_CLASS, true);

              if (_this24.enableGhostResize) {
                currentResize.clonedNode = _this24.elm.nativeElement.cloneNode(true);

                _this24.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);

                _this24.renderer.setStyle(_this24.elm.nativeElement, 'visibility', 'hidden');

                _this24.renderer.setStyle(currentResize.clonedNode, 'position', _this24.ghostElementPositioning);

                _this24.renderer.setStyle(currentResize.clonedNode, 'left', "".concat(currentResize.startingRect.left, "px"));

                _this24.renderer.setStyle(currentResize.clonedNode, 'top', "".concat(currentResize.startingRect.top, "px"));

                _this24.renderer.setStyle(currentResize.clonedNode, 'height', "".concat(currentResize.startingRect.height, "px"));

                _this24.renderer.setStyle(currentResize.clonedNode, 'width', "".concat(currentResize.startingRect.width, "px"));

                _this24.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));

                _this24.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);

                /** @type {?} */
                currentResize.clonedNode.scrollTop =
                /** @type {?} */
                currentResize.startingRect.scrollTop;

                /** @type {?} */
                currentResize.clonedNode.scrollLeft =
                /** @type {?} */
                currentResize.startingRect.scrollLeft;
              }

              _this24.zone.run(function () {
                _this24.resizeStart.emit({
                  edges: getEdgesDiff({
                    edges: edges,
                    initialRectangle: startingRect,
                    newRectangle: startingRect
                  }),
                  rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                });
              });
            });
            mouseup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function () {
              if (currentResize) {
                _this24.renderer.removeClass(_this24.elm.nativeElement, RESIZE_ACTIVE_CLASS);

                _this24.renderer.setStyle(document.body, 'cursor', '');

                _this24.renderer.setStyle(_this24.elm.nativeElement, 'cursor', '');

                _this24.zone.run(function () {
                  _this24.resizeEnd.emit({
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
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlResizable]'
        }]
      }];
      /** @nocollapse */

      ResizableDirective.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }];
      };

      ResizableDirective.propDecorators = {
        validateResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeEdges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        enableGhostResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeSnapGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeCursors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeCursorPrecision: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        ghostElementPositioning: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        allowNegativeResizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        mouseMoveThrottleMS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        resizing: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        resizeEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };

      var PointerEventListeners = /*#__PURE__*/function () {
        _createClass(PointerEventListeners, null, [{
          key: "getInstance",
          // tslint:disable-line

          /**
           * @param {?} renderer
           * @param {?} zone
           * @return {?}
           */
          value: function getInstance(renderer, zone) {
            if (!PointerEventListeners.instance) {
              PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
            }

            return PointerEventListeners.instance;
          }
          /**
           * @param {?} renderer
           * @param {?} zone
           */

        }]);

        function PointerEventListeners(renderer, zone) {
          _classCallCheck(this, PointerEventListeners);

          this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
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
              unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
                observer.next({
                  clientX: event.touches[0].clientX,
                  clientY: event.touches[0].clientY,
                  event: event
                });
              });
            });
            return function () {
              unsubscribeMouseDown();
              unsubscribeTouchStart();
            };
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
          this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
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
              unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
                observer.next({
                  clientX: event.targetTouches[0].clientX,
                  clientY: event.targetTouches[0].clientY,
                  event: event
                });
              });
            });
            return function () {
              unsubscribeMouseMove();
              unsubscribeTouchMove();
            };
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
          this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
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
            });
            return function () {
              unsubscribeMouseUp();
              unsubscribeTouchEnd();
              unsubscribeTouchCancel();
            };
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        }

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
       */


      var ResizeHandleDirective = /*#__PURE__*/function () {
        /**
         * @param {?} renderer
         * @param {?} element
         * @param {?} zone
         * @param {?} resizable
         */
        function ResizeHandleDirective(renderer, element, zone, resizable) {
          _classCallCheck(this, ResizeHandleDirective);

          this.renderer = renderer;
          this.element = element;
          this.zone = zone;
          this.resizable = resizable;
          /**
           * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
           */

          this.resizeEdges = {};
          this.eventListeners = {};
        }
        /**
         * @return {?}
         */


        _createClass(ResizeHandleDirective, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
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
            var _this25 = this;

            event.preventDefault();
            this.zone.runOutsideAngular(function () {
              if (!_this25.eventListeners.touchmove) {
                _this25.eventListeners.touchmove = _this25.renderer.listen(_this25.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                  _this25.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
                });
              }

              if (!_this25.eventListeners.mousemove) {
                _this25.eventListeners.mousemove = _this25.renderer.listen(_this25.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                  _this25.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
                });
              }

              _this25.resizable.mousedown.next({
                clientX: clientX,
                clientY: clientY,
                edges: _this25.resizeEdges
              });
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
            var _this26 = this;

            this.zone.runOutsideAngular(function () {
              _this26.unsubscribeEventListeners();

              _this26.resizable.mouseup.next({
                clientX: clientX,
                clientY: clientY,
                edges: _this26.resizeEdges
              });
            });
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
            var _this27 = this;

            Object.keys(this.eventListeners).forEach(function (type) {
              /** @type {?} */
              _this27.eventListeners[type]();

              delete _this27.eventListeners[type];
            });
          }
        }]);

        return ResizeHandleDirective;
      }();

      ResizeHandleDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[mwlResizeHandle]'
        }]
      }];
      /** @nocollapse */

      ResizeHandleDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: ResizableDirective
        }];
      };

      ResizeHandleDirective.propDecorators = {
        resizeEdges: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onMousedown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mousedown', ['$event', '$event.clientX', '$event.clientY']]
        }],
        onMouseup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['touchend', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['touchcancel', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['mouseup', ['$event.clientX', '$event.clientY']]
        }]
      };
      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var ResizableModule = function ResizableModule() {
        _classCallCheck(this, ResizableModule);
      };

      ResizableModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
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
    },

    /***/
    "zwY0":
    /*!**************************************************!*\
      !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function zwY0(module, exports, __webpack_require__) {
      /* flatpickr v4.6.3, @license MIT */
      (function (global, factory) {
        true ? module.exports = factory() : undefined;
      })(this, function () {
        'use strict';
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0
          THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.
          See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */

        var _assign = function __assign() {
          _assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return _assign.apply(this, arguments);
        };

        var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
        var defaults = {
          _disable: [],
          _enable: [],
          allowInput: false,
          altFormat: "F j, Y",
          altInput: false,
          altInputClass: "form-control input",
          animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
          ariaDateFormat: "F j, Y",
          clickOpens: true,
          closeOnSelect: true,
          conjunction: ", ",
          dateFormat: "Y-m-d",
          defaultHour: 12,
          defaultMinute: 0,
          defaultSeconds: 0,
          disable: [],
          disableMobile: false,
          enable: [],
          enableSeconds: false,
          enableTime: false,
          errorHandler: function errorHandler(err) {
            return typeof console !== "undefined" && console.warn(err);
          },
          getWeek: function getWeek(givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0); // Thursday in current week decides the year.

            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7); // January 4 is always in week 1.

            var week1 = new Date(date.getFullYear(), 0, 4); // Adjust to Thursday in week 1 and count number of weeks from date to week1.

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
          hourAriaLabel: "Hour",
          minuteAriaLabel: "Minute",
          time_24hr: false
        };

        var pad = function pad(number) {
          return ("0" + number).slice(-2);
        };

        var _int = function _int(bool) {
          return bool === true ? 1 : 0;
        };
        /* istanbul ignore next */


        function debounce(func, wait, immediate) {
          if (immediate === void 0) {
            immediate = false;
          }

          var timeout;
          return function () {
            var context = this,
                args = arguments;
            timeout !== null && clearTimeout(timeout);
            timeout = window.setTimeout(function () {
              timeout = null;
              if (!immediate) func.apply(context, args);
            }, wait);
            if (immediate && !timeout) func.apply(context, args);
          };
        }

        var arrayify = function arrayify(obj) {
          return obj instanceof Array ? obj : [obj];
        };

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
          while (node.firstChild) {
            node.removeChild(node.firstChild);
          }
        }

        function findParent(node, condition) {
          if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
          return undefined; // nothing found
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

          if (opts !== undefined) for (var key in opts) {
            numInput.setAttribute(key, opts[key]);
          }
          wrapper.appendChild(numInput);
          wrapper.appendChild(arrowUp);
          wrapper.appendChild(arrowDown);
          return wrapper;
        }

        function getEventTarget(event) {
          if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
          }

          return event.target;
        }

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
            dateObj.setHours(parseFloat(hour));
          },
          H: function H(dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
          },
          J: function J(dateObj, day) {
            dateObj.setDate(parseFloat(day));
          },
          K: function K(dateObj, amPM, locale) {
            dateObj.setHours(dateObj.getHours() % 12 + 12 * _int(new RegExp(locale.amPM[1], "i").test(amPM)));
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
            dateObj.setHours(parseFloat(hour));
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
          D: "(\\w+)",
          F: "(\\w+)",
          G: "(\\d\\d|\\d)",
          H: "(\\d\\d|\\d)",
          J: "(\\d\\d|\\d)\\w+",
          K: "",
          M: "(\\w+)",
          S: "(\\d\\d|\\d)",
          U: "(.+)",
          W: "(\\d\\d|\\d)",
          Y: "(\\d{4})",
          Z: "(.+)",
          d: "(\\d\\d|\\d)",
          h: "(\\d\\d|\\d)",
          i: "(\\d\\d|\\d)",
          j: "(\\d\\d|\\d)",
          l: "(\\w+)",
          m: "(\\d\\d|\\d)",
          n: "(\\d\\d|\\d)",
          s: "(\\d\\d|\\d)",
          u: "(.+)",
          w: "(\\d\\d|\\d)",
          y: "(\\d{2})"
        };
        var formats = {
          // get the date in UTC
          Z: function Z(date) {
            return date.toISOString();
          },
          // weekday name, short, e.g. Thu
          D: function D(date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
          },
          // full month name e.g. January
          F: function F(date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
          },
          // padded hour 1-12
          G: function G(date, locale, options) {
            return pad(formats.h(date, locale, options));
          },
          // hours with leading zero e.g. 03
          H: function H(date) {
            return pad(date.getHours());
          },
          // day (1-30) with ordinal suffix e.g. 1st, 2nd
          J: function J(date, locale) {
            return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
          },
          // AM/PM
          K: function K(date, locale) {
            return locale.amPM[_int(date.getHours() > 11)];
          },
          // shorthand month e.g. Jan, Sep, Oct, etc
          M: function M(date, locale) {
            return monthToStr(date.getMonth(), true, locale);
          },
          // seconds 00-59
          S: function S(date) {
            return pad(date.getSeconds());
          },
          // unix timestamp
          U: function U(date) {
            return date.getTime() / 1000;
          },
          W: function W(date, _, options) {
            return options.getWeek(date);
          },
          // full year e.g. 2016
          Y: function Y(date) {
            return date.getFullYear();
          },
          // day in month, padded (01-30)
          d: function d(date) {
            return pad(date.getDate());
          },
          // hour from 1-12 (am/pm)
          h: function h(date) {
            return date.getHours() % 12 ? date.getHours() % 12 : 12;
          },
          // minutes, padded with leading zero e.g. 09
          i: function i(date) {
            return pad(date.getMinutes());
          },
          // day in month (1-30)
          j: function j(date) {
            return date.getDate();
          },
          // weekday name, full, e.g. Thursday
          l: function l(date, locale) {
            return locale.weekdays.longhand[date.getDay()];
          },
          // padded month number (01-12)
          m: function m(date) {
            return pad(date.getMonth() + 1);
          },
          // the month number (1-12)
          n: function n(date) {
            return date.getMonth() + 1;
          },
          // seconds 0-59
          s: function s(date) {
            return date.getSeconds();
          },
          // Unix Milliseconds
          u: function u(date) {
            return date.getTime();
          },
          // number of the day of the week
          w: function w(date) {
            return date.getDay();
          },
          // last two digits of year e.g. 16 for 2016
          y: function y(date) {
            return String(date.getFullYear()).substring(2);
          }
        };

        var createDateFormatter = function createDateFormatter(_a) {
          var _b = _a.config,
              config = _b === void 0 ? defaults : _b,
              _c = _a.l10n,
              l10n = _c === void 0 ? english : _c;
          return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;

            if (config.formatDate !== undefined) {
              return config.formatDate(dateObj, frmt, locale);
            }

            return frmt.split("").map(function (c, i, arr) {
              return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
            }).join("");
          };
        };

        var createDateParser = function createDateParser(_a) {
          var _b = _a.config,
              config = _b === void 0 ? defaults : _b,
              _c = _a.l10n,
              l10n = _c === void 0 ? english : _c;
          return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date) return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var dateOrig = date;
            if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined // timestamp
            ) // create a copy
              parsedDate = new Date(date);else if (typeof date === "string") {
              // date string
              var format = givenFormat || (config || defaults).dateFormat;
              var datestr = String(date).trim();

              if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
              } else if (/Z$/.test(datestr) || /GMT$/.test(datestr) // datestrings w/ timezone
              ) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
                parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
                var matched = void 0,
                    ops = [];

                for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                  var token_1 = format[i];
                  var isBackSlash = token_1 === "\\";
                  var escaped = format[i - 1] === "\\" || isBackSlash;

                  if (tokenRegex[token_1] && !escaped) {
                    regexStr += tokenRegex[token_1];
                    var match = new RegExp(regexStr).exec(date);

                    if (match && (matched = true)) {
                      ops[token_1 !== "Y" ? "push" : "unshift"]({
                        fn: revFormat[token_1],
                        val: match[++matchIndex]
                      });
                    }
                  } else if (!isBackSlash) regexStr += "."; // don't really care


                  ops.forEach(function (_a) {
                    var fn = _a.fn,
                        val = _a.val;
                    return parsedDate = fn(parsedDate, val, locale) || parsedDate;
                  });
                }

                parsedDate = matched ? parsedDate : undefined;
              }
            }
            /* istanbul ignore next */

            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
              config.errorHandler(new Error("Invalid date provided: " + dateOrig));
              return undefined;
            }

            if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
          };
        };
        /**
         * Compute the difference in dates, measured in ms
         */


        function compareDates(date1, date2, timeless) {
          if (timeless === void 0) {
            timeless = true;
          }

          if (timeless !== false) {
            return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
          }

          return date1.getTime() - date2.getTime();
        }

        var isBetween = function isBetween(ts, ts1, ts2) {
          return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
        };

        var duration = {
          DAY: 86400000
        };

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

        var DEBOUNCED_CHANGE_MS = 300;

        function FlatpickrInstance(element, instanceConfig) {
          var self = {
            config: _assign({}, defaults, flatpickr.defaultConfig),
            l10n: english
          };
          self.parseDate = createDateParser({
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
          self._createElement = createElement;
          self.destroy = destroy;
          self.isEnabled = isEnabled;
          self.jumpToDate = jumpToDate;
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
                setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : undefined);
              }

              updateValue(false);
            }

            setCalendarWidth();
            self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* TODO: investigate this further
                       Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
                       However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */

            if (!self.isMobile && isSafari) {
              positionCalendar();
            }

            triggerEvent("onReady");
          }

          function bindToInstance(fn) {
            return fn.bind(self);
          }

          function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1) return;else if (config.noCalendar !== true) {
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
          /**
           * The handler for all events targeting the time inputs
           */


          function updateTime(e) {
            if (self.selectedDates.length === 0) {
              setDefaultTime();
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
            return hour % 12 + 12 * _int(amPM === self.l10n.amPM[1]);
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
          /**
           * Syncs the selected date object time with user's time input
           */


          function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined) return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
                minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
                seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

            if (self.amPM !== undefined) {
              hours = ampm2military(hours, self.amPM.textContent);
            }

            var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
            var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

            if (limitMaxHours) {
              var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
              hours = Math.min(hours, maxTime.getHours());
              if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
              if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
            }

            if (limitMinHours) {
              var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
              hours = Math.max(hours, minTime.getHours());
              if (hours === minTime.getHours()) minutes = Math.max(minutes, minTime.getMinutes());
              if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
            }

            setHours(hours, minutes, seconds);
          }
          /**
           * Syncs time input values with a date
           */


          function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
          }

          function setDefaultHours() {
            var hours = self.config.defaultHour;
            var minutes = self.config.defaultMinute;
            var seconds = self.config.defaultSeconds;

            if (self.config.minDate !== undefined) {
              var minHr = self.config.minDate.getHours();
              var minMinutes = self.config.minDate.getMinutes();
              hours = Math.max(hours, minHr);
              if (hours === minHr) minutes = Math.max(minMinutes, minutes);
              if (hours === minHr && minutes === minMinutes) seconds = self.config.minDate.getSeconds();
            }

            if (self.config.maxDate !== undefined) {
              var maxHr = self.config.maxDate.getHours();
              var maxMinutes = self.config.maxDate.getMinutes();
              hours = Math.min(hours, maxHr);
              if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
              if (hours === maxHr && minutes === maxMinutes) seconds = self.config.maxDate.getSeconds();
            }

            setHours(hours, minutes, seconds);
          }
          /**
           * Sets the hours, minutes, and optionally seconds
           * of the latest selected date object and the
           * corresponding time inputs
           * @param {Number} hours the hour. whether its military
           *                 or am-pm gets inferred from config
           * @param {Number} minutes the minutes
           * @param {Number} seconds the seconds (optional)
           */


          function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
              self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }

            if (!self.hourElement || !self.minuteElement || self.isMobile) return;
            self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * _int(hours % 12 === 0) : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[_int(hours >= 12)];
            if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
          }
          /**
           * Handles the year input and incrementing events
           * @param {Event} event the keyup or increment event
           */


          function onYearInput(event) {
            var year = parseInt(event.target.value) + (event.delta || 0);

            if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
              changeYear(year);
            }
          }
          /**
           * Essentially addEventListener + tracking
           * @param {Element} element the element to addEventListener to
           * @param {String} event the event name
           * @param {Function} handler the event handler
           */


          function bind(element, event, handler, options) {
            if (event instanceof Array) return event.forEach(function (ev) {
              return bind(element, ev, handler, options);
            });
            if (element instanceof Array) return element.forEach(function (el) {
              return bind(el, event, handler, options);
            });
            element.addEventListener(event, handler, options);

            self._handlers.push({
              element: element,
              event: event,
              handler: handler,
              options: options
            });
          }
          /**
           * A mousedown handler which mimics click.
           * Minimizes latency, since we don't need to wait for mouseup in most cases.
           * Also, avoids handling right clicks.
           *
           * @param {Function} handler the event handler
           */


          function onClick(handler) {
            return function (evt) {
              evt.which === 1 && handler(evt);
            };
          }

          function triggerChange() {
            triggerEvent("onChange");
          }
          /**
           * Adds all the necessary event listeners
           */


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

            var debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
              if (self.config.mode === "range") onMouseOver(e.target);
            });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.inline && !self.config["static"]) bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", onClick(documentClick));
            bind(window.document, "focus", documentClick, {
              capture: true
            });

            if (self.config.clickOpens === true) {
              bind(self._input, "focus", self.open);
              bind(self._input, "mousedown", onClick(self.open));
            }

            if (self.daysContainer !== undefined) {
              bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
              bind(self.monthNav, ["keyup", "increment"], onYearInput);
              bind(self.daysContainer, "mousedown", onClick(selectDate));
            }

            if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
              var selText = function selText(e) {
                return e.target.select();
              };

              bind(self.timeContainer, ["increment"], updateTime);
              bind(self.timeContainer, "blur", updateTime, {
                capture: true
              });
              bind(self.timeContainer, "mousedown", onClick(timeIncrement));
              bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
              if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
                return self.secondElement && self.secondElement.select();
              });

              if (self.amPM !== undefined) {
                bind(self.amPM, "mousedown", onClick(function (e) {
                  updateTime(e);
                  triggerChange();
                }));
              }
            }
          }
          /**
           * Set the calendar view to a particular date.
           * @param {Date} jumpDate the date to set the view to
           * @param {boolean} triggerChange if change events should be triggered
           */


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
              /* istanbul ignore next */
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
          /**
           * The up/down arrow handler for time inputs
           * @param {Event} e the click event
           */


          function timeIncrement(e) {
            if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
          }
          /**
           * Increments/decrements the value of input associ-
           * ated with the up/down arrow by dispatching an
           * "increment" event on the input.
           *
           * @param {Event} e the click event
           * @param {Number} delta the diff (usually 1 or -1)
           * @param {Element} inputElem the input element
           */


          function incrementNumInput(e, delta, inputElem) {
            var target = e && e.target;
            var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
            var event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
          }

          function build() {
            var fragment = window.document.createDocumentFragment();
            self.calendarContainer = createElement("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;

            if (!self.config.noCalendar) {
              fragment.appendChild(buildMonthNav());
              self.innerContainer = createElement("div", "flatpickr-innerContainer");

              if (self.config.weekNumbers) {
                var _a = buildWeeks(),
                    weekWrapper = _a.weekWrapper,
                    weekNumbers = _a.weekNumbers;

                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
              }

              self.rContainer = createElement("div", "flatpickr-rContainer");
              self.rContainer.appendChild(buildWeekdays());

              if (!self.daysContainer) {
                self.daysContainer = createElement("div", "flatpickr-days");
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

            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
            toggleClass(self.calendarContainer, "animate", self.config.animate === true);
            toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

            if (self.config.inline || self.config["static"]) {
              self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

              if (self.config.inline) {
                if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
              }

              if (self.config["static"]) {
                var wrapper = createElement("div", "flatpickr-wrapper");
                if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput) wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
              }
            }

            if (!self.config["static"] && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
          }

          function createDay(className, date, dayNumber, i) {
            var dateIsEnabled = isEnabled(date, true),
                dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

            if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
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
                  toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
                  toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
                  if (className === "nextMonthDay") dayElement.classList.add("inRange");
                }
              }
            } else {
              dayElement.classList.add("flatpickr-disabled");
            }

            if (self.config.mode === "range") {
              if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
            }

            if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
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
            var dayFocused = isInView(document.activeElement || document.body);
            var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined) return self._input.focus();
            if (!dayFocused) return focusOnDayElem(startElem);
            getNextAvailableDay(startElem, offset);
          }

          function buildMonthDays(year, month) {
            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
            var daysInMonth = self.utils.getDaysInMonth(month),
                days = window.document.createDocumentFragment(),
                isMultiMonth = self.config.showMonths > 1,
                prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
                nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            var dayNumber = prevMonthDays + 1 - firstOfMonth,
                dayIndex = 0; // prepend days from the ending of previous month

            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
              days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            } // Start at 1 since there is no 0th day


            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
              days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            } // append days from the next month


            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
              days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            } //updateNavigationCurrentMonth();


            var dayContainer = createElement("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
          }

          function buildDays() {
            if (self.daysContainer === undefined) {
              return;
            }

            clearNode(self.daysContainer); // TODO: week numbers for each month

            if (self.weekNumbers) clearNode(self.weekNumbers);
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
              var month = createElement("option", "flatpickr-monthDropdown-month");
              month.value = new Date(self.currentYear, i).getMonth().toString();
              month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
              month.tabIndex = -1;

              if (self.currentMonth === i) {
                month.selected = true;
              }

              self.monthsDropdownContainer.appendChild(month);
            }
          }

          function buildMonth() {
            var container = createElement("div", "flatpickr-month");
            var monthNavFragment = window.document.createDocumentFragment();
            var monthElement;

            if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
              monthElement = createElement("span", "cur-month");
            } else {
              self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
              bind(self.monthsDropdownContainer, "change", function (e) {
                var target = e.target;
                var selectedMonth = parseInt(target.value, 10);
                self.changeMonth(selectedMonth - self.currentMonth);
                triggerEvent("onMonthChange");
              });
              buildMonthSwitch();
              monthElement = self.monthsDropdownContainer;
            }

            var yearInput = createNumberInput("cur-year", {
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

            var currentMonth = createElement("div", "flatpickr-current-month");
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
            clearNode(self.monthNav);
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
            self.monthNav = createElement("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = createElement("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
              get: function get() {
                return self.__hidePrevMonthArrow;
              },
              set: function set(bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                  toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
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
                  toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
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
            self.timeContainer = createElement("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            var separator = createElement("span", "flatpickr-time-separator", ":");
            var hourInput = createNumberInput("flatpickr-hour", {
              "aria-label": self.l10n.hourAriaLabel
            });
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            var minuteInput = createNumberInput("flatpickr-minute", {
              "aria-label": self.l10n.minuteAriaLabel
            });
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? self.config.defaultHour : military2ampm(self.config.defaultHour));
            self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
            self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
            self.minuteElement.setAttribute("min", "0");
            self.minuteElement.setAttribute("max", "59");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

            if (self.config.enableSeconds) {
              self.timeContainer.classList.add("hasSeconds");
              var secondInput = createNumberInput("flatpickr-second");
              self.secondElement = secondInput.getElementsByTagName("input")[0];
              self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);
              self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
              self.secondElement.setAttribute("min", "0");
              self.secondElement.setAttribute("max", "59");
              self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
              self.timeContainer.appendChild(secondInput);
            }

            if (!self.config.time_24hr) {
              // add self.amPM if appropriate
              self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[_int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
              self.amPM.title = self.l10n.toggleTitle;
              self.amPM.tabIndex = -1;
              self.timeContainer.appendChild(self.amPM);
            }

            return self.timeContainer;
          }

          function buildWeekdays() {
            if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");else clearNode(self.weekdayContainer);

            for (var i = self.config.showMonths; i--;) {
              var container = createElement("div", "flatpickr-weekdaycontainer");
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
            var weekdays = self.l10n.weekdays.shorthand.slice();

            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
              weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
            }

            for (var i = self.config.showMonths; i--;) {
              self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
          }
          /* istanbul ignore next */


          function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            var weekWrapper = createElement("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            var weekNumbers = createElement("div", "flatpickr-weeks");
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

            self.showTimeInput = false;

            if (self.config.enableTime === true) {
              setDefaultHours();
            }

            self.redraw();
            if (triggerChangeEvent) // triggerChangeEvent is true (default) or an Event
              triggerEvent("onChange");
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
              var h = self._handlers[i];
              h.element.removeEventListener(h.event, h.handler, h.options);
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
                  while (wrapper.firstChild) {
                    wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                  }

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
              self.input.value = "";
            }

            ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
              try {
                delete self[k];
              } catch (_) {}
            });
          }

          function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
            return self.calendarContainer.contains(elem);
          }

          function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
              var eventTarget_1 = getEventTarget(e);
              var isCalendarElement = isCalendarElem(eventTarget_1);
              var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || // web components
              // e.path is not present in all browsers. circumventing typechecks
              e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
              var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
              var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                return elem.contains(eventTarget_1);
              });

              if (lostFocus && isIgnored) {
                if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
                  updateTime();
                }

                self.close();

                if (self.config.mode === "range" && self.selectedDates.length === 1) {
                  self.clear(false);
                  self.redraw();
                }
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
            if (timeless === void 0) {
              timeless = true;
            }

            var dateToCheck = self.parseDate(date, undefined, timeless); // timeless

            if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
            if (self.config.enable.length === 0 && self.config.disable.length === 0) return true;
            if (dateToCheck === undefined) return false;
            var bool = self.config.enable.length > 0,
                array = bool ? self.config.enable : self.config.disable;

            for (var i = 0, d = void 0; i < array.length; i++) {
              d = array[i];
              if (typeof d === "function" && d(dateToCheck) // disabled by function
              ) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) // disabled by date
                return bool;else if (typeof d === "string" && dateToCheck !== undefined) {
                // disabled by date string
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
              } else if ( // disabled by range
              typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
            }

            return !bool;
          }

          function isInView(elem) {
            if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && self.daysContainer.contains(elem);
            return false;
          }

          function onKeyDown(e) {
            // e.key                      e.keyCode
            // "Backspace"                        8
            // "Tab"                              9
            // "Enter"                           13
            // "Escape"     (IE "Esc")           27
            // "ArrowLeft"  (IE "Left")          37
            // "ArrowUp"    (IE "Up")            38
            // "ArrowRight" (IE "Right")         39
            // "ArrowDown"  (IE "Down")          40
            // "Delete"     (IE "Del")           46
            var isInput = e.target === self._input;
            var allowInput = self.config.allowInput;
            var allowKeydown = self.isOpen && (!allowInput || !isInput);
            var allowInlineKeydown = self.config.inline && isInput && !allowInput;

            if (e.keyCode === 13 && isInput) {
              if (allowInput) {
                self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
                return e.target.blur();
              } else {
                self.open();
              }
            } else if (isCalendarElem(e.target) || allowKeydown || allowInlineKeydown) {
              var isTimeObj = !!self.timeContainer && self.timeContainer.contains(e.target);

              switch (e.keyCode) {
                case 13:
                  if (isTimeObj) {
                    e.preventDefault();
                    updateTime();
                    focusAndClose();
                  } else selectDate(e);

                  break;

                case 27:
                  // escape
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

                    if (self.daysContainer !== undefined && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
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

                  if (self.daysContainer && e.target.$i !== undefined || e.target === self.input || e.target === self.altInput) {
                    if (e.ctrlKey) {
                      e.stopPropagation();
                      changeYear(self.currentYear - delta);
                      focusOnDay(getFirstAvailableDay(1), 0);
                    } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
                  } else if (e.target === self.currentYearElement) {
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
                    var i = elems.indexOf(e.target);

                    if (i !== -1) {
                      var target = elems[i + (e.shiftKey ? -1 : 1)];
                      e.preventDefault();

                      (target || self._input).focus();
                    }
                  } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(e.target) && e.shiftKey) {
                    e.preventDefault();

                    self._input.focus();
                  }

                  break;

                default:
                  break;
              }
            }

            if (self.amPM !== undefined && e.target === self.amPM) {
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

            if (isInput || isCalendarElem(e.target)) {
              triggerEvent("onKeyDown", e);
            }
          }

          function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled"))) return;
            var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
                initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
                rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
                rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            var containsDisabled = false;
            var minRange = 0,
                maxRange = 0;

            for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
              if (!isEnabled(new Date(t), true)) {
                containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
                if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
              }
            }

            for (var m = 0; m < self.config.showMonths; m++) {
              var month = self.daysContainer.children[m];

              var _loop_1 = function _loop_1(i, l) {
                var dayElem = month.children[i],
                    date = dayElem.dateObj;
                var timestamp = date.getTime();
                var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

                if (outOfRange) {
                  dayElem.classList.add("notAllowed");
                  ["inRange", "startRange", "endRange"].forEach(function (c) {
                    dayElem.classList.remove(c);
                  });
                  return "continue";
                } else if (containsDisabled && !outOfRange) return "continue";

                ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                  dayElem.classList.remove(c);
                });

                if (elem !== undefined) {
                  elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
                  if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
                  if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
                }
              };

              for (var i = 0, l = month.children.length; i < l; i++) {
                _loop_1(i, l);
              }
            }
          }

          function onResize() {
            if (self.isOpen && !self.config["static"] && !self.config.inline) positionCalendar();
          }

          function setDefaultTime() {
            self.setDate(self.config.minDate !== undefined ? new Date(self.config.minDate.getTime()) : new Date(), true);
            setDefaultHours();
            updateValue();
          }

          function open(e, positionElement) {
            if (positionElement === void 0) {
              positionElement = self._positionElement;
            }

            if (self.isMobile === true) {
              if (e) {
                e.preventDefault();
                e.target && e.target.blur();
              }

              if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
              }

              triggerEvent("onOpen");
              return;
            }

            if (self._input.disabled || self.config.inline) return;
            var wasOpen = self.isOpen;
            self.isOpen = true;

            if (!wasOpen) {
              self.calendarContainer.classList.add("open");

              self._input.classList.add("active");

              triggerEvent("onOpen");
              positionCalendar(positionElement);
            }

            if (self.config.enableTime === true && self.config.noCalendar === true) {
              if (self.selectedDates.length === 0) {
                setDefaultTime();
              }

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
            var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

            var userConfig = _assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));

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
              var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
              formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
            }

            if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
              var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
              formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
            }

            if (!userConfig.altInputClass) {
              self.config.altInputClass = self.input.className + " " + self.config.altInputClass;
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

            for (var i = 0; i < boolOpts.length; i++) {
              self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
            }

            HOOKS.filter(function (hook) {
              return self.config[hook] !== undefined;
            }).forEach(function (hook) {
              self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            for (var i = 0; i < self.config.plugins.length; i++) {
              var pluginConf = self.config.plugins[i](self) || {};

              for (var key in pluginConf) {
                if (HOOKS.indexOf(key) > -1) {
                  self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
                } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
              }
            }

            triggerEvent("onParseConfig");
          }

          function setupLocale() {
            if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
            self.l10n = _assign({}, flatpickr.l10ns["default"], typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
            tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";

            var userConfig = _assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));

            if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
              self.config.time_24hr = self.l10n.time_24hr;
            }

            self.formatDate = createDateFormatter(self);
            self.parseDate = createDateParser({
              config: self.config,
              l10n: self.l10n
            });
          }

          function positionCalendar(customPositionElement) {
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
            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline) return;
            var left = window.pageXOffset + inputBounds.left - (configPosHorizontal != null && configPosHorizontal === "center" ? (calendarWidth - inputBounds.width) / 2 : 0);
            var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
            var centerMost = right + calendarWidth > window.document.body.offsetWidth;
            toggleClass(self.calendarContainer, "rightMost", rightMost);
            if (self.config["static"]) return;
            self.calendarContainer.style.top = top + "px";

            if (!rightMost) {
              self.calendarContainer.style.left = left + "px";
              self.calendarContainer.style.right = "auto";
            } else if (!centerMost) {
              self.calendarContainer.style.left = "auto";
              self.calendarContainer.style.right = right + "px";
            } else {
              var doc = document.styleSheets[0]; // some testing environments don't have css support

              if (doc === undefined) return;
              var bodyWidth = window.document.body.offsetWidth;
              var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
              var centerBefore = ".flatpickr-calendar.centerMost:before";
              var centerAfter = ".flatpickr-calendar.centerMost:after";
              var centerIndex = doc.cssRules.length;
              var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
              toggleClass(self.calendarContainer, "rightMost", false);
              toggleClass(self.calendarContainer, "centerMost", true);
              doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
              self.calendarContainer.style.left = centerLeft + "px";
              self.calendarContainer.style.right = "auto";
            }
          }

          function redraw() {
            if (self.config.noCalendar || self.isMobile) return;
            updateNavigationCurrentMonth();
            buildDays();
          }

          function focusAndClose() {
            self._input.focus();

            if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
              // hack - bugs in the way IE handles focus keeps the calendar open
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

            var t = findParent(e.target, isSelectable);
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
              self.selectedDates.push(selectedDate); // unless selecting same date twice, sort ascendingly

              if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
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
            if (self.config.enableTime) setTimeout(function () {
              return self.showTimeInput = true;
            }, 50); // maintain focus

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
            maxDate: [jumpToDate]
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
              });else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
            }

            self.redraw();
            updateValue(false);
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
            self.selectedDates = dates.filter(function (d) {
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
            self.showTimeInput = self.selectedDates.length > 0;
            self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate();
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
            }); // remove falsy values
          }

          function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date(); // Workaround IE11 setting placeholder as the input's value

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
            Object.defineProperty(self, "showTimeInput", {
              get: function get() {
                return self._showTimeInput;
              },
              set: function set(bool) {
                self._showTimeInput = bool;
                if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
                self.isOpen && positionCalendar();
              }
            });
          }

          function setupInputs() {
            self.input = self.config.wrap ? element.querySelector("[data-input]") : element;
            /* istanbul ignore next */

            if (!self.input) {
              self.config.errorHandler(new Error("Invalid input element specified"));
              return;
            } // hack: store previous type to restore it after destroy()


            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;

            if (self.config.altInput) {
              // replicate self.element
              self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
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
            self._positionElement = self.config.positionElement || self._input;
          }

          function setupMobile() {
            var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.step = self.input.getAttribute("step") || "any";
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
            self.input.type = "hidden";
            if (self.altInput !== undefined) self.altInput.type = "hidden";

            try {
              if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            } catch (_a) {}

            bind(self.mobileInput, "change", function (e) {
              self.setDate(e.target.value, false, self.mobileFormatStr);
              triggerEvent("onChange");
              triggerEvent("onClose");
            });
          }

          function toggle(e) {
            if (self.isOpen === true) return self.close();
            self.open(e);
          }

          function triggerEvent(event, data) {
            // If the instance has been destroyed already, all hooks have been removed
            if (self.config === undefined) return;
            var hooks = self.config[event];

            if (hooks !== undefined && hooks.length > 0) {
              for (var i = 0; hooks[i] && i < hooks.length; i++) {
                hooks[i](self.selectedDates, self.input.value, self, data);
              }
            }

            if (event === "onChange") {
              self.input.dispatchEvent(createEvent("change")); // many front-end frameworks bind to the input event

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
              if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
            }

            return false;
          }

          function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
            return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
          }

          function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
            self.yearElements.forEach(function (yearElement, i) {
              var d = new Date(self.currentYear, self.currentMonth, 1);
              d.setMonth(self.currentMonth + i);

              if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
                self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
              } else {
                self.monthsDropdownContainer.value = d.getMonth().toString();
              }

              yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
          }

          function getDateStr(format) {
            return self.selectedDates.map(function (dObj) {
              return self.formatDate(dObj, format);
            }).filter(function (d, i, arr) {
              return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
            }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
          }
          /**
           * Updates the values of inputs associated with the calendar
           */


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
            var isPrevMonth = self.prevMonthNav.contains(e.target);
            var isNextMonth = self.nextMonthNav.contains(e.target);

            if (isPrevMonth || isNextMonth) {
              changeMonth(isPrevMonth ? -1 : 1);
            } else if (self.yearElements.indexOf(e.target) >= 0) {
              e.target.select();
            } else if (e.target.classList.contains("arrowUp")) {
              self.changeYear(self.currentYear + 1);
            } else if (e.target.classList.contains("arrowDown")) {
              self.changeYear(self.currentYear - 1);
            }
          }

          function timeWrapper(e) {
            e.preventDefault();
            var isKeyDown = e.type === "keydown",
                input = e.target;

            if (self.amPM !== undefined && e.target === self.amPM) {
              self.amPM.textContent = self.l10n.amPM[_int(self.amPM.textContent === self.l10n.amPM[0])];
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
                newValue = max + newValue + _int(!isHourElem) + (_int(isHourElem) && _int(!self.amPM));
                if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
              } else if (newValue > max) {
                newValue = input === self.hourElement ? newValue - max - _int(!self.amPM) : min;
                if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
              }

              if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
                self.amPM.textContent = self.l10n.amPM[_int(self.amPM.textContent === self.l10n.amPM[0])];
              }

              input.value = pad(newValue);
            }
          }

          init();
          return self;
        }
        /* istanbul ignore next */


        function _flatpickr(nodeList, config) {
          // static list
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
        /* istanbul ignore next */


        if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
          // browser env
          HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
          };

          HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
          };
        }
        /* istanbul ignore next */


        var flatpickr = function flatpickr(selector, config) {
          if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
          } else if (selector instanceof Node) {
            return _flatpickr([selector], config);
          } else {
            return _flatpickr(selector, config);
          }
        };
        /* istanbul ignore next */


        flatpickr.defaultConfig = {};
        flatpickr.l10ns = {
          en: _assign({}, english),
          "default": _assign({}, english)
        };

        flatpickr.localize = function (l10n) {
          flatpickr.l10ns["default"] = _assign({}, flatpickr.l10ns["default"], l10n);
        };

        flatpickr.setDefaults = function (config) {
          flatpickr.defaultConfig = _assign({}, flatpickr.defaultConfig, config);
        };

        flatpickr.parseDate = createDateParser({});
        flatpickr.formatDate = createDateFormatter({});
        flatpickr.compareDates = compareDates;
        /* istanbul ignore next */

        if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
          jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
          };
        } // eslint-disable-next-line @typescript-eslint/camelcase


        Date.prototype.fp_incr = function (days) {
          return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
        };

        if (typeof window !== "undefined") {
          window.flatpickr = flatpickr;
        }

        return flatpickr;
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~agenda-agenda-module~lote-lote-module-es5.js.map