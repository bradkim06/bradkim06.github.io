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

/***/ "./node_modules/create-emotion/dist/create-emotion.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/create-emotion/dist/create-emotion.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.esm.js");




function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === undefined) {
    return cache.insert('', serialized, cache.sheet, true);
  }
}

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var createEmotion = function createEmotion(options) {
  var cache = Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__["default"])(options); // $FlowFixMe

  cache.sheet.speedy = function (value) {
    if (false) {}

    this.isSpeedy = value;
  };

  cache.compat = true;

  var css = function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__["serializeStyles"])(args, cache.registered, undefined);
    Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_2__["insertStyles"])(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var keyframes = function keyframes() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__["serializeStyles"])(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_1__["serializeStyles"])(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };

  var cx = function cx() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return merge(cache.registered, css, classnames(args));
  };

  return {
    css: css,
    cx: cx,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    hydrate: function hydrate(ids) {
      ids.forEach(function (key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    // $FlowFixMe
    sheet: cache.sheet,
    cache: cache,
    getRegisteredStyles: _emotion_utils__WEBPACK_IMPORTED_MODULE_2__["getRegisteredStyles"].bind(null, cache.registered),
    merge: merge.bind(null, cache.registered, css)
  };
};

var classnames = function classnames(args) {
  var cls = '';

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

/* harmony default export */ __webpack_exports__["default"] = (createEmotion);


/***/ }),

/***/ "./node_modules/emotion/dist/emotion.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/emotion/dist/emotion.esm.js ***!
  \**************************************************/
/*! exports provided: cache, css, cx, flush, getRegisteredStyles, hydrate, injectGlobal, keyframes, merge, sheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-emotion */ "./node_modules/create-emotion/dist/create-emotion.esm.js");


var _createEmotion = Object(create_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    cache = _createEmotion.cache;




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

/***/ "./src/components/Navigator/List.js":
/*!******************************************!*\
  !*** ./src/components/Navigator/List.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ListHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListHeader */ "./src/components/Navigator/ListHeader.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListItem */ "./src/components/Navigator/ListItem.js");
/* harmony import */ var _SpringScrollbars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SpringScrollbars */ "./src/components/SpringScrollbars/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
// import { forceCheck } from "react-lazyload";
class List extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component{render(){const{posts,linkOnClick,expandOnClick,categoryFilter,navigatorShape,removeFilter}=this.props;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Posts,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_SpringScrollbars__WEBPACK_IMPORTED_MODULE_5__["default"],{forceCheckOnScroll:true,isNavigator:true},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Inner,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_ListHeader__WEBPACK_IMPORTED_MODULE_3__["default"],{expandOnClick:expandOnClick,categoryFilter:categoryFilter,navigatorShape:navigatorShape,removeFilter:removeFilter}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(PostList,null,posts&&posts.map((post,i)=>Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"],{key:i,post:post,linkOnClick:linkOnClick,categoryFilter:categoryFilter}))))));}}List.propTypes={posts:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,linkOnClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,expandOnClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,navigatorPosition:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,navigatorShape:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,categoryFilter:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,removeFilter:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired};const Posts=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",{target:"e2m2o6o0"})({name:"1p9tt5m",styles:"position:absolute;left:0;top:0;bottom:0;width:100%;"});const Inner=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",{target:"e2m2o6o1"})("padding:calc(",props=>props.theme.bars.sizes.infoBar,"px + 1.3rem) 1.3rem calc(",props=>props.theme.bars.sizes.actionsBar,"px + 1.3rem) 1.3rem;@media (min-width:",props=>props.theme.mediaQueryTresholds.M,"px){padding:calc(",props=>props.theme.bars.sizes.infoBar,"px + 2rem) 2rem calc(",props=>props.theme.bars.sizes.actionsBar,"px + 2rem) 2rem;}@media (min-width:",props=>props.theme.mediaQueryTresholds.L,"px){padding:2rem calc(1rem + 17px) calc(2rem + 17px) 2rem;left:",props=>props.theme.info.sizes.width,"px;.moving-featured &,.is-aside &{padding:1rem 0.5rem 1rem 0.5rem;}}");const PostList=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("ul",{target:"e2m2o6o2"})({name:"101beid",styles:"list-style:none;margin:0;padding:0;.is-aside.closed &,.moving-featured.closed &{display:none;}"});/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/components/Navigator/ListHeader.js":
/*!************************************************!*\
  !*** ./src/components/Navigator/ListHeader.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
const propTypes={expandOnClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,categoryFilter:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,navigatorShape:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,removeFilter:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired};function ListHeader({expandOnClick,categoryFilter,navigatorShape,removeFilter}){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("header",null,navigatorShape==="closed"&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Closed,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h3",null,"List of posts"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"],{"aria-label":"Expand the list",onClick:expandOnClick,title:"Expand the list",className:"expandButton"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_5___default.a,null))),navigatorShape==="open"&&categoryFilter!=="all posts"&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Filter,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("small",null,"Category Filter:"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("strong",null,categoryFilter),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"],{"aria-label":"Remove filtering",onClick:removeFilter,title:"Clear filtering",className:"removeButton"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a,null))));}const Closed=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",{target:"e1g22rl0"})("display:none;.is-aside.closed &,.moving-featured.closed &{display:flex;flex-direction:row;justify-content:space-between;align-items:center;position:absolute;top:0;left:0;width:100%;margin:0;height:",props=>props.theme.navigator.sizes.closedHeight,"px;padding:0 30px 0 40px;}& h3{font-size:1.1em;color:",props=>props.theme.navigator.colors.postsHeader,";font-weight:600;margin:-0.2em 0 0 0;text-transform:uppercase;& small{font-size:0.6em;display:block;margin:0 0 0.1em;font-weight:300;letter-spacing:0.2em;}}.expandButton{color:",props=>props.theme.navigator.colors.postsHeader,";}");const Filter=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",{target:"e1g22rl1"})("margin:0 calc(-0.5rem + ",props=>props.theme.base.sizes.linesMargin,") 1em calc(-0.5rem + ",props=>props.theme.base.sizes.linesMargin,");position:relative;font-size:1.2em;line-height:1;color:",props=>props.theme.base.colors.accent,";border-bottom:1px solid ",props=>props.theme.base.colors.lines,";padding:0 1em 1em;font-weight:300;.removeButton{position:absolute;top:0;right:0;}& strong{font-weight:600;display:block;}& small{display:block;margin:0 0 0.3em 0;}@media (min-width:",props=>props.theme.mediaQueryTresholds.L,"px){margin:0 0 1em 0;padding:0 1em 1.5em;.is-aside &{padding:0 0 1em 0.5em;margin:0 calc(-0.5rem + ",props=>props.theme.base.sizes.linesMargin,") 1em calc(-0.5rem + ",props=>props.theme.base.sizes.linesMargin,");}}");ListHeader.propTypes=propTypes;/* harmony default export */ __webpack_exports__["default"] = (ListHeader);

/***/ }),

/***/ "./src/components/Navigator/ListItem.js":
/*!**********************************************!*\
  !*** ./src/components/Navigator/ListItem.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/theme */ "./src/styles/theme.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
// import LazyLoad from "react-lazyload";
class ListItem extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component{constructor(...args){super(...args);this.state={hidden:false};}componentDidUpdate(prevProps,prevState){if(prevProps.categoryFilter!==this.props.categoryFilter){const category=this.props.post.node.frontmatter.category;const categoryFilter=this.props.categoryFilter;if(categoryFilter==="all posts"){this.setState({hidden:false});}else if(category!==categoryFilter){this.setState({hidden:true});}else if(category===categoryFilter){this.setState({hidden:false});}}}render(){const{post,linkOnClick}=this.props;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(StyledListItem,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li",{className:`${post.node.frontmatter.category}`,style:{display:`${this.state.hidden?"none":"block"}`},key:post.node.fields.slug},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(gatsby_link__WEBPACK_IMPORTED_MODULE_3___default.a,{activeClassName:"active",className:link(_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"]),to:post.node.fields.slug,onClick:linkOnClick},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ListItemText,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h1",null,post.node.frontmatter.title," "),post.node.frontmatter.subTitle&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h2",null,post.node.frontmatter.subTitle)))));}}ListItem.propTypes={post:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,linkOnClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,categoryFilter:prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired};const StyledListItem=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div",{target:"e1qj0yxx0"})("& li{margin:0 0 0.7em 0;transition:height 1s;@media (min-width:",props=>props.theme.mediaQueryTresholds.M,"px){margin:0 0 1.5rem 0;}@media (min-width:",props=>props.theme.mediaQueryTresholds.L,"px){.moving-featured &,.is-aside &{margin:0 0 0 0;}}}");const link=theme=>/*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("display:flex;align-content:center;align-items:center;justify-content:flex-start;flex-direction:row;padding:0.7em 1em 0.7em 1em;color:",theme.navigator.colors.postsListItemLink,";@media (hover:hover){&:hover{color:",theme.navigator.colors.postsListItemLinkHover,";& .pointer{border-radius:65% 75%;}}}");// const ListItemPointer = styled.div`
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
const ListItemText=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("div",{target:"e1qj0yxx1"})("margin:0 0 0 1.5em;flex-grow:1;display:flex;flex-direction:column;width:100%;text-align:center;& h1{line-height:1.15;font-weight:600;letter-spacing:-0.03em;margin:0;font-size:",props=>props.theme.navigator.sizes.postsListItemH1Font,"em;@media (min-width:",props=>props.theme.mediaQueryTresholds.M,"px){font-size:",props=>props.theme.navigator.sizes.postsListItemH1Font*props.theme.navigator.sizes.fontIncraseForM,"em;}@media (min-width:",props=>props.theme.mediaQueryTresholds.L,"px){font-size:",props=>props.theme.navigator.sizes.postsListItemH1Font*props.theme.navigator.sizes.fontIncraseForL,"em;.moving-featured &,.is-aside &{font-size:1em;font-weight:400;}}}& h2{line-height:1.2;display:block;font-size:",props=>props.theme.navigator.sizes.postsListItemH2Font,"em;margin:0.3em 0 0 0;@media (min-width:",props=>props.theme.mediaQueryTresholds.M,"px){font-size:",props=>props.theme.navigator.sizes.postsListItemH2Font*props.theme.navigator.sizes.fontIncraseForM,"em;}@media (min-width:",props=>props.theme.mediaQueryTresholds.L,"px){font-size:",props=>props.theme.navigator.sizes.postsListItemH2Font*props.theme.navigator.sizes.fontIncraseForL,"em;.moving-featured &,.is-aside &{display:none;}}}@media (min-width:",props=>props.theme.mediaQueryTresholds.L,"px){.moving-featured &,.is-aside &{margin:0 0 0 0.5em;}}");/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./src/components/Navigator/Navigator.js":
/*!***********************************************!*\
  !*** ./src/components/Navigator/Navigator.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.js");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../utils/shared */ "./src/utils/shared.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./List */ "./src/components/Navigator/List.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
class Navigator extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component{constructor(...args){super(...args);this.linkOnClick=_utils_shared__WEBPACK_IMPORTED_MODULE_6__["moveNavigatorAside"].bind(this);this.expandOnClick=()=>{this.props.setNavigatorShape("open");setTimeout(react_lazyload__WEBPACK_IMPORTED_MODULE_4__["forceCheck"],600);};this.removefilterOnClick=()=>{this.props.setCategoryFilter("all posts");};}render(){const{posts,navigatorPosition,navigatorShape,categoryFilter}=this.props;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(StyleNavigator,{className:`${navigatorPosition?navigatorPosition:""} ${navigatorShape?navigatorShape:""} `},this.props.posts.totalCount&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_List__WEBPACK_IMPORTED_MODULE_7__["default"],{posts:posts.edges,navigatorPosition:navigatorPosition,navigatorShape:navigatorShape,linkOnClick:this.linkOnClick,expandOnClick:this.expandOnClick,categoryFilter:categoryFilter,removeFilter:this.removefilterOnClick}));}}Navigator.propTypes={posts:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,navigatorPosition:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,navigatorShape:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,setNavigatorPosition:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,setNavigatorShape:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,categoryFilter:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,setCategoryFilter:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired};const mapStateToProps=(state,ownProps)=>{return{navigatorPosition:state.navigatorPosition,navigatorShape:state.navigatorShape,categoryFilter:state.categoryFilter};};const mapDispatchToProps={setNavigatorPosition: _state_store__WEBPACK_IMPORTED_MODULE_5__["setNavigatorPosition"],setNavigatorShape: _state_store__WEBPACK_IMPORTED_MODULE_5__["setNavigatorShape"],setCategoryFilter: _state_store__WEBPACK_IMPORTED_MODULE_5__["setCategoryFilter"]};const StyleNavigator=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])(`nav`,{target:"ep9k9bn0"})("transform:translate3d(0,0,0);will-change:left,top,bottom,width;background:",props=>props.theme.navigator.colors.background,";position:absolute;top:0;left:0;height:100vh;transition-timing-function:ease;transition:left 0.9s;width:100%;@media (max-width:",props=>props.theme.mediaQueryTresholds.L-1,"px){&.is-aside{left:-100%;}&.is-featured{left:0;}}@media (min-width:",props=>props.theme.mediaQueryTresholds.L,"px){&.is-featured{transition:left 0.9s;width:calc( 100vw - ",props=>props.theme.info.sizes.width,"px - ",props=>props.theme.bars.sizes.actionsBar,"px );left:",props=>props.theme.info.sizes.width,"px;top:0;}&.is-aside{transition:bottom 0.5s;left:0;width:",props=>props.theme.info.sizes.width-1,"px;z-index:1;top:auto;&.closed{bottom:calc( -100% + 100px + ",props=>props.theme.navigator.sizes.closedHeight,"px );height:calc(100% - 100px);}&.open{bottom:0;height:calc(100% - 100px);}&::after{content:\"\";position:absolute;top:0;left:",props=>props.theme.base.sizes.linesMargin,";right:",props=>props.theme.base.sizes.linesMargin,";height:0;border-top:1px solid ",props=>props.theme.base.colors.lines,";}}&.moving-aside{transition:left 0.9s;left:calc(-100vw + ",props=>props.theme.info.sizes.width,"*2px + 2px);width:calc(100vw - ",props=>props.theme.info.sizes.width,"px - 60px);top:0;}&.resizing-aside{transition:none;width:",props=>props.theme.info.sizes.width,"px;top:auto;left:0;&.closed{bottom:calc(-100% + 100px);height:calc(100% - 100px);}&.open{bottom:calc(-100% + 100px);height:calc(100% - 100px);}}&.moving-featured{transition:bottom 0.3s;bottom:-100%;top:auto;left:0;z-index:1;width:",props=>props.theme.info.sizes.width-1,"px;}&.resizing-featured{transition:none;top:0;bottom:auto;left:calc( -100vw + ",props=>props.theme.info.sizes.width,"*2px + 60px );width:calc(100vw - ",props=>props.theme.info.sizes.width,"px - 60px);}}");/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps,mapDispatchToProps)(Navigator));

/***/ })

};;
//# sourceMappingURL=3.render-page.js.map