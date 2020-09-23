webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/auth.js":
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/guggenz/Documents/Dev/Clients/SAFA/CMS/client/components/auth.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Auth = function Auth(props) {\n  _s();\n\n  var enterPword = function enterPword(e) {\n    e.preventDefault();\n    var password = document.getElementById('password').value;\n\n    if (password !== 'safa2020') {\n      return;\n    } else {\n      props.setAuthenticated(true);\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var wrongPword = function wrongPword() {\n    setError(true);\n    setTimeout(function () {\n      setError(false);\n    }, 3000);\n  };\n\n  return __jsx(\"div\", {\n    style: {\n      height: '100vh',\n      width: '100vw',\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      textAlign: 'center'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, \" Enter Password to access site\"), __jsx(\"form\", {\n    onSubmit: function onSubmit(e) {\n      return enterPword(e);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 17\n    }\n  }, __jsx(\"input\", {\n    id: \"password\",\n    type: \"password\",\n    style: {\n      width: 200,\n      height: 30,\n      margin: 10,\n      borderRadius: 10,\n      border: '1px solid #20603D',\n      outline: 'none',\n      paddingLeft: 5\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 21\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    style: {\n      height: 30,\n      margin: 10,\n      borderRadius: 10,\n      paddingLeft: 10,\n      paddingRight: 10,\n      background: 'white',\n      border: '1px solid #20603D',\n      outline: 'none',\n      '&:hover': {\n        background: 'blue'\n      }\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(Auth, \"AvrsuJm02Cqlq6/LWpvA21zDecQ=\");\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoLmpzPzZhMzIiXSwibmFtZXMiOlsiQXV0aCIsInByb3BzIiwiZW50ZXJQd29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhc3N3b3JkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwic2V0QXV0aGVudGljYXRlZCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIndyb25nUHdvcmQiLCJzZXRUaW1lb3V0IiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidGV4dEFsaWduIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwib3V0bGluZSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDbEIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQ0MsS0FBckQ7O0FBRUEsUUFBR0gsUUFBUSxLQUFLLFVBQWhCLEVBQTRCO0FBQ3hCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hKLFdBQUssQ0FBQ1EsZ0JBQU4sQ0FBdUIsSUFBdkI7QUFDSDtBQUNKLEdBVEQ7O0FBRGtCLGtCQVlRQyxzREFBUSxDQUFDLEtBQUQsQ0FaaEI7QUFBQSxNQVlYQyxLQVpXO0FBQUEsTUFZSkMsUUFaSTs7QUFjbEIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQkQsWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUVBRSxjQUFVLENBQUMsWUFBTTtBQUNiRixjQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEdBTkQ7O0FBUUEsU0FDSTtBQUNJLFNBQUssRUFBRTtBQUNIRyxZQUFNLEVBQUUsT0FETDtBQUVIQyxXQUFLLEVBQUUsT0FGSjtBQUdIQyxhQUFPLEVBQUUsTUFITjtBQUlIQyxvQkFBYyxFQUFFLFFBSmI7QUFLSEMsZ0JBQVUsRUFBRTtBQUxULEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNJO0FBQUssU0FBSyxFQUFFO0FBQ1JDLGVBQVMsRUFBRTtBQURILEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBSEosRUFJSTtBQUNJLFlBQVEsRUFBRSxrQkFBQ2pCLENBQUQ7QUFBQSxhQUFPRCxVQUFVLENBQUNDLENBQUQsQ0FBakI7QUFBQSxLQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSTtBQUNJLE1BQUUsRUFBQyxVQURQO0FBRUksUUFBSSxFQUFDLFVBRlQ7QUFHSSxTQUFLLEVBQUU7QUFDSGEsV0FBSyxFQUFFLEdBREo7QUFFSEQsWUFBTSxFQUFFLEVBRkw7QUFHSE0sWUFBTSxFQUFFLEVBSEw7QUFJSEMsa0JBQVksRUFBRSxFQUpYO0FBS0hDLFlBQU0sRUFBRSxtQkFMTDtBQU1IQyxhQUFPLEVBQUUsTUFOTjtBQU9IQyxpQkFBVyxFQUFFO0FBUFYsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFpQkk7QUFDSSxRQUFJLEVBQUMsUUFEVDtBQUVJLFNBQUssRUFBRTtBQUNIVixZQUFNLEVBQUUsRUFETDtBQUVITSxZQUFNLEVBQUUsRUFGTDtBQUdIQyxrQkFBWSxFQUFFLEVBSFg7QUFJSEcsaUJBQVcsRUFBRSxFQUpWO0FBS0hDLGtCQUFZLEVBQUUsRUFMWDtBQU1IQyxnQkFBVSxFQUFFLE9BTlQ7QUFPSEosWUFBTSxFQUFFLG1CQVBMO0FBUUhDLGFBQU8sRUFBRSxNQVJOO0FBU0gsaUJBQVc7QUFDUEcsa0JBQVUsRUFBRTtBQURMO0FBVFIsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJKLENBSkosRUFzQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRDSixDQVRKLENBREo7QUFzREgsQ0E1RUQ7O0dBQU0zQixJOztLQUFBQSxJO0FBOEVTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQXV0aCA9IHByb3BzID0+IHtcbiAgICBjb25zdCBlbnRlclB3b3JkID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJykudmFsdWVcbiAgICAgICAgXG4gICAgICAgIGlmKHBhc3N3b3JkICE9PSAnc2FmYTIwMjAnKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzLnNldEF1dGhlbnRpY2F0ZWQodHJ1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCB3cm9uZ1B3b3JkID0gKCkgPT4ge1xuICAgICAgICBzZXRFcnJvcih0cnVlKVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0RXJyb3IoZmFsc2UpXG4gICAgICAgIH0sIDMwMDApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDB2dycsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2PiBFbnRlciBQYXNzd29yZCB0byBhY2Nlc3Mgc2l0ZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4gZW50ZXJQd29yZChlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzIwNjAzRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiA1XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMjA2MDNEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdibHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth.js\n");

/***/ })

})