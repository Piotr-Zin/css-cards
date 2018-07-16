/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/card-generator-behavior.js":
/*!****************************************!*\
  !*** ./src/card-generator-behavior.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_attributes_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-attributes-behavior */ \"./src/data-attributes-behavior.js\");\n\r\n\r\nfunction generateCard(firstName, lastName, description, color) {\r\n\r\n  var generatedHtml = `<div class=\"card\">\r\n                        <div class=\"avatar\"\r\n                            data-color=\"${color}\">\r\n                        <img src=\"assets/images/avatar.png\"\r\n                            alt=\"Avatar image\">\r\n                        </div>\r\n                        <div class=\"progress-animation\"></div>\r\n                        <div class=\"person-name\">\r\n                        <h3>${firstName} ${lastName}</h3>\r\n                        </div>\r\n                        <div class=\"horizontal-divider\"></div>\r\n                        <div class=\"description\">\r\n                        <section>\r\n                            ${description}\r\n                        </section>\r\n                        </div>\r\n                        <div class=\"bottom-panel\">\r\n                        <span>Date: </span>\r\n                        </div>\r\n                       </div>`;\r\n\r\n  return generatedHtml;\r\n}\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  var cardsContainer = document.querySelector('.cards-container');\r\n  if (cardsContainer) {\r\n    console.log('Adding cards...');\r\n\r\n    var loremIpsum =\r\n      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos consequuntur magni quam ullam distinctio asperiores veniam perspiciatis? Quod, esse. Quas similique consequuntur vero provident, placeat doloribus beatae nobis porro.';\r\n\r\n    var generatedCards = [];\r\n    generatedCards.push(generateCard('John', 'Doe', loremIpsum, '#BCBC1F'));\r\n    generatedCards.push(generateCard('Alice', 'Doe', loremIpsum, '#1FBC72'));\r\n    generatedCards.push(generateCard('Brian', 'Doe', loremIpsum, '#832DDB'));\r\n    generatedCards.push(generateCard('Mathew', 'Doe', loremIpsum, '#E349B2'));\r\n    generatedCards.push(generateCard('Steve', 'Doe', loremIpsum, '#3A812F'));\r\n\r\n    cardsContainer.innerHTML = cardsContainer.innerHTML + generatedCards.join();\r\n  } else {\r\n    console.error('Could not find the cards container element!');\r\n  }\r\n  \r\n  Object(_data_attributes_behavior__WEBPACK_IMPORTED_MODULE_0__[\"parseDataAttributes\"])();\r\n\r\n});\r\n\n\n//# sourceURL=webpack:///./src/card-generator-behavior.js?");

/***/ }),

/***/ "./src/data-attributes-behavior.js":
/*!*****************************************!*\
  !*** ./src/data-attributes-behavior.js ***!
  \*****************************************/
/*! exports provided: parseDataAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseDataAttributes\", function() { return parseDataAttributes; });\ndocument.addEventListener('DOMContentLoaded', parseDataAttributes);\r\n\r\nfunction parseDataAttributes() {\r\n  var avatarDivs = document.querySelectorAll('.avatar');\r\n\r\n  avatarDivs.forEach((div, index, li) => {\r\n    if (div.dataset.color) {\r\n      div.style = `background-color: ${div.dataset.color}`;\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/data-attributes-behavior.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/overlay-behavior.js":
/*!*********************************!*\
  !*** ./src/overlay-behavior.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var detailsOverlay = null;\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n  var avatarDivs = document.querySelectorAll('.avatar');\r\n\r\n  avatarDivs.forEach((div, index, li) => {\r\n\r\n    div.addEventListener('click', avatarClicked);\r\n    div.source = div;\r\n  });\r\n\r\n  detailsOverlay = document.querySelector('.fullscreen-overlay');\r\n\r\n  if (detailsOverlay) {\r\n    detailsOverlay.addEventListener('click', overlayClosed);\r\n  }\r\n\r\n});\r\n\r\nfunction avatarClicked(event) {\r\n  if (detailsOverlay) {\r\n    detailsOverlay.style = 'display: block';\r\n  }\r\n\r\n    console.log(event.currentTarget);\r\n    console.log(event.currentTarget.getAttribute('data-color'));\r\n\r\n  var personDetails = document.querySelector('.person-details');\r\n\r\n  if (personDetails) {\r\n    var parent = event.currentTarget.parentElement;\r\n\r\n    var parentClone = parent.cloneNode(true);\r\n    personDetails.appendChild(parentClone);\r\n  }\r\n}\r\n\r\nfunction overlayClosed(event) {\r\n  detailsOverlay.style = 'display: none';\r\n  var personDetails = document.querySelector('.person-details');\r\n  if (personDetails) {\r\n    while (personDetails.firstChild) {\r\n      personDetails.removeChild(personDetails.firstChild);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/overlay-behavior.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************!*\
  !*** multi ./src/card-generator-behavior.js ./src/data-attributes-behavior.js ./src/index.js ./src/overlay-behavior.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/card-generator-behavior.js */\"./src/card-generator-behavior.js\");\n__webpack_require__(/*! ./src/data-attributes-behavior.js */\"./src/data-attributes-behavior.js\");\n__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/overlay-behavior.js */\"./src/overlay-behavior.js\");\n\n\n//# sourceURL=webpack:///multi_./src/card-generator-behavior.js_./src/data-attributes-behavior.js_./src/index.js_./src/overlay-behavior.js?");

/***/ })

/******/ });