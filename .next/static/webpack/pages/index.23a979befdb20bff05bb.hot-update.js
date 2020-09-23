webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/mainBG.png */ \"./assets/mainBG.png\");\n/* harmony import */ var _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_img1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img1.png */ \"./assets/img1.png?c661\");\n/* harmony import */ var _assets_img1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img1_png__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/guggenz/Documents/Dev/Clients/SAFA/CMS/client/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var fadeIn = document.querySelectorAll(\".fade-in\");\n    var fadeInDelay = document.querySelectorAll(\".fade-in-delay\");\n    var slideLeft = document.querySelectorAll(\".slide-in-left\");\n    var slideRight = document.querySelectorAll(\".slide-in-right\");\n    var slideRightDelay = document.querySelectorAll(\".slide-in-right-delay\");\n    var fadeInOps = {\n      root: null,\n      threshold: 0,\n      rootMargin: \"-100px\"\n    };\n    var scrollFadeIn = new IntersectionObserver(function (entries, scrollFade) {\n      entries.forEach(function (entry) {\n        if (!entry.isIntersecting) {\n          return;\n        } else {\n          entry.target.classList.add('appear');\n          scrollFade.unobserve(entry.target);\n        }\n      });\n    }, fadeInOps);\n    fadeIn.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    fadeInDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideLeft.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRight.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRightDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n  }, []);\n  return __jsx(\"div\", {\n    className: \"screen home\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"main-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"plant\",\n    className: \"main-bg-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"main-bg-overlay\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"main-title-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"main-title-wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"main-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, \"Locally Grown, Organic Produce\"), __jsx(\"div\", {\n    className: \"title-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, \"We support immigrant families in Minnesota with an emphasis on Somali and African immigrants by providing regenerative, indigenous farming training and education.\"), __jsx(\"div\", {\n    className: \"main-btn-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"btn\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 19\n    }\n  }, \"About Us\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/donate\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"btn btn-alt\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 19\n    }\n  }, \"Donate\")))))), __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"split-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"split-left slide-in-left fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"split-left-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"split-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"split-subContainer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"headline slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }, \"Why You'll Love Us\"), __jsx(\"div\", {\n    className: \"sub-headline slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 17\n    }\n  }, \"There is never been a better time to eat organic. Organic means working with nature.\")), __jsx(\"div\", {\n    className: \"split-subContainer slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 15\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 17\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 19\n    }\n  }, \"Delicious\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 19\n    }\n  }, \"Ethical\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 19\n    }\n  }, \"Sustainable\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 19\n    }\n  }, \"Seasonal\")))))));\n};\n\n_s(Index, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Index;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  language: state.language.language;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZUVmZmVjdCIsImZhZGVJbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZhZGVJbkRlbGF5Iiwic2xpZGVMZWZ0Iiwic2xpZGVSaWdodCIsInNsaWRlUmlnaHREZWxheSIsImZhZGVJbk9wcyIsInJvb3QiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwic2Nyb2xsRmFkZUluIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwic2Nyb2xsRmFkZSIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwidW5vYnNlcnZlIiwiZmFkZXIiLCJvYnNlcnZlIiwibWFpbkJnIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJsYW5ndWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBZjtBQUNBLFFBQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBcEI7QUFDQSxRQUFNRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQWxCO0FBQ0EsUUFBTUcsVUFBVSxHQUFHSixRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixDQUFuQjtBQUNBLFFBQU1JLGVBQWUsR0FBR0wsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix1QkFBMUIsQ0FBeEI7QUFFQSxRQUFNSyxTQUFTLEdBQUc7QUFDZEMsVUFBSSxFQUFFLElBRFE7QUFFZEMsZUFBUyxFQUFFLENB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Q0FBQ0MsUUFBTixDQUFlQSxRQUFmO0FBQ1gsQ0FGRDs7QUFJZTdCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgbWFpbkJnIGZyb20gJy4uL2Fzc2V0cy9tYWluQkcucG5nJ1xuaW1wb3J0IGltZzEgZnJvbSAnLi4vYXNzZXRzL2ltZzEucG5nJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmYWRlSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhZGUtaW5cIilcbiAgICBjb25zdCBmYWRlSW5EZWxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZS1pbi1kZWxheVwiKVxuICAgIGNvbnN0IHNsaWRlTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGUtaW4tbGVmdFwiKVxuICAgIGNvbnN0IHNsaWRlUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlLWluLXJpZ2h0XCIpXG4gICAgY29uc3Qgc2xpZGVSaWdodERlbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZS1pbi1yaWdodC1kZWxheVwiKVxuXG4gICAgY29uc3QgZmFkZUluT3BzID0ge1xuICAgICAgICByb290OiBudWxsLFxuICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgIHJvb3RNYXJnaW46IFwiLTEwMHB4XCJcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxGYWRlSW4gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcywgc2Nyb2xsRmFkZSl7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpXG4gICAgICAgICAgICBzY3JvbGxGYWRlLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCBmYWRlSW5PcHMpXG5cbiAgICBmYWRlSW4uZm9yRWFjaChmYWRlciA9PiB7XG4gICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgIH0pO1xuXG4gICAgZmFkZUluRGVsYXkuZm9yRWFjaChmYWRlciA9PiB7XG4gICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgIH0pO1xuXG4gICAgc2xpZGVMZWZ0LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICBzY3JvbGxGYWRlSW4ub2JzZXJ2ZShmYWRlcilcbiAgICB9KTtcblxuICAgIHNsaWRlUmlnaHQuZm9yRWFjaChmYWRlciA9PiB7XG4gICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgIH0pO1xuXG4gICAgc2xpZGVSaWdodERlbGF5LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICBzY3JvbGxGYWRlSW4ub2JzZXJ2ZShmYWRlcilcbiAgICB9KTtcbiAgfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlbiBob21lXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nICBcbiAgICAgICAgICAgIHNyYz17bWFpbkJnfVxuICAgICAgICAgICAgYWx0PVwicGxhbnRcIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW4tYmctaW1nXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1iZy1vdmVybGF5XCIvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi10aXRsZS13cmFwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgIExvY2FsbHkgR3Jvd24sIE9yZ2FuaWMgUHJvZHVjZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIFdlIHN1cHBvcnQgaW1taWdyYW50IGZhbWlsaWVzIGluIE1pbm5lc290YSB3aXRoIGFuIGVtcGhhc2lzIG9uIFNvbWFsaSBhbmQgQWZyaWNhbiBpbW1pZ3JhbnRzIGJ5IHByb3ZpZGluZyByZWdlbmVyYXRpdmUsIGluZGlnZW5vdXMgZmFybWluZyB0cmFpbmluZyBhbmQgZWR1Y2F0aW9uLlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCcgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgQWJvdXQgVXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9kb25hdGUnID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1hbHRcIj5cbiAgICAgICAgICAgICAgICAgICAgRG9uYXRlXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtbGVmdCBzbGlkZS1pbi1sZWZ0IGZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1sZWZ0LWltZ1wiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0LXJpZ2h0IGZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1zdWJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRsaW5lIHNsaWRlLWluLXJpZ2h0IGZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgICAgIFdoeSBZb3UnbGwgTG92ZSBVc1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRsaW5lIHNsaWRlLWluLXJpZ2h0IGZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgICAgIFRoZXJlIGlzIG5ldmVyIGJlZW4gYSBiZXR0ZXIgdGltZSB0byBlYXQgb3JnYW5pYy4gT3JnYW5pYyBtZWFucyB3b3JraW5nIHdpdGggbmF0dXJlLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJzcGxpdC1zdWJDb250YWluZXIgc2xpZGUtaW4tcmlnaHQgZmFkZS1pblwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5EZWxpY2lvdXM8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkV0aGljYWw8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlN1c3RhaW5hYmxlPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5TZWFzb25hbDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIGxhbmd1YWdlOiBzdGF0ZS5sYW5ndWFnZS5sYW5ndWFnZVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})