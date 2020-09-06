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
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Search */ "./src/components/ActionsBar/Search.tsx");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.js");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.js");
/* harmony import */ var _FontSetter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FontSetter */ "./src/components/ActionsBar/FontSetter.tsx");
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

/***/ "./src/components/ActionsBar/FontSetter.tsx":
/*!**************************************************!*\
  !*** ./src/components/ActionsBar/FontSetter.tsx ***!
  \**************************************************/
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
/* harmony import */ var _material_ui_icons_FormatSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/FormatSize */ "./node_modules/@material-ui/icons/FormatSize.js");
/* harmony import */ var _material_ui_icons_FormatSize__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatSize__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");



function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @media (min-width: ", "px) {\n  }\n  .fontOpen {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}













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

  var handleSetting = function handleSetting(event) {
    var val = event.target.innerText.replace("%", "");
    var factor = +val / 100;
    increaseFont(factor);

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
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
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(FontSizeSetter, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: anchorRef,
    "aria-controls": open ? "menu-list-grow" : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle,
    "aria-label": "fontOpen",
    className: "fontOpen"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_icons_FormatSize__WEBPACK_IMPORTED_MODULE_10___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      onClick: handleSetting
    }, "150%"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleSetting
    }, "125%"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: handleSetting
    }, "100%")))));
  }));
}

var FontSizeSetter = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].nav(_templateObject(), function (props) {
  return props.theme.mediaQueryTresholds.M;
}, function (props) {
  return props.theme.bars.colors.icon;
});
/* harmony default export */ __webpack_exports__["default"] = (FontSetter);

/***/ }),

/***/ "./src/components/ActionsBar/Search.tsx":
/*!**********************************************!*\
  !*** ./src/components/ActionsBar/Search.tsx ***!
  \**********************************************/
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
  target: "eyev6br0",
  label: "SearchWrapper"
})( false ? undefined : {
  name: "mgufwi",
  styles: "margin:0;& h3{}& small{display:block;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYWRraW0wNi9wZXJzb25hbC9ibG9nL2dhdHNieS9jbG9uZS1nYXRzYnkvc3JjL2NvbXBvbmVudHMvQWN0aW9uc0Jhci9TZWFyY2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStKK0IiLCJmaWxlIjoiL2hvbWUvYnJhZGtpbTA2L3BlcnNvbmFsL2Jsb2cvZ2F0c2J5L2Nsb25lLWdhdHNieS9zcmMvY29tcG9uZW50cy9BY3Rpb25zQmFyL1NlYXJjaC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGljUXVlcnksIGdyYXBocWwgfSBmcm9tIFwiZ2F0c2J5XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCI7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IEZ1c2UgZnJvbSBcImZ1c2UuanNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJnYXRzYnktbGlua1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJlbW90aW9uXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZnVuY3Rpb24gU2VhcmNoRGlhbG9nKCkge1xuICBjb25zdCB7IGFsbE1keCB9ID0gdXNlU2VhcmNoRGF0YSgpO1xuICBjb25zdCBmdXNlID0gbmV3IEZ1c2UoYWxsTWR4LmVkZ2VzLCBvcHRpb25zKTtcblxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShcInBhcGVyXCIpO1xuICBjb25zdCBbcXVlcnksIHVwZGF0ZVF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9IHNjcm9sbFR5cGUgPT4gKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgc2V0U2Nyb2xsKHNjcm9sbFR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIHVwZGF0ZVF1ZXJ5KFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IG9uU2VhcmNoID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XG4gICAgdXBkYXRlUXVlcnkoY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudDogZGVzY3JpcHRpb25FbGVtZW50IH0gPSBkZXNjcmlwdGlvbkVsZW1lbnRSZWY7XG4gICAgICBpZiAoZGVzY3JpcHRpb25FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW29wZW5dKTtcblxuICBjb25zdCByZXN1bHRzID0gZnVzZS5zZWFyY2gocXVlcnkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW4oXCJwYXBlclwiKX1cbiAgICAgICAgZGF0YS1zaGFwZT1cImNsb3NlZFwiXG4gICAgICAgIHRpdGxlPVwiU2VhcmNoXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBzY3JvbGw9e3Njcm9sbH1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2Nyb2xsLWRpYWxvZy10aXRsZVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzY3JvbGwtZGlhbG9nLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgbWF4V2lkdGg9XCJtZFwiXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgPlxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzY3JvbGwtZGlhbG9nLXRpdGxlXCI+U2VhcmNoIGJ5IGZ1c2UuanM8L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkaXZpZGVycz17c2Nyb2xsID09PSBcInBhcGVyXCJ9PlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dFxuICAgICAgICAgICAgaWQ9XCJzY3JvbGwtZGlhbG9nLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHJlZj17ZGVzY3JpcHRpb25FbGVtZW50UmVmfVxuICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWFyY2hcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBmaWVsZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJmdXp6eSBzZWFyY2hpbmdcIlxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlYXJjaH1cbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7cmVzdWx0cyAmJlxuICAgICAgICAgICAgICByZXN1bHRzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICA8U2VhcmNoUmVzdWx0XG4gICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5pdGVtLm5vZGUuZnJvbnRtYXR0ZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgICBzdWJUaXRsZT17cG9zdC5pdGVtLm5vZGUuZnJvbnRtYXR0ZXIuc3ViVGl0bGV9XG4gICAgICAgICAgICAgICAgICBzbHVnPXtwb3N0Lml0ZW0ubm9kZS5maWVsZHMuc2x1Z31cbiAgICAgICAgICAgICAgICAgIGxpbmtPbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBTZWFyY2hSZXN1bHQgPSAoeyB0aXRsZSwgc3ViVGl0bGUsIHNsdWcsIGxpbmtPbkNsaWNrIH0pID0+IHtcbiAgY29uc3QgdGl0bGVOYW1lID0gSlNPTi5zdHJpbmdpZnkodGl0bGUsIG51bGwsIDQpO1xuICBjb25zdCBzdWJUaXRsZU5hbWUgPSBKU09OLnN0cmluZ2lmeShzdWJUaXRsZSwgbnVsbCwgNCk7XG4gIGNvbnN0IHBhdGggPSBKU09OLnN0cmluZ2lmeShzbHVnLCBudWxsLCA0KTtcblxuICBjb25zdCBtb3ZlUGFnZSA9ICgpID0+IHtcbiAgICBsaW5rT25DbGljaygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNlYXJjaFdyYXBwZXI+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPXtsaW5rKHRoZW1lKX1cbiAgICAgICAgICBvbkNsaWNrPXttb3ZlUGFnZX1cbiAgICAgICAgICB0bz17cGF0aC5yZXBsYWNlKC9cXFwiL2csIFwiXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgPGgyPnt0aXRsZU5hbWUucmVwbGFjZSgvXFxcIi9nLCBcIlwiKX08L2gyPlxuICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgIHtzdWJUaXRsZU5hbWUgIT09IFwibnVsbFwiICYmIHN1YlRpdGxlTmFtZS5yZXBsYWNlKC9cXFwiL2csIFwiXCIpfVxuICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgPC9TZWFyY2hXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgLy8gaXNDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgLy8gaW5jbHVkZVNjb3JlOiB0cnVlLFxuICBzaG91bGRTb3J0OiB0cnVlLFxuICAvLyBpbmNsdWRlTWF0Y2hlczogZmFsc2UsXG4gIC8vIGZpbmRBbGxNYXRjaGVzOiBmYWxzZSxcbiAgLy8gbWluTWF0Y2hDaGFyTGVuZ3RoOiAxLFxuICAvLyBsb2NhdGlvbjogMCxcbiAgdGhyZXNob2xkOiAwLjUsXG4gIC8vIGRpc3RhbmNlOiAxMDAsXG4gIC8vIHVzZUV4dGVuZGVkU2VhcmNoOiBmYWxzZSxcbiAgLy8gaWdub3JlTG9jYXRpb246IGZhbHNlLFxuICAvLyBpZ25vcmVGaWVsZE5vcm06IGZhbHNlLFxuICBrZXlzOiBbXG4gICAgXCJub2RlLmZyb250bWF0dGVyLnRpdGxlXCIsXG4gICAgXCJub2RlLmZyb250bWF0dGVyLnN1YlRpdGxlXCIsXG4gICAgXCJub2RlLmZyb250bWF0dGVyLmNhdGVnb3J5XCJcbiAgXVxufTtcblxuY29uc3QgU2VhcmNoV3JhcHBlciA9IHN0eWxlZC51bGBcbiAgbWFyZ2luOiAwO1xuXG4gICYgaDMge1xuICB9XG5cbiAgJiBzbWFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IGxpbmsgPSB0aGVtZSA9PiBjc3NgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgY29sb3I6ICR7dGhlbWUubmF2aWdhdG9yLmNvbG9ycy5wb3N0c0xpc3RJdGVtTGlua307XG5cbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lLm5hdmlnYXRvci5jb2xvcnMucG9zdHNMaXN0SXRlbUxpbmtIb3Zlcn07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJhc2UuY29sb3JzLmxpbmVzfTtcbiAgICAgICYgLnBvaW50ZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2NSUgNzUlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgdXNlU2VhcmNoRGF0YSA9ICgpID0+IHtcbiAgbGV0IHNlYXJjaERhdGEgPSB1c2VTdGF0aWNRdWVyeShcbiAgICBncmFwaHFsYFxuICAgICAgcXVlcnkgU2VhcmNoRGF0YSB7XG4gICAgICAgIGFsbE1keCB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZyb250bWF0dGVyIHtcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgIHN1YlRpdGxlXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgKTtcbiAgcmV0dXJuIHNlYXJjaERhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hEaWFsb2c7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var link = function link(theme) {
  return /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("display:block;align-content:center;align-items:center;justify-content:flex-start;flex-direction:row;color:", theme.navigator.colors.postsListItemLink, ";@media (hover:hover){&:hover{color:", theme.navigator.colors.postsListItemLinkHover, ";background-color:", theme.base.colors.lines, ";& .pointer{border-radius:65% 75%;}}}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYWRraW0wNi9wZXJzb25hbC9ibG9nL2dhdHNieS9jbG9uZS1nYXRzYnkvc3JjL2NvbXBvbmVudHMvQWN0aW9uc0Jhci9TZWFyY2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBLeUIiLCJmaWxlIjoiL2hvbWUvYnJhZGtpbTA2L3BlcnNvbmFsL2Jsb2cvZ2F0c2J5L2Nsb25lLWdhdHNieS9zcmMvY29tcG9uZW50cy9BY3Rpb25zQmFyL1NlYXJjaC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGljUXVlcnksIGdyYXBocWwgfSBmcm9tIFwiZ2F0c2J5XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIjtcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0XCI7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IEZ1c2UgZnJvbSBcImZ1c2UuanNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJnYXRzYnktbGlua1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJlbW90aW9uXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZnVuY3Rpb24gU2VhcmNoRGlhbG9nKCkge1xuICBjb25zdCB7IGFsbE1keCB9ID0gdXNlU2VhcmNoRGF0YSgpO1xuICBjb25zdCBmdXNlID0gbmV3IEZ1c2UoYWxsTWR4LmVkZ2VzLCBvcHRpb25zKTtcblxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShcInBhcGVyXCIpO1xuICBjb25zdCBbcXVlcnksIHVwZGF0ZVF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9IHNjcm9sbFR5cGUgPT4gKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgc2V0U2Nyb2xsKHNjcm9sbFR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIHVwZGF0ZVF1ZXJ5KFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IG9uU2VhcmNoID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XG4gICAgdXBkYXRlUXVlcnkoY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudDogZGVzY3JpcHRpb25FbGVtZW50IH0gPSBkZXNjcmlwdGlvbkVsZW1lbnRSZWY7XG4gICAgICBpZiAoZGVzY3JpcHRpb25FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW29wZW5dKTtcblxuICBjb25zdCByZXN1bHRzID0gZnVzZS5zZWFyY2gocXVlcnkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW4oXCJwYXBlclwiKX1cbiAgICAgICAgZGF0YS1zaGFwZT1cImNsb3NlZFwiXG4gICAgICAgIHRpdGxlPVwiU2VhcmNoXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBzY3JvbGw9e3Njcm9sbH1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2Nyb2xsLWRpYWxvZy10aXRsZVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzY3JvbGwtZGlhbG9nLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgbWF4V2lkdGg9XCJtZFwiXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgPlxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzY3JvbGwtZGlhbG9nLXRpdGxlXCI+U2VhcmNoIGJ5IGZ1c2UuanM8L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkaXZpZGVycz17c2Nyb2xsID09PSBcInBhcGVyXCJ9PlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dFxuICAgICAgICAgICAgaWQ9XCJzY3JvbGwtZGlhbG9nLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHJlZj17ZGVzY3JpcHRpb25FbGVtZW50UmVmfVxuICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWFyY2hcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBmaWVsZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJmdXp6eSBzZWFyY2hpbmdcIlxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlYXJjaH1cbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7cmVzdWx0cyAmJlxuICAgICAgICAgICAgICByZXN1bHRzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICA8U2VhcmNoUmVzdWx0XG4gICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5pdGVtLm5vZGUuZnJvbnRtYXR0ZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgICBzdWJUaXRsZT17cG9zdC5pdGVtLm5vZGUuZnJvbnRtYXR0ZXIuc3ViVGl0bGV9XG4gICAgICAgICAgICAgICAgICBzbHVnPXtwb3N0Lml0ZW0ubm9kZS5maWVsZHMuc2x1Z31cbiAgICAgICAgICAgICAgICAgIGxpbmtPbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBTZWFyY2hSZXN1bHQgPSAoeyB0aXRsZSwgc3ViVGl0bGUsIHNsdWcsIGxpbmtPbkNsaWNrIH0pID0+IHtcbiAgY29uc3QgdGl0bGVOYW1lID0gSlNPTi5zdHJpbmdpZnkodGl0bGUsIG51bGwsIDQpO1xuICBjb25zdCBzdWJUaXRsZU5hbWUgPSBKU09OLnN0cmluZ2lmeShzdWJUaXRsZSwgbnVsbCwgNCk7XG4gIGNvbnN0IHBhdGggPSBKU09OLnN0cmluZ2lmeShzbHVnLCBudWxsLCA0KTtcblxuICBjb25zdCBtb3ZlUGFnZSA9ICgpID0+IHtcbiAgICBsaW5rT25DbGljaygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNlYXJjaFdyYXBwZXI+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPXtsaW5rKHRoZW1lKX1cbiAgICAgICAgICBvbkNsaWNrPXttb3ZlUGFnZX1cbiAgICAgICAgICB0bz17cGF0aC5yZXBsYWNlKC9cXFwiL2csIFwiXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgPGgyPnt0aXRsZU5hbWUucmVwbGFjZSgvXFxcIi9nLCBcIlwiKX08L2gyPlxuICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgIHtzdWJUaXRsZU5hbWUgIT09IFwibnVsbFwiICYmIHN1YlRpdGxlTmFtZS5yZXBsYWNlKC9cXFwiL2csIFwiXCIpfVxuICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgPC9TZWFyY2hXcmFwcGVyPlxuICApO1xufTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgLy8gaXNDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgLy8gaW5jbHVkZVNjb3JlOiB0cnVlLFxuICBzaG91bGRTb3J0OiB0cnVlLFxuICAvLyBpbmNsdWRlTWF0Y2hlczogZmFsc2UsXG4gIC8vIGZpbmRBbGxNYXRjaGVzOiBmYWxzZSxcbiAgLy8gbWluTWF0Y2hDaGFyTGVuZ3RoOiAxLFxuICAvLyBsb2NhdGlvbjogMCxcbiAgdGhyZXNob2xkOiAwLjUsXG4gIC8vIGRpc3RhbmNlOiAxMDAsXG4gIC8vIHVzZUV4dGVuZGVkU2VhcmNoOiBmYWxzZSxcbiAgLy8gaWdub3JlTG9jYXRpb246IGZhbHNlLFxuICAvLyBpZ25vcmVGaWVsZE5vcm06IGZhbHNlLFxuICBrZXlzOiBbXG4gICAgXCJub2RlLmZyb250bWF0dGVyLnRpdGxlXCIsXG4gICAgXCJub2RlLmZyb250bWF0dGVyLnN1YlRpdGxlXCIsXG4gICAgXCJub2RlLmZyb250bWF0dGVyLmNhdGVnb3J5XCJcbiAgXVxufTtcblxuY29uc3QgU2VhcmNoV3JhcHBlciA9IHN0eWxlZC51bGBcbiAgbWFyZ2luOiAwO1xuXG4gICYgaDMge1xuICB9XG5cbiAgJiBzbWFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IGxpbmsgPSB0aGVtZSA9PiBjc3NgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgY29sb3I6ICR7dGhlbWUubmF2aWdhdG9yLmNvbG9ycy5wb3N0c0xpc3RJdGVtTGlua307XG5cbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lLm5hdmlnYXRvci5jb2xvcnMucG9zdHNMaXN0SXRlbUxpbmtIb3Zlcn07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmJhc2UuY29sb3JzLmxpbmVzfTtcbiAgICAgICYgLnBvaW50ZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2NSUgNzUlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgdXNlU2VhcmNoRGF0YSA9ICgpID0+IHtcbiAgbGV0IHNlYXJjaERhdGEgPSB1c2VTdGF0aWNRdWVyeShcbiAgICBncmFwaHFsYFxuICAgICAgcXVlcnkgU2VhcmNoRGF0YSB7XG4gICAgICAgIGFsbE1keCB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIGZpZWxkcyB7XG4gICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZyb250bWF0dGVyIHtcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgIHN1YlRpdGxlXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgKTtcbiAgcmV0dXJuIHNlYXJjaERhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hEaWFsb2c7XG4iXX0= */"));
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

          _this.props.setNavigatorShape("open");
        });
      }, 200);
    } else {
      setTimeout(function () {
        _this.props.setNavigatorPosition("is-featured");
      }, 0);
    } // uncomment following lines if you want to count featuring Navigator as a visit
    // to index page ('/'), you have to also uncomment import { navigateTo }...


    Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])("/");
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