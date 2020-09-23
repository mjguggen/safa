webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/mainBG.png */ \"./assets/mainBG.png\");\n/* harmony import */ var _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_img4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img4.png */ \"./assets/img4.png\");\n/* harmony import */ var _assets_img4_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img4_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_aboutUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/aboutUs */ \"./components/aboutUs.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/es/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/guggenz/Documents/Dev/Clients/SAFA/CMS/client/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n //Assets\n\n\n //Components\n\n //Packages\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var fadeIn = document.querySelectorAll(\".fade-in\");\n    var fadeInDelay = document.querySelectorAll(\".fade-in-delay\");\n    var slideLeft = document.querySelectorAll(\".slide-in-left\");\n    var slideRight = document.querySelectorAll(\".slide-in-right\");\n    var slideRightDelay = document.querySelectorAll(\".slide-in-right-delay\");\n    var fadeInOps = {\n      root: null,\n      threshold: 0,\n      rootMargin: \"-100px\"\n    };\n    var scrollFadeIn = new IntersectionObserver(function (entries, scrollFade) {\n      entries.forEach(function (entry) {\n        if (!entry.isIntersecting) {\n          return;\n        } else {\n          entry.target.classList.add('appear');\n          scrollFade.unobserve(entry.target);\n        }\n      });\n    }, fadeInOps);\n    fadeIn.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    fadeInDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideLeft.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRight.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRightDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n  }, []);\n  return __jsx(\"div\", {\n    className: \"screen home\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"main-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"plant\",\n    className: \"main-bg-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"main-bg-overlay\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"main-title-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"main-title-wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"main-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, props.language ? \"Locally Grown, Organic Produce\" : 'Deegaanku wuu koray, wax soo saarka noolaha'), __jsx(\"div\", {\n    className: \"title-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, props.language ? 'We support immigrant families in Minnesota with an emphasis on Somali and African immigrants by providing regenerative, indigenous farming training and education.' : 'Waxaan ku taageernaa qoysaska muhaajiriinta ah ee ku nool gobolka Minnesota xooga la saarayo soogalootiga Soomaalida iyo Afrikaanka ah iyadoo la siinayo dib u soo nooleyn, tabobarro tacliimeed oo u dhashay wadaniga ah iyo waxbarasho.'), __jsx(\"div\", {\n    className: \"main-btn-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"btn\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }, props.language ? \"About Us\" : \"Nagu saabsan\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/donate\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"btn btn-alt\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }, props.language ? \"Donate\" : \"Ku deeqo\")))))), __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"section-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }, \"About Us\"), __jsx(\"div\", {\n    className: \"divider\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }), __jsx(_components_aboutUs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: \"container containerDark\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"split-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"split-left slide-in-left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"headline-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"headline\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 15\n    }\n  }, \"Why You'll Love Us\")), __jsx(\"img\", {\n    className: \"split-left-img fade-in\",\n    alt: \"image\",\n    src: _assets_img4_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"img-overlay\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"img-overlay3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"split-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"split-subContainer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"sub-headline slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 15\n    }\n  }, \"There is never been a better time to eat organic. Organic means working with nature.\")), __jsx(\"div\", {\n    className: \"split-subContainer slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 15\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 17\n    }\n  }, \"Delicious\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 17\n    }\n  }, \"Ethical\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 17\n    }\n  }, \"Sustainable\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 17\n    }\n  }, \"Seasonal\")))))), __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"section-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 11\n    }\n  }, \"News\"), __jsx(\"div\", {\n    className: \"divider\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 11\n    }\n  }), __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"article\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 13\n    }\n  })))));\n};\n\n_s(Index, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Index;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    language: state.language.language\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {})(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlRWZmZWN0IiwiZmFkZUluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmFkZUluRGVsYXkiLCJzbGlkZUxlZnQiLCJzbGlkZVJpZ2h0Iiwic2xpZGVSaWdodERlbGF5IiwiZmFkZUluT3BzIiwicm9vdCIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJzY3JvbGxGYWRlSW4iLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJzY3JvbGxGYWRlIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1bm9ic2VydmUiLCJmYWRlciIsIm9ic2VydmUiLCJtYWluQmciLCJsYW5ndWFnZSIsImltZzQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FJQTs7QUFDQTtDQUdBOztDQUdBOztBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFVBQTFCLENBQWY7QUFDQSxRQUFNQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQXBCO0FBQ0EsUUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUFsQjtBQUNBLFFBQU1HLFVBQVUsR0FBR0osUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBbkI7QUFDQSxRQUFNSSxlQUFlLEdBQUdMLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQXhCO0FBRUEsUUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsQ0FERixDQWpHRixDQURGO0FBK0dELENBN0pEOztHQUFNN0IsSzs7S0FBQUEsSzs7QUErSk4sSUFBTThCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDaENILFlBQVEsRUFBRUcsS0FBSyxDQUFDSCxRQUFOLENBQWVBO0FBRE8sR0FBTDtBQUFBLENBQTdCOztBQUllSSwwSEFBTyxDQUFDRixlQUFELEVBQWtCLEVBQWxCLENBQVAsQ0FFWjlCLEtBRlksQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cblxuLy9Bc3NldHNcbmltcG9ydCBtYWluQmcgZnJvbSAnLi4vYXNzZXRzL21haW5CRy5wbmcnXG5pbXBvcnQgaW1nNCBmcm9tICcuLi9hc3NldHMvaW1nNC5wbmcnXG5cbi8vQ29tcG9uZW50c1xuaW1wb3J0IEFib3V0VXMgZnJvbSAnLi4vY29tcG9uZW50cy9hYm91dFVzJ1xuXG4vL1BhY2thZ2VzXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCdcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmYWRlSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhZGUtaW5cIilcbiAgICBjb25zdCBmYWRlSW5EZWxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZS1pbi1kZWxheVwiKVxuICAgIGNvbnN0IHNsaWRlTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGUtaW4tbGVmdFwiKVxuICAgIGNvbnN0IHNsaWRlUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlLWluLXJpZ2h0XCIpXG4gICAgY29uc3Qgc2xpZGVSaWdodERlbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZS1pbi1yaWdodC1kZWxheVwiKVxuXG4gICAgY29uc3QgZmFkZUluT3BzID0ge1xuICAgICAgICByb290OiBudWxsLFxuICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgIHJvb3RNYXJnaW46IFwiLTEwMHB4XCJcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxGYWRlSW4gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcywgc2Nyb2xsRmFkZSl7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpXG4gICAgICAgICAgICBzY3JvbGxGYWRlLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCBmYWRlSW5PcHMpXG5cbiAgICBmYWRlSW4uZm9yRWFjaChmYWRlciA9PiB7XG4gICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgIH0pO1xuXG4gICAgZmFkZUluRGVsYXkuZm9yRWFjaChmYWRlciA9PiB7XG4gICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgIH0pO1xuXG4gICAgc2xpZGVMZWZ0LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICBzY3JvbGxGYWRlSW4ub2JzZXJ2ZShmYWRlcilcbiAgICB9KTtcblxuICAgIHNsaWRlUmlnaHQuZm9yRWFjaChmYWRlciA9PiB7XG4gICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgIH0pO1xuXG4gICAgc2xpZGVSaWdodERlbGF5LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICBzY3JvbGxGYWRlSW4ub2JzZXJ2ZShmYWRlcilcbiAgICB9KTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbiBob21lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICAgIDxpbWcgIFxuICAgICAgICAgIHNyYz17bWFpbkJnfVxuICAgICAgICAgIGFsdD1cInBsYW50XCIgXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWFpbi1iZy1pbWdcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYmctb3ZlcmxheVwiLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi10aXRsZS13cmFwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cbiAgICAgICAgICAgICAge3Byb3BzLmxhbmd1YWdlID8gXG4gICAgICAgICAgICAgICAgXCJMb2NhbGx5IEdyb3duLCBPcmdhbmljIFByb2R1Y2VcIlxuICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgICdEZWVnYWFua3Ugd3V1IGtvcmF5LCB3YXggc29vIHNhYXJrYSBub29sYWhhJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmxhbmd1YWdlID8gXG4gICAgICAgICAgICAgICAgICAnV2Ugc3VwcG9ydCBpbW1pZ3JhbnQgZmFtaWxpZXMgaW4gTWlubmVzb3RhIHdpdGggYW4gZW1waGFzaXMgb24gU29tYWxpIGFuZCBBZnJpY2FuIGltbWlncmFudHMgYnkgcHJvdmlkaW5nIHJlZ2VuZXJhdGl2ZSwgaW5kaWdlbm91cyBmYXJtaW5nIHRyYWluaW5nIGFuZCBlZHVjYXRpb24uJ1xuICAgICAgICAgICAgICAgIDogXG4gICAgICAgICAgICAgICAgICAnV2F4YWFuIGt1IHRhYWdlZXJuYWEgcW95c2Fza2EgbXVoYWFqaXJpaW50YSBhaCBlZSBrdSBub29sIGdvYm9sa2EgTWlubmVzb3RhIHhvb2dhIGxhIHNhYXJheW8gc29vZ2Fsb290aWdhIFNvb21hYWxpZGEgaXlvIEFmcmlrYWFua2EgYWggaXlhZG9vIGxhIHNpaW5heW8gZGliIHUgc29vIG5vb2xleW4sIHRhYm9iYXJybyB0YWNsaWltZWVkIG9vIHUgZGhhc2hheSB3YWRhbmlnYSBhaCBpeW8gd2F4YmFyYXNoby4nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0JyA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYW5ndWFnZSA/XG4gICAgICAgICAgICAgICAgICAgIFwiQWJvdXQgVXNcIlxuICAgICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICAgICAgXCJOYWd1IHNhYWJzYW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2RvbmF0ZScgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1hbHRcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYW5ndWFnZSA/XG4gICAgICAgICAgICAgICAgICAgIFwiRG9uYXRlXCJcbiAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgXCJLdSBkZWVxb1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPkFib3V0IFVzPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCIvPlxuICAgICAgICAgIDxBYm91dFVzLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyRGFya1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtbGVmdCBzbGlkZS1pbi1sZWZ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+XG4gICAgICAgICAgICAgICAgV2h5IFlvdSdsbCBMb3ZlIFVzXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwbGl0LWxlZnQtaW1nIGZhZGUtaW5cIiBcbiAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxuICAgICAgICAgICAgICBzcmM9e2ltZzR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctb3ZlcmxheVwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLW92ZXJsYXkzXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtcmlnaHQgZmFkZS1pblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1zdWJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGxpbmUgc2xpZGUtaW4tcmlnaHQgZmFkZS1pblwiPlxuICAgICAgICAgICAgICAgIFRoZXJlIGlzIG5ldmVyIGJlZW4gYSBiZXR0ZXIgdGltZSB0byBlYXQgb3JnYW5pYy4gT3JnYW5pYyBtZWFucyB3b3JraW5nIHdpdGggbmF0dXJlLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJzcGxpdC1zdWJDb250YWluZXIgc2xpZGUtaW4tcmlnaHQgZmFkZS1pblwiPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPkRlbGljaW91czwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkV0aGljYWw8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5TdXN0YWluYWJsZTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlNlYXNvbmFsPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5OZXdzPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCIvPlxuICAgICAgICAgIDxDYXJvdXNlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxhbmd1YWdlOiBzdGF0ZS5sYW5ndWFnZS5sYW5ndWFnZVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcblxufSkoSW5kZXgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})