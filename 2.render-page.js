exports.ids = [2];
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

/***/ "./src/components/InfoBox/InfoBox.js":
/*!*******************************************!*\
  !*** ./src/components/InfoBox/InfoBox.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _InfoHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfoHeader */ "./src/components/InfoBox/InfoHeader.js");
/* harmony import */ var _InfoText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoText */ "./src/components/InfoBox/InfoText.js");
/* harmony import */ var _InfoMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InfoMenu */ "./src/components/InfoBox/InfoMenu.js");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../utils/shared */ "./src/utils/shared.js");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
class InfoBox extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component{constructor(...args){super(...args);this.avatarOnClick=_utils_shared__WEBPACK_IMPORTED_MODULE_7__["featureNavigator"].bind(this);this.menulinkOnClick=_utils_shared__WEBPACK_IMPORTED_MODULE_7__["moveNavigatorAside"].bind(this);this.expandOnClick=e=>{this.props.setNavigatorShape("closed");};}render(){const{navigatorPosition,navigatorShape}=this.props;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(StyleInfoBox,{className:`${navigatorPosition?navigatorPosition:""} 
         ${navigatorShape?navigatorShape:""}`},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_InfoHeader__WEBPACK_IMPORTED_MODULE_4__["default"],{avatarOnClick:this.avatarOnClick,expandOnClick:this.expandOnClick}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(InfoContent,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_InfoText__WEBPACK_IMPORTED_MODULE_5__["default"],null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_InfoMenu__WEBPACK_IMPORTED_MODULE_6__["default"],{linkOnClick:this.menulinkOnClick})));}}InfoBox.propTypes={navigatorPosition:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,navigatorShape:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,setNavigatorShape:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired};const mapStateToProps=(state,ownProps)=>{return{navigatorPosition:state.navigatorPosition,navigatorShape:state.navigatorShape};};const mapDispatchToProps={setNavigatorPosition: _state_store__WEBPACK_IMPORTED_MODULE_8__["setNavigatorPosition"],setNavigatorShape: _state_store__WEBPACK_IMPORTED_MODULE_8__["setNavigatorShape"]};const StyleInfoBox=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("aside",{target:"ez1vuh00"})("display:none;@media (min-width:",props=>props.theme.mediaQueryTresholds.L,"px){display:block;color:",props=>props.theme.info.colors.text,";background:",props=>props.theme.info.colors.background,";position:absolute;left:0;top:0;width:",props=>props.theme.info.sizes.width,"px;height:100%;padding:20px 40px;&::after{content:\"\";position:absolute;right:0;top:20px;bottom:20px;width:1px;border-right:1px solid ",props=>props.theme.base.colors.lines,";}}");const InfoContent=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",{target:"ez1vuh01"})("position:absolute;top:",props=>props.theme.info.sizes.headerHeight,"px;bottom:0;left:0;width:100%;padding:0 40px 0;will-change:opacity,bottom;transition:bottom 0.5s 0s;opacity:1;transition-timing-function:ease;.is-aside.closed &{bottom:",props=>props.theme.navigator.sizes.closedHeight,"px;}.moving-featured &{bottom:0;}");/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps,mapDispatchToProps)(InfoBox));

/***/ }),

/***/ "./src/components/InfoBox/InfoHeader.js":
/*!**********************************************!*\
  !*** ./src/components/InfoBox/InfoHeader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_jpg_test_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/jpg/test.png */ "./src/images/jpg/test.png");
/* harmony import */ var _images_jpg_test_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_jpg_test_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
function InfoHeader({avatarOnClick,expandOnClick}){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Header,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(HeaderAvatarLink,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a,{to:"/",onClick:avatarOnClick,title:"back to Home"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(HeaderAvatar,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("img",{src:_images_jpg_test_png__WEBPACK_IMPORTED_MODULE_5___default.a,alt:"avatar"})))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(HeaderTitle,null,"bradkim06",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("small",null,"Personal Blog")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"],{"aria-label":"Expand the box",className:"expand",onClick:expandOnClick,title:"Expand the box"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default.a,null)));}const Header=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("header",{target:"exwux0q0"})("line-height:1;position:relative;.expand{position:absolute;top:30px;right:-25px;display:none;color:",props=>props.theme.info.colors.socialIcons,";.is-aside.open &{display:block;}}");const HeaderAvatarLink=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",{target:"exwux0q1"})("will-change:left,top;float:left;display:block;position:relative;margin:0 12px 0 0;@media (min-width:",props=>props.theme.mediaQueryTresholds.M,"px){margin:0 20px 0 0;}@media (min-width:",props=>props.theme.mediaQueryTresholds.L,"px){position:absolute;top:10px;left:50%;margin-left:-30px;transition:all 0.5s;transition-timing-function:ease;.navigator-in-transition-from.navigator-is-opened &{left:50%;}.is-aside.open &{left:8%;top:0;}}");const HeaderAvatar=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",{target:"exwux0q2"})(({theme})=>` 
    width: 36px;
    height: 36px;
    transition: all .3s;
    transition-timing-function: ease;
    display: inline-block;
    overflow: hidden;
    & img{
      max-width: 100%;
    }
    @media (min-width: ${theme.mediaQueryTresholds.M}px) {
      width: 44px;
      height: 44px;
    }

    @media (min-width: ${theme.mediaQueryTresholds.L}px) {
      width: 60px;
      height: 60px;
    }

    // @media (hover: hover) {
    //   &:hover {
    //     border-radius: 75% 65%;
    //   }
    // }
  `);const HeaderTitle=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("h1",{target:"exwux0q3"})("will-change:transform,left,top;font-size:",props=>props.theme.info.fonts.boxTitleSize,"em;margin:0;float:left;transition-timing-function:ease;& small{display:block;font-size:0.6em;margin-top:0.3em;}@media (min-width:",props=>props.theme.mediaQueryTresholds.M,"px){font-size:",props=>props.theme.info.fonts.boxTitleSizeM,"em;}@media (min-width:",props=>props.theme.mediaQueryTresholds.L,"px){font-size:",props=>props.theme.info.fonts.boxTitleSizeL,"em;position:absolute;top:85px;text-align:center;left:50%;transform:translate(-50%);transition:all 0.5s;.is-aside.open &{left:60%;top:0.15em;text-align:left;}}");/* harmony default export */ __webpack_exports__["default"] = (InfoHeader);

/***/ }),

/***/ "./src/components/InfoBox/InfoMenu.js":
/*!********************************************!*\
  !*** ./src/components/InfoBox/InfoMenu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/theme */ "./src/styles/theme.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
InfoMenu.propTypes={linkOnClick:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired};function InfoMenu({linkOnClick}){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(StyleInfoMenu,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(gatsby_link__WEBPACK_IMPORTED_MODULE_4___default.a,{key:"/about/",to:"/about/",onClick:linkOnClick,className:link(_styles_theme__WEBPACK_IMPORTED_MODULE_5__["default"]),"data-shape":"closed"},"About"));}const StyleInfoMenu=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("nav",{target:"e16mqd2d0"})({name:"rd2gm4",styles:"display:flex;flex-direction:column;align-items:center;list-style:none;margin:0;width:100%;"});const link=theme=>/*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("padding:0.5em;font-weight:300;text-transform:lowercase;color:",theme.info.colors.menuLink,";&:hover{color:",theme.info.colors.menuLinkHover,";}");/* harmony default export */ __webpack_exports__["default"] = (InfoMenu);

/***/ }),

/***/ "./src/components/InfoBox/InfoText.js":
/*!********************************************!*\
  !*** ./src/components/InfoBox/InfoText.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoHeader; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
function InfoHeader(){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Text,null,"software developer.");}const Text=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",{target:"emzlr590"})({name:"ftmxxb",styles:"display:block;font-weight:300;line-height:1.5;font-size:0.95em;text-align:center;margin-bottom:0.8em;word-break:break-word;& p::first-of-type{margin-top:0;}& p::last-child{margin-bottom:0;}"});

/***/ }),

/***/ "./src/components/InfoBox/index.js":
/*!*****************************************!*\
  !*** ./src/components/InfoBox/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoBox */ "./src/components/InfoBox/InfoBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InfoBox__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/images/jpg/test.png":
/*!*********************************!*\
  !*** ./src/images/jpg/test.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

};;
//# sourceMappingURL=2.render-page.js.map