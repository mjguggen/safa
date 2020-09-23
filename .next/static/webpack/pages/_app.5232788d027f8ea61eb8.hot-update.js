webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.scss */ \"./style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/guggenz/Documents/Dev/Clients/SAFA/CMS/client/pages/_app.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n //Components\n\n\n\n\n\nvar App = function App(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var fadeIn = document.querySelectorAll(\".fade-in\");\n    var fadeInDelay = document.querySelectorAll(\".fade-in-delay\");\n    var slideLeft = document.querySelectorAll(\".slide-in-left\");\n    var slideRight = document.querySelectorAll(\".slide-in-right\");\n    var slideRightDelay = document.querySelectorAll(\".slide-in-right-delay\");\n    var fadeInOps = {\n      root: null,\n      threshold: 0,\n      rootMargin: \"-100px\"\n    };\n    var scrollFadeIn = new IntersectionObserver(function (entries, scrollFade) {\n      entries.forEach(function (entry) {\n        if (!entry.isIntersecting) {\n          return;\n        } else {\n          entry.target.classList.add('appear');\n          scrollFade.unobserve(entry.target);\n        }\n      });\n    }, fadeInOps);\n    fadeIn.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    fadeInDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideLeft.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRight.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRightDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    var fadeOut = document.querySelectorAll(\".fade-out\");\n    var slideUpOut = document.querySelectorAll(\".slide-up-out\");\n    var fadeOutOps = {\n      root: null,\n      threshold: 1,\n      rootMargin: \"0px\"\n    };\n    var scrollFadeOut = new IntersectionObserver(function (entries, scrollFade) {\n      entries.forEach(function (entry) {\n        if (!entry.isIntersecting) {\n          console.log('intersect');\n          entry.target.classList.remove('out');\n        } else {\n          entry.target.classList.add('out');\n        }\n      });\n    }, fadeOutOps);\n    fadeOut.forEach(function (fader) {\n      scrollFadeOut.observe(fader);\n    });\n    slideUpOut.forEach(function (fader) {\n      scrollFadeOut.observe(fader);\n    });\n  }, []);\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  })));\n};\n\n_s(App, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImZhZGVJbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZhZGVJbkRlbGF5Iiwic2xpZGVMZWZ0Iiwic2xpZGVSaWdodCIsInNsaWRlUmlnaHREZWxheSIsImZhZGVJbk9wcyIsInJvb3QiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwic2Nyb2xsRmFkZUluIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwic2Nyb2xsRmFkZSIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwidW5vYnNlcnZlIiwiZmFkZXIiLCJvYnNlcnZlIiwiZmFkZU91dCIsInNsaWRlVXBPdXQiLCJmYWRlT3V0T3BzIiwic2Nyb2xsRmFkZU91dCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsU0FBMkIsUUFBM0JBLFNBQTJCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN0Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFVBQTFCLENBQWY7QUFDQSxRQUFNQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQXBCO0FBQ0EsUUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUFsQjtBQUNBLFFBQU1HLFVBQVUsR0FBR0osUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBbkI7QUFDQSxR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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREosQ0FESjtBQUtILENBbkZEOztHQUFNRixHOztLQUFBQSxHO0FBcUZTQSxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG4vL0NvbXBvbmVudHNcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5cbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XG5pbXBvcnQgJy4uL3N0eWxlLnNjc3MnXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmYWRlSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhZGUtaW5cIilcbiAgICAgICAgY29uc3QgZmFkZUluRGVsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhZGUtaW4tZGVsYXlcIilcbiAgICAgICAgY29uc3Qgc2xpZGVMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZS1pbi1sZWZ0XCIpXG4gICAgICAgIGNvbnN0IHNsaWRlUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlLWluLXJpZ2h0XCIpXG4gICAgICAgIGNvbnN0IHNsaWRlUmlnaHREZWxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGUtaW4tcmlnaHQtZGVsYXlcIilcblxuICAgICAgICBjb25zdCBmYWRlSW5PcHMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogXCItMTAwcHhcIlxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsRmFkZUluID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMsIHNjcm9sbEZhZGUpe1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmKCFlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FwcGVhcicpXG4gICAgICAgICAgICAgICAgc2Nyb2xsRmFkZS51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgZmFkZUluT3BzKVxuXG4gICAgICAgIGZhZGVJbi5mb3JFYWNoKGZhZGVyID0+IHtcbiAgICAgICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgICAgICB9KTtcblxuICAgICAgICBmYWRlSW5EZWxheS5mb3JFYWNoKGZhZGVyID0+IHtcbiAgICAgICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZUxlZnQuZm9yRWFjaChmYWRlciA9PiB7XG4gICAgICAgICAgICBzY3JvbGxGYWRlSW4ub2JzZXJ2ZShmYWRlcilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVSaWdodC5mb3JFYWNoKGZhZGVyID0+IHtcbiAgICAgICAgICAgIHNjcm9sbEZhZGVJbi5vYnNlcnZlKGZhZGVyKVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZVJpZ2h0RGVsYXkuZm9yRWFjaChmYWRlciA9PiB7XG4gICAgICAgICAgICBzY3JvbGxGYWRlSW4ub2JzZXJ2ZShmYWRlcilcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZhZGVPdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhZGUtb3V0XCIpXG4gICAgICAgIGNvbnN0IHNsaWRlVXBPdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlLXVwLW91dFwiKVxuXG4gICAgICAgIGNvbnN0IGZhZGVPdXRPcHMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAxLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogXCIwcHhcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjcm9sbEZhZGVPdXQgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcywgc2Nyb2xsRmFkZSl7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgaWYoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ludGVyc2VjdCcpXG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ291dCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdvdXQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSwgZmFkZU91dE9wcylcblxuICAgICAgICBmYWRlT3V0LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICAgICAgc2Nyb2xsRmFkZU91dC5vYnNlcnZlKGZhZGVyKVxuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZVVwT3V0LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICAgICAgc2Nyb2xsRmFkZU91dC5vYnNlcnZlKGZhZGVyKVxuICAgICAgICB9KTtcblxuICAgIH0sIFtdKVxuICAgICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})