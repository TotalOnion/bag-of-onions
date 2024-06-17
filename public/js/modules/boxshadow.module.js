/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbag_of_onions"] = self["webpackChunkbag_of_onions"] || []).push([["boxshadow"],{

/***/ "./src/js/modules/boxshadow.js":
/*!*************************************!*\
  !*** ./src/js/modules/boxshadow.js ***!
  \*************************************/
/***/ (() => {

eval("var shadowBox = document.querySelector('.boxshadow__view-window-shadow-box');\nvar cssOutput = document.getElementById('cssOutput');\ndocument.querySelectorAll('.boxshadow__controls input').forEach(function (input) {\n  input.addEventListener('input', function () {\n    var hOffset = document.getElementById('horizontal-offset').value;\n    var vOffset = document.getElementById('vertical-offset').value;\n    var blurRadius = document.getElementById('blur-radius').value;\n    var spreadRadius = document.getElementById('spread-radius').value;\n    var color = document.getElementById('color-picker').value;\n    var boxShadowCss = \"\".concat(hOffset, \"px \").concat(vOffset, \"px \").concat(blurRadius, \"px \").concat(spreadRadius, \"px \").concat(color);\n    shadowBox.style.boxShadow = boxShadowCss;\n    cssOutput.textContent = \"box-shadow: \".concat(boxShadowCss, \";\");\n  });\n});\ncssOutput.addEventListener('click', function () {\n  // Copy the CSS output text to the clipboard\n  var range = document.createRange();\n  range.selectNode(cssOutput);\n  window.getSelection().removeAllRanges(); // Clear any existing selection\n  window.getSelection().addRange(range); // Select the text\n  try {\n    document.execCommand('copy'); // Copy the text to the clipboard\n    window.getSelection().removeAllRanges(); // Deselect the text\n\n    // Add the active class for the success message\n    cssOutput.classList.add('active');\n    setTimeout(function () {\n      cssOutput.classList.remove('active');\n    }, 2000); // Remove the active class after 2 seconds\n  } catch (err) {\n    console.error('Failed to copy text: ', err);\n  }\n});\n\n//# sourceURL=webpack://bag-of-onions/./src/js/modules/boxshadow.js?");

/***/ })

}]);