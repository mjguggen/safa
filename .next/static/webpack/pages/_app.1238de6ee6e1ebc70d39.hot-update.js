webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/language */ \"./redux/actions/language.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/guggenz/Documents/Dev/Clients/SAFA/CMS/client/components/header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n //Routing\n\n\n //Redux\n\n\n\n\nvar Header = function Header(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      navToggle = _useState[0],\n      setNavToggle = _useState[1];\n\n  var toggle = function toggle() {\n    navToggle ? setNavToggle(false) : setNavToggle(true);\n  };\n\n  return __jsx(\"div\", {\n    className: \"header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"header-title-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"header-title\",\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, \"SAFA\"), __jsx(\"div\", {\n    className: \"header-description desktop\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, \"Somali American Farmer's Association\")), __jsx(\"div\", {\n    className: \"header-elements\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"lang-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return props.setLanguageE();\n    },\n    className: \"lang-btn\",\n    style: {\n      backgroundColor: !props.language ? 'transparent' : '#20603D',\n      color: !props.language ? '#20603D' : 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 21\n    }\n  }, \"EN\"), __jsx(\"div\", {\n    style: {\n      height: '70%',\n      width: 2,\n      backgroundColor: '#20603D'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return props.setLanguageS();\n    },\n    className: \"lang-btn\",\n    style: {\n      backgroundColor: props.language ? 'transparent' : '#20603D',\n      color: props.language ? '#20603D' : 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }\n  }, \"SO\")), __jsx(\"div\", {\n    className: \"link-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 25\n    }\n  }, \" Home \")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 25\n    }\n  }, \"About\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/donate\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 25\n    }\n  }, \"Donate\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/news\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 25\n    }\n  }, \"News\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/contact\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 25\n    }\n  }, \"Contact\")))), __jsx(\"button\", {\n    className: \"mobile-nav-container\",\n    onClick: function onClick() {\n      return toggle();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"mobile-nav\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"nav-el\",\n    style: {\n      transform: navToggle ? 'translate(10px, 0px)' : 'translate(0px, 0px)'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: \"nav-el\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: \"nav-el\",\n    style: {\n      transform: navToggle ? 'translate(-10px, 0px)' : 'translate(0px, 0px)'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    className: \"mobile-nav-links\",\n    style: {\n      pointerEvents: navToggle ? 'all' : 'none',\n      height: navToggle ? 'fit-content' : '0%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"mobile-nav-box\",\n    style: {\n      display: navToggle ? 'flex' : 'none'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"lang-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 21\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return props.setLanguageE();\n    },\n    className: \"lang-btn\",\n    style: {\n      backgroundColor: !props.language ? 'transparent' : '#20603D',\n      color: !props.language ? '#20603D' : 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 25\n    }\n  }, \"EN\"), __jsx(\"div\", {\n    style: {\n      height: '70%',\n      width: 2,\n      backgroundColor: '#20603D'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 25\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return props.setLanguageS();\n    },\n    className: \"lang-btn\",\n    style: {\n      backgroundColor: props.language ? 'transparent' : '#20603D',\n      color: props.language ? '#20603D' : 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 25\n    }\n  }, \"SO\"))), __jsx(\"div\", {\n    className: \"mobile-nav-box mobile-nav-link-box\",\n    style: {\n      display: navToggle ? 'flex' : 'none'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    onClick: function onClick() {\n      return navToggle();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 25\n    }\n  }, \" Home \")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/about\",\n    onClick: function onClick() {\n      return navToggle();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 25\n    }\n  }, \"About\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/donate\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 25\n    }\n  }, \"Donate\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/news\",\n    onClick: function onClick() {\n      return navToggle();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 193,\n      columnNumber: 25\n    }\n  }, \"News\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/contact\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 198,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 199,\n      columnNumber: 25\n    }\n  }, \"Contact\")))));\n};\n\n_s(Header, \"1LX8XiONUk8CPcPOn4EP5abqxCQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Header;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    language: state.language.language\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, {\n  setLanguageE: _redux_actions_language__WEBPACK_IMPORTED_MODULE_4__[\"setLanguageE\"],\n  setLanguageS: _redux_actions_language__WEBPACK_IMPORTED_MODULE_4__[\"setLanguageS\"]\n})(Header));\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanM/NjQ3OCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibmF2VG9nZ2xlIiwic2V0TmF2VG9nZ2xlIiwidG9nZ2xlIiwic2V0TGFuZ3VhZ2VFIiwiYmFja2dyb3VuZENvbG9yIiwibGFuZ3VhZ2UiLCJjb2xvciIsImhlaWdodCIsIndpZHRoIiwic2V0TGFuZ3VhZ2VTIiwidHJhbnNmb3JtIiwicG9pbnRlckV2ZW50cyIsImRpc3BsYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURvQixrQkFHY0Msc0RBQVEsQ0FBQyxLQUFELENBSHRCO0FBQUEsTUFHYkMsU0FIYTtBQUFBLE1BR0ZDLFlBSEU7O0FBS3BCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakJGLGFBQVMsR0FBR0MsWUFBWSxDQUFDLEtBQUQsQ0FBZixHQUF5QkEsWUFBWSxDQUFDLElBQUQsQ0FBOUM7QUFDSCxHQUZEOztBQUlBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBNEIsUUFBSSxFQUFDLEdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUtJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtB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QTtBQUFBO0FBQUEsYUFKSixDQWJKLEVBc0JJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosQ0F0QkosRUE0QkksTUFBQyxnREFBRDtBQUNJLFFBQUksRUFBQyxPQURUO0FBRUksV0FBTyxFQUFFO0FBQUEsYUFBTUEsU0FBUyxFQUFmO0FBQUEsS0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUk7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosQ0E1QkosRUFxQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQXJDSixDQS9DSixDQTdGSixDQURKO0FBNExILENBck1EOztHQUFNTCxNO1VBQ2FHLHFEOzs7S0FEYkgsTTs7QUF1TU4sSUFBTWtCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDOUJULFlBQVEsRUFBRVMsS0FBSyxDQUFDVCxRQUFOLENBQWVBO0FBREssR0FBTDtBQUFBLENBQTdCOztBQUllVSwwSEFBTyxDQUFDRixlQUFELEVBQWtCO0FBQ3BDVixjQUFZLEVBQVpBLG9FQURvQztBQUVwQ00sY0FBWSxFQUFaQSxvRUFBWUE7QUFGd0IsQ0FBbEIsQ0FBUCxDQUdaZCxNQUhZLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuLy9Sb3V0aW5nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbi8vUmVkdXhcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3NldExhbmd1YWdlRSwgc2V0TGFuZ3VhZ2VTfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL2xhbmd1YWdlJ1xuXG5jb25zdCBIZWFkZXIgPSBwcm9wcyA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IFtuYXZUb2dnbGUsIHNldE5hdlRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgbmF2VG9nZ2xlID8gc2V0TmF2VG9nZ2xlKGZhbHNlKSA6IHNldE5hdlRvZ2dsZSh0cnVlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIiBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICBTQUZBXG4gICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZGVzY3JpcHRpb24gZGVza3RvcFwiPlxuICAgICAgICAgICAgICAgICAgICBTb21hbGkgQW1lcmljYW4gRmFybWVyJ3MgQXNzb2NpYXRpb25cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1lbGVtZW50c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLnNldExhbmd1YWdlRSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFuZy1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICFwcm9wcy5sYW5ndWFnZSA/ICd0cmFuc3BhcmVudCcgOiAnIzIwNjAzRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICFwcm9wcy5sYW5ndWFnZSA/ICcjMjA2MDNEJyA6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBFTlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDYwM0QnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRMYW5ndWFnZVMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhbmctYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5sYW5ndWFnZSA/ICd0cmFuc3BhcmVudCcgOiAnIzIwNjAzRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmxhbmd1YWdlID8gJyMyMDYwM0QnIDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNPXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCIgPiBIb21lIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RvbmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ld3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1saW5rXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGUtbmF2LWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5hdlRvZ2dsZSA/ICAndHJhbnNsYXRlKDEwcHgsIDBweCknIDogJ3RyYW5zbGF0ZSgwcHgsIDBweCknXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1lbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1lbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbmF2VG9nZ2xlID8gICd0cmFuc2xhdGUoLTEwcHgsIDBweCknIDogJ3RyYW5zbGF0ZSgwcHgsIDBweCknXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLW5hdi1saW5rc1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogbmF2VG9nZ2xlID8gJ2FsbCcgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogbmF2VG9nZ2xlID8gJ2ZpdC1jb250ZW50JyA6ICcwJSdcbiAgICAgICAgICAgICAgICB9fVxuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLW5hdi1ib3hcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbmF2VG9nZ2xlID8gJ2ZsZXgnIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhbmctY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRMYW5ndWFnZUUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYW5nLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAhcHJvcHMubGFuZ3VhZ2UgPyAndHJhbnNwYXJlbnQnIDogJyMyMDYwM0QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIXByb3BzLmxhbmd1YWdlID8gJyMyMDYwM0QnIDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVOXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIwNjAzRCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRMYW5ndWFnZVMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYW5nLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5sYW5ndWFnZSA/ICd0cmFuc3BhcmVudCcgOiAnIzIwNjAzRCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5sYW5ndWFnZSA/ICcjMjA2MDNEJyA6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTT1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLW5hdi1ib3ggbW9iaWxlLW5hdi1saW5rLWJveFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBuYXZUb2dnbGUgPyAnZmxleCcgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdlRvZ2dsZSgpfVxuICAgICAgICAgICAgICAgICAgICA+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiID4gSG9tZSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9hYm91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZUb2dnbGUoKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RvbmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL25ld3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2VG9nZ2xlKCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3c1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICBcblxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGxhbmd1YWdlOiBzdGF0ZS5sYW5ndWFnZS5sYW5ndWFnZVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcbiAgICBzZXRMYW5ndWFnZUUsXG4gICAgc2V0TGFuZ3VhZ2VTXG59KShIZWFkZXIpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

})