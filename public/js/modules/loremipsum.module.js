/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbag_of_onions"] = self["webpackChunkbag_of_onions"] || []).push([["loremipsum"],{

/***/ "./src/js/modules/loremipsum.js":
/*!**************************************!*\
  !*** ./src/js/modules/loremipsum.js ***!
  \**************************************/
/***/ (() => {

eval("// Array of sentences\nvar sentences = [\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\", \"Cras venenatis elementum nunc, vel maximus tellus dignissim nec.\", \"Donec sagittis bibendum lacus, ut tempor eros sollicitudin eu.\", \"Morbi pretium nibh ligula, vel vestibulum felis malesuada id.\", \"Proin mollis ornare dui, sed tristique augue finibus sit amet.\"];\n\n// Elements selection\nvar textElement = document.querySelector(\".lorem-ipsum__generated-text\");\nvar copyToClipboardButton = document.querySelector(\".lorem-ipsum__click-to-copy\");\nvar buttonConfirmations = document.querySelector(\".lorem-ipsum__button-confirmations\");\nvar generateTextButton = document.querySelector(\".lorem-ipsum__generate-text\");\n\n// Generate random sentence\nfunction getRandomSentence() {\n  var randomSentence = sentences[Math.floor(Math.random() * sentences.length)];\n  return randomSentence;\n}\n\n// Generate random paragraph\nfunction getRandomParagraph() {\n  var paragraph = \"\";\n  // Set the minimum number of words\n  var minimumCharacterLength = 250;\n  var firstSentence = true;\n  while (paragraph.length < minimumCharacterLength) {\n    if (firstSentence) {\n      paragraph = paragraph.concat(getRandomSentence());\n      firstSentence = false;\n    } else {\n      paragraph = paragraph.concat(\" \" + getRandomSentence());\n    }\n  }\n  console.log(paragraph);\n  return paragraph;\n}\n\n// Event listeners\ncopyToClipboardButton.addEventListener(\"click\", function () {\n  navigator.clipboard.writeText(getRandomParagraph()).then(function () {\n    return buttonConfirmations.innerHTML = \"Copied\";\n  })[\"catch\"](function (err) {\n    return buttonConfirmations.innerHTML = \"Copy failed\";\n  });\n});\ngenerateTextButton.addEventListener(\"click\", function () {\n  textElement.innerHTML = getRandomParagraph();\n});\n\n//# sourceURL=webpack://bag-of-onions/./src/js/modules/loremipsum.js?");

/***/ })

}]);