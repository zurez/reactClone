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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/element.class.js":
/*!******************************!*\
  !*** ./src/element.class.js ***!
  \******************************/
/*! exports provided: ElementNode, Elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ElementNode\", function() { return ElementNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Elements\", function() { return Elements; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ElementNode =\n/*#__PURE__*/\nfunction () {\n  function ElementNode(node) {\n    var childrenNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n    _classCallCheck(this, ElementNode);\n\n    this.id = node.id;\n    this.elementType = node.elementType;\n    this.elementAttributes = node.elementAttributes;\n    this.childrenNodes = childrenNodes;\n  }\n\n  _createClass(ElementNode, [{\n    key: \"getElement\",\n    value: function getElement() {\n      return {\n        id: this.id,\n        elementType: this.elementType,\n        elementAttributes: this.elementAttributes,\n        childrenNodes: this.childrenNodes\n      };\n    }\n  }, {\n    key: \"addChildren\",\n    value: function addChildren(childrenNode) {\n      this.childrenNodes.push(childrenNode);\n    }\n  }]);\n\n  return ElementNode;\n}();\n\nvar Elements =\n/*#__PURE__*/\nfunction () {\n  function Elements() {\n    var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Elements);\n\n    this.nodes = nodes;\n  }\n\n  _createClass(Elements, [{\n    key: \"addChildrenToNode\",\n    value: function addChildrenToNode(childrenNode, parentNode) {\n      this.nodes[parentNode.id].addChildren(childrenNode);\n    }\n  }, {\n    key: \"addToNode\",\n    value: function addToNode(node) {\n      this.nodes[node.id] = node;\n    }\n  }]);\n\n  return Elements;\n}();\n\n\n\n//# sourceURL=webpack:///./src/element.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _element_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.class */ \"./src/element.class.js\");\n/* harmony import */ var _render_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.class */ \"./src/render.class.js\");\n\n\nvar div = {\n  type: \"div\",\n  attributes: {\n    \"class\": \"foo bar\",\n    value: \"Hello\"\n  },\n  id: \"SomeUniqueValue\"\n};\nvar node = new _element_class__WEBPACK_IMPORTED_MODULE_0__[\"ElementNode\"](div);\nvar elements = new _element_class__WEBPACK_IMPORTED_MODULE_0__[\"Elements\"]();\nelements.addToNode(node);\n\nfunction run() {\n  Object(_render_class__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(node);\n}\n\nrun();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render.class.js":
/*!*****************************!*\
  !*** ./src/render.class.js ***!
  \*****************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction render(elementNode) {\n  var parentNode = elementNode.getElement();\n  var parent = createDocument(parentNode);\n  var childrenNodes = parentNode.childrenNodes;\n\n  for (var childNode in childrenNodes) {\n    var child = createDocument(childNode);\n    parent.appendChild(child);\n  }\n\n  console.log({\n    parent: parent,\n    parentNode: parentNode\n  });\n  window.document.getElementById(\"container\").append(parent);\n}\n\nfunction createDocument(node) {\n  console.log({\n    node: node\n  });\n  var domNode = document.createElement(node.type);\n  var attributes = node.attributes;\n\n  if (attributes) {\n    for (var attribute in attributes) {\n      var temp = document.createAttribute(attribute);\n      temp.value = attributes[attribute];\n      domNode.setAttributeNode(temp);\n    }\n  }\n\n  return domNode;\n}\n\nfunction renderChildren(childrenNodes, parentId) {}\n\n\n\n//# sourceURL=webpack:///./src/render.class.js?");

/***/ })

/******/ });