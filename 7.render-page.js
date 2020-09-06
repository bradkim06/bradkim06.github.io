exports.ids = [7];
exports.modules = {

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

/***/ "./src/components/ActionsBar/ActionsBar.tsx":
/*!**************************************************!*\
  !*** ./src/components/ActionsBar/ActionsBar.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "./node_modules/@material-ui/icons/ArrowUpward.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Search */ "./src/components/ActionsBar/Search.js");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.js");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.js");
/* harmony import */ var _FontSetter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FontSetter */ "./src/components/ActionsBar/FontSetter.js");
/* harmony import */ var _CategoryFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CategoryFilter */ "./src/components/ActionsBar/CategoryFilter.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");




function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  @media (min-width: ", "px) {\n    flex-direction: column;\n  }\n\n  .iconButton {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  background: ", ";\n  left: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: row;\n  padding: 0 ", "px;\n  justify-content: space-between;\n  height: ", "px;\n  width: 100%;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    left: ", ";\n    right: ", ";\n    height: 0;\n    top: 0;\n    border-top: 1px solid ", ";\n  }\n\n  @media (min-width: ", "px) {\n    padding: 0 calc(", " * 1.5);\n  }\n\n  @media (min-width: ", "px) {\n    flex-direction: column;\n    top: 0;\n    right: 0;\n    left: auto;\n    height: 100%;\n    padding: ", " 0;\n    width: ", "px;\n\n    &::before {\n      top: ", ";\n      bottom: ", ";\n      left: 0;\n      right: auto;\n      width: 0;\n      height: auto;\n      border-left: 1px solid ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














var ActionsBar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ActionsBar, _React$Component);

  function ActionsBar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      fullscreen: false
    };
    _this.homeOnClick = _utils_shared__WEBPACK_IMPORTED_MODULE_11__["featureNavigator"].bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));

    _this.arrowUpOnClick = function () {
      _this.props.setScrollToTop(true);
    };

    _this.fontSetterOnClick = function (val) {
      _this.props.setFontSizeIncrease(val);
    };

    _this.categoryFilterOnClick = function (val) {
      _this.props.setCategoryFilter(val);
    };

    return _this;
  }

  var _proto = ActionsBar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        navigatorPosition = _this$props.navigatorPosition,
        navigatorShape = _this$props.navigatorShape,
        isWideScreen = _this$props.isWideScreen,
        categories = _this$props.categories;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(StyleActionsBar, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(Group, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "aria-label": "Back to list",
      onClick: this.homeOnClick,
      title: "Back to the list",
      className: "iconButton"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_Search__WEBPACK_IMPORTED_MODULE_9__["default"], null), (isWideScreen && navigatorShape === "open" || navigatorPosition !== "is-aside") && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_CategoryFilter__WEBPACK_IMPORTED_MODULE_13__["default"], {
      categories: categories,
      filterCategory: this.categoryFilterOnClick
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(Group, null, navigatorPosition === "is-aside" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_FontSetter__WEBPACK_IMPORTED_MODULE_12__["default"], {
      increaseFont: this.fontSetterOnClick
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "aria-label": "Back to top",
      onClick: this.arrowUpOnClick,
      title: "Scroll to top",
      className: "iconButton"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_8___default.a, null))));
  };

  return ActionsBar;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    isWideScreen: state.isWideScreen,
    categoryFilter: state.categoryFilter
  };
};

var mapDispatchToProps = {
  setNavigatorPosition: _state_store__WEBPACK_IMPORTED_MODULE_10__["setNavigatorPosition"],
  setNavigatorShape: _state_store__WEBPACK_IMPORTED_MODULE_10__["setNavigatorShape"],
  setScrollToTop: _state_store__WEBPACK_IMPORTED_MODULE_10__["setScrollToTop"],
  setFontSizeIncrease: _state_store__WEBPACK_IMPORTED_MODULE_10__["setFontSizeIncrease"],
  setCategoryFilter: _state_store__WEBPACK_IMPORTED_MODULE_10__["setCategoryFilter"]
};
var StyleActionsBar = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject(), function (props) {
  return props.theme.bars.colors.background;
}, function (props) {
  return props.theme.bars.sizes.actionsBar;
}, function (props) {
  return props.theme.bars.sizes.actionsBar;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
}, function (props) {
  return props.theme.base.colors.lines;
}, function (props) {
  return props.theme.mediaQueryTresholds.M;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
}, function (props) {
  return props.theme.mediaQueryTresholds.L;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
}, function (props) {
  return props.theme.bars.sizes.actionsBar;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
}, function (props) {
  return props.theme.base.colors.lines;
});
var Group = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2(), function (props) {
  return props.theme.mediaQueryTresholds.L;
}, function (props) {
  return props.theme.bars.colors.icon;
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(ActionsBar));

/***/ }),

/***/ "./src/components/ActionsBar/CategoryFilter.tsx":
/*!******************************************************!*\
  !*** ./src/components/ActionsBar/CategoryFilter.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");



function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @media (min-width: ", "px) {\n  }\n  .categoryOpen {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}













function CategoryFilter(_ref) {
  var categories = _ref.categories,
      filterCategory = _ref.filterCategory;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var anchorRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var handleToggle = function handleToggle() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleClose = function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  var handleSetting = function handleSetting(event) {
    var category = event.target.innerText.trim();
    filterCategory(category);

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }; // return focus to the button when we transitioned from !open -> open


  var prevOpen = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(open);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(FilterWrapper, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: anchorRef,
    "aria-controls": open ? "menu-list-grow" : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle,
    "aria-label": "categoryOpen",
    className: "categoryOpen"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_10___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true
  }, function (_ref2) {
    var TransitionProps = _ref2.TransitionProps,
        placement = _ref2.placement;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, TransitionProps, {
      style: {
        transformOrigin: placement === "bottom" ? "center top" : "center bottom"
      }
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClickAway: handleClose
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      autoFocusItem: open,
      id: "menu-list-grow"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: "all",
      onClick: handleSetting
    }, "all posts"), categories.map(function (category) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: category,
        onClick: handleSetting
      }, category);
    })))));
  }));
}

var FilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].nav(_templateObject(), function (props) {
  return props.theme.mediaQueryTresholds.M;
}, function (props) {
  return props.theme.bars.colors.icon;
});
/* harmony default export */ __webpack_exports__["default"] = (CategoryFilter);

/***/ }),

/***/ "./src/components/ActionsBar/FontSetter.js":
/*!*************************************************!*\
  !*** ./src/components/ActionsBar/FontSetter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_FormatSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/FormatSize */ "./node_modules/@material-ui/icons/FormatSize.js");
/* harmony import */ var _material_ui_icons_FormatSize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatSize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");













function FontSetter(_ref) {
  var increaseFont = _ref.increaseFont;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var anchorRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);

  var handleToggle = function handleToggle() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  };

  var handleClose = function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  var handleSetting = function handleSetting(e) {
    var val = e.target.innerText.replace("%", "");
    var factor = +val / 100;
    increaseFont(factor);

    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  }; // return focus to the button when we transitioned from !open -> open


  var prevOpen = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(open);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(FontSizeSetter, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: anchorRef,
    "aria-controls": open ? "menu-list-grow" : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle,
    "aria-label": "fontOpen",
    className: "fontOpen"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_icons_FormatSize__WEBPACK_IMPORTED_MODULE_10___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true
  }, function (_ref2) {
    var TransitionProps = _ref2.TransitionProps,
        placement = _ref2.placement;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
      style: {
        transformOrigin: placement === "bottom" ? "center top" : "center bottom"
      }
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClickAway: handleClose
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__["default"], {
      autoFocusItem: open,
      id: "menu-list-grow",
      onKeyDown: handleListKeyDown
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleSetting
    }, "150%"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleSetting
    }, "125%"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleSetting
    }, "100%")))));
  }));
}

var FontSizeSetter = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("nav", {
  target: "e1nc5k3i0",
  label: "FontSizeSetter"
})("@media (min-width:", function (props) {
  return props.theme.mediaQueryTresholds.M;
}, "px){}.fontOpen{color:", function (props) {
  return props.theme.bars.colors.icon;
}, ";}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYWRraW0wNi9wZXJzb25hbC9ibG9nL2dhdHNieS9jbG9uZS1nYXRzYnkvc3JjL2NvbXBvbmVudHMvQWN0aW9uc0Jhci9Gb250U2V0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdHaUMiLCJmaWxlIjoiL2hvbWUvYnJhZGtpbTA2L3BlcnNvbmFsL2Jsb2cvZ2F0c2J5L2Nsb25lLWdhdHNieS9zcmMvY29tcG9uZW50cy9BY3Rpb25zQmFyL0ZvbnRTZXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCI7XG5pbXBvcnQgR3JvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xuaW1wb3J0IFBvcHBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCI7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XG5pbXBvcnQgTWVudUxpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IEZvcm1hdFNpemVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRm9ybWF0U2l6ZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmZ1bmN0aW9uIEZvbnRTZXR0ZXIoeyBpbmNyZWFzZUZvbnQgfSkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGFuY2hvclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0T3BlbigocHJldk9wZW4pID0+ICFwcmV2T3Blbik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoYW5jaG9yUmVmLmN1cnJlbnQgJiYgYW5jaG9yUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNldHRpbmcgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LmlubmVyVGV4dC5yZXBsYWNlKFwiJVwiLCBcIlwiKTtcbiAgICBjb25zdCBmYWN0b3IgPSArdmFsIC8gMTAwO1xuICAgIGluY3JlYXNlRm9udChmYWN0b3IpO1xuXG4gICAgaWYgKGFuY2hvclJlZi5jdXJyZW50ICYmIGFuY2hvclJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIC8vIHJldHVybiBmb2N1cyB0byB0aGUgYnV0dG9uIHdoZW4gd2UgdHJhbnNpdGlvbmVkIGZyb20gIW9wZW4gLT4gb3BlblxuICBjb25zdCBwcmV2T3BlbiA9IFJlYWN0LnVzZVJlZihvcGVuKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcmV2T3Blbi5jdXJyZW50ID09PSB0cnVlICYmIG9wZW4gPT09IGZhbHNlKSB7XG4gICAgICBhbmNob3JSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHByZXZPcGVuLmN1cnJlbnQgPSBvcGVuO1xuICB9LCBbb3Blbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvbnRTaXplU2V0dGVyPlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgcmVmPXthbmNob3JSZWZ9XG4gICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyBcIm1lbnUtbGlzdC1ncm93XCIgOiB1bmRlZmluZWR9XG4gICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlfVxuICAgICAgICBhcmlhLWxhYmVsPVwiZm9udE9wZW5cIlxuICAgICAgICBjbGFzc05hbWU9XCJmb250T3BlblwiXG4gICAgICA+XG4gICAgICAgIDxGb3JtYXRTaXplSWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPFBvcHBlclxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBhbmNob3JFbD17YW5jaG9yUmVmLmN1cnJlbnR9XG4gICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cbiAgICAgICAgdHJhbnNpdGlvblxuICAgICAgICBkaXNhYmxlUG9ydGFsXG4gICAgICA+XG4gICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXG4gICAgICAgICAgPEdyb3dcbiAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46XG4gICAgICAgICAgICAgICAgcGxhY2VtZW50ID09PSBcImJvdHRvbVwiID8gXCJjZW50ZXIgdG9wXCIgOiBcImNlbnRlciBib3R0b21cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBhcGVyPlxuICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICA8TWVudUxpc3RcbiAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c0l0ZW09e29wZW59XG4gICAgICAgICAgICAgICAgICBpZD1cIm1lbnUtbGlzdC1ncm93XCJcbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZVNldHRpbmd9PjE1MCU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZVNldHRpbmd9PjEyNSU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZVNldHRpbmd9PjEwMCU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvR3Jvdz5cbiAgICAgICAgKX1cbiAgICAgIDwvUG9wcGVyPlxuICAgIDwvRm9udFNpemVTZXR0ZXI+XG4gICk7XG59XG5cbmNvbnN0IEZvbnRTaXplU2V0dGVyID0gc3R5bGVkLm5hdmBcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYVF1ZXJ5VHJlc2hvbGRzLk19cHgpIHtcbiAgfVxuICAuZm9udE9wZW4ge1xuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFycy5jb2xvcnMuaWNvbn07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvbnRTZXR0ZXI7XG4iXX0= */"));

/* harmony default export */ __webpack_exports__["default"] = (FontSetter);

/***/ }),

/***/ "./src/components/ActionsBar/Search.js":
/*!*********************************************!*\
  !*** ./src/components/ActionsBar/Search.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/theme */ "./src/styles/theme.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

















function SearchDialog() {
  var _useSearchData = useSearchData(),
      allMdx = _useSearchData.allMdx;

  var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_13__["default"](allMdx.edges, options);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("paper"),
      scroll = _useState2[0],
      setScroll = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      query = _useState3[0],
      updateQuery = _useState3[1];

  var handleClickOpen = function handleClickOpen(scrollType) {
    return function () {
      setOpen(true);
      setScroll(scrollType);
    };
  };

  var handleClose = function handleClose() {
    setOpen(false);
    updateQuery("");
  };

  var onSearch = function onSearch(_ref) {
    var currentTarget = _ref.currentTarget;
    updateQuery(currentTarget.value);
  };

  var descriptionElementRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (open) {
      var descriptionElement = descriptionElementRef.current;

      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  var results = fuse.search(query);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    "aria-label": "Search",
    onClick: handleClickOpen("paper"),
    "data-shape": "closed",
    title: "Search",
    className: "iconButton"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    onClose: handleClose,
    scroll: scroll,
    "aria-labelledby": "scroll-dialog-title",
    "aria-describedby": "scroll-dialog-description",
    maxWidth: "md",
    fullWidth: true
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "scroll-dialog-title"
  }, "Search by fuse.js"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    dividers: scroll === "paper"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "scroll-dialog-description",
    ref: descriptionElementRef,
    tabIndex: -1
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "outlined-search",
    label: "Search field",
    type: "search",
    variant: "outlined",
    fullWidth: true,
    autoFocus: "true",
    helperText: "fuzzy searching",
    value: query,
    onChange: onSearch,
    autoComplete: "off"
  }), results && results.map(function (post) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(SearchResult, {
      title: post.item.node.frontmatter.title,
      subTitle: post.item.node.frontmatter.subTitle,
      slug: post.item.node.fields.slug,
      linkOnClick: handleClose
    });
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"))));
}

var SearchResult = function SearchResult(_ref2) {
  var title = _ref2.title,
      subTitle = _ref2.subTitle,
      slug = _ref2.slug,
      linkOnClick = _ref2.linkOnClick;
  var titleName = JSON.stringify(title, null, 4);
  var subTitleName = JSON.stringify(subTitle, null, 4);
  var path = JSON.stringify(slug, null, 4);

  var movePage = function movePage() {
    linkOnClick();
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(SearchWrapper, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(gatsby_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: link(_styles_theme__WEBPACK_IMPORTED_MODULE_15__["default"]),
    onClick: movePage,
    to: path.replace(/\"/g, "")
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])("h2", null, titleName.replace(/\"/g, "")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])("small", null, subTitleName !== "null" && subTitleName.replace(/\"/g, "")))));
};

var options = {
  // isCaseSensitive: false,
  // includeScore: true,
  shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.5,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: ["node.frontmatter.title", "node.frontmatter.subTitle", "node.frontmatter.category"]
};

var SearchWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("ul", {
  target: "e10spj4m0",
  label: "SearchWrapper"
})( false ? undefined : {
  name: "mgufwi",
  styles: "margin:0;& h3{}& small{display:block;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYWRraW0wNi9wZXJzb25hbC9ibG9nL2dhdHNieS9jbG9uZS1nYXRzYnkvc3JjL2NvbXBvbmVudHMvQWN0aW9uc0Jhci9TZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0orQiIsImZpbGUiOiIvaG9tZS9icmFka2ltMDYvcGVyc29uYWwvYmxvZy9nYXRzYnkvY2xvbmUtZ2F0c2J5L3NyYy9jb21wb25lbnRzL0FjdGlvbnNCYXIvU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRpY1F1ZXJ5LCBncmFwaHFsIH0gZnJvbSBcImdhdHNieVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcbmltcG9ydCBGdXNlIGZyb20gXCJmdXNlLmpzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiZ2F0c2J5LWxpbmtcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiZW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmZ1bmN0aW9uIFNlYXJjaERpYWxvZygpIHtcbiAgY29uc3QgeyBhbGxNZHggfSA9IHVzZVNlYXJjaERhdGEoKTtcbiAgY29uc3QgZnVzZSA9IG5ldyBGdXNlKGFsbE1keC5lZGdlcywgb3B0aW9ucyk7XG5cbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoXCJwYXBlclwiKTtcbiAgY29uc3QgW3F1ZXJ5LCB1cGRhdGVRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSBzY3JvbGxUeXBlID0+ICgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICAgIHNldFNjcm9sbChzY3JvbGxUeXBlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB1cGRhdGVRdWVyeShcIlwiKTtcbiAgfTtcblxuICBjb25zdCBvblNlYXJjaCA9ICh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xuICAgIHVwZGF0ZVF1ZXJ5KGN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnQ6IGRlc2NyaXB0aW9uRWxlbWVudCB9ID0gZGVzY3JpcHRpb25FbGVtZW50UmVmO1xuICAgICAgaWYgKGRlc2NyaXB0aW9uRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtvcGVuXSk7XG5cbiAgY29uc3QgcmVzdWx0cyA9IGZ1c2Uuc2VhcmNoKHF1ZXJ5KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tPcGVuKFwicGFwZXJcIil9XG4gICAgICAgIGRhdGEtc2hhcGU9XCJjbG9zZWRcIlxuICAgICAgICB0aXRsZT1cIlNlYXJjaFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImljb25CdXR0b25cIlxuICAgICAgPlxuICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPERpYWxvZ1xuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgc2Nyb2xsPXtzY3JvbGx9XG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNjcm9sbC1kaWFsb2ctdGl0bGVcIlxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2Nyb2xsLWRpYWxvZy1kZXNjcmlwdGlvblwiXG4gICAgICAgIG1heFdpZHRoPVwibWRcIlxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgID5cbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwic2Nyb2xsLWRpYWxvZy10aXRsZVwiPlNlYXJjaCBieSBmdXNlLmpzPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgZGl2aWRlcnM9e3Njcm9sbCA9PT0gXCJwYXBlclwifT5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHRcbiAgICAgICAgICAgIGlkPVwic2Nyb2xsLWRpYWxvZy1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9uRWxlbWVudFJlZn1cbiAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VhcmNoXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggZmllbGRcIlxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGF1dG9Gb2N1cz1cInRydWVcIlxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiZnV6enkgc2VhcmNoaW5nXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25TZWFyY2h9XG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3Jlc3VsdHMgJiZcbiAgICAgICAgICAgICAgcmVzdWx0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgICAgPFNlYXJjaFJlc3VsdFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuaXRlbS5ub2RlLmZyb250bWF0dGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3ViVGl0bGU9e3Bvc3QuaXRlbS5ub2RlLmZyb250bWF0dGVyLnN1YlRpdGxlfVxuICAgICAgICAgICAgICAgICAgc2x1Zz17cG9zdC5pdGVtLm5vZGUuZmllbGRzLnNsdWd9XG4gICAgICAgICAgICAgICAgICBsaW5rT25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgU2VhcmNoUmVzdWx0ID0gKHsgdGl0bGUsIHN1YlRpdGxlLCBzbHVnLCBsaW5rT25DbGljayB9KSA9PiB7XG4gIGNvbnN0IHRpdGxlTmFtZSA9IEpTT04uc3RyaW5naWZ5KHRpdGxlLCBudWxsLCA0KTtcbiAgY29uc3Qgc3ViVGl0bGVOYW1lID0gSlNPTi5zdHJpbmdpZnkoc3ViVGl0bGUsIG51bGwsIDQpO1xuICBjb25zdCBwYXRoID0gSlNPTi5zdHJpbmdpZnkoc2x1ZywgbnVsbCwgNCk7XG5cbiAgY29uc3QgbW92ZVBhZ2UgPSAoKSA9PiB7XG4gICAgbGlua09uQ2xpY2soKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTZWFyY2hXcmFwcGVyPlxuICAgICAgPGxpPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17bGluayh0aGVtZSl9XG4gICAgICAgICAgb25DbGljaz17bW92ZVBhZ2V9XG4gICAgICAgICAgdG89e3BhdGgucmVwbGFjZSgvXFxcIi9nLCBcIlwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMj57dGl0bGVOYW1lLnJlcGxhY2UoL1xcXCIvZywgXCJcIil9PC9oMj5cbiAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICB7c3ViVGl0bGVOYW1lICE9PSBcIm51bGxcIiAmJiBzdWJUaXRsZU5hbWUucmVwbGFjZSgvXFxcIi9nLCBcIlwiKX1cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvU2VhcmNoV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIC8vIGlzQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gIC8vIGluY2x1ZGVTY29yZTogdHJ1ZSxcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgLy8gaW5jbHVkZU1hdGNoZXM6IGZhbHNlLFxuICAvLyBmaW5kQWxsTWF0Y2hlczogZmFsc2UsXG4gIC8vIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcbiAgLy8gbG9jYXRpb246IDAsXG4gIHRocmVzaG9sZDogMC41LFxuICAvLyBkaXN0YW5jZTogMTAwLFxuICAvLyB1c2VFeHRlbmRlZFNlYXJjaDogZmFsc2UsXG4gIC8vIGlnbm9yZUxvY2F0aW9uOiBmYWxzZSxcbiAgLy8gaWdub3JlRmllbGROb3JtOiBmYWxzZSxcbiAga2V5czogW1xuICAgIFwibm9kZS5mcm9udG1hdHRlci50aXRsZVwiLFxuICAgIFwibm9kZS5mcm9udG1hdHRlci5zdWJUaXRsZVwiLFxuICAgIFwibm9kZS5mcm9udG1hdHRlci5jYXRlZ29yeVwiXG4gIF1cbn07XG5cbmNvbnN0IFNlYXJjaFdyYXBwZXIgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMDtcblxuICAmIGgzIHtcbiAgfVxuXG4gICYgc21hbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBsaW5rID0gdGhlbWUgPT4gY3NzYFxuICBkaXNwbGF5OiBibG9jaztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGNvbG9yOiAke3RoZW1lLm5hdmlnYXRvci5jb2xvcnMucG9zdHNMaXN0SXRlbUxpbmt9O1xuXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHt0aGVtZS5uYXZpZ2F0b3IuY29sb3JzLnBvc3RzTGlzdEl0ZW1MaW5rSG92ZXJ9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5iYXNlLmNvbG9ycy5saW5lc307XG4gICAgICAmIC5wb2ludGVyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNjUlIDc1JTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IHVzZVNlYXJjaERhdGEgPSAoKSA9PiB7XG4gIGxldCBzZWFyY2hEYXRhID0gdXNlU3RhdGljUXVlcnkoXG4gICAgZ3JhcGhxbGBcbiAgICAgIHF1ZXJ5IFNlYXJjaERhdGEge1xuICAgICAgICBhbGxNZHgge1xuICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmcm9udG1hdHRlciB7XG4gICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICBzdWJUaXRsZVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gICk7XG4gIHJldHVybiBzZWFyY2hEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRGlhbG9nO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var link = function link(theme) {
  return /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("display:block;align-content:center;align-items:center;justify-content:flex-start;flex-direction:row;color:", theme.navigator.colors.postsListItemLink, ";@media (hover:hover){&:hover{color:", theme.navigator.colors.postsListItemLinkHover, ";background-color:", theme.base.colors.lines, ";& .pointer{border-radius:65% 75%;}}}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYWRraW0wNi9wZXJzb25hbC9ibG9nL2dhdHNieS9jbG9uZS1nYXRzYnkvc3JjL2NvbXBvbmVudHMvQWN0aW9uc0Jhci9TZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEt5QiIsImZpbGUiOiIvaG9tZS9icmFka2ltMDYvcGVyc29uYWwvYmxvZy9nYXRzYnkvY2xvbmUtZ2F0c2J5L3NyYy9jb21wb25lbnRzL0FjdGlvbnNCYXIvU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRpY1F1ZXJ5LCBncmFwaHFsIH0gZnJvbSBcImdhdHNieVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcbmltcG9ydCBGdXNlIGZyb20gXCJmdXNlLmpzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiZ2F0c2J5LWxpbmtcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiZW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmZ1bmN0aW9uIFNlYXJjaERpYWxvZygpIHtcbiAgY29uc3QgeyBhbGxNZHggfSA9IHVzZVNlYXJjaERhdGEoKTtcbiAgY29uc3QgZnVzZSA9IG5ldyBGdXNlKGFsbE1keC5lZGdlcywgb3B0aW9ucyk7XG5cbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoXCJwYXBlclwiKTtcbiAgY29uc3QgW3F1ZXJ5LCB1cGRhdGVRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSBzY3JvbGxUeXBlID0+ICgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICAgIHNldFNjcm9sbChzY3JvbGxUeXBlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB1cGRhdGVRdWVyeShcIlwiKTtcbiAgfTtcblxuICBjb25zdCBvblNlYXJjaCA9ICh7IGN1cnJlbnRUYXJnZXQgfSkgPT4ge1xuICAgIHVwZGF0ZVF1ZXJ5KGN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnQ6IGRlc2NyaXB0aW9uRWxlbWVudCB9ID0gZGVzY3JpcHRpb25FbGVtZW50UmVmO1xuICAgICAgaWYgKGRlc2NyaXB0aW9uRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBkZXNjcmlwdGlvbkVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtvcGVuXSk7XG5cbiAgY29uc3QgcmVzdWx0cyA9IGZ1c2Uuc2VhcmNoKHF1ZXJ5KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tPcGVuKFwicGFwZXJcIil9XG4gICAgICAgIGRhdGEtc2hhcGU9XCJjbG9zZWRcIlxuICAgICAgICB0aXRsZT1cIlNlYXJjaFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImljb25CdXR0b25cIlxuICAgICAgPlxuICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPERpYWxvZ1xuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgc2Nyb2xsPXtzY3JvbGx9XG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNjcm9sbC1kaWFsb2ctdGl0bGVcIlxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic2Nyb2xsLWRpYWxvZy1kZXNjcmlwdGlvblwiXG4gICAgICAgIG1heFdpZHRoPVwibWRcIlxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgID5cbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwic2Nyb2xsLWRpYWxvZy10aXRsZVwiPlNlYXJjaCBieSBmdXNlLmpzPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgZGl2aWRlcnM9e3Njcm9sbCA9PT0gXCJwYXBlclwifT5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHRcbiAgICAgICAgICAgIGlkPVwic2Nyb2xsLWRpYWxvZy1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICByZWY9e2Rlc2NyaXB0aW9uRWxlbWVudFJlZn1cbiAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtc2VhcmNoXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZWFyY2ggZmllbGRcIlxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGF1dG9Gb2N1cz1cInRydWVcIlxuICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiZnV6enkgc2VhcmNoaW5nXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25TZWFyY2h9XG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3Jlc3VsdHMgJiZcbiAgICAgICAgICAgICAgcmVzdWx0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgICAgICAgPFNlYXJjaFJlc3VsdFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuaXRlbS5ub2RlLmZyb250bWF0dGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc3ViVGl0bGU9e3Bvc3QuaXRlbS5ub2RlLmZyb250bWF0dGVyLnN1YlRpdGxlfVxuICAgICAgICAgICAgICAgICAgc2x1Zz17cG9zdC5pdGVtLm5vZGUuZmllbGRzLnNsdWd9XG4gICAgICAgICAgICAgICAgICBsaW5rT25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgU2VhcmNoUmVzdWx0ID0gKHsgdGl0bGUsIHN1YlRpdGxlLCBzbHVnLCBsaW5rT25DbGljayB9KSA9PiB7XG4gIGNvbnN0IHRpdGxlTmFtZSA9IEpTT04uc3RyaW5naWZ5KHRpdGxlLCBudWxsLCA0KTtcbiAgY29uc3Qgc3ViVGl0bGVOYW1lID0gSlNPTi5zdHJpbmdpZnkoc3ViVGl0bGUsIG51bGwsIDQpO1xuICBjb25zdCBwYXRoID0gSlNPTi5zdHJpbmdpZnkoc2x1ZywgbnVsbCwgNCk7XG5cbiAgY29uc3QgbW92ZVBhZ2UgPSAoKSA9PiB7XG4gICAgbGlua09uQ2xpY2soKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTZWFyY2hXcmFwcGVyPlxuICAgICAgPGxpPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17bGluayh0aGVtZSl9XG4gICAgICAgICAgb25DbGljaz17bW92ZVBhZ2V9XG4gICAgICAgICAgdG89e3BhdGgucmVwbGFjZSgvXFxcIi9nLCBcIlwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMj57dGl0bGVOYW1lLnJlcGxhY2UoL1xcXCIvZywgXCJcIil9PC9oMj5cbiAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICB7c3ViVGl0bGVOYW1lICE9PSBcIm51bGxcIiAmJiBzdWJUaXRsZU5hbWUucmVwbGFjZSgvXFxcIi9nLCBcIlwiKX1cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvU2VhcmNoV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIC8vIGlzQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gIC8vIGluY2x1ZGVTY29yZTogdHJ1ZSxcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgLy8gaW5jbHVkZU1hdGNoZXM6IGZhbHNlLFxuICAvLyBmaW5kQWxsTWF0Y2hlczogZmFsc2UsXG4gIC8vIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcbiAgLy8gbG9jYXRpb246IDAsXG4gIHRocmVzaG9sZDogMC41LFxuICAvLyBkaXN0YW5jZTogMTAwLFxuICAvLyB1c2VFeHRlbmRlZFNlYXJjaDogZmFsc2UsXG4gIC8vIGlnbm9yZUxvY2F0aW9uOiBmYWxzZSxcbiAgLy8gaWdub3JlRmllbGROb3JtOiBmYWxzZSxcbiAga2V5czogW1xuICAgIFwibm9kZS5mcm9udG1hdHRlci50aXRsZVwiLFxuICAgIFwibm9kZS5mcm9udG1hdHRlci5zdWJUaXRsZVwiLFxuICAgIFwibm9kZS5mcm9udG1hdHRlci5jYXRlZ29yeVwiXG4gIF1cbn07XG5cbmNvbnN0IFNlYXJjaFdyYXBwZXIgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMDtcblxuICAmIGgzIHtcbiAgfVxuXG4gICYgc21hbGwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBsaW5rID0gdGhlbWUgPT4gY3NzYFxuICBkaXNwbGF5OiBibG9jaztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGNvbG9yOiAke3RoZW1lLm5hdmlnYXRvci5jb2xvcnMucG9zdHNMaXN0SXRlbUxpbmt9O1xuXG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHt0aGVtZS5uYXZpZ2F0b3IuY29sb3JzLnBvc3RzTGlzdEl0ZW1MaW5rSG92ZXJ9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5iYXNlLmNvbG9ycy5saW5lc307XG4gICAgICAmIC5wb2ludGVyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNjUlIDc1JTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IHVzZVNlYXJjaERhdGEgPSAoKSA9PiB7XG4gIGxldCBzZWFyY2hEYXRhID0gdXNlU3RhdGljUXVlcnkoXG4gICAgZ3JhcGhxbGBcbiAgICAgIHF1ZXJ5IFNlYXJjaERhdGEge1xuICAgICAgICBhbGxNZHgge1xuICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmcm9udG1hdHRlciB7XG4gICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICBzdWJUaXRsZVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gICk7XG4gIHJldHVybiBzZWFyY2hEYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRGlhbG9nO1xuIl19 */"));
};

var useSearchData = function useSearchData() {
  var searchData = Object(gatsby__WEBPACK_IMPORTED_MODULE_3__["useStaticQuery"])("2806038986");
  return searchData;
};

/* harmony default export */ __webpack_exports__["default"] = (SearchDialog);

/***/ }),

/***/ "./src/utils/shared.js":
/*!*****************************!*\
  !*** ./src/utils/shared.js ***!
  \*****************************/
/*! exports provided: featureNavigator, moveNavigatorAside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureNavigator", function() { return featureNavigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveNavigatorAside", function() { return moveNavigatorAside; });
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_1__);


function featureNavigator(e) {
  var _this = this;

  e && e.preventDefault();

  if (this.props.navigatorPosition === "is-aside") {
    if (this.props.isWideScreen) {
      this.props.setNavigatorPosition("moving-featured");
      setTimeout(function () {
        _this.props.setNavigatorPosition("resizing-featured");

        setTimeout(function () {
          _this.props.setNavigatorPosition("is-featured");

          _this.props.setNavigatorShape("open"); // uncomment following lines if you want to count featuring Navigator as a visit
          // to index page ('/'), you have to also uncomment import { navigateTo }...


          setTimeout(function () {
            Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])("/");
          }, 400);
        });
      }, 200);
    } else {
      setTimeout(function () {
        _this.props.setNavigatorPosition("is-featured");
      }, 0);
    }
  }
}
function moveNavigatorAside(e) {
  var _this2 = this;

  var target = e ? e.currentTarget : null;
  var dataShape = target ? target.getAttribute("data-shape") : null;
  var navigatorShape = dataShape ? dataShape : "open";

  if (this.props.navigatorPosition === "is-featured") {
    if (this.props.isWideScreen) {
      this.props.setNavigatorPosition("moving-aside");

      if (typeof window !== "undefined") {
        if (window.location.pathname !== "/") {
          this.props.setNavigatorPosition("resizing-aside");
          this.props.setNavigatorShape(navigatorShape);
          setTimeout(function () {
            _this2.props.setNavigatorPosition("is-aside");

            setTimeout(react_lazyload__WEBPACK_IMPORTED_MODULE_0__["forceCheck"], 300);
          });
        }
      }
    } else {
      setTimeout(function () {
        _this2.props.setNavigatorPosition("is-aside");
      }, 100);
    }
  }
}

/***/ })

};;
//# sourceMappingURL=7.render-page.js.map