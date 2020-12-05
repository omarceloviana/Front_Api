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
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/style.module.css */ "./styles/style.module.css");
/* harmony import */ var _styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5__);




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
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://localhost:8080/");

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

  function enviarFormulario(_x) {
    return _enviarFormulario.apply(this, arguments);
  }

  function _enviarFormulario() {
    _enviarFormulario = Object(C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      var nome, endereço, cep, nascimento, telefone, formulario, response;
      return C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              nome = document.getElementById("nome");
              endereço = document.getElementById("endereço");
              cep = document.getElementById("cep");
              nascimento = document.getElementById("nascimento");
              telefone = document.getElementById("telefone");
              formulario = {
                nome: nome.value,
                endereço: endereço.value,
                cep: cep.value,
                nascimento: nascimento.value,
                telefone: telefone.value
              };
              _context2.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:8080/", formulario);

            case 9:
              response = _context2.sent;
              console.log(response);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _enviarFormulario.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
    className: _styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        textAlign: "center"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        children: "Formul\xE1rio de cadastro"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: _styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.formContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
        onSubmit: enviarFormulario,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "nome",
          name: "nome",
          type: "text",
          placeholder: "Nome"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "endere\xE7o",
          name: "endere\xE7o",
          type: "text",
          placeholder: "Endere\xE7o"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "cep",
          name: "cep",
          type: "text",
          placeholder: "Cep"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "nascimento",
          type: "text",
          placeholder: "Nascimento"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "telefone",
          name: "telefone",
          type: "text",
          placeholder: "Telefone"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "submit",
          value: "INSCREVA-SE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYWRvcyIsInVzZVN0YXRlIiwiY2xpZW50ZXMiLCJzZXRDbGllbnRlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsImVudmlhckZvcm11bGFyaW8iLCJlIiwicHJldmVudERlZmF1bHQiLCJub21lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImVuZGVyZcOnbyIsImNlcCIsIm5hc2NpbWVudG8iLCJ0ZWxlZm9uZSIsImZvcm11bGFyaW8iLCJ2YWx1ZSIsInBvc3QiLCJjbGFzc2VzIiwiY29udGFpbmVyIiwidGV4dEFsaWduIiwiZm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDaEJDLFFBRGdCO0FBQUEsTUFDTkMsV0FETTs7QUFFdkJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaO0FBRUFJLHlEQUFTLDRSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2VDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSx3QkFBVixDQURmOztBQUFBO0FBQ0ZDLG9CQURFO0FBRVJOLHVCQUFXLENBQUNNLFFBQVEsQ0FBQ0MsSUFBVixDQUFYOztBQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFHTixFQUhNLENBQVQ7O0FBSnVCLFdBU1JDLGdCQVRRO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFTQVN2QixrQkFBZ0NDLENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxlQUFDLENBQUNDLGNBQUY7QUFFSUMsa0JBSE4sR0FHYUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBSGI7QUFJTUMsc0JBSk4sR0FJaUJGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUpqQjtBQUtNRSxpQkFMTixHQUtZSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FMWjtBQU1NRyx3QkFOTixHQU1tQkosUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBTm5CO0FBT01JLHNCQVBOLEdBT2lCTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FQakI7QUFTUUssd0JBVFIsR0FTcUI7QUFDakJQLG9CQUFJLEVBQUVBLElBQUksQ0FBQ1EsS0FETTtBQUVqQkwsd0JBQVEsRUFBRUEsUUFBUSxDQUFDSyxLQUZGO0FBR2pCSixtQkFBRyxFQUFFQSxHQUFHLENBQUNJLEtBSFE7QUFJakJILDBCQUFVLEVBQUVBLFVBQVUsQ0FBQ0csS0FKTjtBQUtqQkYsd0JBQVEsRUFBRUEsUUFBUSxDQUFDRTtBQUxGLGVBVHJCO0FBQUE7QUFBQSxxQkFpQnlCZiw0Q0FBSyxDQUFDZ0IsSUFBTixDQUFXLHdCQUFYLEVBQXFDRixVQUFyQyxDQWpCekI7O0FBQUE7QUFpQlFaLHNCQWpCUjtBQWtCRUwscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSSxRQUFaOztBQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVR1QjtBQUFBO0FBQUE7O0FBOEJ2QixzQkFDRTtBQUFTLGFBQVMsRUFBRWUsK0RBQU8sQ0FBQ0MsU0FBNUI7QUFBQSw0QkFDRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBWjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVGLCtEQUFPLENBQUNHLGFBQXhCO0FBQUEsNkJBQ0U7QUFBTSxnQkFBUSxFQUFFaEIsZ0JBQWhCO0FBQUEsZ0NBQ0U7QUFBTyxZQUFFLEVBQUMsTUFBVjtBQUFpQixjQUFJLEVBQUMsTUFBdEI7QUFBNkIsY0FBSSxFQUFDLE1BQWxDO0FBQXlDLHFCQUFXLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQ0UsWUFBRSxFQUFDLGFBREw7QUFFRSxjQUFJLEVBQUMsYUFGUDtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUscUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFRRTtBQUFPLFlBQUUsRUFBQyxLQUFWO0FBQWdCLGNBQUksRUFBQyxLQUFyQjtBQUEyQixjQUFJLEVBQUMsTUFBaEM7QUFBdUMscUJBQVcsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBU0U7QUFBTyxZQUFFLEVBQUMsWUFBVjtBQUF1QixjQUFJLEVBQUMsTUFBNUI7QUFBbUMscUJBQVcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBVUU7QUFDRSxZQUFFLEVBQUMsVUFETDtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxxQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixFQWVZLEdBZlosZUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkYsZUFpQkU7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBMUREOztHQUFNWixLOztLQUFBQSxLO0FBNERTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNjExNDA1MTQzODA4YmI5NjkwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vL2ltcG9ydCB7Z2V0SW5pdGlhbFByb3BzfSBmcm9tICduZXh0JztcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9zdHlsZXMvc3R5bGUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoZGFkb3MpID0+IHtcclxuICBjb25zdCBbY2xpZW50ZXMsIHNldENsaWVudGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zb2xlLmxvZyhjbGllbnRlcyk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIik7XHJcbiAgICBzZXRDbGllbnRlcyhyZXNwb25zZS5kYXRhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGVudmlhckZvcm11bGFyaW8oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBub21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub21lXCIpO1xyXG4gICAgdmFyIGVuZGVyZcOnbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kZXJlw6dvXCIpO1xyXG4gICAgdmFyIGNlcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2VwXCIpO1xyXG4gICAgdmFyIG5hc2NpbWVudG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hc2NpbWVudG9cIik7XHJcbiAgICB2YXIgdGVsZWZvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbGVmb25lXCIpO1xyXG5cclxuICAgIGNvbnN0IGZvcm11bGFyaW8gPSB7XHJcbiAgICAgIG5vbWU6IG5vbWUudmFsdWUsXHJcbiAgICAgIGVuZGVyZcOnbzogZW5kZXJlw6dvLnZhbHVlLFxyXG4gICAgICBjZXA6IGNlcC52YWx1ZSxcclxuICAgICAgbmFzY2ltZW50bzogbmFzY2ltZW50by52YWx1ZSxcclxuICAgICAgdGVsZWZvbmU6IHRlbGVmb25lLnZhbHVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCIsIGZvcm11bGFyaW8pO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICA8aDE+Rm9ybXVsw6FyaW8gZGUgY2FkYXN0cm88L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2VudmlhckZvcm11bGFyaW99PlxyXG4gICAgICAgICAgPGlucHV0IGlkPVwibm9tZVwiIG5hbWU9XCJub21lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5vbWVcIj48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwiZW5kZXJlw6dvXCJcclxuICAgICAgICAgICAgbmFtZT1cImVuZGVyZcOnb1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbmRlcmXDp29cIlxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9XCJjZXBcIiBuYW1lPVwiY2VwXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNlcFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9XCJuYXNjaW1lbnRvXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hc2NpbWVudG9cIj48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwidGVsZWZvbmVcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGVsZWZvbmVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsZWZvbmVcIlxyXG4gICAgICAgICAgPjwvaW5wdXQ+e1wiIFwifVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiSU5TQ1JFVkEtU0VcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9