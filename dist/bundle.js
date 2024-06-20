/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

}

body {
    background-color: cornflowerblue;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: grid;
    grid-template: 1fr 7fr / 1fr;
    border: black solid 1px;
}

#buttonContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: max-content;
    border: black solid 1px;
    grid-row: 1 / 2;
    
}

#projectsContainer {
    border: black solid 1px;
    grid-row: 2 / 3;
    overflow: hidden;
    width: 100%;
    height: 90%;
    display: grid

}

button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #007BFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.newProjectBtn, .newToDoListBtn {
    grid-column: 1;

}


.projectDiv, .todolistDiv {
    padding: 5px 10px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
}

.projectDiv {
    height: max(250px, fit-content);
    display: flex;
    flex-direction: column;
    width: 25%;
    margin-bottom: 20px;
    text-align: center;
    border:solid 5px red;
}


.todolistDiv {
    height: max(100px, max-content);
    width:  max(100px, max-content);
    border:solid 5px green;
    margin-bottom: 5px;

}


.projectTitle {
    height: max(10px, max-content);
    width: 100%;
    border:solid 5px purple;

}

.projectToDoList {
    border:solid 5px black;
}

.projectBtnBlue {
    background-color: aqua;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;;AAEb;;AAEA;IACI,gCAAgC;IAChC,mBAAmB;IACnB,6BAA6B;IAC7B,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,4BAA4B;IAC5B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;;AAEnB;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,WAAW;IACX;;AAEJ;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,sCAAsC;AAC1C;;AAEA;IACI,cAAc;;AAElB;;;AAGA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,wCAAwC;AAC5C;;AAEA;IACI,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;AACxB;;;AAGA;IACI,+BAA+B;IAC/B,+BAA+B;IAC/B,sBAAsB;IACtB,kBAAkB;;AAEtB;;;AAGA;IACI,8BAA8B;IAC9B,WAAW;IACX,uBAAuB;;AAE3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n\n}\n\nbody {\n    background-color: cornflowerblue;\n    align-items: center;\n    justify-content: space-around;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n    display: grid;\n    grid-template: 1fr 7fr / 1fr;\n    border: black solid 1px;\n}\n\n#buttonContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    width: 100%;\n    height: max-content;\n    border: black solid 1px;\n    grid-row: 1 / 2;\n    \n}\n\n#projectsContainer {\n    border: black solid 1px;\n    grid-row: 2 / 3;\n    overflow: hidden;\n    width: 100%;\n    height: 90%;\n    display: grid\n\n}\n\nbutton {\n    padding: 10px 20px;\n    font-size: 16px;\n    font-weight: bold;\n    color: white;\n    background-color: #007BFF;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    text-align: center;\n    text-decoration: none;\n    transition: background-color 0.3s ease;\n}\n\n.newProjectBtn, .newToDoListBtn {\n    grid-column: 1;\n\n}\n\n\n.projectDiv, .todolistDiv {\n    padding: 5px 10px;\n    background-color: #f9f9f9;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  \n}\n\n.projectDiv {\n    height: max(250px, fit-content);\n    display: flex;\n    flex-direction: column;\n    width: 25%;\n    margin-bottom: 20px;\n    text-align: center;\n    border:solid 5px red;\n}\n\n\n.todolistDiv {\n    height: max(100px, max-content);\n    width:  max(100px, max-content);\n    border:solid 5px green;\n    margin-bottom: 5px;\n\n}\n\n\n.projectTitle {\n    height: max(10px, max-content);\n    width: 100%;\n    border:solid 5px purple;\n\n}\n\n.projectToDoList {\n    border:solid 5px black;\n}\n\n.projectBtnBlue {\n    background-color: aqua;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dialog.js":
/*!***********************!*\
  !*** ./src/dialog.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dialogFunctions: () => (/* binding */ dialogFunctions)
/* harmony export */ });

const dialogFunctions = (function () {
    const dialog = document.getElementById("dialog");


    function showDialog() {
        dialog.showModal();
    }

    function closeDialog() {
        dialog.close();
    }

    return { showDialog, closeDialog }

})();





/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dom: () => (/* binding */ dom)
/* harmony export */ });
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function.js */ "./src/function.js");
// Import 
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////
const dom = (function() {


    // Variables
    ////////////////////////////////////////////////////////////
    const main = document.getElementById("main");
    const projectsDiv = document.getElementById("projectsDiv");
    ////////////////////////////////////////////////////////////
    
    
    function createProjectDiv (project) {


        // Create element
        ////////////////////////////////////////////////////////////
        const projectDiv = document.createElement("div");
        const projectTitle = document.createElement("div");  
        const projectToDoList = document.createElement("div");  
        const removeProjectBtn = document.createElement("button");
        ////////////////////////////////////////////////////////////
        

        // Append
        ////////////////////////////////////////////////////////////
        main.appendChild(projectDiv);
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectToDoList);
        projectDiv.appendChild(removeProjectBtn);
        ////////////////////////////////////////////////////////////


        // ClassList and ID
        ////////////////////////////////////////////////////////////
        projectDiv.classList.add("projectDiv");
        projectDiv.id = project.title;
        projectTitle.classList.add("projectTitle");
        projectToDoList.classList.add("projectToDoList");
        projectToDoList.id = project.title;
        removeProjectBtn.id = project.title;
        ////////////////////////////////////////////////////////////

        

        // TextContent
        ////////////////////////////////////////////////////////////
        projectTitle.textContent = project.title;
        removeProjectBtn.textContent = "REMOVE";
        ////////////////////////////////////////////////////////////

        
        // Remove project button
        ////////////////////////////////////////////////////////////
        removeProjectBtn.addEventListener('click', () => {
            
                projectDiv.remove();
                
                _function_js__WEBPACK_IMPORTED_MODULE_0__.manageProjects.remove(project);

                const array = Array.from(document.getElementsByClassName('projectBtn'));
                for ( let i = 0; i < array.length; i++ ) {
                    if (array[i].textContent == project.title)
                    array[i].remove();
                };
                    
    
            })
        ////////////////////////////////////////////////////////////
    
        console.log(project.title);

        return projectToDoList;

        };

    
    
    function createTaskDiv (task, container){
        const todolistDiv = document.createElement("div");
        const divOfSelectedProject = document.getElementById(container.title);
   
        console.log(container.title);
;        console.log(divOfSelectedProject)

        divOfSelectedProject.appendChild(todolistDiv);
   


        todolistDiv.classList.add("todolistDiv")

        todolistDiv.innerHTML = `${task.title}<br>${task.description}`;
        
        todolistDiv.classList.add("todolistDiv");
    }

    function createProjectsBtns (project) {
        const btn = document.createElement("button");

        btn.type = "button";
        btn.classList.add("projectBtn");
        btn.textContent = project.title;

        console.log(btn)
        
        btn.addEventListener('click', function () {
            console.log(this)

            btn.classList.add("projectBtnBlue");
            
        })

        
                    

        console.log(btn)

        projectsDiv.appendChild(btn);

        return btn;
    }

    function unselectButton (button) {
        button.classList.remove("projectBtnBlue");

        }

return { createProjectDiv, createTaskDiv, createProjectsBtns, unselectButton }

})()

/////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////




/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   manageProjects: () => (/* binding */ manageProjects)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
// Import 
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////


// Frame work for a project
////////////////////////////////////////////////////////////
class Project {
    constructor(title) {
        this.title = title;
        this.toDoList = [];
    };
    addTaskToProject(task) { 
        this.toDoList.push(task);
    }
}
////////////////////////////////////////////////////////////


// Frame work for a task
////////////////////////////////////////////////////////////
class Task {
    constructor(title, description) {
            this.title = title;
            this.description = description;
    }
}
////////////////////////////////////////////////////////////


// Factory function
/////////////////////////////////////////////////////////////////////////////////////
const create =  (function(){


    // Create a project 
    ////////////////////////////////////////////////////////////
    function project (name) {
        const projectName = name;
        const userProject = new Project(projectName);

        console.log(userProject);

        return userProject;
    }
    ////////////////////////////////////////////////////////////


    // Create a task
    ////////////////////////////////////////////////////////////
    function task (title, description) {
        const userTask = new Task(title, description);

        return userTask;
    }
    ////////////////////////////////////////////////////////////


    return { project, task }
})()
/////////////////////////////////////////////////////////////////////////////////////


// Factory Function
/////////////////////////////////////////////////////////////////////////////////////
    const manageProjects = (function () {


        // Variables
        ////////////////////////////////////////////////////////////
        const projects = [];
        // const array = Array.from(document.getElementsByClassName('projectBtn'));
        // ////////////////////////////////////////////////////////////


        // Store the project
        ////////////////////////////////////////////////////////////
        function store (project) {
            projects.push(project);

            console.log(project);
            console.log(projects);
            }  
        ////////////////////////////////////////////////////////////


        // Delete the project
        ////////////////////////////////////////////////////////////
        function remove (project) {
            console.log(projects);
            console.log(projects.length);

            const projectIndex = projects.indexOf(project);
            projects.splice(projectIndex);


            console.log(projects);
            console.log(projects.length);
        }
        ////////////////////////////////////////////////////////////

        // Select the project
        ////////////////////////////////////////////////////////////
        function select (btn) {


            // const array = Array.from(document.getElementsByClassName('projectBtn'));
            // let project = "";
            // let button = "";
 
            // console.log(btn)
        

           

            // for ( let i = 0; i < projects.length; i++ ){
            //     if (( btn.textContent == projects[i].title && btn.classList.contains("projectBtnBlue"))|| projects[i].title == "default" ) {
                    
            //         project = projects[i];
            //         button = btn;

            //         console.log(project);
            //         console.log(btn);

            //         const index = array.indexOf(btn);
            //         const arrayWithOutPressedBtn = array.splice(index, 1);

            //         console.log(index)
            //         console.log(arrayWithOutPressedBtn) 

            //         for ( let k = 0; k < arrayWithOutPressedBtn.length; k++ ){ // prevent secondly presssed to turn blue after pressing the first button
            //             arrayWithOutPressedBtn[k].classList.remove("projectBtnBlue");
            //             console.log(array[k]);
            //         } 
            //     }                                  
            // }

            // return [ project, button ];
                            //    
            
            const array = Array.from(document.getElementsByClassName('projectBtn'));
        
                let project = "";
                let button = "";
                let condition = "True";
        
                for ( let i = 0; i < projects.length; i++ ){
                    if ( condition == "True" ) {
                        for  ( let j = 0; j < array.length; j++ ) {
                            if ( (array[j].classList.contains("projectBtnBlue") && array[j].textContent == projects[i].title) || projects[i].title == "default" ) {
                                
                                project = projects[i];
                                button = array[j];
    
                                console.log(array[j])

                                for ( let k = 0; k < array.length; k++ ){ // prevent secondly presssed to turn blue after pressing the first button
                                    array[k].classList.remove("projectBtnBlue");
                                    console.log(array[k]);
                                }
    
                                condition = "False";
                            }                        
                        } 
                    }  
                }

                console.log(projects)
                console.log(project)
                console.log(button)
                return [ project, button ];
                
        }
        ////////////////////////////////////////////////////////////


        // Add task to the project
        ////////////////////////////////////////////////////////////
        function addTask (project, task) {
            console.log(project);
            console.log(task)


            project.addTaskToProject(task);
        }
        ////////////////////////////////////////////////////////////


        // Check the number of projects
        ////////////////////////////////////////////////////////////
        function check() {
            let length = ""

            if (projects.length == 0 ) {
                length = "empty";

                return length;
            }
            else {
                length = "not empty"

                return length;
            }
        }
        ////////////////////////////////////////////////////////////


        const array = Array.from(document.getElementsByClassName('projectBtn'));
        for ( let i = 0; i < array.length; i++ ){

        }

                   
                
        

        
        
    

    return { store, remove, select, addTask, check };
})()
////////////////////////////////////////////////////////////


// Export
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////


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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function.js */ "./src/function.js");
/* harmony import */ var _dialog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.js */ "./src/dialog.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
// Import
////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////

const projectAssembly = (function () {

    function projectAssemblyKit (name) {

    // Create a new project
    ////////////////////////////////////////////////////////
    const createdProject = _function_js__WEBPACK_IMPORTED_MODULE_1__.create.project(name);
    ////////////////////////////////////////////////////////////


    // Store the project in an array
    ////////////////////////////////////////////////////////////
    _function_js__WEBPACK_IMPORTED_MODULE_1__.manageProjects.store(createdProject);
    ////////////////////////////////////////////////////////////


    // Create project div and project buttons
    ////////////////////////////////////////////////////////////
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.dom.createProjectDiv(createdProject);
    _dom_js__WEBPACK_IMPORTED_MODULE_3__.dom.createProjectsBtns(createdProject);
    ////////////////////////////////////////////////////////////


    // 
    ////////////////////////////////////////////////////////////
    
    ////////////////////////////////////////////////////////////

    }

    return { projectAssemblyKit }

    })()




// Factory function
/////////////////////////////////////////////////////////////////////////////////////
const execute = (function () {


    // Variables
    ////////////////////////////////////////////////////////////
    const newProjectBtn = document.getElementById("newProjectBtn");
    const newToDoListBtn = document.getElementById("newToDoListBtn");
    const submitBtn = document.getElementById("submit");
    const closeDialogBtn = document.getElementById("closeDialog");
    ////////////////////////////////////////////////////////////


    // Button that creates a new project
    ////////////////////////////////////////////////////////////
    newProjectBtn.addEventListener('click', () => {

    // Name a project
    ////////////////////////////////////////////////////////
    const name = prompt("Name your project");
    ////////////////////////////////////////////////////////


    // Create project
    ////////////////////////////////////////////////////////
    projectAssembly.projectAssemblyKit(name);
    ////////////////////////////////////////////////////////

    })
    ////////////////////////////////////////////////////////////
    
    
    

    // Button that shows the dialog
    ////////////////////////////////////////////////////////////
    newToDoListBtn.addEventListener('click', () => {
        

        // Show the dialog
        ////////////////////////////////////////////////////////////
        _dialog_js__WEBPACK_IMPORTED_MODULE_2__.dialogFunctions.showDialog();
        ////////////////////////////////////////////////////////////


      
        
    })
    ////////////////////////////////////////////////////////////


    // Button that creates a task
    ////////////////////////////////////////////////////////////
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

         // Create a default project 
        ////////////////////////////////////////////////////////////
        const length = _function_js__WEBPACK_IMPORTED_MODULE_1__.manageProjects.check();

        if (length == "empty") {
            const name = "default";

            projectAssembly.projectAssemblyKit(name);
        }        
        ////////////////////////////////////////////////////////////


        // Create a task//
        ///////////////////////////////////////////////////////////
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        const createdTask = _function_js__WEBPACK_IMPORTED_MODULE_1__.create.task(title, description);
        ////////////////////////////////////////////////////////////


        // Clarify selected project and project button
        ////////////////////////////////////////////////////////////
        const selected = _function_js__WEBPACK_IMPORTED_MODULE_1__.manageProjects.select(createdTask);
        const project = selected[0];
        const button = selected[1];

        console.log(project)
        console.log(button)
        ////////////////////////////////////////////////////////////
        

        // Add task to project
        ////////////////////////////////////////////////////////////
        _function_js__WEBPACK_IMPORTED_MODULE_1__.manageProjects.addTask(project, createdTask);
        ////////////////////////////////////////////////////////////
        

        // Reset the selected button
        ////////////////////////////////////////////////////////////
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.dom.unselectButton(button);
        ////////////////////////////////////////////////////////////


        // Create a div for task
        ////////////////////////////////////////////////////////////
        _dom_js__WEBPACK_IMPORTED_MODULE_3__.dom.createTaskDiv(createdTask, project);
        ////////////////////////////////////////////////////////////

        
        //Close the dialog
        ////////////////////////////////////////////////////////////
        _dialog_js__WEBPACK_IMPORTED_MODULE_2__.dialogFunctions.closeDialog();
        ////////////////////////////////////////////////////////////
    })
    ////////////////////////////////////////////////////////////


    // Button that closes the dialog
    ////////////////////////////////////////////////////////////
    closeDialogBtn.addEventListener('click', () => {
        _dialog_js__WEBPACK_IMPORTED_MODULE_2__.dialogFunctions.closeDialog();
    })
    ////////////////////////////////////////////////////////////


    // Button that removes the project
    ////////////////////////////////////////////////////////////
    



    })()
/////////////////////////////////////////////////////////////////////////////////////







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHVEQUFlO0FBQ3ZCOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHdEQUFjOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLGdEQUFNO0FBQ2xDOzs7QUFHQTtBQUNBO0FBQ0EseUJBQXlCLHdEQUFjO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsd0RBQWM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx3Q0FBRztBQUNYOzs7QUFHQTtBQUNBO0FBQ0EsUUFBUSx3Q0FBRztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWU7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWU7QUFDdkIsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlhbG9nLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcblxufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgN2ZyIC8gMWZyO1xuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xufVxuXG4jYnV0dG9uQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgXG59XG5cbiNwcm9qZWN0c0NvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgZGlzcGxheTogZ3JpZFxuXG59XG5cbmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0JGRjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuXG4ubmV3UHJvamVjdEJ0biwgLm5ld1RvRG9MaXN0QnRuIHtcbiAgICBncmlkLWNvbHVtbjogMTtcblxufVxuXG5cbi5wcm9qZWN0RGl2LCAudG9kb2xpc3REaXYge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgIFxufVxuXG4ucHJvamVjdERpdiB7XG4gICAgaGVpZ2h0OiBtYXgoMjUwcHgsIGZpdC1jb250ZW50KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDI1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6c29saWQgNXB4IHJlZDtcbn1cblxuXG4udG9kb2xpc3REaXYge1xuICAgIGhlaWdodDogbWF4KDEwMHB4LCBtYXgtY29udGVudCk7XG4gICAgd2lkdGg6ICBtYXgoMTAwcHgsIG1heC1jb250ZW50KTtcbiAgICBib3JkZXI6c29saWQgNXB4IGdyZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxufVxuXG5cbi5wcm9qZWN0VGl0bGUge1xuICAgIGhlaWdodDogbWF4KDEwcHgsIG1heC1jb250ZW50KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6c29saWQgNXB4IHB1cnBsZTtcblxufVxuXG4ucHJvamVjdFRvRG9MaXN0IHtcbiAgICBib3JkZXI6c29saWQgNXB4IGJsYWNrO1xufVxuXG4ucHJvamVjdEJ0bkJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTOztBQUViOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1g7O0FBRUo7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYzs7QUFFbEI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7O0FBR0E7SUFDSSwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixrQkFBa0I7O0FBRXRCOzs7QUFHQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciA3ZnIgLyAxZnI7XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xcbn1cXG5cXG4jYnV0dG9uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBcXG59XFxuXFxuI3Byb2plY3RzQ29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBkaXNwbGF5OiBncmlkXFxuXFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkZGO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5uZXdQcm9qZWN0QnRuLCAubmV3VG9Eb0xpc3RCdG4ge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG5cXG59XFxuXFxuXFxuLnByb2plY3REaXYsIC50b2RvbGlzdERpdiB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7ICBcXG59XFxuXFxuLnByb2plY3REaXYge1xcbiAgICBoZWlnaHQ6IG1heCgyNTBweCwgZml0LWNvbnRlbnQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjpzb2xpZCA1cHggcmVkO1xcbn1cXG5cXG5cXG4udG9kb2xpc3REaXYge1xcbiAgICBoZWlnaHQ6IG1heCgxMDBweCwgbWF4LWNvbnRlbnQpO1xcbiAgICB3aWR0aDogIG1heCgxMDBweCwgbWF4LWNvbnRlbnQpO1xcbiAgICBib3JkZXI6c29saWQgNXB4IGdyZWVuO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuXFxufVxcblxcblxcbi5wcm9qZWN0VGl0bGUge1xcbiAgICBoZWlnaHQ6IG1heCgxMHB4LCBtYXgtY29udGVudCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6c29saWQgNXB4IHB1cnBsZTtcXG5cXG59XFxuXFxuLnByb2plY3RUb0RvTGlzdCB7XFxuICAgIGJvcmRlcjpzb2xpZCA1cHggYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0QnRuQmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5jb25zdCBkaWFsb2dGdW5jdGlvbnMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nXCIpO1xuXG5cbiAgICBmdW5jdGlvbiBzaG93RGlhbG9nKCkge1xuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VEaWFsb2coKSB7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNob3dEaWFsb2csIGNsb3NlRGlhbG9nIH1cblxufSkoKTtcblxuXG5leHBvcnQgeyBkaWFsb2dGdW5jdGlvbnMgfTtcbiIsIi8vIEltcG9ydCBcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuaW1wb3J0IHsgbWFuYWdlUHJvamVjdHMgfSBmcm9tICcuL2Z1bmN0aW9uLmpzJztcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgZG9tID0gKGZ1bmN0aW9uKCkge1xuXG5cbiAgICAvLyBWYXJpYWJsZXNcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c0RpdlwiKTtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBcbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGl2IChwcm9qZWN0KSB7XG5cblxuICAgICAgICAvLyBDcmVhdGUgZWxlbWVudFxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICBcbiAgICAgICAgY29uc3QgcHJvamVjdFRvRG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgIFxuICAgICAgICBjb25zdCByZW1vdmVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIFxuXG4gICAgICAgIC8vIEFwcGVuZFxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUb0RvTGlzdCk7XG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ0bik7XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAgICAgLy8gQ2xhc3NMaXN0IGFuZCBJRFxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpdlwiKTtcbiAgICAgICAgcHJvamVjdERpdi5pZCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRpdGxlXCIpO1xuICAgICAgICBwcm9qZWN0VG9Eb0xpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RUb0RvTGlzdFwiKTtcbiAgICAgICAgcHJvamVjdFRvRG9MaXN0LmlkID0gcHJvamVjdC50aXRsZTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5pZCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIFxuXG4gICAgICAgIC8vIFRleHRDb250ZW50XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJSRU1PVkVcIjtcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICAgICAgXG4gICAgICAgIC8vIFJlbW92ZSBwcm9qZWN0IGJ1dHRvblxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3REaXYucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbWFuYWdlUHJvamVjdHMucmVtb3ZlKHByb2plY3QpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RCdG4nKSk7XG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXS50ZXh0Q29udGVudCA9PSBwcm9qZWN0LnRpdGxlKVxuICAgICAgICAgICAgICAgICAgICBhcnJheVtpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRpdGxlKTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdFRvRG9MaXN0O1xuXG4gICAgICAgIH07XG5cbiAgICBcbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRGl2ICh0YXNrLCBjb250YWluZXIpe1xuICAgICAgICBjb25zdCB0b2RvbGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGRpdk9mU2VsZWN0ZWRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyLnRpdGxlKTtcbiAgIFxuICAgICAgICBjb25zb2xlLmxvZyhjb250YWluZXIudGl0bGUpO1xuOyAgICAgICAgY29uc29sZS5sb2coZGl2T2ZTZWxlY3RlZFByb2plY3QpXG5cbiAgICAgICAgZGl2T2ZTZWxlY3RlZFByb2plY3QuYXBwZW5kQ2hpbGQodG9kb2xpc3REaXYpO1xuICAgXG5cblxuICAgICAgICB0b2RvbGlzdERpdi5jbGFzc0xpc3QuYWRkKFwidG9kb2xpc3REaXZcIilcblxuICAgICAgICB0b2RvbGlzdERpdi5pbm5lckhUTUwgPSBgJHt0YXNrLnRpdGxlfTxicj4ke3Rhc2suZGVzY3JpcHRpb259YDtcbiAgICAgICAgXG4gICAgICAgIHRvZG9saXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvbGlzdERpdlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0c0J0bnMgKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ0blwiKTtcbiAgICAgICAgYnRuLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICBjb25zb2xlLmxvZyhidG4pXG4gICAgICAgIFxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKVxuXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RCdG5CbHVlXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIGNvbnNvbGUubG9nKGJ0bilcblxuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4gICAgICAgIHJldHVybiBidG47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5zZWxlY3RCdXR0b24gKGJ1dHRvbikge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3RCdG5CbHVlXCIpO1xuXG4gICAgICAgIH1cblxucmV0dXJuIHsgY3JlYXRlUHJvamVjdERpdiwgY3JlYXRlVGFza0RpdiwgY3JlYXRlUHJvamVjdHNCdG5zLCB1bnNlbGVjdEJ1dHRvbiB9XG5cbn0pKClcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbmV4cG9ydCB7IGRvbSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuIiwiLy8gSW1wb3J0IFxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5pbXBvcnQgeyBkb20gfSBmcm9tICcuL2RvbS5qcyc7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vLyBGcmFtZSB3b3JrIGZvciBhIHByb2plY3Rcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50b0RvTGlzdCA9IFtdO1xuICAgIH07XG4gICAgYWRkVGFza1RvUHJvamVjdCh0YXNrKSB7IFxuICAgICAgICB0aGlzLnRvRG9MaXN0LnB1c2godGFzayk7XG4gICAgfVxufVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuLy8gRnJhbWUgd29yayBmb3IgYSB0YXNrXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vLyBGYWN0b3J5IGZ1bmN0aW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBjcmVhdGUgPSAgKGZ1bmN0aW9uKCl7XG5cblxuICAgIC8vIENyZWF0ZSBhIHByb2plY3QgXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgZnVuY3Rpb24gcHJvamVjdCAobmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG5hbWU7XG4gICAgICAgIGNvbnN0IHVzZXJQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJQcm9qZWN0KTtcblxuICAgICAgICByZXR1cm4gdXNlclByb2plY3Q7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAvLyBDcmVhdGUgYSB0YXNrXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgZnVuY3Rpb24gdGFzayAodGl0bGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IHVzZXJUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uKTtcblxuICAgICAgICByZXR1cm4gdXNlclRhc2s7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICByZXR1cm4geyBwcm9qZWN0LCB0YXNrIH1cbn0pKClcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vLyBGYWN0b3J5IEZ1bmN0aW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgY29uc3QgbWFuYWdlUHJvamVjdHMgPSAoZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgICAgLy8gVmFyaWFibGVzXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICAgICAgICAvLyBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdEJ0bicpKTtcbiAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuICAgICAgICAvLyBTdG9yZSB0aGUgcHJvamVjdFxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgZnVuY3Rpb24gc3RvcmUgKHByb2plY3QpIHtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgICAgICAgICAgfSAgXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAgICAgLy8gRGVsZXRlIHRoZSBwcm9qZWN0XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICBmdW5jdGlvbiByZW1vdmUgKHByb2plY3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4KTtcblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIC8vIFNlbGVjdCB0aGUgcHJvamVjdFxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgZnVuY3Rpb24gc2VsZWN0IChidG4pIHtcblxuXG4gICAgICAgICAgICAvLyBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdEJ0bicpKTtcbiAgICAgICAgICAgIC8vIGxldCBwcm9qZWN0ID0gXCJcIjtcbiAgICAgICAgICAgIC8vIGxldCBidXR0b24gPSBcIlwiO1xuIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYnRuKVxuICAgICAgICBcblxuICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gZm9yICggbGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgICAgIC8vICAgICBpZiAoKCBidG4udGV4dENvbnRlbnQgPT0gcHJvamVjdHNbaV0udGl0bGUgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RCdG5CbHVlXCIpKXx8IHByb2plY3RzW2ldLnRpdGxlID09IFwiZGVmYXVsdFwiICkge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICAgICAgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuICAgICAgICAgICAgLy8gICAgICAgICBidXR0b24gPSBidG47XG5cbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGJ0bik7XG5cbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKGJ0bik7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGFycmF5V2l0aE91dFByZXNzZWRCdG4gPSBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhhcnJheVdpdGhPdXRQcmVzc2VkQnRuKSBcblxuICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKCBsZXQgayA9IDA7IGsgPCBhcnJheVdpdGhPdXRQcmVzc2VkQnRuLmxlbmd0aDsgaysrICl7IC8vIHByZXZlbnQgc2Vjb25kbHkgcHJlc3NzZWQgdG8gdHVybiBibHVlIGFmdGVyIHByZXNzaW5nIHRoZSBmaXJzdCBidXR0b25cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFycmF5V2l0aE91dFByZXNzZWRCdG5ba10uY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3RCdG5CbHVlXCIpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlba10pO1xuICAgICAgICAgICAgLy8gICAgICAgICB9IFxuICAgICAgICAgICAgLy8gICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIHJldHVybiBbIHByb2plY3QsIGJ1dHRvbiBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdEJ0bicpKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBcIlwiO1xuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb24gPSBcIlRydWVcIjtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBjb25kaXRpb24gPT0gXCJUcnVlXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgICggbGV0IGogPSAwOyBqIDwgYXJyYXkubGVuZ3RoOyBqKysgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCAoYXJyYXlbal0uY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdEJ0bkJsdWVcIikgJiYgYXJyYXlbal0udGV4dENvbnRlbnQgPT0gcHJvamVjdHNbaV0udGl0bGUpIHx8IHByb2plY3RzW2ldLnRpdGxlID09IFwiZGVmYXVsdFwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdCA9IHByb2plY3RzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24gPSBhcnJheVtqXTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlbal0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGsgPSAwOyBrIDwgYXJyYXkubGVuZ3RoOyBrKysgKXsgLy8gcHJldmVudCBzZWNvbmRseSBwcmVzc3NlZCB0byB0dXJuIGJsdWUgYWZ0ZXIgcHJlc3NpbmcgdGhlIGZpcnN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlba10uY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3RCdG5CbHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJyYXlba10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbiA9IFwiRmFsc2VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbilcbiAgICAgICAgICAgICAgICByZXR1cm4gWyBwcm9qZWN0LCBidXR0b24gXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgICAgIC8vIEFkZCB0YXNrIHRvIHRoZSBwcm9qZWN0XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICBmdW5jdGlvbiBhZGRUYXNrIChwcm9qZWN0LCB0YXNrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2spXG5cblxuICAgICAgICAgICAgcHJvamVjdC5hZGRUYXNrVG9Qcm9qZWN0KHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAgICAgLy8gQ2hlY2sgdGhlIG51bWJlciBvZiBwcm9qZWN0c1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gXCJcIlxuXG4gICAgICAgICAgICBpZiAocHJvamVjdHMubGVuZ3RoID09IDAgKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gXCJlbXB0eVwiO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IFwibm90IGVtcHR5XCJcblxuICAgICAgICAgICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuICAgICAgICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdEJ0bicpKTtcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKysgKXtcblxuICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgIFxuXG4gICAgcmV0dXJuIHsgc3RvcmUsIHJlbW92ZSwgc2VsZWN0LCBhZGRUYXNrLCBjaGVjayB9O1xufSkoKVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuLy8gRXhwb3J0XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCB7IG1hbmFnZVByb2plY3RzLCBjcmVhdGUgfTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gSW1wb3J0XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlLCBtYW5hZ2VQcm9qZWN0cyB9IGZyb20gJy4vZnVuY3Rpb24uanMnO1xuaW1wb3J0IHsgZGlhbG9nRnVuY3Rpb25zIH0gZnJvbSAnLi9kaWFsb2cuanMnO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi9kb20uanMnO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmNvbnN0IHByb2plY3RBc3NlbWJseSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBmdW5jdGlvbiBwcm9qZWN0QXNzZW1ibHlLaXQgKG5hbWUpIHtcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBjb25zdCBjcmVhdGVkUHJvamVjdCA9IGNyZWF0ZS5wcm9qZWN0KG5hbWUpO1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAvLyBTdG9yZSB0aGUgcHJvamVjdCBpbiBhbiBhcnJheVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIG1hbmFnZVByb2plY3RzLnN0b3JlKGNyZWF0ZWRQcm9qZWN0KTtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgLy8gQ3JlYXRlIHByb2plY3QgZGl2IGFuZCBwcm9qZWN0IGJ1dHRvbnNcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBkb20uY3JlYXRlUHJvamVjdERpdihjcmVhdGVkUHJvamVjdCk7XG4gICAgZG9tLmNyZWF0ZVByb2plY3RzQnRucyhjcmVhdGVkUHJvamVjdCk7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuICAgIC8vIFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcHJvamVjdEFzc2VtYmx5S2l0IH1cblxuICAgIH0pKClcblxuXG5cblxuLy8gRmFjdG9yeSBmdW5jdGlvblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgZXhlY3V0ZSA9IChmdW5jdGlvbiAoKSB7XG5cblxuICAgIC8vIFZhcmlhYmxlc1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RCdG5cIik7XG4gICAgY29uc3QgbmV3VG9Eb0xpc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1RvRG9MaXN0QnRuXCIpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuICAgIGNvbnN0IGNsb3NlRGlhbG9nQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZURpYWxvZ1wiKTtcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgLy8gQnV0dG9uIHRoYXQgY3JlYXRlcyBhIG5ldyBwcm9qZWN0XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIC8vIE5hbWUgYSBwcm9qZWN0XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBjb25zdCBuYW1lID0gcHJvbXB0KFwiTmFtZSB5b3VyIHByb2plY3RcIik7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4gICAgLy8gQ3JlYXRlIHByb2plY3RcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHByb2plY3RBc3NlbWJseS5wcm9qZWN0QXNzZW1ibHlLaXQobmFtZSk7XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIH0pXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgXG4gICAgXG4gICAgXG5cbiAgICAvLyBCdXR0b24gdGhhdCBzaG93cyB0aGUgZGlhbG9nXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbmV3VG9Eb0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFxuXG4gICAgICAgIC8vIFNob3cgdGhlIGRpYWxvZ1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgZGlhbG9nRnVuY3Rpb25zLnNob3dEaWFsb2coKTtcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuICAgICAgXG4gICAgICAgIFxuICAgIH0pXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuICAgIC8vIEJ1dHRvbiB0aGF0IGNyZWF0ZXMgYSB0YXNrXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgLy8gQ3JlYXRlIGEgZGVmYXVsdCBwcm9qZWN0IFxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gbWFuYWdlUHJvamVjdHMuY2hlY2soKTtcblxuICAgICAgICBpZiAobGVuZ3RoID09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IFwiZGVmYXVsdFwiO1xuXG4gICAgICAgICAgICBwcm9qZWN0QXNzZW1ibHkucHJvamVjdEFzc2VtYmx5S2l0KG5hbWUpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuICAgICAgICAvLyBDcmVhdGUgYSB0YXNrLy9cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcblxuICAgICAgICBjb25zdCBjcmVhdGVkVGFzayA9IGNyZWF0ZS50YXNrKHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAgICAgLy8gQ2xhcmlmeSBzZWxlY3RlZCBwcm9qZWN0IGFuZCBwcm9qZWN0IGJ1dHRvblxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBtYW5hZ2VQcm9qZWN0cy5zZWxlY3QoY3JlYXRlZFRhc2spO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gc2VsZWN0ZWRbMF07XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHNlbGVjdGVkWzFdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbilcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIFxuXG4gICAgICAgIC8vIEFkZCB0YXNrIHRvIHByb2plY3RcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIG1hbmFnZVByb2plY3RzLmFkZFRhc2socHJvamVjdCwgY3JlYXRlZFRhc2spO1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgXG5cbiAgICAgICAgLy8gUmVzZXQgdGhlIHNlbGVjdGVkIGJ1dHRvblxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgZG9tLnVuc2VsZWN0QnV0dG9uKGJ1dHRvbik7XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgZGl2IGZvciB0YXNrXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICBkb20uY3JlYXRlVGFza0RpdihjcmVhdGVkVGFzaywgcHJvamVjdCk7XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIFxuICAgICAgICAvL0Nsb3NlIHRoZSBkaWFsb2dcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIGRpYWxvZ0Z1bmN0aW9ucy5jbG9zZURpYWxvZygpO1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB9KVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAvLyBCdXR0b24gdGhhdCBjbG9zZXMgdGhlIGRpYWxvZ1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGNsb3NlRGlhbG9nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaWFsb2dGdW5jdGlvbnMuY2xvc2VEaWFsb2coKTtcbiAgICB9KVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAvLyBCdXR0b24gdGhhdCByZW1vdmVzIHRoZSBwcm9qZWN0XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgXG5cblxuXG4gICAgfSkoKVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9