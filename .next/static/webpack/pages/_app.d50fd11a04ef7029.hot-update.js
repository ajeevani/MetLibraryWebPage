"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/RouteGuard.js":
/*!**********************************!*\
  !*** ./components/RouteGuard.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RouteGuard: function() { return /* binding */ RouteGuard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_authenticate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/authenticate */ \"./lib/authenticate.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst PUBLIC_PATHS = [\n    \"/\",\n    \"/login\",\n    \"/register\"\n];\nconst RouteGuard = (param)=>{\n    let { children } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const authCheck = ()=>{\n            const isAuth = (0,_lib_authenticate__WEBPACK_IMPORTED_MODULE_3__.isAuthenticated)();\n            const path = router.pathname;\n            if (!isAuth && !PUBLIC_PATHS.includes(path)) {\n                router.push(\"/login\");\n            } else if (isAuth && PUBLIC_PATHS.includes(path)) {\n                router.push(\"/\");\n            }\n        };\n        authCheck();\n    }, [\n        router.pathname\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false);\n};\n_s(RouteGuard, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = RouteGuard;\nvar _c;\n$RefreshReg$(_c, \"RouteGuard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JvdXRlR3VhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNNO0FBQ2M7QUFFdEQsTUFBTUcsZUFBZTtJQUFDO0lBQUs7SUFBVTtDQUFZO0FBRTFDLE1BQU1DLGFBQWE7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3JDLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxZQUFZO1lBQ2hCLE1BQU1DLFNBQVNOLGtFQUFlQTtZQUM5QixNQUFNTyxPQUFPSCxPQUFPSSxRQUFRO1lBRTVCLElBQUksQ0FBQ0YsVUFBVSxDQUFDTCxhQUFhUSxRQUFRLENBQUNGLE9BQU87Z0JBQzNDSCxPQUFPTSxJQUFJLENBQUM7WUFDZCxPQUFPLElBQUlKLFVBQVVMLGFBQWFRLFFBQVEsQ0FBQ0YsT0FBTztnQkFDaERILE9BQU9NLElBQUksQ0FBQztZQUNkO1FBQ0Y7UUFFQUw7SUFDRixHQUFHO1FBQUNELE9BQU9JLFFBQVE7S0FBQztJQUVwQixxQkFBTztrQkFBR0w7O0FBQ1osRUFBRTtHQW5CV0Q7O1FBQ0lILGtEQUFTQTs7O0tBRGJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm91dGVHdWFyZC5qcz8xZDUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWQgfSBmcm9tICcuLi9saWIvYXV0aGVudGljYXRlJztcclxuXHJcbmNvbnN0IFBVQkxJQ19QQVRIUyA9IFsnLycsICcvbG9naW4nLCAnL3JlZ2lzdGVyJ107XHJcblxyXG5leHBvcnQgY29uc3QgUm91dGVHdWFyZCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGF1dGhDaGVjayA9ICgpID0+IHtcclxuICAgICAgY29uc3QgaXNBdXRoID0gaXNBdXRoZW50aWNhdGVkKCk7XHJcbiAgICAgIGNvbnN0IHBhdGggPSByb3V0ZXIucGF0aG5hbWU7XHJcblxyXG4gICAgICBpZiAoIWlzQXV0aCAmJiAhUFVCTElDX1BBVEhTLmluY2x1ZGVzKHBhdGgpKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICB9IGVsc2UgaWYgKGlzQXV0aCAmJiBQVUJMSUNfUEFUSFMuaW5jbHVkZXMocGF0aCkpIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGF1dGhDaGVjaygpO1xyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcclxufTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiaXNBdXRoZW50aWNhdGVkIiwiUFVCTElDX1BBVEhTIiwiUm91dGVHdWFyZCIsImNoaWxkcmVuIiwicm91dGVyIiwiYXV0aENoZWNrIiwiaXNBdXRoIiwicGF0aCIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RouteGuard.js\n"));

/***/ })

});