webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.scss */ \"./style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/guggenz/Documents/Dev/Clients/SAFA/CMS/client/pages/_app.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n //Components\n\n\n\n\n\nvar App = function App(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var fadeIn = document.querySelectorAll(\".fade-in\");\n    var fadeInDelay = document.querySelectorAll(\".fade-in-delay\");\n    var slideLeft = document.querySelectorAll(\".slide-in-left\");\n    var slideRight = document.querySelectorAll(\".slide-in-right\");\n    var slideRightDelay = document.querySelectorAll(\".slide-in-right-delay\");\n    var fadeInOps = {\n      root: null,\n      threshold: 0,\n      rootMargin: \"-100px\"\n    };\n    var scrollFadeIn = new IntersectionObserver(function (entries, scrollFade) {\n      entries.forEach(function (entry) {\n        if (!entry.isIntersecting) {\n          return;\n        } else {\n          entry.target.classList.add('appear');\n          scrollFade.unobserve(entry.target);\n        }\n      });\n    }, fadeInOps);\n    fadeIn.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    fadeInDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideLeft.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRight.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRightDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    var fadeOut = document.querySelectorAll(\".fade-out\");\n    var slideUpOut = document.querySelectorAll(\".slide-up-out\");\n    var fadeOutOps = {\n      root: null,\n      threshold: 0,\n      rootMargin: \"0px\"\n    };\n    var scrollFadeOut = new IntersectionObserver(function (entries, scrollFade) {\n      entries.forEach(function (entry) {\n        if (!entry.isIntersecting) {\n          return;\n        } else {\n          entry.target.classList.add('out');\n          scrollFade.unobserve(entry.target);\n        }\n      });\n    }, fadeOutOps);\n    fadeOut.forEach(function (fader) {\n      scrollFadeOut.observe(fader);\n    });\n    slideUpOut.forEach(function (fader) {\n      scrollFadeOut.observe(fader);\n    });\n  }, []);\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  })));\n};\n\n_s(App, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImZhZGVJbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZhZGVJbkRlbGF5Iiwic2xpZGVMZWZ0Iiwic2xpZGVSaWdodCIsInNsaWRlUmlnaHREZWxheSIsImZhZGVJbk9wcyIsInJvb3QiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwic2Nyb2xsRmFkZUluIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwic2Nyb2xsRmFkZSIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwidW5vYnNlcnZlIiwiZmFkZXIiLCJvYnNlcnZlIiwiZmFkZU91dCIsInNsaWRlVXBPdXQiLCJmYWRlT3V0T3BzIiwic2Nyb2xsRmFkZU91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxTQUEyQixRQUEzQkEsU0FBMkI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ3RDQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBZjtBQUNBLFFBQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBcEI7QUFDQSxRQUFNRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQWxCO0FBQ0EsUUFBTUcsVUFBVSxHQUFHSixRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixDQUFuQjtBQUNBLFFBQU1JLGVBQWUsR0FBR0wsUUFBUSxDQUFD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QUFBLEc7QUF1RlNBLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbi8vQ29tcG9uZW50c1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcblxuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcbmltcG9ydCAnLi4vc3R5bGUuc2NzcydcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZhZGVJbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZS1pblwiKVxuICAgICAgICBjb25zdCBmYWRlSW5EZWxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZS1pbi1kZWxheVwiKVxuICAgICAgICBjb25zdCBzbGlkZUxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlLWluLWxlZnRcIilcbiAgICAgICAgY29uc3Qgc2xpZGVSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGUtaW4tcmlnaHRcIilcbiAgICAgICAgY29uc3Qgc2xpZGVSaWdodERlbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZS1pbi1yaWdodC1kZWxheVwiKVxuXG4gICAgICAgIGNvbnN0IGZhZGVJbk9wcyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgICAgICByb290TWFyZ2luOiBcIi0xMDBweFwiXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JvbGxGYWRlSW4gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcywgc2Nyb2xsRmFkZSl7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgaWYoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYXBwZWFyJylcbiAgICAgICAgICAgICAgICBzY3JvbGxGYWRlLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCBmYWRlSW5PcHMpXG5cbiAgICAgICAgZmFkZUluLmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICAgICAgc2Nyb2xsRmFkZUluLm9ic2VydmUoZmFkZXIpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZhZGVJbkRlbGF5LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICAgICAgc2Nyb2xsRmFkZUluLm9ic2VydmUoZmFkZXIpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlTGVmdC5mb3JFYWNoKGZhZGVyID0+IHtcbiAgICAgICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZVJpZ2h0LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICAgICAgc2Nyb2xsRmFkZUluLm9ic2VydmUoZmFkZXIpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlUmlnaHREZWxheS5mb3JFYWNoKGZhZGVyID0+IHtcbiAgICAgICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgICAgICB9KTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZmFkZU91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmFkZS1vdXRcIilcbiAgICAgICAgY29uc3Qgc2xpZGVVcE91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGUtdXAtb3V0XCIpXG5cbiAgICAgICAgY29uc3QgZmFkZU91dE9wcyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICAgICAgICByb290TWFyZ2luOiBcIjBweFwiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsRmFkZU91dCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzLCBzY3JvbGxGYWRlKXtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICBpZighZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ291dCcpXG4gICAgICAgICAgICAgICAgc2Nyb2xsRmFkZS51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgZmFkZU91dE9wcylcblxuXG5cblxuICAgICAgICBmYWRlT3V0LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICAgICAgc2Nyb2xsRmFkZU91dC5vYnNlcnZlKGZhZGVyKVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZVVwT3V0LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICAgICAgc2Nyb2xsRmFkZU91dC5vYnNlcnZlKGZhZGVyKVxuICAgICAgICB9KTtcblxuICAgIH0sIFtdKVxuICAgICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})