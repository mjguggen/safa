webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/auth.js":
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/guggenz/Documents/Dev/Clients/SAFA/CMS/client/components/auth.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Auth = function Auth(props) {\n  _s();\n\n  var enterPword = function enterPword(e) {\n    e.preventDefault();\n    var password = document.getElementById('password').value;\n\n    if (password !== 'safa2020') {\n      return;\n    } else {\n      props.setAuthenticated(true);\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var wrongPword = function wrongPword() {\n    setError(true);\n    setTimeout(function () {}, 3000);\n  };\n\n  return __jsx(\"div\", {\n    style: {\n      height: '100vh',\n      width: '100vw',\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      textAlign: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, \" Enter Password to access site\"), __jsx(\"form\", {\n    onSubmit: function onSubmit(e) {\n      return enterPword(e);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    id: \"password\",\n    type: \"password\",\n    style: {\n      width: 200,\n      height: 30,\n      margin: 10,\n      borderRadius: 10,\n      border: '1px solid #20603D',\n      outline: 'none',\n      paddingLeft: 5\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 21\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    style: {\n      height: 30,\n      margin: 10,\n      borderRadius: 10,\n      paddingLeft: 10,\n      paddingRight: 10,\n      background: 'white',\n      border: '1px solid #20603D',\n      outline: 'none',\n      '&:hover': {\n        background: 'blue'\n      }\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(Auth, \"AvrsuJm02Cqlq6/LWpvA21zDecQ=\");\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoLmpzPzZhMzIiXSwibmFtZXMiOlsiQXV0aCIsInByb3BzIiwiZW50ZXJQd29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3N3b3JkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwic2V0QXV0aGVudGljYXRlZCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIndyb25nUHdvcmQiLCJzZXRUaW1lb3V0IiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidGV4dEFsaWduIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwib3V0bGluZSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDbEIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBckQ7O0FBRUEsUUFBR0gsUUFBUSxLQUFLLFVBQWhCLEVBQTRCO0FBQ3hCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hKLFdBQUssQ0FBQ1EsZ0JBQU4sQ0FBdUIsSUFBdkI7QUFDSDtBQUNKLEdBVEQ7O0FBRGtCLGtCQVlRQyxzREFBUSxDQUFDLEtBQUQsQ0FaaEI7QUFBQSxNQVlYQyxLQVpXO0FBQUEsTUFZSkMsUUFaSTs7QUFjbEIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQkQsWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUVBRSxjQUFVLENBQUMsWUFBTSxDQUVoQixDQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsR0FORDs7QUFRQSxTQUNJO0FBQ0ksU0FBSyxFQUFFO0FBQ0hDLFlBQU0sRUFBRSxPQURMO0FBRUhDLFdBQUssRUFBRSxPQUZKO0FBR0hDLGFBQU8sRUFBRSxNQUhOO0FBSUhDLG9CQUFjLEVBQUUsUUFKYjtBQUtIQyxnQkFBVSxFQUFFO0FBTFQsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0k7QUFBSyxTQUFLLEVBQUU7QUFDUkMsZUFBUyxFQUFFO0FBREgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FISixFQUlJO0FBQ0ksWUFBUSxFQUFFLGtCQUFDakIsQ0FBRDtBQUFBLGFBQU9ELFVBQVUsQ0FBQ0MsQ0FBRCxDQUFqQjtBQUFBLEtBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJO0FBQ0ksTUFBRSxFQUFDLFVBRFA7QUFFSSxRQUFJLEVBQUMsVUFGVDtBQUdJLFNBQUssRUFBRTtBQUNIYSxXQUFLLEVBQUUsR0FESjtBQUVIRCxZQUFNLEVBQUUsRUFGTDtBQUdITSxZQUFNLEVBQUUsRUFITDtBQUlIQyxrQkFBWSxFQUFFLEVBSlg7QUFLSEMsWUFBTSxFQUFFLG1CQUxMO0FBTUhDLGFBQU8sRUFBRSxNQU5OO0FBT0hDLGlCQUFXLEVBQUU7QUFQVixLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQWlCSTtBQUNJLFFBQUksRUFBQyxRQURUO0FBRUksU0FBSyxFQUFFO0FBQ0hWLFlBQU0sRUFBRSxFQURMO0FBRUhNLFlBQU0sRUFBRSxFQUZMO0FBR0hDLGtCQUFZLEVBQUUsRUFIWDtBQUlIRyxpQkFBVyxFQUFFLEVBSlY7QUFLSEMsa0JBQVksRUFBRSxFQUxYO0FBTUhDLGdCQUFVLEVBQUUsT0FOVDtBQU9ISixZQUFNLEVBQUUsbUJBUEw7QUFRSEMsYUFBTyxFQUFFLE1BUk47QUFTSCxpQkFBVztBQUNQRyxrQkFBVSxFQUFFO0FBREw7QUFUUixLQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkosQ0FKSixFQXNDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdENKLENBVEosQ0FESjtBQXNESCxDQTVFRDs7R0FBTTNCLEk7O0tBQUFBLEk7QUE4RVNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBBdXRoID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IGVudGVyUHdvcmQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKS52YWx1ZVxuICAgICAgICBcbiAgICAgICAgaWYocGFzc3dvcmQgIT09ICdzYWZhMjAyMCcpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcHMuc2V0QXV0aGVudGljYXRlZCh0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IHdyb25nUHdvcmQgPSAoKSA9PiB7XG4gICAgICAgIHNldEVycm9yKHRydWUpXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgfSwgMzAwMClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxkaXY+IEVudGVyIFBhc3N3b3JkIHRvIGFjY2VzcyBzaXRlPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiBlbnRlclB3b3JkKGUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMjA2MDNEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMyMDYwM0QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ2JsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/auth.js\n");

/***/ })

})