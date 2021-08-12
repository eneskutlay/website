(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Enes\\Desktop\\Git\\website\\components\\Navbar.js";



const Navbar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().navbar),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/portfolio",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/contact",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/blog",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/normalize.css */ "./styles/normalize.css");
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_normalize_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Enes\\Desktop\\Git\\website\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Enes Kutlay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "theme-color",
        content: "#FFFFFF"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Enes Kutlay personal website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "author",
        content: "Enes Kutlay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: "Personal website and portolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: "/og.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:url",
        content: "https://eneskutlay.dev/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/me.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"navbar": "Home_navbar__14ZRa",
	"main": "Home_main__1x8gC",
	"social": "Home_social__2vdT0",
	"contact": "Home_contact__2V07w",
	"nohello": "Home_nohello__uPqdS",
	"portfolio": "Home_portfolio__2ymL4",
	"projects": "Home_projects__jrLH-",
	"projectscard": "Home_projectscard__11hnJ",
	"blog": "Home_blog__2VmVA",
	"loader": "Home_loader__2xJ8c",
	"spin": "Home_spin__dz3Ay"
};


/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "./styles/normalize.css":
/*!******************************!*\
  !*** ./styles/normalize.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-3e6c6e","vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9wZXJzb25hbC13ZWJzaXRlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS9pZ25vcmVkfEM6XFxVc2Vyc1xcRW5lc1xcRGVza3RvcFxcR2l0XFx3ZWJzaXRlXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiTmF2YmFyIiwic3R5bGVzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ25CLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxl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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+XHJcbiAgICAgICAgICA8YT5Qb3J0Zm9saW88L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgPGE+Q29udGFjdDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcbiAgICAgICAgICA8YT5CbG9nPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9ub3JtYWxpemUuY3NzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RW5lcyBLdXRsYXk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjRkZGRkZGXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRW5lcyBLdXRsYXkgcGVyc29uYWwgd2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJFbmVzIEt1dGxheVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiUGVyc29uYWwgd2Vic2l0ZSBhbmQgcG9ydG9saW9cIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIi9vZy5wbmdcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZW5lc2t1dGxheS5kZXYvXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9tZS5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm5hdmJhclwiOiBcIkhvbWVfbmF2YmFyX18xNFpSYVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwic29jaWFsXCI6IFwiSG9tZV9zb2NpYWxfXzJ2ZFQwXCIsXG5cdFwiY29udGFjdFwiOiBcIkhvbWVfY29udGFjdF9fMlYwN3dcIixcblx0XCJub2hlbGxvXCI6IFwiSG9tZV9ub2hlbGxvX191UHFkU1wiLFxuXHRcInBvcnRmb2xpb1wiOiBcIkhvbWVfcG9ydGZvbGlvX18yeW1MNFwiLFxuXHRcInByb2plY3RzXCI6IFwiSG9tZV9wcm9qZWN0c19fanJMSC1cIixcblx0XCJwcm9qZWN0c2NhcmRcIjogXCJIb21lX3Byb2plY3RzY2FyZF9fMTFobkpcIixcblx0XCJibG9nXCI6IFwiSG9tZV9ibG9nX18yVm1WQVwiLFxuXHRcImxvYWRlclwiOiBcIkhvbWVfbG9hZGVyX18yeEo4Y1wiLFxuXHRcInNwaW5cIjogXCJIb21lX3NwaW5fX2R6M0F5XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9