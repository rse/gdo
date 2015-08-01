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
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function e(e,r){var t=[],n=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(s){o=!0,u=s}finally{try{!n&&i["return"]&&i["return"]()}finally{if(o)throw u}}return t}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),_toposort=_dereq_("toposort"),_toposort2=_interopRequireDefault(_toposort),GDO=function(){function e(){_classCallCheck(this,e),this.reset()}return _createClass(e,[{key:"reset",value:function(){this._groups=[],this._elements=[]}},{key:"groups",value:function(e){this._groups=e}},{key:"element",value:function(e){this._elements.push(e)}},{key:"order",value:function r(){var e=this,t={};this._elements.forEach(function(e){t[e.name]=!0});var n={},o={},u={},a={},i={};this._groups.forEach(function(e){u[e]=["@@@"+e],t["@@@"+e]=!0});var s=function(e){return"object"==typeof e&&e instanceof Array?e:"string"==typeof e?[e]:[]};this._elements.forEach(function(r){var t=r.name,n=s(r.tag),c=s(r.before),f=s(r.after),l=r.group;if(a[t]=[].concat(c),i[t]=[].concat(f),n.forEach(function(r){var n=e._groups.indexOf(r);if(n>-1)throw new Error('invalid tag (cannot be same name as group): "'+r+'"');void 0===o[r]&&(o[r]=[]),o[r].push(t)}),void 0!==l){var h=e._groups.indexOf(l);if(-1===h)throw new Error('unknown group: "'+l+'"');u[l].push(t),h<e._groups.length-1&&a[t].push(e._groups[h+1]),h>0&&i[t].push(e._groups[h-1])}});var c=function(e,r){e.forEach(function(e){var a=void 0;a=void 0!==o[e]?o[e]:void 0!==u[e]?u[e]:[e],a.forEach(function(e){var o=r(e),u=_slicedToArray(o,2),a=u[0],i=u[1];if(void 0===t[a])throw new Error("unknown element: "+a);if(void 0===t[i])throw new Error("unknown element: "+i);void 0===n[a]&&(n[a]={}),n[a][i]=!0})})};this._elements.forEach(function(e){var r=e.name,t=a[r],n=i[r];c(n,function(e){return[r,e]}),c(t,function(e){return[e,r]})});var f=[];Object.keys(n).forEach(function(e){Object.keys(n[e]).forEach(function(r){f.push([e,r])})});var r=_toposort2["default"].array(Object.keys(t),f).reverse();return r=r.filter(function(e){return!e.match(/^@@@.+/)})}}]),e}();exports["default"]=GDO,module.exports=exports["default"];
},{"toposort":"toposort"}]},{},[1])(1)
});


//# sourceMappingURL=gdo.map