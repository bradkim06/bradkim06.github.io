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

/***/ "./src/components/ActionsBar/ActionsBar.js":
/*!*************************************************!*\
  !*** ./src/components/ActionsBar/ActionsBar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled-base */ "./node_modules/@emotion/styled-base/dist/styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "./node_modules/@material-ui/icons/ArrowUpward.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Search */ "./src/components/ActionsBar/Search.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/theme */ "./src/styles/theme.js");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../state/store */ "./src/state/store.js");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/shared */ "./src/utils/shared.js");
/* harmony import */ var _FontSetter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FontSetter */ "./src/components/ActionsBar/FontSetter.js");
/* harmony import */ var _CategoryFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CategoryFilter */ "./src/components/ActionsBar/CategoryFilter.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");


















var ActionsBar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ActionsBar, _React$Component);

  function ActionsBar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      fullscreen: false
    };
    _this.homeOnClick = _utils_shared__WEBPACK_IMPORTED_MODULE_13__["featureNavigator"].bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.searchOnClick = _utils_shared__WEBPACK_IMPORTED_MODULE_13__["moveNavigatorAside"].bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));

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
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(StyleActionsBar, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(Group, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "aria-label": "Back to list",
      onClick: this.homeOnClick,
      title: "Back to the list",
      className: "iconButton"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_8___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_Search__WEBPACK_IMPORTED_MODULE_10__["default"], null), (isWideScreen && navigatorShape === "open" || navigatorPosition !== "is-aside") && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_CategoryFilter__WEBPACK_IMPORTED_MODULE_15__["default"], {
      categories: categories,
      filterCategory: this.categoryFilterOnClick
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(Group, null, navigatorPosition === "is-aside" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_FontSetter__WEBPACK_IMPORTED_MODULE_14__["default"], {
      increaseFont: this.fontSetterOnClick
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "aria-label": "Back to top",
      onClick: this.arrowUpOnClick,
      title: "Scroll to top",
      className: "iconButton"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_9___default.a, null))));
  };

  return ActionsBar;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ActionsBar.propTypes = {
  navigatorPosition: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  navigatorShape: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  isWideScreen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  setScrollToTop: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  setFontSizeIncrease: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  categories: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  setCategoryFilter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  categoryFilter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    isWideScreen: state.isWideScreen,
    categoryFilter: state.categoryFilter
  };
};

var mapDispatchToProps = {
  setNavigatorPosition: _state_store__WEBPACK_IMPORTED_MODULE_12__["setNavigatorPosition"],
  setNavigatorShape: _state_store__WEBPACK_IMPORTED_MODULE_12__["setNavigatorShape"],
  setScrollToTop: _state_store__WEBPACK_IMPORTED_MODULE_12__["setScrollToTop"],
  setFontSizeIncrease: _state_store__WEBPACK_IMPORTED_MODULE_12__["setFontSizeIncrease"],
  setCategoryFilter: _state_store__WEBPACK_IMPORTED_MODULE_12__["setCategoryFilter"]
};

var StyleActionsBar = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
  target: "e1t772bl0",
  label: "StyleActionsBar"
})("position:absolute;background:", function (props) {
  return props.theme.bars.colors.background;
}, ";left:0;bottom:0;display:flex;flex-direction:row;padding:0 ", function (props) {
  return props.theme.bars.sizes.actionsBar;
}, "px;justify-content:space-between;height:", function (props) {
  return props.theme.bars.sizes.actionsBar;
}, "px;width:100%;&::before{content:\"\";position:absolute;left:", function (props) {
  return props.theme.base.sizes.linesMargin;
}, ";right:", function (props) {
  return props.theme.base.sizes.linesMargin;
}, ";height:0;top:0;border-top:1px solid ", function (props) {
  return props.theme.base.colors.lines;
}, ";}@media (min-width:", function (props) {
  return props.theme.mediaQueryTresholds.M;
}, "px){padding:0 calc(", function (props) {
  return props.theme.base.sizes.linesMargin;
}, " * 1.5);}@media (min-width:", function (props) {
  return props.theme.mediaQueryTresholds.L;
}, "px){flex-direction:column;top:0;right:0;left:auto;height:100%;padding:", function (props) {
  return props.theme.base.sizes.linesMargin;
}, " 0;width:", function (props) {
  return props.theme.bars.sizes.actionsBar;
}, "px;&::before{top:", function (props) {
  return props.theme.base.sizes.linesMargin;
}, ";bottom:", function (props) {
  return props.theme.base.sizes.linesMargin;
}, ";left:0;right:auto;width:0;height:auto;border-left:1px solid ", function (props) {
  return props.theme.base.colors.lines;
}, ";}}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYWRraW0wNi9wZXJzb25hbC9ibG9nL2dhdHNieS9jbG9uZS1nYXRzYnkvc3JjL2NvbXBvbmVudHMvQWN0aW9uc0Jhci9BY3Rpb25zQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVIa0MiLCJmaWxlIjoiL2hvbWUvYnJhZGtpbTA2L3BlcnNvbmFsL2Jsb2cvZ2F0c2J5L2Nsb25lLWdhdHNieS9zcmMvY29tcG9uZW50cy9BY3Rpb25zQmFyL0FjdGlvbnNCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJnYXRzYnktbGlua1wiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgSG9tZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lXCI7XG5pbXBvcnQgQXJyb3dVcHdhcmRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dVcHdhcmRcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5cbmltcG9ydCB7XG4gIHNldE5hdmlnYXRvclBvc2l0aW9uLFxuICBzZXROYXZpZ2F0b3JTaGFwZSxcbiAgc2V0U2Nyb2xsVG9Ub3AsXG4gIHNldEZvbnRTaXplSW5jcmVhc2UsXG4gIHNldENhdGVnb3J5RmlsdGVyLFxufSBmcm9tIFwiLi4vLi4vc3RhdGUvc3RvcmVcIjtcbmltcG9ydCB7IGZlYXR1cmVOYXZpZ2F0b3IsIG1vdmVOYXZpZ2F0b3JBc2lkZSB9IGZyb20gXCIuLi8uLi91dGlscy9zaGFyZWRcIjtcbmltcG9ydCBGb250U2V0dGVyIGZyb20gXCIuL0ZvbnRTZXR0ZXJcIjtcbmltcG9ydCBDYXRlZ29yeUZpbHRlciBmcm9tIFwiLi9DYXRlZ29yeUZpbHRlclwiO1xuXG5jbGFzcyBBY3Rpb25zQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYXZpZ2F0b3JQb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRvclNoYXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXNXaWRlU2NyZWVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHNldFNjcm9sbFRvVG9wOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNldEZvbnRTaXplSW5jcmVhc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2F0ZWdvcmllczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgc2V0Q2F0ZWdvcnlGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2F0ZWdvcnlGaWx0ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgfTtcblxuICBob21lT25DbGljayA9IGZlYXR1cmVOYXZpZ2F0b3IuYmluZCh0aGlzKTtcbiAgc2VhcmNoT25DbGljayA9IG1vdmVOYXZpZ2F0b3JBc2lkZS5iaW5kKHRoaXMpO1xuXG4gIGFycm93VXBPbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0U2Nyb2xsVG9Ub3AodHJ1ZSk7XG4gIH07XG5cbiAgZm9udFNldHRlck9uQ2xpY2sgPSAodmFsKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXRGb250U2l6ZUluY3JlYXNlKHZhbCk7XG4gIH07XG5cbiAgY2F0ZWdvcnlGaWx0ZXJPbkNsaWNrID0gKHZhbCkgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0Q2F0ZWdvcnlGaWx0ZXIodmFsKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmF2aWdhdG9yUG9zaXRpb24sXG4gICAgICBuYXZpZ2F0b3JTaGFwZSxcbiAgICAgIGlzV2lkZVNjcmVlbixcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlQWN0aW9uc0Jhcj5cbiAgICAgICAgPEdyb3VwPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQmFjayB0byBsaXN0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaG9tZU9uQ2xpY2t9XG4gICAgICAgICAgICB0aXRsZT1cIkJhY2sgdG8gdGhlIGxpc3RcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhvbWVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxTZWFyY2ggLz5cbiAgICAgICAgICB7KChpc1dpZGVTY3JlZW4gJiYgbmF2aWdhdG9yU2hhcGUgPT09IFwib3BlblwiKSB8fFxuICAgICAgICAgICAgbmF2aWdhdG9yUG9zaXRpb24gIT09IFwiaXMtYXNpZGVcIikgJiYgKFxuICAgICAgICAgICAgPENhdGVnb3J5RmlsdGVyXG4gICAgICAgICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgICAgICAgIGZpbHRlckNhdGVnb3J5PXt0aGlzLmNhdGVnb3J5RmlsdGVyT25DbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgPEdyb3VwPlxuICAgICAgICAgIHtuYXZpZ2F0b3JQb3NpdGlvbiA9PT0gXCJpcy1hc2lkZVwiICYmIChcbiAgICAgICAgICAgIDxGb250U2V0dGVyIGluY3JlYXNlRm9udD17dGhpcy5mb250U2V0dGVyT25DbGlja30gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQmFjayB0byB0b3BcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5hcnJvd1VwT25DbGlja31cbiAgICAgICAgICAgIHRpdGxlPVwiU2Nyb2xsIHRvIHRvcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uQnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXJyb3dVcHdhcmRJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L0dyb3VwPlxuICAgICAgPC9TdHlsZUFjdGlvbnNCYXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmF2aWdhdG9yUG9zaXRpb246IHN0YXRlLm5hdmlnYXRvclBvc2l0aW9uLFxuICAgIG5hdmlnYXRvclNoYXBlOiBzdGF0ZS5uYXZpZ2F0b3JTaGFwZSxcbiAgICBpc1dpZGVTY3JlZW46IHN0YXRlLmlzV2lkZVNjcmVlbixcbiAgICBjYXRlZ29yeUZpbHRlcjogc3RhdGUuY2F0ZWdvcnlGaWx0ZXIsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIHNldE5hdmlnYXRvclBvc2l0aW9uLFxuICBzZXROYXZpZ2F0b3JTaGFwZSxcbiAgc2V0U2Nyb2xsVG9Ub3AsXG4gIHNldEZvbnRTaXplSW5jcmVhc2UsXG4gIHNldENhdGVnb3J5RmlsdGVyLFxufTtcblxuY29uc3QgU3R5bGVBY3Rpb25zQmFyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFycy5jb2xvcnMuYmFja2dyb3VuZH07XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFycy5zaXplcy5hY3Rpb25zQmFyfXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJhcnMuc2l6ZXMuYWN0aW9uc0Jhcn1weDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFzZS5zaXplcy5saW5lc01hcmdpbn07XG4gICAgcmlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5iYXNlLnNpemVzLmxpbmVzTWFyZ2lufTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFzZS5jb2xvcnMubGluZXN9O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYVF1ZXJ5VHJlc2hvbGRzLk19cHgpIHtcbiAgICBwYWRkaW5nOiAwIGNhbGMoJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJhc2Uuc2l6ZXMubGluZXNNYXJnaW59ICogMS41KTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWFRdWVyeVRyZXNob2xkcy5MfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJhc2Uuc2l6ZXMubGluZXNNYXJnaW59IDA7XG4gICAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5iYXJzLnNpemVzLmFjdGlvbnNCYXJ9cHg7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgdG9wOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFzZS5zaXplcy5saW5lc01hcmdpbn07XG4gICAgICBib3R0b206ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5iYXNlLnNpemVzLmxpbmVzTWFyZ2lufTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFzZS5jb2xvcnMubGluZXN9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWFRdWVyeVRyZXNob2xkcy5MfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5pY29uQnV0dG9uIHtcbiAgICBjb2xvcjogJHt0aGVtZS5iYXJzLmNvbG9ycy5pY29ufTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWN0aW9uc0Jhcik7XG4iXX0= */"));

var Group = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__["default"])("div", {
  target: "e1t772bl1",
  label: "Group"
})("display:flex;flex-direction:row;align-items:center;@media (min-width:", function (props) {
  return props.theme.mediaQueryTresholds.L;
}, "px){flex-direction:column;}.iconButton{color:", _styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].bars.colors.icon, ";}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYWRraW0wNi9wZXJzb25hbC9ibG9nL2dhdHNieS9jbG9uZS1nYXRzYnkvc3JjL2NvbXBvbmVudHMvQWN0aW9uc0Jhci9BY3Rpb25zQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNLd0IiLCJmaWxlIjoiL2hvbWUvYnJhZGtpbTA2L3BlcnNvbmFsL2Jsb2cvZ2F0c2J5L2Nsb25lLWdhdHNieS9zcmMvY29tcG9uZW50cy9BY3Rpb25zQmFyL0FjdGlvbnNCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJnYXRzYnktbGlua1wiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgSG9tZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lXCI7XG5pbXBvcnQgQXJyb3dVcHdhcmRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dVcHdhcmRcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5cbmltcG9ydCB7XG4gIHNldE5hdmlnYXRvclBvc2l0aW9uLFxuICBzZXROYXZpZ2F0b3JTaGFwZSxcbiAgc2V0U2Nyb2xsVG9Ub3AsXG4gIHNldEZvbnRTaXplSW5jcmVhc2UsXG4gIHNldENhdGVnb3J5RmlsdGVyLFxufSBmcm9tIFwiLi4vLi4vc3RhdGUvc3RvcmVcIjtcbmltcG9ydCB7IGZlYXR1cmVOYXZpZ2F0b3IsIG1vdmVOYXZpZ2F0b3JBc2lkZSB9IGZyb20gXCIuLi8uLi91dGlscy9zaGFyZWRcIjtcbmltcG9ydCBGb250U2V0dGVyIGZyb20gXCIuL0ZvbnRTZXR0ZXJcIjtcbmltcG9ydCBDYXRlZ29yeUZpbHRlciBmcm9tIFwiLi9DYXRlZ29yeUZpbHRlclwiO1xuXG5jbGFzcyBBY3Rpb25zQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYXZpZ2F0b3JQb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hdmlnYXRvclNoYXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaXNXaWRlU2NyZWVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHNldFNjcm9sbFRvVG9wOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNldEZvbnRTaXplSW5jcmVhc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2F0ZWdvcmllczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgc2V0Q2F0ZWdvcnlGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2F0ZWdvcnlGaWx0ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgfTtcblxuICBob21lT25DbGljayA9IGZlYXR1cmVOYXZpZ2F0b3IuYmluZCh0aGlzKTtcbiAgc2VhcmNoT25DbGljayA9IG1vdmVOYXZpZ2F0b3JBc2lkZS5iaW5kKHRoaXMpO1xuXG4gIGFycm93VXBPbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0U2Nyb2xsVG9Ub3AodHJ1ZSk7XG4gIH07XG5cbiAgZm9udFNldHRlck9uQ2xpY2sgPSAodmFsKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXRGb250U2l6ZUluY3JlYXNlKHZhbCk7XG4gIH07XG5cbiAgY2F0ZWdvcnlGaWx0ZXJPbkNsaWNrID0gKHZhbCkgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0Q2F0ZWdvcnlGaWx0ZXIodmFsKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmF2aWdhdG9yUG9zaXRpb24sXG4gICAgICBuYXZpZ2F0b3JTaGFwZSxcbiAgICAgIGlzV2lkZVNjcmVlbixcbiAgICAgIGNhdGVnb3JpZXMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlQWN0aW9uc0Jhcj5cbiAgICAgICAgPEdyb3VwPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQmFjayB0byBsaXN0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaG9tZU9uQ2xpY2t9XG4gICAgICAgICAgICB0aXRsZT1cIkJhY2sgdG8gdGhlIGxpc3RcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhvbWVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxTZWFyY2ggLz5cbiAgICAgICAgICB7KChpc1dpZGVTY3JlZW4gJiYgbmF2aWdhdG9yU2hhcGUgPT09IFwib3BlblwiKSB8fFxuICAgICAgICAgICAgbmF2aWdhdG9yUG9zaXRpb24gIT09IFwiaXMtYXNpZGVcIikgJiYgKFxuICAgICAgICAgICAgPENhdGVnb3J5RmlsdGVyXG4gICAgICAgICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgICAgICAgIGZpbHRlckNhdGVnb3J5PXt0aGlzLmNhdGVnb3J5RmlsdGVyT25DbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgPEdyb3VwPlxuICAgICAgICAgIHtuYXZpZ2F0b3JQb3NpdGlvbiA9PT0gXCJpcy1hc2lkZVwiICYmIChcbiAgICAgICAgICAgIDxGb250U2V0dGVyIGluY3JlYXNlRm9udD17dGhpcy5mb250U2V0dGVyT25DbGlja30gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQmFjayB0byB0b3BcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5hcnJvd1VwT25DbGlja31cbiAgICAgICAgICAgIHRpdGxlPVwiU2Nyb2xsIHRvIHRvcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uQnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXJyb3dVcHdhcmRJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L0dyb3VwPlxuICAgICAgPC9TdHlsZUFjdGlvbnNCYXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmF2aWdhdG9yUG9zaXRpb246IHN0YXRlLm5hdmlnYXRvclBvc2l0aW9uLFxuICAgIG5hdmlnYXRvclNoYXBlOiBzdGF0ZS5uYXZpZ2F0b3JTaGFwZSxcbiAgICBpc1dpZGVTY3JlZW46IHN0YXRlLmlzV2lkZVNjcmVlbixcbiAgICBjYXRlZ29yeUZpbHRlcjogc3RhdGUuY2F0ZWdvcnlGaWx0ZXIsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIHNldE5hdmlnYXRvclBvc2l0aW9uLFxuICBzZXROYXZpZ2F0b3JTaGFwZSxcbiAgc2V0U2Nyb2xsVG9Ub3AsXG4gIHNldEZvbnRTaXplSW5jcmVhc2UsXG4gIHNldENhdGVnb3J5RmlsdGVyLFxufTtcblxuY29uc3QgU3R5bGVBY3Rpb25zQmFyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFycy5jb2xvcnMuYmFja2dyb3VuZH07XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFycy5zaXplcy5hY3Rpb25zQmFyfXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJhcnMuc2l6ZXMuYWN0aW9uc0Jhcn1weDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFzZS5zaXplcy5saW5lc01hcmdpbn07XG4gICAgcmlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5iYXNlLnNpemVzLmxpbmVzTWFyZ2lufTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFzZS5jb2xvcnMubGluZXN9O1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5tZWRpYVF1ZXJ5VHJlc2hvbGRzLk19cHgpIHtcbiAgICBwYWRkaW5nOiAwIGNhbGMoJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJhc2Uuc2l6ZXMubGluZXNNYXJnaW59ICogMS41KTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWFRdWVyeVRyZXNob2xkcy5MfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJhc2Uuc2l6ZXMubGluZXNNYXJnaW59IDA7XG4gICAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5iYXJzLnNpemVzLmFjdGlvbnNCYXJ9cHg7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgdG9wOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFzZS5zaXplcy5saW5lc01hcmdpbn07XG4gICAgICBib3R0b206ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5iYXNlLnNpemVzLmxpbmVzTWFyZ2lufTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmFzZS5jb2xvcnMubGluZXN9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWFRdWVyeVRyZXNob2xkcy5MfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5pY29uQnV0dG9uIHtcbiAgICBjb2xvcjogJHt0aGVtZS5iYXJzLmNvbG9ycy5pY29ufTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWN0aW9uc0Jhcik7XG4iXX0= */"));

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(ActionsBar));

/***/ }),

/***/ "./src/components/ActionsBar/CategoryFilter.js":
/*!*****************************************************!*\
  !*** ./src/components/ActionsBar/CategoryFilter.js ***!
  \*****************************************************/
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
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");













function FontSetter(_ref) {
  var categories = _ref.categories,
      filterCategory = _ref.filterCategory;

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
    var category = e.target.innerText.trim();
    filterCategory(category);

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
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(FilterWrapper, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: anchorRef,
    "aria-controls": open ? "menu-list-grow" : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle,
    "aria-label": "categoryOpen",
    className: "categoryOpen"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_10___default.a, null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      key: "all",
      onClick: handleSetting
    }, "all posts"), categories.map(function (category, index) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: category,
        onClick: handleSetting
      }, category);
    })))));
  }));
}

var FilterWrapper = Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])("nav", {
  target: "ehn4fkf0",
  label: "FilterWrapper"
})("@media (min-width:", function (props) {
  return props.theme.mediaQueryTresholds.M;
}, "px){}.categoryOpen{color:", function (props) {
  return props.theme.bars.colors.icon;
}, ";}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYWRraW0wNi9wZXJzb25hbC9ibG9nL2dhdHNieS9jbG9uZS1nYXRzYnkvc3JjL2NvbXBvbmVudHMvQWN0aW9uc0Jhci9DYXRlZ29yeUZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0R2dDIiwiZmlsZSI6Ii9ob21lL2JyYWRraW0wNi9wZXJzb25hbC9ibG9nL2dhdHNieS9jbG9uZS1nYXRzYnkvc3JjL2NvbXBvbmVudHMvQWN0aW9uc0Jhci9DYXRlZ29yeUZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIjtcbmltcG9ydCBHcm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XG5pbXBvcnQgUG9wcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcbmltcG9ydCBNZW51TGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgRmlsdGVyTGlzdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9GaWx0ZXJMaXN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZnVuY3Rpb24gRm9udFNldHRlcih7IGNhdGVnb3JpZXMsIGZpbHRlckNhdGVnb3J5IH0pIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhbmNob3JSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oKHByZXZPcGVuKSA9PiAhcHJldk9wZW4pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGFuY2hvclJlZi5jdXJyZW50ICYmIGFuY2hvclJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVMaXN0S2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiVGFiXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVTZXR0aW5nID0gKGUpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGUudGFyZ2V0LmlubmVyVGV4dC50cmltKCk7XG4gICAgZmlsdGVyQ2F0ZWdvcnkoY2F0ZWdvcnkpO1xuXG4gICAgaWYgKGFuY2hvclJlZi5jdXJyZW50ICYmIGFuY2hvclJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIC8vIHJldHVybiBmb2N1cyB0byB0aGUgYnV0dG9uIHdoZW4gd2UgdHJhbnNpdGlvbmVkIGZyb20gIW9wZW4gLT4gb3BlblxuICBjb25zdCBwcmV2T3BlbiA9IFJlYWN0LnVzZVJlZihvcGVuKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcmV2T3Blbi5jdXJyZW50ID09PSB0cnVlICYmIG9wZW4gPT09IGZhbHNlKSB7XG4gICAgICBhbmNob3JSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIHByZXZPcGVuLmN1cnJlbnQgPSBvcGVuO1xuICB9LCBbb3Blbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZpbHRlcldyYXBwZXI+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICByZWY9e2FuY2hvclJlZn1cbiAgICAgICAgYXJpYS1jb250cm9scz17b3BlbiA/IFwibWVudS1saXN0LWdyb3dcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XG4gICAgICAgIGFyaWEtbGFiZWw9XCJjYXRlZ29yeU9wZW5cIlxuICAgICAgICBjbGFzc05hbWU9XCJjYXRlZ29yeU9wZW5cIlxuICAgICAgPlxuICAgICAgICA8RmlsdGVyTGlzdEljb24gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDxQb3BwZXJcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvclJlZi5jdXJyZW50fVxuICAgICAgICByb2xlPXt1bmRlZmluZWR9XG4gICAgICAgIHRyYW5zaXRpb25cbiAgICAgICAgZGlzYWJsZVBvcnRhbFxuICAgICAgPlxuICAgICAgICB7KHsgVHJhbnNpdGlvblByb3BzLCBwbGFjZW1lbnQgfSkgPT4gKFxuICAgICAgICAgIDxHcm93XG4gICAgICAgICAgICB7Li4uVHJhbnNpdGlvblByb3BzfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOlxuICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9PT0gXCJib3R0b21cIiA/IFwiY2VudGVyIHRvcFwiIDogXCJjZW50ZXIgYm90dG9tXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgPENsaWNrQXdheUxpc3RlbmVyIG9uQ2xpY2tBd2F5PXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgPE1lbnVMaXN0XG4gICAgICAgICAgICAgICAgICBhdXRvRm9jdXNJdGVtPXtvcGVufVxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZW51LWxpc3QtZ3Jvd1wiXG4gICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3dufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9XCJhbGxcIiBvbkNsaWNrPXtoYW5kbGVTZXR0aW5nfT5cbiAgICAgICAgICAgICAgICAgICAgYWxsIHBvc3RzXG4gICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17Y2F0ZWdvcnl9IG9uQ2xpY2s9e2hhbmRsZVNldHRpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XG4gICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG4gICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgIDwvR3Jvdz5cbiAgICAgICAgKX1cbiAgICAgIDwvUG9wcGVyPlxuICAgIDwvRmlsdGVyV3JhcHBlcj5cbiAgKTtcbn1cblxuY29uc3QgRmlsdGVyV3JhcHBlciA9IHN0eWxlZC5uYXZgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWVkaWFRdWVyeVRyZXNob2xkcy5NfXB4KSB7XG4gIH1cbiAgLmNhdGVnb3J5T3BlbiB7XG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5iYXJzLmNvbG9ycy5pY29ufTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9udFNldHRlcjtcbiJdfQ== */"));

/* harmony default export */ __webpack_exports__["default"] = (FontSetter);

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
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(SearchWrapper, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])("li", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_16__["jsx"])(gatsby_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: link(_styles_theme__WEBPACK_IMPORTED_MODULE_15__["default"]),
    onClick: linkOnClick,
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYWRraW0wNi9wZXJzb25hbC9ibG9nL2dhdHNieS9jbG9uZS1nYXRzYnkvc3JjL2NvbXBvbmVudHMvQWN0aW9uc0Jhci9TZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEorQiIsImZpbGUiOiIvaG9tZS9icmFka2ltMDYvcGVyc29uYWwvYmxvZy9nYXRzYnkvY2xvbmUtZ2F0c2J5L3NyYy9jb21wb25lbnRzL0FjdGlvbnNCYXIvU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRpY1F1ZXJ5LCBncmFwaHFsIH0gZnJvbSBcImdhdHNieVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcbmltcG9ydCBGdXNlIGZyb20gXCJmdXNlLmpzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiZ2F0c2J5LWxpbmtcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiZW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmZ1bmN0aW9uIFNlYXJjaERpYWxvZygpIHtcbiAgY29uc3QgeyBhbGxNZHggfSA9IHVzZVNlYXJjaERhdGEoKTtcbiAgY29uc3QgZnVzZSA9IG5ldyBGdXNlKGFsbE1keC5lZGdlcywgb3B0aW9ucyk7XG5cbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoXCJwYXBlclwiKTtcbiAgY29uc3QgW3F1ZXJ5LCB1cGRhdGVRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoc2Nyb2xsVHlwZSkgPT4gKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgc2V0U2Nyb2xsKHNjcm9sbFR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIHVwZGF0ZVF1ZXJ5KFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IG9uU2VhcmNoID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XG4gICAgdXBkYXRlUXVlcnkoY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudDogZGVzY3JpcHRpb25FbGVtZW50IH0gPSBkZXNjcmlwdGlvbkVsZW1lbnRSZWY7XG4gICAgICBpZiAoZGVzY3JpcHRpb25FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW29wZW5dKTtcblxuICBjb25zdCByZXN1bHRzID0gZnVzZS5zZWFyY2gocXVlcnkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW4oXCJwYXBlclwiKX1cbiAgICAgICAgZGF0YS1zaGFwZT1cImNsb3NlZFwiXG4gICAgICAgIHRpdGxlPVwiU2VhcmNoXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBzY3JvbGw9e3Njcm9sbH1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2Nyb2xsLWRpYWxvZy10aXRsZVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzY3JvbGwtZGlhbG9nLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgbWF4V2lkdGg9XCJtZFwiXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgPlxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzY3JvbGwtZGlhbG9nLXRpdGxlXCI+U2VhcmNoIGJ5IGZ1c2UuanM8L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkaXZpZGVycz17c2Nyb2xsID09PSBcInBhcGVyXCJ9PlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dFxuICAgICAgICAgICAgaWQ9XCJzY3JvbGwtZGlhbG9nLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHJlZj17ZGVzY3JpcHRpb25FbGVtZW50UmVmfVxuICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWFyY2hcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBmaWVsZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJmdXp6eSBzZWFyY2hpbmdcIlxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlYXJjaH1cbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7cmVzdWx0cyAmJlxuICAgICAgICAgICAgICByZXN1bHRzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWFyY2hSZXN1bHRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0Lml0ZW0ubm9kZS5mcm9udG1hdHRlci50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHN1YlRpdGxlPXtwb3N0Lml0ZW0ubm9kZS5mcm9udG1hdHRlci5zdWJUaXRsZX1cbiAgICAgICAgICAgICAgICAgIHNsdWc9e3Bvc3QuaXRlbS5ub2RlLmZpZWxkcy5zbHVnfVxuICAgICAgICAgICAgICAgICAgbGlua09uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IFNlYXJjaFJlc3VsdCA9ICh7IHRpdGxlLCBzdWJUaXRsZSwgc2x1ZywgbGlua09uQ2xpY2sgfSkgPT4ge1xuICBjb25zdCB0aXRsZU5hbWUgPSBKU09OLnN0cmluZ2lmeSh0aXRsZSwgbnVsbCwgNCk7XG4gIGNvbnN0IHN1YlRpdGxlTmFtZSA9IEpTT04uc3RyaW5naWZ5KHN1YlRpdGxlLCBudWxsLCA0KTtcbiAgY29uc3QgcGF0aCA9IEpTT04uc3RyaW5naWZ5KHNsdWcsIG51bGwsIDQpO1xuICByZXR1cm4gKFxuICAgIDxTZWFyY2hXcmFwcGVyPlxuICAgICAgPGxpPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17bGluayh0aGVtZSl9XG4gICAgICAgICAgb25DbGljaz17bGlua09uQ2xpY2t9XG4gICAgICAgICAgdG89e3BhdGgucmVwbGFjZSgvXFxcIi9nLCBcIlwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMj57dGl0bGVOYW1lLnJlcGxhY2UoL1xcXCIvZywgXCJcIil9PC9oMj5cbiAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICB7c3ViVGl0bGVOYW1lICE9PSBcIm51bGxcIiAmJiBzdWJUaXRsZU5hbWUucmVwbGFjZSgvXFxcIi9nLCBcIlwiKX1cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvU2VhcmNoV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIC8vIGlzQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gIC8vIGluY2x1ZGVTY29yZTogdHJ1ZSxcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgLy8gaW5jbHVkZU1hdGNoZXM6IGZhbHNlLFxuICAvLyBmaW5kQWxsTWF0Y2hlczogZmFsc2UsXG4gIC8vIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcbiAgLy8gbG9jYXRpb246IDAsXG4gIHRocmVzaG9sZDogMC41LFxuICAvLyBkaXN0YW5jZTogMTAwLFxuICAvLyB1c2VFeHRlbmRlZFNlYXJjaDogZmFsc2UsXG4gIC8vIGlnbm9yZUxvY2F0aW9uOiBmYWxzZSxcbiAgLy8gaWdub3JlRmllbGROb3JtOiBmYWxzZSxcbiAga2V5czogW1xuICAgIFwibm9kZS5mcm9udG1hdHRlci50aXRsZVwiLFxuICAgIFwibm9kZS5mcm9udG1hdHRlci5zdWJUaXRsZVwiLFxuICAgIFwibm9kZS5mcm9udG1hdHRlci5jYXRlZ29yeVwiLFxuICBdLFxufTtcblxuY29uc3QgU2VhcmNoV3JhcHBlciA9IHN0eWxlZC51bGBcbiAgbWFyZ2luOiAwO1xuXG4gICYgaDMge1xuICB9XG5cbiAgJiBzbWFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IGxpbmsgPSAodGhlbWUpID0+IGNzc2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjb2xvcjogJHt0aGVtZS5uYXZpZ2F0b3IuY29sb3JzLnBvc3RzTGlzdEl0ZW1MaW5rfTtcblxuICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7dGhlbWUubmF2aWdhdG9yLmNvbG9ycy5wb3N0c0xpc3RJdGVtTGlua0hvdmVyfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYmFzZS5jb2xvcnMubGluZXN9O1xuICAgICAgJiAucG9pbnRlciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDY1JSA3NSU7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCB1c2VTZWFyY2hEYXRhID0gKCkgPT4ge1xuICBsZXQgc2VhcmNoRGF0YSA9IHVzZVN0YXRpY1F1ZXJ5KFxuICAgIGdyYXBocWxgXG4gICAgICBxdWVyeSBTZWFyY2hEYXRhIHtcbiAgICAgICAgYWxsTWR4IHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZnJvbnRtYXR0ZXIge1xuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgICAgICAgICBjYXRlZ29yeVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICApO1xuICByZXR1cm4gc2VhcmNoRGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaERpYWxvZztcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var link = function link(theme) {
  return /*#__PURE__*/Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("display:block;align-content:center;align-items:center;justify-content:flex-start;flex-direction:row;color:", theme.navigator.colors.postsListItemLink, ";@media (hover:hover){&:hover{color:", theme.navigator.colors.postsListItemLinkHover, ";background-color:", theme.base.colors.lines, ";& .pointer{border-radius:65% 75%;}}}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyYWRraW0wNi9wZXJzb25hbC9ibG9nL2dhdHNieS9jbG9uZS1nYXRzYnkvc3JjL2NvbXBvbmVudHMvQWN0aW9uc0Jhci9TZWFyY2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUsyQiIsImZpbGUiOiIvaG9tZS9icmFka2ltMDYvcGVyc29uYWwvYmxvZy9nYXRzYnkvY2xvbmUtZ2F0c2J5L3NyYy9jb21wb25lbnRzL0FjdGlvbnNCYXIvU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRpY1F1ZXJ5LCBncmFwaHFsIH0gZnJvbSBcImdhdHNieVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zXCI7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcbmltcG9ydCBGdXNlIGZyb20gXCJmdXNlLmpzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiZ2F0c2J5LWxpbmtcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiZW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmZ1bmN0aW9uIFNlYXJjaERpYWxvZygpIHtcbiAgY29uc3QgeyBhbGxNZHggfSA9IHVzZVNlYXJjaERhdGEoKTtcbiAgY29uc3QgZnVzZSA9IG5ldyBGdXNlKGFsbE1keC5lZGdlcywgb3B0aW9ucyk7XG5cbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoXCJwYXBlclwiKTtcbiAgY29uc3QgW3F1ZXJ5LCB1cGRhdGVRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoc2Nyb2xsVHlwZSkgPT4gKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgc2V0U2Nyb2xsKHNjcm9sbFR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIHVwZGF0ZVF1ZXJ5KFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IG9uU2VhcmNoID0gKHsgY3VycmVudFRhcmdldCB9KSA9PiB7XG4gICAgdXBkYXRlUXVlcnkoY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIGNvbnN0IHsgY3VycmVudDogZGVzY3JpcHRpb25FbGVtZW50IH0gPSBkZXNjcmlwdGlvbkVsZW1lbnRSZWY7XG4gICAgICBpZiAoZGVzY3JpcHRpb25FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW29wZW5dKTtcblxuICBjb25zdCByZXN1bHRzID0gZnVzZS5zZWFyY2gocXVlcnkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW4oXCJwYXBlclwiKX1cbiAgICAgICAgZGF0YS1zaGFwZT1cImNsb3NlZFwiXG4gICAgICAgIHRpdGxlPVwiU2VhcmNoXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiaWNvbkJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBzY3JvbGw9e3Njcm9sbH1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2Nyb2xsLWRpYWxvZy10aXRsZVwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzY3JvbGwtZGlhbG9nLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgbWF4V2lkdGg9XCJtZFwiXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgPlxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJzY3JvbGwtZGlhbG9nLXRpdGxlXCI+U2VhcmNoIGJ5IGZ1c2UuanM8L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudCBkaXZpZGVycz17c2Nyb2xsID09PSBcInBhcGVyXCJ9PlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dFxuICAgICAgICAgICAgaWQ9XCJzY3JvbGwtZGlhbG9nLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHJlZj17ZGVzY3JpcHRpb25FbGVtZW50UmVmfVxuICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1zZWFyY2hcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNlYXJjaCBmaWVsZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJmdXp6eSBzZWFyY2hpbmdcIlxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlYXJjaH1cbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7cmVzdWx0cyAmJlxuICAgICAgICAgICAgICByZXN1bHRzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWFyY2hSZXN1bHRcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0Lml0ZW0ubm9kZS5mcm9udG1hdHRlci50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHN1YlRpdGxlPXtwb3N0Lml0ZW0ubm9kZS5mcm9udG1hdHRlci5zdWJUaXRsZX1cbiAgICAgICAgICAgICAgICAgIHNsdWc9e3Bvc3QuaXRlbS5ub2RlLmZpZWxkcy5zbHVnfVxuICAgICAgICAgICAgICAgICAgbGlua09uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IFNlYXJjaFJlc3VsdCA9ICh7IHRpdGxlLCBzdWJUaXRsZSwgc2x1ZywgbGlua09uQ2xpY2sgfSkgPT4ge1xuICBjb25zdCB0aXRsZU5hbWUgPSBKU09OLnN0cmluZ2lmeSh0aXRsZSwgbnVsbCwgNCk7XG4gIGNvbnN0IHN1YlRpdGxlTmFtZSA9IEpTT04uc3RyaW5naWZ5KHN1YlRpdGxlLCBudWxsLCA0KTtcbiAgY29uc3QgcGF0aCA9IEpTT04uc3RyaW5naWZ5KHNsdWcsIG51bGwsIDQpO1xuICByZXR1cm4gKFxuICAgIDxTZWFyY2hXcmFwcGVyPlxuICAgICAgPGxpPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGNsYXNzTmFtZT17bGluayh0aGVtZSl9XG4gICAgICAgICAgb25DbGljaz17bGlua09uQ2xpY2t9XG4gICAgICAgICAgdG89e3BhdGgucmVwbGFjZSgvXFxcIi9nLCBcIlwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMj57dGl0bGVOYW1lLnJlcGxhY2UoL1xcXCIvZywgXCJcIil9PC9oMj5cbiAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICB7c3ViVGl0bGVOYW1lICE9PSBcIm51bGxcIiAmJiBzdWJUaXRsZU5hbWUucmVwbGFjZSgvXFxcIi9nLCBcIlwiKX1cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvU2VhcmNoV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIC8vIGlzQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gIC8vIGluY2x1ZGVTY29yZTogdHJ1ZSxcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgLy8gaW5jbHVkZU1hdGNoZXM6IGZhbHNlLFxuICAvLyBmaW5kQWxsTWF0Y2hlczogZmFsc2UsXG4gIC8vIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcbiAgLy8gbG9jYXRpb246IDAsXG4gIHRocmVzaG9sZDogMC41LFxuICAvLyBkaXN0YW5jZTogMTAwLFxuICAvLyB1c2VFeHRlbmRlZFNlYXJjaDogZmFsc2UsXG4gIC8vIGlnbm9yZUxvY2F0aW9uOiBmYWxzZSxcbiAgLy8gaWdub3JlRmllbGROb3JtOiBmYWxzZSxcbiAga2V5czogW1xuICAgIFwibm9kZS5mcm9udG1hdHRlci50aXRsZVwiLFxuICAgIFwibm9kZS5mcm9udG1hdHRlci5zdWJUaXRsZVwiLFxuICAgIFwibm9kZS5mcm9udG1hdHRlci5jYXRlZ29yeVwiLFxuICBdLFxufTtcblxuY29uc3QgU2VhcmNoV3JhcHBlciA9IHN0eWxlZC51bGBcbiAgbWFyZ2luOiAwO1xuXG4gICYgaDMge1xuICB9XG5cbiAgJiBzbWFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IGxpbmsgPSAodGhlbWUpID0+IGNzc2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjb2xvcjogJHt0aGVtZS5uYXZpZ2F0b3IuY29sb3JzLnBvc3RzTGlzdEl0ZW1MaW5rfTtcblxuICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7dGhlbWUubmF2aWdhdG9yLmNvbG9ycy5wb3N0c0xpc3RJdGVtTGlua0hvdmVyfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYmFzZS5jb2xvcnMubGluZXN9O1xuICAgICAgJiAucG9pbnRlciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDY1JSA3NSU7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCB1c2VTZWFyY2hEYXRhID0gKCkgPT4ge1xuICBsZXQgc2VhcmNoRGF0YSA9IHVzZVN0YXRpY1F1ZXJ5KFxuICAgIGdyYXBocWxgXG4gICAgICBxdWVyeSBTZWFyY2hEYXRhIHtcbiAgICAgICAgYWxsTWR4IHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZnJvbnRtYXR0ZXIge1xuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgc3ViVGl0bGVcbiAgICAgICAgICAgICAgICBjYXRlZ29yeVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICApO1xuICByZXR1cm4gc2VhcmNoRGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaERpYWxvZztcbiJdfQ== */"));
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
 // import { navigateTo } from 'gatsby-link';

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

          /*
          setTimeout(() => {
            navigateTo("/");
          }, 1000);
          */

        });
      }, 300);
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
      setTimeout(function () {
        if (typeof window !== "undefined") {
          if (window.location.pathname !== "/") {
            _this2.props.setNavigatorPosition("resizing-aside");

            _this2.props.setNavigatorShape(navigatorShape);

            setTimeout(function () {
              _this2.props.setNavigatorPosition("is-aside");

              setTimeout(react_lazyload__WEBPACK_IMPORTED_MODULE_0__["forceCheck"], 600);
            });
          }
        }
      }, 1000);
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