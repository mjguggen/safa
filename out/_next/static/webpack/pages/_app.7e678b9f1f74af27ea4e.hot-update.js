webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/language */ \"./redux/actions/language.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/guggenz/Documents/Dev/Clients/SAFA/CMS/client/components/header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n //Routing\n\n\n //Redux\n\n\n\n\nvar Header = function Header(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return __jsx(\"div\", {\n    className: \"header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"header-title-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"header-title\",\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }, \"SAFA\"), __jsx(\"div\", {\n    className: \"header-description desktop\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, \"Somali American Farmer's Association\")), __jsx(\"div\", {\n    className: \"header-elements\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"lang-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return props.setLanguageE();\n    },\n    className: \"lang-btn\",\n    style: {\n      backgroundColor: !props.language ? 'transparent' : '#20603D',\n      color: !props.language ? '#20603D' : 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  }, \"EN\"), __jsx(\"div\", {\n    style: {\n      height: '70%',\n      width: 2,\n      backgroundColor: '#20603D'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 21\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return props.setLanguageS();\n    },\n    className: \"lang-btn\",\n    style: {\n      backgroundColor: props.language ? 'transparent' : '#20603D',\n      color: props.language ? '#20603D' : 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 21\n    }\n  }, \"SO\")), __jsx(\"div\", {\n    className: \"link-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 25\n    }\n  }, \" Home \")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 25\n    }\n  }, \"About\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/donate\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 25\n    }\n  }, \"Donate\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/news\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 25\n    }\n  }, \"News\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/contact\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 25\n    }\n  }, \"Contact\")))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(Header, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Header;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    language: state.language.language\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, {\n  setLanguageE: _redux_actions_language__WEBPACK_IMPORTED_MODULE_4__[\"setLanguageE\"],\n  setLanguageS: _redux_actions_language__WEBPACK_IMPORTED_MODULE_4__[\"setLanguageS\"]\n})(Header));\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanM/NjQ3OCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNldExhbmd1YWdlRSIsImJhY2tncm91bmRDb2xvciIsImxhbmd1YWdlIiwiY29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsInNldExhbmd1YWdlUyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQTtDQUdBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxTQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxjQUFiO0FBQTRCLFFBQUksRUFBQyxHQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFLSTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQUxKLENBREosRUFXSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksV0FBTyxFQUFFO0FBQUEsYUFBTUYsS0FBSyxDQUFDRyxZQUFOLEVBQU47QUFBQSxLQURiO0FBRUksYUFBUyxFQUFDLFVBRmQ7QUFHSSxTQUFLLEVBQUU7QUFDSEMscUJBQWUsRUFBRSxDQUFDSixLQUFLLENBQUNLLFFBQVAsR0FBa0IsYUFBbEIsR0FBa0MsU0FEaEQ7QUFFSEMsV0FBSyxFQUFFLENBQUNOLEtBQUssQ0FBQ0ssUUFBUCxHQUFrQixTQUFsQixHQUE4QjtBQUZsQyxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESixFQVdJO0FBQ0ksU0FBSyxFQUFFO0FBQ0hFLFlBQU0sRUFBRSxLQURMO0FBRUhDLFdBQUssRUFBRSxDQUZKO0FBR0hKLHFCQUFlLEVBQUU7QUFIZCxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixFQWtCSTtBQUNJLFdBQU8sRUFBRTtBQUFBLGFBQU1KLEtBQUssQ0FBQ1MsWUFBTixFQUFOO0FBQUEsS0FEYjtBQUVJLGFBQVMsRUFBQyxVQUZkO0FBR0ksU0FBSyxFQUFFO0FBQ0hMLHFCQUFlLEVBQUVKLEtBQUssQ0FBQ0ssUUFBTixHQUFpQixhQUFqQixHQUFpQyxTQUQvQztBQUVIQyxXQUFLLEVBQUVOLEtBQUssQ0FBQ0ssUUFBTixHQUFpQixTQUFqQixHQUE2QjtBQUZqQyxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFsQkosQ0FESixFQThCSTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixDQURKLEVBS0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixDQUxKLEVBV0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixDQVhKLEVBaUJJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosQ0FqQkosRUF1QkksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQXZCSixDQTlCSixDQVhKLEVBd0VJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4RUosQ0FESjtBQStFSCxDQWxGRDs7R0FBTU4sTTtVQUNhRyxxRDs7O0tBRGJILE07O0FBb0ZOLElBQU1XLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDOUJOLFlBQVEsRUFBRU0sS0FBSyxDQUFDTixRQUFOLENBQWVBO0FBREssR0FBTDtBQUFBLENBQTdCOztBQUllTywwSEFBTyxDQUFDRixlQUFELEVBQWtCO0FBQ3BDUCxjQUFZLEVBQVpBLG9FQURvQztBQUVwQ00sY0FBWSxFQUFaQSxvRUFBWUE7QUFGd0IsQ0FBbEIsQ0FBUCxDQUdaVixNQUhZLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuLy9Sb3V0aW5nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbi8vUmVkdXhcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3NldExhbmd1YWdlRSwgc2V0TGFuZ3VhZ2VTfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2xhbmd1YWdlJ1xuXG5jb25zdCBIZWFkZXIgPSBwcm9wcyA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICBTQUZBXG4gICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZGVzY3JpcHRpb24gZGVza3RvcFwiPlxuICAgICAgICAgICAgICAgICAgICBTb21hbGkgQW1lcmljYW4gRmFybWVyJ3MgQXNzb2NpYXRpb25cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1lbGVtZW50c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldExhbmd1YWdlRSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFuZy1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICFwcm9wcy5sYW5ndWFnZSA/ICd0cmFuc3BhcmVudCcgOiAnIzIwNjAzRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICFwcm9wcy5sYW5ndWFnZSA/ICcjMjA2MDNEJyA6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBFTlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDYwM0QnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRMYW5ndWFnZVMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhbmctYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5sYW5ndWFnZSA/ICd0cmFuc3BhcmVudCcgOiAnIzIwNjAzRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmxhbmd1YWdlID8gJyMyMDYwM0QnIDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNPXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCIgPiBIb21lIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RvbmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ld3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGxhbmd1YWdlOiBzdGF0ZS5sYW5ndWFnZS5sYW5ndWFnZVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcbiAgICBzZXRMYW5ndWFnZUUsXG4gICAgc2V0TGFuZ3VhZ2VTXG59KShIZWFkZXIpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

})