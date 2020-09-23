webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/mainBG.png */ \"./assets/mainBG.png\");\n/* harmony import */ var _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_img4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img4.png */ \"./assets/img4.png\");\n/* harmony import */ var _assets_img4_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img4_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_aboutUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/aboutUs */ \"./components/aboutUs.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/es/index.js\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/guggenz/Documents/Dev/Clients/SAFA/CMS/client/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n //Assets\n\n\n //Components\n\n //Packages\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var fadeIn = document.querySelectorAll(\".fade-in\");\n    var fadeInDelay = document.querySelectorAll(\".fade-in-delay\");\n    var slideLeft = document.querySelectorAll(\".slide-in-left\");\n    var slideRight = document.querySelectorAll(\".slide-in-right\");\n    var slideRightDelay = document.querySelectorAll(\".slide-in-right-delay\");\n    var fadeInOps = {\n      root: null,\n      threshold: 0,\n      rootMargin: \"-100px\"\n    };\n    var scrollFadeIn = new IntersectionObserver(function (entries, scrollFade) {\n      entries.forEach(function (entry) {\n        if (!entry.isIntersecting) {\n          return;\n        } else {\n          entry.target.classList.add('appear');\n          scrollFade.unobserve(entry.target);\n        }\n      });\n    }, fadeInOps);\n    fadeIn.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    fadeInDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideLeft.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRight.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n    slideRightDelay.forEach(function (fader) {\n      scrollFadeIn.observe(fader);\n    });\n  }, []);\n  return __jsx(\"div\", {\n    className: \"screen home\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"main-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_mainBG_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"plant\",\n    className: \"main-bg-img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"main-bg-overlay\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"main-title-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"main-title-wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"main-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, props.language ? \"Locally Grown, Organic Produce\" : 'Deegaanku wuu koray, wax soo saarka noolaha'), __jsx(\"div\", {\n    className: \"title-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, props.language ? 'We support immigrant families in Minnesota with an emphasis on Somali and African immigrants by providing regenerative, indigenous farming training and education.' : 'Waxaan ku taageernaa qoysaska muhaajiriinta ah ee ku nool gobolka Minnesota xooga la saarayo soogalootiga Soomaalida iyo Afrikaanka ah iyadoo la siinayo dib u soo nooleyn, tabobarro tacliimeed oo u dhashay wadaniga ah iyo waxbarasho.'), __jsx(\"div\", {\n    className: \"main-btn-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/about\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"btn\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }, props.language ? \"About Us\" : \"Nagu saabsan\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/donate\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"btn btn-alt\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }, props.language ? \"Donate\" : \"Ku deeqo\")))))), __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"section-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }, \"About Us\"), __jsx(\"div\", {\n    className: \"divider\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }), __jsx(_components_aboutUs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: \"container containerDark\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"split-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"split-left slide-in-left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"headline-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"headline\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 15\n    }\n  }, \"Why You'll Love Us\")), __jsx(\"img\", {\n    className: \"split-left-img fade-in\",\n    alt: \"image\",\n    src: _assets_img4_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"img-overlay\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"img-overlay3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"split-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"split-subContainer\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"sub-headline slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 15\n    }\n  }, \"There is never been a better time to eat organic. Organic means working with nature.\")), __jsx(\"div\", {\n    className: \"split-subContainer slide-in-right fade-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 13\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 15\n    }\n  }, __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 17\n    }\n  }, \"Delicious\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 17\n    }\n  }, \"Ethical\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 17\n    }\n  }, \"Sustainable\"), __jsx(\"li\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 17\n    }\n  }, \"Seasonal\")))))), __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"section-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 11\n    }\n  }, \"News\"), __jsx(\"div\", {\n    className: \"divider\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 11\n    }\n  }), __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__[\"Carousel\"], {\n    showThumbs: false,\n    showStatus: false,\n    showIndicators: false,\n    infiniteLoop: true,\n    background: \"transparent\",\n    classname: \"carousel\",\n    style: {\n      background: 'transparent'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"article\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 15\n    }\n  }, \"Article 1 Title\"), __jsx(\"div\", {\n    className: \"img-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: _assets_img4_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    className: \"img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 17\n    }\n  }))), __jsx(\"div\", {\n    className: \"article\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 13\n    }\n  }, \"article 1\")))));\n};\n\n_s(Index, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Index;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    language: state.language.language\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, {})(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlRWZmZWN0IiwiZmFkZUluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmFkZUluRGVsYXkiLCJzbGlkZUxlZnQiLCJzbGlkZVJpZ2h0Iiwic2xpZGVSaWdodERlbGF5IiwiZmFkZUluT3BzIiwicm9vdCIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJzY3JvbGxGYWRlSW4iLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJzY3JvbGxGYWRlIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1bm9ic2VydmUiLCJmYWRlciIsIm9ic2VydmUiLCJtYWluQmciLCJsYW5ndWFnZSIsImltZzQiLCJiYWNrZ3JvdW5kIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBSUE7O0FBQ0E7Q0FHQTs7Q0FHQTs7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdkJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixVQUExQixDQUFmO0FBQ0EsUUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNDLGdCQUFULENBQTBCLGdCQUExQixDQUFwQjtBQUNBLFFBQU1FLFNBQVMsR0FBR0gsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBbEI7QUFDQSxRQUFNRyxVQUFVLEdBQUdKLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQW5CO0FBQ0EsUUFBTUksZUFBZSxHQUFHTCxRQUFRLENBQUNDLGdCQUFULENBQTBCLHVCQUExQixDQUF4QjtBQUVBLFFBQU1LLFNBQVMsR0FBRztBQUNkQyxVQUFJLEVBQUUsSUFEUTtBQUVkQyxlQUFTLEVBQUUsQ0FGRztBQUdkQyxnQkFBVSxFQUFFO0FBSEUsS0FBbEI7QUFNQSxRQUFNQyxZQUFZLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUIsVUFBU0MsT0FBVCxFQUFrQkMsVUFBbEIsRUFBNkI7QUFDdkVELGFBQU8sQ0FBQ0UsT0FBUixDQUFnQixVQUFBQyxLQUFLLEVBQUk7QUFDekIsWUFBRyxDQUFDQSxLQUFLLENBQUNDLGNBQVYsRUFBMEI7QUFDdEI7QUFDSCxTQUZELE1BRU87QUFDSEQsZUFBSyxDQUFDRSxNQUFOLENBQWFDLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0FOLG9CQUFVLENBQUNPLFNBQVgsQ0FBcUJMLEtBQUssQ0FBQ0UsTUFBM0I7QUFDSDtBQUNBLE9BUEQ7QUFRSCxLQVRvQixFQVNsQlgsU0FUa0IsQ0FBckI7QUFXQVAsVUFBTSxDQUFDZSxPQUFQLENBQWUsVUFBQU8sS0FBSyxFQUFJO0FBQ3BCWCxrQkFBWSxDQUFDWSxPQUFiLENBQXFCRCxLQUFyQjtBQUNILEtBRkQ7QUFJQW5CLGVBQVcsQ0FBQ1ksT0FBWixDQUFvQixVQUFBTyxLQUFLLEVBQUk7QUFDekJYLGtCQUFZLENBQUNZLE9BQWIsQ0FBcUJELEtBQXJCO0FBQ0gsS0FGRDtBQUlBbEIsYUFBUyxDQUFDVyxPQUFWLENBQWtCLFVBQUFPLEtBQUssRUFBSTtBQUN2Qlgsa0JBQVksQ0FBQ1ksT0FBYixDQUFxQkQsS0FBckI7QUFDSCxLQUZEO0FBSUFqQixjQUFVLENBQUNVLE9BQVgsQ0FBbUIsVUFBQU8sS0FBSyxFQUFJO0FBQ3hCWCxrQkFBWSxDQUFDWSxPQUFiLENBQXFCRCxLQUFyQjtBQUNILEtBRkQ7QUFJQWhCLG1CQUFlLENBQUNTLE9BQWhCLENBQXdCLFVBQUFPLEtBQUssRUFBSTtBQUM3Qlgsa0JBQVksQ0FBQ1ksT0FBYixDQUFxQkQsS0FBckI7QUFDSCxLQUZEO0FBR0QsR0EzQ1EsRUEyQ04sRUEzQ00sQ0FBVDtBQTZDQSxTQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRUUseURBRFA7QUFFRSxPQUFHLEVBQUMsT0FGTjtBQUdFLGFBQVMsRUFBQyxhQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0cxQixLQUFLLENBQUMyQixRQUFOLEdBQ0MsZ0NBREQsR0FHQyw2Q0FKSixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJM0IsS0FBSyxDQUFDMkIsUUFBTixHQUNFLG9LQURGLEdBR0UsMk9BTE4sQ0FSRixFQWtCRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzNCLEtBQUssQ0FBQzJCLFFBQU4sR0FDQyxVQURELEdBR0MsY0FKSixDQURGLENBREYsRUFXRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHM0IsS0FBSyxDQUFDMkIsUUFBTixHQUNDLFFBREQsR0FHQyxVQUpKLENBREYsQ0FYRixDQWxCRixDQURGLENBUEYsQ0FERixFQXFERTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsQ0FyREYsRUE2REU7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQURGLEVBT0U7QUFDRSxhQUFTLEVBQUMsd0JBRFo7QUFFRSxPQUFHLEVBQUMsT0FGTjtBQUdFLE9BQUcsRUFBRUMsdURBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBWUU7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRixDQURGLEVBZ0JFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMscUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RkFERixDQURGLEVBT0U7QUFBTSxhQUFTLEVBQUMsMkNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLENBREYsQ0FQRixDQWhCRixDQURGLENBN0RGLEVBaUdFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLGtFQUFEO0FBQ0UsY0FBVSxFQUFFLEtBRGQ7QUFFRSxjQUFVLEVBQUUsS0FGZDtBQUdFLGtCQUFjLEVBQUUsS0FIbEI7QUFJRSxnQkFBWSxFQUFFLElBSmhCO0FBS0UsY0FBVSxFQUFDLGFBTGI7QUFNRSxhQUFTLEVBQUMsVUFOWjtBQU9FLFNBQUssRUFBRTtBQUNMQyxnQkFBVSxFQUFFO0FBRFAsS0FQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVELHVEQUFWO0FBQWdCLGFBQVMsRUFBQyxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQVhGLEVBbUJFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQkYsQ0FIRixDQURGLENBakdGLENBREY7QUFpSUQsQ0EvS0Q7O0dBQU03QixLOztLQUFBQSxLOztBQWlMTixJQUFNK0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNoQ0osWUFBUSxFQUFFSSxLQUFLLENBQUNKLFFBQU4sQ0FBZUE7QUFETyxHQUFMO0FBQUEsQ0FBN0I7O0FBSWVLLDBIQUFPLENBQUNGLGVBQUQsRUFBa0IsRUFBbEIsQ0FBUCxDQUVaL0IsS0FGWSxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuXG4vL0Fzc2V0c1xuaW1wb3J0IG1haW5CZyBmcm9tICcuLi9hc3NldHMvbWFpbkJHLnBuZydcbmltcG9ydCBpbWc0IGZyb20gJy4uL2Fzc2V0cy9pbWc0LnBuZydcblxuLy9Db21wb25lbnRzXG5pbXBvcnQgQWJvdXRVcyBmcm9tICcuLi9jb21wb25lbnRzL2Fib3V0VXMnXG5cbi8vUGFja2FnZXNcbmltcG9ydCB7Q2Fyb3VzZWx9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmFkZUluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYWRlLWluXCIpXG4gICAgY29uc3QgZmFkZUluRGVsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZhZGUtaW4tZGVsYXlcIilcbiAgICBjb25zdCBzbGlkZUxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlLWluLWxlZnRcIilcbiAgICBjb25zdCBzbGlkZVJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZS1pbi1yaWdodFwiKVxuICAgIGNvbnN0IHNsaWRlUmlnaHREZWxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGUtaW4tcmlnaHQtZGVsYXlcIilcblxuICAgIGNvbnN0IGZhZGVJbk9wcyA9IHtcbiAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgICByb290TWFyZ2luOiBcIi0xMDBweFwiXG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsRmFkZUluID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMsIHNjcm9sbEZhZGUpe1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpZighZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhcHBlYXInKVxuICAgICAgICAgICAgc2Nyb2xsRmFkZS51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSwgZmFkZUluT3BzKVxuXG4gICAgZmFkZUluLmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICBzY3JvbGxGYWRlSW4ub2JzZXJ2ZShmYWRlcilcbiAgICB9KTtcblxuICAgIGZhZGVJbkRlbGF5LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICBzY3JvbGxGYWRlSW4ub2JzZXJ2ZShmYWRlcilcbiAgICB9KTtcblxuICAgIHNsaWRlTGVmdC5mb3JFYWNoKGZhZGVyID0+IHtcbiAgICAgICAgc2Nyb2xsRmFkZUluLm9ic2VydmUoZmFkZXIpXG4gICAgfSk7XG5cbiAgICBzbGlkZVJpZ2h0LmZvckVhY2goZmFkZXIgPT4ge1xuICAgICAgICBzY3JvbGxGYWRlSW4ub2JzZXJ2ZShmYWRlcilcbiAgICB9KTtcblxuICAgIHNsaWRlUmlnaHREZWxheS5mb3JFYWNoKGZhZGVyID0+IHtcbiAgICAgICAgc2Nyb2xsRmFkZUluLm9ic2VydmUoZmFkZXIpXG4gICAgfSk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW4gaG9tZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nICBcbiAgICAgICAgICBzcmM9e21haW5CZ31cbiAgICAgICAgICBhbHQ9XCJwbGFudFwiIFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW4tYmctaW1nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWJnLW92ZXJsYXlcIi8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi10aXRsZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdGl0bGUtd3JhcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy5sYW5ndWFnZSA/IFxuICAgICAgICAgICAgICAgIFwiTG9jYWxseSBHcm93biwgT3JnYW5pYyBQcm9kdWNlXCJcbiAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICAnRGVlZ2Fhbmt1IHd1dSBrb3JheSwgd2F4IHNvbyBzYWFya2Egbm9vbGFoYSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5sYW5ndWFnZSA/IFxuICAgICAgICAgICAgICAgICAgJ1dlIHN1cHBvcnQgaW1taWdyYW50IGZhbWlsaWVzIGluIE1pbm5lc290YSB3aXRoIGFuIGVtcGhhc2lzIG9uIFNvbWFsaSBhbmQgQWZyaWNhbiBpbW1pZ3JhbnRzIGJ5IHByb3ZpZGluZyByZWdlbmVyYXRpdmUsIGluZGlnZW5vdXMgZmFybWluZyB0cmFpbmluZyBhbmQgZWR1Y2F0aW9uLidcbiAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgICAgJ1dheGFhbiBrdSB0YWFnZWVybmFhIHFveXNhc2thIG11aGFhamlyaWludGEgYWggZWUga3Ugbm9vbCBnb2JvbGthIE1pbm5lc290YSB4b29nYSBsYSBzYWFyYXlvIHNvb2dhbG9vdGlnYSBTb29tYWFsaWRhIGl5byBBZnJpa2FhbmthIGFoIGl5YWRvbyBsYSBzaWluYXlvIGRpYiB1IHNvbyBub29sZXluLCB0YWJvYmFycm8gdGFjbGlpbWVlZCBvbyB1IGRoYXNoYXkgd2FkYW5pZ2EgYWggaXlvIHdheGJhcmFzaG8uJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1idG4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCcgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubGFuZ3VhZ2UgP1xuICAgICAgICAgICAgICAgICAgICBcIkFib3V0IFVzXCJcbiAgICAgICAgICAgICAgICAgIDogXG4gICAgICAgICAgICAgICAgICAgIFwiTmFndSBzYWFic2FuXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9kb25hdGUnID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYWx0XCI+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubGFuZ3VhZ2UgP1xuICAgICAgICAgICAgICAgICAgICBcIkRvbmF0ZVwiXG4gICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgIFwiS3UgZGVlcW9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5BYm91dCBVczwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiLz5cbiAgICAgICAgICA8QWJvdXRVcy8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lckRhcmtcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0LWxlZnQgc2xpZGUtaW4tbGVmdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkbGluZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkbGluZVwiPlxuICAgICAgICAgICAgICAgIFdoeSBZb3UnbGwgTG92ZSBVc1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGxpdC1sZWZ0LWltZyBmYWRlLWluXCIgXG4gICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcbiAgICAgICAgICAgICAgc3JjPXtpbWc0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLW92ZXJsYXlcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1vdmVybGF5M1wiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0LXJpZ2h0IGZhZGUtaW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtc3ViQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWhlYWRsaW5lIHNsaWRlLWluLXJpZ2h0IGZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgICBUaGVyZSBpcyBuZXZlciBiZWVuIGEgYmV0dGVyIHRpbWUgdG8gZWF0IG9yZ2FuaWMuIE9yZ2FuaWMgbWVhbnMgd29ya2luZyB3aXRoIG5hdHVyZS5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwic3BsaXQtc3ViQ29udGFpbmVyIHNsaWRlLWluLXJpZ2h0IGZhZGUtaW5cIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5EZWxpY2lvdXM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5FdGhpY2FsPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+U3VzdGFpbmFibGU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5TZWFzb25hbDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+TmV3czwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiLz5cbiAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxuICAgICAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XG4gICAgICAgICAgICBzaG93SW5kaWNhdG9ycz17ZmFsc2V9XG4gICAgICAgICAgICBpbmZpbml0ZUxvb3A9e3RydWV9XG4gICAgICAgICAgICBiYWNrZ3JvdW5kPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgY2xhc3NuYW1lPVwiY2Fyb3VzZWxcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIEFydGljbGUgMSBUaXRsZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZzR9IGNsYXNzTmFtZT1cImltZ1wiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxuICAgICAgICAgICAgICBhcnRpY2xlIDFcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbGFuZ3VhZ2U6IHN0YXRlLmxhbmd1YWdlLmxhbmd1YWdlXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xuXG59KShJbmRleCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})