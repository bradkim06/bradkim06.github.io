exports.ids = [4];
exports.modules = {

/***/ "./node_modules/@material-ui/core/esm/Grow/Grow.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grow/Grow.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/esm/transitions/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");










function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}

var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};
/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Grow(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_5__["Transition"] : _props$TransitionComp,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var timer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var autoTimeout = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var foreignRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__["default"])(children.ref, ref);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__["default"])(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__["reflow"])(node); // So the animation always start from the start.

    var _getTransitionProps = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__["getTransitionProps"])({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration,
        delay = _getTransitionProps.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay
    })].join(',');

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var _getTransitionProps2 = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__["getTransitionProps"])({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration,
        delay = _getTransitionProps2.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay || duration * 0.333
    })].join(',');
    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);

  var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;

    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 true ? Grow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element,

  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  })])
} : undefined;
Grow.muiSupportAuto = true;
/* harmony default export */ __webpack_exports__["default"] = (Grow);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grow/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grow */ "./node_modules/@material-ui/core/esm/Grow/Grow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Grow__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/transitions/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/transitions/utils.js ***!
  \*****************************************************************/
/*! exports provided: reflow, getTransitionProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reflow", function() { return reflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionProps", function() { return getTransitionProps; });
var reflow = function reflow(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/icons/Close.js":
/*!**************************************************!*\
  !*** ./node_modules/@material-ui/icons/Close.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ExpandLess.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ExpandLess.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), 'ExpandLess');

exports.default = _default;

/***/ }),

/***/ "./node_modules/add-px-to-style/index.js":
/*!***********************************************!*\
  !*** ./node_modules/add-px-to-style/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* The following list is defined in React's core */
var IS_UNITLESS = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};

module.exports = function(name, value) {
  if(typeof value === 'number' && !IS_UNITLESS[ name ]) {
    return value + 'px';
  } else {
    return value;
  }
};

/***/ }),

/***/ "./node_modules/dom-css/index.js":
/*!***************************************!*\
  !*** ./node_modules/dom-css/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var prefix = __webpack_require__(/*! prefix-style */ "./node_modules/prefix-style/index.js")
var toCamelCase = __webpack_require__(/*! to-camel-case */ "./node_modules/to-camel-case/index.js")
var cache = { 'float': 'cssFloat' }
var addPxToStyle = __webpack_require__(/*! add-px-to-style */ "./node_modules/add-px-to-style/index.js")

function style (element, property, value) {
  var camel = cache[property]
  if (typeof camel === 'undefined') {
    camel = detect(property)
  }

  // may be false if CSS prop is unsupported
  if (camel) {
    if (value === undefined) {
      return element.style[camel]
    }

    element.style[camel] = addPxToStyle(camel, value)
  }
}

function each (element, properties) {
  for (var k in properties) {
    if (properties.hasOwnProperty(k)) {
      style(element, k, properties[k])
    }
  }
}

function detect (cssProp) {
  var camel = toCamelCase(cssProp)
  var result = prefix(camel)
  cache[camel] = cache[cssProp] = cache[result] = result
  return result
}

function set () {
  if (arguments.length === 2) {
    if (typeof arguments[1] === 'string') {
      arguments[0].style.cssText = arguments[1]
    } else {
      each(arguments[0], arguments[1])
    }
  } else {
    style(arguments[0], arguments[1], arguments[2])
  }
}

module.exports = set
module.exports.set = set

module.exports.get = function (element, properties) {
  if (Array.isArray(properties)) {
    return properties.reduce(function (obj, prop) {
      obj[prop] = style(element, prop || '')
      return obj
    }, {})
  } else {
    return style(element, properties || '')
  }
}


/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map


/***/ }),

/***/ "./node_modules/prefix-style/index.js":
/*!********************************************!*\
  !*** ./node_modules/prefix-style/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var div = null
var prefixes = [ 'Webkit', 'Moz', 'O', 'ms' ]

module.exports = function prefixStyle (prop) {
  // re-use a dummy div
  if (!div) {
    div = document.createElement('div')
  }

  var style = div.style

  // prop exists without prefix
  if (prop in style) {
    return prop
  }

  // borderRadius -> BorderRadius
  var titleCase = prop.charAt(0).toUpperCase() + prop.slice(1)

  // find the vendor-prefixed prop
  for (var i = prefixes.length; i >= 0; i--) {
    var name = prefixes[i] + titleCase
    // e.g. WebkitBorderRadius or webkitBorderRadius
    if (name in style) {
      return name
    }
  }

  return false
}


/***/ }),

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var now = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}


/***/ }),

/***/ "./node_modules/react-custom-scrollbars/lib/Scrollbars/defaultRenderElements.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-custom-scrollbars/lib/Scrollbars/defaultRenderElements.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.renderViewDefault = renderViewDefault;
exports.renderTrackHorizontalDefault = renderTrackHorizontalDefault;
exports.renderTrackVerticalDefault = renderTrackVerticalDefault;
exports.renderThumbHorizontalDefault = renderThumbHorizontalDefault;
exports.renderThumbVerticalDefault = renderThumbVerticalDefault;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable react/prop-types */

function renderViewDefault(props) {
    return _react2["default"].createElement('div', props);
}

function renderTrackHorizontalDefault(_ref) {
    var style = _ref.style,
        props = _objectWithoutProperties(_ref, ['style']);

    var finalStyle = _extends({}, style, {
        right: 2,
        bottom: 2,
        left: 2,
        borderRadius: 3
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderTrackVerticalDefault(_ref2) {
    var style = _ref2.style,
        props = _objectWithoutProperties(_ref2, ['style']);

    var finalStyle = _extends({}, style, {
        right: 2,
        bottom: 2,
        top: 2,
        borderRadius: 3
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderThumbHorizontalDefault(_ref3) {
    var style = _ref3.style,
        props = _objectWithoutProperties(_ref3, ['style']);

    var finalStyle = _extends({}, style, {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

function renderThumbVerticalDefault(_ref4) {
    var style = _ref4.style,
        props = _objectWithoutProperties(_ref4, ['style']);

    var finalStyle = _extends({}, style, {
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: 'rgba(0,0,0,.2)'
    });
    return _react2["default"].createElement('div', _extends({ style: finalStyle }, props));
}

/***/ }),

/***/ "./node_modules/react-custom-scrollbars/lib/Scrollbars/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-custom-scrollbars/lib/Scrollbars/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _raf2 = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf3 = _interopRequireDefault(_raf2);

var _domCss = __webpack_require__(/*! dom-css */ "./node_modules/dom-css/index.js");

var _domCss2 = _interopRequireDefault(_domCss);

var _react = __webpack_require__(/*! react */ "react");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isString = __webpack_require__(/*! ../utils/isString */ "./node_modules/react-custom-scrollbars/lib/utils/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _getScrollbarWidth = __webpack_require__(/*! ../utils/getScrollbarWidth */ "./node_modules/react-custom-scrollbars/lib/utils/getScrollbarWidth.js");

var _getScrollbarWidth2 = _interopRequireDefault(_getScrollbarWidth);

var _returnFalse = __webpack_require__(/*! ../utils/returnFalse */ "./node_modules/react-custom-scrollbars/lib/utils/returnFalse.js");

var _returnFalse2 = _interopRequireDefault(_returnFalse);

var _getInnerWidth = __webpack_require__(/*! ../utils/getInnerWidth */ "./node_modules/react-custom-scrollbars/lib/utils/getInnerWidth.js");

var _getInnerWidth2 = _interopRequireDefault(_getInnerWidth);

var _getInnerHeight = __webpack_require__(/*! ../utils/getInnerHeight */ "./node_modules/react-custom-scrollbars/lib/utils/getInnerHeight.js");

var _getInnerHeight2 = _interopRequireDefault(_getInnerHeight);

var _styles = __webpack_require__(/*! ./styles */ "./node_modules/react-custom-scrollbars/lib/Scrollbars/styles.js");

var _defaultRenderElements = __webpack_require__(/*! ./defaultRenderElements */ "./node_modules/react-custom-scrollbars/lib/Scrollbars/defaultRenderElements.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scrollbars = function (_Component) {
    _inherits(Scrollbars, _Component);

    function Scrollbars(props) {
        var _ref;

        _classCallCheck(this, Scrollbars);

        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Scrollbars.__proto__ || Object.getPrototypeOf(Scrollbars)).call.apply(_ref, [this, props].concat(rest)));

        _this.getScrollLeft = _this.getScrollLeft.bind(_this);
        _this.getScrollTop = _this.getScrollTop.bind(_this);
        _this.getScrollWidth = _this.getScrollWidth.bind(_this);
        _this.getScrollHeight = _this.getScrollHeight.bind(_this);
        _this.getClientWidth = _this.getClientWidth.bind(_this);
        _this.getClientHeight = _this.getClientHeight.bind(_this);
        _this.getValues = _this.getValues.bind(_this);
        _this.getThumbHorizontalWidth = _this.getThumbHorizontalWidth.bind(_this);
        _this.getThumbVerticalHeight = _this.getThumbVerticalHeight.bind(_this);
        _this.getScrollLeftForOffset = _this.getScrollLeftForOffset.bind(_this);
        _this.getScrollTopForOffset = _this.getScrollTopForOffset.bind(_this);

        _this.scrollLeft = _this.scrollLeft.bind(_this);
        _this.scrollTop = _this.scrollTop.bind(_this);
        _this.scrollToLeft = _this.scrollToLeft.bind(_this);
        _this.scrollToTop = _this.scrollToTop.bind(_this);
        _this.scrollToRight = _this.scrollToRight.bind(_this);
        _this.scrollToBottom = _this.scrollToBottom.bind(_this);

        _this.handleTrackMouseEnter = _this.handleTrackMouseEnter.bind(_this);
        _this.handleTrackMouseLeave = _this.handleTrackMouseLeave.bind(_this);
        _this.handleHorizontalTrackMouseDown = _this.handleHorizontalTrackMouseDown.bind(_this);
        _this.handleVerticalTrackMouseDown = _this.handleVerticalTrackMouseDown.bind(_this);
        _this.handleHorizontalThumbMouseDown = _this.handleHorizontalThumbMouseDown.bind(_this);
        _this.handleVerticalThumbMouseDown = _this.handleVerticalThumbMouseDown.bind(_this);
        _this.handleWindowResize = _this.handleWindowResize.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.handleDrag = _this.handleDrag.bind(_this);
        _this.handleDragEnd = _this.handleDragEnd.bind(_this);

        _this.state = {
            didMountUniversal: false
        };
        return _this;
    }

    _createClass(Scrollbars, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.addListeners();
            this.update();
            this.componentDidMountUniversal();
        }
    }, {
        key: 'componentDidMountUniversal',
        value: function componentDidMountUniversal() {
            // eslint-disable-line react/sort-comp
            var universal = this.props.universal;

            if (!universal) return;
            this.setState({ didMountUniversal: true });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.update();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.removeListeners();
            (0, _raf2.cancel)(this.requestFrame);
            clearTimeout(this.hideTracksTimeout);
            clearInterval(this.detectScrollingInterval);
        }
    }, {
        key: 'getScrollLeft',
        value: function getScrollLeft() {
            if (!this.view) return 0;
            return this.view.scrollLeft;
        }
    }, {
        key: 'getScrollTop',
        value: function getScrollTop() {
            if (!this.view) return 0;
            return this.view.scrollTop;
        }
    }, {
        key: 'getScrollWidth',
        value: function getScrollWidth() {
            if (!this.view) return 0;
            return this.view.scrollWidth;
        }
    }, {
        key: 'getScrollHeight',
        value: function getScrollHeight() {
            if (!this.view) return 0;
            return this.view.scrollHeight;
        }
    }, {
        key: 'getClientWidth',
        value: function getClientWidth() {
            if (!this.view) return 0;
            return this.view.clientWidth;
        }
    }, {
        key: 'getClientHeight',
        value: function getClientHeight() {
            if (!this.view) return 0;
            return this.view.clientHeight;
        }
    }, {
        key: 'getValues',
        value: function getValues() {
            var _ref2 = this.view || {},
                _ref2$scrollLeft = _ref2.scrollLeft,
                scrollLeft = _ref2$scrollLeft === undefined ? 0 : _ref2$scrollLeft,
                _ref2$scrollTop = _ref2.scrollTop,
                scrollTop = _ref2$scrollTop === undefined ? 0 : _ref2$scrollTop,
                _ref2$scrollWidth = _ref2.scrollWidth,
                scrollWidth = _ref2$scrollWidth === undefined ? 0 : _ref2$scrollWidth,
                _ref2$scrollHeight = _ref2.scrollHeight,
                scrollHeight = _ref2$scrollHeight === undefined ? 0 : _ref2$scrollHeight,
                _ref2$clientWidth = _ref2.clientWidth,
                clientWidth = _ref2$clientWidth === undefined ? 0 : _ref2$clientWidth,
                _ref2$clientHeight = _ref2.clientHeight,
                clientHeight = _ref2$clientHeight === undefined ? 0 : _ref2$clientHeight;

            return {
                left: scrollLeft / (scrollWidth - clientWidth) || 0,
                top: scrollTop / (scrollHeight - clientHeight) || 0,
                scrollLeft: scrollLeft,
                scrollTop: scrollTop,
                scrollWidth: scrollWidth,
                scrollHeight: scrollHeight,
                clientWidth: clientWidth,
                clientHeight: clientHeight
            };
        }
    }, {
        key: 'getThumbHorizontalWidth',
        value: function getThumbHorizontalWidth() {
            var _props = this.props,
                thumbSize = _props.thumbSize,
                thumbMinSize = _props.thumbMinSize;
            var _view = this.view,
                scrollWidth = _view.scrollWidth,
                clientWidth = _view.clientWidth;

            var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
            var width = Math.ceil(clientWidth / scrollWidth * trackWidth);
            if (trackWidth === width) return 0;
            if (thumbSize) return thumbSize;
            return Math.max(width, thumbMinSize);
        }
    }, {
        key: 'getThumbVerticalHeight',
        value: function getThumbVerticalHeight() {
            var _props2 = this.props,
                thumbSize = _props2.thumbSize,
                thumbMinSize = _props2.thumbMinSize;
            var _view2 = this.view,
                scrollHeight = _view2.scrollHeight,
                clientHeight = _view2.clientHeight;

            var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
            var height = Math.ceil(clientHeight / scrollHeight * trackHeight);
            if (trackHeight === height) return 0;
            if (thumbSize) return thumbSize;
            return Math.max(height, thumbMinSize);
        }
    }, {
        key: 'getScrollLeftForOffset',
        value: function getScrollLeftForOffset(offset) {
            var _view3 = this.view,
                scrollWidth = _view3.scrollWidth,
                clientWidth = _view3.clientWidth;

            var trackWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
            var thumbWidth = this.getThumbHorizontalWidth();
            return offset / (trackWidth - thumbWidth) * (scrollWidth - clientWidth);
        }
    }, {
        key: 'getScrollTopForOffset',
        value: function getScrollTopForOffset(offset) {
            var _view4 = this.view,
                scrollHeight = _view4.scrollHeight,
                clientHeight = _view4.clientHeight;

            var trackHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
            var thumbHeight = this.getThumbVerticalHeight();
            return offset / (trackHeight - thumbHeight) * (scrollHeight - clientHeight);
        }
    }, {
        key: 'scrollLeft',
        value: function scrollLeft() {
            var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (!this.view) return;
            this.view.scrollLeft = left;
        }
    }, {
        key: 'scrollTop',
        value: function scrollTop() {
            var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            if (!this.view) return;
            this.view.scrollTop = top;
        }
    }, {
        key: 'scrollToLeft',
        value: function scrollToLeft() {
            if (!this.view) return;
            this.view.scrollLeft = 0;
        }
    }, {
        key: 'scrollToTop',
        value: function scrollToTop() {
            if (!this.view) return;
            this.view.scrollTop = 0;
        }
    }, {
        key: 'scrollToRight',
        value: function scrollToRight() {
            if (!this.view) return;
            this.view.scrollLeft = this.view.scrollWidth;
        }
    }, {
        key: 'scrollToBottom',
        value: function scrollToBottom() {
            if (!this.view) return;
            this.view.scrollTop = this.view.scrollHeight;
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            /* istanbul ignore if */
            if (typeof document === 'undefined' || !this.view) return;
            var view = this.view,
                trackHorizontal = this.trackHorizontal,
                trackVertical = this.trackVertical,
                thumbHorizontal = this.thumbHorizontal,
                thumbVertical = this.thumbVertical;

            view.addEventListener('scroll', this.handleScroll);
            if (!(0, _getScrollbarWidth2["default"])()) return;
            trackHorizontal.addEventListener('mouseenter', this.handleTrackMouseEnter);
            trackHorizontal.addEventListener('mouseleave', this.handleTrackMouseLeave);
            trackHorizontal.addEventListener('mousedown', this.handleHorizontalTrackMouseDown);
            trackVertical.addEventListener('mouseenter', this.handleTrackMouseEnter);
            trackVertical.addEventListener('mouseleave', this.handleTrackMouseLeave);
            trackVertical.addEventListener('mousedown', this.handleVerticalTrackMouseDown);
            thumbHorizontal.addEventListener('mousedown', this.handleHorizontalThumbMouseDown);
            thumbVertical.addEventListener('mousedown', this.handleVerticalThumbMouseDown);
            window.addEventListener('resize', this.handleWindowResize);
        }
    }, {
        key: 'removeListeners',
        value: function removeListeners() {
            /* istanbul ignore if */
            if (typeof document === 'undefined' || !this.view) return;
            var view = this.view,
                trackHorizontal = this.trackHorizontal,
                trackVertical = this.trackVertical,
                thumbHorizontal = this.thumbHorizontal,
                thumbVertical = this.thumbVertical;

            view.removeEventListener('scroll', this.handleScroll);
            if (!(0, _getScrollbarWidth2["default"])()) return;
            trackHorizontal.removeEventListener('mouseenter', this.handleTrackMouseEnter);
            trackHorizontal.removeEventListener('mouseleave', this.handleTrackMouseLeave);
            trackHorizontal.removeEventListener('mousedown', this.handleHorizontalTrackMouseDown);
            trackVertical.removeEventListener('mouseenter', this.handleTrackMouseEnter);
            trackVertical.removeEventListener('mouseleave', this.handleTrackMouseLeave);
            trackVertical.removeEventListener('mousedown', this.handleVerticalTrackMouseDown);
            thumbHorizontal.removeEventListener('mousedown', this.handleHorizontalThumbMouseDown);
            thumbVertical.removeEventListener('mousedown', this.handleVerticalThumbMouseDown);
            window.removeEventListener('resize', this.handleWindowResize);
            // Possibly setup by `handleDragStart`
            this.teardownDragging();
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(event) {
            var _this2 = this;

            var _props3 = this.props,
                onScroll = _props3.onScroll,
                onScrollFrame = _props3.onScrollFrame;

            if (onScroll) onScroll(event);
            this.update(function (values) {
                var scrollLeft = values.scrollLeft,
                    scrollTop = values.scrollTop;

                _this2.viewScrollLeft = scrollLeft;
                _this2.viewScrollTop = scrollTop;
                if (onScrollFrame) onScrollFrame(values);
            });
            this.detectScrolling();
        }
    }, {
        key: 'handleScrollStart',
        value: function handleScrollStart() {
            var onScrollStart = this.props.onScrollStart;

            if (onScrollStart) onScrollStart();
            this.handleScrollStartAutoHide();
        }
    }, {
        key: 'handleScrollStartAutoHide',
        value: function handleScrollStartAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.showTracks();
        }
    }, {
        key: 'handleScrollStop',
        value: function handleScrollStop() {
            var onScrollStop = this.props.onScrollStop;

            if (onScrollStop) onScrollStop();
            this.handleScrollStopAutoHide();
        }
    }, {
        key: 'handleScrollStopAutoHide',
        value: function handleScrollStopAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'handleWindowResize',
        value: function handleWindowResize() {
            this.update();
        }
    }, {
        key: 'handleHorizontalTrackMouseDown',
        value: function handleHorizontalTrackMouseDown(event) {
            event.preventDefault();
            var target = event.target,
                clientX = event.clientX;

            var _target$getBoundingCl = target.getBoundingClientRect(),
                targetLeft = _target$getBoundingCl.left;

            var thumbWidth = this.getThumbHorizontalWidth();
            var offset = Math.abs(targetLeft - clientX) - thumbWidth / 2;
            this.view.scrollLeft = this.getScrollLeftForOffset(offset);
        }
    }, {
        key: 'handleVerticalTrackMouseDown',
        value: function handleVerticalTrackMouseDown(event) {
            event.preventDefault();
            var target = event.target,
                clientY = event.clientY;

            var _target$getBoundingCl2 = target.getBoundingClientRect(),
                targetTop = _target$getBoundingCl2.top;

            var thumbHeight = this.getThumbVerticalHeight();
            var offset = Math.abs(targetTop - clientY) - thumbHeight / 2;
            this.view.scrollTop = this.getScrollTopForOffset(offset);
        }
    }, {
        key: 'handleHorizontalThumbMouseDown',
        value: function handleHorizontalThumbMouseDown(event) {
            event.preventDefault();
            this.handleDragStart(event);
            var target = event.target,
                clientX = event.clientX;
            var offsetWidth = target.offsetWidth;

            var _target$getBoundingCl3 = target.getBoundingClientRect(),
                left = _target$getBoundingCl3.left;

            this.prevPageX = offsetWidth - (clientX - left);
        }
    }, {
        key: 'handleVerticalThumbMouseDown',
        value: function handleVerticalThumbMouseDown(event) {
            event.preventDefault();
            this.handleDragStart(event);
            var target = event.target,
                clientY = event.clientY;
            var offsetHeight = target.offsetHeight;

            var _target$getBoundingCl4 = target.getBoundingClientRect(),
                top = _target$getBoundingCl4.top;

            this.prevPageY = offsetHeight - (clientY - top);
        }
    }, {
        key: 'setupDragging',
        value: function setupDragging() {
            (0, _domCss2["default"])(document.body, _styles.disableSelectStyle);
            document.addEventListener('mousemove', this.handleDrag);
            document.addEventListener('mouseup', this.handleDragEnd);
            document.onselectstart = _returnFalse2["default"];
        }
    }, {
        key: 'teardownDragging',
        value: function teardownDragging() {
            (0, _domCss2["default"])(document.body, _styles.disableSelectStyleReset);
            document.removeEventListener('mousemove', this.handleDrag);
            document.removeEventListener('mouseup', this.handleDragEnd);
            document.onselectstart = undefined;
        }
    }, {
        key: 'handleDragStart',
        value: function handleDragStart(event) {
            this.dragging = true;
            event.stopImmediatePropagation();
            this.setupDragging();
        }
    }, {
        key: 'handleDrag',
        value: function handleDrag(event) {
            if (this.prevPageX) {
                var clientX = event.clientX;

                var _trackHorizontal$getB = this.trackHorizontal.getBoundingClientRect(),
                    trackLeft = _trackHorizontal$getB.left;

                var thumbWidth = this.getThumbHorizontalWidth();
                var clickPosition = thumbWidth - this.prevPageX;
                var offset = -trackLeft + clientX - clickPosition;
                this.view.scrollLeft = this.getScrollLeftForOffset(offset);
            }
            if (this.prevPageY) {
                var clientY = event.clientY;

                var _trackVertical$getBou = this.trackVertical.getBoundingClientRect(),
                    trackTop = _trackVertical$getBou.top;

                var thumbHeight = this.getThumbVerticalHeight();
                var _clickPosition = thumbHeight - this.prevPageY;
                var _offset = -trackTop + clientY - _clickPosition;
                this.view.scrollTop = this.getScrollTopForOffset(_offset);
            }
            return false;
        }
    }, {
        key: 'handleDragEnd',
        value: function handleDragEnd() {
            this.dragging = false;
            this.prevPageX = this.prevPageY = 0;
            this.teardownDragging();
            this.handleDragEndAutoHide();
        }
    }, {
        key: 'handleDragEndAutoHide',
        value: function handleDragEndAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'handleTrackMouseEnter',
        value: function handleTrackMouseEnter() {
            this.trackMouseOver = true;
            this.handleTrackMouseEnterAutoHide();
        }
    }, {
        key: 'handleTrackMouseEnterAutoHide',
        value: function handleTrackMouseEnterAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.showTracks();
        }
    }, {
        key: 'handleTrackMouseLeave',
        value: function handleTrackMouseLeave() {
            this.trackMouseOver = false;
            this.handleTrackMouseLeaveAutoHide();
        }
    }, {
        key: 'handleTrackMouseLeaveAutoHide',
        value: function handleTrackMouseLeaveAutoHide() {
            var autoHide = this.props.autoHide;

            if (!autoHide) return;
            this.hideTracks();
        }
    }, {
        key: 'showTracks',
        value: function showTracks() {
            clearTimeout(this.hideTracksTimeout);
            (0, _domCss2["default"])(this.trackHorizontal, { opacity: 1 });
            (0, _domCss2["default"])(this.trackVertical, { opacity: 1 });
        }
    }, {
        key: 'hideTracks',
        value: function hideTracks() {
            var _this3 = this;

            if (this.dragging) return;
            if (this.scrolling) return;
            if (this.trackMouseOver) return;
            var autoHideTimeout = this.props.autoHideTimeout;

            clearTimeout(this.hideTracksTimeout);
            this.hideTracksTimeout = setTimeout(function () {
                (0, _domCss2["default"])(_this3.trackHorizontal, { opacity: 0 });
                (0, _domCss2["default"])(_this3.trackVertical, { opacity: 0 });
            }, autoHideTimeout);
        }
    }, {
        key: 'detectScrolling',
        value: function detectScrolling() {
            var _this4 = this;

            if (this.scrolling) return;
            this.scrolling = true;
            this.handleScrollStart();
            this.detectScrollingInterval = setInterval(function () {
                if (_this4.lastViewScrollLeft === _this4.viewScrollLeft && _this4.lastViewScrollTop === _this4.viewScrollTop) {
                    clearInterval(_this4.detectScrollingInterval);
                    _this4.scrolling = false;
                    _this4.handleScrollStop();
                }
                _this4.lastViewScrollLeft = _this4.viewScrollLeft;
                _this4.lastViewScrollTop = _this4.viewScrollTop;
            }, 100);
        }
    }, {
        key: 'raf',
        value: function raf(callback) {
            var _this5 = this;

            if (this.requestFrame) _raf3["default"].cancel(this.requestFrame);
            this.requestFrame = (0, _raf3["default"])(function () {
                _this5.requestFrame = undefined;
                callback();
            });
        }
    }, {
        key: 'update',
        value: function update(callback) {
            var _this6 = this;

            this.raf(function () {
                return _this6._update(callback);
            });
        }
    }, {
        key: '_update',
        value: function _update(callback) {
            var _props4 = this.props,
                onUpdate = _props4.onUpdate,
                hideTracksWhenNotNeeded = _props4.hideTracksWhenNotNeeded;

            var values = this.getValues();
            if ((0, _getScrollbarWidth2["default"])()) {
                var scrollLeft = values.scrollLeft,
                    clientWidth = values.clientWidth,
                    scrollWidth = values.scrollWidth;

                var trackHorizontalWidth = (0, _getInnerWidth2["default"])(this.trackHorizontal);
                var thumbHorizontalWidth = this.getThumbHorizontalWidth();
                var thumbHorizontalX = scrollLeft / (scrollWidth - clientWidth) * (trackHorizontalWidth - thumbHorizontalWidth);
                var thumbHorizontalStyle = {
                    width: thumbHorizontalWidth,
                    transform: 'translateX(' + thumbHorizontalX + 'px)'
                };
                var scrollTop = values.scrollTop,
                    clientHeight = values.clientHeight,
                    scrollHeight = values.scrollHeight;

                var trackVerticalHeight = (0, _getInnerHeight2["default"])(this.trackVertical);
                var thumbVerticalHeight = this.getThumbVerticalHeight();
                var thumbVerticalY = scrollTop / (scrollHeight - clientHeight) * (trackVerticalHeight - thumbVerticalHeight);
                var thumbVerticalStyle = {
                    height: thumbVerticalHeight,
                    transform: 'translateY(' + thumbVerticalY + 'px)'
                };
                if (hideTracksWhenNotNeeded) {
                    var trackHorizontalStyle = {
                        visibility: scrollWidth > clientWidth ? 'visible' : 'hidden'
                    };
                    var trackVerticalStyle = {
                        visibility: scrollHeight > clientHeight ? 'visible' : 'hidden'
                    };
                    (0, _domCss2["default"])(this.trackHorizontal, trackHorizontalStyle);
                    (0, _domCss2["default"])(this.trackVertical, trackVerticalStyle);
                }
                (0, _domCss2["default"])(this.thumbHorizontal, thumbHorizontalStyle);
                (0, _domCss2["default"])(this.thumbVertical, thumbVerticalStyle);
            }
            if (onUpdate) onUpdate(values);
            if (typeof callback !== 'function') return;
            callback(values);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var scrollbarWidth = (0, _getScrollbarWidth2["default"])();
            /* eslint-disable no-unused-vars */

            var _props5 = this.props,
                onScroll = _props5.onScroll,
                onScrollFrame = _props5.onScrollFrame,
                onScrollStart = _props5.onScrollStart,
                onScrollStop = _props5.onScrollStop,
                onUpdate = _props5.onUpdate,
                renderView = _props5.renderView,
                renderTrackHorizontal = _props5.renderTrackHorizontal,
                renderTrackVertical = _props5.renderTrackVertical,
                renderThumbHorizontal = _props5.renderThumbHorizontal,
                renderThumbVertical = _props5.renderThumbVertical,
                tagName = _props5.tagName,
                hideTracksWhenNotNeeded = _props5.hideTracksWhenNotNeeded,
                autoHide = _props5.autoHide,
                autoHideTimeout = _props5.autoHideTimeout,
                autoHideDuration = _props5.autoHideDuration,
                thumbSize = _props5.thumbSize,
                thumbMinSize = _props5.thumbMinSize,
                universal = _props5.universal,
                autoHeight = _props5.autoHeight,
                autoHeightMin = _props5.autoHeightMin,
                autoHeightMax = _props5.autoHeightMax,
                style = _props5.style,
                children = _props5.children,
                props = _objectWithoutProperties(_props5, ['onScroll', 'onScrollFrame', 'onScrollStart', 'onScrollStop', 'onUpdate', 'renderView', 'renderTrackHorizontal', 'renderTrackVertical', 'renderThumbHorizontal', 'renderThumbVertical', 'tagName', 'hideTracksWhenNotNeeded', 'autoHide', 'autoHideTimeout', 'autoHideDuration', 'thumbSize', 'thumbMinSize', 'universal', 'autoHeight', 'autoHeightMin', 'autoHeightMax', 'style', 'children']);
            /* eslint-enable no-unused-vars */

            var didMountUniversal = this.state.didMountUniversal;


            var containerStyle = _extends({}, _styles.containerStyleDefault, autoHeight && _extends({}, _styles.containerStyleAutoHeight, {
                minHeight: autoHeightMin,
                maxHeight: autoHeightMax
            }), style);

            var viewStyle = _extends({}, _styles.viewStyleDefault, {
                // Hide scrollbars by setting a negative margin
                marginRight: scrollbarWidth ? -scrollbarWidth : 0,
                marginBottom: scrollbarWidth ? -scrollbarWidth : 0
            }, autoHeight && _extends({}, _styles.viewStyleAutoHeight, {
                // Add scrollbarWidth to autoHeight in order to compensate negative margins
                minHeight: (0, _isString2["default"])(autoHeightMin) ? 'calc(' + autoHeightMin + ' + ' + scrollbarWidth + 'px)' : autoHeightMin + scrollbarWidth,
                maxHeight: (0, _isString2["default"])(autoHeightMax) ? 'calc(' + autoHeightMax + ' + ' + scrollbarWidth + 'px)' : autoHeightMax + scrollbarWidth
            }), autoHeight && universal && !didMountUniversal && {
                minHeight: autoHeightMin,
                maxHeight: autoHeightMax
            }, universal && !didMountUniversal && _styles.viewStyleUniversalInitial);

            var trackAutoHeightStyle = {
                transition: 'opacity ' + autoHideDuration + 'ms',
                opacity: 0
            };

            var trackHorizontalStyle = _extends({}, _styles.trackHorizontalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
                display: 'none'
            });

            var trackVerticalStyle = _extends({}, _styles.trackVerticalStyleDefault, autoHide && trackAutoHeightStyle, (!scrollbarWidth || universal && !didMountUniversal) && {
                display: 'none'
            });

            return (0, _react.createElement)(tagName, _extends({}, props, { style: containerStyle, ref: function ref(_ref3) {
                    _this7.container = _ref3;
                } }), [(0, _react.cloneElement)(renderView({ style: viewStyle }), { key: 'view', ref: function ref(_ref4) {
                    _this7.view = _ref4;
                } }, children), (0, _react.cloneElement)(renderTrackHorizontal({ style: trackHorizontalStyle }), { key: 'trackHorizontal', ref: function ref(_ref5) {
                    _this7.trackHorizontal = _ref5;
                } }, (0, _react.cloneElement)(renderThumbHorizontal({ style: _styles.thumbHorizontalStyleDefault }), { ref: function ref(_ref6) {
                    _this7.thumbHorizontal = _ref6;
                } })), (0, _react.cloneElement)(renderTrackVertical({ style: trackVerticalStyle }), { key: 'trackVertical', ref: function ref(_ref7) {
                    _this7.trackVertical = _ref7;
                } }, (0, _react.cloneElement)(renderThumbVertical({ style: _styles.thumbVerticalStyleDefault }), { ref: function ref(_ref8) {
                    _this7.thumbVertical = _ref8;
                } }))]);
        }
    }]);

    return Scrollbars;
}(_react.Component);

exports["default"] = Scrollbars;


Scrollbars.propTypes = {
    onScroll: _propTypes2["default"].func,
    onScrollFrame: _propTypes2["default"].func,
    onScrollStart: _propTypes2["default"].func,
    onScrollStop: _propTypes2["default"].func,
    onUpdate: _propTypes2["default"].func,
    renderView: _propTypes2["default"].func,
    renderTrackHorizontal: _propTypes2["default"].func,
    renderTrackVertical: _propTypes2["default"].func,
    renderThumbHorizontal: _propTypes2["default"].func,
    renderThumbVertical: _propTypes2["default"].func,
    tagName: _propTypes2["default"].string,
    thumbSize: _propTypes2["default"].number,
    thumbMinSize: _propTypes2["default"].number,
    hideTracksWhenNotNeeded: _propTypes2["default"].bool,
    autoHide: _propTypes2["default"].bool,
    autoHideTimeout: _propTypes2["default"].number,
    autoHideDuration: _propTypes2["default"].number,
    autoHeight: _propTypes2["default"].bool,
    autoHeightMin: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    autoHeightMax: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string]),
    universal: _propTypes2["default"].bool,
    style: _propTypes2["default"].object,
    children: _propTypes2["default"].node
};

Scrollbars.defaultProps = {
    renderView: _defaultRenderElements.renderViewDefault,
    renderTrackHorizontal: _defaultRenderElements.renderTrackHorizontalDefault,
    renderTrackVertical: _defaultRenderElements.renderTrackVerticalDefault,
    renderThumbHorizontal: _defaultRenderElements.renderThumbHorizontalDefault,
    renderThumbVertical: _defaultRenderElements.renderThumbVerticalDefault,
    tagName: 'div',
    thumbMinSize: 30,
    hideTracksWhenNotNeeded: false,
    autoHide: false,
    autoHideTimeout: 1000,
    autoHideDuration: 200,
    autoHeight: false,
    autoHeightMin: 0,
    autoHeightMax: 200,
    universal: false
};

/***/ }),

/***/ "./node_modules/react-custom-scrollbars/lib/Scrollbars/styles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-custom-scrollbars/lib/Scrollbars/styles.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var containerStyleDefault = exports.containerStyleDefault = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
};

// Overrides containerStyleDefault properties
var containerStyleAutoHeight = exports.containerStyleAutoHeight = {
    height: 'auto'
};

var viewStyleDefault = exports.viewStyleDefault = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'scroll',
    WebkitOverflowScrolling: 'touch'
};

// Overrides viewStyleDefault properties
var viewStyleAutoHeight = exports.viewStyleAutoHeight = {
    position: 'relative',
    top: undefined,
    left: undefined,
    right: undefined,
    bottom: undefined
};

var viewStyleUniversalInitial = exports.viewStyleUniversalInitial = {
    overflow: 'hidden',
    marginRight: 0,
    marginBottom: 0
};

var trackHorizontalStyleDefault = exports.trackHorizontalStyleDefault = {
    position: 'absolute',
    height: 6
};

var trackVerticalStyleDefault = exports.trackVerticalStyleDefault = {
    position: 'absolute',
    width: 6
};

var thumbHorizontalStyleDefault = exports.thumbHorizontalStyleDefault = {
    position: 'relative',
    display: 'block',
    height: '100%'
};

var thumbVerticalStyleDefault = exports.thumbVerticalStyleDefault = {
    position: 'relative',
    display: 'block',
    width: '100%'
};

var disableSelectStyle = exports.disableSelectStyle = {
    userSelect: 'none'
};

var disableSelectStyleReset = exports.disableSelectStyleReset = {
    userSelect: ''
};

/***/ }),

/***/ "./node_modules/react-custom-scrollbars/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-custom-scrollbars/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrollbars = undefined;

var _Scrollbars = __webpack_require__(/*! ./Scrollbars */ "./node_modules/react-custom-scrollbars/lib/Scrollbars/index.js");

var _Scrollbars2 = _interopRequireDefault(_Scrollbars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _Scrollbars2["default"];
exports.Scrollbars = _Scrollbars2["default"];

/***/ }),

/***/ "./node_modules/react-custom-scrollbars/lib/utils/getInnerHeight.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-custom-scrollbars/lib/utils/getInnerHeight.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getInnerHeight;
function getInnerHeight(el) {
    var clientHeight = el.clientHeight;

    var _getComputedStyle = getComputedStyle(el),
        paddingTop = _getComputedStyle.paddingTop,
        paddingBottom = _getComputedStyle.paddingBottom;

    return clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom);
}

/***/ }),

/***/ "./node_modules/react-custom-scrollbars/lib/utils/getInnerWidth.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-custom-scrollbars/lib/utils/getInnerWidth.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getInnerWidth;
function getInnerWidth(el) {
    var clientWidth = el.clientWidth;

    var _getComputedStyle = getComputedStyle(el),
        paddingLeft = _getComputedStyle.paddingLeft,
        paddingRight = _getComputedStyle.paddingRight;

    return clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);
}

/***/ }),

/***/ "./node_modules/react-custom-scrollbars/lib/utils/getScrollbarWidth.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-custom-scrollbars/lib/utils/getScrollbarWidth.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getScrollbarWidth;

var _domCss = __webpack_require__(/*! dom-css */ "./node_modules/dom-css/index.js");

var _domCss2 = _interopRequireDefault(_domCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var scrollbarWidth = false;

function getScrollbarWidth() {
    if (scrollbarWidth !== false) return scrollbarWidth;
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        var div = document.createElement('div');
        (0, _domCss2["default"])(div, {
            width: 100,
            height: 100,
            position: 'absolute',
            top: -9999,
            overflow: 'scroll',
            MsOverflowStyle: 'scrollbar'
        });
        document.body.appendChild(div);
        scrollbarWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
    } else {
        scrollbarWidth = 0;
    }
    return scrollbarWidth || 0;
}

/***/ }),

/***/ "./node_modules/react-custom-scrollbars/lib/utils/isString.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-custom-scrollbars/lib/utils/isString.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = isString;
function isString(maybe) {
    return typeof maybe === 'string';
}

/***/ }),

/***/ "./node_modules/react-custom-scrollbars/lib/utils/returnFalse.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-custom-scrollbars/lib/utils/returnFalse.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = returnFalse;
function returnFalse() {
    return false;
}

/***/ }),

/***/ "./node_modules/rebound/dist/rebound.js":
/*!**********************************************!*\
  !*** ./node_modules/rebound/dist/rebound.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 *  Copyright (c) 2013, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var _onFrame = void 0;
if (typeof window !== 'undefined') {
  _onFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
}

if (!_onFrame && typeof process !== 'undefined' && process.title === 'node') {
  _onFrame = setImmediate;
}

_onFrame = _onFrame || function (callback) {
  window.setTimeout(callback, 1000 / 60);
};

var _onFrame$1 = _onFrame;

/* eslint-disable flowtype/no-weak-types */

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

// Bind a function to a context object.
function bind(func, context) {
  for (var _len = arguments.length, outerArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    outerArgs[_key - 2] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, innerArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      innerArgs[_key2] = arguments[_key2];
    }

    func.apply(context, concat.call(outerArgs, slice.call(innerArgs)));
  };
}

// Add all the properties in the source to the target.
function extend(target, source) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}

// Cross browser/node timer functions.
function onFrame(func) {
  return _onFrame$1(func);
}

// Lop off the first occurence of the reference in the Array.
function removeFirst(array, item) {
  var idx = array.indexOf(item);
  idx !== -1 && array.splice(idx, 1);
}

var colorCache = {};
/**
 * Converts a hex-formatted color string to its rgb-formatted equivalent. Handy
 * when performing color tweening animations
 * @public
 * @param colorString A hex-formatted color string
 * @return An rgb-formatted color string
 */
function hexToRGB(colorString) {
  if (colorCache[colorString]) {
    return colorCache[colorString];
  }
  var normalizedColor = colorString.replace('#', '');
  if (normalizedColor.length === 3) {
    normalizedColor = normalizedColor[0] + normalizedColor[0] + normalizedColor[1] + normalizedColor[1] + normalizedColor[2] + normalizedColor[2];
  }
  var parts = normalizedColor.match(/.{2}/g);
  if (!parts || parts.length < 3) {
    throw new Error('Expected a color string of format #rrggbb');
  }

  var ret = {
    r: parseInt(parts[0], 16),
    g: parseInt(parts[1], 16),
    b: parseInt(parts[2], 16)
  };

  colorCache[colorString] = ret;
  return ret;
}

/**
 * Converts a rgb-formatted color string to its hex-formatted equivalent. Handy
 * when performing color tweening animations
 * @public
 * @param colorString An rgb-formatted color string
 * @return A hex-formatted color string
 */
function rgbToHex(rNum, gNum, bNum) {
  var r = rNum.toString(16);
  var g = gNum.toString(16);
  var b = bNum.toString(16);
  r = r.length < 2 ? '0' + r : r;
  g = g.length < 2 ? '0' + g : g;
  b = b.length < 2 ? '0' + b : b;
  return '#' + r + g + b;
}

var util = Object.freeze({
	bind: bind,
	extend: extend,
	onFrame: onFrame,
	removeFirst: removeFirst,
	hexToRGB: hexToRGB,
	rgbToHex: rgbToHex
});

/**
 * This helper function does a linear interpolation of a value from
 * one range to another. This can be very useful for converting the
 * motion of a Spring to a range of UI property values. For example a
 * spring moving from position 0 to 1 could be interpolated to move a
 * view from pixel 300 to 350 and scale it from 0.5 to 1. The current
 * position of the `Spring` just needs to be run through this method
 * taking its input range in the _from_ parameters with the property
 * animation range in the _to_ parameters.
 * @public
 */
function mapValueInRange(value, fromLow, fromHigh, toLow, toHigh) {
  var fromRangeSize = fromHigh - fromLow;
  var toRangeSize = toHigh - toLow;
  var valueScale = (value - fromLow) / fromRangeSize;
  return toLow + valueScale * toRangeSize;
}

/**
 * Interpolate two hex colors in a 0 - 1 range or optionally provide a
 * custom range with fromLow,fromHight. The output will be in hex by default
 * unless asRGB is true in which case it will be returned as an rgb string.
 *
 * @public
 * @param asRGB Whether to return an rgb-style string
 * @return A string in hex color format unless asRGB is true, in which case a string in rgb format
 */
function interpolateColor(val, startColorStr, endColorStr) {
  var fromLow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var fromHigh = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var asRGB = arguments[5];

  var startColor = hexToRGB(startColorStr);
  var endColor = hexToRGB(endColorStr);
  var r = Math.floor(mapValueInRange(val, fromLow, fromHigh, startColor.r, endColor.r));
  var g = Math.floor(mapValueInRange(val, fromLow, fromHigh, startColor.g, endColor.g));
  var b = Math.floor(mapValueInRange(val, fromLow, fromHigh, startColor.b, endColor.b));
  if (asRGB) {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  } else {
    return rgbToHex(r, g, b);
  }
}

function degreesToRadians(deg) {
  return deg * Math.PI / 180;
}

function radiansToDegrees(rad) {
  return rad * 180 / Math.PI;
}

var MathUtil = Object.freeze({
	mapValueInRange: mapValueInRange,
	interpolateColor: interpolateColor,
	degreesToRadians: degreesToRadians,
	radiansToDegrees: radiansToDegrees
});

// Math for converting from
// [Origami](http://facebook.github.io/origami/) to
// [Rebound](http://facebook.github.io/rebound).
// You mostly don't need to worry about this, just use
// SpringConfig.fromOrigamiTensionAndFriction(v, v);

function tensionFromOrigamiValue(oValue) {
  return (oValue - 30.0) * 3.62 + 194.0;
}

function origamiValueFromTension(tension) {
  return (tension - 194.0) / 3.62 + 30.0;
}

function frictionFromOrigamiValue(oValue) {
  return (oValue - 8.0) * 3.0 + 25.0;
}

function origamiFromFriction(friction) {
  return (friction - 25.0) / 3.0 + 8.0;
}

var OrigamiValueConverter = Object.freeze({
	tensionFromOrigamiValue: tensionFromOrigamiValue,
	origamiValueFromTension: origamiValueFromTension,
	frictionFromOrigamiValue: frictionFromOrigamiValue,
	origamiFromFriction: origamiFromFriction
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Plays each frame of the SpringSystem on animation
 * timing loop. This is the default type of looper for a new spring system
 * as it is the most common when developing UI.
 * @public
 */
/**
 *  Copyright (c) 2013, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var AnimationLooper = function () {
  function AnimationLooper() {
    classCallCheck(this, AnimationLooper);
    this.springSystem = null;
  }

  AnimationLooper.prototype.run = function run() {
    var springSystem = getSpringSystem.call(this);

    onFrame(function () {
      springSystem.loop(Date.now());
    });
  };

  return AnimationLooper;
}();

/**
 * Resolves the SpringSystem to a resting state in a
 * tight and blocking loop. This is useful for synchronously generating
 * pre-recorded animations that can then be played on a timing loop later.
 * Sometimes this lead to better performance to pre-record a single spring
 * curve and use it to drive many animations; however, it can make dynamic
 * response to user input a bit trickier to implement.
 * @public
 */
var SimulationLooper = function () {
  function SimulationLooper(timestep) {
    classCallCheck(this, SimulationLooper);
    this.springSystem = null;
    this.time = 0;
    this.running = false;

    this.timestep = timestep || 16.667;
  }

  SimulationLooper.prototype.run = function run() {
    var springSystem = getSpringSystem.call(this);

    if (this.running) {
      return;
    }
    this.running = true;
    while (!springSystem.getIsIdle()) {
      springSystem.loop(this.time += this.timestep);
    }
    this.running = false;
  };

  return SimulationLooper;
}();

/**
 * Resolves the SpringSystem one step at a
 * time controlled by an outside loop. This is useful for testing and
 * verifying the behavior of a SpringSystem or if you want to control your own
 * timing loop for some reason e.g. slowing down or speeding up the
 * simulation.
 * @public
 */
var SteppingSimulationLooper = function () {
  function SteppingSimulationLooper() {
    classCallCheck(this, SteppingSimulationLooper);
    this.springSystem = null;
    this.time = 0;
    this.running = false;
  }

  SteppingSimulationLooper.prototype.run = function run() {}
  // this.run is NOOP'd here to allow control from the outside using
  // this.step.


  // Perform one step toward resolving the SpringSystem.
  ;

  SteppingSimulationLooper.prototype.step = function step(timestep) {
    var springSystem = getSpringSystem.call(this);
    springSystem.loop(this.time += timestep);
  };

  return SteppingSimulationLooper;
}();

function getSpringSystem() {
  if (this.springSystem == null) {
    throw new Error('cannot run looper without a springSystem');
  }
  return this.springSystem;
}



var Loopers = Object.freeze({
	AnimationLooper: AnimationLooper,
	SimulationLooper: SimulationLooper,
	SteppingSimulationLooper: SteppingSimulationLooper
});

/**
 * Provides math for converting from Origami PopAnimation
 * config values to regular Origami tension and friction values. If you are
 * trying to replicate prototypes made with PopAnimation patches in Origami,
 * then you should create your springs with
 * SpringSystem.createSpringWithBouncinessAndSpeed, which uses this Math
 * internally to create a spring to match the provided PopAnimation
 * configuration from Origami.
 */
var BouncyConversion = function () {
  function BouncyConversion(bounciness, speed) {
    classCallCheck(this, BouncyConversion);

    this.bounciness = bounciness;
    this.speed = speed;

    var b = this.normalize(bounciness / 1.7, 0, 20.0);
    b = this.projectNormal(b, 0.0, 0.8);
    var s = this.normalize(speed / 1.7, 0, 20.0);

    this.bouncyTension = this.projectNormal(s, 0.5, 200);
    this.bouncyFriction = this.quadraticOutInterpolation(b, this.b3Nobounce(this.bouncyTension), 0.01);
  }

  BouncyConversion.prototype.normalize = function normalize(value, startValue, endValue) {
    return (value - startValue) / (endValue - startValue);
  };

  BouncyConversion.prototype.projectNormal = function projectNormal(n, start, end) {
    return start + n * (end - start);
  };

  BouncyConversion.prototype.linearInterpolation = function linearInterpolation(t, start, end) {
    return t * end + (1.0 - t) * start;
  };

  BouncyConversion.prototype.quadraticOutInterpolation = function quadraticOutInterpolation(t, start, end) {
    return this.linearInterpolation(2 * t - t * t, start, end);
  };

  BouncyConversion.prototype.b3Friction1 = function b3Friction1(x) {
    return 0.0007 * Math.pow(x, 3) - 0.031 * Math.pow(x, 2) + 0.64 * x + 1.28;
  };

  BouncyConversion.prototype.b3Friction2 = function b3Friction2(x) {
    return 0.000044 * Math.pow(x, 3) - 0.006 * Math.pow(x, 2) + 0.36 * x + 2;
  };

  BouncyConversion.prototype.b3Friction3 = function b3Friction3(x) {
    return 0.00000045 * Math.pow(x, 3) - 0.000332 * Math.pow(x, 2) + 0.1078 * x + 5.84;
  };

  BouncyConversion.prototype.b3Nobounce = function b3Nobounce(tension) {
    var friction = 0;
    if (tension <= 18) {
      friction = this.b3Friction1(tension);
    } else if (tension > 18 && tension <= 44) {
      friction = this.b3Friction2(tension);
    } else {
      friction = this.b3Friction3(tension);
    }
    return friction;
  };

  return BouncyConversion;
}();

/**
 * Maintains a set of tension and friction constants
 * for a Spring. You can use fromOrigamiTensionAndFriction to convert
 * values from the [Origami](http://facebook.github.io/origami/)
 * design tool directly to Rebound spring constants.
 * @public
 */

var SpringConfig = function () {

  /**
   * Convert an origami Spring tension and friction to Rebound spring
   * constants. If you are prototyping a design with Origami, this
   * makes it easy to make your springs behave exactly the same in
   * Rebound.
   * @public
   */
  SpringConfig.fromOrigamiTensionAndFriction = function fromOrigamiTensionAndFriction(tension, friction) {
    return new SpringConfig(tensionFromOrigamiValue(tension), frictionFromOrigamiValue(friction));
  };

  /**
   * Convert an origami PopAnimation Spring bounciness and speed to Rebound
   * spring constants. If you are using PopAnimation patches in Origami, this
   * utility will provide springs that match your prototype.
   * @public
   */


  SpringConfig.fromBouncinessAndSpeed = function fromBouncinessAndSpeed(bounciness, speed) {
    var bouncyConversion = new BouncyConversion(bounciness, speed);
    return SpringConfig.fromOrigamiTensionAndFriction(bouncyConversion.bouncyTension, bouncyConversion.bouncyFriction);
  };

  /**
   * Create a SpringConfig with no tension or a coasting spring with some
   * amount of Friction so that it does not coast infininitely.
   * @public
   */


  SpringConfig.coastingConfigWithOrigamiFriction = function coastingConfigWithOrigamiFriction(friction) {
    return new SpringConfig(0, frictionFromOrigamiValue(friction));
  };

  function SpringConfig(tension, friction) {
    classCallCheck(this, SpringConfig);

    this.tension = tension;
    this.friction = friction;
  }

  return SpringConfig;
}();

SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG = SpringConfig.fromOrigamiTensionAndFriction(40, 7);

/**
 * Consists of a position and velocity. A Spring uses
 * this internally to keep track of its current and prior position and
 * velocity values.
 */
var PhysicsState = function PhysicsState() {
  classCallCheck(this, PhysicsState);
  this.position = 0;
  this.velocity = 0;
};

/**
 * Provides a model of a classical spring acting to
 * resolve a body to equilibrium. Springs have configurable
 * tension which is a force multipler on the displacement of the
 * spring from its rest point or `endValue` as defined by [Hooke's
 * law](http://en.wikipedia.org/wiki/Hooke's_law). Springs also have
 * configurable friction, which ensures that they do not oscillate
 * infinitely. When a Spring is displaced by updating it's resting
 * or `currentValue`, the SpringSystems that contain that Spring
 * will automatically start looping to solve for equilibrium. As each
 * timestep passes, `SpringListener` objects attached to the Spring
 * will be notified of the updates providing a way to drive an
 * animation off of the spring's resolution curve.
 * @public
 */

var Spring = function () {
  function Spring(springSystem) {
    classCallCheck(this, Spring);
    this.listeners = [];
    this._startValue = 0;
    this._currentState = new PhysicsState();
    this._displacementFromRestThreshold = 0.001;
    this._endValue = 0;
    this._overshootClampingEnabled = false;
    this._previousState = new PhysicsState();
    this._restSpeedThreshold = 0.001;
    this._tempState = new PhysicsState();
    this._timeAccumulator = 0;
    this._wasAtRest = true;

    this._id = 's' + Spring._ID++;
    this._springSystem = springSystem;
  }

  /**
   * Remove a Spring from simulation and clear its listeners.
   * @public
   */


  Spring.prototype.destroy = function destroy() {
    this.listeners = [];
    this._springSystem.deregisterSpring(this);
  };

  /**
   * Get the id of the spring, which can be used to retrieve it from
   * the SpringSystems it participates in later.
   * @public
   */


  Spring.prototype.getId = function getId() {
    return this._id;
  };

  /**
   * Set the configuration values for this Spring. A SpringConfig
   * contains the tension and friction values used to solve for the
   * equilibrium of the Spring in the physics loop.
   * @public
   */


  Spring.prototype.setSpringConfig = function setSpringConfig(springConfig) {
    this._springConfig = springConfig;
    return this;
  };

  /**
   * Retrieve the SpringConfig used by this Spring.
   * @public
   */


  Spring.prototype.getSpringConfig = function getSpringConfig() {
    return this._springConfig;
  };

  /**
   * Set the current position of this Spring. Listeners will be updated
   * with this value immediately. If the rest or `endValue` is not
   * updated to match this value, then the spring will be dispalced and
   * the SpringSystem will start to loop to restore the spring to the
   * `endValue`.
   *
   * A common pattern is to move a Spring around without animation by
   * calling.
   *
   * ```
   * spring.setCurrentValue(n).setAtRest();
   * ```
   *
   * This moves the Spring to a new position `n`, sets the endValue
   * to `n`, and removes any velocity from the `Spring`. By doing
   * this you can allow the `SpringListener` to manage the position
   * of UI elements attached to the spring even when moving without
   * animation. For example, when dragging an element you can
   * update the position of an attached view through a spring
   * by calling `spring.setCurrentValue(x)`. When
   * the gesture ends you can update the Springs
   * velocity and endValue
   * `spring.setVelocity(gestureEndVelocity).setEndValue(flingTarget)`
   * to cause it to naturally animate the UI element to the resting
   * position taking into account existing velocity. The codepaths for
   * synchronous movement and spring driven animation can
   * be unified using this technique.
   * @public
   */


  Spring.prototype.setCurrentValue = function setCurrentValue(currentValue, skipSetAtRest) {
    this._startValue = currentValue;
    this._currentState.position = currentValue;
    if (!skipSetAtRest) {
      this.setAtRest();
    }
    this.notifyPositionUpdated(false, false);
    return this;
  };

  /**
   * Get the position that the most recent animation started at. This
   * can be useful for determining the number off oscillations that
   * have occurred.
   * @public
   */


  Spring.prototype.getStartValue = function getStartValue() {
    return this._startValue;
  };

  /**
   * Retrieve the current value of the Spring.
   * @public
   */


  Spring.prototype.getCurrentValue = function getCurrentValue() {
    return this._currentState.position;
  };

  /**
   * Get the absolute distance of the Spring from its resting endValue
   * position.
   * @public
   */


  Spring.prototype.getCurrentDisplacementDistance = function getCurrentDisplacementDistance() {
    return this.getDisplacementDistanceForState(this._currentState);
  };

  /**
   * Get the absolute distance of the Spring from a given state value
   */


  Spring.prototype.getDisplacementDistanceForState = function getDisplacementDistanceForState(state) {
    return Math.abs(this._endValue - state.position);
  };

  /**
   * Set the endValue or resting position of the spring. If this
   * value is different than the current value, the SpringSystem will
   * be notified and will begin running its solver loop to resolve
   * the Spring to equilibrium. Any listeners that are registered
   * for onSpringEndStateChange will also be notified of this update
   * immediately.
   * @public
   */


  Spring.prototype.setEndValue = function setEndValue(endValue) {
    if (this._endValue === endValue && this.isAtRest()) {
      return this;
    }
    this._startValue = this.getCurrentValue();
    this._endValue = endValue;
    this._springSystem.activateSpring(this.getId());
    for (var i = 0, len = this.listeners.length; i < len; i++) {
      var listener = this.listeners[i];
      var onChange = listener.onSpringEndStateChange;
      onChange && onChange(this);
    }
    return this;
  };

  /**
   * Retrieve the endValue or resting position of this spring.
   * @public
   */


  Spring.prototype.getEndValue = function getEndValue() {
    return this._endValue;
  };

  /**
   * Set the current velocity of the Spring, in pixels per second. As
   * previously mentioned, this can be useful when you are performing
   * a direct manipulation gesture. When a UI element is released you
   * may call setVelocity on its animation Spring so that the Spring
   * continues with the same velocity as the gesture ended with. The
   * friction, tension, and displacement of the Spring will then
   * govern its motion to return to rest on a natural feeling curve.
   * @public
   */


  Spring.prototype.setVelocity = function setVelocity(velocity) {
    if (velocity === this._currentState.velocity) {
      return this;
    }
    this._currentState.velocity = velocity;
    this._springSystem.activateSpring(this.getId());
    return this;
  };

  /**
   * Get the current velocity of the Spring, in pixels per second.
   * @public
   */


  Spring.prototype.getVelocity = function getVelocity() {
    return this._currentState.velocity;
  };

  /**
   * Set a threshold value for the movement speed of the Spring below
   * which it will be considered to be not moving or resting.
   * @public
   */


  Spring.prototype.setRestSpeedThreshold = function setRestSpeedThreshold(restSpeedThreshold) {
    this._restSpeedThreshold = restSpeedThreshold;
    return this;
  };

  /**
   * Retrieve the rest speed threshold for this Spring.
   * @public
   */


  Spring.prototype.getRestSpeedThreshold = function getRestSpeedThreshold() {
    return this._restSpeedThreshold;
  };

  /**
   * Set a threshold value for displacement below which the Spring
   * will be considered to be not displaced i.e. at its resting
   * `endValue`.
   * @public
   */


  Spring.prototype.setRestDisplacementThreshold = function setRestDisplacementThreshold(displacementFromRestThreshold) {
    this._displacementFromRestThreshold = displacementFromRestThreshold;
  };

  /**
   * Retrieve the rest displacement threshold for this spring.
   * @public
   */


  Spring.prototype.getRestDisplacementThreshold = function getRestDisplacementThreshold() {
    return this._displacementFromRestThreshold;
  };

  /**
   * Enable overshoot clamping. This means that the Spring will stop
   * immediately when it reaches its resting position regardless of
   * any existing momentum it may have. This can be useful for certain
   * types of animations that should not oscillate such as a scale
   * down to 0 or alpha fade.
   * @public
   */


  Spring.prototype.setOvershootClampingEnabled = function setOvershootClampingEnabled(enabled) {
    this._overshootClampingEnabled = enabled;
    return this;
  };

  /**
   * Check if overshoot clamping is enabled for this spring.
   * @public
   */


  Spring.prototype.isOvershootClampingEnabled = function isOvershootClampingEnabled() {
    return this._overshootClampingEnabled;
  };

  /**
   * Check if the Spring has gone past its end point by comparing
   * the direction it was moving in when it started to the current
   * position and end value.
   * @public
   */


  Spring.prototype.isOvershooting = function isOvershooting() {
    var start = this._startValue;
    var end = this._endValue;
    return this._springConfig.tension > 0 && (start < end && this.getCurrentValue() > end || start > end && this.getCurrentValue() < end);
  };

  /**
   * The main solver method for the Spring. It takes
   * the current time and delta since the last time step and performs
   * an RK4 integration to get the new position and velocity state
   * for the Spring based on the tension, friction, velocity, and
   * displacement of the Spring.
   * @public
   */


  Spring.prototype.advance = function advance(time, realDeltaTime) {
    var isAtRest = this.isAtRest();

    if (isAtRest && this._wasAtRest) {
      return;
    }

    var adjustedDeltaTime = realDeltaTime;
    if (realDeltaTime > Spring.MAX_DELTA_TIME_SEC) {
      adjustedDeltaTime = Spring.MAX_DELTA_TIME_SEC;
    }

    this._timeAccumulator += adjustedDeltaTime;

    var tension = this._springConfig.tension;
    var friction = this._springConfig.friction;
    var position = this._currentState.position;
    var velocity = this._currentState.velocity;
    var tempPosition = this._tempState.position;
    var tempVelocity = this._tempState.velocity;
    var aVelocity = void 0;
    var aAcceleration = void 0;
    var bVelocity = void 0;
    var bAcceleration = void 0;
    var cVelocity = void 0;
    var cAcceleration = void 0;
    var dVelocity = void 0;
    var dAcceleration = void 0;
    var dxdt = void 0;
    var dvdt = void 0;

    while (this._timeAccumulator >= Spring.SOLVER_TIMESTEP_SEC) {
      this._timeAccumulator -= Spring.SOLVER_TIMESTEP_SEC;

      if (this._timeAccumulator < Spring.SOLVER_TIMESTEP_SEC) {
        this._previousState.position = position;
        this._previousState.velocity = velocity;
      }

      aVelocity = velocity;
      aAcceleration = tension * (this._endValue - tempPosition) - friction * velocity;

      tempPosition = position + aVelocity * Spring.SOLVER_TIMESTEP_SEC * 0.5;
      tempVelocity = velocity + aAcceleration * Spring.SOLVER_TIMESTEP_SEC * 0.5;
      bVelocity = tempVelocity;
      bAcceleration = tension * (this._endValue - tempPosition) - friction * tempVelocity;

      tempPosition = position + bVelocity * Spring.SOLVER_TIMESTEP_SEC * 0.5;
      tempVelocity = velocity + bAcceleration * Spring.SOLVER_TIMESTEP_SEC * 0.5;
      cVelocity = tempVelocity;
      cAcceleration = tension * (this._endValue - tempPosition) - friction * tempVelocity;

      tempPosition = position + cVelocity * Spring.SOLVER_TIMESTEP_SEC;
      tempVelocity = velocity + cAcceleration * Spring.SOLVER_TIMESTEP_SEC;
      dVelocity = tempVelocity;
      dAcceleration = tension * (this._endValue - tempPosition) - friction * tempVelocity;

      dxdt = 1.0 / 6.0 * (aVelocity + 2.0 * (bVelocity + cVelocity) + dVelocity);
      dvdt = 1.0 / 6.0 * (aAcceleration + 2.0 * (bAcceleration + cAcceleration) + dAcceleration);

      position += dxdt * Spring.SOLVER_TIMESTEP_SEC;
      velocity += dvdt * Spring.SOLVER_TIMESTEP_SEC;
    }

    this._tempState.position = tempPosition;
    this._tempState.velocity = tempVelocity;

    this._currentState.position = position;
    this._currentState.velocity = velocity;

    if (this._timeAccumulator > 0) {
      this._interpolate(this._timeAccumulator / Spring.SOLVER_TIMESTEP_SEC);
    }

    if (this.isAtRest() || this._overshootClampingEnabled && this.isOvershooting()) {
      if (this._springConfig.tension > 0) {
        this._startValue = this._endValue;
        this._currentState.position = this._endValue;
      } else {
        this._endValue = this._currentState.position;
        this._startValue = this._endValue;
      }
      this.setVelocity(0);
      isAtRest = true;
    }

    var notifyActivate = false;
    if (this._wasAtRest) {
      this._wasAtRest = false;
      notifyActivate = true;
    }

    var notifyAtRest = false;
    if (isAtRest) {
      this._wasAtRest = true;
      notifyAtRest = true;
    }

    this.notifyPositionUpdated(notifyActivate, notifyAtRest);
  };

  Spring.prototype.notifyPositionUpdated = function notifyPositionUpdated(notifyActivate, notifyAtRest) {
    for (var i = 0, len = this.listeners.length; i < len; i++) {
      var listener = this.listeners[i];
      if (notifyActivate && listener.onSpringActivate) {
        listener.onSpringActivate(this);
      }

      if (listener.onSpringUpdate) {
        listener.onSpringUpdate(this);
      }

      if (notifyAtRest && listener.onSpringAtRest) {
        listener.onSpringAtRest(this);
      }
    }
  };

  /**
   * Check if the SpringSystem should advance. Springs are advanced
   * a final frame after they reach equilibrium to ensure that the
   * currentValue is exactly the requested endValue regardless of the
   * displacement threshold.
   * @public
   */


  Spring.prototype.systemShouldAdvance = function systemShouldAdvance() {
    return !this.isAtRest() || !this.wasAtRest();
  };

  Spring.prototype.wasAtRest = function wasAtRest() {
    return this._wasAtRest;
  };

  /**
   * Check if the Spring is atRest meaning that it's currentValue and
   * endValue are the same and that it has no velocity. The previously
   * described thresholds for speed and displacement define the bounds
   * of this equivalence check. If the Spring has 0 tension, then it will
   * be considered at rest whenever its absolute velocity drops below the
   * restSpeedThreshold.
   * @public
   */


  Spring.prototype.isAtRest = function isAtRest() {
    return Math.abs(this._currentState.velocity) < this._restSpeedThreshold && (this.getDisplacementDistanceForState(this._currentState) <= this._displacementFromRestThreshold || this._springConfig.tension === 0);
  };

  /**
   * Force the spring to be at rest at its current position. As
   * described in the documentation for setCurrentValue, this method
   * makes it easy to do synchronous non-animated updates to ui
   * elements that are attached to springs via SpringListeners.
   * @public
   */


  Spring.prototype.setAtRest = function setAtRest() {
    this._endValue = this._currentState.position;
    this._tempState.position = this._currentState.position;
    this._currentState.velocity = 0;
    return this;
  };

  Spring.prototype._interpolate = function _interpolate(alpha) {
    this._currentState.position = this._currentState.position * alpha + this._previousState.position * (1 - alpha);
    this._currentState.velocity = this._currentState.velocity * alpha + this._previousState.velocity * (1 - alpha);
  };

  Spring.prototype.getListeners = function getListeners() {
    return this.listeners;
  };

  Spring.prototype.addListener = function addListener(newListener) {
    this.listeners.push(newListener);
    return this;
  };

  Spring.prototype.removeListener = function removeListener(listenerToRemove) {
    removeFirst(this.listeners, listenerToRemove);
    return this;
  };

  Spring.prototype.removeAllListeners = function removeAllListeners() {
    this.listeners = [];
    return this;
  };

  Spring.prototype.currentValueIsApproximately = function currentValueIsApproximately(value) {
    return Math.abs(this.getCurrentValue() - value) <= this.getRestDisplacementThreshold();
  };

  return Spring;
}();

Spring._ID = 0;
Spring.MAX_DELTA_TIME_SEC = 0.064;
Spring.SOLVER_TIMESTEP_SEC = 0.001;

/**
 * A set of Springs that all run on the same physics
 * timing loop. To get started with a Rebound animation, first
 * create a new SpringSystem and then add springs to it.
 * @public
 */

var SpringSystem = function () {
  function SpringSystem(looper) {
    classCallCheck(this, SpringSystem);
    this.listeners = [];
    this._activeSprings = [];
    this._idleSpringIndices = [];
    this._isIdle = true;
    this._lastTimeMillis = -1;
    this._springRegistry = {};

    this.looper = looper || new AnimationLooper();
    this.looper.springSystem = this;
  }

  /**
   * A SpringSystem is iterated by a looper. The looper is responsible
   * for executing each frame as the SpringSystem is resolved to idle.
   * There are three types of Loopers described below AnimationLooper,
   * SimulationLooper, and SteppingSimulationLooper. AnimationLooper is
   * the default as it is the most useful for common UI animations.
   * @public
   */


  SpringSystem.prototype.setLooper = function setLooper(looper) {
    this.looper = looper;
    looper.springSystem = this;
  };

  /**
   * Add a new spring to this SpringSystem. This Spring will now be solved for
   * during the physics iteration loop. By default the spring will use the
   * default Origami spring config with 40 tension and 7 friction, but you can
   * also provide your own values here.
   * @public
   */


  SpringSystem.prototype.createSpring = function createSpring(tension, friction) {
    var springConfig = void 0;
    if (tension === undefined || friction === undefined) {
      springConfig = SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG;
    } else {
      springConfig = SpringConfig.fromOrigamiTensionAndFriction(tension, friction);
    }
    return this.createSpringWithConfig(springConfig);
  };

  /**
   * Add a spring with a specified bounciness and speed. To replicate Origami
   * compositions based on PopAnimation patches, use this factory method to
   * create matching springs.
   * @public
   */


  SpringSystem.prototype.createSpringWithBouncinessAndSpeed = function createSpringWithBouncinessAndSpeed(bounciness, speed) {
    var springConfig = void 0;
    if (bounciness === undefined || speed === undefined) {
      springConfig = SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG;
    } else {
      springConfig = SpringConfig.fromBouncinessAndSpeed(bounciness, speed);
    }
    return this.createSpringWithConfig(springConfig);
  };

  /**
   * Add a spring with the provided SpringConfig.
   * @public
   */


  SpringSystem.prototype.createSpringWithConfig = function createSpringWithConfig(springConfig) {
    var spring = new Spring(this);
    this.registerSpring(spring);
    spring.setSpringConfig(springConfig);
    return spring;
  };

  /**
   * Check if a SpringSystem is idle or active. If all of the Springs in the
   * SpringSystem are at rest, i.e. the physics forces have reached equilibrium,
   * then this method will return true.
   * @public
   */


  SpringSystem.prototype.getIsIdle = function getIsIdle() {
    return this._isIdle;
  };

  /**
   * Retrieve a specific Spring from the SpringSystem by id. This
   * can be useful for inspecting the state of a spring before
   * or after an integration loop in the SpringSystem executes.
   * @public
   */


  SpringSystem.prototype.getSpringById = function getSpringById(id) {
    return this._springRegistry[id];
  };

  /**
   * Get a listing of all the springs registered with this
   * SpringSystem.
   * @public
   */


  SpringSystem.prototype.getAllSprings = function getAllSprings() {
    var vals = [];
    for (var _id in this._springRegistry) {
      if (this._springRegistry.hasOwnProperty(_id)) {
        vals.push(this._springRegistry[_id]);
      }
    }
    return vals;
  };

  /**
   * Manually add a spring to this system. This is called automatically
   * if a Spring is created with SpringSystem#createSpring.
   *
   * This method sets the spring up in the registry so that it can be solved
   * in the solver loop.
   * @public
   */


  SpringSystem.prototype.registerSpring = function registerSpring(spring) {
    this._springRegistry[spring.getId()] = spring;
  };

  /**
   * Deregister a spring with this SpringSystem. The SpringSystem will
   * no longer consider this Spring during its integration loop once
   * this is called. This is normally done automatically for you when
   * you call Spring#destroy.
   * @public
   */


  SpringSystem.prototype.deregisterSpring = function deregisterSpring(spring) {
    removeFirst(this._activeSprings, spring);
    delete this._springRegistry[spring.getId()];
  };

  SpringSystem.prototype.advance = function advance(time, deltaTime) {
    while (this._idleSpringIndices.length > 0) {
      this._idleSpringIndices.pop();
    }
    for (var i = 0, len = this._activeSprings.length; i < len; i++) {
      var spring = this._activeSprings[i];
      if (spring.systemShouldAdvance()) {
        spring.advance(time / 1000.0, deltaTime / 1000.0);
      } else {
        this._idleSpringIndices.push(this._activeSprings.indexOf(spring));
      }
    }
    while (this._idleSpringIndices.length > 0) {
      var idx = this._idleSpringIndices.pop();
      idx >= 0 && this._activeSprings.splice(idx, 1);
    }
  };

  /**
   * This is the main solver loop called to move the simulation
   * forward through time. Before each pass in the solver loop
   * onBeforeIntegrate is called on an any listeners that have
   * registered themeselves with the SpringSystem. This gives you
   * an opportunity to apply any constraints or adjustments to
   * the springs that should be enforced before each iteration
   * loop. Next the advance method is called to move each Spring in
   * the systemShouldAdvance forward to the current time. After the
   * integration step runs in advance, onAfterIntegrate is called
   * on any listeners that have registered themselves with the
   * SpringSystem. This gives you an opportunity to run any post
   * integration constraints or adjustments on the Springs in the
   * SpringSystem.
   * @public
   */


  SpringSystem.prototype.loop = function loop(currentTimeMillis) {
    var listener = void 0;
    if (this._lastTimeMillis === -1) {
      this._lastTimeMillis = currentTimeMillis - 1;
    }
    var ellapsedMillis = currentTimeMillis - this._lastTimeMillis;
    this._lastTimeMillis = currentTimeMillis;

    var i = 0;
    var len = this.listeners.length;
    for (i = 0; i < len; i++) {
      listener = this.listeners[i];
      listener.onBeforeIntegrate && listener.onBeforeIntegrate(this);
    }

    this.advance(currentTimeMillis, ellapsedMillis);
    if (this._activeSprings.length === 0) {
      this._isIdle = true;
      this._lastTimeMillis = -1;
    }

    for (i = 0; i < len; i++) {
      listener = this.listeners[i];
      listener.onAfterIntegrate && listener.onAfterIntegrate(this);
    }

    if (!this._isIdle) {
      this.looper.run();
    }
  };

  /**
   * Used to notify the SpringSystem that a Spring has become displaced.
   * The system responds by starting its solver loop up if it is currently idle.
   */


  SpringSystem.prototype.activateSpring = function activateSpring(springId) {
    var spring = this._springRegistry[springId];
    if (this._activeSprings.indexOf(spring) === -1) {
      this._activeSprings.push(spring);
    }
    if (this.getIsIdle()) {
      this._isIdle = false;
      this.looper.run();
    }
  };

  /**
   * Add a listener to the SpringSystem to receive before/after integration
   * notifications allowing Springs to be constrained or adjusted.
   * @public
   */


  SpringSystem.prototype.addListener = function addListener(listener) {
    this.listeners.push(listener);
  };

  /**
   * Remove a previously added listener on the SpringSystem.
   * @public
   */


  SpringSystem.prototype.removeListener = function removeListener(listener) {
    removeFirst(this.listeners, listener);
  };

  /**
   * Remove all previously added listeners on the SpringSystem.
   * @public
   */


  SpringSystem.prototype.removeAllListeners = function removeAllListeners() {
    this.listeners = [];
  };

  return SpringSystem;
}();

var index = _extends({}, Loopers, {
  OrigamiValueConverter: OrigamiValueConverter,
  MathUtil: MathUtil,
  Spring: Spring,
  SpringConfig: SpringConfig,
  SpringSystem: SpringSystem,
  util: _extends({}, util, MathUtil)
});

return index;

})));


/***/ }),

/***/ "./node_modules/to-camel-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-camel-case/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var space = __webpack_require__(/*! to-space-case */ "./node_modules/to-space-case/index.js")

/**
 * Export.
 */

module.exports = toCamelCase

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return space(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}


/***/ }),

/***/ "./node_modules/to-no-case/index.js":
/*!******************************************!*\
  !*** ./node_modules/to-no-case/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Export.
 */

module.exports = toNoCase

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/
var hasSeparator = /(_|-|\.|:)/
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase()
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
  return string.toLowerCase()
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : ''
  })
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}


/***/ }),

/***/ "./node_modules/to-space-case/index.js":
/*!*********************************************!*\
  !*** ./node_modules/to-space-case/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var clean = __webpack_require__(/*! to-no-case */ "./node_modules/to-no-case/index.js")

/**
 * Export.
 */

module.exports = toSpaceCase

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : ''
  }).trim()
}


/***/ })

};;
//# sourceMappingURL=4.render-page.js.map