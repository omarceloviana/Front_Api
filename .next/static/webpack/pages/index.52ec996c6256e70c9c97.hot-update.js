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
  })), []); //Função POST para inserir dados no arquivo json.

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

  function enviarFormulario(_x2) {
    return _enviarFormulario2.apply(this, arguments);
  } //HTML do formulário


  function _enviarFormulario2() {
    _enviarFormulario2 = Object(C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
      var nome, endereço, cep, nascimento, telefone, formulario, response;
      return C_Users_Marcelo_Desktop_front_api_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
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
              _context3.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:8080/id", formulario);

            case 9:
              response = _context3.sent;
              console.log(response);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _enviarFormulario2.apply(this, arguments);
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
        lineNumber: 64,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "endere\xE7o",
          name: "endere\xE7o",
          type: "text",
          placeholder: "Endere\xE7o"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "cep",
          name: "cep",
          type: "text",
          placeholder: "Cep"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "nascimento",
          type: "text",
          placeholder: "Nascimento"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "telefone",
          name: "telefone",
          type: "text",
          placeholder: "Telefone"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "submit",
          value: "INSCREVA-SE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYWRvcyIsInVzZVN0YXRlIiwiY2xpZW50ZXMiLCJzZXRDbGllbnRlcyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiZW52aWFyRm9ybXVsYXJpbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5vbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZW5kZXJlw6dvIiwiY2VwIiwibmFzY2ltZW50byIsInRlbGVmb25lIiwiZm9ybXVsYXJpbyIsInZhbHVlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwiY29udGFpbmVyIiwidGV4dEFsaWduIiwiZm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDaEJDLFFBRGdCO0FBQUEsTUFDTkMsV0FETTs7QUFHdkJDLHlEQUFTLDRSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2VDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSx3QkFBVixDQURmOztBQUFBO0FBQ0ZDLG9CQURFO0FBRVJKLHVCQUFXLENBQUNJLFFBQVEsQ0FBQ0MsSUFBVixDQUFYOztBQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFHTixFQUhNLENBQVQsQ0FIdUIsQ0FRdkI7O0FBUnVCLFdBU1JDLGdCQVRRO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFTQVN2QixrQkFBZ0NDLENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxlQUFDLENBQUNDLGNBQUY7QUFFSUMsa0JBSE4sR0FH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RSxjQUFJLEVBQUMsTUFIUDtBQUlFLHFCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBUUU7QUFBTyxZQUFFLEVBQUMsS0FBVjtBQUFnQixjQUFJLEVBQUMsS0FBckI7QUFBMkIsY0FBSSxFQUFDLE1BQWhDO0FBQXVDLHFCQUFXLEVBQUM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQVNFO0FBQU8sWUFBRSxFQUFDLFlBQVY7QUFBdUIsY0FBSSxFQUFDLE1BQTVCO0FBQW1DLHFCQUFXLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURixlQVVFO0FBQ0UsWUFBRSxFQUFDLFVBREw7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUscUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsRUFlWSxHQWZaLGVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGLGVBaUJFO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsZUFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRCRCxDQWpGRDs7R0FBTVYsSzs7S0FBQUEsSztBQW1GU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTJlYzk5NmM2MjU2ZTcwYzljOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy9pbXBvcnQge2dldEluaXRpYWxQcm9wc30gZnJvbSAnbmV4dCc7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKGRhZG9zKSA9PiB7XHJcbiAgY29uc3QgW2NsaWVudGVzLCBzZXRDbGllbnRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIik7XHJcbiAgICBzZXRDbGllbnRlcyhyZXNwb25zZS5kYXRhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vRnVuw6fDo28gUE9TVCBwYXJhIGluc2VyaXIgZGFkb3Mgbm8gYXJxdWl2byBqc29uLlxyXG4gIGFzeW5jIGZ1bmN0aW9uIGVudmlhckZvcm11bGFyaW8oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBub21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub21lXCIpO1xyXG4gICAgdmFyIGVuZGVyZcOnbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kZXJlw6dvXCIpO1xyXG4gICAgdmFyIGNlcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2VwXCIpO1xyXG4gICAgdmFyIG5hc2NpbWVudG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hc2NpbWVudG9cIik7XHJcbiAgICB2YXIgdGVsZWZvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbGVmb25lXCIpO1xyXG5cclxuICAgIGNvbnN0IGZvcm11bGFyaW8gPSB7XHJcbiAgICAgIG5vbWU6IG5vbWUudmFsdWUsXHJcbiAgICAgIGVuZGVyZcOnbzogZW5kZXJlw6dvLnZhbHVlLFxyXG4gICAgICBjZXA6IGNlcC52YWx1ZSxcclxuICAgICAgbmFzY2ltZW50bzogbmFzY2ltZW50by52YWx1ZSxcclxuICAgICAgdGVsZWZvbmU6IHRlbGVmb25lLnZhbHVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCIsIGZvcm11bGFyaW8pO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZW52aWFyRm9ybXVsYXJpbyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIG5vbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWVcIik7XHJcbiAgICB2YXIgZW5kZXJlw6dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRlcmXDp29cIik7XHJcbiAgICB2YXIgY2VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZXBcIik7XHJcbiAgICB2YXIgbmFzY2ltZW50byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFzY2ltZW50b1wiKTtcclxuICAgIHZhciB0ZWxlZm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVsZWZvbmVcIik7XHJcblxyXG4gICAgY29uc3QgZm9ybXVsYXJpbyA9IHtcclxuICAgICAgbm9tZTogbm9tZS52YWx1ZSxcclxuICAgICAgZW5kZXJlw6dvOiBlbmRlcmXDp28udmFsdWUsXHJcbiAgICAgIGNlcDogY2VwLnZhbHVlLFxyXG4gICAgICBuYXNjaW1lbnRvOiBuYXNjaW1lbnRvLnZhbHVlLFxyXG4gICAgICB0ZWxlZm9uZTogdGVsZWZvbmUudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pZFwiLCBmb3JtdWxhcmlvKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG5cclxuICAvL0hUTUwgZG8gZm9ybXVsw6FyaW9cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgIDxoMT5Gb3JtdWzDoXJpbyBkZSBjYWRhc3RybzwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udGFpbmVyfT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZW52aWFyRm9ybXVsYXJpb30+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9XCJub21lXCIgbmFtZT1cIm5vbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9tZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJlbmRlcmXDp29cIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW5kZXJlw6dvXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVuZGVyZcOnb1wiXHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dCBpZD1cImNlcFwiIG5hbWU9XCJjZXBcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ2VwXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dCBpZD1cIm5hc2NpbWVudG9cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFzY2ltZW50b1wiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJ0ZWxlZm9uZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0ZWxlZm9uZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxlZm9uZVwiXHJcbiAgICAgICAgICA+PC9pbnB1dD57XCIgXCJ9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJJTlNDUkVWQS1TRVwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=