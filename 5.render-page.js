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

/***/ "./src/components/Actions/SearchListItem.tsx":
/*!***************************************************!*\
  !*** ./src/components/Actions/SearchListItem.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 80%;\n  display: flex;\n  word-break: break-all;\n  flex-direction: column;\n  padding: 1rem;\n  color: ", ";\n  border-radius: 50px;\n  background-color: ", ";\n  text-align: center;\n\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 1.2s cubic-bezier(0.25, 0.8, 0.25, 1);\n\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    color: ", ";\n    background-color: ", ";\n  }\n\n  h1 {\n    margin: 0;\n    font-weight: 700;\n    font-size: 1.6em;\n  }\n\n  small {\n    font-weight: 400;\n    font-size: 1em;\n  }\n\n  @media (max-width: ", "px) {\n    h1 {\n      font-size: 1.3em;\n    }\n\n    small {\n      font-size: 0.8em;\n    }\n  }\n\n  @media (max-width: ", "px) {\n    h1 {\n      font-size: 1em;\n    }\n\n    small {\n      font-size: 0.6em;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  list-style: none;\n  padding: 0;\n  display: grid;\n  place-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  aspect-ratio: 16/9;\n  margin: 0.5rem 0;\n\n  @media (max-width: ", "px) {\n    margin: 0.25rem 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      slug = _ref.slug,
      linkOnClick = _ref.linkOnClick;
  var titleName = JSON.stringify(title, null, 4);
  var subTitleName = JSON.stringify(subTitle, null, 4);
  var path = JSON.stringify(slug, null, 4);

  function movePage() {
    linkOnClick();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: movePage,
    to: path.replace(/\"/g, "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    in: true,
    timeout: 500
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FlexChild, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, titleName.replace(/\"/g, "")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, subTitleName !== "null" && subTitleName.replace(/\"/g, ""))))));
});
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (props) {
  return props.theme.mediaQueryTresholds.M;
});
var SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject2());
var FlexChild = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li(_templateObject3(), function (props) {
  return props.theme.navigator.colors.postsListItemLink;
}, function (props) {
  return props.theme.search.colors.listBackground;
}, function (props) {
  return props.theme.navigator.colors.postsListItemLinkHover;
}, function (props) {
  return props.theme.search.colors.hoverBackground;
}, function (props) {
  return props.theme.mediaQueryTresholds.L;
}, function (props) {
  return props.theme.mediaQueryTresholds.M;
});

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _ListHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListHeader */ "./src/components/Navigator/ListHeader.tsx");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListItem */ "./src/components/Navigator/ListItem.tsx");
/* harmony import */ var _Scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Scroll */ "./src/components/Scroll/index.tsx");


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






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var posts = _ref.posts,
      linkOnClick = _ref.linkOnClick,
      expandOnClick = _ref.expandOnClick,
      removeFilter = _ref.removeFilter,
      categoryFilter = _ref.categoryFilter,
      navigatorShape = _ref.navigatorShape;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Posts, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Scroll__WEBPACK_IMPORTED_MODULE_5__["default"], {
    forceCheckOnScroll: true,
    isNavigator: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Inner, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    expandOnClick: expandOnClick,
    categoryFilter: categoryFilter,
    navigatorShape: navigatorShape,
    removeFilter: removeFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostList, null, posts.edges && posts.edges.map(function (post, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: i,
      post: post,
      linkOnClick: linkOnClick,
      categoryFilter: categoryFilter
    });
  })))));
});
var Posts = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), function (props) {
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
var PostList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul(_templateObject3());

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


function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 calc(-0.5rem + ", ") 1em\n    calc(-0.5rem + ", ");\n  position: relative;\n  font-size: 1.2em;\n  line-height: 1;\n  color: ", ";\n  border-bottom: 1px solid ", ";\n  padding: 0 1em 1em;\n  font-weight: 300;\n  .removeButton {\n    position: absolute;\n    top: 0;\n    right: 0;\n    color: ", ";\n  }\n  & strong {\n    font-weight: 600;\n    display: block;\n  }\n  & small {\n    display: block;\n    margin: 0 0 0.3em 0;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 0 1em 0;\n    padding: 0 1em 1.5em;\n    .is-aside & {\n      padding: 0 0 1em 0.5em;\n      margin: 0 calc(-0.5rem + ", ")\n        1em calc(-0.5rem + ", ");\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: none;\n\n  .is-aside.closed &,\n  .moving-featured.closed & {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    margin: 0;\n    height: ", "px;\n    padding: 0 30px 0 40px;\n  }\n\n  & h1 {\n    font-size: 1.1em;\n    color: ", ";\n    font-weight: 600;\n    margin: -0.2em 0 0 0;\n    text-transform: uppercase;\n    & small {\n      font-size: 0.6em;\n      display: block;\n      margin: 0 0 0.1em;\n      font-weight: 300;\n      letter-spacing: 0.2em;\n    }\n  }\n\n  .expandButton {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var expandOnClick = _ref.expandOnClick,
      categoryFilter = _ref.categoryFilter,
      navigatorShape = _ref.navigatorShape,
      removeFilter = _ref.removeFilter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", null, navigatorShape === "closed" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Closed, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "List of posts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-label": "Expand the list",
    onClick: expandOnClick,
    title: "Expand the list",
    className: "expandButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5___default.a, null))), navigatorShape === "open" && categoryFilter !== "all posts" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Filter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, "Active Category Filter:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, categoryFilter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-label": "Remove filtering",
    onClick: removeFilter,
    title: "Clear filtering",
    className: "removeButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, null))));
});
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
  return props.theme.navigator.colors.postsHeader;
}, function (props) {
  return props.theme.mediaQueryTresholds.L;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
}, function (props) {
  return props.theme.base.sizes.linesMargin;
});

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Actions_SearchListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Actions/SearchListItem */ "./src/components/Actions/SearchListItem.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  & ul {\n    padding: 0;\n    list-style: none;\n  }\n  & li {\n    margin: 0 0 0.7em 0;\n\n    @media (min-width: ", "px) {\n      .moving-featured &,\n      .is-aside & {\n        padding: 0.8rem 0.5rem 0 0.5rem;\n        text-align: center;\n\n        h1 {\n          font-size: 0.9em;\n        }\n\n        small {\n          display: none;\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var post = _ref.post,
      categoryFilter = _ref.categoryFilter,
      linkOnClick = _ref.linkOnClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hidden = _useState[0],
      setHidden = _useState[1];

  var category = post.node.frontmatter.category;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (categoryFilter === "all posts") {
      setHidden(false);
    } else if (category !== categoryFilter) {
      setHidden(true);
    } else if (category === categoryFilter) {
      setHidden(false);
    }
  }, [categoryFilter]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "" + post.node.frontmatter.category,
    style: {
      display: "" + (hidden ? "none" : "block")
    },
    key: post.node.fields.slug
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Actions_SearchListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: post.node.frontmatter.title,
    subTitle: post.node.frontmatter.subTitle && post.node.frontmatter.subTitle,
    slug: post.node.fields.slug,
    linkOnClick: linkOnClick
  })));
});
var StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), function (props) {
  return props.theme.mediaQueryTresholds.L;
}); // const StyledLink = styled(Link)`
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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.tsx");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.tsx");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./List */ "./src/components/Navigator/List.tsx");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  transform: translate3d(0, 0, 0);\n  will-change: left, top, bottom, width;\n  background: ", ";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  transition-timing-function: ease;\n  transition: left 0.9s;\n  width: 100%;\n\n  @media (max-width: ", "px) {\n    &.is-aside {\n      left: -100%;\n    }\n\n    &.is-featured {\n      left: 0;\n    }\n  }\n\n  @media (min-width: ", "px) {\n    &.is-featured {\n      transition: left 0.9s;\n      width: calc(\n        100vw - ", "px -\n          ", "px\n      );\n      left: ", "px;\n      top: 0;\n    }\n\n    &.is-aside {\n      transition: bottom 0.5s;\n      left: 0;\n      width: ", "px;\n      z-index: 1;\n      top: auto;\n\n      &.closed {\n        bottom: calc(\n          -100% + 100px + ", "px\n        );\n        height: calc(100% - 100px);\n      }\n\n      &.open {\n        bottom: 0;\n        height: calc(100% - 100px);\n      }\n\n      &::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: ", ";\n        right: ", ";\n        height: 0;\n        border-top: 1px solid ", ";\n      }\n    }\n\n    &.moving-aside {\n      transition: left 0.9s;\n      left: calc(-100vw + ", "*2px + 2px);\n      width: calc(100vw - ", "px - 60px);\n      top: 0;\n    }\n\n    &.resizing-aside {\n      transition: none;\n      width: ", "px;\n      top: auto;\n      left: 0;\n\n      &.closed {\n        bottom: calc(-100% + 100px);\n        height: calc(100% - 100px);\n      }\n\n      &.open {\n        bottom: calc(-100% + 100px);\n        height: calc(100% - 100px);\n      }\n    }\n\n    &.moving-featured {\n      transition: bottom 0.3s;\n      bottom: -100%;\n      top: auto;\n      left: 0;\n      z-index: 1;\n      width: ", "px;\n    }\n\n    &.resizing-featured {\n      transition: none;\n      top: 0;\n      bottom: auto;\n      left: calc(-100vw + ", "*2px + 60px);\n      width: calc(100vw - ", "px - 60px);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var posts = _ref.posts;
  var stateFilter = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.categoryFilter;
  });
  var state = Object(_utils_shared__WEBPACK_IMPORTED_MODULE_5__["moveNavData"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  function expandOnClick() {
    dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_4__["setNavigatorShape"])("open"));
  }

  function linkOnClick() {
    Object(_utils_shared__WEBPACK_IMPORTED_MODULE_5__["moveNavAside"])(state, dispatch);
  }

  function removefilterOnClick() {
    dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_4__["setCategoryFilter"])("all posts"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleNavigator, {
    className: (state.navigatorPosition ? state.navigatorPosition : "") + " " + (state.navigatorShape ? state.navigatorShape : "") + " "
  }, posts.totalCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
    posts: posts,
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    linkOnClick: linkOnClick,
    expandOnClick: expandOnClick,
    categoryFilter: stateFilter,
    removeFilter: removefilterOnClick
  }));
});
var StyleNavigator = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].nav(_templateObject(), function (props) {
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



/***/ }),

/***/ "./src/components/Scroll/SpringScrollbars.tsx":
/*!****************************************************!*\
  !*** ./src/components/Scroll/SpringScrollbars.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rebound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rebound */ "./node_modules/rebound/dist/rebound.js");
/* harmony import */ var rebound__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rebound__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.tsx");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var SpringScrollbars = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(SpringScrollbars, _Component);

  function SpringScrollbars(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.handleSpringUpdate = _this.handleSpringUpdate.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.renderThumb = _this.renderThumb.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  var _proto = SpringScrollbars.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.isNavigator && this.props.navigatorPosition !== "is-featured") {
      return;
    }

    if (this.props.scrollToTop && this.props.scrollToTop !== prevProps.scrollToTop) {
      this.scrollTop(0);
      this.props.setScrollToTop(false);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    this.springSystem = new rebound__WEBPACK_IMPORTED_MODULE_6__["SpringSystem"]();
    this.spring = this.springSystem.createSpring();
    this.spring.addListener({
      onSpringUpdate: this.handleSpringUpdate
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.springSystem.deregisterSpring(this.spring);
    this.springSystem.removeAllListeners();
    this.springSystem = undefined;
    this.spring.destroy();
    this.spring = undefined;
  };

  _proto.getScrollTop = function getScrollTop() {
    return this.scrollbars.getScrollTop();
  };

  _proto.getScrollHeight = function getScrollHeight() {
    return this.scrollbars.getScrollHeight();
  };

  _proto.getHeight = function getHeight() {
    return this.scrollbars.getHeight();
  };

  _proto.scrollTop = function scrollTop(top) {
    var scrollTop = this.scrollbars.getScrollTop();
    var scrollHeight = this.scrollbars.getScrollHeight();
    var val = rebound__WEBPACK_IMPORTED_MODULE_6__["util"].mapValueInRange(top, 0, scrollHeight, scrollHeight * 0.01, scrollHeight * 0.99);
    this.spring.setCurrentValue(scrollTop).setAtRest();
    this.spring.setEndValue(val);
  };

  _proto.handleSpringUpdate = function handleSpringUpdate(spring) {
    var _this2 = this;

    window.requestAnimationFrame(function () {
      var val = spring.getCurrentValue();

      _this2.scrollbars.scrollTop(val);
    });
  };

  _proto.renderThumb = function renderThumb(_ref) {
    var style = _ref.style,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["style"]);

    var thumbStyle = {
      backgroundColor: this.props.theme.bars.colors.icon
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object.assign({
      style: _objectSpread(_objectSpread({}, style), thumbStyle)
    }, props));
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        children = _this$props.children,
        forceCheckOnScroll = _this$props.forceCheckOnScroll;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_5__["Scrollbars"], {
      autoHide: true,
      universal: true,
      onScroll: forceCheckOnScroll && react_lazyload__WEBPACK_IMPORTED_MODULE_7__["forceCheck"],
      ref: function ref(comp) {
        _this3.scrollbars = comp;
      },
      renderThumbHorizontal: this.renderThumb,
      renderThumbVertical: this.renderThumb,
      onUpdate: this.handleUpdate
    }, children);
  };

  return SpringScrollbars;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    scrollToTop: state.scrollToTop,
    navigatorPosition: state.navigatorPosition
  };
};

var mapDispatchToProps = {
  setScrollToTop: _state_store__WEBPACK_IMPORTED_MODULE_10__["setScrollToTop"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["withTheme"])(SpringScrollbars)));

/***/ }),

/***/ "./src/components/Scroll/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Scroll/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpringScrollbars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpringScrollbars */ "./src/components/Scroll/SpringScrollbars.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SpringScrollbars__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/utils/shared.tsx":
/*!******************************!*\
  !*** ./src/utils/shared.tsx ***!
  \******************************/
/*! exports provided: moveNavFeature, moveNavAside, moveNavData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveNavFeature", function() { return moveNavFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveNavAside", function() { return moveNavAside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveNavData", function() { return moveNavData; });
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/store */ "./src/state/store.tsx");




function moveNavFeature(e, state, dispatch) {
  e && e.preventDefault(); // uncomment following lines if you want to count featuring Navigator as a visit
  // to index page ('/'), you have to also uncomment import { navigateTo }...
  // navigate("/");

  if (state.navigatorPosition === "is-aside") {
    if (state.isWideScreen) {
      dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_3__["setNavigatorPosition"])("moving-featured"));
      setTimeout(function () {
        dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_3__["setNavigatorPosition"])("resizing-featured"));
        dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_3__["setNavigatorPosition"])("is-featured"));
        dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_3__["setNavigatorShape"])("open"));
      }, 500);
    } else {
      setTimeout(function () {
        dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_3__["setNavigatorPosition"])("is-featured"));
      }, 0);
    }
  }

  setTimeout(function () {
    Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])("/");
  }, 500);
}
function moveNavAside(state, dispatch) {
  if (state.navigatorPosition === "is-featured") {
    if (state.isWideScreen) {
      dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_3__["setNavigatorPosition"])("moving-aside"));
      setTimeout(function () {
        dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_3__["setNavigatorPosition"])("resizing-aside"));
        setTimeout(function () {
          dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_3__["setNavigatorPosition"])("is-aside"));
          setTimeout(react_lazyload__WEBPACK_IMPORTED_MODULE_0__["forceCheck"], 600);
        });
      }, 800);
    } else {
      setTimeout(function () {
        dispatch(Object(_state_store__WEBPACK_IMPORTED_MODULE_3__["setNavigatorPosition"])("is-aside"));
      }, 100);
    }
  }

  return;
}
function moveNavData() {
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return {
      navigatorShape: state.navigatorShape,
      navigatorPosition: state.navigatorPosition,
      isWideScreen: state.isWideScreen
    };
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
}

/***/ })

};;
//# sourceMappingURL=5.render-page.js.map