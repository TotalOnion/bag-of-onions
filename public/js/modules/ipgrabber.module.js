/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbag_of_onions"] = self["webpackChunkbag_of_onions"] || []).push([["ipgrabber"],{

/***/ "./src/js/modules/ipgrabber.js":
/*!*************************************!*\
  !*** ./src/js/modules/ipgrabber.js ***!
  \*************************************/
/***/ (() => {

eval("var ipAddress = document.querySelector('.ipgrabber__address');\nvar copyToClipboardButton = document.querySelector('.ipgrabber__click-to-copy');\nvar buttonConfirmations = document.querySelector('.ipgrabber__button-confirmations');\nfunction copyInfoToClipboard(combinedInfo) {\n  navigator.clipboard.writeText(combinedInfo).then(function () {\n    return buttonConfirmations.innerHTML = \"Copied\";\n  })[\"catch\"](function (err) {\n    return buttonConfirmations.innerHTML = \"Copy failed\";\n  });\n}\n\n// Event listeners\ncopyToClipboardButton.addEventListener('click', function () {\n  copyInfoToClipboard(ipAddress.innerHTML);\n});\n\n//# sourceURL=webpack://bag-of-onions/./src/js/modules/ipgrabber.js?");

/***/ })

}]);