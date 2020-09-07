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
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.tsx");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.tsx");
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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");


function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n  align-content: center;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n  color: ", ";\n\n  @media (hover: hover) {\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n      & .pointer {\n        border-radius: 65% 75%;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0;\n\n  & h3 {\n  }\n\n  & small {\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

















function SearchDialog() {
  var data = useSearchData();
  var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_12__["default"](data.allMdx.edges, options);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("paper"),
      scroll = _useState2[0],
      setScroll = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
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

  var onSearch = function onSearch(event) {
    updateQuery(event.currentTarget.value);
  };

  var descriptionElementRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (open) {
      var descriptionElement = descriptionElementRef.current;

      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  var results = fuse.search(query);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    "aria-label": "Search",
    onClick: handleClickOpen("paper"),
    "data-shape": "closed",
    title: "Search",
    className: "iconButton"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_9___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: open,
    onClose: handleClose,
    scroll: scroll,
    "aria-labelledby": "scroll-dialog-title",
    "aria-describedby": "scroll-dialog-description",
    maxWidth: "md",
    fullWidth: true
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "scroll-dialog-title"
  }, "Search by fuse.js"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    dividers: scroll === "paper"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "scroll-dialog-description",
    ref: descriptionElementRef,
    tabIndex: -1
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "outlined-search",
    label: "Search field",
    type: "search",
    variant: "outlined",
    fullWidth: true,
    autoFocus: true,
    helperText: "fuzzy searching",
    value: query,
    onChange: onSearch,
    autoComplete: "off"
  }), results && results.map(function (post) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])(SearchResult, {
      title: post.item.node.frontmatter.title,
      subTitle: post.item.node.frontmatter.subTitle,
      slug: post.item.node.fields.slug,
      linkOnClick: handleClose
    });
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_5__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"))));
}

var SearchResult = function SearchResult(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      slug = _ref.slug,
      linkOnClick = _ref.linkOnClick;
  var titleName = JSON.stringify(title, null, 4);
  var subTitleName = JSON.stringify(subTitle, null, 4);
  var path = JSON.stringify(slug, null, 4);

  var movePage = function movePage() {
    linkOnClick();
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])(SearchWrapper, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])(StyledLink, {
    onClick: movePage,
    to: path.replace(/\"/g, "")
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])("h2", null, titleName.replace(/\"/g, "")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_15__["jsx"])("small", null, subTitleName !== "null" && subTitleName.replace(/\"/g, "")))));
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
var SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_14__["default"].ul(_templateObject());
var StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_14__["default"])(gatsby_link__WEBPACK_IMPORTED_MODULE_13___default.a)(_templateObject2(), function (props) {
  return props.theme.navigator.colors.postsListItemLink;
}, function (props) {
  return props.theme.navigator.colors.postsListItemLinkHover;
}, function (props) {
  return props.theme.base.colors.lines;
});
/* harmony default export */ __webpack_exports__["default"] = (SearchDialog);

var useSearchData = function useSearchData() {
  var searchData = Object(gatsby__WEBPACK_IMPORTED_MODULE_2__["useStaticQuery"])("2806038986");
  return searchData;
};

/***/ }),

/***/ "./src/utils/shared.tsx":
/*!******************************!*\
  !*** ./src/utils/shared.tsx ***!
  \******************************/
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
      }, 300);
    } else {
      setTimeout(function () {
        _this.props.setNavigatorPosition("is-featured");
      }, 0);
    } // uncomment following lines if you want to count featuring Navigator as a visit
    // to index page ('/'), you have to also uncomment import { navigateTo }...


    setTimeout(function () {
      Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])("/");
    }, 500);
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

            setTimeout(react_lazyload__WEBPACK_IMPORTED_MODULE_0__["forceCheck"], 600);
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