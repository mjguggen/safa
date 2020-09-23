webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/mainBG.png */ \"./assets/mainBG.png\");\n/* harmony import */ var _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_img1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img1.png */ \"./assets/img1.png?c661\");\n/* harmony import */ var _assets_img1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img1_png__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/guggenz/Documents/Dev/Clients/SAFA/CMS/client/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var fadeIn = document.querySelectorAll(\".fade-in\");\n    var fadeInDelay = document.querySelectorAll(\".fade-in-delay\");\n    var slideLeft = document.querySelectorAll(\".slide-in-left\");\n    var slideRight = document.querySelectorAll(\".slide-in-right\");\n    var slideRightDelay = document.querySelectorAll(\".slide-in-right-delay\");\n    var fadeInOps = {\n      root: null,\n      threshold: 0,\n      rootMargin: \"-100px\"\n    };\n    var scrollFadeIn = new IntersectionObserver(function (entries, scrollFade) {\n      entries.forEach(function (entry) {\n        if (!entry.isIntersecting) {\n          return;\n        } else {\n          entry.target.classList.add('appear');\n          scrollFade.unobserve(entry.target);\n        }\n      });\n    }, fadeInOps);\n    fadeIn.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    fadeInDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideLeft.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRight.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRightDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n  }, []);\n  return __jsx(\"div\", {\n    className: \"screen home\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"main-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"plant\",\n    className: \"main-bg-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"main-bg-overlay\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"main-title-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"main-title-wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"main-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, \"Locally Grown, Organic Produce\"), __jsx(\"div\", {\n    className: \"title-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, \"We support immigrant families in Minnesota with an emphasis on Somali and African immigrants by providing regenerative, indigenous farming training and education.\"), __jsx(\"div\", {\n    className: \"main-btn-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 15\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"btn\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 19\n    }\n  }, \"About Us\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/donate\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"btn btn-alt\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 19\n    }\n  }, \"Donate\")))))), __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"split-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"split-left slide-in-left fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"split-left-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"split-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"split-subContainer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"headline slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }, \"Why You'll Love Us\"), __jsx(\"div\", {\n    className: \"sub-headline slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 17\n    }\n  }, \"There is never been a better time to eat organic. Organic means working with nature.\")), __jsx(\"div\", {\n    className: \"split-subContainer slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 15\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 17\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 19\n    }\n  }, \"Delicious\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 19\n    }\n  }, \"Ethical\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 19\n    }\n  }, \"Sustainable\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 19\n    }\n  }, \"Seasonal\")))))));\n};\n\n_s(Index, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Index;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    language: state.language.language\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZUVmZmVjdCIsImZhZGVJbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZhZGVJbkRlbGF5Iiwic2xpZGVMZWZ0Iiwic2xpZGVSaWdodCIsInNsaWRlUmlnaHREZWxheSIsImZhZGVJbk9wcyIsInJvb3QiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwic2Nyb2xsRmFkZUluIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwic2Nyb2xsRmFkZSIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwidW5vYnNlcnZlIiwiZmFkZXIiLCJvYnNlcnZlIiwibWFpbkJnIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJsYW5ndWFnZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFVBQTFCLENBQWY7QUFDQSxRQUFNQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQXBCO0FBQ0EsUUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUFsQjtBQUNBLFFBQU1HLFVBQVUsR0FBR0osUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBbkI7QUFDQSxRQUFNSSxlQUFlLEdBQUdMLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQXhCO0FBRUEsUUFBTUssU0FBUyxHQUFHO0FBQ2RDLFVBQUksRUFBRSxJQURRO0FBRWRDLGVB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QUFRLEVBQUVELEtBQUssQ0FBQ0MsUUFBTixDQUFlQTtBQURPLEdBQUw7QUFBQSxDQUE3Qjs7QUFJZUMsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCM0IsS0FBekIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IG1haW5CZyBmcm9tICcuLi9hc3NldHMvbWFpbkJHLnBuZydcbmltcG9ydCBpbWcxIGZyb20gJy4uL2Fzc2V0cy9pbWcxLnBuZydcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmFkZUluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYWRlLWluXCIpXG4gICAgY29uc3QgZmFkZUluRGVsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhZGUtaW4tZGVsYXlcIilcbiAgICBjb25zdCBzbGlkZUxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlLWluLWxlZnRcIilcbiAgICBjb25zdCBzbGlkZVJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZS1pbi1yaWdodFwiKVxuICAgIGNvbnN0IHNsaWRlUmlnaHREZWxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGUtaW4tcmlnaHQtZGVsYXlcIilcblxuICAgIGNvbnN0IGZhZGVJbk9wcyA9IHtcbiAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICByb290TWFyZ2luOiBcIi0xMDBweFwiXG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsRmFkZUluID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMsIHNjcm9sbEZhZGUpe1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpZighZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKVxuICAgICAgICAgICAgc2Nyb2xsRmFkZS51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSwgZmFkZUluT3BzKVxuXG4gICAgZmFkZUluLmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICBzY3JvbGxGYWRlSW4ub2JzZXJ2ZShmYWRlcilcbiAgICB9KTtcblxuICAgIGZhZGVJbkRlbGF5LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICBzY3JvbGxGYWRlSW4ub2JzZXJ2ZShmYWRlcilcbiAgICB9KTtcblxuICAgIHNsaWRlTGVmdC5mb3JFYWNoKGZhZGVyID0+IHtcbiAgICAgICAgc2Nyb2xsRmFkZUluLm9ic2VydmUoZmFkZXIpXG4gICAgfSk7XG5cbiAgICBzbGlkZVJpZ2h0LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICBzY3JvbGxGYWRlSW4ub2JzZXJ2ZShmYWRlcilcbiAgICB9KTtcblxuICAgIHNsaWRlUmlnaHREZWxheS5mb3JFYWNoKGZhZGVyID0+IHtcbiAgICAgICAgc2Nyb2xsRmFkZUluLm9ic2VydmUoZmFkZXIpXG4gICAgfSk7XG4gIH0sIFtdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4gaG9tZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyAgXG4gICAgICAgICAgICBzcmM9e21haW5CZ31cbiAgICAgICAgICAgIGFsdD1cInBsYW50XCIgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluLWJnLWltZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tYmctb3ZlcmxheVwiLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdGl0bGUtd3JhcFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBMb2NhbGx5IEdyb3duLCBPcmdhbmljIFByb2R1Y2VcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICBXZSBzdXBwb3J0IGltbWlncmFudCBmYW1pbGllcyBpbiBNaW5uZXNvdGEgd2l0aCBhbiBlbXBoYXNpcyBvbiBTb21hbGkgYW5kIEFmcmljYW4gaW1taWdyYW50cyBieSBwcm92aWRpbmcgcmVnZW5lcmF0aXZlLCBpbmRpZ2Vub3VzIGZhcm1pbmcgdHJhaW5pbmcgYW5kIGVkdWNhdGlvbi5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXQnID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvZG9uYXRlJyA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIERvbmF0ZVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0LWxlZnQgc2xpZGUtaW4tbGVmdCBmYWRlLWluXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtbGVmdC1pbWdcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1yaWdodCBmYWRlLWluXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtc3ViQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkbGluZSBzbGlkZS1pbi1yaWdodCBmYWRlLWluXCI+XG4gICAgICAgICAgICAgICAgICBXaHkgWW91J2xsIExvdmUgVXNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkbGluZSBzbGlkZS1pbi1yaWdodCBmYWRlLWluXCI+XG4gICAgICAgICAgICAgICAgICBUaGVyZSBpcyBuZXZlciBiZWVuIGEgYmV0dGVyIHRpbWUgdG8gZWF0IG9yZ2FuaWMuIE9yZ2FuaWMgbWVhbnMgd29ya2luZyB3aXRoIG5hdHVyZS5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwic3BsaXQtc3ViQ29udGFpbmVyIHNsaWRlLWluLXJpZ2h0IGZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+RGVsaWNpb3VzPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5FdGhpY2FsPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5TdXN0YWluYWJsZTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+U2Vhc29uYWw8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbGFuZ3VhZ2U6IHN0YXRlLmxhbmd1YWdlLmxhbmd1YWdlXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5kZXgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})