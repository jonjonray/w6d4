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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


const Router = __webpack_require__(1);
const Compose = __webpack_require__(2);
const Inbox = __webpack_require__(3);
const Sent = __webpack_require__(4);


let routes = {
  compose: new Compose,
  inbox: new Inbox,
  sent: new Sent
};

document.addEventListener("DOMContentLoaded", () =>{

  let content = document.querySelector(".content");
  const newRouter = new Router(content,routes);
  newRouter.start();

  let navItems = Array.from(document.querySelectorAll(".sidebar-nav  li"));
  //nav items is a collection of html elements of tag li and class .sidebar-nav
  navItems.forEach(navItem => {
    navItem.addEventListener("click",() => {
      let name = navItem.innerText.toLowerCase();
      window.location.hash = name;
    });
  });



});


/***/ }),
/* 1 */
/***/ (function(module, exports) {


class Router{
  constructor (node,routes){
    this.node = node;
    this.routes = routes;
  }

  start(){

    this.render();

    window.addEventListener('hashchange', ()  => {
      this.render();
    });
  }

  activeRoute(){
    let frag = window.location.hash.slice(1);
    let component = this.routes[frag];
    return component;
  }

  render(){
    this.node.innerHTML = "";
    let route = this.activeRoute();
    if (route) {
      this.node.appendChild(route.render());
    }
  }
}

module.exports = Router;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

class Compose {

}


module.exports = Compose;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Inbox{
  constructor(){
  }

  render(){
    let list = document.createElement("ul");
    list.className = "messages";
    list.innerHTML = "An inbox message";
    return list;
  }
}

module.exports = Inbox;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

class Sent {

}

module.exports = Sent;


/***/ })
/******/ ]);