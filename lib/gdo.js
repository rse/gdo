/*
**  GDO -- Group- and Dependency-based Ordering
**  Copyright (c) 2015 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GDO = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _typeof(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var _slicedToArray=function(){function e(e,r){var n=[],t=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(t=(i=a.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(f){o=!0,u=f}finally{try{!t&&a["return"]&&a["return"]()}finally{if(o)throw u}}return n}return function(r,n){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),_toposort=_dereq_("toposort"),_toposort2=_interopRequireDefault(_toposort),GDO=function(){function e(){_classCallCheck(this,e),this.reset()}return _createClass(e,[{key:"reset",value:function(){this._groups=[],this._elements=[]}},{key:"groups",value:function(e){this._groups=e}},{key:"element",value:function(e){this._elements.push(e)}},{key:"order",value:function(){var e=this,r={};this._elements.forEach(function(e){r[e.name]=!0});var n={},t={},o={},u={},i={};this._groups.forEach(function(e){o[e]=["@@@"+e],r["@@@"+e]=!0});var a=function(e){return"object"===("undefined"==typeof e?"undefined":_typeof(e))&&e instanceof Array?e:"string"==typeof e?[e]:[]};this._elements.forEach(function(r){var n=r.name,f=a(r.tag),c=a(r.before),s=a(r.after),l=r.group;if(u[n]=[].concat(c),i[n]=[].concat(s),f.forEach(function(r){var o=e._groups.indexOf(r);if(o>-1)throw new Error('invalid tag (cannot be same name as group): "'+r+'"');void 0===t[r]&&(t[r]=[]),t[r].push(n)}),void 0!==l){var h=e._groups.indexOf(l);if(-1===h)throw new Error('unknown group: "'+l+'"');o[l].push(n),h<e._groups.length-1&&u[n].push(e._groups[h+1]),h>0&&i[n].push(e._groups[h-1])}});var f=function(e,u){e.forEach(function(e){var i=void 0;i=void 0!==t[e]?t[e]:void 0!==o[e]?o[e]:[e],i.forEach(function(e){var t=u(e),o=_slicedToArray(t,2),i=o[0],a=o[1];if(void 0===r[i])throw new Error("unknown element: "+i);if(void 0===r[a])throw new Error("unknown element: "+a);void 0===n[i]&&(n[i]={}),n[i][a]=!0})})};this._elements.forEach(function(e){var r=e.name,n=u[r],t=i[r];f(t,function(e){return[r,e]}),f(n,function(e){return[e,r]})});var c=[];Object.keys(n).forEach(function(e){Object.keys(n[e]).forEach(function(r){c.push([e,r])})});var s=_toposort2["default"].array(Object.keys(r),c).reverse();return s=s.filter(function(e){return!e.match(/^@@@.+/)})}}]),e}();module.exports=GDO;
},{"toposort":"toposort"}]},{},[1])(1)
});


//# sourceMappingURL=gdo.map