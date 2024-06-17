/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _theme_themeToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/themeToggle.js */ \"./src/js/theme/themeToggle.js\");\n/* harmony import */ var _theme_sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme/sidebar.js */ \"./src/js/theme/sidebar.js\");\n/* harmony import */ var _theme_loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/loader.js */ \"./src/js/theme/loader.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_theme_loader_js__WEBPACK_IMPORTED_MODULE_2__.loaderJs)();\n  (0,_theme_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.sidebarJs)();\n  (0,_theme_themeToggle_js__WEBPACK_IMPORTED_MODULE_0__.themeToggleJs)();\n});\n\n//# sourceURL=webpack://bag-of-onions/./src/js/main.js?");

/***/ }),

/***/ "./src/js/theme/loader.js":
/*!********************************!*\
  !*** ./src/js/theme/loader.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loaderJs: () => (/* binding */ loaderJs)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction loaderJs() {\n  return _loaderJs.apply(this, arguments);\n}\nfunction _loaderJs() {\n  _loaderJs = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {\n    var currentPath, pathOperations;\n    return _regeneratorRuntime().wrap(function _callee7$(_context7) {\n      while (1) switch (_context7.prev = _context7.next) {\n        case 0:\n          currentPath = window.location.pathname;\n          pathOperations = {\n            '/qrcode': function () {\n              var _qrcode = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {\n                return _regeneratorRuntime().wrap(function _callee$(_context) {\n                  while (1) switch (_context.prev = _context.next) {\n                    case 0:\n                      _context.next = 2;\n                      return loadModuleAndCss(function () {\n                        return Promise.all(/*! import() | qrcode */[__webpack_require__.e(\"vendors\"), __webpack_require__.e(\"qrcode\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../modules/qrcode.js */ \"./src/js/modules/qrcode.js\"));\n                      }, '/css/modules/_qrcode.css');\n                    case 2:\n                    case \"end\":\n                      return _context.stop();\n                  }\n                }, _callee);\n              }));\n              function qrcode() {\n                return _qrcode.apply(this, arguments);\n              }\n              return qrcode;\n            }(),\n            \"/password-generator\": function passwordGenerator() {\n              __webpack_require__.e(/*! import() | password-generator */ \"password-generator\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../modules/password-generator.js */ \"./src/js/modules/password-generator.js\", 23)).then(function () {\n                loadCss(\"/css/modules/_password-generator.css\");\n              });\n            },\n            \"/screensize\": function () {\n              var _screensize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {\n                return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n                  while (1) switch (_context2.prev = _context2.next) {\n                    case 0:\n                      _context2.next = 2;\n                      return loadModuleAndCss(function () {\n                        return __webpack_require__.e(/*! import() | screensize */ \"screensize\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../modules/screensize.js */ \"./src/js/modules/screensize.js\", 23));\n                      }, \"/css/modules/_screensize.css\");\n                    case 2:\n                    case \"end\":\n                      return _context2.stop();\n                  }\n                }, _callee2);\n              }));\n              function screensize() {\n                return _screensize.apply(this, arguments);\n              }\n              return screensize;\n            }(),\n            \"/whatsmyip\": function () {\n              var _whatsmyip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {\n                return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n                  while (1) switch (_context3.prev = _context3.next) {\n                    case 0:\n                      _context3.next = 2;\n                      return loadModuleAndCss(function () {\n                        return __webpack_require__.e(/*! import() | ipgrabber */ \"ipgrabber\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../modules/ipgrabber.js */ \"./src/js/modules/ipgrabber.js\", 23));\n                      }, \"/css/modules/_ipgrabber.css\");\n                    case 2:\n                    case \"end\":\n                      return _context3.stop();\n                  }\n                }, _callee3);\n              }));\n              function whatsmyip() {\n                return _whatsmyip.apply(this, arguments);\n              }\n              return whatsmyip;\n            }(),\n            \"/requests\": function () {\n              var _requests = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {\n                return _regeneratorRuntime().wrap(function _callee4$(_context4) {\n                  while (1) switch (_context4.prev = _context4.next) {\n                    case 0:\n                      _context4.next = 2;\n                      return loadModuleAndCss(function () {\n                        return __webpack_require__.e(/*! import() | requestForm */ \"requestForm\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../modules/requestForm.js */ \"./src/js/modules/requestForm.js\", 23));\n                      }, \"/css/modules/_requests.css\");\n                    case 2:\n                    case \"end\":\n                      return _context4.stop();\n                  }\n                }, _callee4);\n              }));\n              function requests() {\n                return _requests.apply(this, arguments);\n              }\n              return requests;\n            }(),\n            \"/box-shadow\": function () {\n              var _boxShadow = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {\n                return _regeneratorRuntime().wrap(function _callee5$(_context5) {\n                  while (1) switch (_context5.prev = _context5.next) {\n                    case 0:\n                      _context5.next = 2;\n                      return loadModuleAndCss(function () {\n                        return __webpack_require__.e(/*! import() | boxshadow */ \"boxshadow\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../modules/boxshadow.js */ \"./src/js/modules/boxshadow.js\", 23));\n                      }, \"/css/modules/_boxshadow.css\");\n                    case 2:\n                    case \"end\":\n                      return _context5.stop();\n                  }\n                }, _callee5);\n              }));\n              function boxShadow() {\n                return _boxShadow.apply(this, arguments);\n              }\n              return boxShadow;\n            }(),\n            \"/lorem-ipsum\": function () {\n              var _loremIpsum = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {\n                return _regeneratorRuntime().wrap(function _callee6$(_context6) {\n                  while (1) switch (_context6.prev = _context6.next) {\n                    case 0:\n                      _context6.next = 2;\n                      return loadModuleAndCss(function () {\n                        return __webpack_require__.e(/*! import() | loremipsum */ \"loremipsum\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../modules/loremipsum.js */ \"./src/js/modules/loremipsum.js\", 23));\n                      }, \"/css/modules/_loremipsum.css\");\n                    case 2:\n                    case \"end\":\n                      return _context6.stop();\n                  }\n                }, _callee6);\n              }));\n              function loremIpsum() {\n                return _loremIpsum.apply(this, arguments);\n              }\n              return loremIpsum;\n            }()\n          };\n          if (!pathOperations[currentPath]) {\n            _context7.next = 11;\n            break;\n          }\n          _context7.prev = 3;\n          _context7.next = 6;\n          return pathOperations[currentPath]();\n        case 6:\n          _context7.next = 11;\n          break;\n        case 8:\n          _context7.prev = 8;\n          _context7.t0 = _context7[\"catch\"](3);\n          console.error(\"Failed to load module for path \".concat(currentPath), _context7.t0);\n        case 11:\n        case \"end\":\n          return _context7.stop();\n      }\n    }, _callee7, null, [[3, 8]]);\n  }));\n  return _loaderJs.apply(this, arguments);\n}\nfunction loadModuleAndCss(_x, _x2) {\n  return _loadModuleAndCss.apply(this, arguments);\n}\nfunction _loadModuleAndCss() {\n  _loadModuleAndCss = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(loadModule, cssUrl) {\n    var modules, spinner;\n    return _regeneratorRuntime().wrap(function _callee8$(_context8) {\n      while (1) switch (_context8.prev = _context8.next) {\n        case 0:\n          _context8.prev = 0;\n          modules = document.querySelectorAll(\".onion-module\");\n          spinner = document.querySelector(\".loader\");\n          _context8.next = 5;\n          return loadModule();\n        case 5:\n          loadCss(cssUrl);\n          setTimeout(function () {\n            modules.forEach(function (elm) {\n              elm.classList.add(\"loaded\");\n              spinner.style.display = \"none\";\n            });\n          }, 300);\n          _context8.next = 12;\n          break;\n        case 9:\n          _context8.prev = 9;\n          _context8.t0 = _context8[\"catch\"](0);\n          console.error(\"Error loading module or CSS: \".concat(cssUrl), _context8.t0);\n        case 12:\n        case \"end\":\n          return _context8.stop();\n      }\n    }, _callee8, null, [[0, 9]]);\n  }));\n  return _loadModuleAndCss.apply(this, arguments);\n}\nvar loadedCssFiles = new Set();\nfunction loadCss(url) {\n  if (!loadedCssFiles.has(url)) {\n    var link = document.createElement(\"link\");\n    link.href = url;\n    link.type = \"text/css\";\n    link.rel = \"stylesheet\";\n    document.head.appendChild(link);\n    loadedCssFiles.add(url);\n  }\n}\n\n//# sourceURL=webpack://bag-of-onions/./src/js/theme/loader.js?");

/***/ }),

/***/ "./src/js/theme/sidebar.js":
/*!*********************************!*\
  !*** ./src/js/theme/sidebar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sidebarJs: () => (/* binding */ sidebarJs)\n/* harmony export */ });\nfunction sidebarJs() {\n  var siteHeader = document.querySelector('.site-header__burger');\n  var sideBar = document.getElementById('sidebar');\n  var sidebarClose = document.querySelector('.sidebar__close-sidebar');\n  siteHeader.addEventListener(\"click\", function () {\n    sideBar.classList.toggle('active');\n    siteHeader.classList.toggle('active');\n    if (sidebarClose.classList.contains('left')) {\n      sidebarClose.classList.remove('left');\n      sidebarClose.classList.add('right');\n    } else {\n      sidebarClose.classList.add('left');\n      sidebarClose.classList.remove('right');\n    }\n  });\n  sidebarClose.addEventListener(\"click\", function () {\n    sideBar.classList.toggle('active');\n    siteHeader.classList.toggle('active');\n    if (sidebarClose.classList.contains('left')) {\n      sidebarClose.classList.remove('left');\n      sidebarClose.classList.add('right');\n    } else {\n      sidebarClose.classList.add('left');\n      sidebarClose.classList.remove('right');\n    }\n  });\n}\n\n//# sourceURL=webpack://bag-of-onions/./src/js/theme/sidebar.js?");

/***/ }),

/***/ "./src/js/theme/themeToggle.js":
/*!*************************************!*\
  !*** ./src/js/theme/themeToggle.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   themeToggleJs: () => (/* binding */ themeToggleJs)\n/* harmony export */ });\nfunction themeToggleJs() {\n  var storedTheme = localStorage.getItem('theme');\n  if (storedTheme) {\n    document.body.setAttribute('data-theme', storedTheme);\n    document.getElementById('toggler').checked = storedTheme === 'light';\n  }\n  document.getElementById('toggler').addEventListener('change', function (event) {\n    var theme = event.target.checked ? 'light' : 'dark';\n    document.body.setAttribute('data-theme', theme);\n    localStorage.setItem('theme', theme); // Store the theme in localStorage\n  });\n}\n\n//# sourceURL=webpack://bag-of-onions/./src/js/theme/themeToggle.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bag-of-onions/./src/scss/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/modules/" + chunkId + ".module.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "bag-of-onions:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbag_of_onions"] = self["webpackChunkbag_of_onions"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/main.scss");
/******/ 	
/******/ })()
;