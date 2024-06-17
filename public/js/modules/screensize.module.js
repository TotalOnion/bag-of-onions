/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbag_of_onions"] = self["webpackChunkbag_of_onions"] || []).push([["screensize"],{

/***/ "./src/js/modules/screensize.js":
/*!**************************************!*\
  !*** ./src/js/modules/screensize.js ***!
  \**************************************/
/***/ (() => {

eval("// Elements selection\nvar viewportElement = document.querySelector('.screensize__viewport');\nvar screenSizeActualElement = document.querySelector('.screensize__actual');\nvar copyToClipboardButton = document.getElementById('copyToClipboard');\nvar buttonConfirmations = document.querySelector('.screensize__button-confirmations');\n\n// Updates the viewport size display\nfunction updateViewportDisplay() {\n  var viewportWidth = window.innerWidth;\n  var viewportHeight = window.innerHeight;\n  viewportElement.innerHTML = \"Viewport: \".concat(viewportWidth, \"x\").concat(viewportHeight);\n  return \"Viewport: \".concat(viewportWidth, \"x\").concat(viewportHeight);\n}\n\n// Updates the screen size display\nfunction updateScreenSizeDisplay() {\n  var screenWidth = window.screen.width;\n  var screenHeight = window.screen.height;\n  screenSizeActualElement.innerHTML = \"Actual Screensize: \".concat(screenWidth, \"x\").concat(screenHeight);\n  return \"Actual Screensize: \".concat(screenWidth, \"x\").concat(screenHeight);\n}\n\n// Combines viewport and screen size info\nfunction combineScreenInfo(viewportInfo, screenSizeInfo) {\n  return \"\".concat(viewportInfo, \"\\n\").concat(screenSizeInfo);\n}\n\n// Copies the combined screen information to clipboard\nfunction copyInfoToClipboard(combinedInfo) {\n  navigator.clipboard.writeText(combinedInfo).then(function () {\n    return buttonConfirmations.innerHTML = \"Copied\";\n  })[\"catch\"](function (err) {\n    return buttonConfirmations.innerHTML = \"Copy failed\";\n  });\n}\n\n// Event listeners\ncopyToClipboardButton.addEventListener('click', function () {\n  var viewportInfo = updateViewportDisplay();\n  var screenSizeInfo = updateScreenSizeDisplay();\n  var combinedInfo = combineScreenInfo(viewportInfo, screenSizeInfo);\n  copyInfoToClipboard(combinedInfo);\n});\nwindow.addEventListener('resize', function () {\n  updateViewportDisplay();\n});\n\n// Initial display updates\nupdateViewportDisplay();\nupdateScreenSizeDisplay();\n\n//# sourceURL=webpack://bag-of-onions/./src/js/modules/screensize.js?");

/***/ })

}]);