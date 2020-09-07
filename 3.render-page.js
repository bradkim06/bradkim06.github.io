exports.ids = [3];
exports.modules = {

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
/* harmony import */ var _SpringScrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SpringScrollbars */ "./src/components/SpringScrollbars/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");







class List extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      posts,
      linkOnClick,
      expandOnClick,
      removeFilter,
      categoryFilter,
      navigatorShape
    } = this.props;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Posts, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_SpringScrollbars__WEBPACK_IMPORTED_MODULE_4__["default"], {
      forceCheckOnScroll: true,
      isNavigator: true
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Inner, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_ListHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      expandOnClick: expandOnClick,
      categoryFilter: categoryFilter,
      navigatorShape: navigatorShape,
      removeFilter: removeFilter
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(PostList, null, posts.edges && posts.edges.map((post, i) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      post: post,
      linkOnClick: linkOnClick,
      categoryFilter: categoryFilter
    }))))));
  }

}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");







function ListHeader({
  expandOnClick,
  categoryFilter,
  navigatorShape,
  removeFilter
}) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("header", null, navigatorShape === "closed" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Closed, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", null, "List of posts"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-label": "Expand the list",
    onClick: expandOnClick,
    title: "Expand the list",
    className: "expandButton"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_4___default.a, null))), navigatorShape === "open" && categoryFilter !== "all posts" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Filter, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("small", null, "Category Filter:"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("strong", null, categoryFilter), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    "aria-label": "Remove filtering",
    onClick: removeFilter,
    title: "Clear filtering",
    className: "removeButton"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, null))));
}

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

  & h3 {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");





class ListItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      hidden: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.categoryFilter !== this.props.categoryFilter) {
      const category = this.props.post.node.frontmatter.category;
      const categoryFilter = this.props.categoryFilter;

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
  }

  render() {
    const {
      post,
      linkOnClick
    } = this.props;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(StyledListItem, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
      className: `${post.node.frontmatter.category}`,
      style: {
        display: `${this.state.hidden ? "none" : "block"}`
      },
      key: post.node.fields.slug
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(StyledLink, {
      activeClassName: "active",
      to: post.node.fields.slug,
      onClick: linkOnClick
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ListItemText, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h1", null, post.node.frontmatter.title, " "), post.node.frontmatter.subTitle && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", null, post.node.frontmatter.subTitle))))));
  }

}

const StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  & ul {
    padding: 0;
    list-style: none;
  }
  & li {
    margin: 0 0 0.7em 0;
    transition: height 1s;

    @media (min-width: ${props => props.theme.mediaQueryTresholds.M}px) {
      margin: 0 0 1.5rem 0;
    }

    @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
      .moving-featured &,
      .is-aside & {
        margin: 0 0 0 0;
      }
    }
  }
`;
const StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 0.7em 1em 0.7em 1em;
  color: ${props => props.theme.navigator.colors.postsListItemLink};

  @media (hover: hover) {
    &:hover {
      color: ${props => props.theme.navigator.colors.postsListItemLinkHover};
      & .pointer {
        border-radius: 65% 75%;
      }
    }
  }
`; // const ListItemPointer = styled.div`
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

const ListItemText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  margin: 0 0 0 1.5em;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  & h1 {
    line-height: 1.15;
    font-weight: 600;
    letter-spacing: -0.03em;
    margin: 0;
    font-size: ${props => props.theme.navigator.sizes.postsListItemH1Font}em;

    @media (min-width: ${props => props.theme.mediaQueryTresholds.M}px) {
      font-size: ${props => props.theme.navigator.sizes.postsListItemH1Font * props.theme.navigator.sizes.fontIncraseForM}em;
    }

    @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
      font-size: ${props => props.theme.navigator.sizes.postsListItemH1Font * props.theme.navigator.sizes.fontIncraseForL}em;
      .moving-featured &,
      .is-aside & {
        font-size: 1em;
        font-weight: 400;
      }
    }
  }

  & h2 {
    line-height: 1.2;
    display: block;
    font-size: ${props => props.theme.navigator.sizes.postsListItemH2Font}em;
    margin: 0.3em 0 0 0;

    @media (min-width: ${props => props.theme.mediaQueryTresholds.M}px) {
      font-size: ${props => props.theme.navigator.sizes.postsListItemH2Font * props.theme.navigator.sizes.fontIncraseForM}em;
    }

    @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
      font-size: ${props => props.theme.navigator.sizes.postsListItemH2Font * props.theme.navigator.sizes.fontIncraseForL}em;
      .moving-featured &,
      .is-aside & {
        display: none;
      }
    }
  }

  @media (min-width: ${props => props.theme.mediaQueryTresholds.L}px) {
    .moving-featured &,
    .is-aside & {
      margin: 0 0 0 0.5em;
    }
  }
`;
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.tsx");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../utils/shared */ "./src/utils/shared.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./List */ "./src/components/Navigator/List.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");









class Navigator extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.linkOnClick = _utils_shared__WEBPACK_IMPORTED_MODULE_5__["moveNavigatorAside"].bind(this);

    this.expandOnClick = () => {
      this.props.setNavigatorShape("open");
      setTimeout(react_lazyload__WEBPACK_IMPORTED_MODULE_3__["forceCheck"], 600);
    };

    this.removefilterOnClick = () => {
      this.props.setCategoryFilter("all posts");
    };
  }

  render() {
    const {
      posts,
      navigatorPosition,
      navigatorShape,
      categoryFilter
    } = this.props;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(StyleNavigator, {
      className: `${navigatorPosition ? navigatorPosition : ""} ${navigatorShape ? navigatorShape : ""} `
    }, posts.totalCount && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
      posts: posts,
      navigatorPosition: navigatorPosition,
      navigatorShape: navigatorShape,
      linkOnClick: this.linkOnClick,
      expandOnClick: this.expandOnClick,
      categoryFilter: categoryFilter,
      removeFilter: this.removefilterOnClick
    }));
  }

}

const mapStateToProps = state => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    categoryFilter: state.categoryFilter
  };
};

const mapDispatchToProps = {
  setNavigatorPosition: _state_store__WEBPACK_IMPORTED_MODULE_4__["setNavigatorPosition"],
  setNavigatorShape: _state_store__WEBPACK_IMPORTED_MODULE_4__["setNavigatorShape"],
  setCategoryFilter: _state_store__WEBPACK_IMPORTED_MODULE_4__["setCategoryFilter"]
};
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
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Navigator));

/***/ })

};;
//# sourceMappingURL=3.render-page.js.map