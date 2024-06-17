/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbag_of_onions"] = self["webpackChunkbag_of_onions"] || []).push([["requestForm"],{

/***/ "./src/js/modules/requestForm.js":
/*!***************************************!*\
  !*** ./src/js/modules/requestForm.js ***!
  \***************************************/
/***/ (() => {

eval("document.getElementById('requestForm').addEventListener('submit', function (event) {\n  event.preventDefault();\n  var form = event.target;\n  var formData = new FormData(form);\n  var urlEncodedData = new URLSearchParams(formData);\n  fetch('/submit-request', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded' // Ensure this is set correctly\n    },\n    body: urlEncodedData\n  }).then(function (response) {\n    return response.text();\n  }).then(function (text) {\n    console.log(text);\n    form.style.display = 'none'; // Hide the form\n    document.getElementById('result').style.display = 'block'; // Show the thank you message and button\n  })[\"catch\"](function (err) {\n    return alert('Error submitting request: ' + err.message);\n  });\n});\nfunction submitAnotherRequest() {\n  document.getElementById('requestForm').style.display = 'block';\n  document.getElementById('result').style.display = 'none';\n  document.getElementById('requestForm').reset(); // Reset the form fields\n}\n\n//# sourceURL=webpack://bag-of-onions/./src/js/modules/requestForm.js?");

/***/ })

}]);