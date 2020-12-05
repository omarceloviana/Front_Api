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
        lineNumber: 40,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
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
          lineNumber: 44,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "endere\xE7o",
          name: "endere\xE7o",
          type: "text",
          placeholder: "Endere\xE7o"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "cep",
          name: "cep",
          type: "text",
          placeholder: "Cep"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "nascimento",
          type: "text",
          placeholder: "Nascimento"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          id: "telefone",
          name: "telefone",
          type: "text",
          placeholder: "Telefone"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "submit",
          value: "INSCREVA-SE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYWRvcyIsInVzZVN0YXRlIiwiY2xpZW50ZXMiLCJzZXRDbGllbnRlcyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiZW52aWFyRm9ybXVsYXJpbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5vbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZW5kZXJlw6dvIiwiY2VwIiwibmFzY2ltZW50byIsInRlbGVmb25lIiwiZm9ybXVsYXJpbyIsInZhbHVlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwiY29udGFpbmVyIiwidGV4dEFsaWduIiwiZm9ybUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDaEJDLFFBRGdCO0FBQUEsTUFDTkMsV0FETTs7QUFHdkJDLHlEQUFTLDRSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2VDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSx3QkFBVixDQURmOztBQUFBO0FBQ0ZDLG9CQURFO0FBRVJKLHVCQUFXLENBQUNJLFFBQVEsQ0FBQ0MsSUFBVixDQUFYOztBQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFHTixFQUhNLENBQVQ7O0FBSHVCLFdBUVJDLGdCQVJRO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFTQVF2QixrQkFBZ0NDLENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxlQUFDLENBQUNDLGNBQUY7QUFFSUMsa0JBSE4sR0FHYUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBSGI7QUFJTUMsc0JBSk4sR0FJaUJGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUpqQjtBQUtNRSxpQkFMTixHQUtZSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FMWjtBQU1NRyx3QkFOTixHQU1tQkosUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBTm5CO0FBT01JLHNCQVBOLEdBT2lCTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FQakI7QUFTUUssd0JBVFIsR0FTcUI7QUFDakJQLG9CQUFJLEVBQUVBLElBQUksQ0FBQ1EsS0FETTtBQUVqQkwsd0JBQVEsRUFBRUEsUUFBUSxDQUFDSyxLQUZGO0FBR2pCSixtQkFBRyxFQUFFQSxHQUFHLENBQUNJLEtBSFE7QUFJakJILDBCQUFVLEVBQUVBLFVBQVUsQ0FBQ0csS0FKTjtBQUtqQkYsd0JBQVEsRUFBRUEsUUFBUSxDQUFDRTtBQUxGLGVBVHJCO0FBQUE7QUFBQSxxQkFpQnlCZiw0Q0FBSyxDQUFDZ0IsSUFBTixDQUFXLHdCQUFYLEVBQXFDRixVQUFyQyxDQWpCekI7O0FBQUE7QUFpQlFaLHNCQWpCUjtBQWtCRWUscUJBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsUUFBWjs7QUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FSdUI7QUFBQTtBQUFBOztBQTZCdkIsc0JBQ0U7QUFBUyxhQUFTLEVBQUVpQiwrREFBTyxDQUFDQyxTQUE1QjtBQUFBLDRCQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYixPQUFaO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFLLGVBQVMsRUFBRUYsK0RBQU8sQ0FBQ0csYUFBeEI7QUFBQSw2QkFDRTtBQUFNLGdCQUFRLEVBQUVsQixnQkFBaEI7QUFBQSxnQ0FDRTtBQUFPLFlBQUUsRUFBQyxNQUFWO0FBQWlCLGNBQUksRUFBQyxNQUF0QjtBQUE2QixjQUFJLEVBQUMsTUFBbEM7QUFBeUMscUJBQVcsRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFDRSxZQUFFLEVBQUMsYUFETDtBQUVFLGNBQUksRUFBQyxhQUZQO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxxQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQVFFO0FBQU8sWUFBRSxFQUFDLEtBQVY7QUFBZ0IsY0FBSSxFQUFDLEtBQXJCO0FBQTJCLGNBQUksRUFBQyxNQUFoQztBQUF1QyxxQkFBVyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFTRTtBQUFPLFlBQUUsRUFBQyxZQUFWO0FBQXVCLGNBQUksRUFBQyxNQUE1QjtBQUFtQyxxQkFBVyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEYsZUFVRTtBQUNFLFlBQUUsRUFBQyxVQURMO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxjQUFJLEVBQUMsTUFIUDtBQUlFLHFCQUFXLEVBQUM7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLEVBZVksR0FmWixlQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixlQWlCRTtBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLGVBQUssRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0F6REQ7O0dBQU1WLEs7O0tBQUFBLEs7QUEyRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc5MDViYTI5NTg2ODkzYzU2YTkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vaW1wb3J0IHtnZXRJbml0aWFsUHJvcHN9IGZyb20gJ25leHQnO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL3N0eWxlcy9zdHlsZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBJbmRleCA9IChkYWRvcykgPT4ge1xyXG4gIGNvbnN0IFtjbGllbnRlcywgc2V0Q2xpZW50ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCIpO1xyXG4gICAgc2V0Q2xpZW50ZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBlbnZpYXJGb3JtdWxhcmlvKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgbm9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9tZVwiKTtcclxuICAgIHZhciBlbmRlcmXDp28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZGVyZcOnb1wiKTtcclxuICAgIHZhciBjZXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNlcFwiKTtcclxuICAgIHZhciBuYXNjaW1lbnRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXNjaW1lbnRvXCIpO1xyXG4gICAgdmFyIHRlbGVmb25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWxlZm9uZVwiKTtcclxuXHJcbiAgICBjb25zdCBmb3JtdWxhcmlvID0ge1xyXG4gICAgICBub21lOiBub21lLnZhbHVlLFxyXG4gICAgICBlbmRlcmXDp286IGVuZGVyZcOnby52YWx1ZSxcclxuICAgICAgY2VwOiBjZXAudmFsdWUsXHJcbiAgICAgIG5hc2NpbWVudG86IG5hc2NpbWVudG8udmFsdWUsXHJcbiAgICAgIHRlbGVmb25lOiB0ZWxlZm9uZS52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiLCBmb3JtdWxhcmlvKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgPGgxPkZvcm11bMOhcmlvIGRlIGNhZGFzdHJvPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250YWluZXJ9PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtlbnZpYXJGb3JtdWxhcmlvfT5cclxuICAgICAgICAgIDxpbnB1dCBpZD1cIm5vbWVcIiBuYW1lPVwibm9tZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOb21lXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cImVuZGVyZcOnb1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbmRlcmXDp29cIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW5kZXJlw6dvXCJcclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0IGlkPVwiY2VwXCIgbmFtZT1cImNlcFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJDZXBcIj48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0IGlkPVwibmFzY2ltZW50b1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYXNjaW1lbnRvXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cInRlbGVmb25lXCJcclxuICAgICAgICAgICAgbmFtZT1cInRlbGVmb25lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGVmb25lXCJcclxuICAgICAgICAgID48L2lucHV0PntcIiBcIn1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIklOU0NSRVZBLVNFXCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==