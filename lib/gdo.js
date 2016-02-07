/*
**  GDO -- Group- and Dependency-based Ordering
**  Copyright (c) 2015-2016 Ralf S. Engelschall <rse@engelschall.com>
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
"use strict";function _interopRequireDefault(r){return r&&r.__esModule?r:{"default":r}}function _classCallCheck(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var _slicedToArray=function(){function r(r,e){var t=[],n=!0,o=!1,u=void 0;try{for(var i,a=r[Symbol.iterator]();!(n=(i=a.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(f){o=!0,u=f}finally{try{!n&&a["return"]&&a["return"]()}finally{if(o)throw u}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return r(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol?"symbol":typeof r},_createClass=function(){function r(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),_toposort=_dereq_("toposort"),_toposort2=_interopRequireDefault(_toposort),GDO=function(){function r(){_classCallCheck(this,r),this.reset()}return _createClass(r,[{key:"reset",value:function(){this._groups=[],this._elements=[]}},{key:"groups",value:function(r){this._groups=r}},{key:"element",value:function(r){this._elements.push(r)}},{key:"order",value:function(){var r=this,e={};this._elements.forEach(function(r){e[r.name]=!0});var t={},n={},o={},u={},i={};this._groups.forEach(function(r){o[r]=["@@@"+r],e["@@@"+r]=!0});var a=function(r){return"object"===("undefined"==typeof r?"undefined":_typeof(r))&&r instanceof Array?r:"string"==typeof r?[r]:[]};this._elements.forEach(function(e){var t=e.name,f=a(e.tag),c=a(e.before),s=a(e.after),l=e.group;if(u[t]=[].concat(c),i[t]=[].concat(s),f.forEach(function(e){var o=r._groups.indexOf(e);if(o>-1)throw new Error('invalid tag (cannot be same name as group): "'+e+'"');void 0===n[e]&&(n[e]=[]),n[e].push(t)}),void 0!==l){var p=r._groups.indexOf(l);if(-1===p)throw new Error('unknown group: "'+l+'"');o[l].push(t),p<r._groups.length-1&&u[t].push(r._groups[p+1]),p>0&&i[t].push(r._groups[p-1])}});var f=function(r,u){r.forEach(function(r){var i=void 0;i=void 0!==n[r]?n[r]:void 0!==o[r]?o[r]:[r],i.forEach(function(r){var n=u(r),o=_slicedToArray(n,2),i=o[0],a=o[1];if(void 0===e[i])throw new Error("unknown element: "+i);if(void 0===e[a])throw new Error("unknown element: "+a);void 0===t[i]&&(t[i]={}),t[i][a]=!0})})};this._elements.forEach(function(r){var e=r.name,t=u[e],n=i[e];f(n,function(r){return[e,r]}),f(t,function(r){return[r,e]})});var c=[];Object.keys(t).forEach(function(r){Object.keys(t[r]).forEach(function(e){c.push([r,e])})});var s=_toposort2["default"].array(Object.keys(e),c).reverse();return s=s.filter(function(r){return!r.match(/^@@@.+/)})}}]),r}();module.exports=GDO;
},{"toposort":"toposort"}]},{},[1])(1)
});


//# sourceMappingURL=gdo.map