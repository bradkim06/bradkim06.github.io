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

/***/ "./src/components/Navigator/List.tsx":
/*!*******************************************!*\
  !*** ./src/components/Navigator/List.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _ListHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListHeader */ "./src/components/Navigator/ListHeader.tsx");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ListItem */ "./src/components/Navigator/ListItem.tsx");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");



function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  .is-aside.closed &,\n  .moving-featured.closed & {\n    display: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: calc(", "px + 1.3rem) 1.3rem\n    calc(", "px + 1.3rem) 1.3rem;\n\n  @media (min-width: ", "px) {\n    padding: calc(", "px + 2rem) 2rem\n      calc(", "px + 2rem) 2rem;\n  }\n\n  @media (min-width: ", "px) {\n    padding: 2rem calc(1rem + 17px) calc(2rem + 17px) 2rem;\n    left: ", "px;\n    .moving-featured &,\n    .is-aside & {\n      padding: 1rem 0.5rem 1rem 0.5rem;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // import SpringScrollbars from "../SpringScrollbars";




var List = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(List, _React$Component);

  function List() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = List.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        posts = _this$props.posts,
        linkOnClick = _this$props.linkOnClick,
        expandOnClick = _this$props.expandOnClick,
        removeFilter = _this$props.removeFilter,
        categoryFilter = _this$props.categoryFilter,
        navigatorShape = _this$props.navigatorShape;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Posts, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_6__["Scrollbars"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Inner, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_ListHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      expandOnClick: expandOnClick,
      categoryFilter: categoryFilter,
      navigatorShape: navigatorShape,
      removeFilter: removeFilter
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(PostList, null, posts.edges && posts.edges.map(function (post, i) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: i,
        post: post,
        linkOnClick: linkOnClick,
        categoryFilter: categoryFilter
      });
    })))));
  };

  return List;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var Posts = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2(), function (props) {
  return props.theme.bars.sizes.infoBar;
}, function (props) {
  return props.theme.bars.sizes.actionsBar;
}, function (props) {
  return props.theme.mediaQueryTresholds.M;
}, function (props) {
  return props.theme.bars.sizes.infoBar;
}, function (props) {
  return props.theme.bars.sizes.actionsBar;
}, function (props) {
  return props.theme.mediaQueryTresholds.L;
}, function (props) {
  return props.theme.info.sizes.width;
});
var PostList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/components/Navigator/ListHeader.tsx":
/*!*************************************************!*\
  !*** ./src/components/Navigator/ListHeader.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");


function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 calc(-0.5rem + ", ") 1em\n    calc(-0.5rem + ", ");\n  position: relative;\n  font-size: 1.2em;\n  line-height: 1;\n  color: ", ";\n  border-bottom: 1px solid ", ";\n  padding: 0 1em 1em;\n  font-weight: 300;\n  .removeButton {\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n  & strong {\n    font-weight: 600;\n    display: block;\n  }\n  & small {\n    display: block;\n    margin: 0 0 0.3em 0;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 0 1em 0;\n    padding: 0 1em 1.5em;\n    .is-aside & {\n      padding: 0 0 1em 0.5em;\n      margin: 0 calc(-0.5rem + ", ")\n        1em calc(-0.5rem + ", ");\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: none;\n\n  .is-aside.closed &,\n  .moving-featured.closed & {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    margin: 0;\n    height: ", "px;\n    padding: 0 30px 0 40px;\n  }\n\n  & h3 {\n    font-size: 1.1em;\n    color: ", ";\n    font-weight: 600;\n    margin: -0.2em 0 0 0;\n    text-transform: uppercase;\n    & small {\n      font-size: 0.6em;\n      display: block;\n      margin: 0 0 0.1em;\n      font-weight: 300;\n      letter-spacing: 0.2em;\n    }\n  }\n\n  .expandButton {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function ListHeader(_ref) {
  var expandOnClick = _ref.expandOnClick,
      categoryFilter = _ref.categoryFilter,
      navigatorShape = _ref.navigatorShape,
      removeFilter = _ref.removeFilter;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("header", null, navigatorShape === "closed" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Closed, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h3", null, "List of posts"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-label": "Expand the list",
    onClick: expandOnClick,
    title: "Expand the list",
    className: "expandButton"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5___default.a, null))), navigatorShape === "open" && categoryFilter !== "all posts" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Filter, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("small", null, "Category Filter:"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("strong", null, categoryFilter), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-label": "Remove filtering",
    onClick: removeFilter,
    title: "Clear filtering",
    className: "removeButton"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, null))));
}

var Closed = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (props) {
  return props.theme.navigator.sizes.closedHeight;
}, function (props) {
  return props.theme.navigator.colors.postsHeader;
}, function (props) {
  return props.theme.navigator.colors.postsHeader;
});
var Filter = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), function (props) {
  return props.theme.base.sizes.linesMargin;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
}, function (props) {
  return props.theme.base.colors.accent;
}, function (props) {
  return props.theme.base.colors.lines;
}, function (props) {
  return props.theme.mediaQueryTresholds.L;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
});
/* harmony default export */ __webpack_exports__["default"] = (ListHeader);

/***/ }),

/***/ "./src/components/Navigator/ListItem.tsx":
/*!***********************************************!*\
  !*** ./src/components/Navigator/ListItem.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");



function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 0 0 1.5em;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  text-align: center;\n\n  & h1 {\n    line-height: 1.15;\n    font-weight: 600;\n    letter-spacing: -0.03em;\n    margin: 0;\n    font-size: ", "em;\n\n    @media (min-width: ", "px) {\n      font-size: ", "em;\n    }\n\n    @media (min-width: ", "px) {\n      font-size: ", "em;\n      .moving-featured &,\n      .is-aside & {\n        font-size: 1em;\n        font-weight: 400;\n      }\n    }\n  }\n\n  & h2 {\n    line-height: 1.2;\n    display: block;\n    font-size: ", "em;\n    margin: 0.3em 0 0 0;\n\n    @media (min-width: ", "px) {\n      font-size: ", "em;\n    }\n\n    @media (min-width: ", "px) {\n      font-size: ", "em;\n      .moving-featured &,\n      .is-aside & {\n        display: none;\n      }\n    }\n  }\n\n  @media (min-width: ", "px) {\n    .moving-featured &,\n    .is-aside & {\n      margin: 0 0 0 0.5em;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n  padding: 0.7em 1em 0.7em 1em;\n  color: ", ";\n\n  @media (hover: hover) {\n    &:hover {\n      color: ", ";\n      & .pointer {\n        border-radius: 65% 75%;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  & ul {\n    padding: 0;\n    list-style: none;\n  }\n  & li {\n    margin: 0 0 0.7em 0;\n    transition: height 1s;\n\n    @media (min-width: ", "px) {\n      margin: 0 0 1.5rem 0;\n    }\n\n    @media (min-width: ", "px) {\n      .moving-featured &,\n      .is-aside & {\n        margin: 0 0 0 0;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var ListItem = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ListItem, _React$Component);

  function ListItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      hidden: false
    };
    return _this;
  }

  var _proto = ListItem.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.categoryFilter !== this.props.categoryFilter) {
      var category = this.props.post.node.frontmatter.category;
      var categoryFilter = this.props.categoryFilter;

      if (categoryFilter === "all posts") {
        this.setState({
          hidden: false
        });
      } else if (category !== categoryFilter) {
        this.setState({
          hidden: true
        });
      } else if (category === categoryFilter) {
        this.setState({
          hidden: false
        });
      }
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        post = _this$props.post,
        linkOnClick = _this$props.linkOnClick;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(StyledListItem, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("ul", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("li", {
      className: "" + post.node.frontmatter.category,
      style: {
        display: "" + (this.state.hidden ? "none" : "block")
      },
      key: post.node.fields.slug
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(StyledLink, {
      activeClassName: "active",
      to: post.node.fields.slug,
      onClick: linkOnClick
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(ListItemText, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h1", null, post.node.frontmatter.title, " "), post.node.frontmatter.subTitle && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h2", null, post.node.frontmatter.subTitle))))));
  };

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject(), function (props) {
  return props.theme.mediaQueryTresholds.M;
}, function (props) {
  return props.theme.mediaQueryTresholds.L;
});
var StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"])(_templateObject2(), function (props) {
  return props.theme.navigator.colors.postsListItemLink;
}, function (props) {
  return props.theme.navigator.colors.postsListItemLinkHover;
}); // const ListItemPointer = styled.div`
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

var ListItemText = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3(), function (props) {
  return props.theme.navigator.sizes.postsListItemH1Font;
}, function (props) {
  return props.theme.mediaQueryTresholds.M;
}, function (props) {
  return props.theme.navigator.sizes.postsListItemH1Font * props.theme.navigator.sizes.fontIncraseForM;
}, function (props) {
  return props.theme.mediaQueryTresholds.L;
}, function (props) {
  return props.theme.navigator.sizes.postsListItemH1Font * props.theme.navigator.sizes.fontIncraseForL;
}, function (props) {
  return props.theme.navigator.sizes.postsListItemH2Font;
}, function (props) {
  return props.theme.mediaQueryTresholds.M;
}, function (props) {
  return props.theme.navigator.sizes.postsListItemH2Font * props.theme.navigator.sizes.fontIncraseForM;
}, function (props) {
  return props.theme.mediaQueryTresholds.L;
}, function (props) {
  return props.theme.navigator.sizes.postsListItemH2Font * props.theme.navigator.sizes.fontIncraseForL;
}, function (props) {
  return props.theme.mediaQueryTresholds.L;
});
/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./src/components/Navigator/Navigator.tsx":
/*!************************************************!*\
  !*** ./src/components/Navigator/Navigator.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.tsx");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.tsx");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./List */ "./src/components/Navigator/List.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");




function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  transform: translate3d(0, 0, 0);\n  will-change: left, top, bottom, width;\n  background: ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  transition-timing-function: ease;\n  transition: left 0.9s;\n  width: 100%;\n\n  @media (max-width: ", "px) {\n    &.is-aside {\n      left: -100%;\n    }\n\n    &.is-featured {\n      left: 0;\n    }\n  }\n\n  @media (min-width: ", "px) {\n    &.is-featured {\n      transition: left 0.9s;\n      width: calc(\n        100vw - ", "px -\n          ", "px\n      );\n      left: ", "px;\n      top: 0;\n    }\n\n    &.is-aside {\n      transition: bottom 0.5s;\n      left: 0;\n      width: ", "px;\n      z-index: 1;\n      top: auto;\n\n      &.closed {\n        bottom: calc(\n          -100% + 100px + ", "px\n        );\n        height: calc(100% - 100px);\n      }\n\n      &.open {\n        bottom: 0;\n        height: calc(100% - 100px);\n      }\n\n      &::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: ", ";\n        right: ", ";\n        height: 0;\n        border-top: 1px solid ", ";\n      }\n    }\n\n    &.moving-aside {\n      transition: left 0.9s;\n      left: calc(-100vw + ", "*2px + 2px);\n      width: calc(100vw - ", "px - 60px);\n      top: 0;\n    }\n\n    &.resizing-aside {\n      transition: none;\n      width: ", "px;\n      top: auto;\n      left: 0;\n\n      &.closed {\n        bottom: calc(-100% + 100px);\n        height: calc(100% - 100px);\n      }\n\n      &.open {\n        bottom: calc(-100% + 100px);\n        height: calc(100% - 100px);\n      }\n    }\n\n    &.moving-featured {\n      transition: bottom 0.3s;\n      bottom: -100%;\n      top: auto;\n      left: 0;\n      z-index: 1;\n      width: ", "px;\n    }\n\n    &.resizing-featured {\n      transition: none;\n      top: 0;\n      bottom: auto;\n      left: calc(-100vw + ", "*2px + 60px);\n      width: calc(100vw - ", "px - 60px);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var Navigator = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Navigator, _React$Component);

  function Navigator() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.linkOnClick = _utils_shared__WEBPACK_IMPORTED_MODULE_8__["moveNavigatorAside"].bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));

    _this.expandOnClick = function () {
      _this.props.setNavigatorShape("open");

      setTimeout(react_lazyload__WEBPACK_IMPORTED_MODULE_6__["forceCheck"], 600);
    };

    _this.removefilterOnClick = function () {
      _this.props.setCategoryFilter("all posts");
    };

    return _this;
  }

  var _proto = Navigator.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        posts = _this$props.posts,
        navigatorPosition = _this$props.navigatorPosition,
        navigatorShape = _this$props.navigatorShape,
        categoryFilter = _this$props.categoryFilter;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(StyleNavigator, {
      className: (navigatorPosition ? navigatorPosition : "") + " " + (navigatorShape ? navigatorShape : "") + " "
    }, posts.totalCount && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
      posts: posts,
      navigatorPosition: navigatorPosition,
      navigatorShape: navigatorShape,
      linkOnClick: this.linkOnClick,
      expandOnClick: this.expandOnClick,
      categoryFilter: categoryFilter,
      removeFilter: this.removefilterOnClick
    }));
  };

  return Navigator;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    categoryFilter: state.categoryFilter
  };
};

var mapDispatchToProps = {
  setNavigatorPosition: _state_store__WEBPACK_IMPORTED_MODULE_7__["setNavigatorPosition"],
  setNavigatorShape: _state_store__WEBPACK_IMPORTED_MODULE_7__["setNavigatorShape"],
  setCategoryFilter: _state_store__WEBPACK_IMPORTED_MODULE_7__["setCategoryFilter"]
};
var StyleNavigator = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].nav(_templateObject(), function (props) {
  return props.theme.navigator.colors.background;
}, function (props) {
  return props.theme.mediaQueryTresholds.L - 1;
}, function (props) {
  return props.theme.mediaQueryTresholds.L;
}, function (props) {
  return props.theme.info.sizes.width;
}, function (props) {
  return props.theme.bars.sizes.actionsBar;
}, function (props) {
  return props.theme.info.sizes.width;
}, function (props) {
  return props.theme.info.sizes.width - 1;
}, function (props) {
  return props.theme.navigator.sizes.closedHeight;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
}, function (props) {
  return props.theme.base.colors.lines;
}, function (props) {
  return props.theme.info.sizes.width;
}, function (props) {
  return props.theme.info.sizes.width;
}, function (props) {
  return props.theme.info.sizes.width;
}, function (props) {
  return props.theme.info.sizes.width - 1;
}, function (props) {
  return props.theme.info.sizes.width;
}, function (props) {
  return props.theme.info.sizes.width;
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Navigator));

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