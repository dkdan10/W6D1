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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst {inherits, randomVec, scale} = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\nconst CONSTANT = {\n  COLOR: \"red\",\n  RADIUS: 13\n}\nfunction Asteroid (options) {\n  options.col = options.col || CONSTANT.COLOR;\n  options.rad = options.rad || CONSTANT.RADIUS;\n  options.vel = randomVec(15);\n  MovingObject.call(this, options);\n}\n\ninherits(Asteroid, MovingObject);\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\nwindow.MovingObject = MovingObject;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext('2d');\n\n\n  let movingO = new MovingObject(\n    { pos: [30, 30], vel: [10, 10], rad: 30, col: \"#00FF00\" }\n  );\n\n  movingO.draw(ctx);\n  let asty = new Asteroid({ pos: [800, 450], col: \"purple\" });\n\n  asty.dif = 5\n  asty.grow = function () {\n    this.rad += this.dif\n    if (this.rad > 300) {\n      this.dif = -5;\n    } else if (this.rad < 20) {\n      this.dif = 5;\n    }\n  }\n  asty.changeColor = 0;\n  asty.currentColor = getRandomColor();\n  asty.draw  = function (ctx) {\n    if (this.changeColor === 10) {\n      this.changeColor = 0;\n      this.currentColor = getRandomColor();\n    }\n    ctx.fillStyle = this.currentColor;\n    this.changeColor += 1;\n    ctx.beginPath();\n\n    ctx.arc(\n      this.pos[0],\n      this.pos[1],\n      this.rad,\n      0,\n      2 * Math.PI,\n      false\n    );\n    ctx.fill();\n    \n    ctx.fillStyle = \"white\";\n    ctx.font = `${this.rad / 2}px Arial`;\n    ctx.textAlign = \"center\";\n    if (this.rad > 150) {\n      ctx.fillText(\"Big Asty\", this.pos[0], this.pos[1]);\n      ctx.strokeText(\"Big Asty\", this.pos[0], this.pos[1]);\n    } else {\n      ctx.fillText(\"Lil Asty\", this.pos[0], this.pos[1]);\n      ctx.strokeText(\"Lil Asty\", this.pos[0], this.pos[1]);\n    }\n\n  }\n\n  const asties = []\n  for (let i = 0; i < 500; i++) {\n    asties.push(new Asteroid({ pos: [750, 450] }));\n  }\n\n  setInterval(() => {\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0,0,1500,900);\n    movingO.move()\n    asty.move()\n    asties.forEach(ast => {\n      ast.move()\n      ast.draw(ctx)\n    })\n    asty.grow();\n    asty.draw(ctx)\n    movingO.draw(ctx);\n  }, 10);\n})\n\nfunction getRandomColor() {\n  var letters = '0123456789ABCDEF';\n  var color = '#';\n  for (var i = 0; i < 6; i++) {\n    color += letters[Math.floor(Math.random() * 16)];\n  }\n  return color;\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const {inherits} = require('./utils.js')\nfunction MovingObject(option) {\n  this.pos = option.pos;\n  this.vel = option.vel;\n  this.rad = option.rad;\n  this.col = option.col;\n}\n MovingObject.prototype.draw = function(ctx) {\n   ctx.fillStyle = this.col;\n   ctx.beginPath();\n\n   ctx.arc(\n     this.pos[0],\n     this.pos[1],\n     this.rad,\n     0,\n     2 * Math.PI,\n     false\n   );\n\n   ctx.fill();\n }\n\n MovingObject.prototype.move = function() {\n   this.pos[0] += this.vel[0]\n   this.pos[1] += this.vel[1]\n   if (this.pos[1] > 900) {\n     this.pos[1] = 0;\n   } else if (this.pos[1] < 0) {\n     this.pos[1] = 900;\n   } \n   if (this.pos[0] > 1500) {\n     this.pos[0] = 0;\n   } else if (this.pos[0] < 0) {\n     this.pos[0] = 1500;\n   }\n }\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype)\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });