webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\Marcelo\\Desktop\\front_api\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

 //import {getInitialProps} from 'next';



var Index = function Index(dados) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      clientes = _useState[0],
      setClientes = _useState[1];

  console.log(clientes);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response;
    return C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:8080/');

          case 2:
            response = _context.sent;
            setClientes(response.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      children: clientes.map(function (cliente) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: cliente.nome
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, _this);
};

_s(Index, "HULfgVUvabrDmHl/V3upbLnD830=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYWRvcyIsInVzZVN0YXRlIiwiY2xpZW50ZXMiLCJzZXRDbGllbnRlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsIm1hcCIsImNsaWVudGUiLCJub21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsRUFBRCxDQURuQjtBQUFBLE1BQ2RDLFFBRGM7QUFBQSxNQUNKQyxXQURJOztBQUVyQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFFQUkseURBQVMsNFJBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDaUJDLDRDQUFLLENBQUNDLEdBQU4sQ0FDbkIsd0JBRG1CLENBRGpCOztBQUFBO0FBQ0FDLG9CQURBO0FBSU5OLHVCQUFXLENBQUNNLFFBQVEsQ0FBQ0MsSUFBVixDQUFYOztBQUpNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFNUCxFQU5PLENBQVQ7QUFPQSxzQkFDSTtBQUFBLDJCQUVJO0FBQUEsZ0JBQ0tSLFFBQVEsQ0FBQ1MsR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBYTtBQUN2QjtBQUFBO0FBQUEsb0JBQUtBLE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0gsT0FGQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFVSCxDQXJCRDs7R0FBTWQsSzs7S0FBQUEsSztBQXVCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjA2YmU2MzNlZjNkMGNlMGE4ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vaW1wb3J0IHtnZXRJbml0aWFsUHJvcHN9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEluZGV4ID0gKGRhZG9zKSA9PiB7XHJcbiAgICBjb25zdCBbY2xpZW50ZXMsIHNldENsaWVudGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnNvbGUubG9nKGNsaWVudGVzKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCk9PntcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRDbGllbnRlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBcclxuICAgIH0sW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LyogLHVsPGgxPlRFU1RFPC9oMT4gKi99XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtjbGllbnRlcy5tYXAoKGNsaWVudGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICA8bGk+e2NsaWVudGUubm9tZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=