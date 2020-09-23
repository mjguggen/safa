webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/mainBG.png */ \"./assets/mainBG.png\");\n/* harmony import */ var _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_img4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img4.png */ \"./assets/img4.png\");\n/* harmony import */ var _assets_img4_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img4_png__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/guggenz/Documents/Dev/Clients/SAFA/CMS/client/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var fadeIn = document.querySelectorAll(\".fade-in\");\n    var fadeInDelay = document.querySelectorAll(\".fade-in-delay\");\n    var slideLeft = document.querySelectorAll(\".slide-in-left\");\n    var slideRight = document.querySelectorAll(\".slide-in-right\");\n    var slideRightDelay = document.querySelectorAll(\".slide-in-right-delay\");\n    var fadeInOps = {\n      root: null,\n      threshold: 0,\n      rootMargin: \"-100px\"\n    };\n    var scrollFadeIn = new IntersectionObserver(function (entries, scrollFade) {\n      entries.forEach(function (entry) {\n        if (!entry.isIntersecting) {\n          return;\n        } else {\n          entry.target.classList.add('appear');\n          scrollFade.unobserve(entry.target);\n        }\n      });\n    }, fadeInOps);\n    fadeIn.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    fadeInDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideLeft.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRight.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRightDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n  }, []);\n  return __jsx(\"div\", {\n    className: \"screen home\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"main-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"plant\",\n    className: \"main-bg-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"main-bg-overlay\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"main-title-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"main-title-wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"main-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, props.language ? \"Locally Grown, Organic Produce\" : 'Deegaanku wuu koray, wax soo saarka noolaha'), __jsx(\"div\", {\n    className: \"title-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 15\n    }\n  }, props.language ? 'We support immigrant families in Minnesota with an emphasis on Somali and African immigrants by providing regenerative, indigenous farming training and education.' : 'Waxaan ku taageernaa qoysaska muhaajiriinta ah ee ku nool gobolka Minnesota xooga la saarayo soogalootiga Soomaalida iyo Afrikaanka ah iyadoo la siinayo dib u soo nooleyn, tabobarro tacliimeed oo u dhashay wadaniga ah iyo waxbarasho.'), __jsx(\"div\", {\n    className: \"main-btn-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"btn\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 19\n    }\n  }, props.language ? \"About Us\" : \"Nagu saabsan\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/donate\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"btn btn-alt\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 19\n    }\n  }, props.language ? \"Donate\" : \"Ku deeqo\")))))), __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"split-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"split-left slide-in-left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: \"split-left-img fade-in\",\n    alt: \"image\",\n    src: _assets_img4_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"split-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"split-subContainer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"headline slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 17\n    }\n  }, \"Why You'll Love Us\"), __jsx(\"div\", {\n    className: \"sub-headline slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 17\n    }\n  }, \"There is never been a better time to eat organic. Organic means working with nature.\")), __jsx(\"div\", {\n    className: \"split-subContainer slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 15\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 17\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 19\n    }\n  }, \"Delicious\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 19\n    }\n  }, \"Ethical\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 19\n    }\n  }, \"Sustainable\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 19\n    }\n  }, \"Seasonal\")))))));\n};\n\n_s(Index, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Index;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    language: state.language.language\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {})(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlRWZmZWN0IiwiZmFkZUluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmFkZUluRGVsYXkiLCJzbGlkZUxlZnQiLCJzbGlkZVJpZ2h0Iiwic2xpZGVSaWdodERlbGF5IiwiZmFkZUluT3BzIiwicm9vdCIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJzY3JvbGxGYWRlSW4iLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJzY3JvbGxGYWRlIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1bm9ic2VydmUiLCJmYWRlciIsIm9ic2VydmUiLCJtYWluQmciLCJsYW5ndWFnZSIsImltZzQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3ZCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBZjtBQUNBLFFBQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBcEI7QUFDQSxRQUFNRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQWxCO0FBQ0EsUUFBTUcsVUFBVSxHQUFHSixRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixDQUFuQjtBQUNBLFFBQU1JLGVBQWUsR0FBR0wsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix1QkFBMUIsQ0FBeEI7QUFFQSxRQUFNSyxTQUFTLEdBQUc7QUFD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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixDQURGLENBVkYsQ0FURixDQURGLENBdkRGLENBREY7QUEyRkgsQ0ExSUQ7O0dBQU03QixLOztLQUFBQSxLOztBQTRJTixJQUFNOEIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNoQ0gsWUFBUSxFQUFFRyxLQUFLLENBQUNILFFBQU4sQ0FBZUE7QUFETyxHQUFMO0FBQUEsQ0FBN0I7O0FBSWVJLDBIQUFPLENBQUNGLGVBQUQsRUFBa0IsRUFBbEIsQ0FBUCxDQUVaOUIsS0FGWSxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgbWFpbkJnIGZyb20gJy4uL2Fzc2V0cy9tYWluQkcucG5nJ1xuaW1wb3J0IGltZzQgZnJvbSAnLi4vYXNzZXRzL2ltZzQucG5nJ1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZhZGVJbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZS1pblwiKVxuICAgIGNvbnN0IGZhZGVJbkRlbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYWRlLWluLWRlbGF5XCIpXG4gICAgY29uc3Qgc2xpZGVMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZS1pbi1sZWZ0XCIpXG4gICAgY29uc3Qgc2xpZGVSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGUtaW4tcmlnaHRcIilcbiAgICBjb25zdCBzbGlkZVJpZ2h0RGVsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlLWluLXJpZ2h0LWRlbGF5XCIpXG5cbiAgICBjb25zdCBmYWRlSW5PcHMgPSB7XG4gICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgICAgcm9vdE1hcmdpbjogXCItMTAwcHhcIlxuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbEZhZGVJbiA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzLCBzY3JvbGxGYWRlKXtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaWYoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYXBwZWFyJylcbiAgICAgICAgICAgIHNjcm9sbEZhZGUudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sIGZhZGVJbk9wcylcblxuICAgIGZhZGVJbi5mb3JFYWNoKGZhZGVyID0+IHtcbiAgICAgICAgc2Nyb2xsRmFkZUluLm9ic2VydmUoZmFkZXIpXG4gICAgfSk7XG5cbiAgICBmYWRlSW5EZWxheS5mb3JFYWNoKGZhZGVyID0+IHtcbiAgICAgICAgc2Nyb2xsRmFkZUluLm9ic2VydmUoZmFkZXIpXG4gICAgfSk7XG5cbiAgICBzbGlkZUxlZnQuZm9yRWFjaChmYWRlciA9PiB7XG4gICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgIH0pO1xuXG4gICAgc2xpZGVSaWdodC5mb3JFYWNoKGZhZGVyID0+IHtcbiAgICAgICAgc2Nyb2xsRmFkZUluLm9ic2VydmUoZmFkZXIpXG4gICAgfSk7XG5cbiAgICBzbGlkZVJpZ2h0RGVsYXkuZm9yRWFjaChmYWRlciA9PiB7XG4gICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgIH0pO1xuICB9LCBbXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuIGhvbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgIFxuICAgICAgICAgICAgc3JjPXttYWluQmd9XG4gICAgICAgICAgICBhbHQ9XCJwbGFudFwiIFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpbi1iZy1pbWdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJnLW92ZXJsYXlcIi8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXRpdGxlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXRpdGxlLXdyYXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmxhbmd1YWdlID8gXG4gICAgICAgICAgICAgICAgICBcIkxvY2FsbHkgR3Jvd24sIE9yZ2FuaWMgUHJvZHVjZVwiXG4gICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICAgICdEZWVnYWFua3Ugd3V1IGtvcmF5LCB3YXggc29vIHNhYXJrYSBub29sYWhhJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwcm9wcy5sYW5ndWFnZSA/IFxuICAgICAgICAgICAgICAgICAgICAnV2Ugc3VwcG9ydCBpbW1pZ3JhbnQgZmFtaWxpZXMgaW4gTWlubmVzb3RhIHdpdGggYW4gZW1waGFzaXMgb24gU29tYWxpIGFuZCBBZnJpY2FuIGltbWlncmFudHMgYnkgcHJvdmlkaW5nIHJlZ2VuZXJhdGl2ZSwgaW5kaWdlbm91cyBmYXJtaW5nIHRyYWluaW5nIGFuZCBlZHVjYXRpb24uJ1xuICAgICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICAgICAgJ1dheGFhbiBrdSB0YWFnZWVybmFhIHFveXNhc2thIG11aGFhamlyaWludGEgYWggZWUga3Ugbm9vbCBnb2JvbGthIE1pbm5lc290YSB4b29nYSBsYSBzYWFyYXlvIHNvb2dhbG9vdGlnYSBTb29tYWFsaWRhIGl5byBBZnJpa2FhbmthIGFoIGl5YWRvbyBsYSBzaWluYXlvIGRpYiB1IHNvbyBub29sZXluLCB0YWJvYmFycm8gdGFjbGlpbWVlZCBvbyB1IGRoYXNoYXkgd2FkYW5pZ2EgYWggaXlvIHdheGJhcmFzaG8uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYW5ndWFnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgXCJBYm91dCBVc1wiXG4gICAgICAgICAgICAgICAgICAgIDogXG4gICAgICAgICAgICAgICAgICAgICAgXCJOYWd1IHNhYWJzYW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvZG9uYXRlJyA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYW5ndWFnZSA/XG4gICAgICAgICAgICAgICAgICAgICAgXCJEb25hdGVcIlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgXCJLdSBkZWVxb1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1sZWZ0IHNsaWRlLWluLWxlZnRcIj5cbiAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGxpdC1sZWZ0LWltZyBmYWRlLWluXCIgXG4gICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgIHNyYz17aW1nNH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtcmlnaHQgZmFkZS1pblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0LXN1YkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGxpbmUgc2xpZGUtaW4tcmlnaHQgZmFkZS1pblwiPlxuICAgICAgICAgICAgICAgICAgV2h5IFlvdSdsbCBMb3ZlIFVzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGxpbmUgc2xpZGUtaW4tcmlnaHQgZmFkZS1pblwiPlxuICAgICAgICAgICAgICAgICAgVGhlcmUgaXMgbmV2ZXIgYmVlbiBhIGJldHRlciB0aW1lIHRvIGVhdCBvcmdhbmljLiBPcmdhbmljIG1lYW5zIHdvcmtpbmcgd2l0aCBuYXR1cmUuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cInNwbGl0LXN1YkNvbnRhaW5lciBzbGlkZS1pbi1yaWdodCBmYWRlLWluXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPkRlbGljaW91czwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+RXRoaWNhbDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+U3VzdGFpbmFibGU8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlNlYXNvbmFsPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxhbmd1YWdlOiBzdGF0ZS5sYW5ndWFnZS5sYW5ndWFnZVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcblxufSkoSW5kZXgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})