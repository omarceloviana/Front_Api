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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        id: "nome",
        name: "nome",
        type: "text",
        placeholder: "Nome"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        id: "endere\xE7o",
        name: "endere\xE7o",
        type: "text",
        placeholder: "Endere\xE7o"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        id: "cep",
        name: "cep",
        type: "text",
        placeholder: "Cep"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        id: "nascimento",
        name: "nascimento",
        type: "text",
        placeholder: "Nascimento"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        id: "telefone",
        name: "telefone",
        type: "text",
        placeholder: "Telefone"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        type: "submit",
        value: "INSCREVA-SE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYWRvcyIsInVzZVN0YXRlIiwiY2xpZW50ZXMiLCJzZXRDbGllbnRlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEVBQUQsQ0FEbkI7QUFBQSxNQUNkQyxRQURjO0FBQUEsTUFDSkMsV0FESTs7QUFFckJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaO0FBRUFJLHlEQUFTLDRSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCQyw0Q0FBSyxDQUFDQyxHQUFOLENBQ25CLHdCQURtQixDQURqQjs7QUFBQTtBQUNBQyxvQkFEQTtBQUlOTix1QkFBVyxDQUFDTSxRQUFRLENBQUNDLElBQVYsQ0FBWDs7QUFKTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBTVAsRUFOTyxDQUFUO0FBT0Esc0JBQ0k7QUFBQSwyQkFDTTtBQUFBLDhCQUNNO0FBQU8sVUFBRSxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDLE1BQXRCO0FBQTZCLFlBQUksRUFBQyxNQUFsQztBQUF5QyxtQkFBVyxFQUFDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETixlQUVNO0FBQU8sVUFBRSxFQUFDLGFBQVY7QUFBcUIsWUFBSSxFQUFDLGFBQTFCO0FBQXFDLFlBQUksRUFBQyxNQUExQztBQUFpRCxtQkFBVyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGTixlQUdNO0FBQU8sVUFBRSxFQUFDLEtBQVY7QUFBZ0IsWUFBSSxFQUFDLEtBQXJCO0FBQTJCLFlBQUksRUFBQyxNQUFoQztBQUF1QyxtQkFBVyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFITixlQUlNO0FBQU8sVUFBRSxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDLFlBQTVCO0FBQXlDLFlBQUksRUFBQyxNQUE5QztBQUFxRCxtQkFBVyxFQUFDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKTixlQUtNO0FBQU8sVUFBRSxFQUFDLFVBQVY7QUFBcUIsWUFBSSxFQUFDLFVBQTFCO0FBQXFDLFlBQUksRUFBQyxNQUExQztBQUFpRCxtQkFBVyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMTixlQU1NO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsYUFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQXZCRDs7R0FBTVgsSzs7S0FBQUEsSztBQXlCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWRjNTllZTcyODUyNTExNDdhNDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vaW1wb3J0IHtnZXRJbml0aWFsUHJvcHN9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEluZGV4ID0gKGRhZG9zKSA9PiB7XHJcbiAgICBjb25zdCBbY2xpZW50ZXMsIHNldENsaWVudGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnNvbGUubG9nKGNsaWVudGVzKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCk9PntcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRDbGllbnRlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBcclxuICAgIH0sW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5vbWVcIiBuYW1lPVwibm9tZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOb21lXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbmRlcmXDp29cIiBuYW1lPVwiZW5kZXJlw6dvXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVuZGVyZcOnb1wiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY2VwXCIgbmFtZT1cImNlcFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDZXBcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hc2NpbWVudG9cIiBuYW1lPVwibmFzY2ltZW50b1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYXNjaW1lbnRvXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0ZWxlZm9uZVwiIG5hbWU9XCJ0ZWxlZm9uZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUZWxlZm9uZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIklOU0NSRVZBLVNFXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9