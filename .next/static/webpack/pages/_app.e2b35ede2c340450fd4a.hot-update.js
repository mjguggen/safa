webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/language */ \"./redux/actions/language.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/guggenz/Documents/Dev/Clients/SAFA/CMS/client/components/header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n //Routing\n\n\n //Redux\n\n\n\n\nvar Header = function Header(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      navToggle = _useState[0],\n      setNavToggle = _useState[1];\n\n  var toggle = function toggle() {\n    navToggle ? setNavToggle(false) : setNavToggle(true);\n  };\n\n  return __jsx(\"div\", {\n    className: \"header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"header-title-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"header-title\",\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, \"SAFA\"), __jsx(\"div\", {\n    className: \"header-description desktop\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, \"Somali American Farmer's Association\")), __jsx(\"div\", {\n    className: \"header-elements\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"lang-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return props.setLanguageE();\n    },\n    className: \"lang-btn\",\n    style: {\n      backgroundColor: !props.language ? 'transparent' : '#20603D',\n      color: !props.language ? '#20603D' : 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 21\n    }\n  }, \"EN\"), __jsx(\"div\", {\n    style: {\n      height: '70%',\n      width: 2,\n      backgroundColor: '#20603D'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return props.setLanguageS();\n    },\n    className: \"lang-btn\",\n    style: {\n      backgroundColor: props.language ? 'transparent' : '#20603D',\n      color: props.language ? '#20603D' : 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }\n  }, \"SO\")), __jsx(\"div\", {\n    className: \"link-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 25\n    }\n  }, \" Home \")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 25\n    }\n  }, \"About\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/donate\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 25\n    }\n  }, \"Donate\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/news\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 25\n    }\n  }, \"News\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/contact\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 25\n    }\n  }, \"Contact\")))), __jsx(\"button\", {\n    className: \"mobile-nav-container\",\n    onClick: function onClick() {\n      return toggle();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"mobile-nav\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"nav-el\",\n    style: {\n      transform: navToggle ? 'translate(10px, 0px)' : 'translate(0px, 0px)'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: \"nav-el\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: \"nav-el\",\n    style: {\n      transform: navToggle ? 'translate(-10px, 0px)' : 'translate(0px, 0px)'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    className: \"mobile-nav-links\",\n    style: {\n      pointerEvents: navToggle ? 'all' : 'none',\n      height: navToggle ? 'fit-content' : '0%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"mobile-nav-box\",\n    style: {\n      display: navToggle ? 'flex' : 'none'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"lang-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 21\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return props.setLanguageE();\n    },\n    className: \"lang-btn\",\n    style: {\n      backgroundColor: !props.language ? 'transparent' : '#20603D',\n      color: !props.language ? '#20603D' : 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 25\n    }\n  }, \"EN\"), __jsx(\"div\", {\n    style: {\n      height: '70%',\n      width: 2,\n      backgroundColor: '#20603D'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 25\n    }\n  }), __jsx(\"button\", {\n    onClick: function onClick() {\n      return props.setLanguageS();\n    },\n    className: \"lang-btn\",\n    style: {\n      backgroundColor: props.language ? 'transparent' : '#20603D',\n      color: props.language ? '#20603D' : 'white'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 25\n    }\n  }, \"SO\"))), __jsx(\"div\", {\n    className: \"mobile-nav-box mobile-nav-link-box\",\n    style: {\n      display: navToggle ? 'flex' : 'none'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 17\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    onClick: function onClick() {\n      return navToggle();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 25\n    }\n  }, \" Home \")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/about\",\n    onClick: function onClick() {\n      return navToggle();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 25\n    }\n  }, \"About\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/donate\",\n    onClick: function onClick() {\n      return navToggle();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 25\n    }\n  }, \"Donate\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/news\",\n    onClick: function onClick() {\n      return navToggle();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 192,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 196,\n      columnNumber: 25\n    }\n  }, \"News\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/contact\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 201,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"header-link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 202,\n      columnNumber: 25\n    }\n  }, \"Contact\")))));\n};\n\n_s(Header, \"1LX8XiONUk8CPcPOn4EP5abqxCQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Header;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    language: state.language.language\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, {\n  setLanguageE: _redux_actions_language__WEBPACK_IMPORTED_MODULE_4__[\"setLanguageE\"],\n  setLanguageS: _redux_actions_language__WEBPACK_IMPORTED_MODULE_4__[\"setLanguageS\"]\n})(Header));\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanM/NjQ3OCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibmF2VG9nZ2xlIiwic2V0TmF2VG9nZ2xlIiwidG9nZ2xlIiwic2V0TGFuZ3VhZ2VFIiwiYmFja2dyb3VuZENvbG9yIiwibGFuZ3VhZ2UiLCJjb2xvciIsImhlaWdodCIsIndpZHRoIiwic2V0TGFuZ3VhZ2VTIiwidHJhbnNmb3JtIiwicG9pbnRlckV2ZW50cyIsImRpc3BsYXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7Q0FHQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURvQixrQkFHY0Msc0RBQVEsQ0FBQyxLQUFELENBSHRCO0FBQUEsTUFHYkMsU0FIYTtBQUFBLE1BR0ZDLFlBSEU7O0FBS3BCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakJGLGFBQVMsR0FBR0MsWUFBWSxDQUFDLEtBQUQsQ0FBZixHQUF5QkEsWUFBWSxDQUFDLElBQUQsQ0FBOUM7QUFDSCxHQUZEOztBQUlBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBNEIsUUFBSSxFQUFDLEdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUtJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtB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IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbi8vUm91dGluZ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG4vL1JlZHV4XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtzZXRMYW5ndWFnZUUsIHNldExhbmd1YWdlU30gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9sYW5ndWFnZSdcblxuY29uc3QgSGVhZGVyID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBbbmF2VG9nZ2xlLCBzZXROYXZUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIG5hdlRvZ2dsZSA/IHNldE5hdlRvZ2dsZShmYWxzZSkgOiBzZXROYXZUb2dnbGUodHJ1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgU0FGQVxuICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWRlc2NyaXB0aW9uIGRlc2t0b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgU29tYWxpIEFtZXJpY2FuIEZhcm1lcidzIEFzc29jaWF0aW9uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItZWxlbWVudHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5zZXRMYW5ndWFnZUUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhbmctYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAhcHJvcHMubGFuZ3VhZ2UgPyAndHJhbnNwYXJlbnQnIDogJyMyMDYwM0QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAhcHJvcHMubGFuZ3VhZ2UgPyAnIzIwNjAzRCcgOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRU5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjA2MDNEJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0TGFuZ3VhZ2VTKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYW5nLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMubGFuZ3VhZ2UgPyAndHJhbnNwYXJlbnQnIDogJyMyMDYwM0QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5sYW5ndWFnZSA/ICcjMjA2MDNEJyA6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBTT1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiID4gSG9tZSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kb25hdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXdzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLW5hdi1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZSgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBuYXZUb2dnbGUgPyAgJ3RyYW5zbGF0ZSgxMHB4LCAwcHgpJyA6ICd0cmFuc2xhdGUoMHB4LCAwcHgpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtZWxcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG5hdlRvZ2dsZSA/ICAndHJhbnNsYXRlKC0xMHB4LCAwcHgpJyA6ICd0cmFuc2xhdGUoMHB4LCAwcHgpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZS1uYXYtbGlua3NcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IG5hdlRvZ2dsZSA/ICdhbGwnIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG5hdlRvZ2dsZSA/ICdmaXQtY29udGVudCcgOiAnMCUnXG4gICAgICAgICAgICAgICAgfX1cblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZS1uYXYtYm94XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5hdlRvZ2dsZSA/ICdmbGV4JyA6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYW5nLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0TGFuZ3VhZ2VFKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFuZy1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogIXByb3BzLmxhbmd1YWdlID8gJ3RyYW5zcGFyZW50JyA6ICcjMjA2MDNEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICFwcm9wcy5sYW5ndWFnZSA/ICcjMjA2MDNEJyA6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDYwM0QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMuc2V0TGFuZ3VhZ2VTKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGFuZy1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcHMubGFuZ3VhZ2UgPyAndHJhbnNwYXJlbnQnIDogJyMyMDYwM0QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMubGFuZ3VhZ2UgPyAnIzIwNjAzRCcgOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU09cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZS1uYXYtYm94IG1vYmlsZS1uYXYtbGluay1ib3hcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbmF2VG9nZ2xlID8gJ2ZsZXgnIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZUb2dnbGUoKX1cbiAgICAgICAgICAgICAgICAgICAgPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIiA+IEhvbWUgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYWJvdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2VG9nZ2xlKCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2RvbmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZUb2dnbGUoKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGlua1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL25ld3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2VG9nZ2xlKCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3c1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICBcblxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxpbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICAgIGxhbmd1YWdlOiBzdGF0ZS5sYW5ndWFnZS5sYW5ndWFnZVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcbiAgICBzZXRMYW5ndWFnZUUsXG4gICAgc2V0TGFuZ3VhZ2VTXG59KShIZWFkZXIpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

})