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
  } //HTML do formulário


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
        lineNumber: 42,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
          lineNumber: 46,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "endere\xE7o",
          name: "endere\xE7o",
          type: "text",
          placeholder: "Endere\xE7o"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "cep",
          name: "cep",
          type: "text",
          placeholder: "Cep"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "nascimento",
          type: "text",
          placeholder: "Nascimento"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "telefone",
          name: "telefone",
          type: "text",
          placeholder: "Telefone"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "submit",
          value: "INSCREVA-SE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYWRvcyIsInVzZVN0YXRlIiwiY2xpZW50ZXMiLCJzZXRDbGllbnRlcyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiZW52aWFyRm9ybXVsYXJpbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5vbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZW5kZXJlw6dvIiwiY2VwIiwibmFzY2ltZW50byIsInRlbGVmb25lIiwiZm9ybXVsYXJpbyIsInZhbHVlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwiY29udGFpbmVyIiwidGV4dEFsaWduIiwiZm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDaEJDLFFBRGdCO0FBQUEsTUFDTkMsV0FETTs7QUFHdkJDLHlEQUFTLDRSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2VDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSx3QkFBVixDQURmOztBQUFBO0FBQ0ZDLG9CQURFO0FBRVJKLHVCQUFXLENBQUNJLFFBQVEsQ0FBQ0MsSUFBVixDQUFYOztBQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFHTixFQUhNLENBQVQsQ0FIdUIsQ0FRdkI7O0FBUnVCLFdBU1JDLGdCQVRRO0FBQUE7QUFBQSxJQThCdkI7OztBQTlCdUI7QUFBQSxxU0FTdkIsa0JBQWdDQyxDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsZUFBQyxDQUFDQyxjQUFGO0FBRUlDLGtCQUhOLEdBR2FDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUhiO0FBSU1DLHNCQUpOLEdBSWlCRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FKakI7QUFLTUUsaUJBTE4sR0FLWUgsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBTFo7QUFNTUcsd0JBTk4sR0FNbUJKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQU5uQjtBQU9NSSxzQkFQTixHQU9pQkwsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBUGpCO0FBU1FLLHdCQVRSLEdBU3FCO0FBQ2pCUCxvQkFBSSxFQUFFQSxJQUFJLENBQUNRLEtBRE07QUFFakJMLHdCQUFRLEVBQUVBLFFBQVEsQ0FBQ0ssS0FGRjtBQUdqQkosbUJBQUcsRUFBRUEsR0FBRyxDQUFDSSxLQUhRO0FBSWpCSCwwQkFBVSxFQUFFQSxVQUFVLENBQUNHLEtBSk47QUFLakJGLHdCQUFRLEVBQUVBLFFBQVEsQ0FBQ0U7QUFMRixlQVRyQjtBQUFBO0FBQUEscUJBaUJ5QmYsNENBQUssQ0FBQ2dCLElBQU4sQ0FBVyx3QkFBWCxFQUFxQ0YsVUFBckMsQ0FqQnpCOztBQUFBO0FBaUJRWixzQkFqQlI7QUFrQkVlLHFCQUFPLENBQUNDLEdBQVIsQ0FBWWhCLFFBQVo7O0FBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVHVCO0FBQUE7QUFBQTs7QUErQnZCLHNCQUNFO0FBQVMsYUFBUyxFQUFFaUIsK0RBQU8sQ0FBQ0MsU0FBNUI7QUFBQSw0QkFDRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBWjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVGLCtEQUFPLENBQUNHLGFBQXhCO0FBQUEsNkJBQ0U7QUFBTSxnQkFBUSxFQUFFbEIsZ0JBQWhCO0FBQUEsZ0NBQ0U7QUFBTyxZQUFFLEVBQUMsTUFBVjtBQUFpQixjQUFJLEVBQUMsTUFBdEI7QUFBNkIsY0FBSSxFQUFDLE1BQWxDO0FBQXlDLHFCQUFXLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQ0UsWUFBRSxFQUFDLGFBREw7QUFFRSxjQUFJLEVBQUMsYUFGUDtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUscUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFRRTtBQUFPLFlBQUUsRUFBQyxLQUFWO0FBQWdCLGNBQUksRUFBQyxLQUFyQjtBQUEyQixjQUFJLEVBQUMsTUFBaEM7QUFBdUMscUJBQVcsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBU0U7QUFBTyxZQUFFLEVBQUMsWUFBVjtBQUF1QixjQUFJLEVBQUMsTUFBNUI7QUFBbUMscUJBQVcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBVUU7QUFDRSxZQUFFLEVBQUMsVUFETDtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxxQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixFQWVZLEdBZlosZUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkYsZUFpQkU7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFLLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBM0REOztHQUFNVixLOztLQUFBQSxLO0FBNkRTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZGViNzI2ZmYxYTY3NGQzMGFkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vL2ltcG9ydCB7Z2V0SW5pdGlhbFByb3BzfSBmcm9tICduZXh0JztcclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9zdHlsZXMvc3R5bGUubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoZGFkb3MpID0+IHtcclxuICBjb25zdCBbY2xpZW50ZXMsIHNldENsaWVudGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiKTtcclxuICAgIHNldENsaWVudGVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy9GdW7Dp8OjbyBQT1NUIHBhcmEgaW5zZXJpciBkYWRvcyBubyBhcnF1aXZvIGpzb24uXHJcbiAgYXN5bmMgZnVuY3Rpb24gZW52aWFyRm9ybXVsYXJpbyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIG5vbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWVcIik7XHJcbiAgICB2YXIgZW5kZXJlw6dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRlcmXDp29cIik7XHJcbiAgICB2YXIgY2VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZXBcIik7XHJcbiAgICB2YXIgbmFzY2ltZW50byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFzY2ltZW50b1wiKTtcclxuICAgIHZhciB0ZWxlZm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVsZWZvbmVcIik7XHJcblxyXG4gICAgY29uc3QgZm9ybXVsYXJpbyA9IHtcclxuICAgICAgbm9tZTogbm9tZS52YWx1ZSxcclxuICAgICAgZW5kZXJlw6dvOiBlbmRlcmXDp28udmFsdWUsXHJcbiAgICAgIGNlcDogY2VwLnZhbHVlLFxyXG4gICAgICBuYXNjaW1lbnRvOiBuYXNjaW1lbnRvLnZhbHVlLFxyXG4gICAgICB0ZWxlZm9uZTogdGVsZWZvbmUudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIiwgZm9ybXVsYXJpbyk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgfVxyXG5cclxuICAvL0hUTUwgZG8gZm9ybXVsw6FyaW9cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgIDxoMT5Gb3JtdWzDoXJpbyBkZSBjYWRhc3RybzwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udGFpbmVyfT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZW52aWFyRm9ybXVsYXJpb30+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9XCJub21lXCIgbmFtZT1cIm5vbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9tZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJlbmRlcmXDp29cIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW5kZXJlw6dvXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVuZGVyZcOnb1wiXHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dCBpZD1cImNlcFwiIG5hbWU9XCJjZXBcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ2VwXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dCBpZD1cIm5hc2NpbWVudG9cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFzY2ltZW50b1wiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJ0ZWxlZm9uZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0ZWxlZm9uZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUZWxlZm9uZVwiXHJcbiAgICAgICAgICA+PC9pbnB1dD57XCIgXCJ9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJJTlNDUkVWQS1TRVwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=