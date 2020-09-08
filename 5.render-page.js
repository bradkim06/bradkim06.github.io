exports.ids = [5];
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

/***/ "./public/page-data/sq/d/2806038986.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2806038986.json ***!
  \***********************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"allMdx\":{\"edges\":[{\"node\":{\"fields\":{\"slug\":\"/you-only-live-once/\"},\"frontmatter\":{\"title\":\"You only live once\",\"subTitle\":\"But if you do it right, once is enough\",\"category\":\"sayings\"}}},{\"node\":{\"fields\":{\"slug\":\"/test/testing/\"},\"frontmatter\":{\"title\":\"MDX full test\",\"subTitle\":null,\"category\":\"test\"}}},{\"node\":{\"fields\":{\"slug\":\"/about/\"},\"frontmatter\":{\"title\":\"About\",\"subTitle\":null,\"category\":null}}},{\"node\":{\"fields\":{\"slug\":\"/starters/\"},\"frontmatter\":{\"title\":\"Other GatsbyJs starters\",\"subTitle\":null,\"category\":null}}},{\"node\":{\"fields\":{\"slug\":\"/success/\"},\"frontmatter\":{\"title\":\"Success\",\"subTitle\":null,\"category\":null}}}]}}}");

/***/ }),

/***/ "./src/components/ActionsBar/ActionsBar.tsx":
/*!**************************************************!*\
  !*** ./src/components/ActionsBar/ActionsBar.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "./node_modules/@material-ui/icons/ArrowUpward.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search */ "./src/components/ActionsBar/Search.tsx");
/* harmony import */ var _material_ui_icons_WbSunny__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/WbSunny */ "./node_modules/@material-ui/icons/WbSunny.js");
/* harmony import */ var _material_ui_icons_WbSunny__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WbSunny__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.tsx");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.tsx");
/* harmony import */ var _FontSetter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FontSetter */ "./src/components/ActionsBar/FontSetter.tsx");
/* harmony import */ var _CategoryFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CategoryFilter */ "./src/components/ActionsBar/CategoryFilter.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");














class ActionsBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      fullscreen: false
    };
    this.homeOnClick = _utils_shared__WEBPACK_IMPORTED_MODULE_9__["featureNavigator"].bind(this);

    this.arrowUpOnClick = () => {
      this.props.setScrollToTop(true);
    };

    this.fontSetterOnClick = val => {
      this.props.setFontSizeIncrease(val);
    };

    this.categoryFilterOnClick = val => {
      this.props.setCategoryFilter(val);
    };

    this.themeToggleClick = () => {
      this.props.setThemeToggle();
    };
  }

  render() {
    const {
      navigatorPosition,
      navigatorShape,
      isWideScreen,
      categories
    } = this.props;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(StyleActionsBar, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(Group, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "aria-label": "Back to list",
      onClick: this.homeOnClick,
      title: "Back to the list",
      className: "iconButton"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_Search__WEBPACK_IMPORTED_MODULE_6__["default"], null), (isWideScreen && navigatorShape === "open" || navigatorPosition !== "is-aside") && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_CategoryFilter__WEBPACK_IMPORTED_MODULE_11__["default"], {
      categories: categories,
      filterCategory: this.categoryFilterOnClick
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(Group, null, navigatorPosition === "is-aside" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_FontSetter__WEBPACK_IMPORTED_MODULE_10__["default"], {
      increaseFont: this.fontSetterOnClick
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "aria-label": "Back to top",
      onClick: this.arrowUpOnClick,
      title: "Scroll to top",
      className: "iconButton"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_5___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "aria-label": "Theme Toggle",
      onClick: this.themeToggleClick,
      title: "Theme Change",
      className: "iconButton"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_material_ui_icons_WbSunny__WEBPACK_IMPORTED_MODULE_7___default.a, null))));
  }

}

const mapStateToProps = state => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    isWideScreen: state.isWideScreen,
    categoryFilter: state.categoryFilter,
    themeToggle: state.themeToggle
  };
};

const mapDispatchToProps = {
  setNavigatorPosition: _state_store__WEBPACK_IMPORTED_MODULE_8__["setNavigatorPosition"],
  setNavigatorShape: _state_store__WEBPACK_IMPORTED_MODULE_8__["setNavigatorShape"],
  setScrollToTop: _state_store__WEBPACK_IMPORTED_MODULE_8__["setScrollToTop"],
  setFontSizeIncrease: _state_store__WEBPACK_IMPORTED_MODULE_8__["setFontSizeIncrease"],
  setCategoryFilter: _state_store__WEBPACK_IMPORTED_MODULE_8__["setCategoryFilter"],
  setThemeToggle: _state_store__WEBPACK_IMPORTED_MODULE_8__["setThemeToggle"]
};
const StyleActionsBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  background: ${props => props.theme.bars.colors.background};
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  padding: 0 ${props => props.theme.bars.sizes.actionsBar}px;
  justify-content: space-between;
  height: ${props => props.theme.bars.sizes.actionsBar}px;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    left: ${props => props.theme.base.sizes.linesMargin};
    right: ${props => props.theme.base.sizes.linesMargin};
    height: 0;
    top: 0;
    border-top: 1px solid ${props => props.theme.base.colors.lines};
  }

  @media (min-width: ${props => props.theme.mediaQueryTresholds.M}px) {
    padding: 0 calc(${props => props.theme.base.sizes.linesMargin} * 1.5);
  }

  @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
    flex-direction: column;
    top: 0;
    right: 0;
    left: auto;
    height: 100%;
    padding: ${props => props.theme.base.sizes.linesMargin} 0;
    width: ${props => props.theme.bars.sizes.actionsBar}px;

    &::before {
      top: ${props => props.theme.base.sizes.linesMargin};
      bottom: ${props => props.theme.base.sizes.linesMargin};
      left: 0;
      right: auto;
      width: 0;
      height: auto;
      border-left: 1px solid ${props => props.theme.base.colors.lines};
    }
  }
`;
const Group = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
    flex-direction: column;
  }

  .iconButton {
    color: ${props => props.theme.bars.colors.icon};
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(ActionsBar));

/***/ }),

/***/ "./src/components/ActionsBar/CategoryFilter.tsx":
/*!******************************************************!*\
  !*** ./src/components/ActionsBar/CategoryFilter.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");













function CategoryFilter({
  categories,
  filterCategory
}) {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const anchorRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleSetting = event => {
    const category = event.target.innerText.trim();
    filterCategory(category);

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }; // return focus to the button when we transitioned from !open -> open


  const prevOpen = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(open);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(FilterWrapper, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: anchorRef,
    "aria-controls": open ? "menu-list-grow" : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle,
    "aria-label": "categoryOpen",
    className: "categoryOpen"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_9___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true
  }, ({
    TransitionProps,
    placement
  }) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
    style: {
      transformOrigin: placement === "bottom" ? "center top" : "center bottom"
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClickAway: handleClose
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    autoFocusItem: open,
    id: "menu-list-grow"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "all",
    onClick: handleSetting
  }, "all posts"), categories.map(category => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: category,
    onClick: handleSetting
  }, category))))))));
}

const FilterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].nav`
  @media (min-width: ${props => props.theme.mediaQueryTresholds.M}px) {
  }
  .categoryOpen {
    color: ${props => props.theme.bars.colors.icon};
  }
`;
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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_FormatSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/FormatSize */ "./node_modules/@material-ui/icons/FormatSize.js");
/* harmony import */ var _material_ui_icons_FormatSize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatSize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");













function FontSetter({
  increaseFont
}) {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const anchorRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleSetting = event => {
    const val = event.target.innerText.replace("%", "");
    const factor = +val / 100;
    increaseFont(factor);

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }; // return focus to the button when we transitioned from !open -> open


  const prevOpen = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(open);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(FontSizeSetter, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: anchorRef,
    "aria-controls": open ? "menu-list-grow" : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle,
    "aria-label": "fontOpen",
    className: "fontOpen"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_icons_FormatSize__WEBPACK_IMPORTED_MODULE_9___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    anchorEl: anchorRef.current,
    role: undefined,
    transition: true,
    disablePortal: true
  }, ({
    TransitionProps,
    placement
  }) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
    style: {
      transformOrigin: placement === "bottom" ? "center top" : "center bottom"
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClickAway: handleClose
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    autoFocusItem: open,
    id: "menu-list-grow"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleSetting
  }, "150%"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleSetting
  }, "125%"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleSetting
  }, "100%")))))));
}

const FontSizeSetter = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].nav`
  @media (min-width: ${props => props.theme.mediaQueryTresholds.M}px) {
  }
  .fontOpen {
    color: ${props => props.theme.bars.colors.icon};
  }
`;
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
/* harmony import */ var _public_page_data_sq_d_2806038986_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/2806038986.json */ "./public/page-data/sq/d/2806038986.json");
var _public_page_data_sq_d_2806038986_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/page-data/sq/d/2806038986.json */ "./public/page-data/sq/d/2806038986.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
















function SearchDialog() {
  const data = useSearchData();
  const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_11__["default"](data.allMdx.edges, options);
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: scroll,
    1: setScroll
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("paper");
  const {
    0: query,
    1: updateQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
    updateQuery("");
  };

  const onSearch = event => {
    updateQuery(event.currentTarget.value);
  };

  const descriptionElementRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (open) {
      const {
        current: descriptionElement
      } = descriptionElementRef;

      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const results = fuse.search(query);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    "aria-label": "Search",
    onClick: handleClickOpen("paper"),
    "data-shape": "closed",
    title: "Search",
    className: "iconButton"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: open,
    onClose: handleClose,
    scroll: scroll,
    "aria-labelledby": "scroll-dialog-title",
    "aria-describedby": "scroll-dialog-description",
    maxWidth: "md",
    fullWidth: true
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "scroll-dialog-title"
  }, "Search by fuse.js"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dividers: scroll === "paper"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "scroll-dialog-description",
    ref: descriptionElementRef,
    tabIndex: -1
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }), results && results.map(post => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(SearchResult, {
    title: post.item.node.frontmatter.title,
    subTitle: post.item.node.frontmatter.subTitle,
    slug: post.item.node.fields.slug,
    linkOnClick: handleClose
  })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"))));
}

const SearchResult = ({
  title,
  subTitle,
  slug,
  linkOnClick
}) => {
  const titleName = JSON.stringify(title, null, 4);
  const subTitleName = JSON.stringify(subTitle, null, 4);
  const path = JSON.stringify(slug, null, 4);

  const movePage = () => {
    linkOnClick();
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(SearchWrapper, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])(StyledLink, {
    onClick: movePage,
    to: path.replace(/\"/g, "")
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])("h2", null, titleName.replace(/\"/g, "")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_14__["jsx"])("small", null, subTitleName !== "null" && subTitleName.replace(/\"/g, "")))));
};

const options = {
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
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_13__["default"].ul`
  margin: 0;

  & h3 {
  }

  & small {
    display: block;
  }
`;
const StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_13__["default"])(gatsby_link__WEBPACK_IMPORTED_MODULE_12___default.a)`
  display: block;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  color: ${props => props.theme.navigator.colors.postsListItemLink};

  @media (hover: hover) {
    &:hover {
      color: ${props => props.theme.navigator.colors.postsListItemLinkHover};
      background-color: ${props => props.theme.base.colors.lines};
      & .pointer {
        border-radius: 65% 75%;
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (SearchDialog);

const useSearchData = () => {
  let searchData = _public_page_data_sq_d_2806038986_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return searchData;
};

/***/ })

};;
//# sourceMappingURL=5.render-page.js.map