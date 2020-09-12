exports.ids = [2];
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
 false ? undefined : void 0;
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

/***/ "./plugins/gatsby-plugin-top-layout sync recursive":
/*!***********************************************!*\
  !*** ./plugins/gatsby-plugin-top-layout sync ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./plugins/gatsby-plugin-top-layout sync recursive";

/***/ }),

/***/ "./src/components/Actions/SearchListItem.tsx":
/*!***************************************************!*\
  !*** ./src/components/Actions/SearchListItem.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (({
  title,
  subTitle,
  slug,
  linkOnClick
}) => {
  const titleName = JSON.stringify(title, null, 4);
  const subTitleName = JSON.stringify(subTitle, null, 4);
  const path = JSON.stringify(slug, null, 4);

  function movePage() {
    linkOnClick();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: movePage,
    to: path.replace(/\"/g, "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_1__["default"], {
    in: true,
    timeout: 500
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexChild, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, titleName.replace(/\"/g, "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, subTitleName !== "null" && subTitleName.replace(/\"/g, ""))))));
});
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  aspect-ratio: 16/9;
  margin: 0.5rem 0;

  @media (max-width: ${props => props.theme.mediaQueryTresholds.M}px) {
    margin: 0.25rem 0;
  }
`;
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul`
  list-style: none;
  padding: 0;
  display: grid;
  place-items: center;
`;
const FlexChild = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li`
  width: 80%;
  display: flex;
  word-break: break-all;
  flex-direction: column;
  padding: 1rem;
  color: ${props => props.theme.navigator.colors.postsListItemLink};
  border-radius: 50px;
  background-color: ${props => props.theme.search.colors.listBackground};
  text-align: center;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 1.2s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    color: ${props => props.theme.navigator.colors.postsListItemLinkHover};
    background-color: ${props => props.theme.search.colors.hoverBackground};
  }

  h2 {
    margin: 0;
    font-weight: 700;
  }

  small {
    font-weight: 400;
    font-size: 18px;
  }

  @media (max-width: ${props => props.theme.mediaQueryTresholds.L}px) {
    h2 {
      font-size: 20px;
    }

    small {
      font-size: 14px;
    }
  }

  @media (max-width: ${props => props.theme.mediaQueryTresholds.M}px) {
    h2 {
      font-size: 16px;
    }

    small {
      font-size: 12px;
    }
  }
`;

/***/ }),

/***/ "./src/components/Navigator/List.tsx":
/*!*******************************************!*\
  !*** ./src/components/Navigator/List.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _ListHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListHeader */ "./src/components/Navigator/ListHeader.tsx");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItem */ "./src/components/Navigator/ListItem.tsx");
/* harmony import */ var _Scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Scroll */ "./src/components/Scroll/index.tsx");





/* harmony default export */ __webpack_exports__["default"] = (({
  posts,
  linkOnClick,
  expandOnClick,
  removeFilter,
  categoryFilter,
  navigatorShape
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Posts, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Scroll__WEBPACK_IMPORTED_MODULE_4__["default"], {
    forceCheckOnScroll: true,
    isNavigator: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Inner, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    expandOnClick: expandOnClick,
    categoryFilter: categoryFilter,
    navigatorShape: navigatorShape,
    removeFilter: removeFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostList, null, posts.edges && posts.edges.map((post, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: i,
    post: post,
    linkOnClick: linkOnClick,
    categoryFilter: categoryFilter
  }))))));
});
const Posts = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
`;
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding: calc(${props => props.theme.bars.sizes.infoBar}px + 1.3rem) 1.3rem
    calc(${props => props.theme.bars.sizes.actionsBar}px + 1.3rem) 1.3rem;

  @media (min-width: ${props => props.theme.mediaQueryTresholds.M}px) {
    padding: calc(${props => props.theme.bars.sizes.infoBar}px + 2rem) 2rem
      calc(${props => props.theme.bars.sizes.actionsBar}px + 2rem) 2rem;
  }

  @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
    padding: 2rem calc(1rem + 17px) calc(2rem + 17px) 2rem;
    left: ${props => props.theme.info.sizes.width}px;
    .moving-featured &,
    .is-aside & {
      padding: 1rem 0.5rem 1rem 0.5rem;
    }
  }
`;
const PostList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul`
  list-style: none;
  margin: 0;
  padding: 0;
  .is-aside.closed &,
  .moving-featured.closed & {
    display: none;
  }
`;

/***/ }),

/***/ "./src/components/Navigator/ListHeader.tsx":
/*!*************************************************!*\
  !*** ./src/components/Navigator/ListHeader.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (({
  expandOnClick,
  categoryFilter,
  navigatorShape,
  removeFilter
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, navigatorShape === "closed" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Closed, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "List of posts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-label": "Expand the list",
    onClick: expandOnClick,
    title: "Expand the list",
    className: "expandButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4___default.a, null))), navigatorShape === "open" && categoryFilter !== "all posts" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Filter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Category Filter:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, categoryFilter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-label": "Remove filtering",
    onClick: removeFilter,
    title: "Clear filtering",
    className: "removeButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, null))));
});
const Closed = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: none;

  .is-aside.closed &,
  .moving-featured.closed & {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    height: ${props => props.theme.navigator.sizes.closedHeight}px;
    padding: 0 30px 0 40px;
  }

  & h1 {
    font-size: 1.1em;
    color: ${props => props.theme.navigator.colors.postsHeader};
    font-weight: 600;
    margin: -0.2em 0 0 0;
    text-transform: uppercase;
    & small {
      font-size: 0.6em;
      display: block;
      margin: 0 0 0.1em;
      font-weight: 300;
      letter-spacing: 0.2em;
    }
  }

  .expandButton {
    color: ${props => props.theme.navigator.colors.postsHeader};
  }
`;
const Filter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin: 0 calc(-0.5rem + ${props => props.theme.base.sizes.linesMargin}) 1em
    calc(-0.5rem + ${props => props.theme.base.sizes.linesMargin});
  position: relative;
  font-size: 1.2em;
  line-height: 1;
  color: ${props => props.theme.base.colors.accent};
  border-bottom: 1px solid ${props => props.theme.base.colors.lines};
  padding: 0 1em 1em;
  font-weight: 300;
  .removeButton {
    position: absolute;
    top: 0;
    right: 0;
  }
  & strong {
    font-weight: 600;
    display: block;
  }
  & small {
    display: block;
    margin: 0 0 0.3em 0;
  }
  @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
    margin: 0 0 1em 0;
    padding: 0 1em 1.5em;
    .is-aside & {
      padding: 0 0 1em 0.5em;
      margin: 0 calc(-0.5rem + ${props => props.theme.base.sizes.linesMargin})
        1em calc(-0.5rem + ${props => props.theme.base.sizes.linesMargin});
    }
  }
`;

/***/ }),

/***/ "./src/components/Navigator/ListItem.tsx":
/*!***********************************************!*\
  !*** ./src/components/Navigator/ListItem.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Actions_SearchListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Actions/SearchListItem */ "./src/components/Actions/SearchListItem.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");



/* harmony default export */ __webpack_exports__["default"] = (({
  post,
  categoryFilter,
  linkOnClick
}) => {
  const {
    0: hidden,
    1: setHidden
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const category = post.node.frontmatter.category;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (categoryFilter === "all posts") {
      setHidden(false);
    } else if (category !== categoryFilter) {
      setHidden(true);
    } else if (category === categoryFilter) {
      setHidden(false);
    }
  }, [categoryFilter]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `${post.node.frontmatter.category}`,
    style: {
      display: `${hidden ? "none" : "block"}`
    },
    key: post.node.fields.slug
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Actions_SearchListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: post.node.frontmatter.title,
    subTitle: post.node.frontmatter.subTitle && post.node.frontmatter.subTitle,
    slug: post.node.fields.slug,
    linkOnClick: linkOnClick
  })));
});
const StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  & ul {
    padding: 0;
    list-style: none;
  }
  & li {
    margin: 0 0 0.7em 0;

    @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
      .moving-featured &,
      .is-aside & {
        padding: 0.8rem 0.5rem 0 0.5rem;
        text-align: center;

        h2 {
          font-size: 16px;
        }

        small {
          display: none;
        }
      }
    }
  }
`; // const StyledLink = styled(Link)`
//   display: flex;
//   align-content: center;
//   align-items: center;
//   justify-content: flex-start;
//   flex-direction: row;
//   padding: 0.7em 1em 0.7em 1em;
//   color: ${props => props.theme.navigator.colors.postsListItemLink};
//
//   @media (hover: hover) {
//     &:hover {
//       color: ${props => props.theme.navigator.colors.postsListItemLinkHover};
//       & .pointer {
//         border-radius: 65% 75%;
//       }
//     }
//   }
// `;
// const ListItemPointer = styled.div`
//   position: relative;
//   flex-shrink: 0;
//   overflow: hidden;
//   border-radius: 75% 65%;
//   width: 60px;
//   margin: 0;
//   transition: all 0.5s;
//
//   & img {
//     width: 100%;
//     height: 100%;
//   }
//
//   @media (min-width: ${(props) => props.theme.mediaQueryTresholds.M}px) {
//     margin-right: 0.5em;
//     width: 80px;
//     height: 80px;
//   }
//
//   @media (min-width: ${(props) => props.theme.mediaQueryTresholds.L}px) {
//     margin-right: 0.8em;
//     width: 90px;
//     height: 90px;
//     transition: all 0.3s;
//     transition-timing-function: ease;
//
//     .moving-featured &,
//     .is-aside & {
//       width: 30px;
//       height: 30px;
//     }
//   }
// `;
// const ListItemText = styled.div`
//   margin: 0 0 0 1.5em;
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   text-align: center;
//
//   & h1 {
//     line-height: 1.15;
//     font-weight: 600;
//     letter-spacing: -0.03em;
//     margin: 0;
//     font-size: ${props => props.theme.navigator.sizes.postsListItemH1Font}em;
//
//     @media (min-width: ${props => props.theme.mediaQueryTresholds.M}px) {
//       font-size: ${props =>
//         props.theme.navigator.sizes.postsListItemH1Font *
//         props.theme.navigator.sizes.fontIncraseForM}em;
//     }
//
//     @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
//       font-size: ${props =>
//         props.theme.navigator.sizes.postsListItemH1Font *
//         props.theme.navigator.sizes.fontIncraseForL}em;
//       .moving-featured &,
//       .is-aside & {
//         font-size: 1em;
//         font-weight: 400;
//       }
//     }
//   }
//
//   & h2 {
//     line-height: 1.2;
//     display: block;
//     font-size: ${props => props.theme.navigator.sizes.postsListItemH2Font}em;
//     margin: 0.3em 0 0 0;
//
//     @media (min-width: ${props => props.theme.mediaQueryTresholds.M}px) {
//       font-size: ${props =>
//         props.theme.navigator.sizes.postsListItemH2Font *
//         props.theme.navigator.sizes.fontIncraseForM}em;
//     }
//
//     @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
//       font-size: ${props =>
//         props.theme.navigator.sizes.postsListItemH2Font *
//         props.theme.navigator.sizes.fontIncraseForL}em;
//       .moving-featured &,
//       .is-aside & {
//         display: none;
//       }
//     }
//   }
//
//   @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
//     .moving-featured &,
//     .is-aside & {
//       margin: 0 0 0 0.5em;
//     }
//   }
// `;

/***/ }),

/***/ "./src/components/Navigator/Navigator.tsx":
/*!************************************************!*\
  !*** ./src/components/Navigator/Navigator.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.tsx");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.tsx");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./List */ "./src/components/Navigator/List.tsx");






/* harmony default export */ __webpack_exports__["default"] = (({
  posts
}) => {
  const stateFilter = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.categoryFilter);
  const state = Object(_utils_shared__WEBPACK_IMPORTED_MODULE_4__["moveNavData"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  function expandOnClick() {
    dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_3__["setNavigatorShape"])("open"));
  }

  function linkOnClick() {
    Object(_utils_shared__WEBPACK_IMPORTED_MODULE_4__["moveNavAside"])(state, dispatch);
  }

  function removefilterOnClick() {
    dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_3__["setCategoryFilter"])("all posts"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyleNavigator, {
    className: `${state.navigatorPosition ? state.navigatorPosition : ""} ${state.navigatorShape ? state.navigatorShape : ""} `
  }, posts.totalCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_5__["default"], {
    posts: posts,
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    linkOnClick: linkOnClick,
    expandOnClick: expandOnClick,
    categoryFilter: stateFilter,
    removeFilter: removefilterOnClick
  }));
});
const StyleNavigator = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav`
  transform: translate3d(0, 0, 0);
  will-change: left, top, bottom, width;
  background: ${props => props.theme.navigator.colors.background};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  transition-timing-function: ease;
  transition: left 0.9s;
  width: 100%;

  @media (max-width: ${props => props.theme.mediaQueryTresholds.L - 1}px) {
    &.is-aside {
      left: -100%;
    }

    &.is-featured {
      left: 0;
    }
  }

  @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
    &.is-featured {
      transition: left 0.9s;
      width: calc(
        100vw - ${props => props.theme.info.sizes.width}px -
          ${props => props.theme.bars.sizes.actionsBar}px
      );
      left: ${props => props.theme.info.sizes.width}px;
      top: 0;
    }

    &.is-aside {
      transition: bottom 0.5s;
      left: 0;
      width: ${props => props.theme.info.sizes.width - 1}px;
      z-index: 1;
      top: auto;

      &.closed {
        bottom: calc(
          -100% + 100px + ${props => props.theme.navigator.sizes.closedHeight}px
        );
        height: calc(100% - 100px);
      }

      &.open {
        bottom: 0;
        height: calc(100% - 100px);
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: ${props => props.theme.base.sizes.linesMargin};
        right: ${props => props.theme.base.sizes.linesMargin};
        height: 0;
        border-top: 1px solid ${props => props.theme.base.colors.lines};
      }
    }

    &.moving-aside {
      transition: left 0.9s;
      left: calc(-100vw + ${props => props.theme.info.sizes.width}*2px + 2px);
      width: calc(100vw - ${props => props.theme.info.sizes.width}px - 60px);
      top: 0;
    }

    &.resizing-aside {
      transition: none;
      width: ${props => props.theme.info.sizes.width}px;
      top: auto;
      left: 0;

      &.closed {
        bottom: calc(-100% + 100px);
        height: calc(100% - 100px);
      }

      &.open {
        bottom: calc(-100% + 100px);
        height: calc(100% - 100px);
      }
    }

    &.moving-featured {
      transition: bottom 0.3s;
      bottom: -100%;
      top: auto;
      left: 0;
      z-index: 1;
      width: ${props => props.theme.info.sizes.width - 1}px;
    }

    &.resizing-featured {
      transition: none;
      top: 0;
      bottom: auto;
      left: calc(-100vw + ${props => props.theme.info.sizes.width}*2px + 60px);
      width: calc(100vw - ${props => props.theme.info.sizes.width}px - 60px);
    }
  }
`;

/***/ }),

/***/ "./src/components/Navigator/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Navigator/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigator */ "./src/components/Navigator/Navigator.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Navigator__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

};;
//# sourceMappingURL=2.render-page.js.map