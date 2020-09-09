exports.ids = [8];
exports.modules = {

/***/ "./node_modules/@material-ui/icons/ExpandMore.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ExpandMore.js ***!
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
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports.default = _default;

/***/ }),

/***/ "./src/components/InfoBox/InfoBox.tsx":
/*!********************************************!*\
  !*** ./src/components/InfoBox/InfoBox.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _InfoHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfoHeader */ "./src/components/InfoBox/InfoHeader.tsx");
/* harmony import */ var _InfoText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoText */ "./src/components/InfoBox/InfoText.tsx");
/* harmony import */ var _InfoMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InfoMenu */ "./src/components/InfoBox/InfoMenu.tsx");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../utils/shared */ "./src/utils/shared.tsx");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.tsx");


function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: ", "px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 0 40px 0;\n  will-change: opacity, bottom;\n  transition: bottom 0.5s 0s;\n  opacity: 1;\n  transition-timing-function: ease;\n\n  .is-aside.closed & {\n    bottom: ", "px;\n  }\n\n  .moving-featured & {\n    bottom: 0;\n  }\n\n  .is-aside.open & {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: none;\n  @media (min-width: ", "px) {\n    display: block;\n    color: ", ";\n    background: ", ";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: ", "px;\n    height: 100%;\n    padding: 20px 40px;\n    &::after {\n      content: \"\";\n      position: absolute;\n      right: 0;\n      top: 20px;\n      bottom: 20px;\n      width: 1px;\n      border-right: 1px solid ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










function InfoBox() {
  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return {
      navigatorShape: state.navigatorShape,
      navigatorPosition: state.navigatorPosition
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  function expandOnClick() {
    dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_8__["setNavigatorShape"])("closed"));
  }

  function avatarOnClick(e) {
    Object(_utils_shared__WEBPACK_IMPORTED_MODULE_7__["featureNavigatorFunc"])(e, state, dispatch);
  }

  function menulinkOnClick(e) {
    Object(_utils_shared__WEBPACK_IMPORTED_MODULE_7__["moveNavigatorAsideFunc"])(e, state, dispatch);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleInfoBox, {
    className: (state.navigatorPosition ? state.navigatorPosition : "") + " \n         " + (state.navigatorShape ? state.navigatorShape : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InfoHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    avatarOnClick: avatarOnClick,
    expandOnClick: expandOnClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InfoText__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InfoMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    linkOnClick: menulinkOnClick
  })));
}

var StyleInfoBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].aside(_templateObject(), function (props) {
  return props.theme.mediaQueryTresholds.L;
}, function (props) {
  return props.theme.info.colors.text;
}, function (props) {
  return props.theme.info.colors.background;
}, function (props) {
  return props.theme.info.sizes.width;
}, function (props) {
  return props.theme.base.colors.lines;
});
var InfoContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), function (props) {
  return props.theme.info.sizes.headerHeight;
}, function (props) {
  return props.theme.navigator.sizes.closedHeight;
});
/* harmony default export */ __webpack_exports__["default"] = (InfoBox);

/***/ }),

/***/ "./src/components/InfoBox/InfoHeader.tsx":
/*!***********************************************!*\
  !*** ./src/components/InfoBox/InfoHeader.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_jpg_test_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/jpg/test.png */ "./src/images/jpg/test.png");
/* harmony import */ var _images_jpg_test_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_jpg_test_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _content_meta_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../content/meta/config */ "./content/meta/config.js");
/* harmony import */ var _content_meta_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_content_meta_config__WEBPACK_IMPORTED_MODULE_7__);


function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  will-change: transform, left, top;\n  font-size: ", "em;\n  margin: 0;\n  float: left;\n  transition-timing-function: ease;\n\n  & small {\n    display: block;\n    font-size: 0.6em;\n    margin-top: 0.3em;\n  }\n\n  @media (min-width: ", "px) {\n    font-size: ", "em;\n  }\n\n  @media (min-width: ", "px) {\n    font-size: ", "em;\n    position: absolute;\n    top: 85px;\n    text-align: center;\n    left: 50%;\n    transform: translate(-50%);\n    transition: all 0.5s;\n\n    .is-aside.open & {\n      left: 60%;\n      top: 0.15em;\n      text-align: left;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  will-change: left, top;\n  float: left;\n  display: block;\n  position: relative;\n  margin: 0 12px 0 0;\n\n  @media (min-width: ", "px) {\n    margin: 0 20px 0 0;\n  }\n\n  @media (min-width: ", "px) {\n    position: absolute;\n    top: 10px;\n    left: 50%;\n    margin-left: -30px;\n    transition: all 0.5s;\n    transition-timing-function: ease;\n\n    .navigator-in-transition-from.navigator-is-opened & {\n      left: 50%;\n    }\n\n    .is-aside.open & {\n      left: 8%;\n      top: 0;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  line-height: 1;\n  position: relative;\n\n  .expand {\n    position: absolute;\n    top: 30px;\n    right: -25px;\n    display: none;\n    color: ", ";\n\n    .is-aside.open & {\n      display: block;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









function InfoHeader(_ref) {
  var avatarOnClick = _ref.avatarOnClick,
      expandOnClick = _ref.expandOnClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderAvatarLink, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/",
    onClick: avatarOnClick,
    title: "back to Home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderAvatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _images_jpg_test_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "avatar"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderTitle, null, _content_meta_config__WEBPACK_IMPORTED_MODULE_7___default.a.infoTitle.replace(/ /g, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, _content_meta_config__WEBPACK_IMPORTED_MODULE_7___default.a.infoTitleNote)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "Expand the box",
    className: "expand",
    onClick: expandOnClick,
    title: "Expand the box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default.a, null)));
}

var Header = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].header(_templateObject(), function (props) {
  return props.theme.info.colors.socialIcons;
});
var HeaderAvatarLink = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2(), function (props) {
  return props.theme.mediaQueryTresholds.M;
}, function (props) {
  return props.theme.mediaQueryTresholds.L;
});
var HeaderAvatar = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3(), function (_ref2) {
  var theme = _ref2.theme;
  return " \n    width: 36px;\n    height: 36px;\n    transition: all .3s;\n    transition-timing-function: ease;\n    display: inline-block;\n    overflow: hidden;\n    & img{\n      max-width: 100%;\n    }\n    @media (min-width: " + theme.mediaQueryTresholds.M + "px) {\n      width: 44px;\n      height: 44px;\n    }\n\n    @media (min-width: " + theme.mediaQueryTresholds.L + "px) {\n      width: 60px;\n      height: 60px;\n    }\n\n    // @media (hover: hover) {\n    //   &:hover {\n    //     border-radius: 75% 65%;\n    //   }\n    // }\n  ";
});
var HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1(_templateObject4(), function (props) {
  return props.theme.info.fonts.boxTitleSize;
}, function (props) {
  return props.theme.mediaQueryTresholds.M;
}, function (props) {
  return props.theme.info.fonts.boxTitleSizeM;
}, function (props) {
  return props.theme.mediaQueryTresholds.L;
}, function (props) {
  return props.theme.info.fonts.boxTitleSizeL;
});
/* harmony default export */ __webpack_exports__["default"] = (InfoHeader);

/***/ }),

/***/ "./src/components/InfoBox/InfoMenu.tsx":
/*!*********************************************!*\
  !*** ./src/components/InfoBox/InfoMenu.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 0.5em;\n  font-weight: 300;\n  text-transform: lowercase;\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  list-style: none;\n  margin: 0;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





function InfoMenu(_ref) {
  var linkOnClick = _ref.linkOnClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleInfoMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, {
    key: "/about/",
    to: "/about/",
    onClick: linkOnClick,
    "data-shape": "closed"
  }, "About"));
}

var StyleInfoMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject());
var StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"])(_templateObject2(), function (props) {
  return props.theme.info.colors.menuLink;
}, function (props) {
  return props.theme.info.colors.menuLinkHover;
});
/* harmony default export */ __webpack_exports__["default"] = (InfoMenu);

/***/ }),

/***/ "./src/components/InfoBox/InfoText.tsx":
/*!*********************************************!*\
  !*** ./src/components/InfoBox/InfoText.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoHeader; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _content_meta_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../content/meta/config */ "./content/meta/config.js");
/* harmony import */ var _content_meta_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_meta_config__WEBPACK_IMPORTED_MODULE_3__);


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n  font-weight: 300;\n  line-height: 1.5;\n  font-size: 0.95em;\n  text-align: center;\n  margin-bottom: 0.8em;\n  word-break: break-word;\n\n  & p::first-of-type {\n    margin-top: 0;\n  }\n\n  & p::last-child {\n    margin-bottom: 0;\n  }\n\n  // .is-aside.open & {\n  //   display: none;\n  // }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




function InfoHeader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, _content_meta_config__WEBPACK_IMPORTED_MODULE_3___default.a.infoText);
}
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

/***/ })

};;
//# sourceMappingURL=8.render-page.js.map