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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


var renderContact = function renderContact() {
  // selectors
  var sel = document.querySelector('#content');
  var contact = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContainer"])('div', 't-box bg-dark-90', 'contact');
  var address = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContainer"])('div', 'info');
  var reserve = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContainer"])('div', 'info');
  var info = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContainer"])('div', 'flex items-flex-end'); // content

  var title = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('h1', null, 'CONTACT');
  var street = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('p', null, '677 Main Street');
  var schedule = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('p', null, 'Every Saturday at 6pm - 9pm');
  var phone = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('p', null, 'Reserves on 555.236.515'); // annex

  sel.append(contact);
  reserve.append(phone);
  address.append(street, schedule);
  info.append(address, reserve);
  contact.append(title, info);
};

/* harmony default export */ __webpack_exports__["default"] = (renderContact);

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: createContent, createContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContent", function() { return createContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContainer", function() { return createContainer; });
var createContent = function createContent(tag, className, text) {
  var element = document.createElement(tag);

  if (text) {
    element.innerHTML = text;
  }

  if (className) {
    element.className = className;
  }

  return element;
};

var createContainer = function createContainer(tag, className, idName) {
  var element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (idName) {
    element.id = idName;
  }

  return element;
};



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


var renderHome = function renderHome() {
  var sel = document.querySelector('#content');
  var home = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContainer"])('div', null, 'home');
  var title = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('h1', 't-box slogan bg-dark-60', 'Enjoy a taste meal in a cozy place!');
  var description = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('p', 'description t-box bg-dark-60', '"Very tasty food, with a friendly staff, in a cozy atmosphere."');
  home.append(title, description);
  sel.append(home);
};

/* harmony default export */ __webpack_exports__["default"] = (renderHome);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_4__);





Object(_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

var sel = function sel(selector) {
  return document.querySelector(selector);
};

sel('#nav-menu').addEventListener('click', function () {
  if (!sel('#menu')) {
    if (sel('#home')) {
      sel('#home').remove();
    }

    if (sel('#contact')) {
      sel('#contact').remove();
    }

    Object(_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
});
sel('#nav-contact').addEventListener('click', function () {
  if (!sel('#contact')) {
    if (sel('#home')) {
      sel('#home').remove();
    }

    if (sel('#menu')) {
      sel('#menu').remove();
    }

    Object(_contact__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
});
sel('#nav-home').addEventListener('click', function () {
  if (!sel('#home')) {
    if (sel('#contact')) {
      sel('#contact').remove();
    }

    if (sel('#menu')) {
      sel('#menu').remove();
    }

    Object(_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
});

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


var renderMenu = function renderMenu() {
  var sel = document.querySelector('#content'); // menu container

  var menu = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContainer"])('div', 't-box bg-dark-90', 'menu');
  var menuItem1 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContainer"])('div', 'menu-item');
  var menuItem2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContainer"])('div', 'menu-item');
  var menuItem3 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContainer"])('div', 'menu-item'); // menu items

  var item1 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('h1', null, 'PAST');
  var item2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('hr', null, null);
  var item3 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('p', null, 'Pasta that melts in your mouth');
  var item4 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('h1', null, 'LASAGNA');
  var item5 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('hr', null, null);
  var item6 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('p', null, 'The original lasagna recipe from Tibet monks (Very Awesome)');
  var item7 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('h1', null, 'PANIGALE');
  var item8 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('hr', null, null);
  var item9 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('p', null, 'Just a regular panigale'); // annex

  sel.append(menu);
  menuItem1.append(item1, item2, item3);
  menuItem2.append(item4, item5, item6);
  menuItem3.append(item7, item8, item9);
  menu.append(menuItem1, menuItem2, menuItem3);
};

/* harmony default export */ __webpack_exports__["default"] = (renderMenu);

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");


var renderNav = function renderNav() {
  var sel = document.querySelector('#content');
  var nav = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContainer"])('nav');
  var list = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContainer"])('ul', 'flex', 'nav-list');
  var listItem1 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('li', 'pointer', 'Menu');
  var listItem2 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('li', 'pointer', 'Home');
  var listItem3 = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["createContent"])('li', 'pointer', 'Contact');
  listItem1.id = 'nav-menu';
  listItem2.id = 'nav-home';
  listItem3.id = 'nav-contact';
  list.append(listItem1, listItem2, listItem3);
  nav.append(list);
  sel.append(nav);
};

/* harmony default export */ __webpack_exports__["default"] = (renderNav);

/***/ })

/******/ });